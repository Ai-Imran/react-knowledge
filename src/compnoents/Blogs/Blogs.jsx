import { useState,useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({handleAddToBookmark,handleMarksAsRead}) => {
    // console.log(typeof(handleMarksAsRead));
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog handleAddToBookmark ={handleAddToBookmark} handleMarksAsRead={handleMarksAsRead}
                    key={blog.id} 
                    blog={blog}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func,
    handleMarksAsRead: PropTypes.func
} 

export default Blogs;