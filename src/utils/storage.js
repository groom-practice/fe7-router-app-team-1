function getItem(key) {
  const item = localStorage.getItem(key);
  return item;
}

function setItem(key, value) {
  localStorage.setItem(key, value);
}

function remove(key) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

export { getItem, setItem, remove, clear };
