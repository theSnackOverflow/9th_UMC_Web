interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="px-2 py-1 border border-black rounded-lg hover:scale-110 transition-transform hover:bg-blue-100 active:bg-blue-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
