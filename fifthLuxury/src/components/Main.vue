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
              <li><a href="#">推荐品牌</a><span></span></li>
              <li><a href="#">箱包</a><span></span></li>
              <li><a href="#">美妆</a><span></span></li>
              <li><a href="#">服装</a><span></span></li>
              <li><a href="#">腕表</a><span></span></li>
              <li><a href="#">配饰</a><span></span></li>
              <li><a href="#">鞋靴</a><span></span></li>
              <li><a href="#">母婴</a><span></span></li>
              <li><a href="#">美酒</a><span></span></li>
              <li><a href="#">美食</a><span></span></li>
              <li><a href="#">家居</a><span></span></li>
              <li><a href="#">电子</a><span></span></li>
              <li><a href="#">办公</a><span></span></li>
              <li><a href="#">礼品</a><span></span></li>
              <li><a href="#">海外馆</a><span></span></li>
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
    <div class="slide">
      <el-carousel :interval="5000" arrow="always" height="520px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flagship w">
      <img src="../../static/images/mainx_brandship.png">
      <ul class="brand1">
        <li v-for="value in details" v-bind:key="value" class="liItem">
          <img :src="value.img"/>
          <div class="stretch">
            <div class="imgSize">
              <img :src="value.imgSmall"/>
            </div>
            <div class="line">
            </div>
            <div class="goodsStyle">
              <p>{{value.goodsName}}</p>
              <p>{{value.cName}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="hotStore w">
      <div class="hotStoreHead">
        <div class="hotStoreImg l">
          <img src="../../static/images/hotstore_t.jpg">
        </div>
        <div class="hotarrowbtn r">
          <a @click="slidePrev()">
            <span class="hot_pre"></span>
          </a>
          <a @click="slideNext()">
            <span class="hot_next"  ></span>
          </a>
        </div>
      </div>
      <div class="hotflag">
        <ul class="hotflagbox">
          <li class="hotli">
            <div class="hotflagson" v-for="item in hotStore" @click="lineAnimate()">
                <img :src="item.brandImg">
                <div class="hotmiddle">
                    <a>
                        <p class="brandchnname">{{item.brandName}}</p>
                        <div class="blacksline">
                            <span></span>
                        </div>
                    </a>
                </div>
                <div class="topline lineBorder"></div>
                <div class="rightline lineBorder"></div>
                <div class="bottomline lineBorder"></div>
                <div class="leftline lineBorder"></div>
            </div>
          </li>
          <li class="hotli">
            <div class="hotflagson" v-for="item in hotStore1" @click="lineAnimate()">
                <img :src="item.brandImg">
                <div class="hotmiddle">
                    <a>
                        <p class="brandchnname">{{item.brandName}}</p>
                        <div class="blacksline">
                            <span></span>
                        </div>
                    </a>
                </div>
                <div class="topline lineBorder"></div>
                <div class="rightline lineBorder"></div>
                <div class="bottomline lineBorder"></div>
                <div class="leftline lineBorder"></div>
            </div>
          </li>
          <li class="hotli">
            <div class="hotflagson" v-for="item in hotStore2" @click="lineAnimate()">
                <img :src="item.brandImg">
                <div class="hotmiddle">
                    <a>
                        <p class="brandchnname">{{item.brandName}}</p>
                        <div class="blacksline">
                            <span></span>
                        </div>
                    </a>
                </div>
                <div class="topline lineBorder"></div>
                <div class="rightline lineBorder"></div>
                <div class="bottomline lineBorder"></div>
                <div class="leftline lineBorder"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from './Footer.vue'
// import $ from '../assets/jquery-3.2.1.min.js'
export default {
  name: 'main-comp',
  data () {
    return {
      imgs: ['../../static/images/swip1.jpg', '../../static/images/swip2.jpg', '../../static/images/swip3.jpg', '../../static/images/swip4.jpg', '../../static/images/swip5.jpg', '../../static/images/swip6.jpg'],
      details:[{'goodsName':'Louis Vuitton/LV','cName':'路易.威登','img':'../../static/images/g1.png','imgSmall': '../../static/images/img1.png'},
               {'goodsName':'SK-II','cName':'SK-II','img':'../../static/images/g2.jpg','imgSmall': '../../static/images/img2.png'},
               {'goodsName':'Coach','cName':'蔻驰','img':'../../static/images/g3.png','imgSmall': '../../static/images/img3.png'},
               {'goodsName':'Omega','cName':'欧米茄','img':'../../static/images/g4.jpg','imgSmall': '../../static/images/img4.png'},
               {'goodsName':'Valentino','cName':'瓦伦蒂诺','img':'../../static/images/g5.jpg','imgSmall': '../../static/images/img5.jpg'}
             ],
      hotStore:[{'brandImg':'../../static/images/pic1.jpg','brandName':'柏品'},
                {'brandImg':'../../static/images/pic2.png','brandName':'波比布朗'},
                {'brandImg':'../../static/images/pic3.png','brandName':'巴利'},
                {'brandImg':'../../static/images/pic4.png','brandName':'宝玑'},
                {'brandImg':'../../static/images/pic5.png','brandName':'雷朋'},
                {'brandImg':'../../static/images/pic6.png','brandName':'雨果.波士'},
                {'brandImg':'../../static/images/pic7.png','brandName':'卡尔文.克莱恩'},
                {'brandImg':'../../static/images/pic8.png','brandName':'迪奥'},
                {'brandImg':'../../static/images/pic9.png','brandName':'齐穆里'},
                {'brandImg':'../../static/images/pic10.png','brandName':'歌蕾'},
                {'brandImg':'../../static/images/pic11.jpg','brandName':'LuckyOzasec'},
                {'brandImg':'../../static/images/pic12.png','brandName':'Refa'},
                {'brandImg':'../../static/images/pic13.png','brandName':'POLICE'},
                {'brandImg':'../../static/images/pic14.png','brandName':'瑞贝卡·明可弗'}
              ],
      hotStore1:[{'brandImg':'../../static/images/pic15.png','brandName':'施华洛世奇'},
                  {'brandImg':'../../static/images/pic16.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic17.png','brandName':'兰蔻'},
                  {'brandImg':'../../static/images/pic18.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic5.png','brandName':'雷朋'},
                  {'brandImg':'../../static/images/pic6.png','brandName':'雨果.波士'},
                  {'brandImg':'../../static/images/pic7.png','brandName':'卡尔文.克莱恩'},
                  {'brandImg':'../../static/images/pic8.png','brandName':'迪奥'},
                  {'brandImg':'../../static/images/pic9.png','brandName':'齐穆里'},
                  {'brandImg':'../../static/images/pic10.png','brandName':'歌蕾'},
                  {'brandImg':'../../static/images/pic11.jpg','brandName':'LuckyOzasec'},
                  {'brandImg':'../../static/images/pic12.png','brandName':'Refa'},
                  {'brandImg':'../../static/images/pic13.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic14.png','brandName':'瑞贝卡·明可弗'}
                ],
      hotStore2:[{'brandImg':'../../static/images/pic15.png','brandName':'施华洛世奇'},
                  {'brandImg':'../../static/images/pic16.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic17.png','brandName':'兰蔻'},
                  {'brandImg':'../../static/images/pic18.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic5.png','brandName':'雷朋'},
                  {'brandImg':'../../static/images/pic6.png','brandName':'雨果.波士'},
                  {'brandImg':'../../static/images/pic7.png','brandName':'卡尔文.克莱恩'},
                  {'brandImg':'../../static/images/pic8.png','brandName':'迪奥'},
                  {'brandImg':'../../static/images/pic9.png','brandName':'齐穆里'},
                  {'brandImg':'../../static/images/pic10.png','brandName':'歌蕾'},
                  {'brandImg':'../../static/images/pic11.jpg','brandName':'LuckyOzasec'},
                  {'brandImg':'../../static/images/pic12.png','brandName':'Refa'},
                  {'brandImg':'../../static/images/pic13.png','brandName':'POLICE'},
                  {'brandImg':'../../static/images/pic14.png','brandName':'瑞贝卡·明可弗'}
                ],
        currenIndex: 0,
      }
  },
  components: {
    Footer
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
    },
    slideTo (index) {
      let left;
      if (index >= 3) {
          this.currenIndex = 2;
      }

      if (index <= -1) {
          this.currenIndex = 0;
      }
      left = -1200 * this.currenIndex + 'px';
      $('.hotflagbox').animate({
          left: left
      }, 180, 'linear')
    },
    slidePrev () {
      this.currenIndex--;
      this.slideTo(this.currenIndex);
    },
    slideNext () {
      this.currenIndex++;
      this.slideTo(this.currenIndex);
    },
    lineAnimate () {
      console.log('hhhh')
      console.log($(this).find('.topline'))
        // $(this).find('.topline').animate({
        //   left:0,
        //   top:0
        // },300,'linear')
        // $(this).find('.topline').css({
        //     width:'166px',
        //     height:'1px'
        // },300,'linear')
        // $(this).find('.bottomline').animate({
        //     width:'192px',
        //     height:'1px'
        // },300,'linear')
        // $(this).find('.leftline').animate({
        //     width:'1px',
        //     height:'63px'
        // },300,'linear')
        // $(this).find('.rightline').animate({
        //     width:'1px',
        //     height:'63px'
        // },300,'linear')
    }
  }
}
</script>

<style lang="css">
.stretch{

}
</style>
