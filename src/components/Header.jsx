function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-violet-400">
        NexaFlow
      </h1>

      <nav className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;