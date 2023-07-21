import {execa, execaSync} from 'execa';
import path from 'path';
import fsExtra from 'fs-extra';

export function install({ directoryName }: InstallParam) {
   if (fsExtra.pathExistsSync(directoryName)) {
      throw new Error(`The directory ${directoryName} already exists`);
    }
  execaSync(
    `git`, [`clone`, `https://github.com/deep-foundation/typescript-npm-package-template.git`, directoryName]
  );
  fsExtra.removeSync(path.join(directoryName, '.git'));
}

export interface InstallParam {
  directoryName: string;
}
