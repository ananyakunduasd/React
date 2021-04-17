import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom'
import { products } from '../../action/product.action';
import {useDispatch, useSelector} from 'react-redux'
import {productdetails} from '../../action/product.action'



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});


export default function Pcart() {
  const history = useHistory();
  const data =useSelector(state=>state.product)
  const dispatch = useDispatch();

   const Details=(id)=>{
    dispatch(productdetails(id));
       history.push(`products/${id}`)
       
   }

  const classes = useStyles();


  useEffect(()=>{
    dispatch(products());
  },[dispatch])

  return (
      <>
      <div >
      <h1>product</h1>
      <Grid container spacing={4}>
      {data.productData.map((value,id) => (
      <Grid item xs={12} md={4} sm={6} key={id}>
                  
   <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}>
         <img src={value.image}/>
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
          {value.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
          {value.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="primary" fullWidth onClick={() => Details(value.id)}>
            View Details
        </Button>
      </CardActions>
    </Card>

                </Grid>
                ))}
    
    </Grid>
    </div>
    </>
  )
}
