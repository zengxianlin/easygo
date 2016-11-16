<template>
<div id="goods" class="fl">
  <div class="message-input" v-if="messageShow">
    <div class="android-id">
      <h4>安卓id</h4>
      <input type="text" class="input" :value="androidId" placeholder="输入或点击生成id">
      <input type="button" class="btn" @click="androidIdRandom" value="生成id">
    </div>
    <div class="machine-code">
      <h4>机器编码</h4>
      <input type="text" class="input" v-model="machineCode" placeholder="输入机器编码">
    </div>
    <div class="submit">
      <input type="submit" class="btn" @click="submit" value="提交">
    </div>
  </div>
  <div class="goods-wrap" v-if="goodsShow">
    <ul class="a">
      <li v-for="init in inits">
        <img :src="init.goodsInfo.skuPicUrl" :alt="init.goodsInfo.skuPackageType" />
        <p><strong>￥<span>{{init.aisleGoodsPrice}}</span></strong></p>
        <p>{{init.aisleName}}</p>
        <p>{{init.goodsInfo.skuPackageType + init.goodsInfo.skuSize}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'AdminAddbox',
  data () {
    return {
      inits: this.$store.state.inits,
      messageShow: this.$store.state.messageShow,
      goodsShow: this.$store.state.goodsShow,
      androidIdArr: ['21cac586f3bb3f0b', '21cac586f3bb3f0b', '21cac586f3bb3f0b', '21cac586f3bb3f0b'],
      androidId: '',
      machineCode: ''
    }
  },
  computed: {
    initmessage: function () {
      return this.$store.state.initmessage
    },
    inits: function () {
      return this.$store.state.inits
    },
    messageShow: function () {
      return this.$store.state.messageShow
    },
    goodsShow: function () {
      return this.$store.state.goodsShow
    }
  },
  methods: {
    androidIdRandom: function () {
      var n = Math.floor(Math.random() * this.androidIdArr.length + 1) - 1
      this.androidId = this.androidIdArr[n]
    },
    submit: function () {
      let _this = this
      $.ajax({
        type: 'post',
        url: 'http://localhost:3333/api/machine/init',
        data: {
          'androidId': this.androidId,
          'machineCode': this.machineCode
        },
        success: function (res) {
          if (res) {
            _this.$store.commit('inits', res.machineInfo.machineAisles)
            _this.$store.commit('messageShow')
            _this.$store.commit('goodsShow')
            _this.$store.commit('initmessage', 'ok')
          } else {
            window.alert('初始化机器失败，请重试')
          }
        }
      })
    }
  }
}
</script>



<style lang="scss">
#goods {
    position: relative;
    width: 67%;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #909090;
    margin-right: 1%;
    .btn {
        margin-top: -3px;
        margin-left: -3px;
        outline: none;
    }
    .message-input {
        width: 300px;
        height: 200px;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        .android-id,
        .machine-code {
            width: 100%;
            height: 50%;
            .input {
                width: 200px;
                height: 35px;
                margin-bottom: 30px;
                border: 1px solid #000;
                border-radius: 5px;
                padding: 3px;
            }
        }
        .machine-code {
            .input {
                width: 270px;
            }
        }
    }
    .goods-wrap {
        width: 100%;
        height: 100%;
        padding: 1%;
        ul {
            float: left;
            padding: 1%;
            margin: 1%;
            height: auto;
            li {
              display: block;
                float: left;
                width: 100px;
                height: 90px;
                img{
                  height:50%;
                  display: inline-block;
                }
                p{
                  font-size: 12px;
                  display: inline-block;
                  span{
                    color: #dd0800;
                    font-size: 16px;
                  }
                }
            }
        }
    }
}
</style>
