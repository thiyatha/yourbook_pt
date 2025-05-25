<h1>Readlist</h1>

<p>Your saved books:</p>

{#if readlist.length > 0}
  <ul>
    {#each readlist as book, i}
      <li>
        <strong>{book.title}</strong> – {book.genre} – CHF {book.price}
        <button on:click={() => removeBook(i)} style="margin-left: 1rem;">
          ❌
        </button>
      </li>
    {/each}
  </ul>
{:else}
  <p>No books in your readlist yet.</p>
{/if}

<script>
  import { onMount } from 'svelte';
  let readlist = [];

  onMount(() => {
    const stored = localStorage.getItem('readlist');
    if (stored) {
      readlist = JSON.parse(stored);
    }
  });

  function removeBook(index) {
    readlist.splice(index, 1);
    localStorage.setItem('readlist', JSON.stringify(readlist));
  }
</script>
