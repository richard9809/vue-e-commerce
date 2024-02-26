<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
console.log(router);

const primaryNav = ref(null);
const navToggle = ref(null);

function toggleNav() {
  const visibility = primaryNav.value.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.value.setAttribute("data-visible", "true");
    navToggle.value.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    primaryNav.value.setAttribute("data-visible", "false");
    navToggle.value.setAttribute("aria-expanded", "false");
  }
}
</script>

<template>
  <div class="container">
    <div class="flex align-items-center justify-content-between">
      <h1 class="text-lg font-semibold cursor-pointer">Exclusive</h1>

      <button
        ref="navToggle"
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        @click="toggleNav"
      >
        <span class="visually-hidden">Menu</span>
      </button>

      <nav>
        <ul
          ref="primaryNav"
          id="primary-navigation"
          data-visible="false"
          class="primary-navigation flex gap-4"
          role="list"
        >
          <li>
            <RouterLink to="/" active-class="active-link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" active-class="active-link"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" active-class="active-link"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/signup" active-class="active-link"
              >Sign Up</RouterLink
            >
          </li>
          <li class="mobile-link">
            <RouterLink to="/checkout" active-class="active-link"
              >Checkout</RouterLink
            >
          </li>
          <li class="mobile-link">
            <RouterLink to="/profile" active-class="active-link"
              >Profile</RouterLink
            >
          </li>
        </ul>
      </nav>

      <div class="hidden md:block">
        <Button
          icon="pi pi-shopping-cart"
          severity="secondary"
          text
          rounded
          aria-label="Cart"
          @click="router.push('/cart')"
        />
        <Button
          icon="pi pi-user"
          severity="secondary"
          text
          rounded
          aria-label="User"
          @click="router.push('/profile')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
nav ul li a {
  text-decoration: none;
  color: #000000;
  font-size: 12px;
  opacity: 80%;
  position: relative;
}

nav ul li a::before {
  content: "";
  display: inline-block;
  height: 3px;
  width: 100%;
  background-color: #db4444;
  position: absolute;
  bottom: -25px;
  left: 0;
  transform: scaleX(0);
  transition: calc(0.5s * 1) ease-in-out;
  border-radius: 5px;
}

nav ul li a:hover::before,
.active-link::before {
  transform: scaleX(1);
}

.mobile-nav-toggle {
  display: block;
  position: absolute;
  z-index: 9999;
  background: url("/public/images/icon-menu.svg");
  background-repeat: no-repeat;
  width: 2rem;
  border: 0;
  aspect-ratio: 1;
  top: 2rem;
  right: 2rem;
}

.mobile-nav-toggle {
  display: none;
}

.mobile-link {
  display: none;
}

@media (max-width: 50em) {
  nav ul li a::before {
    bottom: -5px;
  }
  .mobile-link {
    display: block;
  }
  .primary-navigation {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(30vh, 10rem) 2em;
    background-color: hsl(36, 100%, 99%);
    transform: translateX(100%);
    transition: transform 350ms ease-out;
  }

  a {
    font-size: 16px;
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0%);
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 9999;
    background: url("/images/icon-menu.svg");
    background-repeat: no-repeat;
    width: 2rem;
    border: 0;
    aspect-ratio: 1;
    top: 1.5rem;
    right: 2rem;
  }
  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url("/images/icon-menu-close.svg");
  }
}
</style>
