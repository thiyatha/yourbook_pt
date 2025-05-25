import { getCollection } from '$lib/db';

export async function load({ params }) {
  try {
    const bookId = parseInt(params.id);

    const book = await getCollection('books').findOne({
      book_id: bookId
    });

    if (!book) {
      return {
        status: 404,
        error: new Error('Book not found')
      };
    }

    return { book };
  } catch (err) {
    return {
      status: 500,
      error: new Error('Invalid ID or database error')
    };
  }
}