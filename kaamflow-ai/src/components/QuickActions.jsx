function QuickActions() {
    const actions = [
      { label: "+  Add New Repair Job", color: "blue" },
      { label: "👤  Add Customer", color: "green" },
      { label: "💰  Record Payment", color: "purple" },
      { label: "✨  AI Assistant", color: "orange" },
    ];
  
    return (
      <div className="card quick-actions">
        <h3>Quick Actions</h3>
  
        {actions.map((a) => (
          <button key={a.label} className={"action-btn " + a.color}>
            {a.label}
          </button>
        ))}
      </div>
    );
  }
  
  export default QuickActions;