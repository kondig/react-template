import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function CardBody(props) {
  const theme = useTheme();
  const direction = props.direction;
  const titleColor = '#f50057';
  return (
    <div>
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column-reverse', margin: '20px auto', justifyContent: 'center', width: '90%'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
            <CardContent sx={{  }}>
              <Typography component="div" variant="h5" color="primary" sx={{ margin: '10px 5px'}}>
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                {props.desc}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ height: '200px' }}
            image={props.image}
            alt={props.title}
            title={props.title}
          />
        </Card>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        {direction == "LR" &&
          <Card sx={{ display: 'flex', margin: '20px auto', justifyContent: 'space-between', width: '80%'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%' }} >
              <CardContent sx={{  }}>
                <Typography component="div" variant="h5" color="primary" sx={{ margin: '10px 5px'}}>
                  {props.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                  {props.desc}
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '35%', backgroundColor: '#000000' }}
              image={props.image}
              alt={props.title}
              title={props.title}
            />
          </Card>
        }
        {direction == "RL" &&
          <Card sx={{ display: 'flex', margin: '20px auto', justifyContent: 'space-between', width: '80%'}}>
            <CardMedia
              component="img"
              sx={{ width: '35%' }}
              image={props.image}
              alt={props.title}
              title={props.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%' }} >
              <CardContent sx={{  }}>
                <Typography component="div" variant="h5" color="primary" sx={{ margin: '10px 5px'}}>
                  {props.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                  {props.desc}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        }
      </Box>
    </div>
  );
}

class CardComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, desc, image, alt, direction } = this.props;
    return (
      <div>
        <CardBody
          title = { title }
          desc = { desc }
          image = { image }
          direction = { direction }
         />
      </div>
    );
  }
}

export {CardComponent};
