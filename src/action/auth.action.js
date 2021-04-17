import {authConstant} from './actionconst'
import axios from 'axios'


export const signUp=(user)=>{
    return async (dispatch)=>{
    
        //action Request send to the server
    dispatch({type:`${authConstant.USER_REGISTER}_REQUEST`});
    axios.post(`https://api09.herokuapp.com/register`,user).then((res)=>{
        const msg=res.data.message
        console.log(res.data);
        
        //Success action generated
        //dispatch(actionType,paylode(opt))
    dispatch({type:`${authConstant.USER_REGISTER}_SUCCESS`,payload:{message:msg}})
    
    }).catch((err)=>{
        //Failure action generated
    dispatch({type:`${authConstant.USER_REGISTER}_FAILURE`,payload:{error:"Data not registered"}})
    })
    }
    }


    export const signIn=(user)=>{
        return async (dispatch)=>{
        
            //action Request send to the server
        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});
        axios.post(`https://api09.herokuapp.com/login`,user).then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            
            //Success action generated
            //dispatch(actionType,paylode(opt))
            const datas=res.data.token
            window.sessionStorage.setItem('token',datas)
        dispatch({type:`${authConstant.USER_LOGIN}_SUCCESS`,payload:{message:msg,userToken:datas}})
        
        }).catch((err)=>{
            console.log(err)
            //Failure action generated
        dispatch({type:`${authConstant.USER_LOGIN}_FAILURE`,payload:{error:"Data not registerd"}})
        })
        }
        }
    
    
    
    
    
  
    