(() => {
  console.log("aa");
  const gameData = [...Array(3)].map(item => [...Array(3)]);
  const app = document.querySelector('#app');

  // {
  //   [0, x, undefined]
  // }
  const render = () => {
    // console.log("I will render your Tic Tac Toe");
    gameData.forEach(rowData => {
      const row = document.createElement('div');
      row.classList.add('row');
      rowData.forEach(boxData => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = boxData;
        row.appendChild(box);
      });
      app.appendChild(row);
    });
  };
  const start = ({
    target
  }) => {
    console.log('target', target)
    render();
    app.removeChild(target);
  }
  const initApp = () => {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('primary-button');
    startButton.addEventListener('click', start);
    app.appendChild(startButton);
  };
  document.addEventListener('DOMContentLoaded', initApp);
})();