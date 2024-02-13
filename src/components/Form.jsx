import { useState } from 'react';
import { Button } from './Button';

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
        // setInputValue('');
      }}
      className="flex items-center gap-16 mb-2"
    >
      {/* <div>
        <label htmlFor="text">Zadanie:</label>
      </div> */}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        className="max-w-full h-11 border-2 border-black rounded"
        id="text"
        value={inputValue}
      />
      <Button type="submit" disabled={inputValue === ''}>
        Dodaj
      </Button>
    </form>
  );
}
