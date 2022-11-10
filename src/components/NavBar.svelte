<script lang="ts">
  import Button from './shared/Button.svelte';

  const navSections = [
    'Pricing',
    'Products',
    'About Us',
    'Careers',
    'Community'
  ];

  let menuOpen = false;
</script>

<!-- NavBar -->
<nav class="container relative mx-auto p-6">
  <!-- Flex Container -->
  <div class="flex items-center justify-between">
    <!-- Logo -->
    <div class="pt-2">
      <img src="img/logo.svg" alt="" />
    </div>
    <!-- Menu Items -->
    <div class="hidden space-x-6 md:flex">
      {#each navSections as section}
        <a href="#" class="hover:text-darkGray">{section}</a>
      {/each}
    </div>
    <!-- Button -->
    <Button class="hidden" label="Get Started" />
    <!-- Hamburger Icon -->
    <button
      id="menu-btn"
      class="block focus:outline-none md:hidden"
      class:menu-open={menuOpen}
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span class="hamburger-top" />
      <span class="hamburger-mid" />
      <span class="hamburger-bot" />
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden">
    <div
      id="menu"
      class="absolute left-6 right-6 mt-10 hidden flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center"
      class:show-menu={menuOpen}
    >
      <a href="#">Pricing</a>
      <a href="#">Product</a>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Community</a>
    </div>
  </div>
</nav>

<style>
  #menu-btn {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
  }

  .hamburger-top,
  .hamburger-mid,
  .hamburger-bot {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
  }

  .hamburger-mid {
    transform: translateY(7px);
  }
  .hamburger-bot {
    transform: translateY(14px);
  }

  .menu-open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }

  .menu-open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  .menu-open .hamburger-mid {
    display: none;
  }
  .menu-open .hamburger-bot {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }

  .show-menu {
    display: flex;
  }
</style>
