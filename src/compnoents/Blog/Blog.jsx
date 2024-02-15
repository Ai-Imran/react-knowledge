import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark,handleMarksAsRead}) => {
    // console.log(typeof(handleMarksAsRead));
    const {title,cover,author_img,posted_date,reading_time,author,hashtags} = blog;
    // console.log(typeof(reading_time));
    return (
        <div className='p-4 mx-4'>
            <img className='rounded-xl w-full' src={cover} alt="" />
            <div className='flex mt-4 justify-between mb-3 max-w-[640px]'>
                <div className='flex gap-4 justify-center items-center mb-3'>
                     <img className='w-16 h-16 ml-3 ' src={author_img} alt="" />
                 <div>
                    <h3 className='font-bold'>{author}</h3>
                    <h4>{posted_date}</h4>
                 </div>

                </div>
                <span>{reading_time} min read <button onClick={() => handleAddToBookmark(blog)} className='p-2 text-2xl text-red-600'><CiBookmark /></button>
 </span>


            </div>
            <h2 className='text-2xl mb-5 max-w-96'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hstg,idx) => <span key={idx} className='ml-2 text-purple-400' ><a  href="">#{hstg}</a></span>)
                }
            </p>
            <em onClick={() => handleMarksAsRead(reading_time)} className='text-purple-800 font-bold underline'>Make as Read</em>

            <hr className='my-5' />
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarksAsRead: PropTypes.func,
}

export default Blog;