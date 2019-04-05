import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {searchFilterReducer} from "./search.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    searchFilter: searchFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
