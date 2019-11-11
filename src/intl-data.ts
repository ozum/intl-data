/** ignore */
type LocaleCode = string;
/** ignore */
type CurrencyCode = string;

/** Information about locale. */
export interface Locale {
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

/** Information about currency excluding it's name. */
export interface CurrencyWithoutName {
  /** Number of digits used in decimal (fractional) part of the currency. */
  decimalPlaces: number;
  /** Currency symbol such as `₺`, `$`, `€` */
  symbol: string;
}

/** Information about currency including it's name. */
export interface Currency extends CurrencyWithoutName {
  /** Name of the currency. */
  name: string;
}

/** @ignore */
interface CurrencyCache extends CurrencyWithoutName {
  name: Record<LocaleCode, string>;
}

const localeCache: Record<LocaleCode, Locale> = {};
const currencyCache: Record<CurrencyCode, CurrencyCache> = {};

export function getCurrency(currencyCode: string): CurrencyWithoutName;
export function getCurrency(currencyCode: string, locale: string): Currency;
export function getCurrency<T extends null | undefined>(currencyCode: T): T;
/**
 * Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.
 *
 * @param currencyCode is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar.
 * @param locale is the optional string with a BCP 47 language tag. If provided returned object contains currency name in given locale.
 * @returns currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.
 */
export function getCurrency(currencyCode: string | null | undefined, locale?: string): Currency | CurrencyWithoutName | null | undefined {
  if (typeof currencyCode !== "string") {
    return currencyCode === null ? null : undefined;
  }

  const commonOptions = { style: "currency", currency: currencyCode };

  // Compute currency data
  if (currencyCache[currencyCode] === undefined) {
    const textWithNumbers = (0).toLocaleString("tr-TR", { ...commonOptions, currencyDisplay: "symbol" }).replace(",", ""); // "OMR 0000" or "$000" or "RWF 0" or "0000 OMR"... without decimal separator

    // eslint-disable-next-line no-irregular-whitespace
    if ((0).toLocaleString("tr-TR", { ...commonOptions, currencyDisplay: "name" }).includes(currencyCode)) {
      throw new Error(`Invalid currency code: ${currencyCode}.`);
    }
    const lengthWithNumbers = textWithNumbers.length;
    const textWithoutNumbers = textWithNumbers.replace(/0/g, "");
    const decimalPlaces = lengthWithNumbers - textWithoutNumbers.length - 1;
    const symbol = textWithoutNumbers.trim();
    currencyCache[currencyCode] = { name: {}, symbol, decimalPlaces };
  }

  // Compute currency name in given locale
  if (locale && !currencyCache[currencyCode].name[locale]) {
    const formattedCurrency = (0).toLocaleString(locale, { ...commonOptions, currencyDisplay: "name" });
    const formattedNumber = (0).toLocaleString(locale, { minimumFractionDigits: currencyCache[currencyCode].decimalPlaces });
    const rxSymbol = new RegExp(` ?${currencyCache[currencyCode].symbol} ?`);
    const rxNumber = new RegExp(` ?${formattedNumber} ?`);
    const name = formattedCurrency.replace(rxSymbol, "").replace(rxNumber, "");
    currencyCache[currencyCode].name[locale] = name;
  }

  const { name, ...currencyWithoutName } = currencyCache[currencyCode];
  return locale ? { ...currencyWithoutName, name: name[locale] } : currencyWithoutName;
}

export function getLocale(localeName: string, options?: { throwUnknown: true }): Locale;
export function getLocale<T extends null | undefined>(currencyCode: T): T;
/**
 * Returns locale details for given locale. Throws error for unsupported locales.
 *
 * @param locale is the string with a BCP 47 language tag. If provided returned object contains currency name in given locale.
 * @returns locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.
 */
export function getLocale(locale: string | null | undefined): Locale | undefined | null {
  if (typeof locale !== "string") {
    return locale === null ? null : undefined;
  }

  if (Intl.NumberFormat.supportedLocalesOf(locale, { localeMatcher: "lookup" }).length === 0) {
    throw new Error(`Unsupported locale: ${locale}.`);
  }

  if (localeCache[locale] === undefined) {
    const [digitGroupSeparator, decimalCharacter] = (1111.1).toLocaleString(locale).replace(/1/g, "");
    const currencySymbolPlacement = (1).toLocaleString(locale, { style: "currency", currency: "USD" })[0] === "1" ? "s" : "p";
    const percentString = (0.01).toLocaleString(locale, { style: "percent" });
    const percentSymbolPlacement = percentString[0] === "1" ? "s" : "p";
    const percentSymbol = percentString.replace("1", ""); // Some locales contains space, some not.
    localeCache[locale] = {
      digitGroupSeparator,
      decimalCharacter,
      currencySymbolPlacement,
      percentSymbolPlacement,
      percentSymbol,
    };
  }
  return localeCache[locale];
}
