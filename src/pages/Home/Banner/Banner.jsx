
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:relative clear-left mb-16'>
            <div className='relative'>
                <img className='h-[260px] md:h-full w-full' src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div className='text-[7vw] style brightness-50 absolute top-[70px] md:top-24 lg:top-32 font-bold flex left-6 flex-col justify-start w-10/12'>
                    <h2 className='text-secondary'>
                        <span className='text-primary mb-2'>Welcome to our</span> toy sports cars site
                    </h2>
                    <Link to={'/addToy'} className='btn btn-xs md:btn mt-5 md:mt-16 md:w-[300px] text-white style'>add a toy</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;