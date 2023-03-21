import React from 'react'
import MyButton from '../Button/MyButton'
import Input from '../Input/Input'


function TodoBoxForm({todosBox, setTodosBox}) {

    const addNewTodo = (evt) => {
        evt.preventDefault();

        // console.log(evt.target.elements);

        const [todoBoxName] = evt.target.elements;

        let newTodoOBJ = {
            id: todosBox.length > 0 ? todosBox.length + 1 : 0,
            name: todoBoxName.value.trim(),
            todoTitles: [
                // {
                    // id
                // Title
                // }
            ]
        }

        setTodosBox([...todosBox, newTodoOBJ]);

        console.log(todosBox);

    } 

  return (
    <div>
      <form onSubmit={(evt) => addNewTodo(evt)} className='d-flex flex-column gap-3'>
            <Input placeholder="Todo Box name"></Input>
            <MyButton color="primary" type="submit">Add New BOX</MyButton>
      </form>
    </div>
  )
}

export default TodoBoxForm
