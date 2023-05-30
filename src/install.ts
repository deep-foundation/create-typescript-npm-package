import exec from '@simplyhexagonal/exec';
import path from 'path';
import fsExtra from 'fs-extra';

export async function install({ directory }: InstallParam) {
   if (await fsExtra.pathExists(directory)) {
      throw new Error(`The directory ${directory} already exists`);
    }
  const { execPromise: gitInitExecPromise } = exec(
    `git clone https://github.com/deep-foundation/typescript-npm-package-template.git ${directory}`
  );
  const gitInitResult = await gitInitExecPromise;
  if (gitInitResult.exitCode !== 0) {
    throw new Error(gitInitResult.stderrOutput);
  }
  console.log(gitInitResult.stdoutOutput);
  await fsExtra.remove(path.join(directory, '.git'));
}

export interface InstallParam {
  directory: string;
}
