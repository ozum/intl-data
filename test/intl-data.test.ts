import { getLocale, getCurrency } from "../src/intl-data";

/**
 * Checks whether given locale produces expected values by ignoring specila accented characters.
 *
 * @param locale is the locale to test.
 * @param expected is the expected values as an array of "code", "currencySymbolPlacement", "decimalCharacter", "digitGroupSeparator", "percentSymbol", "percentSymbolPlacement".
 * @returns whether given locale's result are equal to expected values.
 */
function isEqual(locale: string, expected: string[]): boolean {
  const result = getLocale(locale) as Record<string, any>;
  return Object.keys(result)
    .sort()
    .every((key, i) => result[key].localeCompare(expected[i], "en", { sensitivity: "base" }) === 0);
}

describe("getLocale", () => {
  it("should return locale for given locale code with prefix.", () => {
    expect(isEqual("tr-TR", ["tr-TR", "p", ",", ".", "%", "p"])).toBe(true);
  });

  it("should return locale for given locale code with suffix.", () => {
    expect(isEqual("de-DE", ["de-DE", "s", ",", ".", " %", "s"])).toBe(true);
  });

  it("should return locale from cache.", () => {
    expect(isEqual("tr-TR", ["tr-TR", "p", ",", ".", "%", "p"])).toBe(true);
  });

  it("should return null for null.", () => {
    expect(getLocale(null)).toBeNull();
  });

  it("should return undefined for undefined.", () => {
    expect(getLocale(undefined)).toBeUndefined();
  });

  it("should throw for unsupported locale.", () => {
    expect(() => getLocale("XYZ")).toThrow("Unsupported locale");
  });

  it("should return correct locale for es-CO", () => {
    expect(isEqual("es-CO", ["es-CO", "p", ",", ".", " %", "s"])).toBe(true);
  });

  it("should return correct locale for ja-JP", () => {
    expect(isEqual("ja-JP", ["ja-JP", "p", ".", ",", "%", "s"])).toBe(true);
  });
});

describe("getCurrency", () => {
  it("should return currency.", () => {
    expect(getCurrency("TRY", "tr-TR")).toEqual({ code: "TRY", symbol: "₺", decimalPlaces: 2, name: "Türk lirası" });
  });

  it("should return currency from cache.", () => {
    expect(getCurrency("TRY", "tr-TR")).toEqual({ code: "TRY", symbol: "₺", decimalPlaces: 2, name: "Türk lirası" });
  });

  it("should return currency without a symbol.", () => {
    expect(getCurrency("OMR", "en-US")).toEqual({ code: "OMR", symbol: "OMR", decimalPlaces: 3, name: "Omani rials" });
  });

  it("should return null for null.", () => {
    expect(getCurrency(null)).toBeNull();
  });

  it("should return undefined for undefined.", () => {
    expect(getCurrency(undefined)).toBeUndefined();
  });

  it("should throw for unsupported locale.", () => {
    expect(() => getCurrency("XYZ")).toThrow("Invalid currency code");
  });

  it("should respect locale specific sign of the same currency", () => {
    const expected = {
      CNY: { code: "CNY", symbol: "CN¥", decimalPlaces: 2, name: "Chinese yuan" },
      "CNY zh-CN": { code: "CNY", symbol: "¥", decimalPlaces: 2, name: "人民币" },
      "CNY zh-TW": { code: "CNY", symbol: "CN¥", decimalPlaces: 2, name: "人民幣" },
      "CNY tr-TR": { code: "CNY", symbol: "CN¥", decimalPlaces: 2, name: "Çin yuanı" },
    };

    const result = {
      CNY: getCurrency("CNY", "en-US"),
      "CNY zh-CN": getCurrency("CNY", "zh-CN"),
      "CNY zh-TW": getCurrency("CNY", "zh-TW"),
      "CNY tr-TR": getCurrency("CNY", "tr-TR"),
    };

    expect(result).toEqual(expected);
  });
});
