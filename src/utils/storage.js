export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage 사용 불가 예외 무시
  }
};

export const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // 예외 무시
  }
};

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

export { getItem, setItem, remove, clear, removeItem };
