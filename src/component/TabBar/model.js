// 保存表单数据
export const SAVEFORMDATA = 'SAVEFORMDATA';
// 保存图片
export const CHANGESELWCT = 'CHANGESELWCT';
// 清空数据
export const CLEARDATA = 'CLEARDATA';
// 保存表单数据
export const saveFormData = (value, datatype) => {
    return {
        type: SAVEFORMDATA,
        value,
        datatype,
    }
}

// 保存图片地址
export const changeSelect = selectedTab => {
    return {
        type: CHANGESELWCT,
        selectedTab,
    }
}

// 保存图片地址
export const clearData = () => {
    return {
        type: CLEARDATA,
    }
}
let defaultState = {
          selectedTab: 'blueTab',
          hidden: false,
          isPrivilege:true,
          attributeState:4
}
// 首页表单数据
export const data = (state = defaultState , action = {}) => {
    console.log(action)
    switch(action.type){
        case SAVEFORMDATA:
            return {...state, ...{[action.datatype]: action.value}};
        case CHANGESELWCT:
            return {...state, ...{selectedTab: action.selectedTab}};
        case CLEARDATA:
            return {...state, ...defaultState};
        default:
            return state;
    }
}

