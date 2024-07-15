function Card({ className, onClick, children }) {
    return (
      <div className={`card-container ${className}`} onClick={onClick}>
        {children}
      </div>
    );
  }
  
export default Card;