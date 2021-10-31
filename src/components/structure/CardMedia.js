import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material//Box';

const primary = '#673ab7';
// const secondary = '#4caf50';

function MediaCard(props) {
  const { media, alt, heading, desc} = props;
  return (
      <div>
        <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
            <Card sx={{ minWidth: 400, margin: '10vmin 2vmin'}}>
              <CardMedia
                component="img"
                height="180"
                image={media}
                alt={alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left'}}>
                  {desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent:'center'}}>
                <Button size="medium" sx={{ backgroundColor: primary, color: '#ffffff'}}>Learn More</Button>
              </CardActions>
            </Card>
        </Box>
        <Box display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <Card sx={{ maxWidth: 400, margin: '10vmin 20px'}}>
              <CardMedia
                component="img"
                height="180"
                image={media}
                alt={alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left'}}>
                  {desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent:'center'}}>
                <Button size="medium" sx={{ backgroundColor: primary, color: '#ffffff'}}>Learn More</Button>
              </CardActions>
            </Card>
        </Box>
    </div>
  );
}

export {MediaCard}
