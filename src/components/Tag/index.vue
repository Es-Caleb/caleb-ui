<template>
  <div>
    <ca-tag>tag</ca-tag>
    <ca-tag closable @close="handleClose()">Prevent Default</ca-tag>
    <ca-tag>
      <a href="#">Link</a>
    </ca-tag>
  </div>

  <h3 style="padding: 10px 0">type</h3>
  <div>
    <ca-tag type="default">default</ca-tag>
    <ca-tag type="success">success</ca-tag>
    <ca-tag type="processing">processing</ca-tag>
    <ca-tag type="error">error</ca-tag>
    <ca-tag type="warning">warning</ca-tag>
  </div>

  <h3 style="padding: 10px 0">color</h3>
  <h4 style="padding: 10px 0">Presets</h4>
  <div>
    <ca-tag color="magenta">magenta</ca-tag>
    <ca-tag color="red">red</ca-tag>
    <ca-tag color="volcano">volcano</ca-tag>
    <ca-tag color="orange">orange</ca-tag>
    <ca-tag color="gold">gold</ca-tag>
    <ca-tag color="lime">lime</ca-tag>
    <ca-tag color="green">green</ca-tag>
    <ca-tag color="cyan">cyan</ca-tag>
    <ca-tag color="blue">blue</ca-tag>
    <ca-tag color="geekblue">geekblue</ca-tag>
    <ca-tag color="purple">purple</ca-tag>
  </div>
  <h4 style="padding: 10px 0">Custom</h4>
  <div>
    <ca-tag color="#f50">#f50</ca-tag>
    <ca-tag color="#2db7f5">#2db7f5</ca-tag>
    <ca-tag color="#87d068">#87d068</ca-tag>
    <ca-tag color="#108ee9">#108ee9</ca-tag>
  </div>

  <h3 style="padding: 10px 0">icon</h3>
  <div>
    <ca-tag closable>如果我是说如果如果感到幸福你就拍拍手</ca-tag>
    <ca-tag type="success">success</ca-tag>
    <ca-tag type="processing">processing</ca-tag>
    <ca-tag type="error">error</ca-tag>
    <ca-tag type="warning">warning</ca-tag>
  </div>

</template>

<script lang="ts">
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const handleClose = () => {
      console.log('关闭tag')
    }
    return {
      handleClose
    }
  }
}
</script>
