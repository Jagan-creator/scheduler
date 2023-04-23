import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(updateMode, replace) {
    if (!replace) {
      setHistory((prev) => [...prev, updateMode]);
    }
    setMode(updateMode);
  }

  function back() {
    const initialHistory = history[history.length - 1] === initial;

    if (!initialHistory) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}
