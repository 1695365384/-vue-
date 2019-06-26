<template>
  <div id="wy-navbar" class="clearfix">
    <div class="nav w">
      <div class="logo clearfix">
        <h1>
          <a href="/index">网易云音乐</a>
        </h1>
      </div>
      <div class="wy-nav"></div>
      <div class="wy-search"></div>
      <div class="my-create"></div>
      <div class="login"></div>
    </div>
  </div>
</template>
<style lang="less">
#wy-navbar {
  background-color: #000;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
}
.logo h1 {
  background: url(../../public/img/topbar.png) no-repeat;
  background-position: 0 0;
  width: 157px;
  float: left;

  padding-right: 20px;
  a {
    text-indent: -99999px;
    float: left;
    width: 176px;
    height: 69px;
  }
}
</style>

<script>
export default {
  name: 'navbar',
  data() {
    return {}
  }
}
</script>