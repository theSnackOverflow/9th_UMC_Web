import { useCount } from "../context/CounterProvider";
import Button from "./Button";

const ButtonGroup = () => {
  const { handleDecrement, handleIncrement } = useCount();
  return (
    <div className="flex gap-2">
      <Button text="1 증가" onClick={handleIncrement} />
      <Button text="1 감소" onClick={handleDecrement} />
    </div>
  );
};

export default ButtonGroup;
