function Button({ children, className, onClick }) {
  return (
    <button
      className={`className text-code text-secondary-10 flex gap-1 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
