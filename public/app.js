import { storage } from "./firebase.js";

// Make storage available exactly like your original code expects
window.storage = storage;

// ─── DATA ───────────────────────────────────────────────────────────────────
const REPERTOIRE = {
  "Emmanuel": [
    { song: "Enamorame", artist: "Abel Zavala", key: "G-Major", tier: 1 },
    { song: "Count 'Em", artist: "Brandon Lake", key: "C-Minor", tier: 3 },
    { song: "Faithful Then Faithful Now", artist: "Elevation Worship", key: "Ab-Major", tier: 3 },
    { song: "Lion", artist: "Elevation Worship", key: "E-Major", tier: 3 },
    { song: "Same God", artist: "Elevation Worship", key: "Db-Major", tier: 3 },
    { song: "See A Victory", artist: "Elevation Worship", key: "A-Major", tier: 3 },
    { song: "When Wind Meets Fire", artist: "Elevation Worship", key: "A-Major", tier: 3 },
    { song: "Wont Stop Now", artist: "Elevation Worship", key: "Ab-Major", tier: 3 },
    { song: "El Gran Yo Soy", artist: "En Espiritu Y en Verdad", key: "D-Major", tier: 1 },
    { song: "Resplandecio", artist: "En Espiritu Y en Verdad", key: "B-Major", tier: 1 },
    { song: "Walls", artist: "Gateway Worship", key: "E-Major", tier: 3 },
    { song: "Sinking Deep", artist: "Hillsong Y&F", key: "A-Major", tier: 3 },
    { song: "Hosanna", artist: "Marco Barrientos", key: "D-Major", tier: 1 },
    { song: "Como En El Cielo", artist: "Miel San Marcos", key: "C-Major", tier: 1 },
    { song: "Death Was Arrested", artist: "North Point Worship", key: "Bb-Major", tier: 3 },
    { song: "I Believe", artist: "Phil Wickham", key: "D-Major", tier: 1 }
  ],
  "Oziel": [
    { song: "Holy Forever", artist: "Chris Tomlin", key: "C-Major", tier: 1 },
    { song: "Eres Fiel", artist: "Coalo Zamorano", key: "G-Major", tier: 1 },
    { song: "Jesus Mi Buen Pastor", artist: "Coalo Zamorano", key: "A-Major", tier: 1 },
    { song: "Bendito Jesus", artist: "Danilo Montero", key: "B-Major", tier: 1 },
    { song: "Revelacion", artist: "Danilo Montero", key: "A-Major", tier: 1 },
    { song: "Rattle", artist: "Elevation Worship", key: "Eb-Major", tier: 3 },
    { song: "Vamos A Cantar", artist: "En Espiritu Y En Verdad", key: "D-Major", tier: 1 },
    { song: "I Surrender", artist: "Hillsong Worship", key: "F-Major", tier: 1 },
    { song: "Creo En Ti", artist: "Julio Melgar", key: "D-Major", tier: 1 },
    { song: "Agnus Dei", artist: "Michael W. Smith", key: "A-Major", tier: 1 },
    { song: "Breathe", artist: "Michael W. Smith", key: null, tier: 1 },
    { song: "How Great Thou Art", artist: "Paul Baloche", key: "Bb-Major", tier: 1 },
    { song: "Glorioso Intercambio", artist: "Sovereign Grace", key: "C-Major", tier: 1 },
    { song: "Mi Dios", artist: "Emmanuel y Linda / Grupo Rojo", key: null, tier: 2 },
    { song: "Por Siempre", artist: "Vino Nuevo", key: null, tier: 1 }
  ],
  "Irene": [
    { song: "Lion and the Lamb", artist: "Bethel Music", key: "D-Major", tier: 1 },
    { song: "The King of My Heart", artist: "Bethel Music", key: "A-Major", tier: 2 },
    { song: "Our God", artist: "Chris Tomlin", key: "B-Major", tier: 2 },
    { song: "Eres Mi Amigo Fiel", artist: "Coalo Zamorano", key: "D-Major", tier: 1 },
    { song: "Here As in Heaven", artist: "Elevation Worship", key: "D-Major", tier: 2 },
    { song: "Praise / Alaba", artist: "Elevation Worship", key: "C-Major", tier: 2 },
    { song: "Abre Hoy Los Cielos", artist: "Evan Craft", key: "F-Major", tier: 1 },
    { song: "Oceans", artist: "Evan Craft", key: "D-Major", tier: 1 },
    { song: "Mas Grande", artist: "Gateway Worship", key: "Eb-Major", tier: 2 },
    { song: "Yeshua / Quiero Conocer a Jesus", artist: "Generacion 12", key: "E-Minor", tier: 1 },
    { song: "Anastasis", artist: "Hillsong Worship", key: "E-Major", tier: 2 },
    { song: "Noel", artist: "Hillsong Worship", key: "B-Major", tier: 1 },
    { song: "Praise The Name", artist: "Hillsong Worship", key: "Eb-Major", tier: 2 },
    { song: "What a Beautiful Name It Is", artist: "Hillsong Worship", key: "D-Major", tier: 2 },
    { song: "Vi La Luz", artist: "Hillsong Worship", key: null, tier: 1 },
    { song: "You Are Good", artist: "Israel Houghton", key: "A-Major", tier: 2 },
    { song: "Alabanzas Al Rey", artist: "Marcela Gandara", key: "D-Major", tier: 1 },
    { song: "Abre Hoy Los Cielos", artist: "Marcos Witt", key: "F-Major", tier: 1 },
    { song: "This is Amazing Grace", artist: "Phil Wickham", key: "C-Major", tier: 2 },
    { song: "Al Mundo Paz / Hay Libertad", artist: "Sovereign Grace", key: "G-Major", tier: 1 },
    { song: "El Amor de Cristo", artist: "Sovereign Grace", key: "B-Major", tier: 1 },
    { song: "Surrounded / Rodeado", artist: "Upper Room", key: null, tier: 1 },
    { song: "Glorioso Dia", artist: "Passion", key: null, tier: 2 },
    { song: "Asi Peleo Mis Batallas", artist: "Upper Room / Vida Real", key: null, tier: 2 },
    { song: "No Hay Otro Nombre Igual", artist: "Hillsong Worship", key: null, tier: 1 },
    { song: "El Dios que Adoramos", artist: "Passion", key: null, tier: 2 },
    { song: "Benditos los que Moran en Ti", artist: "—", key: null, tier: 1 },
    { song: "Alabare al Senor", artist: "—", key: null, tier: 2 },
    { song: "En el Nombre de Jesus", artist: "Paz Aguayo", key: "B-Major", tier: 2 },
    { song: "Gracias por la Cruz", artist: "—", key: null, tier: 1 },
    { song: "Dios en Todo Tiempo", artist: "Marcos Witt", key: null, tier: 2 },
    { song: "Hermoso Nombre", artist: "Hillsong Worship", key: null, tier: 2 },
    { song: "Mi Dios", artist: "Grupo Rojo / Emmanuel y Linda", key: null, tier: 2 },
    { song: "Cordero y Leon", artist: "TWICE / Evan Craft (Bethel)", key: null, tier: 2 },
    { song: "Cristo Yo Te Amo", artist: "Vino Nuevo", key: null, tier: 1 },
    { song: "Te Doy Gloria", artist: "En Espiritu y En Verdad", key: null, tier: 1 },
    { song: "Digno", artist: "Marco Barrientos", key: null, tier: 2 },
    { song: "Cuerdas de Amor", artist: "—", key: null, tier: 1 },
    { song: "Rey", artist: "Christine D'Clario", key: null, tier: 2 },
    { song: "Tu Eres Mi Respirar", artist: "Ingrid Rosario", key: null, tier: 1 },
    { song: "Cambie Mis Tristezas", artist: "Ingrid Rosario", key: "F-Major", tier: 1 },
    { song: "Oh Moradora de Sion", artist: "—", key: null, tier: 1 },
    { song: "Tu Mirada", artist: "—", key: null, tier: 1 }
  ],
  "Aude": [
    { song: "Great Are You Lord", artist: "All Sons & Daughters", key: "G-Major", tier: 2 },
    { song: "Ante Tu Altar / Abba Padre", artist: "Averly Morillo", key: "F-Major", tier: 1 },
    { song: "La Bondad De Dios", artist: "Church Of The City", key: "F-Major", tier: 1 },
    { song: "Eres Todopoderoso", artist: "Danilo Montero", key: "D-Major", tier: 1 },
    { song: "Broken Vessels", artist: "Hillsong Worship", key: "E-Major", tier: 2 },
    { song: "Hosanna", artist: "Hillsong Worship", key: "C-Major", tier: 1 },
    { song: "I Surrender", artist: "Hillsong Worship", key: "A-Major", tier: 1 },
    { song: "El Poder De Tu Amor", artist: "Ingrid Rosario", key: null, tier: 1 },
    { song: "Perfume A Tus Pies", artist: "Ingrid Rosario / Jaz Jacob", key: "E-Major", tier: 1 },
    { song: "El Gran Yo Soy", artist: "Julissa", key: "F-Major", tier: 1 },
    { song: "The Power of Your Love", artist: "Lifeway Worship", key: "F-Major", tier: 2 },
    { song: "Way Maker", artist: "Priscilla Quispe", key: "F-Major", tier: 1 },
    { song: "Jesucristo Basta", artist: "Un Corazon / Miel San Marcos", key: "F-Major", tier: 2 },
    { song: "A Ti Me Rindo", artist: "—", key: null, tier: 3 },
    { song: "Somos el Pueblo de Dios", artist: "Marcos Witt", key: "C-Major", tier: 1 },
    { song: "Sobretodo / Over All", artist: "Vino Nuevo / Aline Barros", key: "E-Major", tier: 2 },
    { song: "Vasijas Rotas", artist: "Hillsong Worship", key: "E-Major", tier: 2 },
    { song: "No Me Soltaras", artist: "Rojo", key: "E-Major", tier: 2 },
    { song: "No Hay Lugar Mas Alto", artist: "Miel San Marcos", key: null, tier: 1 },
    { song: "En Totalidad a Ti", artist: "Vino Nuevo", key: null, tier: 1 },
    { song: "Canta al Senor", artist: "Ingrid Rosario", key: null, tier: 1 },
    { song: "El Sacrificio", artist: "—", key: null, tier: 2 },
    { song: "Jesus Senor de la Creacion", artist: "Jesus Adrian Romero", key: null, tier: 1 },
    { song: "La Cosecha", artist: "Marco Barrientos", key: "D-Minor", tier: 1 },
    { song: "Tu Nombre Levantare", artist: "—", key: "D-Major", tier: 1 },
    { song: "Milagroso", artist: "Generacion 12 / Miel San Marcos", key: null, tier: 2 },
    { song: "Grande Eres Dios", artist: "—", key: "G-Major", tier: 1 },
    { song: "Hijo de Dios", artist: "—", key: "E-Major", tier: 1 },
    { song: "Quiero Levantar mis Manos", artist: "—", key: null, tier: 1 },
    { song: "Te Vengo a Decir", artist: "Marcos Witt", key: null, tier: 1 }
  ],
  "Israel": [
    { song: "Danzare", artist: "Averly Morillo", key: "C-Major", tier: 2 },
    { song: "Gratitude", artist: "Brandon Lake", key: "G-Major", tier: 3 },
    { song: "Holy Forever", artist: "Chris Tomlin / Miel San Marcos", key: "C-Major", tier: 1 },
    { song: "How He Loves Us", artist: "Christine D'Clario", key: "Bb-Major", tier: 2 },
    { song: "Oh God", artist: "Citizens", key: "C-Major", tier: 2 },
    { song: "Reckless Love", artist: "Cory Asbury", key: "Gb-Major", tier: 3 },
    { song: "Graves Into Gardens / Tumbas a Jardines", artist: "Elevation Worship", key: "A-Major", tier: 3 },
    { song: "Trust In God", artist: "Elevation Worship", key: null, tier: 3 },
    { song: "Gracia Sublime Es", artist: "Evan Craft / Phil Wickham", key: "Ab-Major", tier: 2 },
    { song: "Make Room", artist: "Influence Music", key: "C-Major", tier: 2 },
    { song: "Glorious Day / Glorioso Dia", artist: "Passion", key: "C#-Major", tier: 3 },
    { song: "This is Amazing Grace", artist: "Phil Wickham", key: "G#-Major", tier: 2 },
    { song: "Levanto un Aleluya / Raise a Hallelujah", artist: "Bethel Music", key: "C-Major", tier: 2 },
    { song: "Mas Grande de lo que Imagino", artist: "La IBI / Gracia Soberana", key: null, tier: 2 },
    { song: "Sumergeme", artist: "Jesus Adrian Romero", key: null, tier: 1 },
    { song: "Tu Mirada", artist: "—", key: null, tier: 1 },
    { song: "Mi Alma Esperara", artist: "—", key: null, tier: 1 },
    { song: "Escuchandote Hablar", artist: "—", key: null, tier: 1 },
    { song: "Amor sin Condicion", artist: "—", key: null, tier: 1 }
  ],
  "Rosario": [
    { song: "Glorioso", artist: "BJ Putnam", key: "D-Major", tier: 2 },
    { song: "Lion and the Lamb", artist: "Bethel Music", key: "C-Major", tier: 1 },
    { song: "Holy Forever", artist: "Chris Tomlin", key: "F-Major", tier: 1 },
    { song: "Bendito Jesus", artist: "Danilo Montero", key: "E-Major", tier: 1 },
    { song: "Has Aumentado", artist: "Danilo Montero", key: "A-Minor", tier: 1 },
    { song: "Revelacion", artist: "Danilo Montero", key: "G-Major", tier: 1 },
    { song: "Do It Again", artist: "Elevation Worship", key: "C-Major", tier: 1 },
    { song: "Infinito Dios", artist: "En Espiritu y En Verdad", key: "E-Major", tier: 2 },
    { song: "En El Monte Calvario", artist: "Himno clásico", key: null, tier: 2 },
    { song: "Soy Libre de Afliccion", artist: "Jesus Adrian Romero", key: "G-Minor", tier: 1 },
    { song: "Sobrenatural", artist: "Marcos Witt", key: "Ab-Major", tier: 2 },
    { song: "Glorius Day", artist: "Passion", key: "F#-Major", tier: 2 },
    { song: "How Great Thou Art", artist: "Paul Baloche", key: "D-Major", tier: 1 },
    { song: "En el Nombre de Jesus", artist: "Paz Aguayo", key: "D-Major", tier: 1 },
    { song: "Te Rescatare", artist: "Priscilla Bueno", key: "E-Major", tier: 2 },
    { song: "Hay Libertad", artist: "Sovereign Grace", key: "G-Major", tier: 1 },
    { song: "Rey De Majestad", artist: "Vertical", key: "D-Major", tier: 2 },
    { song: "En Ti", artist: "Jesus Adrian Romero", key: null, tier: 1 },
    { song: "El Nos Ama / Cuanto El nos Ama", artist: "Christine D'Clario", key: null, tier: 1 },
    { song: "Alaba a Dios", artist: "Danny Berrios", key: "F-Major", tier: 1 },
    { song: "Te Alabo Mi Senor", artist: "—", key: null, tier: 1 },
    { song: "Quiero Cantar una Linda Cancion", artist: "—", key: null, tier: 1 },
    { song: "Lo Haras Otra Vez", artist: "Elevation Worship", key: null, tier: 2 },
    { song: "Santo por Siempre", artist: "Chris Tomlin", key: "E-Major", tier: 2 },
    { song: "No Hay Otro Nombre Igual", artist: "Hillsong Worship", key: null, tier: 1 },
    { song: "Cambie Mi Tristeza", artist: "Ingrid Rosario", key: "F-Major", tier: 1 },
    { song: "Yo Se que Estas Aqui", artist: "—", key: null, tier: 1 },
    { song: "Exaltate", artist: "—", key: null, tier: 1 },
    { song: "Tu Pueblo Dice Gracias", artist: "Jacobo Ramos", key: null, tier: 1 },
    { song: "Cuan Grande es El", artist: "—", key: "F-Major", tier: 1 },
    { song: "Yo Quiero Mas de Ti", artist: "Jaime Murrell", key: "F-Major", tier: 1 },
    { song: "El Poder de Tu Amor", artist: "Ingrid Rosario", key: "F-Major", tier: 1 },
    { song: "Gracia Sublime Es", artist: "Evan Craft / Phil Wickham", key: "D-Major", tier: 2 },
    { song: "Un Siervo para Tu Gloria", artist: "—", key: "A-Major", tier: 1 }
  ]
};

const KEYS = [
  "C-Major","C-Minor","C#-Major","C#-Minor",
  "Db-Major","Db-Minor",
  "D-Major","D-Minor","D#-Major","D#-Minor",
  "Eb-Major","Eb-Minor",
  "E-Major","E-Minor",
  "F-Major","F-Minor","F#-Major","F#-Minor",
  "Gb-Major","Gb-Minor",
  "G-Major","G-Minor","G#-Major","G#-Minor",
  "Ab-Major","Ab-Minor",
  "A-Major","A-Minor","A#-Major","A#-Minor",
  "Bb-Major","Bb-Minor",
  "B-Major","B-Minor"
];

// ─── HELPERS ────────────────────────────────────────────────────────────────
function getWeekKey() {
  const now = new Date();
  const day = now.getDay(); // 0=Sunday
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - day);
  return `cclne_week_${sunday.getFullYear()}_${String(sunday.getMonth()+1).padStart(2,'0')}_${String(sunday.getDate()).padStart(2,'0')}`;
}

function formatWeekLabel(key) {
  const parts = key.replace('cclne_week_','').split('_');
  const d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
  return d.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function getInitials(name) {
  return name.trim().split(' ').filter(Boolean).slice(0,2).map(w => w[0].toUpperCase()).join('');
}

function tierLabel(t) {
  const map = { 1: '🟢 Tier 1', 2: '🟡 Tier 2', 3: '🔴 Tier 3' };
  return map[t] || '';
}

function tierClass(t) {
  return ['','tier1','tier2','tier3'][t] || '';
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// unique ID for a song option (handles duplicates)
function songId(song, artist) {
  return `${song}|||${artist || ''}`;
}

// parse songId back to parts
function parseSongId(id) {
  const [song, artist] = String(id).split("|||");
  return { song, artist };
}

// ─── TABS ───────────────────────────────────────────────────────────────────
function showTab(tab) {
  document.getElementById('tab-submit').classList.toggle('active', tab === 'submit');
  document.getElementById('tab-view').classList.toggle('active', tab === 'view');
  document.getElementById('panel-submit').style.display = tab === 'submit' ? 'block' : 'none';
  document.getElementById('panel-view').style.display = tab === 'view' ? 'block' : 'none';
  if (tab === 'view') loadView();
}
window.showTab = showTab;

// ─── SINGER CHANGE ──────────────────────────────────────────────────────────
let songCount = 0;

function onSingerChange() {
  const singer = document.getElementById('singer-select').value;
  const container = document.getElementById('songs-container');
  const addBtn = document.getElementById('add-btn');

  container.innerHTML = '';
  songCount = 0; // ✅ reset numbering when switching singer

  if (!singer) {
    container.innerHTML = '<div class="hint" id="no-singer-hint">Selecciona tu nombre para ver tus canciones disponibles.</div>';
    addBtn.style.display = 'none';
    return;
  }

  addBtn.style.display = 'block';
  addSongEntry(); // Add first row automatically
}
window.onSingerChange = onSingerChange;

function addSongEntry() {
  const singer = document.getElementById('singer-select').value;
  if (!singer) return;

  const songs = REPERTOIRE[singer] || [];
  const container = document.getElementById('songs-container');

  songCount += 1;

  const entry = document.createElement('div');
  entry.className = 'song-entry';
  entry.dataset.id = String(songCount);

  const songOptions = songs.map(s => {
    const id = songId(s.song, s.artist);
    const label = `${s.song}${s.artist && s.artist !== '—' ? ' — ' + s.artist : ''}`;
    return `<option value="${escapeHtml(id)}" data-key="${escapeHtml(s.key || '')}" data-tier="${escapeHtml(s.tier)}">${escapeHtml(label)}</option>`;
  }).join('');

  const keyOptions = KEYS.map(k => `<option value="${escapeHtml(k)}">${escapeHtml(k)}</option>`).join('');

  const visibleIndex = container.querySelectorAll('.song-entry').length + 1;

  entry.innerHTML = `
    <div class="song-entry-header">
      <span class="song-num">Canción ${visibleIndex}</span>
      <button class="remove-btn" onclick="removeSongEntry(this)" title="Quitar">×</button>
    </div>
    <div class="song-fields">
      <select class="song-select" onchange="onSongSelect(this)">
        <option value="">— Selecciona una canción —</option>
        ${songOptions}
      </select>
      <div class="key-grid">
        <select class="key-select">
          <option value="">— Tonalidad —</option>
          <option value="no-recuerdo">🎵 No recuerdo la tonalidad</option>
          ${keyOptions}
        </select>
        <div class="tier-info"></div>
      </div>
    </div>
  `;

  container.appendChild(entry);
  entry.querySelector('.song-select').focus();
}
window.addSongEntry = addSongEntry;

function onSongSelect(sel) {
  const entry = sel.closest('.song-entry');
  const opt = sel.selectedOptions[0];
  const keySelect = entry.querySelector('.key-select');
  const tierInfo = entry.querySelector('.tier-info');

  if (opt && opt.dataset.key) keySelect.value = opt.dataset.key;
  else keySelect.value = '';

  if (opt && opt.dataset.tier) {
    const t = parseInt(opt.dataset.tier, 10);
    tierInfo.innerHTML = `<span class="tier-badge ${tierClass(t)}">${tierLabel(t)}</span>`;
  } else {
    tierInfo.innerHTML = '';
  }
}
window.onSongSelect = onSongSelect;

function removeSongEntry(btn) {
  const container = document.getElementById('songs-container');
  if (container.children.length > 1) {
    btn.closest('.song-entry').remove();
    Array.from(container.querySelectorAll('.song-num')).forEach((el, i) => {
      el.textContent = `Canción ${i + 1}`;
    });
  }
}
window.removeSongEntry = removeSongEntry;

// ─── STATUS ─────────────────────────────────────────────────────────────────
function showStatus(msg, ok) {
  const el = document.getElementById('submit-status');
  el.textContent = msg;
  el.className = 'status ' + (ok ? 'ok' : 'err');
}
window.showStatus = showStatus;

// ─── SUBMIT ─────────────────────────────────────────────────────────────────
async function submitSongs() {
  const name = document.getElementById('singer-select').value;
  if (!name) { showStatus('Por favor selecciona tu nombre.', false); return; }

  const entries = Array.from(document.querySelectorAll('.song-entry')).map(entry => {
    const rawSongId = entry.querySelector('.song-select').value;
    const key = entry.querySelector('.key-select').value;

    if (!rawSongId) return null;

    const { song, artist } = parseSongId(rawSongId);
    return {
      song,
      artist: artist || '',
      key: key || 'No recuerdo'
    };
  }).filter(Boolean);

  if (!entries.length) { showStatus('Agrega al menos una canción.', false); return; }

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const weekKey = getWeekKey();
    let weekData = {};

    // Load existing week data
    try {
      const r = await window.storage.get(weekKey, true);
      if (r && r.value) weekData = JSON.parse(r.value);
    } catch (e) {}

    weekData[name] = { songs: entries, submittedAt: new Date().toISOString() };
    await window.storage.set(weekKey, JSON.stringify(weekData), true);

    // Track all weeks
    let allKeys = [];
    try {
      const r = await window.storage.get('cclne_all_keys', true);
      if (r && r.value) allKeys = JSON.parse(r.value);
    } catch (e) {}

    if (!allKeys.includes(weekKey)) allKeys.push(weekKey);
    await window.storage.set('cclne_all_keys', JSON.stringify(allKeys), true);

    showStatus('¡Enviado con éxito! La banda ya puede verlo.', true);

    document.getElementById('singer-select').value = '';
    songCount = 0;
    onSingerChange();
  } catch (e) {
    showStatus('Error al guardar. Intenta de nuevo.', false);
  }

  btn.disabled = false;
  btn.textContent = 'Enviar Repertorio';
}
window.submitSongs = submitSongs;

// ─── VIEW ───────────────────────────────────────────────────────────────────
async function loadView() {
  const weekKey = getWeekKey();
  document.getElementById('current-week-label').textContent = formatWeekLabel(weekKey);
  document.getElementById('current-entries').innerHTML = '<div class="loading">Cargando...</div>';
  document.getElementById('past-entries').innerHTML = '<div class="loading">Cargando...</div>';

  // Current week
  try {
    let weekData = {};
    try {
      const r = await window.storage.get(weekKey, true);
      if (r && r.value) weekData = JSON.parse(r.value);
    } catch (e) {}

    const names = Object.keys(weekData);

    if (!names.length) {
      document.getElementById('current-entries').innerHTML =
        `<div class="empty"><div class="empty-icon">🎵</div>Nadie ha enviado canciones todavía este domingo.</div>`;
    } else {
      document.getElementById('current-entries').innerHTML = names.map(n => {
        const { songs } = weekData[n];
        const songItems = (songs || []).map(s => {
          // Support older formats where s might be string
          const songName = typeof s === 'string' ? s : (s.song || '');
          const artist = typeof s === 'object' ? (s.artist || '') : '';
          const key = typeof s === 'object' ? (s.key || '') : '';

          const keyHtml = (!key || key === 'No recuerdo' || key === '')
            ? `<span class="key-unknown">Tonalidad no especificada</span>`
            : `<span class="key-tag">${escapeHtml(key)}</span>`;

          const title = artist ? `${songName} — ${artist}` : songName;

          return `<div class="song-item">
            <div class="song-bullet"></div>
            <div class="song-item-info">
              <div class="song-item-name">${escapeHtml(title)}</div>
              <div class="song-item-meta">${keyHtml}</div>
            </div>
          </div>`;
        }).join('');

        return `<div class="singer-card">
          <div class="singer-header">
            <div class="avatar">${escapeHtml(getInitials(n))}</div>
            <span class="singer-name-text">${escapeHtml(n)}</span>
          </div>
          ${songItems}
        </div>`;
      }).join('');
    }
  } catch (e) {
    document.getElementById('current-entries').innerHTML = '<div class="empty">Error al cargar.</div>';
  }

  // Past weeks
  try {
    let allKeys = [];
    try {
      const r = await window.storage.get('cclne_all_keys', true);
      if (r && r.value) allKeys = JSON.parse(r.value);
    } catch (e) {}

    const pastKeys = allKeys.filter(k => k !== weekKey).sort().reverse().slice(0, 6);
    if (!pastKeys.length) {
      document.getElementById('past-entries').innerHTML = '<div class="empty" style="padding:1rem;">No hay semanas anteriores aún.</div>';
      return;
    }

    let html = '';
    for (const k of pastKeys) {
      let data = {};
      try {
        const r = await window.storage.get(k, true);
        if (r && r.value) data = JSON.parse(r.value);
      } catch (e) {}

      const names = Object.keys(data);
      if (!names.length) continue;

      html += `<div class="past-entry"><div class="past-date">${escapeHtml(formatWeekLabel(k))}</div>`;
      names.forEach(n => {
        const songs = data[n]?.songs || [];
        const songList = songs.map(s => {
          const songName = typeof s === 'string' ? s : (s.song || '');
          const artist = typeof s === 'object' ? (s.artist || '') : '';
          const key = typeof s === 'object' ? (s.key || '') : '';
          const keyTxt = key && key !== 'No recuerdo' ? ` (${key})` : '';
          const artistTxt = artist ? ` — ${artist}` : '';
          return `${songName}${artistTxt}${keyTxt}`;
        }).join(', ');

        html += `<div class="past-singer"><strong>${escapeHtml(n)}:</strong> ${escapeHtml(songList)}</div>`;
      });
      html += `</div>`;
    }

    document.getElementById('past-entries').innerHTML =
      html || '<div class="empty" style="padding:1rem;">Sin registros anteriores.</div>';
  } catch (e) {
    document.getElementById('past-entries').innerHTML = '<div class="empty">Error al cargar.</div>';
  }
}
window.loadView = loadView;

// Optional: load view when user switches tabs (already handled in showTab)
// Nothing else needed.
