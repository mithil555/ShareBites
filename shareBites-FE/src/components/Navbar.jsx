function Navbar({ currentPage, navigate }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate('home')}>
        <div className="nav-logo-mark">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12 Q4 5 8 5 Q12 5 14 12" />
            <path d="M5 8 Q8 4 11 8" />
          </svg>
        </div>
        <span className="nav-logo-text">Share <em>Bites</em></span>
      </div>

      <div className="nav-links">
        <button
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => navigate('home')}
        >
          Home
        </button>
        <button
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => navigate('about')}
        >
          About Us
        </button>
        <button
          className={`nav-link ${currentPage === 'policies' ? 'active' : ''}`}
          onClick={() => navigate('policies')}
        >
          Policies
        </button>
      </div>

      <button className="nav-cta" onClick={() => navigate('add')}>
        + Share Food
      </button>
    </nav>
  );
}

export default Navbar;