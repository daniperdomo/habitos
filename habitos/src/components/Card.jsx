export default function Card({ title, children, imageUrl, imageAlt }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt || "Ilustración"} />
        </div>
      )}
    </div>
  );
}