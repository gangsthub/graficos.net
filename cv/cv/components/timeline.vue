<template>
    <div class="timeline">
        <span class="list-title">
          <i :class="{ icon }"></i>
          <h2>{{ title }}</h2>
      </span>
      <span class="content">
        <div v-for="item in list">
          <div class="year"> {{ item.year }} </div>
          <div>
            <h3>{{ item.title }}</h3>
            <p class="detail">
              {{ item.detail }}
            </p>
          </div>
        </div>
      </span>
    </div>
</template>

<style scoped>
  .timeline {

    margin: 1em 0;
  }
  .list-title {
    text-transform: uppercase;
    float: left;
    width: 300px;
  }
  .content {
    border-left: 1px solid currentColor;
    float: left;
  }
</style>

<script>
  export default {
    name: 'timeline',
    props: {
      icon: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: true,
        locale: 'en'
      },
      list: {
        type: Array,
        required: true,
        locale: 'en'
      }
    }
  }
</script>
