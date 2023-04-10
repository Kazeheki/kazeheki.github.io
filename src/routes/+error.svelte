<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  {#if $page.status === 404}
    <title>Kazeheki - Not found</title>
  {:else}
    <title>Kazeheki - Error</title>
  {/if}
</svelte:head>

<div class="max-w-prose px-5 md:px-0">
  {#if $page.status === 404}
    <div class="font-bold text-xl tracking-wide leading-loose">
      Sorry, I couldn't find that page.<br />
      Do you want to return to the <a href="/">home&nbsp;page</a>?
    </div>
  {:else}
    <div class="font-bold text-xl tracking-wide leading-loose">
      There seems to be something wrong, sorry.<br />
      If this error consists, please open an issue in the
      <a href="https://github.com/Kazeheki/kazeheki.github.io/issues" target="_blank"
        >GitHub&nbsp;repository</a
      >
      of this page and include the error-message below.<br />
      You can try and return to the <a href="/">home&nbsp;page</a>.
    </div>
    <div class="mt-7 px-5 py-3 rounded-xl border border-primary-400 font-mono text-red-900 text-sm">
      Status: {$page.status}<br />
      {$page.error?.message}
    </div>
  {/if}
</div>
