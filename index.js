const state = {
  name: "Karthick",
  age: 25
};

let listeners = new Set(); // Store subscribers (components)

function updateState(newData) {
  Object.assign(state, newData); // Update state
  listeners.forEach((listener) => listener()); // Notify all subscribers
}

// Subscribe function for React components
function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener); // Unsubscribe on unmount
}

// Get the latest snapshot of state
function getSnapshot() {
  return { ...state }; // Return a copy
}

export { updateState, subscribe, getSnapshot };
