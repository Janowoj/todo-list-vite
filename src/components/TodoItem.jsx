import { Button } from './Button';

export function TodoItem({
  todoName,
  done,
  onRemoveButtonClick,
  onDoneButtonClick,
}) {
  //   function handleCheck(e) {
  //     e.target.parentElement.parentElement.style.textDecoration = 'line-through';
  //   }

  return (
    <li className="flex list-none items-center my-2 font-semibold min-w-96 gap-4 border-t-2 border-black pt-2">
      <hr className="bg-slate-900 h-1" />
      <span
        className={`w-full ${done ? 'line-through' : ''}`}
      >{`${todoName}`}</span>

      {!done && <Button onClick={onDoneButtonClick}>Done</Button>}
      <Button onClick={onRemoveButtonClick}>Remove</Button>
    </li>
  );
}
