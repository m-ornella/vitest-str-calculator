export function add(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.length == 1) {
    return 1;
  }
  let strArr = str.split(/[:,\n]/);
  let sum = strArr.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
  });
  return sum;
}
