const lists = []
const display = document.querySelector('.display');
rendering()
function addtoList(){
    const toDo = document.querySelector('.adding');
    const texts = toDo.value;

    const dateInput = document.querySelector('.theDate').value;

    if(texts.length > 0){
        lists.push({name:texts, dueDate:dateInput});
        // console.log(lists);
        toDo.value = ''
        rendering()
    }
    
 
}

function rendering(){
   let thelist = '';
   for(let i=0; i< lists.length; i++){
    const {name, dueDate} = lists[i];
    const todo = 
        `<div>
        ${name}</div> 
        <div>${dueDate}</div>
        <button onclick = "
            lists.splice(${i}, 1);
            rendering();
        " class = "delete-button">Delete</button>
        `
    thelist += todo;
   }
   display.innerHTML = thelist
   
}

