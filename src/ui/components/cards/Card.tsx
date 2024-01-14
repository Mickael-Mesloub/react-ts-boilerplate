import CustomButton, { ButtonType } from '../CustomButton';
import './Card-styles.scss';

interface CardProps {
  isDarkMode: boolean;
  cardTitle: string;
  cardSubtitle?: string;
  cardContent: string;
  hasButton: boolean;
  buttonType?: ButtonType;
  buttonTitle?: string;
}

const Card = ({
  isDarkMode,
  cardTitle,
  cardSubtitle,
  cardContent,
  hasButton,
  buttonType,
  buttonTitle,
}: CardProps) => {
  return (
    <div className={`card ${isDarkMode ? 'card-dark' : 'card-light'}`}>
      <div className="card-header">
        <h2 className="heading">{cardTitle}</h2>
      </div>
      <div className="card-body">
        {cardSubtitle && <h2 className="sub-heading">{cardSubtitle}</h2>}

        <p className="card-content">{cardContent}</p>
        {hasButton && (
          <div className="card-footer">
            <CustomButton text={buttonTitle} type={buttonType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
