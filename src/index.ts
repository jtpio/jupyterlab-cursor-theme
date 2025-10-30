import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { applyPalette, darkPalette, lightPalette } from './palettes';

/**
 * Initialization data for the jupyterlab-cursor-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-cursor-theme:plugin',
  description: 'JupyterLab theme with Cursor vibes',
  autoStart: true,
  requires: [IThemeManager],
  activate: (_app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-cursor-theme is activated!');
    const style = 'jupyterlab-cursor-theme/index.css';

    manager.register({
      name: 'Cursor Dark',
      isLight: false,
      load: () => {
        applyPalette(darkPalette);
        return manager.loadCSS(style);
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Cursor Light',
      isLight: true,
      load: () => {
        applyPalette(lightPalette);
        return manager.loadCSS(style);
      },
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
