
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <span>© {currentYear} Twistory</span>
      </div>

      <div className="footer-right">
        <span>Yang Lu</span>
        <a href="https://www.linkedin.com/in/yang-lu-a47441265/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/ylu8888" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
