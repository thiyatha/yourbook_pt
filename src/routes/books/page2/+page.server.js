import { getCollection } from "$lib/db";

export async function load() {
  const booksRaw = await (await getCollection("books")).find().toArray();

  const books = booksRaw.map((book, index) => {
    const coverNumber = index + 1;

    return {
      ...book,
      _id: book._id.toString(),
      photo_url:
        coverNumber <= 20
          ? `/covers/${coverNumber}.png`
          : "/covers/placeholder.png",
    };
  });

  return { books };
}
