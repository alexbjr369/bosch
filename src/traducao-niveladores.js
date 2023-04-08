const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

isElementLoaded('.quiz__result').then((selector) => {
  if (selector) {
    selector.querySelector('h2').innerHTML = 'EN BASE A SUS RESPUESTAS <strong>ESTA ES LA OPCIÓN MÁS ADECUADA PARA USTED</strong>';
  }
});

isElementLoaded('.btn--ghost').then((selector) => {
  if (selector) {
    selector.innerText = 'REHACER CUESTIONARIO';
  }
});
