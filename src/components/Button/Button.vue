<template>
  <h4>基础</h4>
  <ca-button @click="goAbout">默认按钮(点击跳转about页面)</ca-button>
  <ca-button theme="primary">主要按钮</ca-button>
  <ca-button theme="success">成功按钮</ca-button>
  <ca-button theme="warning">警告按钮</ca-button>
  <ca-button theme="info">信息按钮</ca-button>
  <ca-button theme="danger">危险按钮</ca-button>
  <ca-button theme="text">文字按钮</ca-button>
  <h4>大小</h4>
  <ca-button>默认按钮</ca-button>
  <ca-button size="medium">中等按钮</ca-button>
  <ca-button size="small">小型按钮</ca-button>
  <ca-button size="mini">超小按钮</ca-button>
  <h4>圆角</h4>
  <ca-button theme="primary" round>主要按钮</ca-button>
  <ca-button size="mini" round>超小按钮</ca-button>
  <h4>加载中</h4>
  <ca-button loading>默认按钮</ca-button>
  <ca-button theme="primary" loading>主要按钮</ca-button>

  <h4>禁用</h4>
  <ca-button disabled>默认按钮</ca-button>
  <ca-button theme="success" @click="goAbout" round disabled>成功按钮</ca-button>
  <ca-button theme="warning" disabled>警告按钮</ca-button>
  <ca-button theme="info" disabled>信息按钮</ca-button>
  <ca-button theme="danger" disabled>危险按钮</ca-button>
  <ca-button theme="text" disabled>文字按钮</ca-button>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default ({
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup () {
    const router = useRouter()
    // eslint-disable-next-line
    function goAbout () {
      router.push('/about')
    }
    return {
      goAbout
    }
  }
})
</script>
