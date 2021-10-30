import {CardComponent} from './structure/Card';
import logo from '../logo.svg';

const Section1 = () => {
  return (
    <div>
        <CardComponent image={logo} direction={`LR`} title={'Card title #1'}
                 desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sagittis lacus, vel rhoncus ligula.
                        Aliquam at sapien eget justo aliquet sodales sit amet a odio. Pellentesque malesuada diam ac metus
                        tincidunt ultricies eu quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        consectetur, diam placerat ullamcorper molestie, neque purus ultrices elit, quis dignissim quam erat
                        a sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
        />
        <CardComponent image={logo} direction={`RL`} title={'Card title #2'}
                 desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sagittis lacus, vel rhoncus ligula.
                        Aliquam at sapien eget justo aliquet sodales sit amet a odio. Pellentesque malesuada diam ac metus
                        tincidunt ultricies eu quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        consectetur, diam placerat ullamcorper molestie, neque purus ultrices elit, quis dignissim quam erat
                        a sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
        />
    </div>
  )
}

export {Section1}
