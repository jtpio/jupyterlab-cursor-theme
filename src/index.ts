import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-cursor-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-cursor-theme:plugin',
  description: 'JupyterLab theme with Cursor vibes',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-cursor-theme is activated!');
    const style = 'jupyterlab-cursor-theme/index.css';

    manager.register({
      name: 'jupyterlab-cursor-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
