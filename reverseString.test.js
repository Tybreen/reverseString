const reverseString = require("./reverseString");

describe(`reverseString()`, () => {
  test(`Tyler = relyT`, () => {
    expect(reverseString(`Tyler`)).toBe(`relyT`);
  });

  test(`I love Maddie!!! = !!!eiddaM evol I`, () => {
    expect(reverseString(`I love Maddie!!!`)).toBe(`!!!eiddaM evol I`);
  });
  test(`garbage = egabrag`, () => {
    expect(reverseString(`garbage`)).toBe(`egabrag`);
  });
});
