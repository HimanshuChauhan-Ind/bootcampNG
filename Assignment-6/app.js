const btn = document.querySelector('#btn');
const entry = document.querySelector('#entry');
const tasks = document.querySelector('#tasks');

console.log("js is linked");

btn.onclick = (e) =>{
    // creating the list
    const todoText = entry.value;
    const li = document.createElement('li');
    li.innerText =  todoText;
    //Creating the delete buttton
    const del = document.createElement('button');
    del.innerHTML = '<i class="fas fa-minus-circle lg"></i>';
    const ed = document.createElement('button');
    ed.innerHTML = '<i class="far fa-edit"></i>';
    li.append(del);
    li.append(ed);
    del.onclick = (e) => {
       console.log(e);
       li.remove();
       
    }

    ed.onclick = () => {
        const edited = prompt("Enter the new task")
        li.innerText = edited;
        li.append(del);
        li.append(ed);
    }
    del.classList.add('del');
    ed.classList.add('ed');

    tasks.append(li);


    entry.value = "";
}