import {execa} from 'execa';
import path from 'path';
import fsExtra from 'fs-extra';

export async function install({ directory }: InstallParam) {
   if (await fsExtra.pathExists(directory)) {
      throw new Error(`The directory ${directory} already exists`);
    }
  const gitInitResult = await execa(
    `git clone https://github.com/deep-foundation/typescript-npm-package-template.git ${directory}`
  );
  if (gitInitResult.exitCode !== 0) {
    throw new Error(gitInitResult.stderr);
  }
  console.log(gitInitResult.stdout);
  await fsExtra.remove(path.join(directory, '.git'));
}

export interface InstallParam {
  directory: string;
}
