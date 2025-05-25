<h1>Readlist</h1>

<p>Your saved books:</p>

<script>
  import { onMount } from 'svelte';
  let readlist = [];

  onMount(() => {
    const stored = localStorage.getItem('readlist');
    if (stored) {
      readlist = JSON.parse(stored);
    }
  });
</script>


{#if readlist.length > 0}
  <ul>
    {#each readlist as book}
      <li>
        <strong>{book.title}</strong> – {book.genre} – CHF {book.price}
      </li>
    {/each}
  </ul>
{:else}
  <p>No books in your readlist yet.</p>
{/if}