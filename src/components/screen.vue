<template>
<div id="screen">
  <div class="flowsheet" v-show="flowsheet">
    <h1 :style="screenH1">--------------自助购物流程--------------</h1>
    <ul>
      <li>选择商品</li>
      <li>支付</li>
      <li>取货</li>
    </ul>
  </div>
  <div class="numScreen" v-show="numScreen">
    <div class="">
      <h1>您选择的货号是：</h1>
    </div>
    <input type="text" name="numScreen" class="screen" :value="num" onfocus="this.blur();" />
  </div>
  <div class="goodsScreen" v-show="goodsScreen">
    <div class="goods">
      <img :src="goodsInfo.skuPicUrl" :alt="goodsInfo.skuPackageType">
      <p>价格:<strong>￥<span>{{goods.aisleGoodsPrice}}</span></strong></p>
      <p>货道:{{goods.aisleName}}</p>
      <p class="name">{{goodsInfo.skuPackageType + goodsInfo.skuSize}}</p>
    </div>
    <div class="cover">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <p>
        请您尽快付款...
      </p>
    </div>
    <div class="qrcode">
      <p>
        <h4>-------请选择以下方式支付-------</h4>
      </p>
      <ul>
        <li><span>支付宝付款</span>
          <canvas id="aliqrcode" :height="size + 'px'" :width="size + 'px'" ref="aliqr" :val="alival"></canvas>
        </li>
        <li><span>微信付款</span>
          <canvas id="wxqrcode" :height="size + 'px'" :width="size + 'px'" ref="wxqr" :val="wxval"></canvas>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'screen',
  data () {
    return {
      numScreen: this.$store.state.numScreen,
      num: this.$store.state.num,
      flowsheet: this.$store.state.flowsheet,
      goodsScreen: this.$store.state.goodsScreen,
      screenH1: {
        paddingTop: '10px'
      },
      goods: this.$store.state.goods,
      goodsInfo: this.$store.state.goodsInfo,
      wxval: this.$store.state.wxval,
      alival: this.$store.state.alival,
      size: this.$store.state.size,
      bgColor: this.$store.state.bgColor,
      fgColor: this.$store.state.fgColor,
      aliqr: this.$store.state.aliqr,
      wxqr: this.$store.state.wxqr
    }
  },
  computed: {
    flowsheet: function () {
      return this.$store.state.flowsheet
    },
    numScreen: function () {
      return this.$store.state.numScreen
    },
    num: function () {
      return this.$store.state.num
    },
    goodsScreen: function () {
      return this.$store.state.goodsScreen
    },
    goods: function () {
      return this.$store.state.goods
    },
    goodsInfo: function () {
      return this.$store.state.goodsInfo
    },
    alival: function () {
      return this.$store.state.alival
    },
    wxval: function () {
      return this.$store.state.wxval
    },
    size: function () {
      return this.$store.state.size
    },
    bgColor: function () {
      return this.$store.state.bgColor
    },
    fgColor: function () {
      return this.$store.state.fgColor
    }
  },
  mounted: function () {
    this.$store.commit('aliqr', this.$refs.aliqr)
    this.$store.commit('wxqr', this.$refs.wxqr)
  },
  methods: {
  }
}
</script>

<style lang="scss">
#screen {
    width: 29%;
    height: 50%;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #909090;
    z-index: 9999;
    .flowsheet {
        ul {
            li {
                background-color: #edcc67;
                width: 150px;
                height: 60px;
                font-size: 20px;
                line-height: 60px;
                border-radius: 50%;
                margin: 20px;
                box-shadow: 2px 2px 10px #909090;
                z-index: 9999;
            }
        }
    }
    .numScreen {
        position: relative;
        width: 90%;
        height: 30%;
        margin: 0 auto;
        top: 30%;
        .screen {
            width: 100%;
            height: 100%;
            line-height: 70px;
            padding: 4px;
            border: #e6e6e6 1px solid;
            border-bottom: #f2f2f2 1px solid;
            border-right: #f2f2f2 1px solid;
            margin: 10px auto;
            direction: ltr;
            text-align: right;
            font-size: 47px;
            color: #000;

        }
    }
    .goodsScreen {
        position: relative;
        padding: 2%;
        width: 100%;
        height: 100%;
        .cover {
            width: 100%;
            height: 10%;
            p {
                display: inline-block;
            }
        }
        .goods {
            margin: 3% 3% 0;
            padding: 2% 2% 0;
            img {
                float: left;
                width: 39%;
                height: auto;
            }
            p {
                font-size: 16px;
                display: inline-block;
                span {
                    color: #dd0800;
                    font-size: 26px;
                }
            }
            .name {
                display: block;
            }
        }
        .qrcode {
            bottom: 5%;
            padding: 0 3%;
            p: {
                display: block;
                width: 100%;
                height: 10%;
                margin: 0 auto;
            }
            ul {
              position: absolute;
              left: -10px;
                li {
                    float: left;
                    width: 30%;
                    height: 39%;
                    display: inline-block;
                    margin-left: 29%;
                    canvas {
                        width: 100%;
                        height: 100%;
                        border: 4px solid #fff;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                }

            }
        }
    }

}
</style>
