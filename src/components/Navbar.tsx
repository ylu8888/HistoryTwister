const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo"> Twistory </h2>
      </div>

      <div className="navbar-right">
        <a href="#how-it-works">How It Works </a>
        <a href="#why-twistory">About Twistory </a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
