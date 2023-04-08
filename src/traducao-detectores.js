/* const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

isElementLoaded('.step-2').then((selector) => {
  const p = selector.querySelector('p');
  if (p) {
    p.innerHTML = 'Marque <strong>sólo una</strong> de las opciones siguientes:';
  }
});
 */
setInterval(() => {
  const change = document.querySelector('.step-2 .init-quiz p');
  if (change) change.innerHTML = 'Marque <strong>sólo una</strong> de las opciones siguientes:';
}, 100);
