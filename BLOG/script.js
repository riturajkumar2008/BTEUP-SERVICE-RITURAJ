const data = [
  {
    id: 'cse-dsa-roadmap',
    title: 'DSA Roadmap for Placements',
    desc: 'Step-by-step guide with topics, patterns, and resources.',
    branch: 'cse',
    type: 'interview',
    tags: ['dsa','placement','coding'],
    url: '../cs/notes/SEMSTER/COMPUTER.html',
    image: '../img/slider2.jpg'
  },
  {
    id: 'it-web-projects',
    title: '10 Web Dev Projects for IT',
    desc: 'Frontend + backend ideas with GitHub and deployment tips.',
    branch: 'it',
    type: 'project',
    tags: ['web','react','node'],
    url: '../INFORNATION TECHNOLOGY/projects/index.html',
    image: '../img/SLIDER1.jpg'
  },
  {
    id: 'ece-vlsi-notes',
    title: 'VLSI Short Notes',
    desc: 'Crisp notes for fast revision with diagrams.',
    branch: 'ece',
    type: 'notes',
    tags: ['vlsi','electronics'],
    url: '../electronic/notes/SEMSTER/mechanical.html',
    image: '../electronic/img2/card2.jpg'
  },
  {
    id: 'eee-power-systems-pyq',
    title: 'Power Systems PYQ',
    desc: 'Most asked questions with solutions for practice.',
    branch: 'eee',
    type: 'pyq',
    tags: ['power','machines','pyq'],
    url: '../electronic/BOOKS/previous%20year%20question/index.html',
    image: '../img/img%204.png'
  },
  {
    id: 'me-cad-cam-tips',
    title: 'CAD/CAM for Manufacturing',
    desc: 'Essential tips, workflows and commands cheat-sheet.',
    branch: 'me',
    type: 'blog',
    tags: ['cad','cam','manufacturing'],
    url: '../MECHNICAL/index.html',
    image: '../MECHNICAL/image2.jpg'
  },
  {
    id: 'ce-structure-basics',
    title: 'Basics of Structural Analysis',
    desc: 'Quick guide to beams, trusses and load calculations.',
    branch: 'ce',
    type: 'blog',
    tags: ['structure','civil'],
    url: '../civil%20engineer/civil/index.html',
    image: '../civil%20engineer/civil/safety-helmet-architect-pland-wood-table-sunset-scen-file-scene-building-construction-33574911.webp'
  }
];

// generate additional mock posts for demo
const extra = Array.from({ length: 18 }).map((_, i) => ({
  id: `post-${i+1}`,
  title: `Engineering Insight #${i+1}`,
  desc: 'Short insight across branches: tips, formulas, and interview nuggets.',
  branch: ['cse','it','ece','eee','me','ce'][i % 6],
  type: ['blog','notes','pyq','project','interview'][i % 5],
  tags: ['tips','core','concepts','practice'].slice(0, 1 + (i % 4)),
  url: '#',
  image: ['../img/SLIDER1.jpg','../img/slider2.jpg','../img/ai-illustration-of-students-studying-together.webp','../img/card.jpeg'][i % 4]
}));
const posts = [...data, ...extra];

const cardGrid = document.getElementById('cardGrid');
const bookmarkGrid = document.getElementById('bookmarkGrid');
const searchInput = document.getElementById('searchInput');
const branchFilter = document.getElementById('branchFilter');
const typeFilter = document.getElementById('typeFilter');
const clearBookmarksBtn = document.getElementById('clearBookmarks');
const yearEl = document.getElementById('year');
const featuredGrid = document.getElementById('featuredGrid');
const latestList = document.getElementById('latestList');
const pagination = document.getElementById('pagination');
const categoriesList = document.getElementById('categoriesList');
const tagsCloud = document.getElementById('tagsCloud');
const trendingList = document.getElementById('trendingList');
const archivesList = document.getElementById('archivesList');
const resultCount = document.getElementById('resultCount');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMsg = document.getElementById('newsletterMsg');

if (yearEl) yearEl.textContent = new Date().getFullYear();

function readBookmarks() {
  try { return JSON.parse(localStorage.getItem('engihub_bookmarks') || '[]'); } catch { return []; }
}
function writeBookmarks(list) {
  localStorage.setItem('engihub_bookmarks', JSON.stringify(list));
}

function makeCard(item, isBookmark = false) {
  const el = document.createElement('article');
  el.className = 'card';
  el.dataset.branch = item.branch;
  el.dataset.type = item.type;
  el.dataset.tags = item.tags.join(' ').toLowerCase();
  el.innerHTML = `
    <div class="card__thumb" style="background-image:url('${item.image}')"></div>
    <div class="card__body">
      <div class="card__meta">
        <span class="tag">${item.branch.toUpperCase()}</span>
        <span class="tag">${item.type}</span>
      </div>
      <h3 class="card__title">${item.title}</h3>
      <p class="card__desc">${item.desc}</p>
      <div class="card__actions">
        <a class="btn btn--accent" href="${item.url}">Open</a>
        <button class="btn" data-action="${isBookmark ? 'remove' : 'save'}" data-id="${item.id}">
          ${isBookmark ? 'Remove' : 'Bookmark'}
        </button>
      </div>
    </div>
  `;
  return el;
}

function renderCards(list) {
  cardGrid.innerHTML = '';
  if (!list.length) {
    cardGrid.innerHTML = '<div class="empty">No results. Try different keywords or filters.</div>';
    return;
  }
  list.forEach(item => cardGrid.appendChild(makeCard(item)));
}

function renderBookmarks() {
  const saved = readBookmarks();
  bookmarkGrid.innerHTML = '';
  if (!saved.length) {
    bookmarkGrid.innerHTML = '<div class="empty">No bookmarks yet. Save items to see them here.</div>';
    return;
  }
  saved
    .map(id => data.find(d => d.id === id))
    .filter(Boolean)
    .forEach(item => bookmarkGrid.appendChild(makeCard(item, true)));
}

function applyFilters() {
  const q = (searchInput.value || '').trim().toLowerCase();
  const branch = branchFilter.value;
  const type = typeFilter.value;
  const filtered = posts.filter(item => {
    const matchBranch = branch === 'all' || item.branch === branch;
    const matchType = type === 'all' || item.type === type;
    const searchSpace = `${item.title} ${item.desc} ${item.tags.join(' ')} ${item.branch} ${item.type}`.toLowerCase();
    const matchSearch = !q || searchSpace.includes(q);
    return matchBranch && matchType && matchSearch;
  });
  renderCards(filtered);
  renderLatest(filtered);
  resultCount.textContent = `${filtered.length} results`;
}

function onGridClick(e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = btn.getAttribute('data-id');
  const action = btn.getAttribute('data-action');
  const saved = new Set(readBookmarks());
  if (action === 'save') { saved.add(id); }
  if (action === 'remove') { saved.delete(id); }
  writeBookmarks(Array.from(saved));
  renderBookmarks();
  applyFilters();
}

cardGrid.addEventListener('click', onGridClick);
bookmarkGrid.addEventListener('click', onGridClick);
searchInput.addEventListener('input', applyFilters);
branchFilter.addEventListener('change', applyFilters);
typeFilter.addEventListener('change', applyFilters);
clearBookmarksBtn.addEventListener('click', () => { writeBookmarks([]); renderBookmarks(); });

// initial
renderCards(posts);
renderBookmarks();
applyFilters();

// featured
function renderFeatured() {
  const picks = posts.slice(0, 3);
  featuredGrid.innerHTML = '';
  picks.forEach(item => featuredGrid.appendChild(makeCard(item)));
}

// latest with pagination
let currentPage = 1;
const pageSize = 6;
function paginate(list, page, perPage) {
  const start = (page - 1) * perPage;
  return list.slice(start, start + perPage);
}
function renderLatest(list) {
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;
  const items = paginate(list, currentPage, pageSize);
  latestList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('div');
    li.className = 'list__item';
    li.innerHTML = `
      <div class="list__thumb" style="background-image:url('${item.image}')"></div>
      <div>
        <div class="list__meta">
          <span class="tag">${item.branch.toUpperCase()}</span>
          <span class="tag">${item.type}</span>
        </div>
        <h4 class="list__title">${item.title}</h4>
        <p class="list__desc">${item.desc}</p>
      </div>
      <a class="btn" href="${item.url}">Read</a>
    `;
    latestList.appendChild(li);
  });
  pagination.innerHTML = '';
  const prev = document.createElement('button');
  prev.textContent = 'Prev';
  prev.disabled = currentPage === 1;
  prev.onclick = () => { currentPage -= 1; renderLatest(list); };
  const next = document.createElement('button');
  next.textContent = 'Next';
  next.disabled = currentPage === totalPages;
  next.onclick = () => { currentPage += 1; renderLatest(list); };
  const pageInfo = document.createElement('span');
  pageInfo.className = 'muted';
  pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;
  pagination.append(prev, pageInfo, next);
}

// categories and tags
function renderCategories() {
  const byBranch = posts.reduce((acc, p) => { acc[p.branch] = (acc[p.branch]||0)+1; return acc; }, {});
  categoriesList.innerHTML = '';
  Object.entries(byBranch).sort().forEach(([branch, count]) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-branch="${branch}">${branch.toUpperCase()} (${count})</a>`;
    categoriesList.appendChild(li);
  });
  categoriesList.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-branch]');
    if (!a) return;
    e.preventDefault();
    branchFilter.value = a.getAttribute('data-branch');
    currentPage = 1;
    applyFilters();
  });
}

function renderTags() {
  const counts = posts.flatMap(p => p.tags).reduce((acc, t) => { acc[t] = (acc[t]||0)+1; return acc; }, {});
  tagsCloud.innerHTML = '';
  Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,12).forEach(([tag]) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = `#${tag}`;
    span.onclick = () => { searchInput.value = tag; currentPage = 1; applyFilters(); };
    tagsCloud.appendChild(span);
  });
}

// trending (top bookmarked)
function renderTrending() {
  const saved = readBookmarks();
  const counts = new Map();
  saved.forEach(id => counts.set(id, (counts.get(id) || 0) + 1));
  const list = posts
    .map(p => ({ p, c: counts.get(p.id) || 0 }))
    .sort((a,b)=>b.c - a.c)
    .slice(0,5)
    .map(x => x.p);
  trendingList.innerHTML = '';
  (list.length ? list : posts.slice(0,5)).forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="thumb" style="background-image:url('${item.image}')"></div>
      <div><div class="muted">${item.branch.toUpperCase()}</div><div>${item.title}</div></div>`;
    trendingList.appendChild(li);
  });
}

// archives (fake months)
function renderArchives() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  archivesList.innerHTML = '';
  months.slice(0,6).forEach((m,i)=>{
    const li = document.createElement('li');
    li.textContent = `${m} ${new Date().getFullYear()} (${4 + (i%3)})`;
    archivesList.appendChild(li);
  });
}

// newsletter
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = (newsletterEmail.value || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newsletterMsg.textContent = 'Please enter a valid email.';
    return;
  }
  newsletterMsg.textContent = 'Subscribed! Check your inbox for confirmation.';
  newsletterEmail.value = '';
});

renderFeatured();
renderCategories();
renderTags();
renderTrending();
renderArchives();


