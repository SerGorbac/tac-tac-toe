(function IIFE() {
  const combos = [
    [
      [0, 0],
      [0, 1],
      [0, 2]
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2]
    ],
    [
      [2, 0],
      [0, 1],
      [2, 2]
    ]

    [
      [0, 0],
      [1, 0],
      [2, 0]
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1]
    ],
    [
      [2, 0],
      [1, 2],
      [2, 2]
    ],

    [
      [0, 0],
      [1, 1],
      [2, 2]
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0]
    ]
  ];
  const gameData = [...Array(3)].map(item => [...Array(3)]);
  const app = document.querySelector('#app');
  const cross = 'X';
  const circle = 'O';
  const turn = 0;
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

  const checkWinner = () => {
    const currentChar = turn % 2 === 0 ? cross : circle;
    const isWinner = combos.some(combo => combo.every(([row, box]) => gameData[row][box] === currentChar));
    winner ? isWinner : currentChar = null;
    return isWinner;
  };

  const AddGameData = (row, box) => {
    gameData[row][box] = turn % 2 === 0 ? cross : circle;
    const isWinner = checkWinner();

    if (isWinner) {
      turn = turn + 1;
    }
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
        const allowClick = !!gameData[rowIndex][boxIndex] || !!winner;
        [boxIndex]
        const box = create({
          tag: 'div',
          classList: 'box',
          textContent: boxData,
          events: {
            click: () => (allowClick ? null : AddGameData(rowIndex, boxIndex)),
          },
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