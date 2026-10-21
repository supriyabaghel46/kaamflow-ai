function StatCard(props) {
    return (
      <div className={"stat-card " + props.color}>
        <div className="stat-top">
          <div className="stat-icon">{props.icon}</div>
  
          <div>
            <p className="stat-title">{props.title}</p>
            <div className="stat-value-row">
              <h2>{props.value}</h2>
              <span className="stat-badge">{props.badge}</span>
            </div>
          </div>
        </div>
  
        <small className="stat-text">{props.text}</small>
      </div>
    );
  }
  
  export default StatCard;