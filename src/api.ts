import { Task } from "./types";

export const getAllTodos = async ( ): Promise<Task[ ]> => {
    const res = await fetch(`http://localhost:3001/tasks`,{
       cache:"no-store", 
    });
    const todos =res.json();
    return todos;
}

export const addTodo = async (todo:Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks`,{
       method:'POST',
       headers:{
        'content-Type':'application/json',
       },
       body:JSON.stringify(todo),
    });
    const newtodo =res.json();
    return newtodo;
}

export const editTodo = async (id:string,newText:string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
       method:'PUT',
       headers:{
        'content-Type':'application/json',
       },
       body:JSON.stringify({text:newText}),
    });
    const updateTodo =res.json();
    return updateTodo;
}

export const deleteTodo = async (id:string): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
       method:'DELETE',
       headers:{
        'content-Type':'application/json',
       },
    });
    const deleteTodo =res.json();
    return deleteTodo;
};