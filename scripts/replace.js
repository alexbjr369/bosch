import replace from 'replace-in-file';
import path from 'node:path';
import fs from 'node:fs';

const options = {
  files: 'dist/*.html',
  from: [/assets/g],
  to: ['https://boschferramentasbrasil.vteximg.com.br/arquivos'],
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

// const directoryPath = path.join(__dirname, 'dist');

/* fs.readdir('dist', function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    const content = fs.readfilesync(file);
    const links = content.match(/href="[^"]*"/g);

    
  });
});
 */

const FROM_DIR = 'dist';

const getFilePaths = (dir) => {
  let filePaths = [];
  const fileNames = fs.readdirSync(dir);

  for (const fileName of fileNames) {
    const filePath = path.join(dir, fileName);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      filePaths.push(filePath);
    } else if (stat.isDirectory()) {
      filePaths = filePaths.concat(getFilePaths(filePath));
    }
  }

  return filePaths;
};

const files = getFilePaths(FROM_DIR).filter((file) => file.endsWith('.html'));

files.forEach((file) => {
  let content = fs.readFileSync(file, { encoding: 'utf8' });

  const links = [...content.match(/href="(?:[^"]|"")*"/g)];

  for (let link of links) {
    link = link.replace('href="', '');

    let novoLink = link;

    novoLink = novoLink.split('&').join('&amp;');
    novoLink = novoLink.split('=').join('&#61;');

    content = content.replace(link, novoLink);
  }

  console.log(file);

  fs.writeFileSync(file, content, { encoding: 'utf8' });
});
