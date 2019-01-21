export default {
    namespace: 'TabBar',
    state: {
        title: 'Home',
        formData: {}
    },
    reducers: {
        getFormData(state, {payload: formData}) {
            state.formData = formData;
            console.log(state);
            return {...state};
        }
    },
    effects: {

    }
};