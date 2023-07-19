import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button 
      className="CreateTodoButton"
      onClick ={(event)=>{
        console.log('click en mas')
      }}
>+</button>
  );
}

export { CreateTodoButton };