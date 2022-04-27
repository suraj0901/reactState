import Counter1 from "./component/Counter1";
import Counter2 from "./component/Counter2";
import { useCounter } from "./store/store";

function App() {
  const { state } = useCounter();
  console.log("App");
  return (
    <div>
      <h1 className="text-center text-2xl">{state.count}</h1>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
