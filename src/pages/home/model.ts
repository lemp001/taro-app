
export default {
  namespace: 'home',
  state: {
    keai: '测试数据666'
  },

  effects: {
    // * effectsDemo(_, { call, put }) {

    // },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
