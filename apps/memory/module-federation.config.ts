import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'memory',
  exposes: {
    './Routes': 'apps/memory/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
