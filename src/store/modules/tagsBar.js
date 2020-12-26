const state = () => ({
  visitedRoutes: [],
})

const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
}

const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
 
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },

  delOthersVisitedRoutes(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.meta.affix || item.path === route.path
    )
  },

  delLeftVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页右边全部多标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delRightVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
}

const actions = {
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 添加标签页
   * @param {*} { commit }
   * @param {*} route
   */
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delVisitedRoute({ commit }, route) {
    commit('delVisitedRoute', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页以外其它全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delOthersVisitedRoutes({ commit }, route) {
    commit('delOthersVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页左边全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delLeftVisitedRoutes({ commit }, route) {
    commit('delLeftVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页右边全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delRightVisitedRoutes({ commit }, route) {
    commit('delRightVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除全部多标签页
   * @param {*} { commit }
   */
  delAllVisitedRoutes({ commit }) {
    commit('delAllVisitedRoutes')
  },
}
export default { state, getters, mutations, actions }
