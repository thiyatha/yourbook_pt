<script>
  let title = "";
  let genre = "";
  let price = "";
  let photo_url = "";

  function saveBook() {
    const newBook = { title, genre, price, photo_url };
    const savedBooks = JSON.parse(localStorage.getItem("customBooks")) || [];
    savedBooks.push(newBook);
    localStorage.setItem("customBooks", JSON.stringify(savedBooks));

    alert("Book added successfully!");
    window.location.href = "/books";
  }
</script>

<h1>
  Add a New Book
  <p class="lead">to your readlist:</p>
</h1>

<form on:submit|preventDefault={saveBook} class="form">
  <input type="text" placeholder="Title" bind:value={title} required />
  <input type="text" placeholder="Genre" bind:value={genre} required />
  <input type="number" placeholder="Price (CHF)" bind:value={price} />
  <input type="text" placeholder="Cover Image URL" bind:value={photo_url} />

  <button type="submit" class="btn btn-primary mt-2">Add Book</button>
</form>

<style>
  .form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 2rem auto;
    gap: 1rem;
  }
</style>
