Lorem<template>
  <div id="app">
    <header>
      <nav>
        <ul class="nav__menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/">Lorem</router-link></li>
          <li><router-link to="/shop">SHOP</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss" src="./assets/scss/main.scss">

</style>
