<template>
  <div class="header-container">
    <div class="menu-s">
      <div
        class="menu-item"
        v-for="(item, i) in menuList"
        :key="i"
        @click="selectMenu(item, i)"
      >
        <div :class="item.selected ? 'title title-color' : 'title'">
          {{ item.title }}
        </div>
        <div :class="item.selected ? 'border-b' : 'border-s'"></div>
      </div>
    </div>
    <!-- <div class="center-s">2222</div> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      menuList: [
        {
          title: '首页',
          selected: true,
          path: '/',
        },
        {
          title: '简介',
          selected: false,
          path: '/introduction',
        },
        {
          title: '博客',
          selected: false,
          path: '/blog',
        },
        {
          title: '联系我',
          selected: false,
          path: '/concat',
        },
      ],
    }
  },
  methods: {
    selectMenu(item, i) {
      this.menuList.forEach((list, index) => {
        if (i == index) {
          list.selected = true
        } else {
          list.selected = false
        }
      })
      this.$router.push(item.path)
    },
  },
}
</script>

<style lang = "scss" scoped>
.header-container {
  padding: 0 20px;
  display: flex;
  .menu-s {
    flex: 1;
    display: flex;
    user-select: none;
    .menu-item {
      flex: 1;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 20px;
        color: #333;
        font-weight: 500;
        height: 65px;
        text-align: center;
        width: 200px;
        letter-spacing: 5px;
      }
      .title-color {
        color: blue;
      }
      .border-b {
        height: 2px;
        width: 120px;
        background-color: blue;
        margin-bottom: 5px;
        border-radius: 1px;
      }
      .border-s {
        height: 2px;
        width: 120px;
        background-color: #ffffff;
        margin-bottom: 5px;
        border-radius: 1px;
      }
    }
  }
  .center-s {
    width: 200px;
  }
}
</style>