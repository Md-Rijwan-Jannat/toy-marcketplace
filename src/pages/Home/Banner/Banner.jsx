
import { Link } from 'react-router-dom';
import Container from '../../../components/hooks/container/Container';

const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[20rem] style md:h-[38rem]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80)' }}>
            <div className="flex items-center justify-start border-white w-full h-full bg-gray-900/40">
                <Container>
                    <div className="text-start mr-5 md:mr-10 xl:mr-5">
                            <h2 className='text-secondary text-[6vw] xl:text-[80px]'>
                                <span className='text-primary mb-2'>Welcome to our</span> toy sports cars site
                            </h2>
                        <Link to={'/addToy'} className='btn btn-xs md:btn  md:mt-16 w-full mt-16 md:w-[300px] text-white style'>add a toy</Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;