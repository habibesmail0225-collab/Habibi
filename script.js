document.addEventListener('DOMContentLoaded', () => {

  const MOUNTAINS = [
  
    { id: 'mayon', short: 'Mt. Mayon', name: 'Mayon Volcano', region: 'Luzon', province: 'Albay',
      location: 'Albay, Bicol, Luzon', elevation: 2463, difficulty: 'Viewing only', time: 'Viewpoints only (no summit climb)',
      image: 'images/mt-mayon',
      status: 'Summit climbing is not allowed because of the permanent danger zone. Enjoy it from the viewpoints in Albay and follow PHIVOLCS advisories.',
      description: 'The famous near-perfect cone volcano of Bicol.',
      environment: 'A symmetrical active volcano surrounded by rice fields, coconut groves and towns.',
      tip: 'Check PHIVOLCS alert levels and visit viewpoints such as the Cagsawa Ruins area.' },
    { id: 'samat', short: 'Mt. Samat', name: 'Mount Samat', region: 'Luzon', province: 'Bataan',
      location: 'Pilar, Bataan, Luzon', elevation: 555, difficulty: 'Easy', time: '1–2 hours (road or short trail)',
      image: 'images/mt-samat',
      description: 'Home of the Dambana ng Kagitingan (Mount Samat National Shrine) and its giant cross.',
      environment: 'Forested hills with a memorial shrine, museum and viewing areas overlooking Bataan.',
      tip: 'It is also a historic site, so dress and behave respectfully.' },
    { id: 'batulao', short: 'Mt. Batulao', name: 'Mount Batulao', region: 'Luzon', province: 'Batangas',
      location: 'Nasugbu, Batangas, Luzon', elevation: 811, difficulty: 'Moderate', time: '4–5 hours round trip',
      image: 'images/mt-batulao',
      description: 'A beginner-friendly hike with jagged ridges and grassy slopes.',
      environment: 'Grassy slopes, jagged ridges and views of Batangas and Cavite.',
      tip: 'There is little shade, so bring sun protection and extra water.' },
    { id: 'maculot', short: 'Mt. Maculot', name: 'Mount Maculot', region: 'Luzon', province: 'Batangas',
      location: 'Cuenca, Batangas, Luzon', elevation: 930, difficulty: 'Moderate', time: '3–5 hours round trip',
      image: 'images/mt-maculot',
      description: 'Known for the Rockies viewpoint above Taal Lake.',
      environment: 'Forest trail, rocky outcrops and sweeping views of Taal Lake and Volcano.',
      tip: 'The Rockies section is steep and exposed. Go slowly and avoid it in wet weather.' },
    { id: 'talamitam', short: 'Mt. Talamitam', name: 'Mount Talamitam', region: 'Luzon', province: 'Batangas',
      location: 'Nasugbu, Batangas, Luzon', elevation: 630, difficulty: 'Easy to Moderate', time: '2–4 hours round trip',
      image: 'images/mt-talamitam',
      description: 'A grassy hill hike close to Mt. Batulao, popular with beginners.',
      environment: 'Open grasslands with a few trees and wide views of the surrounding hills.',
      tip: 'Start early because the trail is exposed to the sun.' },
    { id: 'pulag', short: 'Mt. Pulag', name: 'Mount Pulag', region: 'Luzon', province: 'Benguet',
      location: 'Benguet, Luzon', elevation: 2926, difficulty: 'Moderate', time: '4–6 hours round trip (Ambangeg trail)',
      image: 'images/mt-pulag',
      description: 'Famous for its sea of clouds and grassland summit.',
      environment: 'Grassland summit, mossy pine forest and cool, windy weather. Home to dwarf bamboo and rare highland wildlife.',
      tip: 'Most hikers start at night to catch the sunrise sea of clouds, so bring warm layers.' },
    { id: 'ulap', short: 'Mt. Ulap', name: 'Mount Ulap', region: 'Luzon', province: 'Benguet',
      location: 'Itogon, Benguet, Luzon', elevation: 1846, difficulty: 'Moderate', time: '3–4 hours round trip',
      image: 'images/mt-ulap',
      description: 'A scenic ridge hike with wide views of the Cordillera.',
      environment: 'Open grassy ridges, pine trees and sweeping views of the Cordillera mountains.',
      tip: 'Start early to avoid the afternoon fog and heat on the open ridges.' },
    { id: 'arayat', short: 'Mt. Arayat', name: 'Mount Arayat', region: 'Luzon', province: 'Pampanga',
      location: 'Arayat, Pampanga, Luzon', elevation: 1026, difficulty: 'Moderate', time: '4–6 hours round trip',
      image: 'images/mt-arayat',
      description: 'An isolated volcanic cone rising from the Central Luzon plain.',
      environment: 'National park forest with diverse wildlife, standing alone above the plains.',
      tip: 'Register at the park office first and follow ranger guidance.' },
    { id: 'guiting', short: 'Guiting-Guiting', name: 'Mount Guiting-Guiting', region: 'Luzon', province: 'Romblon',
      location: 'Sibuyan Island, Romblon (MIMAROPA)', elevation: 2058, difficulty: 'Very Difficult', time: '3–4 days',
      image: 'images/mt-guiting-guiting',
      description: 'A jagged, challenging peak on Sibuyan Island, known as the “Galapagos of Asia”.',
      environment: 'Rich forest, rare species and razor-edge ridges, including the famous Tinagong Dagat lake area.',
      tip: 'This is one of the toughest climbs in the country. Only go with experienced guides.' },

    // ---------- VISAYAS ----------
    { id: 'kapayas', short: 'Mt. Kapayas', name: 'Mount Kapayas', region: 'Visayas', province: 'Cebu',
      location: 'Catmon, Cebu, Visayas', elevation: 783, difficulty: 'Moderate', time: '4–6 hours round trip',
      image: 'images/mt-kapayas',
      description: 'The second highest peak in Cebu, topped by a limestone outcrop called Torre.',
      environment: 'Exposed lower slopes, forest sections and a limestone summit with cliffs all around.',
      tip: 'The summit area is small, so go in small groups with a local guide.' },
    { id: 'lantoy', short: 'Mt. Lantoy', name: 'Mount Lantoy', region: 'Visayas', province: 'Cebu',
      location: 'Argao, Cebu, Visayas', elevation: null, difficulty: 'Check local guidance', time: 'Ask your local guide',
      image: 'images/mt-lantoy',
      description: 'A green, rolling mountain area in southern Cebu.',
      environment: 'Green hills, farmland and winding mountain roads.',
      tip: 'Details are limited, so confirm the trail and difficulty with the local tourism office.' },
    { id: 'osmena', short: 'Osmeña Peak', name: 'Osmeña Peak', region: 'Visayas', province: 'Cebu',
      location: 'Dalaguete, Cebu, Visayas', elevation: 1013, difficulty: 'Easy', time: '30–45 minutes to the viewpoint',
      image: 'images/mt-osmena-peak',
      description: 'The highest point in Cebu, with jagged ridges and wide views.',
      environment: 'Rolling green ridges and sharp peaks with views across southern Cebu.',
      tip: 'Go early in the morning for clear skies and cooler temperatures.' },
    { id: 'madjaas', short: 'Mt. Madja-as', name: 'Mount Madja-as', region: 'Visayas', province: 'Antique',
      location: 'Culasi, Antique, Visayas', elevation: 2117, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-madja-as',
      description: 'The highest peak in Panay, with mossy forest and rich biodiversity.',
      environment: 'Mossy forest and endemic species; a protected area.',
      tip: 'Arrange permits and a guide through local tourism offices in advance.' },
    { id: 'mandalagan', short: 'Mt. Mandalagan', name: 'Mount Mandalagan', region: 'Visayas', province: 'Negros Occidental',
      location: 'Negros Occidental, Visayas', elevation: 1884, difficulty: 'Moderate to Difficult', time: '1–2 days',
      image: 'images/mt-mandalagan',
      description: 'A mountain range in northern Negros with forest trails and waterfall views.',
      environment: 'Lush forest, mossy slopes and waterfalls in the Northern Negros Natural Park area.',
      tip: 'Ask local authorities about trail conditions and the right jump-off for your plan.' },
    { id: 'kanlaon', short: 'Mt. Kanlaon', name: 'Mount Kanlaon', region: 'Visayas', province: 'Negros Occidental / Negros Oriental',
      location: 'Canlaon City / Negros Island, Visayas', elevation: 2465, difficulty: 'Difficult', time: '1–2 days (when open)',
      image: 'images/mt-kanlaon',
      status: 'Active volcano. Climbing and entry to the danger zone have repeatedly been closed because of volcanic unrest. Check PHIVOLCS and local government advisories first, and do not climb when it is closed.',
      description: 'The highest peak on Negros Island and an active volcano.',
      environment: 'Active volcano with forest, crater features and rich wildlife in the Kanlaon Natural Park.',
      tip: 'Only plan a trip when authorities confirm it is open.' },
    { id: 'talinis', short: 'Mt. Talinis', name: 'Mount Talinis', region: 'Visayas', province: 'Negros Oriental',
      location: 'Valencia, Negros Oriental, Visayas', elevation: 1903, difficulty: 'Moderate to Difficult', time: '1–2 days',
      image: 'images/mt-talinis',
      description: 'A volcanic mountain with twin lakes and mossy forest above Dumaguete.',
      environment: 'Mossy forest, volcanic features and twin lakes in the highlands.',
      tip: 'Hire a local guide; trails can be slippery after rain.' },

   
    { id: 'hibok', short: 'Hibok-Hibok', name: 'Mount Hibok-Hibok', region: 'Mindanao', province: 'Camiguin',
      location: 'Mambajao, Camiguin, Mindanao', elevation: 1332, difficulty: 'Moderate to Difficult', time: '6–8 hours round trip',
      image: 'images/mt-hibok-hibok',
      status: 'Active volcano. Check PHIVOLCS alerts and local rules before climbing.',
      description: 'An active volcano on Camiguin, the “Island Born of Fire”.',
      environment: 'Tropical forest, steep slopes and volcanic terrain with coastal views.',
      tip: 'Hire a local guide and begin early because the trail is steep.' },
    { id: 'malindang', short: 'Mt. Malindang', name: 'Mount Malindang', region: 'Mindanao', province: 'Misamis Occidental',
      location: 'Misamis Occidental, Mindanao', elevation: 2404, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-malindang',
      description: 'A tall mountain in a natural park with mossy forest and lakes.',
      environment: 'Mossy forest and rare wildlife inside Mt. Malindang Range Natural Park.',
      tip: 'Arrange a guide through the local office, for example from Oroquieta City.' },
    { id: 'apo', short: 'Mt. Apo', name: 'Mount Apo', region: 'Mindanao', province: 'Davao del Sur / North Cotabato',
      location: 'Davao del Sur / North Cotabato, Mindanao', elevation: 2954, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-apo',
      description: 'The highest mountain in the Philippines, with rich biodiversity.',
      environment: 'Mossy forest, solfataras, a crater and lakes, with many endemic species.',
      tip: 'Check for trail closures and permits with the local park office before booking.' },
    { id: 'candalaga', short: 'Mt. Candalaga', name: 'Mount Candalaga', region: 'Mindanao', province: 'Davao de Oro',
      location: 'Maragusan, Davao de Oro, Mindanao', elevation: 2402, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-candalaga',
      description: 'A beautiful and demanding mountain, sacred to the Mansaka people.',
      environment: 'Montane rainforest with rare plants and wildlife, including a Philippine eagle sighting. The trek starts near Marangig Falls.',
      tip: 'Respect local culture and hire a local guide. Sources list different elevations, so confirm locally.' },
    { id: 'dulang', short: 'Dulang-dulang', name: 'Mount Dulang-dulang', region: 'Mindanao', province: 'Bukidnon',
      location: 'Lantapan, Bukidnon, Mindanao', elevation: 2938, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-dulang-dulang',
      description: 'The second highest mountain in the Philippines, in the Kitanglad range.',
      environment: 'Mossy forest and highland habitat inside the Kitanglad Range Natural Park.',
      tip: 'Part of a protected area, so permits and guides are required.' },
    { id: 'kitanglad', short: 'Mt. Kitanglad', name: 'Mount Kitanglad', region: 'Mindanao', province: 'Bukidnon',
      location: 'Bukidnon, Mindanao', elevation: 2899, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-kitanglad',
      description: 'A tall range with a long trail through forests and mossy highlands.',
      environment: 'Dense forest and cloud forest in a protected natural park.',
      tip: 'Respect local indigenous community rules and customs.' },
    { id: 'hamiguitan', short: 'Mt. Hamiguitan', name: 'Mount Hamiguitan', region: 'Mindanao', province: 'Davao Oriental',
      location: 'San Isidro, Davao Oriental, Mindanao', elevation: 1620, difficulty: 'Difficult', time: '2–3 days',
      image: 'images/mt-hamiguitan',
      description: 'A wildlife sanctuary known for its pygmy forest and unique species.',
      environment: 'A pygmy forest of stunted trees, with rare plants and animals.',
      tip: 'Access is regulated, so book early and follow ranger instructions.' },
    { id: 'matutum', short: 'Mt. Matutum', name: 'Mount Matutum', region: 'Mindanao', province: 'South Cotabato',
      location: 'Tupi / Polomolok, South Cotabato, Mindanao', elevation: 2286, difficulty: 'Moderate to Difficult', time: '1–2 days',
      image: 'images/mt-matutum',
      description: 'A volcano overlooking General Santos and the Celebes Sea.',
      environment: 'Forest trails, a crater and fresh highland air.',
      tip: 'Start early and bring enough water; the climb is steep in places.' }
  ];

  const BRING = {
    base: ['Water (at least 2–3 liters)', 'Trail food and snacks', 'First-aid kit and personal medicines', 'Headlamp or flashlight with extra batteries', 'Rain jacket or poncho', 'Trekking shoes and extra socks', 'Fully charged phone and power bank', 'Trash bag to pack out your waste'],
    long: ['Tent / sleeping bag (for overnight climbs)', 'Cooking set and extra food', 'Warm clothes for cold nights'],
    cold: ['Warm jacket, gloves and beanie']
  };
  const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'PNG'];
  const imageCache = {};

  function nameVariants(base) {
    const folder = base.slice(0, base.lastIndexOf('/') + 1);
    const name = base.slice(folder.length);
    const rest = name.replace(/^mt-/, '');
    const cap = s => s.replace(/(^|[-\s])([a-z])/g, (m, a, b) => a + b.toUpperCase());
    const set = new Set([
      name,
      name.replace(/-/g, ' '),
      'mt-' + rest.replace(/-/g, ' '),
      'mt-' + rest.charAt(0).toUpperCase() + rest.slice(1),
      cap(name),
      cap(name).replace(/-/g, ' ')
    ]);
    if (name === 'mt-talamitam') { set.add('mt-talamitan'); set.add('mt-Talamitan'); }
    return [...set].map(n => folder + n);
  }

  function loadImage(base, callback) {
    if (base in imageCache) { callback(imageCache[base]); return; }
    const candidates = [];
    nameVariants(base).forEach(v => EXTENSIONS.forEach(ext => candidates.push(v + '.' + ext)));
    let i = 0;
    (function tryNext() {
      if (i >= candidates.length) { imageCache[base] = null; callback(null); return; }
      const url = encodeURI(candidates[i++]);
      const img = new Image();
      img.onload = () => { imageCache[base] = url; callback(url); };
      img.onerror = tryNext;
      img.src = url;
    })();
  }

  function applyPhoto(element, base) {
    loadImage(base, url => {
      if (url) element.style.backgroundImage = `url('${url}')`;
      else element.style.backgroundImage = '';
    });
  }
  const search = document.getElementById('mountainSearch');
  const searchButton = document.getElementById('searchButton');
  const list = document.getElementById('mountainList');
  const emptyMessage = document.getElementById('emptyMessage');
  const tabs = [...document.querySelectorAll('.region-tab')];
  const nav = document.getElementById('mainNav');
  const navWrap = document.getElementById('navWrap');

  const placeholder = document.getElementById('detailsPlaceholder');
  const guide = document.getElementById('mountainGuide');

  let activeRegion = 'all';
  let currentId = null;

  const REGION_ORDER = ['Luzon', 'Visayas', 'Mindanao'];
  const REGION_BLURB = {
    Luzon: 'Northern and central peaks, from the Cordillera to Bicol and Batangas.',
    Visayas: 'Island peaks across Cebu, Negros and Panay.',
    Mindanao: 'Tall, wild mountains in the southern Philippines.'
  };
  function sortByLocation(a, b) {
    return a.province.localeCompare(b.province) || a.name.localeCompare(b.name);
  }

  function matches(m, term) {
    if (!term) return true;
    return [m.name, m.short, m.region, m.province, m.location, m.difficulty, m.description]
      .join(' ').toLowerCase().includes(term);
  }

  function render() {
    const term = search.value.trim().toLowerCase();
    list.innerHTML = '';
    let total = 0;

    REGION_ORDER.forEach(region => {
      if (activeRegion !== 'all' && activeRegion !== region) return;
      const items = MOUNTAINS.filter(m => m.region === region && matches(m, term)).sort(sortByLocation);
      if (!items.length) return;
      total += items.length;

      const group = document.createElement('div');
      group.className = 'region-group';

      const head = document.createElement('div');
      head.className = 'region-head';
      head.innerHTML = `<h3>${region}</h3><p>${REGION_BLURB[region]}</p>`;
      group.appendChild(head);

      const grid = document.createElement('div');
      grid.className = 'mountain-grid';

      items.forEach(m => {
        const card = document.createElement('article');
        card.className = 'mountain-card' + (m.id === currentId ? ' selected' : '');
        card.innerHTML = `
          <div class="photo" role="img" aria-label="${m.name}"></div>
          ${m.status ? '<span class="card-flag">⚠ Check status</span>' : ''}
          <button class="details-button" type="button" data-id="${m.id}" aria-label="View details for ${m.name}">
            <svg class="icon pin" aria-hidden="true"><use href="#i-pin"/></svg>
            <span class="names"><span>${m.short}</span><span>${m.province.split(' / ')[0]}</span></span>
          </button>`;
        applyPhoto(card.querySelector('.photo'), m.image);
        grid.appendChild(card);
      });

      group.appendChild(grid);
      list.appendChild(group);
    });

    emptyMessage.hidden = total !== 0;
  }
  function fillList(id, items) {
    const ul = document.getElementById(id);
    ul.innerHTML = '';
    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  function showMountain(id, scroll = true) {
    const m = MOUNTAINS.find(x => x.id === id);
    if (!m) return;
    currentId = id;

    placeholder.hidden = true;
    guide.hidden = false;

    const photo = document.getElementById('guidePhoto');
    photo.style.backgroundImage = '';
    applyPhoto(photo, m.image);
    photo.setAttribute('aria-label', m.name);

    const statusEl = document.getElementById('guideStatus');
    if (m.status) {
      statusEl.textContent = '⚠ ' + m.status;
      statusEl.hidden = false;
    } else {
      statusEl.hidden = true;
    }

    document.getElementById('guideRegion').textContent = (m.region + ' • ' + m.province).toUpperCase();
    document.getElementById('guideTitle').textContent = m.name;
    document.getElementById('guideDescription').textContent = m.description;
    document.getElementById('guideLocation').textContent = m.location;
    document.getElementById('guideElevation').textContent = m.elevation
      ? m.elevation.toLocaleString() + ' meters above sea level'
      : 'Ask a local guide for the exact elevation';
    document.getElementById('guideEnvironment').textContent = m.environment;
    document.getElementById('guideHiking').textContent = `Difficulty: ${m.difficulty}. Estimated time: ${m.time}.`;

    const overnight = /day|days/.test(m.time) && !/1 hour|minute/.test(m.time);
    const high = (m.elevation || 0) >= 1800;
    const place = m.province.split(' / ')[0];

    fillList('stepBefore', [
      ...(m.status ? [m.status] : []),
      `Check trail conditions and the weather forecast for ${place}.`,
      'Ask the local tourism office or park office about permits, fees and registration.',
      'Hire an accredited local guide where required.',
      'Tell family or friends your route and expected return time.',
      m.tip
    ]);
    fillList('stepTrail', [
      `Difficulty: ${m.difficulty.toLowerCase()}. Set a steady pace and rest often.`,
      `Expect about ${m.time}.`,
      'Stay on the marked trail and follow your guide.',
      'Drink water and eat small snacks regularly.',
      'Start early and plan to be off the trail before dark.'
    ]);
    fillList('stepBring', [...BRING.base, ...(overnight ? BRING.long : []), ...(high ? BRING.cold : [])]);
    fillList('stepSafety', [
      'Turn back if the weather turns bad or someone is not feeling well.',
      'Keep the group together and move at the pace of the slowest hiker.',
      'Pack out all your trash.',
      'Do not pick plants or disturb wildlife.',
      'Respect local communities and their rules.'
    ]);

    document.querySelectorAll('.mountain-card').forEach(card => {
      const btn = card.querySelector('.details-button');
      card.classList.toggle('selected', btn && btn.dataset.id === id);
    });

    if (scroll) document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
  }

  function step(direction) {
    const visible = [...list.querySelectorAll('.details-button')].map(b => b.dataset.id);
    const pool = visible.length ? visible : MOUNTAINS.map(m => m.id);
    let i = pool.indexOf(currentId);
    i = (i + direction + pool.length) % pool.length;
    showMountain(pool[i]);
  }

  list.addEventListener('click', event => {
    const button = event.target.closest('.details-button');
    if (button) showMountain(button.dataset.id);
  });
  document.getElementById('guidePrev').addEventListener('click', () => step(-1));
  document.getElementById('guideNext').addEventListener('click', () => step(1));
  document.getElementById('guideBack').addEventListener('click', () => {
    document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' });
  });
  tabs.forEach(tab => tab.addEventListener('click', () => {
    activeRegion = tab.dataset.region;
    tabs.forEach(t => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    render();
  }));

  search.addEventListener('input', render);
  const goToMountains = () => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' });
  searchButton.addEventListener('click', goToMountains);
  search.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      goToMountains();
    }
  });
  function setScrollOffset() {
    document.documentElement.style.scrollPaddingTop = (navWrap.offsetHeight + 8) + 'px';
  }
  window.addEventListener('resize', setScrollOffset);
  setScrollOffset();

  const navLinks = [...nav.querySelectorAll('a')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateActiveLink() {
    let current = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', document.querySelector(link.getAttribute('href')) === current);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  render();
});