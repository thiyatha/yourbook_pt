<script>
	export let data;
	const book = data.book;
</script>

<h1>{book.title}</h1>
<img src={book.photo_url} alt={"Cover von " + book.title} style="height: 300px;" />
<p><strong>Genre:</strong> {book.genre}</p>
<p><strong>Preis:</strong> CHF {book.price}</p>
<p><strong>Autor:</strong> {book.authorName}</p>

<a href="/books" class="btn btn-outline-primary mt-3">Back to books</a>