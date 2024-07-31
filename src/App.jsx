import { useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { useTodoData } from "./utils/useTodoData";

function App() {
  const textRef = useRef();
  const { data, setData } = useTodoData();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = [...data];
    newData.push({
      id: data.length + 1,
      text: textRef.current.value,
    });

    setData(newData);

    textRef.current.value = ''
  };

  return (
    <div className="container">
      <h1 className="text-blue-600 text-center text-[40px] font-bold">
        Todo App
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={textRef}
          className="border-[1px] border-black p-3"
          type="text"
          placeholder="Enter todo text"
        />
        <Button>Add</Button>
      </form>

      <div className="wrapper">
        {data.map((todo, index) => {
          return (
            <div key={index}>
              <span>{todo.text}</span>
              <Button>Delete</Button>
              <Button variant="dark">Edit</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
