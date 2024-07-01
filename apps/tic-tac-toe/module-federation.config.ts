import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'tic-tac-toe',
  exposes: {
    './Routes': 'apps/tic-tac-toe/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
