import {productConstant} from './actionconst'
import axios from 'axios'


export const products = (cid) =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_ALL}_REQUEST`});
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            const person=res.data;
            console.log(person);
            dispatch({type:`${productConstant.PRODUCT_VIEW}_VIEW`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_VIEW_FAIL}_VIEW_FAIL`});
            console.log(error);
        })

    }
}


export const productdetails = (pid) =>
{
    return async (dispatch) =>{
        console.log(pid);
    dispatch({type:`${productConstant.PRODUCT_DETAILS}_REQUEST`});
    axios.get(`https://fakestoreapi.com/products/${pid}`)
    .then((res)=>{
        const pdata = res.data;
        console.log(pdata);
        dispatch({type:`${productConstant.PRODUCT_DETAILS_VIEW}_VIEW`,payload:{data:pdata}});
    })
    .catch((error)=>{
        dispatch({type:`${productConstant.PRODUCT_DETAILS_VIEW_FAIL}_FAIL`});
        console.log(error);
    })
    }

}

export const catagory = () =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_CATAGORY}_REQUEST`});
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_CATAGORY}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_CATAGORY}_FAIL`});
        })

    }
}


export const subcatagory = (sub) =>
{
    return async (dispatch) =>
    {
        dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_REQUEST`});
        axios.get(`https://fakestoreapi.com/products/category/${sub}`)
        .then((res)=>{
            const person=res.data;
            dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_SUCCESS`,payload:{data:person}});
        })
        .catch((error)=>
        {
            dispatch({type:`${productConstant.PRODUCT_SUBCATAGORY}_FAIL`});
        })

    }
}