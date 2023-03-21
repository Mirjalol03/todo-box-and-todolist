import { Card, CardContent, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from '@mui/icons-material/Clear';
import React from "react";
import Input from "../Input/Input";
// import MyButton from "../Button/MyButton";

function TodoBoxList({ todosBox, setTodosBox }) {
  const [addTodoTitle, setAddTodoTitle] = React.useState(false);
  const [findAddIndex, setFindAddIndex] = React.useState(-1);


  const openTodoBoxListToggle = (index) => {
    setAddTodoTitle(!addTodoTitle);
    setFindAddIndex(index);
  };

  const addNewTodoList = (evt, index) => {
    evt.preventDefault();

    const [todoTitleName] = evt.target.elements;

    // console.log(todoTitleName.value);

    let newTodoOBJ = {
      id: todosBox[index].todoTitles.length > 0 ? todosBox.length + 1 : 0,
      title: todoTitleName.value.trim(),
    };

    todosBox[index].todoTitles.push(newTodoOBJ);
    setTodosBox([...todosBox]);

    console.log(todosBox[index].todoTitles);
  };

  const deleteTodoTitle = () => {
    //delete title code here
  }

  return (
    <div className="mx-3 mt-3 row gap-3">
      {todosBox.length > 0 &&
        todosBox.map((item, index) => {
          return (
            <Card key={item.id} className="col-3">
              <CardContent>
                <CardContent className="d-flex justify-content-between">
                  <Typography variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <IconButton
                    onClick={() => openTodoBoxListToggle(index)}
                    color="primary"
                    aria-label="add new toto title"
                  >
                    <AddIcon></AddIcon>
                  </IconButton>
                </CardContent>

                


                {item.todoTitles.length > 0 &&
                  item.todoTitles.map((todoTitle, titleIndex) => {
                    return (
                      // <CardContent>
                      <Typography className="mt-2 d-flex align-items-center justify-content-between" color="textSecondary">
                        <p style={{width: "90%"}}>{todoTitle.title}</p>
                      <IconButton
                    onClick={() => deleteTodoTitle()}
                    color="error"
                    aria-label="add new toto title"
                  >
                    <ClearIcon></ClearIcon>
                  </IconButton>
                      </Typography>
                      
                    );
                  })}

                {addTodoTitle && findAddIndex === index && (
                  <form className="mt-4" onSubmit={(evt) => addNewTodoList(evt, index)}>
                    <Input placeholder={"Create new Title"}></Input>
                  </form>
                )}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}

export default TodoBoxList;
