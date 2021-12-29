<script>
  import '../app.css';
</script>

<nav class="w-screen flex justify-center fixed bg-beryl_green top-0 py-4">
  <ul class="flex max-w-prose w-80 justify-around">
    <li><a href="/">Kazeheki</a></li>
    <li><a href="/skills">Skills</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
<div class="flex items-center flex-col gap-12 mt-20 mb-10">
  <slot />
</div>

<style>
  :global(html) {
    @apply bg-beryl_green;
    @apply text-primary-500;
    @apply text-lg;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    @apply font-bold;
    @apply tracking-wide;
  }

  :global(a) {
    position: relative;
  }

  :global(a):before {
    content: '';
    @apply bg-primary-100;
    @apply h-1;
    @apply absolute;
    @apply -bottom-0.5;
    width: calc(100% + 14px);
    left: -7px;
    @apply transition-all;
  }

  :global(a):hover:before {
    @apply h-6;
    @apply opacity-40;
    @apply rounded-lg;
  }
</style>
