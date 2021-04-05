function addRomanNumbers(a, b) {
  const simplify = (number) => {
    const replacements = {
      IV: "IIII",
      IX: "VIIII",
      XL: "XXXX",
      XC: "LXXXX",
      CD: "CCCC",
      CM: "DCCCC",
    };

    return Object.keys(replacements).reduce(
      (acc, item) => acc.replace(item, replacements[item]),
      number
    );
  };

  const descentOrder = (number) => {
    const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return number
      .split("")
      .sort((a, b) => {
        return numbers[b] - numbers[a];
      })
      .join("");
  };

  const reduceLetters = (result, arr) => {
    return result.replace(RegExp(arr[0], "g"), arr[1]);
  };

  const formatResult = (result) => {
    const replacements = [
      ["IIIII", "V"],
      ["IIII", "IV"],
      ["VV", "X"],
      ["VIV", "IX"],
      ["XXXXX", "L"],
      ["XXXX", "XL"],
      ["LL", "C"],
      ["LXL", "XC"],
      ["CCCCC", "D"],
      ["CCCC", "CD"],
      ["DD", "M"],
      ["DCD", "CM"],
    ];

    return replacements.reduce((acc, item) => reduceLetters(acc, item), result);
  };

  return formatResult(descentOrder(simplify(a) + simplify(b)));
}

module.exports = { addRomanNumbers };
