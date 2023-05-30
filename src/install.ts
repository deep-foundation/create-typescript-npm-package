import exec from '@simplyhexagonal/exec';
import path from 'path';
import fsExtra from 'fs-extra';

export async function install({ directoryPath }: InstallParam) {
  const { execPromise: gitInitExecPromise } = exec(
    `git clone https://github.com/FreePhoenix888/typescript-npm-package-template.git ${directoryPath}`
  );
  const gitInitResult = await gitInitExecPromise;
  if (gitInitResult.exitCode !== 0) {
    throw new Error(gitInitResult.stderrOutput);
  }
  console.log(gitInitResult.stdoutOutput);
  await fsExtra.remove(path.join(directoryPath, '.git'));
}

export interface InstallParam {
  directoryPath: string;
}
