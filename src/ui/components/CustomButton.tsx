export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'disabled';

interface CustomButtonProps {
  type?: ButtonType;
  text?: string;
  isDisabled?: boolean;
}

const CustomButton = ({ text, type, isDisabled }: CustomButtonProps) => {
  return (
    <button
      className={
        isDisabled ? 'button button-disabled' : `button button-${type}`
      }
      aria-disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
