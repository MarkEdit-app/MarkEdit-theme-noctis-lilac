import { overrideThemes } from 'markedit-theming';
import { noctisLilac } from '@uiw/codemirror-theme-noctis-lilac';

overrideThemes({
  light: { extension: noctisLilac },
  options: { settingsKey: 'extension.markeditThemeNoctisLilac' },
});
