import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(updateMode) {
    setMode(updateMode);
  }

  return { mode, transition };
}
