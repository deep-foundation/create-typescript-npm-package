[![npm](https://img.shields.io/npm/v/@deep-foundation/create-typescript-npm-package.svg)](https://www.npmjs.com/package/@deep-foundation/create-typescript-npm-package)
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/create-typescript-npm-package) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Creates a new npm package with typescript support that will help you to manage your deep package. Uses [`@deep-foundation/typescript-npm-package-template`](https://github.com/deep-foundation/typescript-npm-package-template) as a template

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
# Table of Contents
- [Table Of Contents](#table-of-contents)
- [Library](#library)
- [Cli](#cli)
  - [Cli Usage](#cli-usage)
    - [`create-typescript-npm-package`](#`create-typescript-npm-package`)
  - [Cli Usage Ways](#cli-usage-ways)
    - [Directly running using npx](#directly-running-using-npx)
      - [Global Installation](#global-installation)
        - [Global installation and running using binary name](#global-installation-and-running-using-binary-name)
        - [Global installation and running using npx](#global-installation-and-running-using-npx)
      - [Local installation](#local-installation)
        - [Local installation and running using npx](#local-installation-and-running-using-npx)
        - [Local installation and running using npm script](#local-installation-and-running-using-npm-script)

<!-- TABLE_OF_CONTENTS_END -->

# Library
See [Documentation] for examples and API

# Cli
## Cli Usage
<!-- CLI_HELP_START -->

### `create-typescript-npm-package`
```
create-typescript-npm-package [Options]

Creates a new npm package with typescript support that will help you to manage y
our deep package. Uses [`@deep-foundation/typescript-npm-package-template`](http
s://github.com/deep-foundation/typescript-npm-package-template) as a template

Options:
  --help            Show help                                          [boolean]
  --version         Show version number                                [boolean]
  --directory-name  The name of the directory where the package will be created
                                                             [string] [required]
  --package-name    The name of the package                  [string] [required]
  --description     The description of the package                      [string]
  --repository-url  The url of the repository                           [string]
```

<!-- CLI_HELP_END -->

## Cli Usage Ways
<!-- CLI_USAGE_WAYS_START -->
If you are going to use this package in a project - it is recommended to install it is [Locally](#local-installation)  
If you are going to use this package for yourself - it is recommended to install it [Globally](#global-installation) or run it directly using [npx](#directly-running-using-npx)
## Directly running using npx
```shell
npx --yes @deep-foundation/create-typescript-npm-package
```

## Global Installation
### Global installation and running using binary name
```shell
npm install --global @deep-foundation/create-typescript-npm-package
create-typescript-npm-package
```

### Global installation and running using npx
```shell
npm install --global @deep-foundation/create-typescript-npm-package
npx create-typescript-npm-package
```

## Local installation

### Local installation and running using npx
```shell
npm install @deep-foundation/create-typescript-npm-package
npx create-typescript-npm-package
```

### Local installation and running using npm script
```shell
npm install @deep-foundation/create-typescript-npm-package
```
Add npm script to package.json. Note that you can name  your script as you want but it must call binary file provided by the package
```json
{
  "scripts": {
    "create-typescript-npm-package": "create-typescript-npm-package"
  }
}
```
and run
```shell
npm run create-typescript-npm-package
```
<!-- CLI_USAGE_WAYS_END -->

[Documentation]: https://deep-foundation.github.io/create-typescript-npm-package/

