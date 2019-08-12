const path = require('path');
const fs = require('fs');

const src = 'templates';
const dist = 'bundle.json';


const templates = [];
const profileDirs = fs.readdirSync(src);

const loadGroup = function(dir, src) {
  if (src.items) {
    src.items.forEach(function(child) {
      if (typeof child === 'string') {
        loadItem(dir, child);
      } else {
        loadGroup(dir, child);
      }
    });
  }
};

const loadItem = function(dir, id, origId) {
  const itemPath = path.join(dir, id);
  try {
    const src = JSON.parse(fs.readFileSync(itemPath));
    src.id = origId || id;
    templates.push(src);
    loadGroup(dir, src);
  } catch (e) {
    // Ignore, item in other folder.
  }
};
profileDirs.forEach(function (profile) {
  const profileDir = path.join(src, profile);
  loadItem(profileDir, 'index', profile);
});

fs.writeFileSync(dist, JSON.stringify({ templates }, null, '  '));