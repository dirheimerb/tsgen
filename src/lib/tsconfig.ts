import {
  Charset,
  JsxEmit,
  Lib,
  ModuleKind,
  ModuleResolutionKind,
  Target,
} from './lib-enum';
/**
 * @see https://www.typescriptlang.org/tsconfig
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 */
export interface TSCONFIG {
  extends?: string;
  compilerOptions?: CompilerOptions;
  include?: string[];
  files?: string[];
  exclude?: string[];
  references?: string[];
}
/**
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 * @see https://www.typescriptlang.org/tsconfig#typeChecking
 */
export interface CompilerOptions {
  typeChecking: TypeChecking;
  modules: Modules;
  emit: Emit;
  javascriptSupport: JavaScriptSupport;
  editorSupport: EditorSupport;
  interopConstraints: InteropConstraints;
  backwardsCompatibility: BackwardsCompatibility;
  languageEnvironment: LanguageEnvironment;
  compilerDiagnostics: CompilerDiagnostics;
  projects: Projects;
  outputFormatting: OutputFormatting;
  completeness: Completeness;
  watchOptions: WatchOptions;
  watchOption: WatchOption;
  typeAcquisition: TypeAcquisition;
}

interface TypeChecking {
  /**
   * @defaultValue false
   */
  allowUnreachableCode: boolean;
  /**
   * @defaultValue false
   */
  allowUnusedLabels: boolean;
  /**
   * @defaultValue false
   */
  alwaysStrict: boolean;
  /**
   * @defaultValue false
   */
  exactOptionalPropertyTypes: boolean;
  /**
   * @defaultValue false
   */
  noFallthroughCasesInSwitch: boolean;
  /**
   * @defaultValue false
   */
  noImplicitAny: boolean;
  /**
   * @defaultValue false
   */
  noImplicitOverride: boolean;
  /**
   * @defaultValue false
   */
  noImplicitReturns: boolean;
  /**
   * @defaultValue false
   */
  noImplicitThis: boolean;
  /**
   * @defaultValue false
   */
  noPropertyAccessFromIndexSignature: boolean;
  /**
   * @defaultValue false
   */
  noUncheckedIndexedAccess: boolean;
  /**
   * @defaultValue false
   */
  noUnusedLocals: boolean;
  /**
   * @defaultValue false
   */
  noUnusedParameters: boolean;
  /**
   * @defaultValue false
   */
  strict: boolean;
  /**
   * @defaultValue false
   */
  strictBindCallApply: boolean;
  /**
   * @defaultValue false
   */
  strictFunctionTypes: boolean;
  /**
   * @defaultValue false
   */
  strictNullChecks: boolean;
  /**
   * @defaultValue false
   */
  strictPropertyInitialization: boolean;
  /**
   * @defaultValue false
   */
  useUnknownInCatchVariables: boolean;
}

interface Modules {
  /**
   * @defaultValue false
   */
  allowArbitraryExtensions: boolean;
  /**
   * @defaultValue false
   */
  allowImportingTsExtensions: boolean;
  /**
   * @defaultValue false
   */
  allowUmdGlobalAccess: boolean;
  baseUrl: string;
  customConditions: string[];
  /**
   * @defaultValue 'classic'
   */
  module?: ModuleKind;
  /**
   * @defaultValue false
   */
  moduleResolution: ModuleResolutionKind;
  /**
   * @defaultValue false
   */
  moduleSuffixes: boolean;
  /**
   * @defaultValue false
   */
  noResolve: boolean;
  paths: string[];

  /**
   * @defaultValue false
   */
  resolveJsonModule: boolean;
  /**
   * @defaultValue false
   */
  resolvePackageJsonExports: boolean;
  /**
   * @defaultValue false
   */
  resolvePackageJsonImports: boolean;
  rootDir: string;
  rootDirs: string[];
  typeRoots: string[];
  types: string[];
}

interface Emit {
  /**
   * @defaultValue false
   */
  declaration: boolean;
  declarationDir: string;
  /**
   * @defaultValue false
   */
  declarationMap: boolean;
  /**
   * @defaultValue false
   */
  downlevelIteration: boolean;
  /**
   * @defaultValue false
   */
  emitBOM: boolean;
  /**
   * @defaultValue false
   */
  emitDeclarationOnly: boolean;
  /**
   * @defaultValue false
   */
  importHelpers: boolean;
  /**
   * @defaultValue false
   */
  importsNotUsedAsValues: boolean;
  /**
   * @defaultValue false
   */
  inlineSourceMap: boolean;
  /**
   * @defaultValue false
   */
  inlineSources: boolean;
  /**
   * @defaultValue false
   */
  mapRoot: boolean;
  newLine: 'lf' | 'crlf' | 'cr';
  /**
   * @defaultValue false
   */
  noEmit: boolean;
  /**
   * @defaultValue false
   */
  noEmitHelpers: boolean;
  /**
   * @defaultValue false
   */
  noEmitOnError: boolean;
  outDir: string;
  /**
   * @defaultValue '''
   */
  outFile: string;
  /**
   * @defaultValue false
   */
  preserveConstEnums: boolean;
  /**
   * @defaultValue false
   */
  preserveValueImports: boolean;
  /**
   * @defaultValue false
   */
  removeComments: boolean;
  /**
   * @defaultValue false
   */
  sourceMap: boolean;
  /**
   * @defaultValue false
   */
  sourceRoot: boolean;
  /**
   * @defaultValue false
   */
  stripInternal: boolean;
}

interface JavaScriptSupport {
  allowJs: boolean;
  checkJs: boolean;
  maxNodeModuleJsDepth: boolean;
}
interface EditorSupport {
  disableSizeLimit: boolean;
  /**
   * @name plugins
   * @example
   *     - `ts-sql-plugin` — Adds SQL linting with a template strings SQL builder
   *     - `typescript-styled-plugin — Provides CSS linting inside template strings
   *     - `typescript-eslint-language-service` — Provides eslint error messaging and fix-its inside the compiler’s output
   *     - `ts-graphql-plugin` — Provides validation and auto-completion inside GraphQL query template strings
   */
  plugins: string[];
}
interface InteropConstraints {
  /**
   * @defaultValue true
   */
  allowSyntheticDefaultImports: boolean;
  /**
   * @defaultValue true
   */
  esModuleInterop: boolean;
  /**
   * @defaultValue true
   */
  forceConsistentCasingInFileNames: boolean;
  /**
   * @defaultValue false
   */
  isolatedModules: boolean;
  /**
   * @defaultValue false
   */
  preserveSymlinks: boolean;
  /**
   * @defaultValue false
   */
  verbatimModuleSyntax: boolean;
}
interface BackwardsCompatibility {
  /**
   * @defaultValue 'utf8'
   */
  charset: Charset;
  /**
   * @defaultValue true
   */
  keyofStringsOnly: boolean;
  /**
   * @defaultValue true
   */
  noImplicitUseStrict: boolean;
  /**
   * @defaultValue true
   */
  noStrictGenericChecks: boolean;
  out: string;
  suppressExcessPropertyErrors: boolean;
  suppressImplicitAnyIndexErrors: boolean;
}

interface LanguageEnvironment {
  /**
   * @defaultValue false
   */
  emitDecoratorMetadata: boolean;
  /**
   * @defaultValue false
   */
  experimentalDecorators: boolean;
  /**
   * @defaultValue 'react'
   */
  jsx?: JsxEmit;
  jsxFactory?: string;
  jsxFragmentFactory: string;
  jsxImportSource: string;
  lib: Lib[];
  /**
   * @defaultValue false
   */
  noLib: boolean;
  reactNamespace: string;
  /**
   * @defaultValue 'es3'
   */
  target: Target;
  /**
   * @defaultValue false
   */
  useDefineForClassFields: boolean;
}
interface CompilerDiagnostics {
  /**
   * @defaultValue false
   */
  diagnostics: boolean;
  /**
   * @defaultValue false
   */
  explainFiles: boolean;
  /**
   * @defaultValue false
   */
  extendedDiagnostics: boolean;
  generateCpuProfile: string;
  /**
   * @defaultValue false
   */
  listEmittedFiles: boolean;
  /**
   * @defaultValue false
   */
  listFiles: boolean;
  /**
   * @defaultValue false
   */
  traceResolution: boolean;
}
interface Projects {
  /**
   * @defaultValue false
   */
  composite?: boolean;
  /**
   * @defaultValue false
   */
  disableReferencedProjectLoad?: boolean;
  /**
   * @defaultValue false
   */
  disableSolutionSearching?: boolean;
  /**
   * @defaultValue false
   */
  disableSourceOfProjectReferenceRedirect?: boolean;
  /**
   * @defaultValue false
   */
  incremental?: boolean | 'readonly' | 'tsbuildinfo-only';
  tsBuildInfoFile?: string;
}
interface OutputFormatting {
  noErrorTruncation: boolean;
  preserveWatchOutput: boolean;
  /**
   * Pretty print
   * @defaultValue true
   */
  pretty: boolean;
}
interface Completeness {
  /**
   * @defaultValue false
   */
  skipDefaultLibCheck: boolean;
  /**
   * @defaultValue false
   */
  skipLibCheck: boolean;
}

// Command Line
interface WatchOptions {
  /**
   * @defaultValue false
   */
  assumeChangesOnlyAffectDirectDependencies: boolean;
}

// "watchOptions"
interface WatchOption {
  watchFile: AllowedWatchFileOptions;
  watchDirectory: AllowedWatchDirectoryOptions;
  fallbackPolling: AllowedFallbackPollingOptions;
  /**
   * @defaultValue false
   */
  synchronousWatchDirectory: boolean;
  excludeDirectories: string[];
  excludeFiles: string[];
}

// "typeAcquisition"
/**
 * @defaultValue false
 * @see https://nodejs.org/api/fs.html#fs_caveats
 */
interface TypeAcquisition {
  /**
   * @defaultValue false
   */
  enable: boolean;
  include: string[];
  exclude: string[];
  /**
   * @defaultValue false
   */
  disableFilenameBasedTypeAcquisition: boolean;
}
/**
 * @defaultValue 'fixedpollinginterval'
 *  @see https://nodejs.org/api/fs.html#fs_caveats
 */
export type AllowedWatchFileOptions =
  | 'fixedpollinginterval'
  | 'prioritypollinginterval'
  | 'dynamicprioritypolling'
  | 'fixedchunksizepolling'
  | 'usefsevents'
  | 'usefseventsonparentdirectory';
/**
 * @defaultValue 'usefsevents'
 * @see https://nodejs.org/api/fs.html#fs_caveats
 */
export type AllowedWatchDirectoryOptions =
  | 'usefsevents'
  | 'fixedpollinginterval'
  | 'dynamicprioritypolling'
  | 'fixedchunksizepolling';
/**
 * @defaultValue 'fixedinterval'
 * @see https://nodejs.org/api/fs.html#fs_caveats
 */
export type AllowedFallbackPollingOptions =
  | 'fixedinterval'
  | 'priorityinterval'
  | 'dynamicpriority'
  | 'fixedchunksize';
