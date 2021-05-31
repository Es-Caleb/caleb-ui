<template>
  <h3 class="title-box">基础</h3>
  <ca-button @click="goAbout">默认按钮(点击跳转about页面)</ca-button>
  <ca-button type="primary">主要按钮</ca-button>
  <ca-button type="dashed">虚线按钮</ca-button>
  <ca-button type="text">文字按钮</ca-button>
  <ca-button type="link">链接按钮</ca-button>

  <h3 class="title-box">大小</h3>
  <ca-button type="primary" size="large">主要按钮</ca-button>
  <ca-button>默认按钮</ca-button>
  <ca-button type="dashed" size="small">虚线按钮</ca-button>

  <h3 class="title-box">圆角</h3>
  <ca-button type="primary" size="large" round>主要按钮</ca-button>
  <ca-button round>默认按钮</ca-button>
  <ca-button type="dashed" size="small" round>虚线按钮</ca-button>

  <h3 class="title-box">幽灵按钮（背景透明）</h3>
  <div class="button-back">
    <ca-button type="primary" ghost>主要按钮</ca-button>
    <ca-button ghost>默认按钮</ca-button>
    <ca-button type="dashed" ghost>虚线按钮</ca-button>
  </div>

  <h3 class="title-box">block按钮(适合其父宽度)</h3>
  <ca-button block>默认按钮</ca-button>
  <ca-button type="primary" block>主要按钮</ca-button>
  <ca-button type="dashed" block>虚线按钮</ca-button>
  <ca-button type="text" block>文字按钮</ca-button>
  <ca-button type="link" block>链接按钮</ca-button>

  <h3 class="title-box">危险按钮</h3>
  <ca-button type="primary" danger>主要按钮</ca-button>
  <ca-button danger>默认按钮</ca-button>
  <ca-button type="dashed" danger>虚线按钮</ca-button>
  <ca-button type="text" danger>文字按钮</ca-button>
  <ca-button type="link" danger>链接按钮</ca-button>

  <h3 class="title-box">禁用</h3>
  <ca-button type="primary" disabled>主要按钮</ca-button>
  <ca-button disabled>默认按钮</ca-button>
  <ca-button type="dashed" disabled>虚线按钮</ca-button>
  <ca-button type="text" disabled>文字按钮</ca-button>
  <ca-button type="link" disabled>链接按钮</ca-button>
  <div class="button-back">
    <ca-button disabled ghost>默认按钮</ca-button>
  </div>

  <h3 class="title-box">加载中</h3>
  <ca-button type="primary" @click="runLoading">主要按钮</ca-button>
  <ca-button :loading="loaded">默认按钮</ca-button>
  <ca-button type="dashed" loading>虚线按钮</ca-button>

  <h3 class="title-box">icon</h3>
  <ca-button icon="ca-icon-add">默认按钮</ca-button>
  <ca-button type="primary" icon="ca-icon-add"></ca-button>
  <ca-button type="primary" icon="ca-icon-add" size="large"></ca-button>
  <ca-button type="primary" icon="ca-icon-add" size="small"></ca-button>
  <ca-button type="primary" icon="ca-icon-add" round></ca-button>
  <ca-button type="primary" icon="ca-icon-add" size="large" round></ca-button>
  <ca-button type="primary" icon="ca-icon-add" size="small" round></ca-button>
  <ca-button type="primary">司法发生<i class="ca-icon-add ca-button-iconRight"></i></ca-button>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue {
  loaded = false
  public runLoading(): void {
    this.loaded = true
    setTimeout(() => {
      this.loaded = false
    }, 1000)
  }

  public goAbout() {
    this.$router.push('/about')
  }
}
</script>

<style lang="scss" scoped>
.title-box {
  padding: 20px 0 10px;
}
.button-back {
  padding: 8px 8px 0;
  background: rgb(190, 200, 200);
}
</style>
