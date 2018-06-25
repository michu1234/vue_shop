<template>
  <div id="app">
    <header>
      <nav>
        <ul class="nav__menu">
          <li>Lorem</li>
          <li>Aspernatur</li>
          <li>Accusantium</li>
          <li>Pariatur</li>
          <li>Cupiditate</li>
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
