function MyButton() {
    function handleClick() {
      alert('thanks for clicking me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click Here
      </button>
    );
  }