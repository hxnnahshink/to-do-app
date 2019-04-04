function onReady(){
  let toDos =[];
  let toDoId = 1;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', function(event){
    event.preventDefault(); //prevents entire page from refreshing (refresh is default         behavior)

    let title = NEW_TODO_TEXT.value;
    let todoObj = {
      name: title,
      id: toDoId
    }

    toDoId++; // adds 1 every time
    toDos.push(title);

    let newLi = document.createElement('li') // creates a list upon input (<li></li>)
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox"; // if we don't add this checkbox to the li, it will never     show up

    let deleteBtn = document.createElement('button'); // don't use const for these since       these elements may be redefined in the future -> creates an empty button next to the m     checkbox
    deleteBtn.textContent = "Delete" // adds text "Delete" to button - need to add event       listener so that the button has behavior

    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
     // console.log(event);
     // this.parentElement represents the buttons <li> parent
      TODO_LIST.removeChild(this.parentElement);

      toDos.forEach(function(currentToDo, index){}) // currentToDo represents the current       item while index represents the index of a given array
      //console.log(currentToDo, index);
      if(currentToDo === buttonLiText){
        // remove from array
        toDos.splice(index, 1);
      }
     })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = ""; // empties text box from previous entry to blank text box
  });
};

window.onload = function(){
  onReady();
};
