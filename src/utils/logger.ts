import chalk = require('chalk');

export const log = {
  info: (sign: string, ...msg: string[]) => {
    console.log(chalk.blueBright('fender', sign), ...msg);
  },
  success: (sign: string, ...msg: string[]) => {
    console.log(chalk.greenBright('fender', sign), ...msg);
  },
  error: (sign: string, ...msg: string[]) => {
    console.log(chalk.bgRedBright('fender', sign), ...msg);
  },
  warn: (sign: string, ...msg: string[]) => {
    console.log(chalk.bgYellowBright('fender', sign), ...msg);
  },
};
