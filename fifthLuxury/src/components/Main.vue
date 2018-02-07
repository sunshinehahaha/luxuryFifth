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
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li class="regist">
            <img src="../../static/images/youli.gif"/>
            <router-link to="/regist">注册</router-link>
          </li>
          <li class="my">
            我的第五大道
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
          </li>
          <li class="mobile">
            手机版下载
            <i class="iconfont icon-erweima"></i>
            <i class="iconfont icon-xiajiantou"></i>
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
  </div>
</template>
<script>
export default {
  name: 'main-comp',
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
