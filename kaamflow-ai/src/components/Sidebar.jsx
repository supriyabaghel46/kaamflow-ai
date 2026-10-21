function Sidebar(props) {
    return (
      <div className={props.isOpen ? "sidebar open" : "sidebar"}>
        <h2>KaamFlow AI</h2>
        <p>Repair Shop Assistant</p>
  
        <ul>
          <li onClick={props.onClose}>Dashboard</li>
          <li onClick={props.onClose}>Repair Jobs</li>
          <li onClick={props.onClose}>Customers</li>
          <li onClick={props.onClose}>Payments</li>
          <li onClick={props.onClose}>AI Assistant</li>
          <li onClick={props.onClose}>Reports</li>
          <li onClick={props.onClose}>Settings</li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;