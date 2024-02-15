import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    // console.log(readingTime);
    // console.log(bookmarks.title);

    return (
        <div className="md:w-1/3">
            <div className="text-3xl bg-gray-600 font-bold text-white p-4 m-4 rounded-xl">Reading Time :{readingTime}</div>

            <div className='bg-gray-200 p-5 mt-4 rounded-lg'>

            <h2 className="text-3xl font-bold texy-center"> Bookmarked Blogs : {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark  key={bookmarks.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number
}
// rpt
// ipt

export default Bookmarks;