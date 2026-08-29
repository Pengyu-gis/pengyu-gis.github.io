const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const savedTheme = localStorage.getItem('pengyu-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('pengyu-theme', nextTheme);
});

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const materials = document.querySelector('.materials');
if (materials) {
  materials.innerHTML = `<h3>Lab materials</h3><div class="material-list"><a href="assets/data/Maps_and_Mapping.pdf" target="_blank" rel="noreferrer">Maps and Mapping ↗</a><a href="assets/data/GEOG201_2024_Rocks.pdf" target="_blank" rel="noreferrer">Minerals and Rocks ↗</a><a href="assets/data/Soils_and_Soil_Mapping.pdf" target="_blank" rel="noreferrer">Soils and Soil Mapping ↗</a><a href="assets/data/Surface_Hydrology_and_Watershed_Processes.pdf" target="_blank" rel="noreferrer">Surface Hydrology and Watershed Processes ↗</a><a href="assets/data/Fluvial_Processes_and_Landforms.pdf" target="_blank" rel="noreferrer">Fluvial Processes and Landforms ↗</a><a href="assets/data/Review_GEOG201.pdf" target="_blank" rel="noreferrer">Review Session ↗</a></div>`;
}

const postList = document.querySelector('#post-list');
const postContent = document.querySelector('#post-content');

function renderMarkdown(markdown) {
  markdown = markdown.replace(/^---\s*[\s\S]*?\s*---\s*/m, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  if (window.marked) return window.marked.parse(markdown);
  return markdown
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .split(/\n\s*\n/).map((block) => `<p>${block.replace(/\n/g, '<br>')}</p>`).join('');
}

function showMarkdown(title, markdown) {
  const hasMarkdownTitle = /^\s*#\s+/m.test(markdown);
  postContent.innerHTML = `<p class="eyebrow">Reading</p>${hasMarkdownTitle ? '' : `<h1>${title}</h1>`}${renderMarkdown(markdown)}`;
}

async function loadPost(post) {
  try {
    const response = await fetch(post.file);
    if (!response.ok) throw new Error('Post not found');
    showMarkdown(post.title, await response.text());
    document.querySelectorAll('.post-link').forEach((link) => link.classList.toggle('active', link.dataset.file === post.file));
  } catch (error) {
    postContent.innerHTML = '<p class="muted">I could not load that post. Check the file path in posts.json.</p>';
  }
}

if (postList && postContent) {
  fetch('posts.json')
    .then((response) => response.json())
    .then((posts) => {
      postList.innerHTML = posts.map((post) => `<button class="post-link" data-file="${post.file}"><span>${post.date}</span><strong>${post.title}</strong></button>`).join('');
      postList.querySelectorAll('.post-link').forEach((link, index) => link.addEventListener('click', () => loadPost(posts[index])));
      const requestedFile = new URLSearchParams(window.location.search).get('post');
      loadPost(posts.find((post) => post.file === requestedFile) || posts[0]);
    })
    .catch(() => { postList.innerHTML = '<p class="muted">No posts found yet.</p>'; });
}
