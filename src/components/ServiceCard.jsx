function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition">
      <Icon className="text-violet-400 mb-4" size={38} />

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;