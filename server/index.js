@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  color-scheme: dark;
  --bg: #06131f;
  --bg-strong: #091c2d;
  --panel: rgba(13, 26, 40, 0.85);
  --panel-soft: rgba(19, 31, 46, 0.9);
  --line: rgba(126, 194, 255, 0.18);
  --text: #eaf9ff;
  --muted: #9dbad0;
  --primary: #5ad3ff;
  --primary-strong: #47b3ff;
  --secondary: #7ef4d7;
  --shadow: rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  background:
    radial-gradient(circle at top left, rgba(25, 90, 140, 0.38), transparent 35%),
    radial-gradient(circle at bottom right, rgba(40, 180, 160, 0.18), transparent 25%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
}

.sidebar,
.chat-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 18px 50px var(--shadow);
}

.sidebar {
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #04151f;
  font-size: 1.7rem;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

h1, h2 {
  margin: 0;
}

.status-panel,
.select-block {
  background: var(--panel-soft);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 16px;
}

.status-panel {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #62f3a5;
  box-shadow: 0 0 10px rgba(98, 243, 165, 0.8);
}

.select-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--muted);
}

select {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.shortcut-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.shortcut-list button {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  padding: 12px 14px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.shortcut-list button:hover {
  transform: translateY(-1px);
  border-color: rgba(90, 211, 255, 0.4);
}

.chat-panel {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 26px 16px;
  border-bottom: 1px solid var(--line);
}

.control-group {
  display: flex;
  gap: 10px;
}

.primary,
.secondary,
.composer button {
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 600;
}

.primary,
.composer button {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #031722;
}

.secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  border: 1px solid var(--line);
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-row {
  display: flex;
}

.message-row.user {
  justify-content: flex-end;
}

.bubble {
  max-width: min(75%, 620px);
  padding: 14px 16px;
  border-radius: 18px;
  line-height: 1.5;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

.message-row.user .bubble {
  background: linear-gradient(135deg, rgba(90, 211, 255, 0.25), rgba(126, 244, 215, 0.12));
  border: 1px solid rgba(90, 211, 255, 0.25);
}

.message-row.assistant .bubble {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(126, 244, 215, 0.18);
}

.bubble.typing {
  color: var(--muted);
}

.composer {
  border-top: 1px solid var(--line);
  display: flex;
  gap: 12px;
  padding: 18px 26px 26px;
}

.composer input {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
  color: var(--text);
}

.composer input::placeholder {
  color: var(--muted);
}

.composer button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
    height: auto;
  }

  .sidebar,
  .chat-panel {
    min-height: 0;
  }
}
