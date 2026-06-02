/* =============================================================================
 * <price-table> / <wix-default-custom-element> — secțiunea de prețuri
 * Pregatire Rezidentiat. Wix Custom Element (Server URL source).
 * Date REALE incluse ca DEFAULT; pot fi suprascrise din CMS prin atributul `prices`.
 * ========================================================================== */

const DEFAULT_DATA = [
  { card: 1, titlu: 'Pregatire in 12 luni', pretLunar: '2.304,17 lei/luna' },
  { card: 1, titlu: 'Pregatire in 11 luni', pretLunar: '2.513,64 lei/luna' },
  { card: 1, titlu: 'Pregatire in 10 luni', pretLunar: '2.765 lei/luna' },
  { card: 1, titlu: 'Pregatire in 9 luni',  pretLunar: '3.072,22 lei/luna' },
  { card: 1, titlu: 'Pregatire in 8 luni',  pretLunar: '3.456,25 lei/luna' },
  { card: 1, titlu: 'Pregatire in 7 luni',  pretLunar: '3.950 lei/luna' },
  { card: 1, titlu: 'Pregatire in 6 luni',  pretLunar: '4.608,33 lei/luna' },
  { card: 1, titlu: 'Pregatire in 5 luni',  pretLunar: '5.530 lei/luna' },
  { card: 1, titlu: 'Pregatire in 4 luni',  pretLunar: '6.912,50 lei/luna' },
  { card: 1, titlu: 'Pregatire in 3 luni',  pretLunar: '9.216,67 lei/luna' },
  { card: 1, titlu: 'Pregatire in 2 luni',  pretLunar: '13.825 lei/luna' },
  { card: 2, titlu: 'Pregatire in 12 luni', pretLunar: '3.062,50 lei/luna' },
  { card: 2, titlu: 'Pregatire in 11 luni', pretLunar: '3.340,91 lei/luna' },
  { card: 2, titlu: 'Pregatire in 10 luni', pretLunar: '3.675 lei/luna' },
  { card: 2, titlu: 'Pregatire in 9 luni',  pretLunar: '4.083,33 lei/luna' },
  { card: 2, titlu: 'Pregatire in 8 luni',  pretLunar: '4.593,75 lei/luna' },
  { card: 2, titlu: 'Pregatire in 7 luni',  pretLunar: '5.250 lei/luna' },
  { card: 2, titlu: 'Pregatire in 6 luni',  pretLunar: '6.125 lei/luna' },
  { card: 2, titlu: 'Pregatire in 5 luni',  pretLunar: '7.350 lei/luna' },
  { card: 2, titlu: 'Pregatire in 4 luni',  pretLunar: '9.187,50 lei/luna' },
  { card: 2, titlu: 'Pregatire in 3 luni',  pretLunar: '12.250 lei/luna' },
  { card: 2, titlu: 'Pregatire in 2 luni',  pretLunar: '18.375 lei/luna' },
  { card: 3, titlu: 'Pregatire in 24 luni', pretLunar: '2.172,92 lei/luna' },
  { card: 3, titlu: 'Pregatire in 23 luni', pretLunar: '2.267,39 lei/luna' },
  { card: 3, titlu: 'Pregatire in 22 luni', pretLunar: '2.370,45 lei/luna' },
  { card: 3, titlu: 'Pregatire in 21 luni', pretLunar: '2.483,33 lei/luna' },
  { card: 3, titlu: 'Pregatire in 20 luni', pretLunar: '2.607,50 lei/luna' },
  { card: 3, titlu: 'Pregatire in 19 luni', pretLunar: '2.744,74 lei/luna' },
  { card: 3, titlu: 'Pregatire in 18 luni', pretLunar: '2.897,22 lei/luna' },
  { card: 3, titlu: 'Pregatire in 17 luni', pretLunar: '3.067,65 lei/luna' },
  { card: 3, titlu: 'Pregatire in 16 luni', pretLunar: '3.259,38 lei/luna' },
  { card: 3, titlu: 'Pregatire in 15 luni', pretLunar: '3.476,67 lei/luna' },
  { card: 3, titlu: 'Pregatire in 14 luni', pretLunar: '3.725 lei/luna' },
];

const META = {
  1: {
    title: 'Focus 2x',
    badge: '',
    desc: 'Program echilibrat, cu structură clară pe capitole, întâlniri individuale periodice și taskuri precise — recuperezi golurile și ajungi la un nivel competitiv înainte de examen.',
    stats: [{ i: '🎯', t: '79 ședințe individuale' }, { i: '🔄', t: '2 treceri prin materie' }],
  },
  2: {
    title: 'Boost 3x',
    badge: 'Cel mai ales 🧠',
    desc: 'Program intensiv pentru cei care vor maximum din timpul rămas. Plan eficient, cu monitorizare individuală, ca să nu pierzi niciun minut de învățat.',
    stats: [{ i: '🎯', t: '105 ședințe individuale' }, { i: '🔄', t: '3 treceri prin materie' }],
  },
  3: {
    title: 'Ascensiune',
    badge: '',
    desc: 'Program pe termen lung pentru studenți de an 4–5 care vor să ajungă la examen fără panică. Temelie construită din timp, cu ritm adaptat facultății și ghidaj individual.',
    stats: [{ i: '🎯', t: '149 ședințe individuale' }, { i: '🔄', t: '4 treceri prin materie' }],
  },
};

// CTA — WhatsApp-ul afișat pe site (hero): 0771 108 786
const WA = 'https://wa.me/40771108786';

function parsePrice(s) {
  if (!s) return Infinity;
  const m = String(s).replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
  const n = parseFloat(m);
  return isNaN(n) ? Infinity : n;
}
function monthsOf(titlu) { const m = String(titlu).match(/(\d+)\s*luni/i); return m ? Number(m[1]) : 0; }
function roLei(n) { try { return Number(n).toLocaleString('ro-RO'); } catch (e) { return String(n); } }

class PriceTable extends HTMLElement {
  static get observedAttributes() { return ['prices', 'titles', 'featured', 'bg', 'cta']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._active = 1;
    this._recenter = this._recenter.bind(this);
  }
  connectedCallback() {
    this.render();
    // The element may be placed off-centre inside a fixed Wix grid cell / legacy
    // section. Centre our content to the viewport regardless of the host's offset.
    window.addEventListener('resize', this._recenter, { passive: true });
    try { this._ro = new ResizeObserver(this._recenter); this._ro.observe(document.documentElement); } catch (e) {}
    [60, 200, 600, 1500].forEach(t => setTimeout(this._recenter, t));
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this._recenter);
    if (this._ro) { try { this._ro.disconnect(); } catch (e) {} this._ro = null; }
  }
  attributeChangedCallback() { if (this.shadowRoot) this.render(); }

  // Shift our content so it is centred on the viewport even when the host element
  // itself is offset (clamped so the content never spills outside the host box).
  _recenter() {
    if (!this.shadowRoot) return;
    const sec = this.shadowRoot.querySelector('.section');
    const wrap = this.shadowRoot.querySelector('.wrap');
    if (!sec || !wrap) return;
    sec.style.transform = 'none';
    const host = this.getBoundingClientRect();
    const vw = window.innerWidth || document.documentElement.clientWidth;
    if (!host.width || !vw) return;
    const cw = wrap.getBoundingClientRect().width;            // real content width
    const desired = vw / 2 - (host.left + host.width / 2);    // shift to centre on viewport
    const sMin = (cw - host.width) / 2;                       // furthest left w/o clipping
    const sMax = (host.width - cw) / 2;                       // furthest right w/o clipping
    // If the host is narrower than the content there is no slack to move within: leave as-is.
    const shift = (sMin > sMax) ? 0 : Math.max(sMin, Math.min(sMax, desired));
    sec.style.transform = `translateX(${Math.round(shift)}px)`;
  }

  get data() {
    const raw = this.getAttribute('prices');
    if (raw) { try { const v = JSON.parse(raw); if (Array.isArray(v) && v.length) return v; } catch (e) {} }
    return DEFAULT_DATA;
  }
  get titlesOverride() {
    const raw = this.getAttribute('titles');
    if (raw) { try { const v = JSON.parse(raw); if (Array.isArray(v) && v.length) return v; } catch (e) {} }
    return null;
  }
  get featured() { return Number(this.getAttribute('featured') || 2); }
  get ctaHref() { return this.getAttribute('cta') || WA; }
  // implicit transparent — componenta stă în secțiunea roșie existentă a paginii (fără cusături)
  get bg() { return this.getAttribute('bg') || 'transparent'; }

  _cards() {
    const groups = {};
    this.data.forEach(r => { const c = Number(r.card) || 1; (groups[c] = groups[c] || []).push(r); });
    const titles = this.titlesOverride;
    return Object.keys(groups).map(Number).sort((a, b) => a - b).map((c, i) => {
      const rows = groups[c];
      let minIdx = 0, min = Infinity;
      rows.forEach((r, idx) => { const p = parsePrice(r.pretLunar); if (p < min) { min = p; minIdx = idx; } });
      const freq = {};
      rows.forEach(r => { const m = monthsOf(r.titlu), p = parsePrice(r.pretLunar); if (m && isFinite(p)) { const t = Math.round(m * p); freq[t] = (freq[t] || 0) + 1; } });
      const total = Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0];
      const meta = META[c] || {};
      return {
        id: c,
        title: (titles && titles[i]) || meta.title || `Pachet ${c}`,
        badge: meta.badge || '',
        desc: meta.desc || '',
        stats: meta.stats || [],
        rows, minIdx,
        total: total ? roLei(total) : '',
        minMonthly: (rows[minIdx] && rows[minIdx].pretLunar) || '',
        maxMonths: Math.max(...rows.map(r => monthsOf(r.titlu))),
      };
    });
  }

  render() {
    const cards = this._cards();
    const featuredId = this.featured;
    const href = this.ctaHref;
    if (!cards.some(c => c.id === this._active)) this._active = cards[0] ? cards[0].id : 1;

    const pill = (r, hot) => `
      <div class="pill${hot ? ' pill--hot' : ''}">
        ${hot ? `<span class="pill__tag">cea mai bună valoare</span>` : ''}
        <span class="pill__label">${r.titlu || ''}</span>
        <span class="pill__price">${r.pretLunar || ''}</span>
      </div>`;

    const card = (c) => `
      <article class="card${c.id === featuredId ? ' card--featured' : ''}${c.id === this._active ? ' is-active' : ''}" data-card="${c.id}">
        ${c.badge ? `<div class="badge">${c.badge}</div>` : ''}
        <h3 class="title">${c.title}</h3>
        ${c.desc ? `<p class="desc">${c.desc}</p>` : ''}
        <div class="phead">
          ${c.total ? `<div class="phead__total">${c.total} lei <span>total</span></div>` : ''}
          ${c.minMonthly ? `<div class="phead__from">în rate, de la <b>${c.minMonthly}</b></div>` : ''}
        </div>
        <a class="cta" href="${href}" target="_blank" rel="noopener">Vreau acest plan</a>
        <div class="pills-h">toate variantele de plată în rate</div>
        <div class="pills">
          ${c.rows.map((r, idx) => pill(r, idx === c.minIdx)).join('')}
        </div>
        ${c.stats.length ? `<div class="stats">
          ${c.stats.map(s => `<div class="stat"><span class="stat__i">${s.i}</span><span>${s.t}</span></div>`).join('')}
        </div>` : ''}
      </article>`;

    const tabs = `
      <div class="tabs" role="tablist">
        ${cards.map(c => `<button class="tab${c.id === this._active ? ' is-active' : ''}" data-tab="${c.id}">${c.title}</button>`).join('')}
      </div>`;

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        :host{ display:block; width:100%; box-sizing:border-box;
          font-family:'Poppins',system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
        *,*::before,*::after{ box-sizing:border-box; }

        .section{ background:${this.bg}; border-radius:0; padding:30px 18px 22px; width:100%; }
        .wrap{ max-width:1200px; margin:0 auto; }

        .grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch; }

        .card{
          position:relative; display:flex; flex-direction:column;
          background:linear-gradient(165deg,#EEF0FE 0%, #E1E6FB 100%);
          border:1px solid rgba(255,255,255,.55); border-radius:26px;
          padding:30px 22px 24px;
          box-shadow:0 26px 52px rgba(80,15,35,.30);
        }
        .card--featured{
          background:linear-gradient(165deg,#F4F5FF 0%, #E7EBFE 100%);
          box-shadow:0 34px 66px rgba(80,15,35,.42);
          border-color:#C9D0Fb; z-index:2;
        }
        @media(min-width:1001px){ .card--featured{ transform:translateY(-12px) scale(1.04); } }
        .badge{
          position:absolute; top:0; left:50%; transform:translate(-50%,-50%);
          background:linear-gradient(90deg,#2B3CB6,#1E2A86); color:#fff;
          font-size:.82rem; font-weight:600; letter-spacing:.2px; white-space:nowrap;
          padding:9px 24px; border-radius:999px; box-shadow:0 10px 22px rgba(25,35,110,.45); }
        .title{ margin:6px 0 0; text-align:center; font-size:clamp(1.55rem,2.4vw,1.9rem); font-weight:800;
          color:#1E2A78; letter-spacing:.3px; }
        .desc{ margin:10px 2px 16px; text-align:center; font-size:.8rem; line-height:1.55; color:#4A5078; }

        .phead{ text-align:center; padding:16px 10px; margin:2px 0 16px; border-radius:18px;
          background:linear-gradient(180deg,#FFFFFF 0%, #EEF1FF 100%); border:1px solid #D8DDFA; }
        .phead__total{ font-size:clamp(1.6rem,2.6vw,1.95rem); font-weight:800; color:#1E2A78; line-height:1; }
        .phead__total span{ font-size:.8rem; font-weight:600; color:#8389B6; vertical-align:middle; margin-left:2px; }
        .phead__from{ margin-top:7px; font-size:.82rem; color:#5A6090; }
        .phead__from b{ color:#C0263C; font-weight:700; }

        .cta{ display:block; text-align:center; padding:14px 18px; border-radius:999px;
          font:inherit; font-weight:700; font-size:1rem; text-decoration:none; color:#fff;
          background:linear-gradient(90deg,#E4002B,#C0263C);
          box-shadow:0 14px 26px rgba(192,38,60,.42); transition:transform .16s ease, box-shadow .16s ease; }
        .cta:hover{ transform:translateY(-2px); box-shadow:0 18px 32px rgba(192,38,60,.52); }
        .card--featured .cta{ background:linear-gradient(90deg,#2B3CB6,#1E2A86); box-shadow:0 14px 26px rgba(30,40,130,.45); }

        .pills-h{ margin:20px 0 10px; text-align:center; font-size:.72rem; font-weight:600;
          letter-spacing:.4px; text-transform:uppercase; color:#7C82Ae; }
        .pills{ display:flex; flex-direction:column; gap:9px; }
        .pill{ position:relative; text-align:center; padding:9px 14px; border-radius:15px;
          background:linear-gradient(180deg,#E5E8FC 0%, #D2D8F6 100%);
          border:1px solid #C4CBF2; box-shadow:0 5px 12px rgba(40,40,100,.10);
          transition:transform .16s ease, box-shadow .16s ease; }
        .pill:hover{ transform:translateY(-2px); box-shadow:0 10px 20px rgba(40,40,100,.18); }
        .pill__label{ display:block; font-size:.72rem; font-weight:500; color:#3C4488; opacity:.9; }
        .pill__price{ display:block; margin-top:1px; font-size:1.18rem; font-weight:700; color:#1E2A78; }
        .pill--hot{ background:linear-gradient(180deg,#FBDCE3 0%, #F4C6D1 100%);
          border-color:#EEAEBC; box-shadow:0 8px 18px rgba(180,40,70,.22); padding-top:16px; }
        .pill--hot .pill__label{ color:#B23A53; }
        .pill--hot .pill__price{ color:#C0263C; }
        .pill__tag{ position:absolute; top:-9px; left:50%; transform:translateX(-50%);
          background:#C0263C; color:#fff; font-size:.58rem; font-weight:700; letter-spacing:.3px;
          text-transform:uppercase; padding:3px 10px; border-radius:999px; white-space:nowrap; }

        .stats{ margin-top:auto; padding-top:6px; }
        .stat{ display:flex; align-items:center; gap:10px; padding:12px 6px;
          border-top:1px solid rgba(30,30,90,.13); color:#3C4488; font-size:.82rem; font-weight:500; }
        .stat__i{ font-size:1rem; }

        .tabs{ display:none; gap:8px; margin:0 auto 22px; max-width:560px; }
        .tab{ flex:1; padding:15px 6px; cursor:pointer; font:inherit; font-weight:600; font-size:.85rem;
          color:#fff; background:rgba(255,255,255,.16); border:1px solid rgba(255,255,255,.4);
          border-radius:14px; transition:all .2s ease; }
        .tab.is-active{ color:#C0263C; background:#fff; border-color:#fff; box-shadow:0 8px 18px rgba(0,0,0,.18); }

        /* tablet: 3 -> stacked single column with selector */
        @media (max-width:900px){
          .grid{ grid-template-columns:1fr; gap:0; max-width:520px; margin:0 auto; }
          .tabs{ display:flex; }
          .card{ display:none; }
          .card.is-active{ display:flex; }
          .card--featured{ transform:none; }
          .badge{ position:static; transform:none; display:inline-block; margin:0 auto 12px; }
        }
        @media (max-width:480px){
          .section{ padding:32px 12px 42px; }
          .card{ padding:24px 16px 18px; border-radius:22px; }
          .tab{ font-size:.8rem; padding:15px 4px; }
        }
        @media (max-width:360px){
          .section{ padding:28px 9px 36px; }
          .card{ padding:22px 13px 16px; }
          .phead__total{ font-size:1.55rem; }
          .pill__price{ font-size:1.1rem; }
          .cta{ font-size:.95rem; padding:13px 14px; }
        }
      </style>

      <div class="section">
        <div class="wrap">
          ${tabs}
          <div class="grid">
            ${cards.map(card).join('')}
          </div>
        </div>
      </div>`;

    this.shadowRoot.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => { this._active = Number(btn.dataset.tab); this.render(); });
    });

    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(this._recenter);
    else this._recenter();
  }
}

if (!customElements.get('price-table')) customElements.define('price-table', PriceTable);
if (!customElements.get('wix-default-custom-element')) customElements.define('wix-default-custom-element', class extends PriceTable {});
