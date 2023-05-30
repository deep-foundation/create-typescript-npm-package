import { program } from 'commander';
import { setup as setup } from './setup';
import exec from '@simplyhexagonal/exec';
import fsExtra from 'fs-extra';
import path from 'path';
import { install } from './install';

export { setup as create } from './setup';

main();

async function main() {
  program.name('setup').addHelpText(
    'after',
    `
        
        Use this script to setup the project.`
  );

  program
    .option(
      '--directory-path <path>',
      'The path of the directory where the package will be created'
    )
    .option('--package-name <name>', 'The name of the package')
    .option(
      '--description Creates typescript npm package',
      'The description of the package'
    )
    .option('--repository-url <url>', 'The url of the repository');

  program.parse(process.argv);

  const {
    directoryPath,
    packageName,
    description = '',
    repositoryUrl = '',
  } = program.opts<Options>();
  if (!directoryPath) {
    throw new Error(
      'Please provide a directory path by using --directory-path option'
    );
  }
  if (!packageName) {
    throw new Error(
      'Please provide a package name by using --package-name option'
    );
  }

  await install({ directoryPath });
  await setup({ packageName, description, repositoryUrl, path: directoryPath });
}

export interface Options {
  directoryPath: string;
  packageName: string;
  description: string;
  repositoryUrl: string;
}
