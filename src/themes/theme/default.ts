// project-imports
import { ThemeMode } from 'config';

// types
import { PaletteThemeProps } from 'types/theme';

// ==============================|| PRESET THEME - DEFAULT ||============================== //

export default function Default(mode: ThemeMode): PaletteThemeProps {
  const contrastText = '#fff';

  // Brand primary scale (main = #AA14F0)
  let primaryColors = [
    '#F3E6FE', // lighter
    '#E5C8FD', // 100
    '#D8ABFC', // 200
    '#C985FA', // light
    '#BD64F7', // 400
    '#AA14F0', // main
    '#9712D6', // dark
    '#830FBB', // 700
    '#6F0DA0', // darker
    '#4B096F' // 900
  ];

  // Neutral secondary (tetap)
  let secondaryColors = [
    '#ACAEB4', // lighter
    '#8D9098', // 100
    '#6D727C', // 200
    '#545966', // light
    '#424755', // 400
    '#2F3544', // 500
    '#2B313F', // main
    '#272D39', // dark
    '#242834', // 800
    '#1F232D' // darker
  ];

  // Semantic (tetap; bisa dimute agar senada brand)
  let errorColors = ['#f5bebe', '#e76767', '#dc2626', '#d31c1c', '#c50d0d'];
  let warningColors = ['#f7dcb3', '#edad4d', '#e58a00', '#de7700', '#d35a00'];
  let infoColors = ['#c5eff3', '#78d9e2', '#3ec9d6', '#30bccc', '#1ba9bc'];
  let successColors = ['#c0e5d9', '#6bc2a5', '#2ca87f', '#21976c', '#107d4f'];

  if (mode === ThemeMode.DARK) {
    // Balik urutan di dark mode untuk kontras optimal
    primaryColors = [...primaryColors].reverse();
    secondaryColors = [...secondaryColors].reverse();
    errorColors = [...errorColors].reverse();
    warningColors = [...warningColors].reverse();
    infoColors = [...infoColors].reverse();
    successColors = [...successColors].reverse();
  }

  return {
    primary: {
      lighter: primaryColors[0],
      100: primaryColors[1],
      200: primaryColors[2],
      light: primaryColors[3],
      400: primaryColors[4],
      main: primaryColors[5],
      dark: primaryColors[6],
      700: primaryColors[7],
      darker: primaryColors[8],
      900: primaryColors[9],
      contrastText
    },
    secondary: {
      lighter: secondaryColors[0],
      100: secondaryColors[1],
      200: secondaryColors[2],
      light: secondaryColors[3],
      400: secondaryColors[4],
      500: secondaryColors[5],
      main: secondaryColors[6],
      dark: secondaryColors[7],
      800: secondaryColors[8],
      darker: secondaryColors[9],
      contrastText
    },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText
    }
  };
}
