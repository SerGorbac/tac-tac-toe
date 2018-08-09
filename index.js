(function IIFE() {
  const gameData = [...Array(3)].map(item => [...Array(3)]);
  const app = document.querySelector('#app');
  const cross = 'X';
  const circle = 'O ';
  const create = (({
    tag,
    classList,
    textContent,
    events = {}
  }) => {
    const element = document.createElement(tag);
    element.classList = classList;
    element.textContent = textContent;
    Object.entries(events).forEach(([key, value]) =>
      element.addEventListener(key, value));
    return element;
  })
  const AddGameData = (row, box) => {
    gameData[row][box] = cross;
    render();
  }
  const clearApp = () => {
    const children = [...app.children];
    children.forEach(child => app.removeChild(child));
  }
  const render = () => {
    clearApp();

    gameData.forEach((rowData, rowIndex) => {
      const row = create({
        tag: 'div',
        classList: 'row'
      })
      rowData.forEach((boxData, boxIndex) => {
        const box = create({
          tag: 'div',
          classList: 'box',
          textContent: boxData,
          events: {
            click: () => AddGameData(rowIndex, boxIndex)
          }
        });
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
    clearApp();
    render();
  }
  const initApp = () => {
    const startButton = create({
      tag: 'button',
      classList: 'primary-button',
      textContent: 'Start',
      events: {
        click: start
      }
    });
    app.appendChild(startButton);
  };

  document.addEventListener('DOMContentLoaded', initApp);
})();