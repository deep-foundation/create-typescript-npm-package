import {execa} from 'execa';
import path from 'path';
import fsExtra from 'fs-extra';

export async function install({ directoryName }: InstallParam) {
   if (await fsExtra.pathExists(directoryName)) {
      throw new Error(`The directory ${directoryName} already exists`);
    }
  const gitInitResult = await execa(
    `git clone https://github.com/deep-foundation/typescript-npm-package-template.git ${directoryName}`
  );
  if (gitInitResult.exitCode !== 0) {
    throw new Error(gitInitResult.stderr);
  }
  console.log(gitInitResult.stdout);
  await fsExtra.remove(path.join(directoryName, '.git'));
}

export interface InstallParam {
  directoryName: string;
}
