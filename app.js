(() => {
  const WA = "5493515643433";
  const TZ = "America/Argentina/Cordoba";
  const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  // Horario y grilla publicados en Instagram / Google (hh * 60 + mm)
  const t = (h, m = 0) => h * 60 + m;
  const WEEK = [t(7, 30), t(12)], AFTER = [t(15, 30), t(22)];
  const OPEN = { 0: [], 1: [WEEK, AFTER], 2: [WEEK, AFTER], 3: [WEEK, AFTER], 4: [WEEK, AFTER], 5: [WEEK, AFTER], 6: [[t(9), t(12)]] };
  const CLASSES = {
    1: [["Boxeo", t(17, 30), 60], ["Funcional", t(18, 30), 60]],
    2: [["Karate", t(19), 60], ["Muay Thai", t(20), 60]],
    3: [["Boxeo", t(17, 30), 60], ["Funcional", t(18, 30), 60]],
    4: [["Karate", t(19), 60], ["Muay Thai", t(20), 60]],
    5: [["Funcional", t(18, 30), 60]],
  };

  const fmt = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;
  const span = (min) => {
    const h = Math.floor(min / 60), m = min % 60;
    return h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min`;
  };

  function nowCordoba() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
    const get = (k) => parts.find((p) => p.type === k).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: t(+get("hour"), +get("minute")) };
  }

  /* ---------- live status: light is the state ---------- */
  const stateEl = document.querySelector("[data-status-state]");
  const trendEl = document.querySelector("[data-status-trend]");

  function nextOpening(day, min) {
    for (let i = 0; i < 8; i++) {
      const d = (day + i) % 7;
      const slot = OPEN[d].find(([o]) => i > 0 || o > min);
      if (slot) return { d, open: slot[0], wait: i * 1440 + slot[0] - min };
    }
  }

  function updateStatus() {
    const { day, min } = nowCordoba();
    const slot = OPEN[day].find(([o, c]) => min >= o && min < c);
    document.body.classList.toggle("is-open", !!slot);
    document.body.classList.toggle("is-closed", !slot);
    if (slot) {
      stateEl.textContent = "Abierto ahora";
      let trend = `Cierra ${fmt(slot[1])} · en ${span(slot[1] - min)}`;
      const next = (CLASSES[day] || []).find(([, s]) => s > min && s - min <= 180);
      if (next) trend += ` · ${next[0]} ${fmt(next[1])}`;
      trendEl.textContent = trend;
    } else {
      const n = nextOpening(day, min);
      stateEl.textContent = "Cerrado ahora";
      const when = n.d === day ? "hoy" : n.d === (day + 1) % 7 ? "mañana" : `el ${DAY_NAMES[n.d]}`;
      trendEl.textContent = `Abre ${when} a las ${fmt(n.open)} · en ${span(n.wait)}`;
    }
  }

  /* ---------- corriente del día ---------- */
  const svg = document.querySelector("[data-line]");
  const labels = document.querySelector("[data-line-labels]");
  const summary = document.querySelector("[data-line-summary]");
  const figure = svg && svg.closest(".line");
  const chips = document.querySelector("[data-line-classes]");
  const scroller = document.querySelector("[data-line-scroll]");
  const tabs = [...document.querySelectorAll(".days [data-day]")];
  const START = t(7), END = t(22, 30), W = 1000;
  const X = (min) => ((min - START) / (END - START)) * W;
  const Y_OFF = 206, Y_ON = 150, NS = "http://www.w3.org/2000/svg";

  function el(name, attrs) {
    const n = document.createElementNS(NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function drawDay(day) {
    const now = nowCordoba();
    svg.textContent = ""; labels.textContent = "";
    svg.appendChild(el("path", { d: `M0 ${Y_OFF} H${W}`, class: "seg-off", fill: "none", "stroke-width": 2 }));

    OPEN[day].forEach(([o, c]) => {
      const p = el("path", { d: `M${X(o)} ${Y_OFF} V${Y_ON} H${X(c)} V${Y_OFF}`, class: "seg-on", fill: "none", "stroke-width": 4, "stroke-linejoin": "miter" });
      svg.appendChild(p);
    });

    (CLASSES[day] || []).forEach(([name, s, dur], i) => {
      const x0 = X(s), w = X(s + dur) - x0;
      const d = `M${x0} ${Y_ON} L${x0 + w * .38} 72 L${x0 + w * .5} 116 L${x0 + w * .72} 58 L${x0 + w} ${Y_ON}`;
      const spark = el("path", { d, class: "spark", fill: "none", stroke: "#e4231b", "stroke-width": 5, "stroke-linejoin": "miter" });
      spark.style.setProperty("--d", `${.45 + i * .18}s`);
      svg.appendChild(spark);
      const lab = document.createElement("span");
      lab.className = "peak";
      lab.style.left = `${((x0 + w * .55) / W) * 100}%`;
      lab.style.top = `${i % 2 ? 2 : 11}%`;
      lab.innerHTML = `${name}<small>${fmt(s)}</small>`;
      labels.appendChild(lab);
    });

    for (let h = 8; h <= 22; h += 2) {
      const s = document.createElement("span");
      s.style.left = `${(X(t(h)) / W) * 100}%`;
      s.style.bottom = "3%";
      s.className = (h - 8) % 4 ? "hr hr--minor" : "hr";
      s.textContent = `${h}:00`;
      labels.appendChild(s);
    }

    if (day === now.day && now.min >= START && now.min <= END) {
      svg.appendChild(el("path", { d: `M${X(now.min)} 0 V240`, stroke: "#e4231b", "stroke-width": 2, "stroke-dasharray": "6 5", fill: "none" }));
      const n = document.createElement("span");
      n.className = "now";
      n.style.left = `${(X(now.min) / W) * 100}%`;
      n.style.top = "62%";
      n.textContent = `Ahora ${fmt(now.min)}`;
      labels.appendChild(n);
    }

    svg.querySelectorAll(".seg-on, .spark").forEach((p) => p.style.setProperty("--len", Math.ceil(p.getTotalLength())));
    figure.classList.remove("is-drawing"); void figure.offsetWidth; figure.classList.add("is-drawing");

    chips.innerHTML = (CLASSES[day] || []).map(([n, s]) => `<li>${n}<small>${fmt(s)}</small></li>`).join("");

    // on narrow screens the plot scrolls: bring the live cursor or the first class into view
    const focusMin = day === now.day && now.min >= START && now.min <= END ? now.min : ((CLASSES[day] || [])[0] || [, OPEN[day][0] ? OPEN[day][0][0] : START])[1];
    const plot = scroller.firstElementChild;
    scroller.scrollLeft = Math.max(0, (X(focusMin) / W) * plot.offsetWidth - scroller.clientWidth / 2);

    const name = DAY_NAMES[day][0].toUpperCase() + DAY_NAMES[day].slice(1);
    const open = OPEN[day].map(([o, c]) => `${fmt(o)} a ${fmt(c)}`).join(" y de ");
    const cls = (CLASSES[day] || []).map(([n, s]) => `${n} ${fmt(s)}`).join(" · ");
    summary.innerHTML = open
      ? `<strong>${name}:</strong> abierto de ${open} hs.${cls ? ` Clases: ${cls}.` : " Sala de musculación libre."}`
      : `<strong>${name}:</strong> cerrado. Volvemos el lunes a las 7:30.`;
  }

  function selectDay(day, focus) {
    tabs.forEach((b) => {
      const on = +b.dataset.day === day;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    drawDay(day);
  }

  if (svg) {
    const today = nowCordoba().day;
    tabs.forEach((b) => {
      if (+b.dataset.day === today) b.classList.add("is-today");
      b.addEventListener("click", () => selectDay(+b.dataset.day));
      b.addEventListener("keydown", (e) => {
        const i = tabs.indexOf(b);
        const j = e.key === "ArrowRight" ? (i + 1) % tabs.length : e.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length : -1;
        if (j > -1) { e.preventDefault(); selectDay(+tabs[j].dataset.day, true); }
      });
    });
    selectDay(today);
  }

  /* ---------- WhatsApp links with prefilled text ---------- */
  const waUrl = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waUrl(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* ---------- armá tu mensaje ---------- */
  const form = document.querySelector("[data-builder]");
  const preview = document.querySelector("[data-preview]");
  function message() {
    const f = new FormData(form);
    const name = (f.get("nombre") || "").toString().trim();
    const act = f.get("act"), turno = f.get("turno");
    return `¡Hola Quantum! ${name ? `Soy ${name}. ` : ""}Quiero info de ${act}${turno ? ` para entrenar ${turno}` : ""}. ¿Me pasan planes y promos del mes?`;
  }
  if (form) {
    const render = () => { preview.textContent = message(); };
    form.addEventListener("input", render);
    form.addEventListener("change", render);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      window.open(waUrl(message()), "_blank", "noopener");
    });
    render();
  }

  /* ---------- nav ---------- */
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open);
    menu.classList.toggle("is-open", open);
    nav.classList.add("is-solid");
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); menu.classList.remove("is-open"); }
  });

  // the floating WhatsApp button stays out of the way while the hero's own CTA is visible
  const hero = document.querySelector(".hero");
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => document.body.classList.toggle("hero-in-view", e.intersectionRatio > .35), { threshold: [0, .35, 1] }).observe(hero);
  }

  document.querySelectorAll("[data-year]").forEach((n) => { n.textContent = new Date().getFullYear(); });

  updateStatus();
  setInterval(updateStatus, 30000);
})();
