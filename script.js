// whatever data is collected i.e to do item and the date has to be stored in an object array so we will create a empty object array and push whenever we encounter addition of tasks or remove whenever delete button is pressed
let todoList = [
    {
      item: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      item: 'Go to College',
      dueDate: '4/10/2023'
    }
  ];
  
  displayItems();
  
  function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';//once storing the currently entered things in the object array we shall empty the placeholder 
    dateElement.value = '';
    displayItems();
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }