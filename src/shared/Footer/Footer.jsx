import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content rounded-t-lg border">
            <div>
                <img className='w-[150px] h-[150px]' src="https://cdn.shopify.com/s/files/1/0034/9995/0129/files/logo_final-01_copy_876e5cdd-627f-4f27-8a0e-e7601e80e7b9_1200x1200.png?v=1634924327" alt="" />
                <p className='text-ld font-semibold'>The Evolution of the Toy <br /> Industry From Playful Entertainment <br /> to Educational Enrichment</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <div className='flex gap-4 mt-5'>
                    <Link to={'https://www.facebook.com/profile.php?id=100086218014706'}><img className='w-[50px] btn-circle btn bg-current border-none' src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt="" /></Link>
                    <img className='w-[50px] btn-circle btn bg-current border-none' src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                    <img className='w-[50px] btn-circle btn bg-current border-none' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;