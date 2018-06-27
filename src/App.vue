Lorem<template>
  <div id="app">
    <header>
      <nav>
        <ul class="nav__menu">
          <li class="text--bold"><router-link to="/">Michu Meble</router-link></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li class="text--bold"><router-link to="/shop">SHOP</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <transition name="fade">
      <router-view/>
      </transition>
    </main>
        <p class="app__copyright">©2018 Michu1234</p>
  </div>
</template>

<style lang="scss" src="./assets/scss/main.scss">

</style>
