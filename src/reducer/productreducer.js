import {productConstant} from '../action/actionconst'
import { subcatagory } from '../action/product.action';

const initialState = {
    productData:[],
    singleData:{},
    subcatagory:[]
}

const ProductReducers=(state=initialState,action)=>
{
    console.log(action);
    switch (action.type) {
        case `${productConstant.PRODUCT_ALL}_REQUEST`:
            return state = {
                ...state
            }

        case `${productConstant.PRODUCT_VIEW}_VIEW`:
            return state = {
                ...state,
                productData:action.payload.data
            }

        case `${productConstant.PRODUCT_VIEW_FAIL}_VIEW_FAIL`:
            return state={
                ...state
            }



            case `${productConstant.PRODUCT_DETAILS}_REQUEST`:
            return state = {
                ...state
            }

        case `${productConstant.PRODUCT_DETAILS_VIEW}_VIEW`:
            return state = {
                ...state,
                singleData:action.payload.data
            }

        case `${productConstant.PRODUCT_DETAILS_VIEW_FAIL}_FAIL`:
            return state = {
                ...state
            }



            case `${productConstant.PRODUCT_CATAGORY}_REQUEST`:
                return state = {
                    ...state
                }
    
            case `${productConstant.PRODUCT_CATAGORY}_SUCCESS`:
                return state = {
                    ...state,
                    singleData:action.payload.data
                }
    
            case `${productConstant.PRODUCT_CATAGORY}_FAIL`:
                return state = {
                    ...state
                }

            
            
            case `${productConstant.PRODUCT_SUBCATAGORY}_REQUEST`:
                return state={
                    ...state,
                }
            case `${productConstant.PRODUCT_SUBCATAGORY}_SUCCESS`:
                return state={
                    ...state,
                    subcatagory:action.payload.data
                }  
            case `${productConstant.PRODUCT_SUBCATAGORY}_FAIL` :
                return state={
                    ...state
                }     
    

        default:
            return  state;
        }   

}

export default ProductReducers