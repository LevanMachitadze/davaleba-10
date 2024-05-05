let btn = document.getElementById('add-task-button');

const taskinput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

function mainFunction() {
  let inputValue = taskinput.value.trim();
  taskinput.value = '';
  if (inputValue !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = inputValue;

    let check = document.createElement('img');
    check.src = './assets/Check.png';

    let checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');

    let trashIcon = document.createElement('img');
    trashIcon.src = './assets/TrashSimple.png';

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function () {
      tasklist.removeChild(listItem);
    });
    let rightDiv = document.createElement('div');
    rightDiv.classList.add('right-div');
    rightDiv.appendChild(checkBtn);
    rightDiv.appendChild(removeBtn);

    tasklist.appendChild(listItem);
    checkBtn.appendChild(check);
    removeBtn.appendChild(trashIcon);
    listItem.appendChild(rightDiv);

    listItem.classList.add('list-div');

    checkBtn.addEventListener('click', function () {
      listItem.classList.toggle('marked');
    });
  }
}

btn.addEventListener('click', function () {
  mainFunction();
});
taskinput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    mainFunction();
  }
});
