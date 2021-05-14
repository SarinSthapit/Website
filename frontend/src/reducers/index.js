import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import { combineReducers } from 'redux';
import authReducer from './auth.reducer';



const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer, 
    auth: authReducer
});

export default rootReducer;