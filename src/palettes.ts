/**
 * Color palettes for Cursor themes
 */

export interface ICursorPalette {
  // Shadow
  shadowBaseLightness: string;

  // Borders
  borderColor0: string;
  borderColor1: string;
  borderColor2: string;
  borderColor3: string;
  inverseBorderColor: string;

  // UI Fonts
  uiFontColor0: string;
  uiFontColor1: string;
  uiFontColor2: string;
  uiFontColor3: string;
  uiInverseFontColor0: string;
  uiInverseFontColor1: string;
  uiInverseFontColor2: string;
  uiInverseFontColor3: string;

  // Content Fonts
  contentFontColor0: string;
  contentFontColor1: string;
  contentFontColor2: string;
  contentFontColor3: string;
  contentLinkColor: string;
  contentLinkVisitedColor: string;
  contentLinkHoverColor: string;

  // Layout
  layoutColor0: string;
  layoutColor1: string;
  layoutColor2: string;
  layoutColor3: string;
  layoutColor4: string;

  // Inverse Layout
  inverseLayoutColor0: string;
  inverseLayoutColor1: string;
  inverseLayoutColor2: string;
  inverseLayoutColor3: string;
  inverseLayoutColor4: string;

  // Brand/Accent
  brandColor0: string;
  brandColor1: string;
  brandColor2: string;
  brandColor3: string;
  brandColor4: string;
  accentColor0: string;
  accentColor1: string;
  accentColor2: string;
  accentColor3: string;

  // State colors
  warnColor0: string;
  warnColor1: string;
  warnColor2: string;
  warnColor3: string;
  errorColor0: string;
  errorColor1: string;
  errorColor2: string;
  errorColor3: string;
  successColor0: string;
  successColor1: string;
  successColor2: string;
  successColor3: string;
  infoColor0: string;
  infoColor1: string;
  infoColor2: string;
  infoColor3: string;

  // Shortcut buttons
  shortcutsButtonBackground: string;
  shortcutsButtonHoverBackground: string;

  // Cell
  cellEditorBorderColor: string;
  cellEditorBoxShadow: string;
  cellPromptNotActiveFontColor: string;
  cellInpromptFontColor: string;
  cellOutpromptFontColor: string;

  // Notebook
  notebookMultiselectedColor: string;

  // Rendermime
  rendermimeErrorBackground: string;
  rendermimeTableRowBackground: string;
  rendermimeTableRowHoverBackground: string;

  // Dialog
  dialogBackground: string;

  // Toolbar
  toolbarBoxShadow: string;

  // Input
  inputBoxShadow: string;
  inputBackground: string;
  inputActiveBoxShadowColor: string;

  // Editor
  editorSelectedBackground: string;
  editorSelectedFocusedBackground: string;
  editorCursorColor: string;

  // CodeMirror
  mirrorEditorKeywordColor: string;
  mirrorEditorAtomColor: string;
  mirrorEditorNumberColor: string;
  mirrorEditorDefColor: string;
  mirrorEditorVariableColor: string;
  mirrorEditorVariable2Color: string;
  mirrorEditorVariable3Color: string;
  mirrorEditorPunctuationColor: string;
  mirrorEditorPropertyColor: string;
  mirrorEditorOperatorColor: string;
  mirrorEditorCommentColor: string;
  mirrorEditorStringColor: string;
  mirrorEditorString2Color: string;
  mirrorEditorMetaColor: string;
  mirrorEditorQualifierColor: string;
  mirrorEditorBuiltinColor: string;
  mirrorEditorBracketColor: string;
  mirrorEditorTagColor: string;
  mirrorEditorAttributeColor: string;
  mirrorEditorHeaderColor: string;
  mirrorEditorQuoteColor: string;
  mirrorEditorLinkColor: string;
  mirrorEditorErrorColor: string;
  mirrorEditorHrColor: string;

  // Scrollbar
  scrollbarBackgroundColor: string;
  scrollbarThumbColor: string;

  // Icon colors
  iconContrastColor0: string;
  iconContrastColor1: string;
  iconContrastColor2: string;
  iconContrastColor3: string;

  // Button colors
  acceptColorNormal: string;
  acceptColorHover: string;
  acceptColorActive: string;
  warnColorNormal: string;
  warnColorHover: string;
  warnColorActive: string;
  rejectColorNormal: string;
  rejectColorHover: string;
  rejectColorActive: string;

  // File/activity icons
  jupyterIconColor: string;
  notebookIconColor: string;
  jsonIconColor: string;
  consoleIconBackgroundColor: string;
  consoleIconColor: string;
  terminalIconBackgroundColor: string;
  terminalIconColor: string;
  textEditorIconColor: string;
  inspectorIconColor: string;
  switchColor: string;
  switchTruePositionColor: string;
  switchCursorColor: string;

  // Vega
  vegaBackground: string;

  // Search
  searchSelectedMatchBackgroundColor: string;
  searchSelectedMatchColor: string;
  searchUnselectedMatchBackgroundColor: string;
}

export const darkPalette: ICursorPalette = {
  shadowBaseLightness: '20',

  borderColor0: 'rgba(228, 228, 228, 0.08)',
  borderColor1: 'rgba(228, 228, 228, 0.08)',
  borderColor2: 'rgba(228, 228, 228, 0.12)',
  borderColor3: 'rgba(228, 228, 228, 0.18)',
  inverseBorderColor: 'rgba(228, 228, 228, 0.15)',

  uiFontColor0: 'rgba(228, 228, 228, 0.92)',
  uiFontColor1: 'rgba(228, 228, 228, 0.92)',
  uiFontColor2: 'rgba(228, 228, 228, 0.55)',
  uiFontColor3: 'rgba(228, 228, 228, 0.37)',
  uiInverseFontColor0: 'rgba(0, 0, 0, 1)',
  uiInverseFontColor1: 'rgba(0, 0, 0, 0.8)',
  uiInverseFontColor2: 'rgba(0, 0, 0, 0.5)',
  uiInverseFontColor3: 'rgba(0, 0, 0, 0.3)',

  contentFontColor0: 'rgba(228, 228, 228, 0.92)',
  contentFontColor1: 'rgba(228, 228, 228, 0.92)',
  contentFontColor2: 'rgba(228, 228, 228, 0.7)',
  contentFontColor3: 'rgba(228, 228, 228, 0.5)',
  contentLinkColor: '#81a1c1',
  contentLinkVisitedColor: '#b48ead',
  contentLinkHoverColor: '#87a6c4',

  layoutColor0: '#181818',
  layoutColor1: '#141414',
  layoutColor2: '#262626',
  layoutColor3: '#343434',
  layoutColor4: '#404040',

  inverseLayoutColor0: 'rgba(228, 228, 228, 0.92)',
  inverseLayoutColor1: 'rgba(228, 228, 228, 0.8)',
  inverseLayoutColor2: 'rgba(228, 228, 228, 0.6)',
  inverseLayoutColor3: 'rgba(228, 228, 228, 0.4)',
  inverseLayoutColor4: 'rgba(228, 228, 228, 0.3)',

  brandColor0: '#6a8caf',
  brandColor1: '#81a1c1',
  brandColor2: '#87a6c4',
  brandColor3: '#9db5cc',
  brandColor4: '#b3c4d8',
  accentColor0: '#2e8a51',
  accentColor1: '#3fa266',
  accentColor2: '#70b489',
  accentColor3: '#a0d4b5',

  warnColor0: '#b97a30',
  warnColor1: '#d2943e',
  warnColor2: '#f1b467',
  warnColor3: '#f5c88d',
  errorColor0: '#b80049',
  errorColor1: '#e34671',
  errorColor2: '#fc6b83',
  errorColor3: '#ff9bb0',
  successColor0: '#2e8a51',
  successColor1: '#3fa266',
  successColor2: '#70b489',
  successColor3: '#a0d4b5',
  infoColor0: '#6a8caf',
  infoColor1: '#88c0d0',
  infoColor2: '#9bcfe0',
  infoColor3: '#b8e0ec',

  shortcutsButtonBackground: '#81a1c1',
  shortcutsButtonHoverBackground: '#87a6c4',

  cellEditorBorderColor: 'rgba(228, 228, 228, 0.08)',
  cellEditorBoxShadow: 'inset 0 0 2px #81a1c1',
  cellPromptNotActiveFontColor: 'rgba(228, 228, 228, 0.26)',
  cellInpromptFontColor: '#81a1c1',
  cellOutpromptFontColor: '#d2943e',

  notebookMultiselectedColor: 'rgba(129, 161, 193, 0.24)',

  rendermimeErrorBackground: 'rgba(227, 70, 113, 0.28)',
  rendermimeTableRowBackground: '#181818',
  rendermimeTableRowHoverBackground: 'rgba(136, 192, 208, 0.2)',

  dialogBackground: 'rgba(0, 0, 0, 0.6)',

  toolbarBoxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.8)',

  inputBoxShadow: 'inset 0 0 2px #81a1c1',
  inputBackground: 'rgba(228, 228, 228, 0.04)',
  inputActiveBoxShadowColor: 'rgba(129, 161, 193, 0.3)',

  editorSelectedBackground: 'rgba(64, 64, 64, 0.6)',
  editorSelectedFocusedBackground: 'rgba(129, 161, 193, 0.24)',
  editorCursorColor: 'rgba(228, 228, 228, 0.92)',

  mirrorEditorKeywordColor: '#82d2ce',
  mirrorEditorAtomColor: '#82d2ce',
  mirrorEditorNumberColor: '#a8cc7c',
  mirrorEditorDefColor: '#ebc88d',
  mirrorEditorVariableColor: '#d6d6dd',
  mirrorEditorVariable2Color: '#aaa0fa',
  mirrorEditorVariable3Color: '#a8cc7c',
  mirrorEditorPunctuationColor: '#d6d6dd',
  mirrorEditorPropertyColor: '#aaa0fa',
  mirrorEditorOperatorColor: '#82d2ce',
  mirrorEditorCommentColor: '#a4a4a4',
  mirrorEditorStringColor: '#e394dc',
  mirrorEditorString2Color: '#e394dc',
  mirrorEditorMetaColor: '#aaa0fa',
  mirrorEditorQualifierColor: '#d6d6dd',
  mirrorEditorBuiltinColor: '#f8c762',
  mirrorEditorBracketColor: '#d6d6dd',
  mirrorEditorTagColor: '#aaa0fa',
  mirrorEditorAttributeColor: '#efb080',
  mirrorEditorHeaderColor: '#87c3ff',
  mirrorEditorQuoteColor: '#a8cc7c',
  mirrorEditorLinkColor: '#87c3ff',
  mirrorEditorErrorColor: '#e34671',
  mirrorEditorHrColor: '#d6d6dd',

  scrollbarBackgroundColor: '#181818',
  scrollbarThumbColor: '228, 228, 228',

  iconContrastColor0: '#b48ead',
  iconContrastColor1: '#3fa266',
  iconContrastColor2: '#e34671',
  iconContrastColor3: '#81a1c1',

  acceptColorNormal: '#6a8caf',
  acceptColorHover: '#81a1c1',
  acceptColorActive: '#87a6c4',
  warnColorNormal: '#b80049',
  warnColorHover: '#e34671',
  warnColorActive: '#fc6b83',
  rejectColorNormal: '#626262',
  rejectColorHover: '#818181',
  rejectColorActive: '#a0a0a0',

  jupyterIconColor: '#d2943e',
  notebookIconColor: '#d2943e',
  jsonIconColor: '#d2943e',
  consoleIconBackgroundColor: '#81a1c1',
  consoleIconColor: '#141414',
  terminalIconBackgroundColor: '#343434',
  terminalIconColor: 'rgba(228, 228, 228, 0.92)',
  textEditorIconColor: 'rgba(228, 228, 228, 0.55)',
  inspectorIconColor: 'rgba(228, 228, 228, 0.55)',
  switchColor: '#626262',
  switchTruePositionColor: '#81a1c1',
  switchCursorColor: 'rgba(228, 228, 228, 0.8)',

  vegaBackground: '#181818',

  searchSelectedMatchBackgroundColor: 'rgba(136, 192, 208, 0.4)',
  searchSelectedMatchColor: '#141414',
  searchUnselectedMatchBackgroundColor: 'rgba(136, 192, 208, 0.27)'
};

export const lightPalette: ICursorPalette = {
  shadowBaseLightness: '240',

  borderColor0: 'rgba(20, 20, 20, 0.08)',
  borderColor1: 'rgba(20, 20, 20, 0.08)',
  borderColor2: 'rgba(20, 20, 20, 0.12)',
  borderColor3: 'rgba(20, 20, 20, 0.18)',
  inverseBorderColor: 'rgba(20, 20, 20, 0.15)',

  uiFontColor0: 'rgba(20, 20, 20, 0.92)',
  uiFontColor1: 'rgba(20, 20, 20, 0.92)',
  uiFontColor2: 'rgba(20, 20, 20, 0.68)',
  uiFontColor3: 'rgba(20, 20, 20, 0.48)',
  uiInverseFontColor0: 'rgba(255, 255, 255, 1)',
  uiInverseFontColor1: 'rgba(255, 255, 255, 0.8)',
  uiInverseFontColor2: 'rgba(255, 255, 255, 0.5)',
  uiInverseFontColor3: 'rgba(255, 255, 255, 0.3)',

  contentFontColor0: 'rgba(20, 20, 20, 0.92)',
  contentFontColor1: 'rgba(20, 20, 20, 0.92)',
  contentFontColor2: 'rgba(20, 20, 20, 0.7)',
  contentFontColor3: 'rgba(20, 20, 20, 0.5)',
  contentLinkColor: '#3c7cab',
  contentLinkVisitedColor: '#a02673',
  contentLinkHoverColor: '#055180',

  layoutColor0: '#fcfcfc',
  layoutColor1: '#f3f3f3',
  layoutColor2: '#ededed',
  layoutColor3: '#e7e7e7',
  layoutColor4: '#e0e0e0',

  inverseLayoutColor0: 'rgba(20, 20, 20, 0.92)',
  inverseLayoutColor1: 'rgba(20, 20, 20, 0.8)',
  inverseLayoutColor2: 'rgba(20, 20, 20, 0.6)',
  inverseLayoutColor3: 'rgba(20, 20, 20, 0.4)',
  inverseLayoutColor4: 'rgba(20, 20, 20, 0.3)',

  brandColor0: '#055180',
  brandColor1: '#3c7cab',
  brandColor2: '#6299c3',
  brandColor3: '#87a6c4',
  brandColor4: '#9db5cc',
  accentColor0: '#1f8a65',
  accentColor1: '#55a583',
  accentColor2: '#70b489',
  accentColor3: '#96c2ac',

  warnColor0: '#a16900',
  warnColor1: '#c08532',
  warnColor2: '#db704b',
  warnColor3: '#f1b467',
  errorColor0: '#b3003f',
  errorColor1: '#cf2d56',
  errorColor2: '#e75e78',
  errorColor3: '#ff9bb0',
  successColor0: '#1f8a65',
  successColor1: '#55a583',
  successColor2: '#70b489',
  successColor3: '#96c2ac',
  infoColor0: '#206595',
  infoColor1: '#6f9ba6',
  infoColor2: '#87a6c4',
  infoColor3: '#9bcfe0',

  shortcutsButtonBackground: '#3c7cab',
  shortcutsButtonHoverBackground: '#055180',

  cellEditorBorderColor: 'rgba(20, 20, 20, 0.08)',
  cellEditorBoxShadow: 'inset 0 0 2px #3c7cab',
  cellPromptNotActiveFontColor: 'rgba(20, 20, 20, 0.26)',
  cellInpromptFontColor: '#3c7cab',
  cellOutpromptFontColor: '#c08532',

  notebookMultiselectedColor: 'rgba(60, 124, 171, 0.24)',

  rendermimeErrorBackground: 'rgba(207, 45, 86, 0.28)',
  rendermimeTableRowBackground: '#fcfcfc',
  rendermimeTableRowHoverBackground: 'rgba(111, 155, 166, 0.2)',

  dialogBackground: 'rgba(0, 0, 0, 0.25)',

  toolbarBoxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.24)',

  inputBoxShadow: 'inset 0 0 2px #3c7cab',
  inputBackground: 'rgba(20, 20, 20, 0.04)',
  inputActiveBoxShadowColor: 'rgba(60, 124, 171, 0.3)',

  editorSelectedBackground: 'rgba(228, 228, 228, 0.4)',
  editorSelectedFocusedBackground: 'rgba(60, 124, 171, 0.24)',
  editorCursorColor: 'rgba(20, 20, 20, 0.92)',

  mirrorEditorKeywordColor: '#b3003f',
  mirrorEditorAtomColor: '#b3003f',
  mirrorEditorNumberColor: '#b8448b',
  mirrorEditorDefColor: '#db704b',
  mirrorEditorVariableColor: '#206595',
  mirrorEditorVariable2Color: '#6049b3',
  mirrorEditorVariable3Color: '#1f8a65',
  mirrorEditorPunctuationColor: 'rgba(20, 20, 20, 0.92)',
  mirrorEditorPropertyColor: '#6049b3',
  mirrorEditorOperatorColor: '#b3003f',
  mirrorEditorCommentColor: 'rgba(20, 20, 20, 0.68)',
  mirrorEditorStringColor: '#9e94d5',
  mirrorEditorString2Color: '#9e94d5',
  mirrorEditorMetaColor: '#6049b3',
  mirrorEditorQualifierColor: '#206595',
  mirrorEditorBuiltinColor: '#db704b',
  mirrorEditorBracketColor: 'rgba(20, 20, 20, 0.92)',
  mirrorEditorTagColor: '#1f8a65',
  mirrorEditorAttributeColor: '#6049b3',
  mirrorEditorHeaderColor: '#206595',
  mirrorEditorQuoteColor: 'rgba(20, 20, 20, 0.68)',
  mirrorEditorLinkColor: '#3c7cab',
  mirrorEditorErrorColor: '#cf2d56',
  mirrorEditorHrColor: 'rgba(20, 20, 20, 0.92)',

  scrollbarBackgroundColor: '#fcfcfc',
  scrollbarThumbColor: '20, 20, 20',

  iconContrastColor0: '#a02673',
  iconContrastColor1: '#1f8a65',
  iconContrastColor2: '#cf2d56',
  iconContrastColor3: '#3c7cab',

  acceptColorNormal: '#055180',
  acceptColorHover: '#3c7cab',
  acceptColorActive: '#6299c3',
  warnColorNormal: '#b3003f',
  warnColorHover: '#cf2d56',
  warnColorActive: '#e75e78',
  rejectColorNormal: '#9e9e9e',
  rejectColorHover: '#7e7e7e',
  rejectColorActive: '#5f5f5f',

  jupyterIconColor: '#c08532',
  notebookIconColor: '#c08532',
  jsonIconColor: '#c08532',
  consoleIconBackgroundColor: '#3c7cab',
  consoleIconColor: '#fcfcfc',
  terminalIconBackgroundColor: '#e7e7e7',
  terminalIconColor: 'rgba(20, 20, 20, 0.92)',
  textEditorIconColor: 'rgba(20, 20, 20, 0.55)',
  inspectorIconColor: 'rgba(20, 20, 20, 0.55)',
  switchColor: '#9e9e9e',
  switchTruePositionColor: '#3c7cab',
  switchCursorColor: 'rgba(20, 20, 20, 0.8)',

  vegaBackground: '#fcfcfc',

  searchSelectedMatchBackgroundColor: 'rgba(111, 155, 166, 0.5)',
  searchSelectedMatchColor: '#fcfcfc',
  searchUnselectedMatchBackgroundColor: 'rgba(111, 155, 166, 0.27)'
};

/**
 * Apply a color palette to the document root
 */
export function applyPalette(palette: ICursorPalette): void {
  const root = document.documentElement.style;

  // Shadow
  root.setProperty('--jp-shadow-base-lightness', palette.shadowBaseLightness);

  // Borders
  root.setProperty('--jp-border-color0', palette.borderColor0);
  root.setProperty('--jp-border-color1', palette.borderColor1);
  root.setProperty('--jp-border-color2', palette.borderColor2);
  root.setProperty('--jp-border-color3', palette.borderColor3);
  root.setProperty('--jp-inverse-border-color', palette.inverseBorderColor);

  // UI Fonts
  root.setProperty('--jp-ui-font-color0', palette.uiFontColor0);
  root.setProperty('--jp-ui-font-color1', palette.uiFontColor1);
  root.setProperty('--jp-ui-font-color2', palette.uiFontColor2);
  root.setProperty('--jp-ui-font-color3', palette.uiFontColor3);
  root.setProperty('--jp-ui-inverse-font-color0', palette.uiInverseFontColor0);
  root.setProperty('--jp-ui-inverse-font-color1', palette.uiInverseFontColor1);
  root.setProperty('--jp-ui-inverse-font-color2', palette.uiInverseFontColor2);
  root.setProperty('--jp-ui-inverse-font-color3', palette.uiInverseFontColor3);

  // Content Fonts
  root.setProperty('--jp-content-font-color0', palette.contentFontColor0);
  root.setProperty('--jp-content-font-color1', palette.contentFontColor1);
  root.setProperty('--jp-content-font-color2', palette.contentFontColor2);
  root.setProperty('--jp-content-font-color3', palette.contentFontColor3);
  root.setProperty('--jp-content-link-color', palette.contentLinkColor);
  root.setProperty(
    '--jp-content-link-visited-color',
    palette.contentLinkVisitedColor
  );
  root.setProperty(
    '--jp-content-link-hover-color',
    palette.contentLinkHoverColor
  );

  // Layout
  root.setProperty('--jp-layout-color0', palette.layoutColor0);
  root.setProperty('--jp-layout-color1', palette.layoutColor1);
  root.setProperty('--jp-layout-color2', palette.layoutColor2);
  root.setProperty('--jp-layout-color3', palette.layoutColor3);
  root.setProperty('--jp-layout-color4', palette.layoutColor4);

  // Inverse Layout
  root.setProperty('--jp-inverse-layout-color0', palette.inverseLayoutColor0);
  root.setProperty('--jp-inverse-layout-color1', palette.inverseLayoutColor1);
  root.setProperty('--jp-inverse-layout-color2', palette.inverseLayoutColor2);
  root.setProperty('--jp-inverse-layout-color3', palette.inverseLayoutColor3);
  root.setProperty('--jp-inverse-layout-color4', palette.inverseLayoutColor4);

  // Brand/Accent
  root.setProperty('--jp-brand-color0', palette.brandColor0);
  root.setProperty('--jp-brand-color1', palette.brandColor1);
  root.setProperty('--jp-brand-color2', palette.brandColor2);
  root.setProperty('--jp-brand-color3', palette.brandColor3);
  root.setProperty('--jp-brand-color4', palette.brandColor4);
  root.setProperty('--jp-accent-color0', palette.accentColor0);
  root.setProperty('--jp-accent-color1', palette.accentColor1);
  root.setProperty('--jp-accent-color2', palette.accentColor2);
  root.setProperty('--jp-accent-color3', palette.accentColor3);

  // State colors
  root.setProperty('--jp-warn-color0', palette.warnColor0);
  root.setProperty('--jp-warn-color1', palette.warnColor1);
  root.setProperty('--jp-warn-color2', palette.warnColor2);
  root.setProperty('--jp-warn-color3', palette.warnColor3);
  root.setProperty('--jp-error-color0', palette.errorColor0);
  root.setProperty('--jp-error-color1', palette.errorColor1);
  root.setProperty('--jp-error-color2', palette.errorColor2);
  root.setProperty('--jp-error-color3', palette.errorColor3);
  root.setProperty('--jp-success-color0', palette.successColor0);
  root.setProperty('--jp-success-color1', palette.successColor1);
  root.setProperty('--jp-success-color2', palette.successColor2);
  root.setProperty('--jp-success-color3', palette.successColor3);
  root.setProperty('--jp-info-color0', palette.infoColor0);
  root.setProperty('--jp-info-color1', palette.infoColor1);
  root.setProperty('--jp-info-color2', palette.infoColor2);
  root.setProperty('--jp-info-color3', palette.infoColor3);

  // Shortcut buttons
  root.setProperty(
    '--jp-shortcuts-button-background',
    palette.shortcutsButtonBackground
  );
  root.setProperty(
    '--jp-shortcuts-button-hover-background',
    palette.shortcutsButtonHoverBackground
  );

  // Cell
  root.setProperty(
    '--jp-cell-editor-border-color',
    palette.cellEditorBorderColor
  );
  root.setProperty('--jp-cell-editor-box-shadow', palette.cellEditorBoxShadow);
  root.setProperty(
    '--jp-cell-prompt-not-active-font-color',
    palette.cellPromptNotActiveFontColor
  );
  root.setProperty(
    '--jp-cell-inprompt-font-color',
    palette.cellInpromptFontColor
  );
  root.setProperty(
    '--jp-cell-outprompt-font-color',
    palette.cellOutpromptFontColor
  );

  // Notebook
  root.setProperty(
    '--jp-notebook-multiselected-color',
    palette.notebookMultiselectedColor
  );

  // Rendermime
  root.setProperty(
    '--jp-rendermime-error-background',
    palette.rendermimeErrorBackground
  );
  root.setProperty(
    '--jp-rendermime-table-row-background',
    palette.rendermimeTableRowBackground
  );
  root.setProperty(
    '--jp-rendermime-table-row-hover-background',
    palette.rendermimeTableRowHoverBackground
  );

  // Dialog
  root.setProperty('--jp-dialog-background', palette.dialogBackground);

  // Toolbar
  root.setProperty('--jp-toolbar-box-shadow', palette.toolbarBoxShadow);

  // Input
  root.setProperty('--jp-input-box-shadow', palette.inputBoxShadow);
  root.setProperty('--jp-input-background', palette.inputBackground);
  root.setProperty(
    '--jp-input-active-box-shadow-color',
    palette.inputActiveBoxShadowColor
  );

  // Editor
  root.setProperty(
    '--jp-editor-selected-background',
    palette.editorSelectedBackground
  );
  root.setProperty(
    '--jp-editor-selected-focused-background',
    palette.editorSelectedFocusedBackground
  );
  root.setProperty('--jp-editor-cursor-color', palette.editorCursorColor);

  // CodeMirror
  root.setProperty(
    '--jp-mirror-editor-keyword-color',
    palette.mirrorEditorKeywordColor
  );
  root.setProperty(
    '--jp-mirror-editor-atom-color',
    palette.mirrorEditorAtomColor
  );
  root.setProperty(
    '--jp-mirror-editor-number-color',
    palette.mirrorEditorNumberColor
  );
  root.setProperty(
    '--jp-mirror-editor-def-color',
    palette.mirrorEditorDefColor
  );
  root.setProperty(
    '--jp-mirror-editor-variable-color',
    palette.mirrorEditorVariableColor
  );
  root.setProperty(
    '--jp-mirror-editor-variable-2-color',
    palette.mirrorEditorVariable2Color
  );
  root.setProperty(
    '--jp-mirror-editor-variable-3-color',
    palette.mirrorEditorVariable3Color
  );
  root.setProperty(
    '--jp-mirror-editor-punctuation-color',
    palette.mirrorEditorPunctuationColor
  );
  root.setProperty(
    '--jp-mirror-editor-property-color',
    palette.mirrorEditorPropertyColor
  );
  root.setProperty(
    '--jp-mirror-editor-operator-color',
    palette.mirrorEditorOperatorColor
  );
  root.setProperty(
    '--jp-mirror-editor-comment-color',
    palette.mirrorEditorCommentColor
  );
  root.setProperty(
    '--jp-mirror-editor-string-color',
    palette.mirrorEditorStringColor
  );
  root.setProperty(
    '--jp-mirror-editor-string-2-color',
    palette.mirrorEditorString2Color
  );
  root.setProperty(
    '--jp-mirror-editor-meta-color',
    palette.mirrorEditorMetaColor
  );
  root.setProperty(
    '--jp-mirror-editor-qualifier-color',
    palette.mirrorEditorQualifierColor
  );
  root.setProperty(
    '--jp-mirror-editor-builtin-color',
    palette.mirrorEditorBuiltinColor
  );
  root.setProperty(
    '--jp-mirror-editor-bracket-color',
    palette.mirrorEditorBracketColor
  );
  root.setProperty(
    '--jp-mirror-editor-tag-color',
    palette.mirrorEditorTagColor
  );
  root.setProperty(
    '--jp-mirror-editor-attribute-color',
    palette.mirrorEditorAttributeColor
  );
  root.setProperty(
    '--jp-mirror-editor-header-color',
    palette.mirrorEditorHeaderColor
  );
  root.setProperty(
    '--jp-mirror-editor-quote-color',
    palette.mirrorEditorQuoteColor
  );
  root.setProperty(
    '--jp-mirror-editor-link-color',
    palette.mirrorEditorLinkColor
  );
  root.setProperty(
    '--jp-mirror-editor-error-color',
    palette.mirrorEditorErrorColor
  );
  root.setProperty('--jp-mirror-editor-hr-color', palette.mirrorEditorHrColor);

  // Scrollbar
  root.setProperty(
    '--jp-scrollbar-background-color',
    palette.scrollbarBackgroundColor
  );
  root.setProperty('--jp-scrollbar-thumb-color', palette.scrollbarThumbColor);

  // Icon colors
  root.setProperty('--jp-icon-contrast-color0', palette.iconContrastColor0);
  root.setProperty('--jp-icon-contrast-color1', palette.iconContrastColor1);
  root.setProperty('--jp-icon-contrast-color2', palette.iconContrastColor2);
  root.setProperty('--jp-icon-contrast-color3', palette.iconContrastColor3);

  // Button colors
  root.setProperty('--jp-accept-color-normal', palette.acceptColorNormal);
  root.setProperty('--jp-accept-color-hover', palette.acceptColorHover);
  root.setProperty('--jp-accept-color-active', palette.acceptColorActive);
  root.setProperty('--jp-warn-color-normal', palette.warnColorNormal);
  root.setProperty('--jp-warn-color-hover', palette.warnColorHover);
  root.setProperty('--jp-warn-color-active', palette.warnColorActive);
  root.setProperty('--jp-reject-color-normal', palette.rejectColorNormal);
  root.setProperty('--jp-reject-color-hover', palette.rejectColorHover);
  root.setProperty('--jp-reject-color-active', palette.rejectColorActive);

  // File/activity icons
  root.setProperty('--jp-jupyter-icon-color', palette.jupyterIconColor);
  root.setProperty('--jp-notebook-icon-color', palette.notebookIconColor);
  root.setProperty('--jp-json-icon-color', palette.jsonIconColor);
  root.setProperty(
    '--jp-console-icon-background-color',
    palette.consoleIconBackgroundColor
  );
  root.setProperty('--jp-console-icon-color', palette.consoleIconColor);
  root.setProperty(
    '--jp-terminal-icon-background-color',
    palette.terminalIconBackgroundColor
  );
  root.setProperty('--jp-terminal-icon-color', palette.terminalIconColor);
  root.setProperty('--jp-text-editor-icon-color', palette.textEditorIconColor);
  root.setProperty('--jp-inspector-icon-color', palette.inspectorIconColor);
  root.setProperty('--jp-switch-color', palette.switchColor);
  root.setProperty(
    '--jp-switch-true-position-color',
    palette.switchTruePositionColor
  );
  root.setProperty('--jp-switch-cursor-color', palette.switchCursorColor);

  // Vega
  root.setProperty('--jp-vega-background', palette.vegaBackground);

  // Search
  root.setProperty(
    '--jp-search-selected-match-background-color',
    palette.searchSelectedMatchBackgroundColor
  );
  root.setProperty(
    '--jp-search-selected-match-color',
    palette.searchSelectedMatchColor
  );
  root.setProperty(
    '--jp-search-unselected-match-background-color',
    palette.searchUnselectedMatchBackgroundColor
  );
}
