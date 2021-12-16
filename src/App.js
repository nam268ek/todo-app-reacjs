import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
// import * as actionTypes from "../store/actions";
import { Button, Input } from "reactstrap";
import {
  Body,
  Box,
  CInput,
  Container,
  Div,
  Form,
  Header,
  Layout,
  List,
  ListItem,
} from "./App.style";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from "./redux/acction";

function App() {
  const listTodo = useSelector((state) => state.todos.todo);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(listTodo);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const options = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    setFilter(listTodo);
  }, [listTodo]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: input,
      isEdit: true,
      isDone: false,
    };
    input.length > 0 && dispatch(addTodo(data));
    setInput("");
  };

  const handleEdit = (item) => {
    dispatch(editTodo(item.id));
  };
  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };
  const handleUpdateTodo = (id, e) => {
    e.target.value.length === 0
      ? dispatch(deleteTodo(id))
      : dispatch(updateTodo(id, e.target.value));
  };

  const handleOnSelect = ({ value }) => {
    if (value === "active") {
      setFilter(listTodo.filter((item) => item.isDone === false));
    } else if (value === "completed") {
      setFilter(listTodo.filter((item) => item.isDone === true));
    } else setFilter(listTodo);
  };
  return (
    <Container>
      <Layout>
        <Header>
          <Box>
            <Form onSubmit={handleOnSubmit}>
              <Div flex style={{ width: "70%" }}>
                <Input
                  ref={inputRef}
                  type="text"
                  defaultValue={input}
                  onBlur={(e) => setInput(e.target.value)}
                />
                <Button type="submit">ADD</Button>
              </Div>
              <Div style={{ width: "30%" }}>
                <Select options={options} onChange={handleOnSelect} />
              </Div>
            </Form>
          </Box>
        </Header>
        <Body>
          <Box>
            <List>
              {filter?.map((item) => (
                <ListItem key={item.id}>
                  <Div width={100}>
                    <CInput
                      defaultValue={item.title}
                      disabled={item.isEdit}
                      onBlur={(e) => handleUpdateTodo(item.id, e)}
                      done={item.isDone ? 1 : 0}
                    />
                  </Div>
                  <Button
                    style={{ backgroundColor: "white" }}
                    onClick={() => handleComplete(item.id, item.isDone)}
                  >
                    &#10004;
                  </Button>
                  <Button
                    style={{ backgroundColor: "blue" }}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Body>
      </Layout>
    </Container>
  );
}

export default App;
