
export default {
    namespace: 'tabbar',
    state: {
        selectedTab: 'blueTab',
        hidden: false,
        isPrivilege:true,
        attributeState:4
    },
    reducers: {
        initList(state, {payload: data}) {
           //不可变还是不可变，必须用新的state整个替换
            return {...state,selectedTab:data};
        },
        loadData(state, {payload: data}) {
            return {...state};
        }
    }
};

