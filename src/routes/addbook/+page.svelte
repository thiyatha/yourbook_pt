<script>
  let title = "";
  let genre = "";
  let price = "";

   function saveBook() {
    const newBook = { title, genre, price };
    const readlist = JSON.parse(localStorage.getItem("readlist")) || [];

    readlist.push(newBook);
    localStorage.setItem("readlist", JSON.stringify(readlist));

    alert("Book added successfully!");
    window.location.href = "/readlist"; 
  
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
