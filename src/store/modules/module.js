export default {
    namespaced: true,
    state: {
        model: {},
        title:"",
    },
    mutations: {
        setModel(state, newValue) {
            state.model = newValue;
        },
        setTitle(state, newValue) {
            state.title = newValue;
        },
    },
}