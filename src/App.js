import React from 'react';
// React
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "@mui/material";
import MyButton from "./components/Button/MyButton";
import TodoBoxForm from "./components/TodoBoxForm/TodoBoxForm";
import TodoBoxList from './components/TodoBox/TodoBoxList';

function App() {
  const [todosBox, setTodosBox] = React.useState([]); 
  const [todoBoxFormBtn, setTodoBoxFormBtn] = React.useState(false);

 

  const openTodoBoxToggle = () => {
    // console.log(todoBoxFormBtn);
    setTodoBoxFormBtn(!todoBoxFormBtn)
  }

  return (
    <div className="App">
      <Container fixed>
        <div className="row mt-3">
          <div className='col-3'>
          <MyButton className='my-3' color="primary" onClick={() => openTodoBoxToggle()}>Open BoxForm</MyButton>

          {todoBoxFormBtn && (
            <TodoBoxForm todosBox={todosBox} setTodosBox={setTodosBox}></TodoBoxForm>
          )}

          </div>
          <div className="col-9">
            <TodoBoxList todosBox={todosBox} setTodosBox={setTodosBox}></TodoBoxList>
          </div>
        </div>

      {/* <MyButton color="primary">HI CLICK</MyButton>
      <Input value="hello this is input"></Input> */}

      </Container>
    </div>
  );
}

export default App;
