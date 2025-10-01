

function App() {
  const handleIncrease = () => {
    console.log("increase");
  };

  const handleDecrease = () => {
    console.log("decrease");
  };

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
