// import {createstore,applyMiddleware} from 'redux'
// import {composewithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// const  middleWare=[thunk]
// const store = createstore(
//     reducer,
//     composewithDevTools(applyMiddleware(...middleWare))
// );
// export default store;

// import {applyMiddleware} from 'redux'
// import { legacy_createStore as createStore} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import reducer from './Reducer'

// const middleware=[thunk];
// const store=createStore(
//     reducer,
//    composeWithDevTools(applyMiddleware(...middleware))

// );
// export default store;

import { legacy_createStore as createStore,applyMiddleWare} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux'

const middleware=thunk;
const store= createStore(reducer,
   composeWithDevTools(applyMiddleWare(...middleware)) )

