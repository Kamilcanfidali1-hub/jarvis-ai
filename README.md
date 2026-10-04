@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  color-scheme: dark;
  --bg: #040d17;
  --bg-deep: #071d2c;
  --panel: rgba(8, 24, 38, 0.86);
  --panel-strong: rgba(11, 27, 43, 0.96);
  --line: rgba(118, 198, 255, 0.17);
  --text: #ebf8ff;
  --muted: #9bb4c9;
  --primary: #5ad3ff;
  --primary-strong: #1d8cff;
  --secondary: #7ef4d7;
  --danger: #ff6a88;
  --warning: #ffd166;
  --shadow: rgba(0, 0, 0, 0.42);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  background:
    radial-gradient(circle at top left, rgba(35, 98, 160, 0.42), transparent 24%),
    radial-gradient(circle at bottom right, rgba(64, 202, 184, 0.18), transparent 28%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-deep) 100%);
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
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 22px;
  height: 100vh;
  padding: 22px;
}

.sidebar,
.chat-panel {
  background: rgba(9, 23, 36, 0.8);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 18px 60px var(--shadow);
  backdrop-filter: blur(14px);
}

.sidebar {
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px 6px 12px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: 0 0 18px rgba(90, 211, 255, 0.5);
  color: #02131b;
  font-size: 1.8rem;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 0.74rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

h1, h2 {
  margin: 0;
}

.status-panel,
.meta-box,
.select-block {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 16px;
}

.status-panel {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-panel.listening {
  border-color: rgba(126, 244, 215, 0.37);
}

.status-panel.thinking {
  border-color: rgba(255, 209, 102, 0.35);
}

.status-panel.speaking {
  border-color: rgba(90, 211, 255, 0.4);
}

.status-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #55f1aa;
  box-shadow: 0 0 12px rgba(85, 241, 170, 0.8);
}

.status-label {
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--muted);
}

.status-value {
  margin: 6px 0 0;
  font-weight: 600;
  color: var(--text);
}

.meta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
}

.meta-box strong {
  color: var(--text);
}

.select-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--muted);
}

select {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 12px;
}

.shortcut-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}

.shortcut-list button {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.02);
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
  gap: 16px;
  padding: 22px 26px 16px;
  border-bottom: 1px solid var(--line);
}

.control-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.primary,
.secondary,
.composer button {
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 700;
}

.primary,
.composer button {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #02131b;
}

.secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
}

button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
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

.bubble-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: min(82%, 700px);
}

.message-row.user .bubble-wrap {
  align-items: flex-end;
}

.bubble {
  padding: 15px 16px;
  border-radius: 18px;
  line-height: 1.55;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  word-break: break-word;
}

.message-row.user .bubble {
  background: linear-gradient(135deg, rgba(90, 211, 255, 0.18), rgba(126, 244, 215, 0.1));
  border: 1px solid rgba(90, 211, 255, 0.22);
}

.message-row.assistant .bubble {
  background: rgba(255, 255, 255, 0.026);
  border: 1px solid rgba(126, 244, 215, 0.18);
}

.bubble.typing {
  color: var(--muted);
}

.timestamp {
  display: block;
  font-size: 0.73rem;
  color: var(--muted);
  padding: 0 4px;
}

.composer {
  border-top: 1px solid var(--line);
  display: flex;
  gap: 12px;
  padding: 18px 26px 26px;
}

.composer input {
  flex: 1;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
  color: var(--text);
}

.composer input::placeholder {
  color: var(--muted);
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
  }

  .sidebar,
  .chat-panel {
    min-height: 0;
  }

  .topbar,
  .composer {
    flex-direction: column;
    align-items: stretch;
  }

  .control-group {
    justify-content: flex-end;
  }
}
