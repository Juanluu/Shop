<template lang='pug'>
div
  b-navbar(toggleable="lg", type="info", variant="light")
    logo-image
        a(href='/home')
          img(src='./assets/logo.png' height=60 )
    b-navbar-brand(href="#") NavBar
      

    b-navbar-toggle(target="nav-collapse")

    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item(href="#") Link
        b-nav-item(href="#", disabled) Disabled

      b-navbar-nav.ml-auto
        b-nav-form
          b-form-input.mr-sm-2(size="sm", placeholder="Search")
          b-button.my-2.my-sm-0(size="sm", type="submit") Search

        b-nav-item-dropdown(text="Lang", right)
          b-dropdown-item(href="#") EN
          b-dropdown-item(href="#") ES
          b-dropdown-item(href="#") RU
          b-dropdown-item(href="#") FA

        b-nav-item-dropdown(right)
          template(#button-content)
            em User
          b-dropdown-item(href="#") Profile
          b-dropdown-item(href="#") Sign Out
  router-view
</template>

<style>
</style>
