<template>
<div id="keyboard">
  <ul>
    <li @click="num(1)">1</li>
    <li @click="num(2)">2</li>
    <li @click="num(3)">3</li>
    <li class="tool" @click="numempty">C</li>
    <li @click="num(4)">4</li>
    <li @click="num(5)">5</li>
    <li @click="num(6)">6</li>
    <li class="tool" @click="numback">←</li>
    <li @click="num(7)">7</li>
    <li @click="num(8)">8</li>
    <li @click="num(9)">9</li>
    <li @click="num(0)">0</li>
    <li class="exit" @click="numexit">退出</li>
    <li class="enter" @click="numsubmit">确认</li>
  </ul>
</div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'AdminAddbox',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    num: function (number) {
      if (this.$store.state.messageShow === false) {
        if (this.$store.state.num.length < 2) {
          this.$store.commit('num', number)
        }
        if (this.$store.state.goodsScreen === true) {

        } else {
          this.$store.commit('numScreenshow')
          this.$store.commit('flowsheethide')
          this.$store.commit('goodsScreenhide')
        }
      }
    },
    numempty: function () {
      if (this.$store.state.messageShow === false) {
        this.$store.commit('numempty')
        this.$store.commit('numScreenshow')
        this.$store.commit('flowsheethide')
        this.$store.commit('goodsScreenhide')
      }
    },
    numback: function () {
      this.$store.commit('numback')
    },
    numexit: function () {
      this.$store.commit('numexit')
    },
    numsubmit: function () {
      // let _this = this
      if (this.$store.state.numScreen === true) {
        this.$store.commit('numsubmit')
      }
    }
  }
}
</script>



<style lang="scss">
#keyboard {
    width: 29%;
    height: auto;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #909090;
    margin-top: 1%;
    ul {
        padding: 0;
        margin: 15px 14px;
        border: #fff 1px solid;
        height: auto;
        overflow: hidden;
        li {
            list-style: none;
            float: left;
            width: 48px;
            height: 48px;
            margin: 7px;
            display: inline;
            line-height: 48px;
            font-size: 32px;
            background-color: #F2F2FD;
            border-radius: 10px;
            box-shadow: 2px 2px 10px #909090;
            &:hover {
                background-color: #f9f9f9;
                cursor: pointer;
            }
            &:active {
                background-color: #d8e8ff;
                cursor: pointer;
            }
        }
        .enter,
        .exit {
            width: 110px;
            font-size: 24px;
        }

    }
}
</style>
