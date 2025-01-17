import Book from "./Book.jsx"
import "./style.css"
// import {Books} from "../utils/mockData.js"
import {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom"
import useFetch from "../utils/useFetch.js"
import userContext from "../utils/useContext.js"



function BookList(){
    
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setfilteredBooks] = useState([]);

    function handleSearch(){
        console.log("Search Text", searchText);
        setfilteredBooks(filteredBooks.filter((book)=>book.title.toLowerCase().includes(searchText.toLowerCase())))
    }

    const {setUserName} = useContext(userContext);

    const {data, error, loading} = useFetch("/api");

    useEffect(()=>{
        if(data){
            setfilteredBooks(data);
        };
    },[data]);

    if(error){
        return <p>Error in loading Data: {error}</p>
    }

    if(loading){
        return (<p>Loading..</p>)
    }
    
    return(
        <>
            <input type="text" name="" id="" onChange={(e)=>setUserName(e.target.value)} />
            <div className="search">
                <h2>Search Books</h2>
                <div>
                    <input 
                        type="text" 
                        className="search-input" 
                        onChange={(e)=>(setSearchText(e.target.value))}
                    ></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="bookList">
                {
                    filteredBooks.map((data)=>{
                        return (
                            <Link to={`/Book/${data.id}`} key={data.id}><Book key={data.id} bookDetails = {data} /></Link>
                        )})
                }
            </div>
        </>
        
    )
}
export default BookList