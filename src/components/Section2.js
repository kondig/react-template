import {MediaCard} from './structure/CardMedia';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import c1 from '../logo.svg';
import c2 from '../logo.svg';

const Section2 = (props) => {
  return (
    <div>
        <Box>
            <Container sx={{ display: 'flex', justifyContent:'center'}}>
                <MediaCard heading="Application #1" media={c1}
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sagittis lacus, vel rhoncus ligula.
                       Aliquam at sapien eget justo aliquet sodales sit amet a odio. Pellentesque malesuada diam ac metus
                       tincidunt ultricies eu quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                       consectetur, diam placerat ullamcorper molestie, neque purus ultrices elit, quis dignissim quam erat
                       a sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
                />
                <MediaCard heading="Application #2" media={c2}
                     desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sagittis lacus, vel rhoncus ligula.
                        Aliquam at sapien eget justo aliquet sodales sit amet a odio. Pellentesque malesuada diam ac metus
                        tincidunt ultricies eu quis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        consectetur, diam placerat ullamcorper molestie, neque purus ultrices elit, quis dignissim quam erat
                        a sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`}
                />
            </Container>
        </Box>
    </div>
  )
}

export {Section2}
