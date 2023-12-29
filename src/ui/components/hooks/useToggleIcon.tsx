import '../styles/theme-switch-styles.scss';

interface ToggleIconProps {
  lightIcon: JSX.Element;
  darkIcon: JSX.Element;
}

const useToggleIcon = ({ lightIcon, darkIcon }: ToggleIconProps) => {
  const uncheckedIcon = <div className="toggle-icon">{lightIcon}</div>;
  const checkedIcon = <div className="toggle-icon">{darkIcon}</div>;

  return { uncheckedIcon, checkedIcon };
};

export default useToggleIcon;
