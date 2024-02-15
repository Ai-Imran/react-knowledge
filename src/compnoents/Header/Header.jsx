import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-extrabold mt-3 text-purple-600'>Konwlkedge Cafe</h1>
            <img src={profile} alt="" />
        </header>

    );
};

export default Header;