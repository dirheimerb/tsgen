import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {
  Lib,
  Target,
  ModuleKind,
  ModuleResolutionKind,
  JsxEmit,
  Charset,
} from './lib/lib-enum';
import { TSCONFIG } from './lib/tsconfig';
import {
  AllowedFallbackPollingOptions,
  AllowedWatchDirectoryOptions,
  AllowedWatchFileOptions,
} from './lib/tsconfig';

/**
 * tsconfig
 * @type {TSCONFIG}
 */
export const ts: TSCONFIG = {
  files: [],
  exclude: [],
  include: [],
  references: [],
  extends: '',
  compilerOptions: {
    typeChecking: {
      allowUnreachableCode: false,
      allowUnusedLabels: false,
      alwaysStrict: false,
      exactOptionalPropertyTypes: false,
      noFallthroughCasesInSwitch: false,
      noImplicitAny: false,
      noImplicitOverride: false,
      noImplicitReturns: false,
      noImplicitThis: false,
      noPropertyAccessFromIndexSignature: false,
      noUncheckedIndexedAccess: false,
      noUnusedLocals: false,
      noUnusedParameters: false,
      strict: false,
      strictBindCallApply: false,
      strictFunctionTypes: false,
      strictNullChecks: false,
      strictPropertyInitialization: false,
      useUnknownInCatchVariables: false,
    },
    modules: {
      allowArbitraryExtensions: false,
      allowImportingTsExtensions: false,
      allowUmdGlobalAccess: false,
      baseUrl: '',
      customConditions: [],
      moduleResolution: ModuleResolutionKind.Bundler,
      moduleSuffixes: false,
      noResolve: false,
      paths: [],
      resolveJsonModule: false,
      resolvePackageJsonExports: false,
      resolvePackageJsonImports: false,
      rootDir: '',
      rootDirs: [],
      typeRoots: [],
      types: [],
    },
    emit: {
      declaration: false,
      declarationDir: '',
      declarationMap: false,
      downlevelIteration: false,
      emitBOM: false,
      emitDeclarationOnly: false,
      importHelpers: false,
      importsNotUsedAsValues: false,
      inlineSourceMap: false,
      inlineSources: false,
      mapRoot: false,
      newLine: 'lf',
      noEmit: false,
      noEmitHelpers: false,
      noEmitOnError: false,
      outDir: '',
      outFile: '',
      preserveConstEnums: false,
      preserveValueImports: false,
      removeComments: false,
      sourceMap: false,
      sourceRoot: false,
      stripInternal: false,
    },
    javascriptSupport: {
      allowJs: false,
      checkJs: false,
      maxNodeModuleJsDepth: false,
    },
    editorSupport: {
      disableSizeLimit: false,
      plugins: [],
    },
    interopConstraints: {
      allowSyntheticDefaultImports: false,
      esModuleInterop: false,
      forceConsistentCasingInFileNames: false,
      isolatedModules: false,
      preserveSymlinks: false,
      verbatimModuleSyntax: false,
    },
    backwardsCompatibility: {
      charset: Charset.Utf8,
      keyofStringsOnly: false,
      noImplicitUseStrict: false,
      noStrictGenericChecks: false,
      out: '',
      suppressExcessPropertyErrors: false,
      suppressImplicitAnyIndexErrors: false,
    },
    languageEnvironment: {
      emitDecoratorMetadata: false,
      experimentalDecorators: false,
      jsxFragmentFactory: '',
      jsxImportSource: '',
      lib: [Lib.DOM, Lib.ESNext],
      noLib: false,
      reactNamespace: '',
      target: Target.ESNext,
      useDefineForClassFields: false,
    },
    compilerDiagnostics: {
      diagnostics: false,
      explainFiles: false,
      extendedDiagnostics: false,
      generateCpuProfile: '',
      listEmittedFiles: false,
      listFiles: false,
      traceResolution: false,
    },
    projects: {},
    outputFormatting: {
      noErrorTruncation: false,
      preserveWatchOutput: false,
      pretty: false,
    },
    completeness: {
      skipDefaultLibCheck: false,
      skipLibCheck: false,
    },
    watchOptions: {
      assumeChangesOnlyAffectDirectDependencies: false,
    },
    watchOption: {
      watchFile: 'fixedpollinginterval',
      watchDirectory: 'fixedpollinginterval',
      fallbackPolling: 'fixedinterval',
      synchronousWatchDirectory: false,
      excludeDirectories: [],
      excludeFiles: [],
    },
    typeAcquisition: {
      enable: false,
      include: [],
      exclude: [],
      disableFilenameBasedTypeAcquisition: false,
    },
  },
};

// The TypeScript configuration defaults
const tsconfigDefaults: TSCONFIG = Object.create(ts);
// The TypeScript configuration path
const tsconfigPath = path.join(
  vscode.workspace.workspaceFolders![0].uri.fsPath,
  'tsconfig.json',
);

/**
 * Retrieves the TypeScript configuration from the workspace.
 * @returns {TSCONFIG} The TypeScript configuration object
 * @see https://www.typescriptlang.org/tsconfig
 */
function getTSConfig(): TSCONFIG {
  if (fs.existsSync(tsconfigPath)) {
    const ts = JSON.parse(
      fs.readFileSync(tsconfigPath, 'utf8'),
    ) as TSCONFIG;
    if (ts.compilerOptions) {
      ts.compilerOptions = {
        ...ts.compilerOptions,
        ...ts.compilerOptions,
      };
    }
    return ts;
  } else {
    return tsconfigDefaults;
  }
}
/**
 * Updates the TypeScript configuration from the settings in the workspace.
 *
 * This function retrieves the TypeScript configuration settings from the workspace
 * configuration and updates the corresponding properties in the top-level compiler
 * options object. The function iterates over each property and retrieves the value
 * from the configuration using the `get` method. The retrieved value is then assigned
 * to the corresponding property in the `ts.compilerOptions` object.
 *
 * @return {void} This function does not return a value.
 */
function updateTSConfigFromSettings(): void {
  const config = vscode.workspace.getConfiguration('extension');
  // Update top-level options
  ts.compilerOptions!.typeChecking.alwaysStrict =
    config.get<boolean>('compilerOptions.strict') || false;
  ts.compilerOptions!.typeChecking.allowUnreachableCode =
    config.get<boolean>('compilerOptions.allowUnreachableCode') ||
    false;
  ts.compilerOptions!.typeChecking.noImplicitAny =
    config.get<boolean>('compilerOptions.noImplicitAny') || false;
  ts.compilerOptions!.typeChecking.allowUnusedLabels =
    config.get<boolean>('compilerOptions.allowUnusedLabels') || false;
  ts.compilerOptions!.typeChecking.exactOptionalPropertyTypes =
    config.get<boolean>(
      'compilerOptions.exactOptionalPropertyTypes',
    ) || false;
  ts.compilerOptions!.typeChecking.noFallthroughCasesInSwitch =
    config.get<boolean>(
      'compilerOptions.noFallthroughCasesInSwitch',
    ) || false;
  ts.compilerOptions!.typeChecking.noImplicitAny =
    config.get<boolean>('compilerOptions.noImplicitAny') || false;
  ts.compilerOptions!.typeChecking.noImplicitOverride =
    config.get<boolean>('compilerOptions.noImplicitOverrides') ||
    false;
  ts.compilerOptions!.typeChecking.noImplicitReturns =
    config.get<boolean>('compilerOptions.noImplicitReturns') || false;
  ts.compilerOptions!.typeChecking.noImplicitThis =
    config.get<boolean>('compilerOptions.noImplicitThis') || false;
  ts.compilerOptions!.typeChecking.noPropertyAccessFromIndexSignature =
    config.get<boolean>(
      'compilerOptions.noPropertyAccessFromIndexSignature',
    ) || false;
  ts.compilerOptions!.typeChecking.noUncheckedIndexedAccess =
    config.get<boolean>('compilerOptions.noUncheckedIndexedAccess') ||
    false;
  ts.compilerOptions!.typeChecking.noUnusedLocals =
    config.get<boolean>('compilerOptions.noUnusedLocals') || false;
  ts.compilerOptions!.typeChecking.noUnusedParameters =
    config.get<boolean>('compilerOptions.noUnusedParameters') ||
    false;
  ts.compilerOptions!.typeChecking.strict =
    config.get<boolean>('compilerOptions.strict') || false;
  ts.compilerOptions!.typeChecking.strictBindCallApply =
    config.get<boolean>('compilerOptions.strictBindCallApply') ||
    false;
  ts.compilerOptions!.typeChecking.strictFunctionTypes =
    config.get<boolean>('compilerOptions.strictFunctionTypes') ||
    false;
  ts.compilerOptions!.typeChecking.strictNullChecks =
    config.get<boolean>('compilerOptions.strictNullChecks') || false;
  ts.compilerOptions!.typeChecking.strictPropertyInitialization =
    config.get<boolean>(
      'compilerOptions.strictPropertyInitialization',
    ) || false;
  ts.compilerOptions!.typeChecking.useUnknownInCatchVariables =
    config.get<boolean>(
      'compilerOptions.useUnknownInCatchVariables',
    ) || false;
  ts.compilerOptions!.javascriptSupport.allowJs =
    config.get<boolean>('compilerOptions.allowJs') || false;
  ts.compilerOptions!.javascriptSupport.checkJs =
    config.get<boolean>('compilerOptions.checkJs') || false;
  ts.compilerOptions!.javascriptSupport.maxNodeModuleJsDepth =
    config.get<boolean>('compilerOptions.maxNodeModuleJsDepth') ||
    false;
  ts.compilerOptions!.emit.declaration =
    config.get<boolean>('compilerOptions.declaration') || false;
  ts.compilerOptions!.emit.declarationDir =
    config.get<string>('compilerOptions.declarationDir') || '';
  ts.compilerOptions!.emit.declarationMap =
    config.get<boolean>('compilerOptions.declarationMap') || false;
  ts.compilerOptions!.emit.downlevelIteration =
    config.get<boolean>('compilerOptions.downlevelIteration') ||
    false;
  ts.compilerOptions!.emit.emitBOM =
    config.get<boolean>('compilerOptions.emitBOM') || false;
  ts.compilerOptions!.emit.emitDeclarationOnly =
    config.get<boolean>('compilerOptions.emitDeclarationOnly') ||
    false;
  ts.compilerOptions!.emit.importHelpers =
    config.get<boolean>('compilerOptions.importHelpers') || false;
  ts.compilerOptions!.emit.importsNotUsedAsValues =
    config.get<boolean>('compilerOptions.importsNotUsedAsValues') ||
    false;
  ts.compilerOptions!.emit.inlineSourceMap =
    config.get<boolean>('compilerOptions.inlineSourceMap') || false;
  ts.compilerOptions!.emit.inlineSources =
    config.get<boolean>('compilerOptions.inlineSources') || false;
  ts.compilerOptions!.emit.mapRoot =
    config.get<boolean>('compilerOptions.mapRoot') || false;
  ts.compilerOptions!.emit.newLine =
    config.get<'lf' | 'crlf'>('compilerOptions.newLine') || 'lf';
  ts.compilerOptions!.emit.noEmit =
    config.get<boolean>('compilerOptions.noEmit') || false;
  ts.compilerOptions!.emit.noEmitHelpers =
    config.get<boolean>('compilerOptions.noEmitHelpers') || false;
  ts.compilerOptions!.emit.noEmitOnError =
    config.get<boolean>('compilerOptions.noEmitOnError') || false;
  ts.compilerOptions!.emit.outDir =
    config.get<string>('compilerOptions.outDir') || '';
  ts.compilerOptions!.emit.outFile =
    config.get<string>('compilerOptions.outFile') || '';
  ts.compilerOptions!.emit.preserveConstEnums =
    config.get<boolean>('compilerOptions.preserveConstEnums') ||
    false;
  ts.compilerOptions!.emit.preserveValueImports =
    config.get<boolean>('compilerOptions.preserveValueImports') ||
    false;
  ts.compilerOptions!.emit.removeComments =
    config.get<boolean>('compilerOptions.removeComments') || false;
  ts.compilerOptions!.emit.sourceMap =
    config.get<boolean>('compilerOptions.sourceMap') || false;
  ts.compilerOptions!.emit.sourceRoot =
    config.get<boolean>('compilerOptions.sourceRoot') || false;
  ts.compilerOptions!.backwardsCompatibility.charset =
    config.get<Charset>(
      'compilerOptions.backwardsCompatibility.charset',
    ) || Charset.Utf8;
  ts.compilerOptions!.backwardsCompatibility.keyofStringsOnly =
    config.get<boolean>(
      'compilerOptions.backwardsCompatibility.keyofStringsOnly',
    ) || false;
  ts.compilerOptions!.backwardsCompatibility.noImplicitUseStrict =
    config.get<boolean>(
      'compilerOptions.backwardsCompatibility.noImplicitUseStrict',
    ) || false;
  ts.compilerOptions!.backwardsCompatibility.noStrictGenericChecks =
    config.get<boolean>(
      'compilerOptions.backwardsCompatibility.noStrictGenericChecks',
    ) || false;
  ts.compilerOptions!.backwardsCompatibility.out =
    config.get<string>(
      'compilerOptions.backwardsCompatibility.out',
    ) || '';
  ts.compilerOptions!.backwardsCompatibility.suppressExcessPropertyErrors =
    config.get<boolean>(
      'compilerOptions.backwardsCompatibility.suppressExcessPropertyErrors',
    ) || false;
  ts.compilerOptions!.backwardsCompatibility.suppressImplicitAnyIndexErrors =
    config.get<boolean>(
      'compilerOptions.backwardsCompatibility.suppressImplicitAnyIndexErrors',
    ) || false;
  ts.compilerOptions!.editorSupport.disableSizeLimit =
    config.get<boolean>(
      'compilerOptions.editorSupport.disableSizeLimit',
    ) || false;
  ts.compilerOptions!.editorSupport.plugins =
    config.get<string[]>('compilerOptions.editorSupport.plugins') ||
    [];
  ts.compilerOptions!.compilerDiagnostics.diagnostics =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.diagnostics',
    ) || false;
  ts.compilerOptions!.compilerDiagnostics.explainFiles =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.explainFiles',
    ) || false;
  ts.compilerOptions!.compilerDiagnostics.extendedDiagnostics =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.extendedDiagnostics',
    ) || false;
  ts.compilerOptions!.compilerDiagnostics.generateCpuProfile =
    config.get<string>(
      'compilerOptions.compilerDiagnostics.generateCpuProfile',
    ) || '';
  ts.compilerOptions!.compilerDiagnostics.listEmittedFiles =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.listEmittedFiles',
    ) || false;
  ts.compilerOptions!.compilerDiagnostics.listFiles =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.listFiles',
    ) || false;
  ts.compilerOptions!.compilerDiagnostics.traceResolution =
    config.get<boolean>(
      'compilerOptions.compilerDiagnostics.traceResolution',
    ) || false;

  ts.compilerOptions!.completeness.skipDefaultLibCheck =
    config.get<boolean>(
      'compilerOptions.completeness.skipDefaultLibCheck',
    ) || false;
  ts.compilerOptions!.completeness.skipLibCheck =
    config.get<boolean>(
      'compilerOptions.completeness.skipLibCheck',
    ) || false;

  ts.compilerOptions!.interopConstraints.esModuleInterop =
    config.get<boolean>(
      'compilerOptions.interopConstraints.esModuleInterop',
    ) || false;
  ts.compilerOptions!.interopConstraints.allowSyntheticDefaultImports =
    config.get<boolean>(
      'compilerOptions.interopConstraints.allowSyntheticDefaultImports',
    ) || false;
  ts.compilerOptions!.interopConstraints.forceConsistentCasingInFileNames =
    config.get<boolean>(
      'compilerOptions.interopConstraints.forceConsistentCasingInFileNames',
    ) || false;
  ts.compilerOptions!.interopConstraints.isolatedModules =
    config.get<boolean>(
      'compilerOptions.interopConstraints.isolatedModules',
    ) || false;
  ts.compilerOptions!.interopConstraints.preserveSymlinks =
    config.get<boolean>(
      'compilerOptions.interopConstraints.preserveSymlinks',
    ) || false;
  ts.compilerOptions!.interopConstraints.verbatimModuleSyntax =
    config.get<boolean>(
      'compilerOptions.interopConstraints.verbatimModuleSyntax',
    ) || false;

  ts.compilerOptions!.languageEnvironment.emitDecoratorMetadata =
    config.get<boolean>(
      'compilerOptions.languageEnvironment.emitDecoratorMetadata',
    ) || false;
  ts.compilerOptions!.languageEnvironment.experimentalDecorators =
    config.get<boolean>(
      'compilerOptions.languageEnvironment.experimentalDecorators',
    ) || false;
  ts.compilerOptions!.languageEnvironment.jsx =
    config.get<JsxEmit>('compilerOptions.languageEnvironment.jsx') ||
    JsxEmit.None;
  ts.compilerOptions!.languageEnvironment.jsxFactory =
    config.get<string>(
      'compilerOptions.languageEnvironment.jsxFactory',
    ) || '';
  ts.compilerOptions!.languageEnvironment.jsxFragmentFactory =
    config.get<string>(
      'compilerOptions.languageEnvironment.jsxFragmentFactory',
    ) || '';
  ts.compilerOptions!.languageEnvironment.jsxImportSource =
    config.get<string>(
      'compilerOptions.languageEnvironment.jsxImportSource',
    ) || '';
  ts.compilerOptions!.languageEnvironment.lib =
    config.get<Lib[]>('compilerOptions.languageEnvironment.lib') ||
    [];
  ts.compilerOptions!.languageEnvironment.noLib =
    config.get<boolean>(
      'compilerOptions.languageEnvironment.noLib',
    ) || false;
  ts.compilerOptions!.languageEnvironment.reactNamespace =
    config.get<string>(
      'compilerOptions.languageEnvironment.reactNamespace',
    ) || '';
  ts.compilerOptions!.languageEnvironment.reactNamespace =
    config.get<string>(
      'compilerOptions.languageEnvironment.reactNamespace',
    ) || '';
  ts.compilerOptions!.languageEnvironment.target =
    config.get<Target>(
      'compilerOptions.languageEnvironment.target',
    ) || Target.ES5;

  ts.compilerOptions!.modules.baseUrl =
    config.get<string>('compilerOptions.baseUrl') || '.';
  ts.compilerOptions!.modules.allowArbitraryExtensions =
    config.get<boolean>(
      'compilerOptions.modules.allowArbitraryExtensions',
    ) || false;
  ts.compilerOptions!.modules.allowImportingTsExtensions =
    config.get<boolean>(
      'compilerOptions.modules.allowImportingTsExtensions',
    ) || false;
  ts.compilerOptions!.modules.paths =
    config.get<string[]>('compilerOptions.modules.paths') || [];
  ts.compilerOptions!.modules.resolveJsonModule =
    config.get<boolean>(
      'compilerOptions.modules.resolveJsonModule',
    ) || false;
  ts.compilerOptions!.modules.resolvePackageJsonExports =
    config.get<boolean>(
      'compilerOptions.modules.resolvePackageJsonExports',
    ) || false;
  ts.compilerOptions!.modules.resolvePackageJsonImports =
    config.get<boolean>(
      'compilerOptions.modules.resolvePackageJsonImports',
    ) || false;
  ts.compilerOptions!.modules.rootDir =
    config.get<string>('compilerOptions.modules.rootDir') || '';
  ts.compilerOptions!.modules.rootDirs =
    config.get<string[]>('compilerOptions.modules.rootDirs') || [];
  ts.compilerOptions!.modules.typeRoots =
    config.get<string[]>('compilerOptions.modules.typeRoots') || [];
  ts.compilerOptions!.modules.types =
    config.get<string[]>('compilerOptions.modules.types') || [];
  ts.compilerOptions!.modules.allowUmdGlobalAccess =
    config.get<boolean>(
      'compilerOptions.modules.allowUmdGlobalAccess',
    ) || false;
  ts.compilerOptions!.modules.module =
    config.get<ModuleKind>('compilerOptions.modules.module') ||
    ModuleKind.CommonJS;
  ts.compilerOptions!.modules.moduleResolution =
    config.get<ModuleResolutionKind>(
      'compilerOptions.modules.moduleResolution',
    ) || ModuleResolutionKind.Node;
  ts.compilerOptions!.modules.noResolve =
    config.get<boolean>('compilerOptions.modules.noResolve') || false;
  ts.compilerOptions!.outputFormatting.noErrorTruncation =
    config.get<boolean>(
      'compilerOptions.outputFormatting.noErrorTruncation',
    ) || false;
  ts.compilerOptions!.outputFormatting.preserveWatchOutput =
    config.get<boolean>(
      'compilerOptions.outputFormatting.preserveWatchOutput',
    ) || false;
  ts.compilerOptions!.outputFormatting.pretty =
    config.get<boolean>('compilerOptions.outputFormatting.pretty') ||
    false;
  ts.compilerOptions!.projects.composite =
    config.get<boolean>('compilerOptions.projects.composite') ||
    false;
  ts.compilerOptions!.projects.disableReferencedProjectLoad =
    config.get<boolean>(
      'compilerOptions.projects.disableReferencedProjectLoad',
    ) || false;
  ts.compilerOptions!.projects.disableSolutionSearching =
    config.get<boolean>(
      'compilerOptions.projects.disableSolutionSearching',
    ) || false;
  ts.compilerOptions!.projects.disableSourceOfProjectReferenceRedirect =
    config.get<boolean>(
      'compilerOptions.projects.disableSourceOfProjectReferenceRedirect',
    ) || false;
  ts.compilerOptions!.projects.incremental =
    config.get<boolean | 'readonly' | 'tsbuildinfo-only'>(
      'compilerOptions.projects.incremental',
    ) || false;
  ts.compilerOptions!.projects.tsBuildInfoFile =
    config.get<string>('compilerOptions.projects.tsBuildInfoFile') ||
    './.tsbuildinfo'; // Update type acquisition
  ts.compilerOptions!.typeAcquisition.disableFilenameBasedTypeAcquisition =
    config.get<boolean>(
      'compilerOptions.typeAcquisition.disableFilenameBasedTypeAcquisition',
    ) || false;
  ts.compilerOptions!.typeAcquisition.enable =
    config.get<boolean>('compilerOptions.typeAcquisition.enable') ||
    false;
  ts.compilerOptions!.typeAcquisition.exclude =
    config.get<string[]>('compilerOptions.typeAcquisition.exclude') ||
    [];
  ts.compilerOptions!.typeAcquisition.include =
    config.get<string[]>('compilerOptions.typeAcquisition.include') ||
    []; // Update watch options
  ts.compilerOptions!.watchOption.excludeDirectories =
    config.get<string[]>(
      'compilerOptions.watchOption.excludeDirectories',
    ) || [];
  ts.compilerOptions!.watchOption.excludeFiles =
    config.get<string[]>(
      'compilerOptions.watchOption.excludeFiles',
    ) || [];
  ts.compilerOptions!.watchOption.fallbackPolling =
    config.get<AllowedFallbackPollingOptions>(
      'compilerOptions.watchOption.fallbackPolling',
    ) || 'fixedinterval';
  ts.compilerOptions!.watchOption.synchronousWatchDirectory =
    config.get<boolean>(
      'compilerOptions.watchOption.synchronousWatchDirectory',
    ) || false;
  ts.compilerOptions!.watchOption.watchDirectory =
    config.get<AllowedWatchDirectoryOptions>(
      'compilerOptions.watchOption.watchDirectory',
    ) || 'fixedpollinginterval';
  ts.compilerOptions!.watchOption.watchFile =
    config.get<AllowedWatchFileOptions>(
      'compilerOptions.watchOption.watchFile',
    ) || 'fixedpollinginterval';
  ts.compilerOptions!.watchOptions.assumeChangesOnlyAffectDirectDependencies =
    config.get<boolean>(
      'compilerOptions.assumeChangesOnlyAffectDirectDependencies',
    ) || false;
}

/**
 * Register the command that generates or updates the tsconfig.json file
 *
 * @param {vscode.ExtensionContext} context - The context of the extension
 * @return {Promise<void>} A promise that resolves when the activation is complete
 */
export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const ts: TSCONFIG = getTSConfig();

  /**
   * Register the command that generates or updates the tsconfig.json file
   */
  const disposable: vscode.Disposable =
    vscode.commands.registerCommand(
      'extension.generateTsConfig',
      async () => {
        // Update the `ts` object with the current settings from the user's VS Code configuration
        updateTSConfigFromSettings();

        // Get the first workspace folder (if any)
        const workspaceFolders:
          | readonly vscode.WorkspaceFolder[]
          | undefined = vscode.workspace.workspaceFolders;
        if (workspaceFolders && workspaceFolders.length > 0) {
          // Generate the file path for `tsconfig.json`
          const workspacePath: string =
            workspaceFolders[0].uri.fsPath;
          const tsconfigPath: string = path.join(
            workspacePath,
            'tsconfig.json',
          );

          /**
           * Write the `ts` object to `tsconfig.json`
           * @throws {Error} If the `tsconfig.json` file could not be written
           */
          try {
            fs.writeFileSync(
              tsconfigPath,
              JSON.stringify(ts, null, 2),
              'utf8',
            );
            vscode.window.showInformationMessage(
              'tsconfig.json has been generated successfully!',
            );
          } catch (error) {
            vscode.window.showErrorMessage(
              `Failed to write tsconfig.json: ${error}`,
            );
          }
        } else {
          vscode.window.showErrorMessage(
            'No workspace folder is open.',
          );
        }
      },
    );

  // Push the command to the context subscriptions to ensure it is available in the command palette
  context.subscriptions.push(disposable);
}

// Deactivate function (optional)
export function deactivate() {}
