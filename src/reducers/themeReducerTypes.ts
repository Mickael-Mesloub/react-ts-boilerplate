export interface ThemeState {
  isDarkMode: boolean;
}

export type ThemeAction = { type: 'TOGGLE_THEME' };

export enum ThemeModeEnum {
  LIGHT_MODE = 'LIGHT_MODE',
  DARK_MODE = 'DARK_MODE',
}

export type ThemeModeActions = {
  type: ThemeModeEnum.LIGHT_MODE | ThemeModeEnum.DARK_MODE;
};
