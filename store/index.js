export const state = () => ({
  drawerMobile: false,
})

export const getters = {
  getDrawerMobile: (state) => {
    return state.drawerMobile
  },
}

export const mutations = {
  setDrawerMobile(state, bool) {
    state.drawerMobile = bool
  },
}