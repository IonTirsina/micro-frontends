import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'typing-speed',
  exposes: {
    './Routes': 'apps/typing-speed/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
