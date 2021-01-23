import { log } from './utils/logger';
import { walkSync, WalkStats } from 'walk';
type PathLoadOption = {
  exclude?: string[];
  match?: RegExp;
};
/**
 * Find valid file paths
 */
class PathLoader {
  // dir path to find files paths
  private dir: string;
  private option: PathLoadOption;
  constructor(dir: string, option: PathLoadOption) {
    this.dir = dir;
    this.option = option;
  }
  public async load() {
    const res: string[] = [];
    await this.walk((file) => {
      res.push(this.dir + '/' + file.name);
    });
    return res;
  }
  private async walk(fn: (file: WalkStats) => void) {
    const match = this.option.match;
    walkSync(this.dir, {
      listeners: {
        file: (root, file, next) => {
          if (!match || match.test(file.name)) {
            fn(file);
            log.info('Read', `${root + file.name}`);
          }
        },
      },
    });
    log.success('Load', `${this.dir} successfully`);
  }
}
