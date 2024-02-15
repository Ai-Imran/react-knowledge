import './App.css'
import Blogs from './compnoents/Blogs/Blogs'
import Bookmarks from './compnoents/Bookmarks/Bookmarks'
import Header from './compnoents/Header/Header'

function App() {

  return (
    <>
      <Header></Header>     
      <div className='md:flex'>
      <Blogs></Blogs> 
      <Bookmarks></Bookmarks>
      </div>
      </>
  )
}

export default App
