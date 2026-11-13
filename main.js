(() => {
  const S = window.SITE || {};
  const $ = (q, r = document) => r.querySelector(q);
  const $$ = (q, r = document) => [...r.querySelectorAll(q)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- basics ---------- */
  $("#year").textContent = new Date().getFullYear();
  if (S.location) { $("#loc-label").textContent = "in " + S.location; $("#fact-loc").textContent = S.location; }
  if (S.photo) {
    const scr = $(".vf-screen");
    scr.innerHTML = `<img class="vf-photo" src="${esc(S.photo)}" alt="Portrait of ${esc(S.name || "")}" />`;
    $(".viewfinder").classList.add("has-photo");
    $(".viewfinder").removeAttribute("aria-hidden");
  }
  if (S.available === false) { $("#status-dot").classList.add("off"); $("#status-text").textContent = "Booked right now"; }

  const tick = () => {
    try {
      $("#local-time").textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: S.timezone || undefined }).format(new Date());
    } catch { $("#local-time").textContent = new Date().toTimeString().slice(0, 5); }
  };
  tick(); setInterval(tick, 15000);

  // viewfinder timecode
  const tc = $("#timecode"); const t0 = performance.now();
  const pad = n => String(n).padStart(2, "0");
  const runTc = now => {
    const ms = Math.max(0, now - t0), f = Math.floor((ms % 1000) / (1000 / 24)), s = Math.floor(ms / 1000);
    tc.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`;
    if (!reduce) requestAnimationFrame(runTc);
  };
  requestAnimationFrame(runTc);

  /* ---------- work ---------- */
  const TYPES = { theme: "WordPress theme", film: "AI film", ad: "Ad / reel", shopify: "Shopify", web: "Website" };
  const POSTERS = {
    theme: "radial-gradient(80% 90% at 85% 15%, #d7ff3c 0%, transparent 55%), radial-gradient(70% 80% at 0% 100%, #2b6bff 0%, transparent 60%), #0c0e12",
    film: "radial-gradient(80% 90% at 20% 20%, #ff5a36 0%, transparent 60%), radial-gradient(70% 80% at 90% 90%, #5b5bff 0%, transparent 60%), #120b14",
    ad: "radial-gradient(80% 70% at 80% 10%, #d7ff3c 0%, transparent 55%), radial-gradient(70% 70% at 10% 100%, #ff3c8e 0%, transparent 60%), #0f1210",
    shopify: "radial-gradient(90% 80% at 10% 10%, #3ddc84 0%, transparent 60%), radial-gradient(60% 70% at 100% 100%, #d7ff3c 0%, transparent 60%), #0b120e",
    web: "radial-gradient(80% 80% at 90% 10%, #5b9bff 0%, transparent 60%), radial-gradient(60% 60% at 0% 100%, #ff5a36 0%, transparent 60%), #0b0d14",
  };
  const ytId = url => {
    const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : null;
  };
  const projects = S.projects || [];
  const grid = $("#work-grid");
  grid.innerHTML = projects.map((p, i) => {
    const tall = p.format === "9:16";
    const size = p.size === "wide" ? "wide" : p.size === "half" ? "half" : "";
    const vid = ytId(p.video);
    const live = vid || p.link;
    const thumb = p.thumb || (vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : "");
    const action = vid
      ? `<button class="card-link" data-video="${vid}" data-vertical="${tall}" aria-label="Play ${esc(p.title)}"></button>`
      : p.link ? `<a class="card-link" href="${esc(p.link)}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)}"></a>` : "";
    return `
      <article class="card reveal ${tall ? "tall" : ""} ${size}" data-type="${esc(p.type)}">
        <div class="card-media">
          ${thumb ? `<img src="${esc(thumb)}" alt="" loading="lazy" />` : `<div class="poster" style="background:${POSTERS[p.type] || POSTERS.film}"><span class="poster-label">${esc(p.poster || TYPES[p.type] || "")}</span></div>`}
          ${thumb ? "" : `<div class="card-badges"><span class="badge">${esc(p.format || "")}</span><span class="badge ${live ? "live" : "soon"}">${live ? esc(p.cta || (vid ? "▶ Watch" : "● Live")) : "In production"}</span></div>`}
          ${vid ? `<span class="play" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>` : ""}
        </div>
        <div class="card-body">
          <div>
            <h3>${esc(p.title)}</h3>
            <p class="card-meta">${esc([TYPES[p.type], p.client, p.tools].filter(Boolean).join(" · "))}</p>
          </div>
          ${live ? `<span class="card-arrow" aria-hidden="true">→</span>` : ""}
        </div>
        ${action}
      </article>`;
  }).join("");
  $("#count-all").textContent = projects.length || "";
  $$(".filters button").forEach(b => {
    const f = b.dataset.filter;
    if (f !== "all" && !projects.some(p => p.type === f)) b.remove();
  });

  $$(".filters button").forEach(btn => btn.addEventListener("click", () => {
    $$(".filters button").forEach(b => b.setAttribute("aria-selected", b === btn));
    const f = btn.dataset.filter;
    $$(".card", grid).forEach(c => c.classList.toggle("hidden", f !== "all" && c.dataset.type !== f));
  }));

  /* ---------- video modal ---------- */
  const modal = $("#modal"), frame = $("#modal-frame");
  const closeModal = () => { frame.innerHTML = ""; modal.close(); };
  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-video]"); if (!b) return;
    modal.classList.toggle("vertical", b.dataset.vertical === "true");
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    modal.showModal();
  });
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  modal.addEventListener("cancel", () => { frame.innerHTML = ""; });

  /* ---------- services ---------- */
  $("#services-list").innerHTML = (S.services || []).map(s => `
    <article class="service reveal">
      <span class="tag">${esc(s.tag)}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.blurb)}</p>
      <ul>${(s.items || []).map(i => `<li>${esc(i)}</li>`).join("")}</ul>
      <p class="price">${s.price ? `Starting at <b>${esc(s.price)}</b>` : "Ask for a quote →"}</p>
    </article>`).join("");

  /* ---------- faq ---------- */
  $("#faq-list").innerHTML = (S.faq || []).map(f => `
    <details class="reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

  /* ---------- contact ---------- */
  const C = S.contact || {};
  const ch = [];
  if (C.whatsapp) ch.push(`<a class="channel" href="https://wa.me/${esc(C.whatsapp)}" target="_blank" rel="noopener"><span><small>WhatsApp · fastest</small><strong>${esc(C.whatsappLabel || "+" + C.whatsapp)}</strong></span><span class="act">Open chat ↗</span></a>`);
  if (C.email) ch.push(`<button class="channel" data-copy="${esc(C.email)}" type="button"><span style="text-align:left"><small>Email</small><strong>${esc(C.email)}</strong></span><span class="act">Copy</span></button>`);
  if ((S.socials || []).length) ch.push(`<div class="socials">${S.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("")}</div>`);
  $("#channels").innerHTML = ch.join("") || `<p class="dim">Contact links coming soon.</p>`;
  $("#channels").addEventListener("click", async e => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); b.querySelector(".act").textContent = "Copied ✓"; }
    catch { location.href = "mailto:" + b.dataset.copy; }
  });

  if (!C.whatsapp) $("#send-wa").remove();
  if (!C.email) $("#send-mail").remove();
  const form = $("#brief-form"), note = $("#form-note");
  if (!C.whatsapp && !C.email) { $(".brief-actions").innerHTML = ""; note.textContent = "The brief form goes live once contact details are added."; }
  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const name = (d.get("name") || "").trim();
    if (!name) { note.textContent = "Please add your name first."; form.name.focus(); return; }
    const text = `Hi ${S.shortName || ""}! I'm ${name}${d.get("brand") ? " from " + d.get("brand") : ""}.\nI need: ${d.getAll("need").join(", ") || "—"}\n\n${d.get("msg") || ""}`;
    const via = e.submitter?.dataset.via || (C.whatsapp ? "whatsapp" : "email");
    if (via === "whatsapp") window.open(`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    else location.href = `mailto:${C.email}?subject=${encodeURIComponent("Project brief — " + name)}&body=${encodeURIComponent(text)}`;
    note.textContent = "Opening your app… I usually reply within a few hours.";
  });

  /* ---------- nav ---------- */
  const nav = $("#nav"); let lastY = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY;
    nav.classList.toggle("hide", y > lastY && y > 400);
    lastY = y;
  }, { passive: true });

  const menuBtn = $(".menu-btn"), menu = $("#mobile-menu");
  const setMenu = open => { menuBtn.setAttribute("aria-expanded", open); menu.hidden = !open; document.body.style.overflow = open ? "hidden" : ""; };
  menuBtn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });

  const links = $$(".nav-links a");
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => spy.observe(s));

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (el.closest(".hero") ? i * 90 : 0) + "ms"; io.observe(el); });

  /* ---------- magnetic buttons ---------- */
  if (!reduce && matchMedia("(pointer: fine)").matches) {
    $$(".magnetic").forEach(b => {
      b.addEventListener("pointermove", e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }
})();
