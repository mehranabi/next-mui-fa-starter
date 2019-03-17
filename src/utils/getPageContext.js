import { SheetsRegistry, create } from 'jss'
import rtl from 'jss-rtl'
import {
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Vazir', 'Roboto', sans-serif",
  },
  direction: 'rtl',
})

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
    jss,
  }
}

let pageContext

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}
