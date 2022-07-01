import * as firstApi from './service';
 
 export default {
   namespace: 'first',
   state: {
       name: 'global',
   },
 
   effects: {
     * effectsDemo(_, { call, put }) {
       const { status, data } = yield call(firstApi.demo, {});
       if (status === 'ok') {
         yield put({ type: 'save',
           payload: {
             topData: data,
           } });
       }
     },
   },
 
   reducers: {
     save(state, { payload }) {
       return { ...state, ...payload };
     },
   },
 
 };
 