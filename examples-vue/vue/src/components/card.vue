<template>
  <div class="card">
    <slot>
      <span>拖拽字段进入该区域</span>
    </slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.card {
  width: 200px;
  height: 100px;
  background: #eee;
  border: 1px solid #ddd;
  display: flex;
  padding: 10;
  justify-content: center;
  align-items: center;
}
</style>
