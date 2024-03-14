export function add(str) {
  var delimeter = str.split(/[:,\n, ; ]/);
  return delimeter.reduce((total, num) => total + parseFloat(num || 0), 0);
}
