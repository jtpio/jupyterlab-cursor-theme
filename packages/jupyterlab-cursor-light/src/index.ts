import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-cursor-light extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-cursor-light:plugin',
  description: 'JupyterLab light theme with Cursor vibes',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-cursor-light is activated!');
    const style = 'jupyterlab-cursor-light/index.css';

    manager.register({
      name: 'Cursor Light',
      isLight: true,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
