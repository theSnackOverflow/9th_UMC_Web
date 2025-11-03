import Button from "./Button";

interface ButtonGroupProps {
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ButtonGroup = ({
  handleIncrement,
  handleDecrement,
}: ButtonGroupProps) => {
  return (
    <div className="flex gap-2">
      <Button text="1 증가" onClick={handleIncrement} />
      <Button text="1 감소" onClick={handleDecrement} />
    </div>
  );
};

export default ButtonGroup;
