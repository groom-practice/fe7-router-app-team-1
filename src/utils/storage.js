const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage 사용 불가 예외 무시
  }
};

const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // 예외 무시
  }
};
function remove(key) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

export { getItem, setItem, remove, clear, removeItem };
