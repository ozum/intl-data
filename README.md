# intl-data



Tiny module to retrieve locale and currency data from native builtin Intl object without locale data transfer or additional locale files.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
- [API](#api)
- [intl-data](#intl-data)
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

| Format                             | Instructions                                                    |
| ---------------------------------- | --------------------------------------------------------------- |
| **TypeScript**                     | `import { ... } from "intl-data";`                     |
| **Node (CommonJS)**                | `const { ... } = require("intl-data");`                |
| **ES Modules (Browsers, webpack)** | `import { ... } from "intl-data";`                     |
| **UMD (Browser Global)**           | `<script src="path/to/umd/intl-data.js"></script>`     |
| **UMD (Browser Global)** (min)     | `<script src="path/to/umd/intl-data.min.js"></script>` |

All unminified and minified bundle files are located in respective directories named after format (cjs, esm, umd) in `dist` (`dist/cjs/intl-data.js` and `intl-data.min.js`)


# Synopsis

```ts
import { getLocale, getCurrency } from "intl-data";

const locale = getLocale("tr-TR");            // { digitGroupSeparator: ".", decimalCharacter: ",", currencySymbolPlacement: "p", percentSymbolPlacement: "p", percentSymbol: "%" }
const currency = getCurrency("TRY");          // { symbol: "₺", decimalPlaces: 2 }
const currency = getCurrency("TRY", "en-US"); // { symbol: '₺', decimalPlaces: 2, name: 'Turkish Lira' }
```

# Details

Retrieves locale and currency.

Modern browsers and node.js have builtin [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object, and this module uses this object. As a result it does not need to transfer additional locale files or data.

# API


<a name="readmemd"></a>

[intl-data](#readmemd)

# intl-data

## Functions

###  getCurrency

▸ **getCurrency**(`currencyCode`: string): *[CurrencyWithoutName](#interfacescurrencywithoutnamemd)*

*Defined in [intl-data.ts:42](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L42)*

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currencyCode` | string | is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar. |

**Returns:** *[CurrencyWithoutName](#interfacescurrencywithoutnamemd)*

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getCurrency**(`currencyCode`: string, `locale`: string): *[Currency](#interfacescurrencymd)*

*Defined in [intl-data.ts:43](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L43)*

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currencyCode` | string | is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar. |
`locale` | string | is the optional string with a BCP 47 language tag. If provided returned object contains currency name in given locale. |

**Returns:** *[Currency](#interfacescurrencymd)*

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getCurrency**<**T**>(`currencyCode`: T): *T*

*Defined in [intl-data.ts:44](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L44)*

Returns currency details for given currency and optionally locale. Throws error for unknown currency codes.

**Type parameters:**

▪ **T**: *null | undefined*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currencyCode` | T | is the currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar. |

**Returns:** *T*

currency details for requested currency. Also returns `null` for `null` input and `undefined` for `undefined` input.

___

###  getLocale

▸ **getLocale**(`localeName`: string, `options?`: undefined | object): *[Locale](#interfaceslocalemd)*

*Defined in [intl-data.ts:88](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L88)*

Returns locale details for given locale. Throws error for unsupported locales.

**Parameters:**

Name | Type |
------ | ------ |
`localeName` | string |
`options?` | undefined &#124; object |

**Returns:** *[Locale](#interfaceslocalemd)*

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

▸ **getLocale**<**T**>(`currencyCode`: T): *T*

*Defined in [intl-data.ts:89](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L89)*

Returns locale details for given locale. Throws error for unsupported locales.

**Type parameters:**

▪ **T**: *null | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`currencyCode` | T |

**Returns:** *T*

locale data for requested locale. Also returns `null` for `null` input and `undefined` for `undefined` input.

# Interfaces


<a name="interfacescurrencymd"></a>

[intl-data](#readmemd) › [Currency](#interfacescurrencymd)

# Interface: Currency

Information about currency including it's name.

## Hierarchy

* [CurrencyWithoutName](#interfacescurrencywithoutnamemd)

  ↳ **Currency**

## Properties

###  decimalPlaces

• **decimalPlaces**: *number*

*Inherited from [CurrencyWithoutName](#interfacescurrencywithoutnamemd).[decimalPlaces](#decimalplaces)*

*Defined in [intl-data.ts:23](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L23)*

Number of digits used in decimal (fractional) part of the currency.

___

###  name

• **name**: *string*

*Defined in [intl-data.ts:31](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L31)*

Name of the currency.

___

###  symbol

• **symbol**: *string*

*Inherited from [CurrencyWithoutName](#interfacescurrencywithoutnamemd).[symbol](#symbol)*

*Defined in [intl-data.ts:25](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L25)*

Currency symbol such as `₺`, `$`, `€`


<a name="interfacescurrencywithoutnamemd"></a>

[intl-data](#readmemd) › [CurrencyWithoutName](#interfacescurrencywithoutnamemd)

# Interface: CurrencyWithoutName

Information about currency excluding it's name.

## Hierarchy

* **CurrencyWithoutName**

  ↳ [Currency](#interfacescurrencymd)

## Properties

###  decimalPlaces

• **decimalPlaces**: *number*

*Defined in [intl-data.ts:23](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L23)*

Number of digits used in decimal (fractional) part of the currency.

___

###  symbol

• **symbol**: *string*

*Defined in [intl-data.ts:25](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L25)*

Currency symbol such as `₺`, `$`, `€`


<a name="interfaceslocalemd"></a>

[intl-data](#readmemd) › [Locale](#interfaceslocalemd)

# Interface: Locale

Information about locale.

## Hierarchy

* **Locale**

## Properties

###  currencySymbolPlacement

• **currencySymbolPlacement**: *"p" | "s"*

*Defined in [intl-data.ts:13](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L13)*

Place of currency symbol: `p` for prefix such as `$1.95`, or `s` for suffix such as `1.95$`

___

###  decimalCharacter

• **decimalCharacter**: *string*

*Defined in [intl-data.ts:9](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L9)*

Character to separate decimal (fraction) parts of the number from integer parts.

___

###  digitGroupSeparator

• **digitGroupSeparator**: *string*

*Defined in [intl-data.ts:11](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L11)*

Grouping separators for integer parts, such as thousands separators or thousand/lakh/crore separators.

___

###  percentSymbol

• **percentSymbol**: *string*

*Defined in [intl-data.ts:17](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L17)*

Percent symbol. Some locales contains spcae for percent symbol such as `12 %`, and some not `12%`. This is used to differenciate them.

___

###  percentSymbolPlacement

• **percentSymbolPlacement**: *"p" | "s"*

*Defined in [intl-data.ts:15](https://github.com/ozum/intl-data/blob/c1d9b98/src/intl-data.ts#L15)*

Place of percent symbol: `p` for prefix such as `%12`, or `s` for suffix such as `12%`



