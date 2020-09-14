import axios from 'axios'

export default {
  state: {
    objects: []

  },
  mutations: {
    SET_OBJECTS (state, data) {
      const objects = localStorage.getItem('objects')
      if (objects) {
        state.objects = JSON.parse(objects)
      } else {
        state.objects = data
      }
    },
    SET_OBJECTS_STATE (state, id) {
      state.objects[id].like = !state.objects[id].like
      localStorage.setItem('objects', JSON.stringify(state.objects))
    }
  },
  actions: {
    GET_OBJECTS ({ commit }) {
      return axios('http://localhost:3000/data', {
        method: 'GET'
      })
        .then(res => {
          commit('SET_OBJECTS', res.data)
          return res.data
        })
        .catch(e => {
          console.log(e, 'error get object list')
          return e
        })
    },
    GET_OBJECTS_STATE ({ commit }, id) {
      commit('SET_OBJECTS_STATE', id)
    }

  },
  getters: {
    OBJECTS (state) {
      return state.objects
    }
  }
}
