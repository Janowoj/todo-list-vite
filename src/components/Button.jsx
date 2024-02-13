export function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-teal-600 my-2 p-2 rounded"
    >
      {children}
    </button>
  );
}
