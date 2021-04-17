import {combineReducers} from 'redux';
import AuthReducers from '../reducer/authreducer';
import ProductReducers from '../reducer/productreducer';
import CartReducers from './cartreducer'

const rootReducer=combineReducers(
{
	auth:AuthReducers,
	product:ProductReducers,
	cartData:CartReducers,
	subcatagoryData:ProductReducers,
}
)

export default rootReducer;