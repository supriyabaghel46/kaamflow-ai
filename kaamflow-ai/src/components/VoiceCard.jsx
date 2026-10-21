import { useState } from "react";

function VoiceCard() {
  const [recording, setRecording] = useState(false);

  function handleClick() {
    setRecording(!recording); // true becomes false, false becomes true
  }

  return (
    <div className="card voice-card">
      <div className="mic-circle"><Mic /></div>

      <div className="voice-content">
        <h3>Add Repair Job with Voice (Hindi / Hinglish)</h3>
        <p className="muted">Simply speak what the customer says...</p>

        <div className="voice-row">
          <div className="example-box">
            "Bhaiya iska screen toot gaya hai, iPhone 13 hai, display change
            karna hai, advance 2000 liya hai"
          </div>

          <button
            className={recording ? "record-btn stop" : "record-btn"}
            onClick={handleClick}
          >
            🎤 {recording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoiceCard;