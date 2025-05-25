<script>
  export let data;
  const books = data.books.slice(0, 14); 
</script>

<div class="pagination">
  <a href="/books" class="btn btn-danger btn-sm">1</a>
  <a href="/books/page2" class="btn btn-outline-danger btn-sm">2</a>
</div>

<h1>Books</h1>

<div class="book-grid">
  {#each books as book}
    <div class="book-card">
      <img src={book.photo_url} alt="Cover von {book.title}" />
      <h2>{book.title}</h2>
      <p>{book.genre}</p>
      <p><em>{book.authorName}</em></p>
      <p><strong>CHF {book.price}</strong></p>
      <a href={`/books/${book.book_id}`} class="btn btn-primary">Buy</a>
      <a href="/readlist" class="btn btn-outline-danger mt-2">Readlist</a>
    </div>
  {/each}
</div>

<style>
  .book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.75rem;
    padding: 1rem;
    max-width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .book-card {
    background: #fff;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .book-card h2 {
    font-size: 0.95rem;
    margin: 0.4rem 0 0.3rem;
  }

  .book-card p {
    font-size: 0.85rem;
    margin: 0.2rem 0;
  }

  .book-card .btn {
    margin-top: 0.4rem;
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
  }
</style>
