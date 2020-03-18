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
    - [decimalPlaces](#decimalplaces)
    - [name](#name)
    - [symbol](#symbol)
- [Interface: CurrencyWithoutName](#interface-currencywithoutname)
  - [Hierarchy](#hierarchy-1)
  - [Properties](#properties-1)
    - [decimalPlaces](#decimalplaces-1)
    - [symbol](#symbol-1)
- [Interface: Locale](#interface-locale)
  - [Hierarchy](#hierarchy-2)
  - [Properties](#properties-2)
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

_Defined in [intl-data.ts:4](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L4)_

ignore

---

### LocaleCode

Ƭ **LocaleCode**: _string_

_Defined in [intl-data.ts:2](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L2)_

ignore

## Variables

### `Const` currencyCache

• **currencyCache**: _Record‹[CurrencyCode](#currencycode), CurrencyCache›_

_Defined in [intl-data.ts:40](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L40)_

---

### `Const` localeCache

• **localeCache**: _Record‹[LocaleCode](#localecode), [Locale](#interfaceslocalemd)›_

_Defined in [intl-data.ts:39](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L39)_

## Functions

### getCurrency

▸ **getCurrency**(`currencyCode`: string): _[CurrencyWithoutName](#interfacescurrencywithoutnamemd)_

_Defined in [intl-data.ts:42](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L42)_

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Parameters:**

| Name           | Type   | Description                                                                                                                      |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `currencyCode` | string | is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar. |

**Returns:** _[CurrencyWithoutName](#interfacescurrencywithoutnamemd)_

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getCurrency**(`currencyCode`: string, `locale`: string): _[Currency](#interfacescurrencymd)_

_Defined in [intl-data.ts:43](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L43)_

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| `currencyCode` | string |
| `locale`       | string |

**Returns:** _[Currency](#interfacescurrencymd)_

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getCurrency**<**T**>(`currencyCode`: T, `locale?`: undefined | string): _T_

_Defined in [intl-data.ts:44](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L44)_

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Type parameters:**

▪ **T**: _null | undefined_

**Parameters:**

| Name           | Type                    |
| -------------- | ----------------------- |
| `currencyCode` | T                       |
| `locale?`      | undefined &#124; string |

**Returns:** _T_

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

---

### getLocale

▸ **getLocale**(`locale`: string): _[Locale](#interfaceslocalemd)_

_Defined in [intl-data.ts:88](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L88)_

Returns locale details for given locale. Throws error for unsupported locales.

**Parameters:**

| Name     | Type   | Description                                                                                                   |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `locale` | string | is the string with a BCP 47 language tag. If provided returned object contains currency name in given locale. |

**Returns:** _[Locale](#interfaceslocalemd)_

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getLocale**<**T**>(`locale`: T): _T_

_Defined in [intl-data.ts:89](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L89)_

Returns locale details for given locale. Throws error for unsupported locales.

**Type parameters:**

▪ **T**: _null | undefined_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `locale` | T    |

**Returns:** _T_

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

# Interfaces

<a name="interfacescurrencymd"></a>

[intl-data](#readmemd) › [Currency](#interfacescurrencymd)

# Interface: Currency

Information about currency including it's name.

## Hierarchy

- [CurrencyWithoutName](#interfacescurrencywithoutnamemd)

  ↳ **Currency**

## Properties

### decimalPlaces

• **decimalPlaces**: _number_

_Inherited from [CurrencyWithoutName](#interfacescurrencywithoutnamemd).[decimalPlaces](#decimalplaces)_

_Defined in [intl-data.ts:23](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L23)_

Number of digits used in decimal (fractional) part of the currency.

---

### name

• **name**: _string_

_Defined in [intl-data.ts:31](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L31)_

Name of the currency.

---

### symbol

• **symbol**: _string_

_Inherited from [CurrencyWithoutName](#interfacescurrencywithoutnamemd).[symbol](#symbol)_

_Defined in [intl-data.ts:25](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L25)_

Currency symbol such as `₺`, `$`, `€`

<a name="interfacescurrencywithoutnamemd"></a>

[intl-data](#readmemd) › [CurrencyWithoutName](#interfacescurrencywithoutnamemd)

# Interface: CurrencyWithoutName

Information about currency excluding it's name.

## Hierarchy

- **CurrencyWithoutName**

  ↳ [Currency](#interfacescurrencymd)

## Properties

### decimalPlaces

• **decimalPlaces**: _number_

_Defined in [intl-data.ts:23](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L23)_

Number of digits used in decimal (fractional) part of the currency.

---

### symbol

• **symbol**: _string_

_Defined in [intl-data.ts:25](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L25)_

Currency symbol such as `₺`, `$`, `€`

<a name="interfaceslocalemd"></a>

[intl-data](#readmemd) › [Locale](#interfaceslocalemd)

# Interface: Locale

Information about locale.

## Hierarchy

- **Locale**

## Properties

### currencySymbolPlacement

• **currencySymbolPlacement**: _"p" | "s"_

_Defined in [intl-data.ts:13](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L13)_

Place of currency symbol: `p` for prefix such as `$1.95`, or `s` for suffix such as `1.95$`

---

### decimalCharacter

• **decimalCharacter**: _string_

_Defined in [intl-data.ts:9](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L9)_

Character to separate decimal (fraction) parts of the number from integer parts.

---

### digitGroupSeparator

• **digitGroupSeparator**: _string_

_Defined in [intl-data.ts:11](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L11)_

Grouping separators for integer parts, such as thousands separators or thousand/lakh/crore separators.

---

### percentSymbol

• **percentSymbol**: _string_

_Defined in [intl-data.ts:17](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L17)_

Percent symbol. Some locales contains spcae for percent symbol such as `12 %`, and some not `12%`. This is used to differenciate them.

---

### percentSymbolPlacement

• **percentSymbolPlacement**: _"p" | "s"_

_Defined in [intl-data.ts:15](https://github.com/ozum/intl-data/blob/4aa4a19/src/intl-data.ts#L15)_

Place of percent symbol: `p` for prefix such as `%12`, or `s` for suffix such as `12%`
