interface CardProps {
  isDarkMode: boolean;
  cardTitle: string;
  cardSubtitle?: string;
  cardContent: string;
  buttonType?: string;
  buttonTitle: string;
}

const Card = ({
  isDarkMode,
  cardTitle,
  cardSubtitle,
  cardContent,
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
        <div className="card-footer">
          <div className={`button${buttonType ? ` ${buttonType}-button` : ''}`}>
            {buttonTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
