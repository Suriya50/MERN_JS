const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🌦 Weather Live</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-yellow-300">Home</li>
        <li className="cursor-pointer hover:text-yellow-300">Search</li>
        <li className="cursor-pointer hover:text-yellow-300">Alert</li>
      </ul>
    </nav>
  );
};

export default Navbar;