const booksDetail = []

const fetchBooksFromBackend = async () => {
  try {
    const response = await fetch('/api/books');

    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      throw new Error('Error fetching data from the backend.');
    }
  } catch (err) {
    throw new Error('An error occurred while fetching data.');
  }
};

fetchBooksFromBackend()
  .then((data) => {
    // Update the Booksdetail array with the fetched data
    // booksDetail.length = 0; // Clear the existing data
    // booksDetail.push(...data); // Add the fetched data
    booksDetail = data
  })
  .catch((error) => {
    console.error(error.message);
  });

export default booksDetail