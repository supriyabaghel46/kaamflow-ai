import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard"; 
import JobsTable from "./components/JobsTable"; 
import VoicePanel from "./components/VoicePanel"; 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="main">
        <Topbar onMenuClick={() => setMenuOpen(!menuOpen)} />

        <div className="content">
          <h1>Welcome back, Shivam!</h1>
          <p>Here's what's happening in your repair shop today.</p>
          <div className="stats-grid">
            <StatCard
              icon="📋"
              title="Total Jobs"
              value="24"
              badge="↑ 12%"
              text="+3 from last week"
              color="blue"
            />
            <StatCard
              icon="⚙️"
              title="In Progress"
              value="8"
              badge="33%"
              text="Currently being repaired"
              color="yellow"
            />
            <StatCard
              icon="✅"
              title="Ready for Pickup"
              value="10"
              badge="42%"
              text="Completed and ready"
              color="green"
            />
            <StatCard
              icon="₹"
              title="Pending Payments"
              value="₹ 12,500"
              badge="25%"
              text="From 6 customers"
              color="red"
            />
          </div>
          {/* voice panel will go here (Step 5) */}
          {<VoicePanel /> }
          {<JobsTable /> }
        </div>
      </div>
    </div>
  );
}

export default App;