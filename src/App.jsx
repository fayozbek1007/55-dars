import { useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DeleteButton from './utils/DeleteButton';
import { useTodoData } from "./utils/useTodoData";
import EditForm from "./utils/EditForm";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(null);
  const cityRef = useRef(null);

  const { data, setData } = useTodoData();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = [...data];
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const age = ageRef.current.value.trim();
    const city = cityRef.current.value.trim();

    if (!firstName || !lastName || !age || !city) {
      alert("Siz to'liq ma'lumot kiritmadingiz. Iltimos to'liq ma'lumot kiriting.");
      return;
    }
    newData.push({
      id: data.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age,
      city: city,
    });

    setData(newData);

    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    ageRef.current.value = '';
    cityRef.current.value = '';
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with id: ${id}`);
    const newData = data.filter(todo => todo.id !== id);
    setData(newData);
  };

  return (
    <div className="container">
      <h1 className="text-rose-500 text-center text-[40px] font-bold">
        List of Workers
      </h1>

      <form className="gap-3 flex" onSubmit={handleSubmit}>
        <div className="gap-2">
          <input
            ref={firstNameRef}
            className="border-[1px] border-black p-3 w-100 m-4 rounded [20px]"
            type="text"
            placeholder="Enter first name..."
          />
          <input
            ref={lastNameRef}
            className="border-[1px] border-black p-3 w-100 m-4 rounded [20px]"
            type="text"
            placeholder="Enter last name..."
          />
          <input
            ref={ageRef}
            className="border-[1px] border-black p-3 w-100 m-4 rounded [20px]"
            type="number"
            placeholder="Enter age..."
          />
          <input
            ref={cityRef}
            className="border-[1px] border-black p-3 w-100 m-4 rounded [20px]"
            type="text"
            placeholder="Enter city..."
          />
          <Button>Add</Button>
        </div>
      </form>

      <div className="wrapper">
        {data.map((todo) => (
          <div key={todo.id} className="border-gray-500 border-[2px] bg-slate-200 rounded-3xl">
            <div className="p-4">
              <p className="p-2">{todo.firstName}</p>
              <p className="p-2">{todo.lastName}</p>
              <p className="p-2">{todo.age}</p>
              <p className="p-2">{todo.city}</p>
            </div>
            <div className="gap-4 flex m-0 autofill: mb-4">
              <DeleteButton id={todo.id} onDelete={handleDelete}/>
              <Button variant="dark">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
