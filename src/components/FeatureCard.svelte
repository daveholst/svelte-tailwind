<script lang="ts">
  import Button from './shared/Button.svelte';
  export let heading: string;
  export let number: number;
  export let description: string;
</script>

<!-- Feature Card -->
<div class="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
  <!-- Heading -->
  <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
    <div class="flex items-center space-x-2">
      <!-- Number -->
      <div class=" rounded-full bg-brightRed py-2 px-4 text-white">
        {0 + number.toString()}
      </div>
      <!-- Text -->
      <h3
        class="my-auto bg-brightRedSupLight text-xl font-bold md:hidden md:bg-transparent"
      >
        {heading}
      </h3>
    </div>
  </div>
  <!-- Description -->
  <div class="flex-col space-y-3">
    <h3
      class="my-auto hidden bg-brightRedSupLight text-xl font-bold md:block md:bg-transparent"
    >
      {heading}
    </h3>
    <p class="text-darkGrayishBlue">
      {description}
    </p>
  </div>
</div>
