import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-cursor-dark extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-cursor-dark:plugin',
  description: 'JupyterLab dark theme with Cursor vibes',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'jupyterlab-cursor-dark/index.css';

    manager.register({
      name: 'Cursor Dark',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
