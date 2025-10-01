

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCount(count + step);
  const decrease = () => setCount(count - step);

  const upgradeStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase +{step}</button>
      <button onClick={decrease}>Decrease -{step}</button>
      <button onClick={upgradeStep}>increase +1 </button>
    </div>
  );
}

export default App;

