function Header() {
    return (
      <div className="header">
        <input
          className="search"
          type="text"
          placeholder="🔍  Search jobs, customers or devices..."
        />
  
        <div className="header-right">
          <span className="bell">🔔</span>
          <div className="avatar">S</div>
        </div>
      </div>
    );
  }
  
  export default Header;