const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click',onControlsClick);

function onControlsClick(e) {
  e.preventDefault();
  const activeBtn = e.target;
  
  if (activeBtn.nodeName !== 'A') {
    return
  };
  
  const currentBtn = refs.controls.querySelector('.controls__item--active');

  if (currentBtn) {
    currentBtn.classList.remove('controls__item--active');

    const paneId = getPaneId(currentBtn);
    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
  };

  activeBtn.classList.add('controls__item--active');

  const paneId = getPaneId(activeBtn);
  const pane = getPaneById(paneId);  
  pane.classList.add('pane--active');
};

function getPaneId(activeBtn) {
  return activeBtn.getAttribute('href').slice(1);  
};

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
};