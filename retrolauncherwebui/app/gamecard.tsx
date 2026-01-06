export default function GameCard({
  imageSource,
  altText,
  titleText,
  developerText,
  launchBoxLink,
  favorited,
  firstTimeViewed,
  onCardClick,
}: {
  imageSource: string;
  altText: string;
  titleText: string;
  developerText: string;
  launchBoxLink: string;
  favorited: string;
  firstTimeViewed: string;
  onCardClick?: (link: string) => void;
}) {
  return (
    <div
      className="card card-xs bg-base-100 shadow-sm"
      onClick={() => onCardClick?.(launchBoxLink)}
    >
      <a href={launchBoxLink}>
        <figure>
          <img src={imageSource} alt={altText} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titleText}</h2>
          <p>{developerText}</p>
          <div className="card-actions justify-left">
            {favorited == "true" ? (
              <div className="badge -ml-2">✴️️</div>
            ) : null}
            {firstTimeViewed == "true" ? (
              <div className="badge -ml-5">☀️</div>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}
