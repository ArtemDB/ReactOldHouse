function Header() {
  return (
    <div className="container">
      <header className="header">
        <p>
          <a href="Index.html" className="logo active">
            Interior<span className="dot">.</span>
          </a>
        </p>
        <nav className="nav">
          <a href="AboutUs.html" className="nav-link">
            About us
          </a>
          <a href="Projects.html" className="nav-link">
            Projects
          </a>
          <a href="contacts.html" className="nav-link">
            Contacts
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
