export default function TodoInput(props){
    const {hanndleAddTodos, todoValue, setTodoValue} = props;
    return (
        <>
            <header>
                <input value={todoValue} onChange={(e)=>{
                    setTodoValue(e.target.value)
                }} placeholder="Enter to do..."/>
                <button onClick={()=>{
                    hanndleAddTodos(todoValue)
                    setTodoValue('')
                }}>Add</button>
            </header>
        </>
    )
}