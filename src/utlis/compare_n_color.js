import colors from "./colors";
/**
 *
 * @param {Array<string>} inputArr
 * @param {number} codeLength
 * @returns {Array<string>}
 */
function input_arr_to_code(inputArr, codeLength) {
  let parsedInputArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let parsedInput = {
      shapeChar: inputArr[i][0] != "c" ? inputArr[i][0].toUpperCase() : "-",
      pos: parseInt(inputArr[i].split("-")[1]),
    };
    parsedInputArr.push(parsedInput);
    if (i > 0 && i % 2 == 0) {
      parsedInputArr.push(parsedInput);
    }
  }
  let resCode = Array(codeLength).fill("");
  for (let i = 0; i < codeLength; i++) {
    let parsedTriplet = [
      parsedInputArr[3 * i],
      parsedInputArr[3 * i + 1],
      parsedInputArr[3 * i + 2],
    ];
    if (parsedTriplet.includes(undefined)) {
      return resCode;
    }
    if (
      parsedTriplet[0].pos == parsedTriplet[1].pos &&
      parsedTriplet[2].pos == parsedTriplet[0].pos + 1 &&
      parsedTriplet[0].pos == i
    ) {
      return resCode;
    }

    parsedTriplet.map((parsedInput) => {
      resCode[i] += parsedInput.shapeChar;
    });
  }
  return resCode;
}

export default function compare_n_color(
  correctCode,
  inputArr,
  setTextColorArr,
  setColorGrid,
  setShowNextButton
) {
  console.log(inputArr);
  let inputCode = input_arr_to_code(inputArr, correctCode.length);
  let textColorArr = [];
  /**
   * @type {Map<string, string>}
   */
  let colorGrid = new Map();
  let showNextButton = true;
  for (let i = 0; i < correctCode.length; i++) {
    let color = "";
    if (correctCode[i] == inputCode[i]) {
      color = colors.green;
    } else {
      showNextButton = false;
      if (inputCode[i] == "") {
        color = colors.blue;
        } else {
        color = colors.red;
      }
    }
    textColorArr.push(color);
    // colorGrid.set(inputArr[3 * i], color);
    // colorGrid.set(inputArr[3 * i + 1], color);
    // colorGrid.set(inputArr[3 * i + 2], color);
  }
  // console.log(textColorArr)
  setShowNextButton(showNextButton);
  setTextColorArr(textColorArr);
  setColorGrid(colorGrid);
  return inputCode
}

let code = [
  "T-S",
  "S-T",
  "T-T",
  "T-S",
  "S-S",
  "S-T",
  "T-S",
  "S-S",
  "S-T",
  "T-T",
  "T-T",
  "T-S",
];

let input = ["s1", "c1", "t2"];

// console.log(input_arr_to_code(input, 12));
// compare_n_color(
//   code,
//   input,
//   () => {},
//   () => {}
// );
