const path = require('path');
const fs = require('fs');

const src = 'templates';
const dist = 'bundle.json';


const templates = [];
const idsInTemplates = new Set();
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
  } else if (src.extends) {
    loadItem(dir, src.extends);
  }
};

const loadItem = function(dir, id, origId) {
  const itemPath = path.join(dir, id);
  try {
    const src = JSON.parse(fs.readFileSync(itemPath));
    src.id = origId || id;
    templates.push(src);
    idsInTemplates.add(src.id);
    loadGroup(dir, src);
  } catch (e) {
    if (!idsInTemplates.has(origId || id) && profileDirs.indexOf(origId || id) === -1) {
      console.log(`Failed loading template with id ${origId || id} in directory ${dir} and it has not been loaded already`);
      console.log(itemPath);
    }
    // Ignore, item in other folder.
  }
};
profileDirs.sort((a, b) => (a === 'common' ? 1 : b<a) ).forEach(function (profile) {
  if (profile === 'commons') {
    const commonPath = path.join(src, profile);
    const commonTemplates = fs.readdirSync(commonPath);
    commonTemplates.forEach(function(id) {
      loadItem(commonPath, id);
    });
  } else {
    const profileDir = path.join(src, profile);
    loadItem(profileDir, 'index', profile);
  }
});

fs.writeFileSync(dist, JSON.stringify({ templates }, null, '  '));