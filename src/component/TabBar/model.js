export default {
    namespace: 'TabBar',
    state: {
        selectedTab: 'blueTab',
        hidden: false,
        isPrivilege:true,
        attributeState:4,
        title:'title'
    },
    reducers: {
        changeHidden(state) {
            state.hidden = !state.hidden;
            console.log(state);
            return {...state};
        }
    },
    effects: {
        *postFormData({payload}, {select, put}) {
            yield put({type: 'getFormData', payload});
            yield select(({indexPage}) => {
                console.log(indexPage);
            });
        }
    }
};