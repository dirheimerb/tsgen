/**
 * Options for the `lib` property.
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#library
 * @enum
 */
export enum Lib {
  Decorators = 'Decorators',
  DecoratorsLegacy = 'Decorators.Legacy',
  DOM = 'DOM',
  DOMIterable = 'DOM.Iterable',
  ES2015 = 'ES2015',
  ES2015Collection = 'ES2015.Collection',
  ES2015Core = 'ES2015.Core',
  ES2015Generator = 'ES2015.Generator',
  ES2015Iterable = 'ES2015.Iterable',
  ES2015Promise = 'ES2015.Promise',
  ES2015Proxy = 'ES2015.Proxy',
  ES2015Reflect = 'ES2015.Reflect',
  ES2015Symbol = 'ES2015.Symbol',
  ES2015SymbolWellKnown = 'ES2015.Symbol.WellKnown',
  ES2016 = 'ES2016',
  ES2016ArrayInclude = 'ES2016.Array.Include',
  ES2017 = 'ES2017',
  ES2017Date = 'ES2017.Date',
  ES2017Intl = 'ES2017.Intl',
  ES2017Object = 'ES2017.Object',
  ES2017SharedMemory = 'ES2017.SharedMemory',
  ES2017String = 'ES2017.String',
  ES2017TypedArrays = 'ES2017.TypedArrays',
  ES2018 = 'ES2018',
  ES2018AsyncGenerator = 'ES2018.AsyncGenerator',
  ES2018AsyncIterable = 'ES2018.AsyncIterable',
  ES2018Intl = 'ES2018.Intl',
  ES2018Promise = 'ES2018.Promise',
  ES2018Regexp = 'ES2018.Regexp',
  ES2019 = 'ES2019',
  ES2019Array = 'ES2019.Array',
  ES2019Intl = 'ES2019.Intl',
  ES2019Object = 'ES2019.Object',
  ES2019String = 'ES2019.String',
  ES2019Symbol = 'ES2019.Symbol',
  ES2020 = 'ES2020',
  ES2020BigInt = 'ES2020.BigInt',
  ES2020Date = 'ES2020.Date',
  ES2020Intl = 'ES2020.Intl',
  ES2020Number = 'ES2020.Number',
  ES2020Promise = 'ES2020.Promise',
  ES2020SharedMemory = 'ES2020.SharedMemory',
  ES2020String = 'ES2020.String',
  ES2020SymbolWellKnown = 'ES2020.Symbol.WellKnown',
  ES2021 = 'ES2021',
  ES2021Intl = 'ES2021.Intl',
  ES2021Promise = 'ES2021.Promise',
  ES2021String = 'ES2021.String',
  ES2021WeakRef = 'ES2021.WeakRef',
  ES2022 = 'ES2022',
  ES2022Array = 'ES2022.Array',
  ES2022Error = 'ES2022.Error',
  ES2022Intl = 'ES2022.Intl',
  ES2022Object = 'ES2022.Object',
  ES2022RegExp = 'ES2022.RegExp',
  ES2022SharedMemory = 'ES2022.SharedMemory',
  ES2022String = 'ES2022.String',
  ES2023 = 'ES2023',
  ES2023Array = 'ES2023.Array',
  ES2023Collection = 'ES2023.Collection',
  ES5 = 'ES5',
  ES6 = 'ES6',
  ES7 = 'ES7',
  ESNext = 'ESNext',
  ESNextArray = 'ESNext.Array',
  ESNextAsyncIterable = 'ESNext.AsyncIterable',
  ESNextBigInt = 'ESNext.BigInt',
  ESNextIntl = 'ESNext.Intl',
  ESNextSymbol = 'ESNext.Symbol',
  ESNextWeakRef = 'ESNext.WeakRef',
  ScriptHost = 'ScriptHost',
  WebWorker = 'WebWorker',
  WebWorkerImportScripts = 'WebWorker.ImportScripts',
  ESNextDecorators = 'ESNext.Decorators',
  ESNextDisposable = 'ESNext.Disposable',
  ESNextPromise = 'ESNext.Promise',
  ESNextString = 'ESNext.String',
  WebworkerIterable = 'Webworker.Iterable',
}
/**
 * Target ECMAScript version.
 * @see https://www.typescriptlang.org/tsconfig#target
 * @enum
 */
export enum Target {
  ES3 = 'es3',
  ES5 = 'es5',
  ES6 = 'es6',
  ES2015 = 'es2015',
  ES2016 = 'es2016',
  ES2017 = 'es2017',
  ES2018 = 'es2018',
  ES2019 = 'es2019',
  ES2020 = 'es2020',
  ES2021 = 'es2021',
  ES2022 = 'es2022',
  ES2023 = 'es2023',
  ESNext = 'esnext',
}
/**
 * Kind of module resolution.
 * @see https://www.typescriptlang.org/tsconfig#moduleResolution
 * @enum
 */
export enum ModuleResolutionKind {
  Bundler = 'Bundler',
  Classic = 'Classic',
  Node = 'Node',
  Node10 = 'Node10',
  Node16 = 'Node16',
  NodeNext = 'NodeNext',
}
/**
 * Kind of module.
 * @see https://www.typescriptlang.org/tsconfig#module
 * @enum
 */
export enum ModuleKind {
  CommonJS = 'CommonJS',
  AMD = 'AMD',
  UMD = 'UMD',
  System = 'System',
  ES6 = 'ES6',
  ES2015 = 'ES2015',
  ESNext = 'ESNext',
  Preserve = 'Preserve',
  None = 'None',
  ES2020 = 'ES2020',
  ES2022 = 'ES2022',
  NodeNext = 'NodeNext',
  Node16 = 'Node16',
}
/**
 * Kind of JSX.
 * @see https://www.typescriptlang.org/tsconfig#jsx
 * @enum
 */
export enum JsxEmit {
  None = 'None',
  Preserve = 'preserve',
  React = 'react',
  ReactNative = 'react-native',
  ReactJSX = 'react-jsx',
  ReactJSXDev = 'react-jsxdev',
}
/**
 * Kind of charset.
 * @see https://www.typescriptlang.org/tsconfig#charset
 * @enum
 */
export enum Charset {
  Utf8 = 'utf8',
  Utf16le = 'utf16le',
  Utf16be = 'utf16be',
  Utf32le = 'utf32le',
  Utf32be = 'utf32be',
}
