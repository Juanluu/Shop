<template lang='pug'>
div
  b-navbar.nav(toggleable="lg", type="info", variant="light")
    .logo-image
      a(href="/home")
        img(src="./assets/logo.png", height=60)
    b-navbar-brand(href="#") NavBar

    b-navbar-toggle(target="nav-collapse")

      b-navbar-nav.ml-auto
        b-nav-item-dropdown(right no-caret)
          template(#button-content)
            b-icon(icon='person-circle')
                     
          b-dropdown-item(href="#") Profile
          b-dropdown-item(href="#") Sign Out
  .grid-container
    b-nav.toolbar.w-36(vertical)
      li.nav-item
        a.nav-link.active(href="") Active

      li.nav-item
        a.nav-link(href="") Link

      li.nav-item
        a.nav-link(href="") Link

      li.nav-item
        a.nav-link.disabled(href="") Disabled

      li.nav-item
        b-button.navbar-toggler.collapseButton(
          data-target=(variant = 'light'),
          @click="collapseToolbar"
        ) '>>'
    | {{ hola }}

    router-view
</template>

<script>
export default {
  data() {
    return {
      hola: "",
      number: 0,
    };
  },
  methods: {
    collapseToolbar() {
      this.hola = "hola" + ++this.number;
    },
  },
};
</script>

<style>
.nav {
  background-color: #e1e1e1;
}
.grid-container {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
}
.toolbar {
  background-color: #f8f9fa;
  width: 96px;
  height: 850px;
}
.collapseButton {
  position: fixed;
  left: 18px;
  bottom: 25px;
  background: transparent;
  color: transparent;
}
</style>
