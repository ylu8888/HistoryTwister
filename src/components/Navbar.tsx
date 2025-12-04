import React from "react";

interface NavbarProps {
  resetLaunch: () => void; 
  resetPromptAndStyle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ resetLaunch, resetPromptAndStyle }) => {

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    resetLaunch();
    resetPromptAndStyle();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo" onClick={handleLogoClick}>HistoryTwister</h1>
      </div>

      <div className="navbar-right">
        <a href="#how">How It Works</a>
        <a href="#about">About</a>
        {/* <a 
          href="https://www.linkedin.com/in/yang-lu-a47441265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a> */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=yanglu91603@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
