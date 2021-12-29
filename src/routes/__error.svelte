<script context="module">
  // eslint-disable-next-line
  export function load({ error, status }) {
    return {
      props: {
        error,
        status
      }
    };
  }
</script>

<script>
  export let error;
  export let status;
</script>

<svelte:head>Kazeheki - Error</svelte:head>

<div class="max-w-prose px-5 md:px-0">
  {#if status === 404}
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
      Status: {status}<br />
      {error.message}
    </div>
  {/if}
</div>
