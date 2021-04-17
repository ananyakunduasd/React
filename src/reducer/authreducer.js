import {authConstant} from '../action/actionconst';

const initState={
	firstname:'',
	lastname:'',
	email:'',
	password:'',
	authentiCated:false,
	authenticating:"",
	message:''
}
const AuthReducers=(state=initState,action)=>{
	console.log(action);
	switch(action.type){
case `${authConstant.USER_REGISTER}_REQUEST`:
return {
	...state
}
case `${authConstant.USER_REGISTER}_SUCCESS`:
 return state={
	...state,

	message:action.payload.message
}

case `${authConstant.USER_REGISTER}_FAILURE`:
return state={
	...state,
	error:action.payload.error
}




case `${authConstant.USER_LOGIN}_REQUEST`:
return {
	...state
};
case `${authConstant.USER_LOGIN}_SUCCESS`:
	
 return state={
	...state,
	authentiCated:true,
	authenticating:action.payload.userToken,
	message:action.payload.message
}
case `${authConstant.USER_LOGIN}_FAILURE`:
return state={
	...state,
	message:action.payload.error
}
// case `${authConstant.USER_LOGOUT}_REQUEST`:
// return {
// 	...state
// };
// case `${authConstant.USER_LOGOUT}_SUCCESS`:
	
//  return state={
// 	...state,
// 	authentiCated:false,
// 	authenticating:"",
// 	message:action.payload.message
// }
// case `${authConstant.USER_LOGOUT}_FAILURE`:
// return state={
// 	...state,
// 	message:action.payload.error
// }

default:
return state;
	}

}



export default AuthReducers;