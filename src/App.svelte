<script lang="ts">
  import './app.css';
  import FeatureCard from './components/FeatureCard.svelte';
  import NavBar from './components/NavBar.svelte';
  import Button from './components/shared/Button.svelte';

  const features = [
    {
      heading: 'Feature 1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facere voluptatem veritatis neque ullam, eligendi exercitationem. Ratione harum, officia magnam nihil sint ab magni expedita vitae hic totam quos dolorem!'
    },
    {
      heading: 'Feature 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facere voluptatem veritatis neque ullam, eligendi exercitationem. Ratione harum, officia magnam nihil sint ab magni expedita vitae hic totam quos dolorem!'
    },
    {
      heading: 'Feature 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facere voluptatem veritatis neque ullam, eligendi exercitationem. Ratione harum, officia magnam nihil sint ab magni expedita vitae hic totam quos dolorem!'
    }
  ];
</script>

<NavBar />

<!-- Hero Section -->
<section id="hero">
  <!-- Flex Container -->
  <div
    class="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row"
  >
    <!-- Left Item -->
    <div class="mb-32 flex flex-col space-y-12 md:w-1/2">
      <h1
        class="max-w-md text-center text-4xl font-bold leading-10 md:text-left md:text-5xl"
      >
        Bring everyone together to build better products
      </h1>
      <p class="text-center text-darkGrayishBlue md:text-left">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the large team goals in view.
      </p>
      <Button class="self-center md:self-start" label="Can't read" />
    </div>
    <!-- Right Item / Images -->
    <div class="md:w-1/2">
      <img src="img/illustration-intro.svg" alt="" />
    </div>
  </div>
</section>

<!-- Feature Section -->
<section id="feature">
  <div
    class="items- container mx-auto mt-10 flex flex-col space-y-0 px-6 md:flex-row md:space-x-12"
  >
    <!-- Left Item -->
    <div class="mb-32 space-y-12 md:w-1/2">
      <h2
        class="max-w-md text-center text-3xl font-bold leading-10 md:text-left md:text-4xl"
      >
        What's different about manage?
      </h2>
      <p class="text-center text-darkGrayishBlue md:text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facere
        voluptatem veritatis neque ullam, eligendi exercitationem. Ratione
        harum, officia magnam nihil sint ab magni expedita vitae hic totam quos
        dolorem!
      </p>
    </div>
    <!-- Right Item / Feature List -->
    <div class="mb-32 flex-col space-y-12 md:w-1/2">
      {#each features as feature, index}
        <FeatureCard number={index + 1} {...feature} />
      {/each}
    </div>
  </div>
</section>

<!-- Testimonials  -->
<section id="testimonials">
  <div class="max-w mx-auto mt-32 px-5 text-center">
    <!-- Heading -->
    <h2 class="text-center text-3xl font-bold">
      What's do people have to say?
    </h2>
    <!-- Testimonials   -->
    <div
      class="mt-24 flex flex-col space-y-16 md:flex-row md:space-x-6 md:space-y-0"
    >
      <!-- Testimonial 1 -->
      <div
        class="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3 "
      >
        <img src="img/avatar-anisha.png" alt="" class="-mt-14 w-16" />
        <h5 class="text-lg font-bold">Anisha Li</h5>
        <p class="text-sm text-darkGrayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          cupiditate quos perferendis minus perspiciatis recusandae, repudiandae
          minima maiores repellat! Distinctio exercitationem fugit quis nisi
          facilis quia illum qui eius perferendis?
        </p>
      </div>
      <!-- Testimonial 2 -->
      <div
        class="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3 "
      >
        <img src="img/avatar-ali.png" alt="" class="-mt-14 w-16" />
        <h5 class="text-lg font-bold">Ali Ali</h5>
        <p class="text-sm text-darkGrayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          cupiditate quos perferendis minus perspiciatis recusandae, repudiandae
          minima maiores repellat! Distinctio exercitationem fugit quis nisi
          facilis quia illum qui eius perferendis?
        </p>
      </div>
      <!-- Testimonial 3 -->
      <div
        class="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3 "
      >
        <img src="img/avatar-richard.png" alt="" class="-mt-14 w-16" />
        <h5 class="text-lg font-bold">Richard King</h5>
        <p class="text-sm text-darkGrayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          cupiditate quos perferendis minus perspiciatis recusandae, repudiandae
          minima maiores repellat! Distinctio exercitationem fugit quis nisi
          facilis quia illum qui eius perferendis?
        </p>
      </div>
    </div>
  </div>
  <!-- Get Started -->
  <div class="my-16 flex items-center">
    <Button class="mx-auto md:inline-block" label="Get Started" />
  </div>
</section>

<style>
</style>
