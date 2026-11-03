fetch('/data/entries.json').then(r => r.json()).then(data => {
  document.querySelectorAll('[data-list]').forEach(ul => {
    (data[ul.dataset.list] || []).forEach(e => {
      const li = document.createElement('li');
      const t = document.createElement(e.url ? 'a' : 'span');
      t.className = 'title';
      if (e.url) { t.href = e.url; t.rel = 'noopener'; }
      t.textContent = (e.pinned ? '📌 ' : '') + e.title;
      li.append(t);
      if (e.note) { const n = document.createElement('span'); n.className = 'note'; n.textContent = ' (' + e.note + ')'; li.append(n); }
      if (e.example) li.classList.add('example');
      ul.append(li);
    });
  });
});
