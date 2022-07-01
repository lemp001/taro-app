 
 export default {
   namespace: 'index',
   state: {
       keai:'测试数据666'
   },
 
   effects: {
     
   },
 
   reducers: {
     save(state, { payload }) {
       return { ...state, ...payload };
     },
   },
 
 };
 