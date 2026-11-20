/**
 * tsup build configuration for publishing `kinetic-ui-icons` to npm.
 * Does not affect the Kinetic Studio Vite application build.
 *
 * Run with:
 *   npx tsup --config tsup.lib.config.ts
 */

interface TsupLibConfig {
  entry: Record<string, string>;
  format: Array<'esm' | 'cjs'>;
  dts: boolean;
  tsconfig: string;
  sourcemap: boolean;
  clean: boolean;
  treeshake: boolean;
  splitting: boolean;
  outDir: string;
  target: string;
  external: string[];
  outExtension?: (ctx: { format: string }) => { js: string };
}

const config: TsupLibConfig = {
  entry: {
    'core/index': 'src/lib/core/index.ts',
    'react/index': 'src/lib/react/index.tsx',
    'web/index': 'src/lib/web/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.lib.json',
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: true,
  outDir: 'dist',
  target: 'es2020',
  external: ['react', 'react-dom'],
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    };
  },
};

export default config;
