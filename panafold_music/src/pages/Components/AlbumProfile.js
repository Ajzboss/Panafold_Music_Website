import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AlbumProfile({album}) {
  return (
    <div className='flex flex-col items-center justify-center'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="30"
        src={album["im:image"][2].label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {album["im:name"].label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p >{album["im:artist"].label}</p>
        <p >{album["im:price"].label}</p>
        <p >{album["rights"].label}</p>
        <p>{album["im:releaseDate"].attributes.label}</p>
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Listen Now</Button>
        <Button size="small">Buy Vinyl</Button>
      </CardActions>
    </Card>
    </div>
  );
}