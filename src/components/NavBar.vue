<template>
    <nav class="navbar navbar-expand-lg bg-body sticky-top">
      <div class="container-fluid bg-white">
        <router-link class="navbar-brand" to="/">
          <img src="https://chany4.github.io/symphony-images/images/Symphony_logo.png" loading="lazy" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/products">Products</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: white;
    height: 80px;
  }
  
  .navbar-brand img {
    height: 50px;
    object-fit: cover;
  }
  
  .navbar-nav .nav-link {
    font-size: 1rem;
    color: #333;
    padding: 15px 20px;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active-link {
    color: #006600; /* Highlight color for active  */
    transform: scale(1.1);
  }
  
  .navbar-nav .nav-link.active-link {
    font-weight: bold;
  }
  
  .navbar-toggler {
    border: none;
  }
  </style>
  