interface Config {
  // config file path
  configPath: string;
  // post dir path
  postDir: string;

  // props
  title: string;
  foot: string;
}
interface ProjectConfig extends Config {
  favicon: string;
  description: string;
}
interface PageConfig extends Config {}
const defaultProjectConfig: ProjectConfig = {
  // config file path
  configPath: 'config.js',
  // post dir path
  postDir: '/posts',

  // props
  title: 'Fender',
  foot: 'Peace and Start',

  favicon: '',
  description: 'Fender builds website for you',
};
export { Config, ProjectConfig, defaultProjectConfig };
