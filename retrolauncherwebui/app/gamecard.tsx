export default function GameCard({
  imageSource,
  altText,
  titleText,
  developerText,
  launchBoxLink,
}: {
  imageSource: string;
  altText: string;
  titleText: string;
  developerText: string;
  launchBoxLink: string;
}) {
  return (
    <div className="card card-xs bg-base-100 shadow-sm">
      <figure>
        <img src={imageSource} alt={altText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titleText}</h2>
        <p>{developerText}</p>
        <p>
          <a href={launchBoxLink}>
            <p>LaunchBox DB Link</p>
          </a>
        </p>
        <div className="card-actions justify-left">
          <div className="badge">✴️️</div>
          <div className="badge">☀️</div>
        </div>
      </div>
    </div>
  );
}
