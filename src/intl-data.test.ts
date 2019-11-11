import { getLocale, getCurrency } from "./intl-data";

const trLocale = {
  digitGroupSeparator: ".",
  decimalCharacter: ",",
  currencySymbolPlacement: "p",
  percentSymbolPlacement: "p",
  percentSymbol: "%",
};

const deLocale = {
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
  it("should return currency with name.", () => {
    expect(getCurrency("TRY", "tr-TR")).toEqual({ symbol: "₺", decimalPlaces: 2, name: "Türk lirası" });
  });

  it("should return currency without name.", () => {
    expect(getCurrency("TRY")).toEqual({ symbol: "₺", decimalPlaces: 2 });
  });

  it("should return currency without a symbol.", () => {
    expect(getCurrency("OMR")).toEqual({ symbol: "OMR", decimalPlaces: 3 });
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
});
