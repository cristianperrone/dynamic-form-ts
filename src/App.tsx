import { ThemeProvider } from '@mui/material/styles';

import theme from './Stylish/Theme';
import './App.css'
import PokemonForm from './views/PokemonForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PokemonForm />
    </ThemeProvider>
  )
}

export default App
