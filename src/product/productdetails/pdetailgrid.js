import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import {addCart} from '../../action/cart.action'
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));


export default function Pcart1() {
  const classes = useStyles();
  const history = useHistory()
   const product=useSelector(state=>state.product)
   const cart=useSelector(state=>state.cartData)
   const dispatch = useDispatch();
   console.log(cart);

   const cartAdd = () =>
   {
       const cartProduct = product.singleData;
       const pro = {...cartProduct,quantity:1}
       if(sessionStorage.getItem("token") != null){
         dispatch(addCart(pro))
       }
       else{
         history.push("/login")
       }

   }

  return (
      <>
      <h1>productdetail</h1>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sm={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.singleData.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} md={4} sm={6} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name: {product.singleData.category}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Details: {product.singleData.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {product.singleData.id}
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained" color="primary" fullWidth onClick={cartAdd}>
                Add To Cart
              </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price: ${ product.singleData.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
   
    </div>
    </>
  );
}
