const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generateTemplate = todo =>{

    const html =
    ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash delete" aria-hidden="true"></i>
      </li>` ;

      list.innerHTML += html
};

addForm.addEventListener('submit', e=>{
    e.preventDefault()
    const todo = addForm.add.value.trim();

    if(todo.length){
        
        generateTemplate(todo)
        addForm.reset();
    }

});

// delete todos

list.addEventListener('click' , e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }


});

const filterTodos = (text) =>{

    Array.from(list.children)
        .filter( (todo) =>  !todo.textContent.toLowerCase().includes(text))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter( (todo) =>  todo.textContent.toLowerCase().includes(text))
        .forEach((todo) => todo.classList.remove('filtered'));


};

// keyup event

search.addEventListener('keyup', () =>{

    const text = search.value.trim().toLowerCase();

    filterTodos(text);

});

