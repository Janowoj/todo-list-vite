import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { TodoItem } from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todoName: 'wyrzucić śmieci',
      done: true,
    },
    {
      id: 2,
      todoName: 'zrobić zakupy',
      done: false,
    },
  ]);

  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className="inline-block px-6 py-4 border-4 border-black rounded-md bg-white max-w-screen-md ">
      <header className="flex items-center justify-between gap-5 mb-3">
        <div>
          <h1 className="mb-2 font-bold self-center">
            DO ZROBIENIA{' '}
            {`${
              new Date().getDate() > 9
                ? new Date().getDate()
                : '0' + new Date().getDate()
            }/${
              new Date().getMonth().length > 1
                ? new Date().getMonth() + 1
                : '0' + (new Date().getMonth() + 1)
            }/${new Date().getFullYear()}`}
            :
          </h1>
          <h2 className="font-semibold">ilość zadań: {todoList.length}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className="border-2 border-teal-600 w-8 h-8 rounded"
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodo) => {
            setTodoList((prevList) => [
              ...prevList,
              { id: prevList.length + 1, todoName: newTodo, done: false },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todoList.map(({ id, todoName, done }) => (
          <TodoItem
            key={id}
            todoName={todoName}
            done={done}
            onRemoveButtonClick={() => {
              setTodoList((prevList) =>
                prevList.filter((item) => item.id !== id)
              );
            }}
            onDoneButtonClick={() => {
              setTodoList((prevList) =>
                prevList.map((item) => {
                  if (item.id !== id) {
                    return item;
                  }
                  return {
                    ...item,
                    done: true,
                  };
                })
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
