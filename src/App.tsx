
import { useState } from "react";
import { audioEngine } from "./audio/AudioEngine";

const notes = [
  { label: "C4", note: "C4" },
  { label: "D4", note: "D4" },
  { label: "E4", note: "E4" },
  { label: "F4", note: "F4" },
  { label: "G4", note: "G4" },
  { label: "A4", note: "A4" },
  { label: "B4", note: "B4" },
  { label: "C5", note: "C5" },
];

function App() {
  const [ready, setReady] = useState(false);
  const [activeNotes, setActiveNotes] = useState<string[]>([]);

  async function initializeAudio() {
    await audioEngine.initialize();
    setReady(true);
  }

  function playNote(note: string) {
    if (!ready) return;

    audioEngine.playNote(note);

    setActiveNotes((current) =>
      current.includes(note) ? current : [...current, note]
    );
  }

  function releaseNote(note: string) {
    audioEngine.releaseNote(note);

    setActiveNotes((current) =>
      current.filter((active) => active !== note)
    );
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>AirKeys</h1>
      <p>Audio Engine Prototype</p>

      {!ready ? (
        <button onClick={initializeAudio}>
          Initialize Audio
        </button>
      ) : (
        <p>Audio Engine Ready</p>
      )}

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {notes.map(({ label, note }) => (
          <button
            key={note}
            disabled={!ready}
            onPointerDown={() => playNote(note)}
            onPointerUp={() => releaseNote(note)}
            onPointerLeave={() => releaseNote(note)}
            onContextMenu={(event) => event.preventDefault()}
            style={{
              width: "65px",
              height: "150px",
              background: activeNotes.includes(note)
                ? "#b6a0ff"
                : "white",
              border: "1px solid #999",
              borderRadius: "6px",
              cursor: ready ? "pointer" : "not-allowed",
              fontSize: "16px",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
