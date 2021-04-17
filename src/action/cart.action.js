import {cartConstant} from '../action/actionconst'

export const addCart = (data) => {
  console.log("Cart action js page ",data);
  return async (dispatch) => {
    

    dispatch({type: `${cartConstant.ADD_TO_CART}_SUCCESS`,payload:{ data: data }});
   
  };
};

export const incre = (data) =>{
  console.log("increase data from cart",data);
  return async (dispatch) =>{
      
          dispatch({type:`${cartConstant.ADD_FROM_CART}_SUCCESS`,payload:{data:data}});
     

  }
}
export const decre = (data) =>{
  console.log("increase data from cart",data);
  return async (dispatch) =>{
    
          dispatch({type:`${cartConstant.REMOVE_FROM_CART}_SUCCESS`,payload:{data:data}});
    

  }
}


export const productdel = (data)=>{
  console.log("delete product from",data);
  return async (dispatch)=>{
    dispatch({type:`${cartConstant.DELETE_FROM_CART}_SUCCESS`,payload:{data:data}});
  }
}