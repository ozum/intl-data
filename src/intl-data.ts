/** ignore */
type LocaleCode = string;
/** ignore */
type CurrencyCode = string;

/** Information about locale. */
export interface Locale {
  /** BCP 47 language tag of the locale. This is simply string provided to get locale. Example: `tr-TR` */
  code: LocaleCode;
  /** Character to separate decimal (fraction) parts of the number from integer parts. */
  decimalCharacter: string;
  /** Grouping separators for integer parts, such as thousands separators or thousand/lakh/crore separators. */
  digitGroupSeparator: string;
  /** Place of currency symbol: `p` for prefix such as `$1.95`, or `s` for suffix such as `1.95$` */
  currencySymbolPlacement: "p" | "s";
  /** Place of percent symbol: `p` for prefix such as `%12`, or `s` for suffix such as `12%` */
  percentSymbolPlacement: "p" | "s";
  /** Percent symbol. Some locales contains spcae for percent symbol such as `12 %`, and some not `12%`. This is used to differenciate them. */
  percentSymbol: string;
}

/** Information about currency */
export interface Currency {
  /** Name of the currency. */
  name: string;
  /**  ISO 4217 currency codes */
  code: CurrencyCode;
  /** Number of digits used in decimal (fractional) part of the currency. */
  decimalPlaces: number;
  /** Currency symbol such as `₺`, `$`, `€` */
  symbol: string;
}

const localeCache: Record<LocaleCode, Locale> = {};
const currencyCache: Record<CurrencyCode, Record<LocaleCode, Currency>> = {};

export function getCurrency<T extends null | undefined>(currencyCode: T, locale?: string): T;
export function getCurrency(currencyCode: string | null | undefined, locale?: string): Currency | null | undefined;
/**
 * Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.
 *
 * @param currencyCode is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar.
 * @param locale is the optional string with a BCP 47 language tag. If provided returned object contains currency name in given locale.
 * @returns currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.
 */
export function getCurrency(
  currencyCode: string | null | undefined,
  locale = new Intl.NumberFormat().resolvedOptions().locale
): Currency | null | undefined {
  if (typeof currencyCode !== "string") {
    return currencyCode === null ? null : undefined;
  }

  const commonOptions = { style: "currency", currency: currencyCode };
  currencyCache[currencyCode] = currencyCache[currencyCode] || {};

  // Compute currency data
  if (currencyCache[currencyCode][locale] === undefined) {
    const textWithNumbers = (0).toLocaleString(locale, { ...commonOptions, currencyDisplay: "symbol" }).replace(/[.,]/, ""); // "OMR 0000" or "$000" or "RWF 0" or "0000 OMR"... without decimal separator
    // eslint-disable-next-line no-irregular-whitespace
    if ((0).toLocaleString(locale, { ...commonOptions, currencyDisplay: "name" }).includes(currencyCode)) {
      throw new Error(`Invalid currency code: ${currencyCode}.`);
    }
    const lengthWithNumbers = textWithNumbers.length;
    const textWithoutNumbers = textWithNumbers.replace(/0/g, "");
    const decimalPlaces = lengthWithNumbers - textWithoutNumbers.length - 1;
    const symbol = textWithoutNumbers.trim();
    const formattedCurrency = (0).toLocaleString(locale, { ...commonOptions, currencyDisplay: "name" });
    const formattedNumber = (0).toLocaleString(locale, { minimumFractionDigits: decimalPlaces });
    const rxSymbol = new RegExp(` ?${symbol} ?`);
    const rxNumber = new RegExp(` ?${formattedNumber} ?`);
    const name = formattedCurrency.replace(rxSymbol, "").replace(rxNumber, "");
    currencyCache[currencyCode][locale] = { name, code: currencyCode, symbol, decimalPlaces };
  }

  return currencyCache[currencyCode][locale];
}

export function getLocale(localeCode: string): Locale;
export function getLocale<T extends null | undefined>(localeCode: T): T;
export function getLocale(localeCode: string | null | undefined): Locale | undefined | null;
/**
 * Returns locale details for given locale. Throws error for unsupported locales.
 *
 * @param localeCode is the string with a BCP 47 language tag. If provided returned object contains currency name in given locale.
 * @returns locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.
 */
export function getLocale(localeCode: string | null | undefined): Locale | undefined | null {
  if (typeof localeCode !== "string") {
    return localeCode === null ? null : undefined;
  }

  if (Intl.NumberFormat.supportedLocalesOf(localeCode, { localeMatcher: "lookup" }).length === 0) {
    throw new Error(`Unsupported locale: ${localeCode}.`);
  }

  if (localeCache[localeCode] === undefined) {
    const [digitGroupSeparator, decimalCharacter] = (1111.1).toLocaleString(localeCode).replace(/1/g, "");
    const currencySymbolPlacement = (1).toLocaleString(localeCode, { style: "currency", currency: "USD" })[0] === "1" ? "s" : "p";
    const percentString = (0.01).toLocaleString(localeCode, { style: "percent" });
    const percentSymbolPlacement = percentString[0] === "1" ? "s" : "p";
    const percentSymbol = percentString.replace("1", ""); // Some locales contains space, some not.
    localeCache[localeCode] = {
      code: localeCode,
      digitGroupSeparator,
      decimalCharacter,
      currencySymbolPlacement,
      percentSymbolPlacement,
      percentSymbol,
    };
  }
  return localeCache[localeCode];
}
