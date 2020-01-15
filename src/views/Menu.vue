<template>
  <el-col>
    <el-menu
      default-active="1"
      router
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    {{menuList.length}}
      <template v-for="(content,index) in menuList">
        <el-submenu :index="index+''" :key="index" v-if="content.hidden">
          <template slot="title">
            <i :class="content.iconCls"></i>
            <span>{{content.meta.title}}</span>
          </template>
          <el-menu-item v-for="(item,index) in content.children" :key="index" :index="item.path">
            <i class="el-icon-success" />
            {{item.meta.title}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    menuList() {
      // return this.$store.state.menuRoutes;
      // return this.$router.routes;
      return this.$store.getters.menu;
    }
  }
};
</script>

<style>
</style>