let bubble = (arr) => {
  let len = arr.length;
  console.log(arr);

  for (let j = 0; j < len; j++) {
    if (arr[j] > arr[j + 1]) {
      arr[j] = arr[j] + arr[j + 1];
      arr[j + 1] = arr[j] - arr[j + 1];
      arr[j] = arr[j] - arr[j + 1];
    }
  }
  console.log(arr);
  return arr;
};

export default bubble;
