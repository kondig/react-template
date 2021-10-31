

import {Section1} from './Section1';
import {Section2} from './Section2';
import {Parallax} from './functional/Parallax';


import head from '../logo.svg';
import logo from '../logo.svg';

const Main = (props) => {
  return (
    <div>
      <Parallax height='95vh' bgimage={head} icon={logo} />
      <Section1 />
      <Parallax height='50vh' bgimage={logo} sectionTitle={"Section title"} iconDisplay={"none"} id={"s1"} />
      <Section2 />
    </div>
  )
}

export {Main}
