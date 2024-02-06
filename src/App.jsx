import './App.css';
import { useState } from 'react';

const todoList = [
  {
    id: 1,
    task: 'wyrzucić śmieci',
  },
  {
    id: 2,
    task: 'zrobić zakupy',
  },
];

function App() {
  const [isInputShown, setIsInputShown] = useState(false);
  const [taskList, setTaskList] = useState(todoList);
  const [inputValue, setInputValue] = useState('');

  const todoElement = taskList.map((item) => (
    <ul key={item.id} className="m-2 flex flex-row justify-between">
      <li className="mx-4 my-2 font-semibold">{`> ${item.task}`}</li>
      <div>
        <button
          onClick={handleCheck}
          className="p-2 border-2 border-teal-600 rounded-md"
        >
          Zrobione!
        </button>
        <button
          onClick={() => handleRemove(item.id)}
          className="p-2 ml-2 border-2 border-teal-600 rounded-md"
        >
          Usuń
        </button>
      </div>
    </ul>
  ));

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    setIsInputShown(false);
    setTaskList((prevList) => [
      ...prevList,
      { id: prevList.length + 1, task: inputValue },
    ]);
    setInputValue('');
  }

  function handleRemove(id) {
    setTaskList((prevList) => prevList.filter((item) => item.id !== id));
  }

  function handleCheck(e) {
    e.target.parentElement.parentElement.style.textDecoration = 'line-through';
  }

  return (
    <div className="p-4 border-4 border-black rounded-lg bg-white">
      <div className="flex flex-row justify-between">
        <h1 className="mb-2 font-bold self-center">
          DO ZROBIENIA{' '}
          {`${
            new Date().getDate() > 9
              ? new Date().getDate()
              : '0' + new Date().getDate()
          }/${
            new Date().getMonth().length > 1
              ? new Date().getMonth()
              : '0' + new Date().getMonth()
          }/${new Date().getFullYear()}`}
          :
        </h1>
        {!isInputShown && (
          <button
            onClick={() => setIsInputShown(true)}
            className="border-2 border-teal-600 w-8 h-8 rounded"
          >
            +
          </button>
        )}
      </div>
      {/* <hr className="my-2 bg-slate-900 h-1" /> */}
      <div className="flex flex-col">
        <label htmlFor="text-input" className="font-semibold">
          ilość zadań: {taskList.length}
        </label>
        <div className="flex justify-between my-2">
          {isInputShown && (
            <>
              <input
                onChange={handleInput}
                type="text"
                className="border-2 border-black h-8 rounded"
                id="text-input"
                value={inputValue}
              />

              <button
                onClick={handleSubmit}
                className="mr-2 p-2 border-2 border-teal-600 rounded-md"
              >
                Dodaj
              </button>
            </>
          )}
        </div>
      </div>

      <hr className="bg-slate-900 h-1" />
      {todoElement}
    </div>
  );
}

export default App;
