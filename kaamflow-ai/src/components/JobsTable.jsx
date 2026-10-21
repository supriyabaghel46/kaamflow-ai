function JobsTable() {
    // Sample data. Later this can come from a backend.
    const jobs = [
      {
        id: "KF001",
        name: "Rahul Sharma",
        phone: "9876543210",
        device: "iPhone 13",
        issue: "Screen broken",
        fix: "Display replacement",
        status: "In Progress",
        amount: 8500,
        paid: 2000,
        due: "28 Aug 2024",
      },
      {
        id: "KF002",
        name: "Priya Verma",
        phone: "9123456780",
        device: "Samsung S21",
        issue: "Battery issue",
        fix: "Battery replacement",
        status: "Ready",
        amount: 3500,
        paid: 3500,
        due: "26 Aug 2024",
      },
      {
        id: "KF003",
        name: "Amit Gupta",
        phone: "9988776655",
        device: "OnePlus 9",
        issue: "Charging problem",
        fix: "Port replacement",
        status: "In Progress",
        amount: 2800,
        paid: 1000,
        due: "30 Aug 2024",
      },
      {
        id: "KF004",
        name: "Neha Singh",
        phone: "8765432190",
        device: "Xiaomi Note 11",
        issue: "Water damage",
        fix: "Motherboard repair",
        status: "Pending",
        amount: 6500,
        paid: 0,
        due: "02 Sep 2024",
      },
      {
        id: "KF005",
        name: "Vikram Mehta",
        phone: "9654321789",
        device: "iPhone 12",
        issue: "Camera not working",
        fix: "Camera replacement",
        status: "Ready",
        amount: 5500,
        paid: 5500,
        due: "25 Aug 2024",
      },
    ];
  
    // "In Progress" becomes "status in-progress" (used as a CSS class)
    function getStatusClass(status) {
      return "status " + status.toLowerCase().replace(" ", "-");
    }
  
    return (
      <div className="jobs-card">
        <div className="jobs-header">
          <h3>Recent Repair Jobs</h3>
          <a href="#">View All</a>
        </div>
  
        {/* This wrapper lets the table scroll sideways on phones */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Device</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>
                    <strong>{job.name}</strong>
                    <br />
                    <small>{job.phone}</small>
                  </td>
                  <td>📱 {job.device}</td>
                  <td>
                    {job.issue}
                    <br />
                    <small>{job.fix}</small>
                  </td>
                  <td>
                    <span className={getStatusClass(job.status)}>
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <strong>₹ {job.amount}</strong>
                    <br />
                    <small className={job.paid === 0 ? "red-text" : "green-text"}>
                      ₹ {job.paid} paid
                    </small>
                  </td>
                  <td>{job.due}</td>
                  <td>
                    <button className="dots-btn">•••</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default JobsTable;