<script lang="ts">
  export let label: string;
  let clazz: string = undefined;
  export {clazz as class};
</script>

<a
  href="#"
  class={`rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight md:block ${
    clazz || ''
  }`}>{label}</a
>
