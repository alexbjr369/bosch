import replace from 'replace-in-file';

const options = {
  files: 'dist/*.html',
  from: /assets/g,
  to: 'https://boschferramentasbrasil.vteximg.com.br/arquivos',
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
