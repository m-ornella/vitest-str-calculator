export function add(str) {
  return str
    .split(/[:,\n]/)
    .reduce((total, num) => total + parseFloat(num || 0), 0);
}
