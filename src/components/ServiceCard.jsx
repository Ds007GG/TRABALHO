function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="card h-100 border-0 shadow-sm bg-white">
      <div className="card-body text-center">
        <div className="mb-3" style={{ color: "#0066cc", fontSize: "2.5rem" }}>
          <Icon size={50} />
        </div>
        <h5 className="card-title text-dark fw-bold">{title}</h5>
        <p className="card-text text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
