import React from 'react'
import booksDetail from './booksdetails'
import './books.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
// import { BsArrowRight } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Books = ({book,setBook,detail,view,close,setClose,addtocart,addtowish,authorBasedBooks}) => {
    const navigate = useNavigate()

    const filterbook = (genre) => {
        if (genre === 'All Books') {
            auth.currentUser? setBook(booksDetail) : navigate('/user/login')
        } else {
            const filteredBooks = booksDetail.filter((book) => book.genre === genre);
            auth.currentUser? setBook(filteredBooks) : navigate('/user/login')
            // setBooks(filteredBooks);
        }
    };
    const AllBooks=()=>{
        auth.currentUser? setBook(booksDetail) : navigate('/user/login')
    }
    return (
        <>
        {
        close?
        <div className='book_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose/></button>
            {
                detail.map((curElm)=>{
                    return(
                        <div className='bookbox'>
                            <div className='img_box'>
                                <img src={curElm.cover} alt={curElm.title}></img>
                            </div>
                            <div className='detail'>
                                <h1>{curElm.title}</h1>
                                <h4>{curElm.author}</h4>
                                <h3>{curElm.genre}</h3>
                                <h3>{curElm.price}/-</h3>
                                <button onClick={()=>addtocart(curElm)} >Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
   </div>:null
        }
            <div className='book'>
            <h3>Books</h3>
            <p>Home . books</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>catagories</h3>
                            <ul>
                                <li onClick={()=> AllBooks()}>All Books</li>
                                <li onClick={()=> filterbook('romantic')}>Romantic</li>
                                <li onClick={()=> filterbook('drama')}>Drama</li>
                                <li onClick={()=> filterbook('Poetry')}>Poetry</li>
                                <li onClick={()=> filterbook('science_Fiction')}>Science Fiction</li>
                                <li onClick={()=> filterbook('Historical_Fiction')}>Historical Fiction</li>
                                <li onClick={()=> filterbook('Detective')}>Detective</li>
                                <li onClick={()=> filterbook('Tragedy')}>Tragedy</li>
                                <li onClick={()=> filterbook('Short_Story')}>Short Story</li>
                            </ul>
                        </div>

                    </div>
                    <div className='booksContainer'>
                        <div className='contant'>
                            {
                                book.map((curElm) => {
                                    return (
                                        <>
                                            <div className='box' key={curElm.id}>
                                                <div className='img_box'>
                                                    <img src={curElm.cover} alt={curElm.title} />
                                                    <div className='icon'>
                                                        <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                                        <li onClick={()=>view(curElm)}> <BsEye /></li>
                                                        <li onClick={()=>addtowish(curElm)}><AiOutlineHeart /></li>
                                                    </div>
                                                </div>

                                                <div className='detail'>
                                                    <h4>{curElm.title}</h4>
                                                    <h5>{curElm.author}</h5>
                                                    <h5>Genre: {curElm.genre}</h5>
                                                    <p>Price: {curElm.price}/-</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Books
/* 
const [books, setBook] = useState([])
    const fetchBooks = async () => {
        try {
            setLoading(true)
            const response = await fetch("/api/books")
            if (response.ok) {
                const json = await response.json()
                setBook(json)
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
*/