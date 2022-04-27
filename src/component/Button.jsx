export default ({ onClick, children }) => {
  return (
    <button className="p-2 border rounded" onClick={onClick}>
      {children}
    </button>
  );
};
