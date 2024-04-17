<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid container">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="/src/assets/img/avatar.png"
          alt="Logo"
          width="24"
          height="24"
          class="d-inline-block align-text-top"
        />
        PokeVue
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <RouterLink class="nav-link" aria-current="page" to="/"
            >Home</RouterLink
          >
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <div class="main">
    <RouterView></RouterView>
  </div>
</template>
