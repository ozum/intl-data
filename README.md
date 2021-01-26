# intl-data

Tiny module to retrieve locale and currency data from native builtin Intl object without locale data transfer or additional locale files.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
- [API](#api)
- [intl-data](#intl-data)
  - [Table of contents](#table-of-contents)
    - [Interfaces](#interfaces)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [getCurrency](#getcurrency)
    - [getLocale](#getlocale)
- [Interfaces](#interfaces-1)
- [Interface: Currency](#interface-currency)
  - [Hierarchy](#hierarchy)
  - [Table of contents](#table-of-contents-1)
    - [Properties](#properties)
  - [Properties](#properties-1)
    - [code](#code)
    - [decimalPlaces](#decimalplaces)
    - [name](#name)
    - [symbol](#symbol)
- [Interface: Locale](#interface-locale)
  - [Hierarchy](#hierarchy-1)
  - [Table of contents](#table-of-contents-2)
    - [Properties](#properties-2)
  - [Properties](#properties-3)
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

intl-data

# intl-data

## Table of contents

### Interfaces

- [Currency](#interfacescurrencymd)
- [Locale](#interfaceslocalemd)

### Functions

- [getCurrency](#getcurrency)
- [getLocale](#getlocale)

## Functions

### getCurrency

▸ **getCurrency**<T\>(`currencyCode`: T, `locale?`: _string_): T

#### Type parameters:

| Name | Type        |
| ---- | ----------- | ------ |
| `T`  | _undefined_ | _null_ |

#### Parameters:

| Name           | Type     |
| -------------- | -------- |
| `currencyCode` | T        |
| `locale?`      | _string_ |

**Returns:** T

Defined in: [intl-data.ts:37](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L37)

▸ **getCurrency**(`currencyCode`: _string_ | _null_ | _undefined_, `locale?`: _string_): [_Currency_](#interfacescurrencymd) | _null_ | _undefined_

#### Parameters:

| Name           | Type     |
| -------------- | -------- | ------ | ----------- |
| `currencyCode` | _string_ | _null_ | _undefined_ |
| `locale?`      | _string_ |

**Returns:** [_Currency_](#interfacescurrencymd) | _null_ | _undefined_

Defined in: [intl-data.ts:38](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L38)

---

### getLocale

▸ **getLocale**(`localeCode`: _string_): [_Locale_](#interfaceslocalemd)

#### Parameters:

| Name         | Type     |
| ------------ | -------- |
| `localeCode` | _string_ |

**Returns:** [_Locale_](#interfaceslocalemd)

Defined in: [intl-data.ts:79](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L79)

▸ **getLocale**<T\>(`localeCode`: T): T

#### Type parameters:

| Name | Type        |
| ---- | ----------- | ------ |
| `T`  | _undefined_ | _null_ |

#### Parameters:

| Name         | Type |
| ------------ | ---- |
| `localeCode` | T    |

**Returns:** T

Defined in: [intl-data.ts:80](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L80)

▸ **getLocale**(`localeCode`: _string_ | _null_ | _undefined_): [_Locale_](#interfaceslocalemd) | _undefined_ | _null_

#### Parameters:

| Name         | Type     |
| ------------ | -------- | ------ | ----------- |
| `localeCode` | _string_ | _null_ | _undefined_ |

**Returns:** [_Locale_](#interfaceslocalemd) | _undefined_ | _null_

Defined in: [intl-data.ts:81](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L81)

# Interfaces

<a name="interfacescurrencymd"></a>

[intl-data](#readmemd) / Currency

# Interface: Currency

Information about currency

## Hierarchy

- **Currency**

## Table of contents

### Properties

- [code](#code)
- [decimalPlaces](#decimalplaces)
- [name](#name)
- [symbol](#symbol)

## Properties

### code

• **code**: _string_

ISO 4217 currency codes

Defined in: [intl-data.ts:27](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L27)

---

### decimalPlaces

• **decimalPlaces**: _number_

Number of digits used in decimal (fractional) part of the currency.

Defined in: [intl-data.ts:29](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L29)

---

### name

• **name**: _string_

Name of the currency.

Defined in: [intl-data.ts:25](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L25)

---

### symbol

• **symbol**: _string_

Currency symbol such as `₺`, `$`, `€`

Defined in: [intl-data.ts:31](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L31)

<a name="interfaceslocalemd"></a>

[intl-data](#readmemd) / Locale

# Interface: Locale

Information about locale.

## Hierarchy

- **Locale**

## Table of contents

### Properties

- [code](#code)
- [currencySymbolPlacement](#currencysymbolplacement)
- [decimalCharacter](#decimalcharacter)
- [digitGroupSeparator](#digitgroupseparator)
- [percentSymbol](#percentsymbol)
- [percentSymbolPlacement](#percentsymbolplacement)

## Properties

### code

• **code**: _string_

BCP 47 language tag of the locale. This is simply string provided to get locale. Example: `tr-TR`

Defined in: [intl-data.ts:9](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L9)

---

### currencySymbolPlacement

• **currencySymbolPlacement**: _p_ | _s_

Place of currency symbol: `p` for prefix such as `$1.95`, or `s` for suffix such as `1.95$`

Defined in: [intl-data.ts:15](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L15)

---

### decimalCharacter

• **decimalCharacter**: _string_

Character to separate decimal (fraction) parts of the number from integer parts.

Defined in: [intl-data.ts:11](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L11)

---

### digitGroupSeparator

• **digitGroupSeparator**: _string_

Grouping separators for integer parts, such as thousands separators or thousand/lakh/crore separators.

Defined in: [intl-data.ts:13](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L13)

---

### percentSymbol

• **percentSymbol**: _string_

Percent symbol. Some locales contains spcae for percent symbol such as `12 %`, and some not `12%`. This is used to differenciate them.

Defined in: [intl-data.ts:19](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L19)

---

### percentSymbolPlacement

• **percentSymbolPlacement**: _p_ | _s_

Place of percent symbol: `p` for prefix such as `%12`, or `s` for suffix such as `12%`

Defined in: [intl-data.ts:17](https://github.com/ozum/intl-data/blob/7f4cda4/src/intl-data.ts#L17)
