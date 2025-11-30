const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo" onClick={scrollToTop}>Twistory</h2>
      </div>

      <div className="navbar-right">
        <a href="#how">How It Works </a>
        <a href="#about">About Twistory </a>
        <a href="#contact">Contact</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
