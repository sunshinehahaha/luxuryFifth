<template>
  <div class="main">
    <div class="head">
      <img src="../../static/images/h.jpg" />
    </div>
    <div class="page-line">
      <div class="w">
        <ul class="l">
          <li class="l">
            <i class="iconfont icon-home"></i>
            <a href="javascript::" class="iFont">第五大道首页</a>
            <span class="line"></span>
          </li>
          <li class="l">
            <i class="iconfont icon-web-icon-"></i>
            <a href="javascript::" class="iFont2">贵宾专线：4008-6767-38</a>
          </li>
        </ul>
        <ul class="r">
          <li class="login">
            <router-link to="/login">登录</router-link>
            <span class="lline"></span>
          </li>
          <li class="regist">
            <img src="../../static/images/youli.gif"/>
            <router-link to="/regist">注册</router-link>
            <span class="rline"></span>
          </li>
          <li class="my">
            我的第五大道
            <i class="iconfont icon-xiajiantou" ref="jiantou"></i>
            <span class="mline"></span>
            <ul class="myDetail">
              <li>我的订单</li>
              <li>我的收藏</li>
              <li>已购商品</li>
              <li>我的礼券</li>
              <li>我的积分</li>
            </ul>
          </li>
          <li class="help">
            帮助中心
            <span class="hline"></span>
          </li>
          <li class="mobile">
            手机版下载
            <i class="iconfont icon-erweima"></i>
            <i class="iconfont icon-xiajiantou" ref="mobileIcon"></i>
            <div class="qr">
              <img src="../../static/images/qr.jpg" />
              <p class="para">扫描下载APP</p>
              <p class="para">立即
                <span class="reward">赠送50元</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="search w">
      <div class="img1 l">
        <img src="../../static/images/logo.jpg">
      </div>
      <div class="img2 l">
        <img src="../../static/images/yijian.jpg">
      </div>
      <div class="searchInput l">
        <input type="text" class="input1" placeholder="唇部彩妆">
        <span class="find">搜索</span>
        <p class="cate">
          <a href="#">太阳镜</a>
          <a href="#">美妆</a>
          <a href="#">户外运动</a>
          <a href="#">箱包</a>
          <a href="#">配饰</a>
          <a href="#">腕表</a>
        </p>
      </div>
      <div class="img3 l">
        <img src="../../static/images/overseadef.jpg">
      </div>
      <div class="cart l">
        <img src="../../static/images/v30cart.png">
        <span class="num">（0）></span>
      </div>
    </div>
    <div class="nav">
      <div class="w">
        <ul class="goods">
          <li class="classify">
            <a href="#">商品分类</a>
            <ul class="recommand">
              <li><a href="#">推荐品牌</a></li>
              <li><a href="#">箱包</a></li>
              <li><a href="#">美妆</a></li>
              <li><a href="#">服装</a></li>
              <li><a href="#">腕表</a></li>
              <li><a href="#">配饰</a></li>
              <li><a href="#">鞋靴</a></li>
              <li><a href="#">母婴</a></li>
              <li><a href="#">美酒</a></li>
              <li><a href="#">美食</a></li>
              <li><a href="#">家居</a></li>
              <li><a href="#">电子</a></li>
              <li><a href="#">办公</a></li>
              <li><a href="#">礼品</a></li>
              <li><a href="#">海外馆</a></li>
            </ul>
          </li>
          <li><a href="#">品牌</a></li>
          <li><a href="#">最新</a></li>
          <li><a href="#">女士</a></li>
          <li><a href="#">男士</a></li>
          <li><a href="#">生活馆</a></li>
          <li><a href="#">海外馆</a></li>
          <li><a href="#">时尚</a></li>
          <li><a href="#">特惠</a></li>
          <li><a href="#">礼品区</a></li>
          <li class="arrive">
            <i class="iconfont icon-weizhi"></i>
            <a href="#">到店</a>
          </li>
          <li class="oversea">
            <img src="../../static/images/overseaslogo.gif">
          </li>
          <li class="zheng"></li>
          <li class="vip"></li>
          <li class="quan"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-comp',
  data () {
    return {}
  },
  mounted () {
    this.changeIcon()
  },
  methods: {
    changeIcon () {
      var that = this
      var my = document.querySelector('.my')
      var mobile = document.querySelector('.mobile')
      my.onmouseover = function () {
        that.$refs.jiantou.className = 'iconfont icon-shangjiantou'
      }
      my.onmouseout = function () {
        that.$refs.jiantou.className = 'iconfont icon-xiajiantou'
      }
      mobile.onmouseover = function () {
        that.$refs.mobileIcon.className = 'iconfont icon-shangjiantou'
      }
      mobile.onmouseout = function () {
        that.$refs.mobileIcon.className = 'iconfont icon-xiajiantou'
      }
    }
  }
}
</script>

<style lang="css">
</style>
