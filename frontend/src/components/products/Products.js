import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


  function Products({el}) {
   // console.log("data:")
   // console.log(el)
   
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={el?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {el?.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {el?.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {el?.price}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to basket</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Products
