import React from "react";
import { TodoContext } from "../TodoContex"
import './TodoForm.css'

function TodoForm() {
    const { 
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = (event) => {
        setOpenModal(false);
    };
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe la descripción del nuevo TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
}
export { TodoForm }; 