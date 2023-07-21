import fsExtra from 'fs-extra';
import { glob, globSync } from 'glob';

export async function setup({
  packageName,
  description,
  repositoryUrl,
  directoryPath,
}: SetupParam) {
  const replacementDictionary = {
    '<PACKAGE_NAME>': packageName,
    '<DESCRIPTION>': description,
    '<REPOSITORY_URL>': repositoryUrl,
  };

  let files = globSync(`${directoryPath}/**/*`, {
    ignore: ['**/node_modules/**/*'],
    absolute: true,
  });

  files = files.filter((file) => fsExtra.lstatSync(file).isFile());

  const promises = [];
  for (const file of files) {
    const promise = new Promise(async () => {
      let fileContent = await fsExtra.readFile(file, 'utf-8');
      for (const [key, value] of Object.entries(replacementDictionary)) {
        if(!value) {
          continue;
        }
        fileContent = fileContent.replace(key, value);
      }
      await fsExtra.writeFile(file, fileContent);
    });
    promises.push(promise);
  }
  await Promise.all(promises);
}

export interface SetupParam {
  packageName: string;
  description?: string;
  repositoryUrl?: string;
  directoryPath: string;
}
