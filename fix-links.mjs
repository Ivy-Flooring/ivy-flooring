import fs from 'fs';

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const path = `${dir}/${file}`;
    if (fs.statSync(path).isDirectory()) {
      getFiles(path, filesList);
    } else if (path.endsWith('.tsx') || path.endsWith('.ts')) {
      filesList.push(path);
    }
  }
  return filesList;
}

const files = [...getFiles('app'), ...getFiles('src')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  // Replace to= with href= but only within <Link> ignoring <NavLink>
  const parts = content.split(/<Link[\s>]/);
  for (let i = 1; i < parts.length; i++) {
     let previousChar = content.substr(content.indexOf(parts[i]) - 6, 6);
     if (!previousChar.includes('Nav')) {
         // It's just Link
     }
  }
  
  content = content.replace(/<Link([\s\S]*?)to=/g, '<Link$1href=');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
