import { getLocale, getCurrency } from "./intl-data";

const trLocale = {
  code: "tr-TR",
  digitGroupSeparator: ".",
  decimalCharacter: ",",
  currencySymbolPlacement: "p",
  percentSymbolPlacement: "p",
  percentSymbol: "%",
};

const deLocale = {
  code: "de-DE",
  currencySymbolPlacement: "s",
  decimalCharacter: ",",
  digitGroupSeparator: ".",
  percentSymbolPlacement: "s",
};

describe("getLocale", () => {
  it("should return locale for given locale code with prefix.", () => {
    expect(getLocale("tr-TR")).toEqual(trLocale);
  });

  it("should return locale for given locale code with suffix.", () => {
    // Somehow " %" seems not equal " %" in locale specific string.
    const locale = getLocale("de-DE");
    expect(locale).toMatchObject(deLocale);
    expect(locale.percentSymbol.localeCompare(" %", "en", { sensitivity: "base" })).toBe(0); // Locale specific equality
  });

  it("should return locale from cache.", () => {
    expect(getLocale("tr-TR")).toEqual(trLocale);
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
});

describe("getCurrency", () => {
  it("should return currency.", () => {
    expect(getCurrency("TRY", "tr-TR")).toEqual({ code: "TRY", symbol: "₺", decimalPlaces: 2, name: "Türk lirası" });
  });

  it("should return currency from cache.", () => {
    expect(getCurrency("TRY", "tr-TR")).toEqual({ code: "TRY", symbol: "₺", decimalPlaces: 2, name: "Türk lirası" });
  });

  it("should return currency without a symbol.", () => {
    expect(getCurrency("OMR")).toEqual({ code: "OMR", symbol: "OMR", decimalPlaces: 3, name: "Omani rials" });
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
      CNY: getCurrency("CNY"),
      "CNY zh-CN": getCurrency("CNY", "zh-CN"),
      "CNY zh-TW": getCurrency("CNY", "zh-TW"),
      "CNY tr-TR": getCurrency("CNY", "tr-TR"),
    };

    expect(result).toEqual(expected);
  });
});
