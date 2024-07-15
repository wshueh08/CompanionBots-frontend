import './button.css';

function Button({ type = "button", visual = "button", onClick, children }) {
    const className = visual === "link" ? "link-style" : "button-style";
    return (
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  export default Button;
