<template>
  <div>
    <ul>
      <li class="font_white" v-for="item in userlist" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import userList from '@/assets/mocks/userlist.json'
export default {
  name: 'UsersListComp',

  data() {
    return {
      userlist: []
    };
  },

  mounted() {
    this.userlist = userList.list
  },

  methods: {

  },
};
</script>
<style scoped></style>
