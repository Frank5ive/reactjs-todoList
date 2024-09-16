export default function TodoCard(props) { //allows us to render stuff from other components
  const {children, handleDeleteTodo, index, editTodo} = props
  return (
    <li className="todoItem" >
      {children}
      <div className='actionsContainer'>
            <button onClick={()=>{
              editTodo(index)
            }}><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={()=>{
              handleDeleteTodo(index)
            }}><i className="fa-solid fa-trash" ></i></button>
      </div>     
    </li>
  )
}
