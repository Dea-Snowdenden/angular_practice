/* function showTodo(todo: {title: string, text: string}){
    console.log(todo.title+ ' ' + todo.text);
}

let myTodo = {title: 'Bake:', text: 'Bake it till you make it. lol'}

showTodo(myTodo);
*/ 

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo){
    console.log(todo.title': '+todo.text);
}

let myTodo = {title: 'Bake:', text: 'Bake it till you make it. lol'}

showTodo(myTodo);

