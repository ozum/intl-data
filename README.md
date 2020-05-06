# intl-data

Tiny module to retrieve locale and currency data from native builtin Intl object without locale data transfer or additional locale files.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
- [API](#api)
- [intl-data](#intl-data)
  - [Type aliases](#type-aliases)
    - [CurrencyCode](#currencycode)
    - [LocaleCode](#localecode)
  - [Variables](#variables)
    - [`Const` currencyCache](#const-currencycache)
    - [`Const` localeCache](#const-localecache)
  - [Functions](#functions)
    - [getCurrency](#getcurrency)
    - [getLocale](#getlocale)
- [Interfaces](#interfaces)
- [Interface: Currency](#interface-currency)
  - [Hierarchy](#hierarchy)
  - [Properties](#properties)
    - [code](#code)
    - [decimalPlaces](#decimalplaces)
    - [name](#name)
    - [symbol](#symbol)
- [Interface: Locale](#interface-locale)
  - [Hierarchy](#hierarchy-1)
  - [Properties](#properties-1)
    - [code](#code-1)
    - [currencySymbolPlacement](#currencysymbolplacement)
    - [decimalCharacter](#decimalcharacter)
    - [digitGroupSeparator](#digitgroupseparator)
    - [percentSymbol](#percentsymbol)
    - [percentSymbolPlacement](#percentsymbolplacement)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

| Format                             | Instructions                                           |
| ---------------------------------- | ------------------------------------------------------ |
| **TypeScript**                     | `import { ... } from "intl-data";`                     |
| **Node (CommonJS)**                | `const { ... } = require("intl-data");`                |
| **ES Modules (Browsers, webpack)** | `import { ... } from "intl-data";`                     |
| **UMD (Browser Global)**           | `<script src="path/to/umd/intl-data.js"></script>`     |
| **UMD (Browser Global)** (min)     | `<script src="path/to/umd/intl-data.min.js"></script>` |

All unminified and minified bundle files are located in respective directories named after format (cjs, esm, umd) in `dist` (`dist/cjs/intl-data.js` and `intl-data.min.js`)

# Synopsis

```ts
import { getLocale, getCurrency } from "intl-data";

const locale = getLocale("tr-TR"); // { digitGroupSeparator: ".", decimalCharacter: ",", currencySymbolPlacement: "p", percentSymbolPlacement: "p", percentSymbol: "%" }
const currency = getCurrency("TRY"); // { symbol: "₺", decimalPlaces: 2 }
const currency = getCurrency("TRY", "en-US"); // { symbol: '₺', decimalPlaces: 2, name: 'Turkish Lira' }
```

# Details

Retrieves locale and currency.

Modern browsers and node.js have builtin [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object, and this module uses this object. As a result it does not need to transfer additional locale files or data.

# API

<a name="readmemd"></a>

[intl-data](#readmemd)

# intl-data

## Type aliases

### CurrencyCode

Ƭ **CurrencyCode**: _string_

_Defined in [intl-data.ts:4](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L4)_

ignore

---

### LocaleCode

Ƭ **LocaleCode**: _string_

_Defined in [intl-data.ts:2](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L2)_

ignore

## Variables

### `Const` currencyCache

• **currencyCache**: _Record‹[CurrencyCode](#currencycode), Record‹[LocaleCode](#localecode), [Currency](#interfacescurrencymd)››_

_Defined in [intl-data.ts:35](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L35)_

---

### `Const` localeCache

• **localeCache**: _Record‹[LocaleCode](#localecode), [Locale](#interfaceslocalemd)›_

_Defined in [intl-data.ts:34](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L34)_

## Functions

### getCurrency

▸ **getCurrency**<**T**>(`currencyCode`: T, `locale?`: undefined | string): _T_

_Defined in [intl-data.ts:37](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L37)_

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Type parameters:**

▪ **T**: _null | undefined_

**Parameters:**

| Name           | Type                    | Description                                                                                                                      |
| -------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `currencyCode` | T                       | is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar. |
| `locale?`      | undefined &#124; string | is the optional string with a BCP 47 language tag. If provided returned object contains currency name in given locale.           |

**Returns:** _T_

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getCurrency**(`currencyCode`: string | null | undefined, `locale?`: undefined | string): _[Currency](#interfacescurrencymd) | null | undefined_

_Defined in [intl-data.ts:38](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L38)_

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Parameters:**

| Name           | Type                                |
| -------------- | ----------------------------------- |
| `currencyCode` | string &#124; null &#124; undefined |
| `locale?`      | undefined &#124; string             |

**Returns:** _[Currency](#interfacescurrencymd) | null | undefined_

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

---

### getLocale

▸ **getLocale**(`localeCode`: string): _[Locale](#interfaceslocalemd)_

_Defined in [intl-data.ts:79](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L79)_

Returns locale details for given locale. Throws error for unsupported locales.

**Parameters:**

| Name         | Type   | Description                                                                                                   |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| `localeCode` | string | is the string with a BCP 47 language tag. If provided returned object contains currency name in given locale. |

**Returns:** _[Locale](#interfaceslocalemd)_

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getLocale**<**T**>(`localeCode`: T): _T_

_Defined in [intl-data.ts:80](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L80)_

Returns locale details for given locale. Throws error for unsupported locales.

**Type parameters:**

▪ **T**: _null | undefined_

**Parameters:**

| Name         | Type |
| ------------ | ---- |
| `localeCode` | T    |

**Returns:** _T_

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getLocale**(`localeCode`: string | null | undefined): _[Locale](#interfaceslocalemd) | undefined | null_

_Defined in [intl-data.ts:81](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L81)_

Returns locale details for given locale. Throws error for unsupported locales.

**Parameters:**

| Name         | Type                                |
| ------------ | ----------------------------------- |
| `localeCode` | string &#124; null &#124; undefined |

**Returns:** _[Locale](#interfaceslocalemd) | undefined | null_

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

# Interfaces

<a name="interfacescurrencymd"></a>

[intl-data](#readmemd) › [Currency](#interfacescurrencymd)

# Interface: Currency

Information about currency

## Hierarchy

- **Currency**

## Properties

### code

• **code**: _[CurrencyCode](#currencycode)_

_Defined in [intl-data.ts:27](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L27)_

ISO 4217 currency codes

---

### decimalPlaces

• **decimalPlaces**: _number_

_Defined in [intl-data.ts:29](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L29)_

Number of digits used in decimal (fractional) part of the currency.

---

### name

• **name**: _string_

_Defined in [intl-data.ts:25](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L25)_

Name of the currency.

---

### symbol

• **symbol**: _string_

_Defined in [intl-data.ts:31](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L31)_

Currency symbol such as `₺`, `$`, `€`

<a name="interfaceslocalemd"></a>

[intl-data](#readmemd) › [Locale](#interfaceslocalemd)

# Interface: Locale

Information about locale.

## Hierarchy

- **Locale**

## Properties

### code

• **code**: _[LocaleCode](#localecode)_

_Defined in [intl-data.ts:9](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L9)_

BCP 47 language tag of the locale. This is simply string provided to get locale. Example: `tr-TR`

---

### currencySymbolPlacement

• **currencySymbolPlacement**: _"p" | "s"_

_Defined in [intl-data.ts:15](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L15)_

Place of currency symbol: `p` for prefix such as `$1.95`, or `s` for suffix such as `1.95$`

---

### decimalCharacter

• **decimalCharacter**: _string_

_Defined in [intl-data.ts:11](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L11)_

Character to separate decimal (fraction) parts of the number from integer parts.

---

### digitGroupSeparator

• **digitGroupSeparator**: _string_

_Defined in [intl-data.ts:13](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L13)_

Grouping separators for integer parts, such as thousands separators or thousand/lakh/crore separators.

---

### percentSymbol

• **percentSymbol**: _string_

_Defined in [intl-data.ts:19](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L19)_

Percent symbol. Some locales contains spcae for percent symbol such as `12 %`, and some not `12%`. This is used to differenciate them.

---

### percentSymbolPlacement

• **percentSymbolPlacement**: _"p" | "s"_

_Defined in [intl-data.ts:17](https://github.com/ozum/intl-data/blob/2042ca0/src/intl-data.ts#L17)_

Place of percent symbol: `p` for prefix such as `%12`, or `s` for suffix such as `12%`
