export default function GameCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="/GameCoverImages/Ty the Tasmanian Tiger 2- Bush Rescue.jpg"
          alt="Ty 2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Ty The Tasmanian Tiger 2
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Krome Studios</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Star</div>
          <div className="badge badge-outline">Circle</div>
        </div>
      </div>
    </div>
  );
}
