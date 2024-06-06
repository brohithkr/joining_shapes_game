const colors = {
  blue: "#3b82f6",
  red: "#e64747",
  green: "#16a34a",
  lightGrey: "#cbd5e1",
  darkGrey: "#94a3b8",
  getRgb: (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`
  }
};

export default colors;
