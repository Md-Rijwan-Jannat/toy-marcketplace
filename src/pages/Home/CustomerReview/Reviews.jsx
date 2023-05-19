import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Reviews = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    const reviews = [
        {
            id: 1,
            img:'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.1835737861.1672837948&semt=sph',
            name: 'Luzina ',
            comment: 'I am writing to express my interest in partnering with your company to fulfill our toy needs. As a retailer, we strive to provide our customers with a diverse and high-quality range of toys that not only entertain but also stimulate creativity and imagination. After conducting extensive market research and evaluating various suppliers, we have identified your company as a leading provider in the industry.',
            rating: 4.5,
        },
        {
            id: 2,
            img:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1835737861.1672837948&semt=sph',
            name: 'Smith',
            comment: 'We are particularly impressed with the wide selection of toys your company offers, ranging from educational and interactive toys to classic favorites and trendy collectibles. Your commitment to safety and compliance with industry regulations is also commendable, as it aligns perfectly with our values and ensures the well-being of our young customers.',
            rating: 5,
        },
        {
            id: 3,
            img:'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1835737861.1672837948&semt=sph',
            name: 'Darveer',
            comment: 'Furthermore, your reputation for delivering excellent customer service and maintaining consistent product availability is an important factor in our decision-making process. As a retailer, we understand the significance of having a reliable and responsive supplier who can meet our demands promptly.',
            rating: 5,
        },
        {
            id: 4,
            img:'https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.1835737861.1672837948&semt=sph',
            name: 'Janny',
            comment: ' We believe that a partnership with your company will not only enhance our product offerings but also streamline our supply chain operations. In addition to your impressive product catalog, we are interested in exploring any customization or branding options available',
            rating: 5,
        },
        {
            id: 5,
            img:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1835737861.1672837948&semt=sph',
            name: 'Tom',
            comment: 'As we aim to create a unique shopping experience for our customers, the ability to incorporate our own branding or tailor products to our specifications would greatly enhance our market positioning',
            rating: 5,
        },
        // Add more reviews here
    ];

    return (
        <div data-aos="zoom-in-down" className='my-16 flex flex-col items-center m-5 bg-base-200 rounded-xl shadow-2xl py-16 p-5'>
            <div className='flex flex-col justify-center items-center w-full mb-16'>
                <h2 className='text-3xl style'>Customer Reviews</h2>
                <hr className='w-1/3' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews.map((review) => (
                    <div data-aos="fade-down" key={review.id} className="w-full bg-white shadow-md rounded-lg p-4" >
                        <img className='w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={review.img} alt="" />
                        <h2 className="text-lg font-bold">{review.name}</h2>
                        <p className="mt-2"><span className='font-bold'>Comment: </span> {review.comment}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-500">{review.rating}</span>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
