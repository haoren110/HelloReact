//name:"未知",head:"",openid:null,wxname:"未知"
import axios from "../../utils/axios";


export default {
    namespace: 'tabbar',
    state: {
        selectedTab: 'blueTab',
        hidden: false,
        isPrivilege:true,
        attributeState:4,
         obj:{}
    },
    reducers: {
        initList(state, {payload: data}) {
           //不可变还是不可变，必须用新的state整个替换
            return {...state,selectedTab:data};
        },
        loadList(state,{payload: data}) {
            return {...state,obj:data};
        }
    },
    effects: {
        *loadData(action, {put, call}) {
            const data = yield call(()=>{
                return axios.post('customerInfoController/getCustomerInfoById.do',{id: "AC63A0DD00B54A12AD1FF9527CFFB98D"})
                });
            yield put({type: 'loadList', payload: data.obj});
        }
    },
};

