<script lang="ts">
  import Button from './shared/Button.svelte';

  const navSections = [
    'Pricing',
    'Products',
    'About Us',
    'Careers',
    'Community'
  ];
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
  </div>
</nav>
