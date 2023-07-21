#!/usr/bin/env node

import { program } from 'commander';
import { setup as setup } from '../setup';
import fsExtra from 'fs-extra';
import path from 'path';
import { install } from '../install';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export { setup as create } from '../setup';

main();

async function main() {

  const cliOptions = yargs(hideBin(process.argv))
    .usage(`$0 [Options]`, `Creates new typescript npm package`)
    .option('directory-name', {
      type: 'string',
      description: 'The name of the directory where the package will be created',
      demandOption: true,
      })
    .option('package-name', {
      type: 'string',
      description: 'The name of the package',
      demandOption: true,
      })
    .option('description', {
      type: 'string',
      description: 'The description of the package',
      demandOption: false,
      })
    .option('repository-url', {
      type: 'string',
      description: 'The url of the repository',
      demandOption: false,
      })
      .parseSync()

  install({ directoryName: cliOptions.directoryName });
  await setup({
    ...cliOptions,
    directoryPath: path.resolve(cliOptions.directoryName),
  });
}

export interface Options {
  directory: string;
  packageName: string;
  description: string;
  repositoryUrl: string;
}
