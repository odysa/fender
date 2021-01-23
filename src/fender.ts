import { Config, defaultProjectConfig, ProjectConfig } from './config';
import { walk } from 'walk';
import * as fs from 'fs';
class Fender {
  private config: Config;
  private plugins: any[];
  private isRendering: boolean;
  private docPaths: string[];
  constructor() {
    this.plugins = [];
    this.config = defaultProjectConfig;
    this.isRendering = false;
    this.docPaths = [];
  }
  public async render() {
    await this.initConfig();
  }
  public use(...plugin: any) {
    this.plugins.push(...plugin);
  }
  private async initConfig() {
    const configPath = this.config.configPath;
  }
  private loadPaths() {
    if (!this.config.postDir) return;
  }
}
export { Fender };
