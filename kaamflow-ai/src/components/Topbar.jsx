function Topbar(props) {
    return (
      <div className="topbar">
        <button className="menu-btn" onClick={props.onMenuClick}>
          ☰
        </button>
  
        <input type="text" placeholder="Search jobs, customers or devices..." />
  
        <div className="avatar">S</div>
      </div>
    );
  }
  
  export default Topbar;