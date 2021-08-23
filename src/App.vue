<template lang="pug">
div
  b-navbar.nav(type="info")
    .logo-image
      a(@click='shopClicked2()')
        img(src="../public/6680_this_is_fine.png", height=60)
    b-navbar-brand.styloso( align-content='center' @click='shopClicked()') Full Stack Shop

    b-navbar-nav.ml-auto
      b-nav-item-dropdown(right no-caret)
        template(#button-content)
          b-icon.user-icon(icon='person-circle' variant='primary' font-scale='2')
        b-dropdown-item(href="#") Profile
        b-dropdown-item(href="#") Sign Out
      

  router-view
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    shopClicked() {
      this.$router.push('/')
    },
    shopClicked2() {
      this.$router.push('catalog')
    }
  }
};
</script>

<style>
.styloso {
  cursor: pointer;
}
.router-view {
  align-content: center;
}
.logo-image {  
  padding: 0px 16px;
}
.user-icon {
  width: 28px;
}
.nav {
  background-color: #e1e1e1;
}

</style>
