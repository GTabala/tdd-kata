const { doSomething } = require("./romans");

describe("number converter", () => {
  it("Should add I to I and get II", () => {
    expect(doSomething("I", "I")).toBe("II");
  });

  it("Should add II to IV and get VI", () => {
    expect(doSomething("II", "IV")).toBe("VI");
  });

  it("Should add I to IX and get X", () => {
    expect(doSomething("I", "IX")).toBe("X");
  });

  it("Should add V to V and get X", () => {
    expect(doSomething("V", "V")).toBe("X");
  });

  it("Should add III to MCMXCVIII and get MMI", () => {
    expect(doSomething("MCMXCVIII", "III")).toBe("MMI");
  });
});
