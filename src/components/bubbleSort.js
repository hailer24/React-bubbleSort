let bubble = (arr, position, steps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let _arr = arr;
        let temp = _arr[j];
        _arr[j] = _arr[j + 1];
        _arr[j + 1] = temp;
      }
      steps.push(arr.slice());
      colorKey[j] = 1;
      colorKey[j + 1] = 1;
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }
    colorKey[arr.length - i - 1] = 2;
    steps.push(arr.slice());
    colorSteps.push(colorKey.slice());
  }
  colorSteps[colorSteps.length - 1] = new Array(arr.length).fill(2);
  return;
};

export default bubble;
