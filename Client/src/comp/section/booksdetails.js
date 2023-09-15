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
    booksDetail.length = 0; // Clear the existing data
    booksDetail.push(...data); // Add the fetched data
  })
  .catch((error) => {
    console.error(error.message);
  });


/* const Booksdetail = () => {
    const [loading,setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [error,setError] = useState(null)
    const fetchBooks = async () => {
        try {
            setLoading(true)
            const response = await fetch("/api/books")
            if (response.ok) {
                const json = await response.json()
                setBooks(json)
            }
            else setError("Error fetching data")
        } catch (err) {
            setError("An error occured")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchBooks()
        // fetchBookOfGenre(genre)
    }, [])

    return (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="books">
              {books.map((book) => (
                <div key={book.id} className="book">
                  <img src={aginibina} alt={book.Title} />
                  <h2>{book.Title}</h2>
                  <h4>{book.Poet}</h4>
                  <h3>{book.price}tk</h3>
                //   { Add any other details you want to display }
                </div>
              ))}
            </div>
          )}
        </>
      );
} */
/* const Booksdetail=[
    {
        id : 1,
        Title: 'Book name',
        Poet: 'poet name',
        price: '200',
        genre: 'romantic',
        Img: aginibina
     },
 
     {
         id : 2,
         Title: 'Book name',
         Poet: 'poet name',
         price: '200',
         genre: 'romantic',
         Img: aginibina
      },
 
      {
         id : 3,
         Title: 'Book name',
         Poet: 'poet name',
         price: '200',
         genre: 'drama',
         Img:aginibina
      },
 
      {
         id : 4,
         Title: 'Book name',
         Poet: 'poet name',
         price: '200',
         genre: 'drama',
         Img: aginibina
      },
 
      {
         id : 5,
         Title: 'Book name',
         Poet: 'poet name',
         price: '200',
         genre: 'drama',
         Img: aginibina
      },
      {
       id : 6,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'drama',
       Img: aginibina
    },
    {
       id : 7,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'comedy',
       Img: aginibina
    },
    {
       id : 8,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'science_fiction',
       Img: aginibina
    },
    {
       id : 9,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'detective',
       Img: aginibina
    },
    {
       id : 9,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'detective',
       Img: aginibina
    },
    {
       id : 10,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'detective',
       Img: aginibina
    },
    {
       id : 12,
       Title: 'Book name',
       Poet: 'poet name',
       price: '200',
       genre: 'tragedy',
       Img: aginibina
    }
] */
export default booksDetail