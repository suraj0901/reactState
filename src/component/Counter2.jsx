import { useCounter } from "../store/store";
import Button from "./Button";

function Counter2() {
  const { state, action } = useCounter();
  return (
    <div className="flex m-4 text-2xl justify-center items-center gap-4">
      <Button onClick={() => action.decreament()}>--</Button>
      <span>{state.count}</span>
      <Button onClick={() => action.increament()}>++</Button>
      <Button onClick={() => action.setCount(10)}>setVal 10</Button>
    </div>
  );
}

export default Counter2;
