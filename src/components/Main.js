
import logo from '../logo.svg';
import {Section1} from './Section1';
import {ScrollTop} from './functional/ScrollTop';
import {Parallax} from './functional/Parallax';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Main = (props) => {
  return (
    <div>
      <Parallax height='50vh' bgimage={logo} />
      <Section1 />
      <img src={logo} className="App-logo" alt="logo" />
      <Parallax height='30vh' bgimage={logo} />      
    </div>
  )
}

export {Main}
