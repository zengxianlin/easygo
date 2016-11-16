import Vue from 'vue'
import Vuex from 'vuex'
// import $ from 'jquery'
Vue.use(Vuex)

// store中的全局变量，只在store中使用
const arr = []
// vuex实例  store
const store = new Vuex.Store({
  state: {
    inits: [],
    initmessage: '',
    messageShow: true,
    goodsShow: true,
    flowsheet: true,
    numScreen: false,
    goodsScreen: false,
    num: [],
    arrid: '',
    goods: {},
    goodsInfo: {}
  },
  mutations: {
    inits (state, inits) {
      state.inits = inits
    },
    messageShow (state) {
      state.messageShow = false
    },
    goodsShow (state) {
      state.goodsShow = true
    },
    initmessage (state, message) {
      state.initmessage = message
    },
    flowsheethide (state) {
      state.flowsheet = false
    },
    numScreenshow (state) {
      state.numScreen = true
    },
    numScreenhide (state) {
      state.numScreen = false
    },
    num (state, number) {
      if (state.messageShow === true) {

      }
      if (arr.length < 2) {
        arr.push(number)
        state.num = arr.toString().replace(/,/, '')
      }
    },
    numback (state) {
      arr.pop()
      state.num = arr
    },
    numempty (state) {
      arr.splice(0, arr.length)
      state.num = arr
    },
    numexit (state) {
      arr.splice(0, arr.length)
      state.num = arr
      state.flowsheet = true
      state.numScreen = false
      state.goodsScreen = false
    },
    goodsScreenhide (state) {
      state.goodsScreen = false
    },
    numsubmit (state) {
      let n = parseInt(state.num)
      switch (n) {
        case 11:
          state.arrid = 0
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 12:
          state.arrid = 1
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 13:
          state.arrid = 2
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 14:
          state.arrid = 3
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 15:
          state.arrid = 4
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 16:
          state.arrid = 5
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 21:
          state.arrid = 6
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 22:
          state.arrid = 7
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 23:
          state.arrid = 8
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 24:
          state.arrid = 9
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 25:
          state.arrid = 10
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 26:
          state.arrid = 11
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 31:
          state.arrid = 12
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 32:
          state.arrid = 13
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 33:
          state.arrid = 14
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 34:
          state.arrid = 15
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 35:
          state.arrid = 16
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 36:
          state.arrid = 17
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 41:
          state.arrid = 18
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 42:
          state.arrid = 19
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 43:
          state.arrid = 20
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 44:
          state.arrid = 21
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 45:
          state.arrid = 22
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 46:
          state.arrid = 23
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 51:
          state.arrid = 24
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 52:
          state.arrid = 25
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 53:
          state.arrid = 26
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 54:
          state.arrid = 27
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 55:
          state.arrid = 28
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 56:
          state.arrid = 29
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 61:
          state.arrid = 30
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 62:
          state.arrid = 31
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 63:
          state.arrid = 32
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 64:
          state.arrid = 33
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 65:
          state.arrid = 34
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        case 66:
          state.arrid = 35
          if (state.numScreen === true) {
            state.goodsScreen = true
          }
          state.numScreen = false
          break
        default:
          window.alert('您输入的数字不是货道号，请重新输入')
          arr.splice(0, arr.length)
          state.num = arr
          state.numScreen = true
          state.goodsScreen = false
      }
      let i = state.arrid
      state.goods = state.inits[i]
      state.goodsInfo = state.inits[i].goodsInfo
    }
  }
})

export default store
