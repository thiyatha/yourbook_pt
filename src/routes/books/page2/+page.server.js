import { getCollection } from "$lib/db";

export async function load() {
  const booksRaw = await (await getCollection("books")).find().toArray();
  const authorsRaw = await (await getCollection("authors")).find().toArray();

  const authorMap = new Map(authorsRaw.map(author => [author.author_id, author.name]));

  const books = booksRaw.map((book) => ({
    ...book,
    _id: book._id.toString(),
    authorName: authorMap.get(book.author_id),
    photo_url: book.book_id <= 20
      ? `/covers/${book.book_id}.png`
      : "/covers/placeholder.png",
  }));

  return { books };
}