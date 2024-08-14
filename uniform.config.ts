import { CLIConfiguration, uniformConfig } from '@uniformdev/cli/config';

require('dotenv').config();

// See https://docs.uniform.app/docs/guides/cli/commands/sync for more information on the sync command and its options

const allConfig: CLIConfiguration = uniformConfig({
  preset: "all",
  overrides: {
    serializationConfig: {
      directory: "./uniform/serialization",
      format: "yaml",
      mode: "mirror"
    },
  },
});

module.exports = allConfig;
