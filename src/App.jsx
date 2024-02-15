import { useState } from 'react'
import './App.css'
import Blogs from './compnoents/Blogs/Blogs'
import Bookmarks from './compnoents/Bookmarks/Bookmarks'
import Header from './compnoents/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = blog => {
// console.log(blog);
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }
  const handleMarksAsRead = time => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)    
  }



  return (
    <>
      <Header></Header>     
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} readingTime={readingTime} handleMarksAsRead={handleMarksAsRead}></Blogs> 
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      </>
  )
}

export default App
