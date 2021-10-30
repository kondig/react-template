
import logo from '../logo.svg';
import {Section1} from './Section1';
import {ScrollTop} from './functional/ScrollTop';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Main = (props) => {
  return (
    <div>
      BodyStart
      <br/>
      <Section1 />
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      BodyEnd
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export {Main}
