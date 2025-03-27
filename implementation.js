// Use can use this in any components;
import { subscribe, getSnapshot, updateState } from "...";

const Component = () => {
  const state = useSyncExternalStore(subscribe, getSnapshot);

  const onUpdateState = () => {
    const newState = { ...state, name: '...', age: '...' }
    updateState(newState);
  }
}

// No need for forceUpdate – Components automatically re-render.
// Multiple components update together – No extra work needed.
// Efficient & scalable – Only re-renders components that use the updated state.
