const { addRomanNumbers } = require("./romans");

describe("number converter", () => {
  it("Should add I to I and get II", () => {
    expect(addRomanNumbers("I", "I")).toBe("II");
  });

  it("Should add II to IV and get VI", () => {
    expect(addRomanNumbers("II", "IV")).toBe("VI");
  });

  it("Should add I to IX and get X", () => {
    expect(addRomanNumbers("I", "IX")).toBe("X");
  });

  it("Should add V to V and get X", () => {
    expect(addRomanNumbers("V", "V")).toBe("X");
  });
 
  it("Should add L to XL and get XC", () => {
    expect(addRomanNumbers("L", "XL")).toBe("XC");
  });

  it("Should add III to MCMXCVIII and get MMI", () => {
    expect(addRomanNumbers("MCMXCVIII", "III")).toBe("MMI");
  });
});
