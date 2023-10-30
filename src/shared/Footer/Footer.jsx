import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import Container from "../../components/hooks/container/Container";
import toy_pogo from "../../assets/toy-logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="text-base-content">
      <Container>
        <div className="footer p-10 mt-10 bg-gradient-to-r from-[#f7f7f7] to-[#eff3f7] rounded-t-md">
          <div>
            <img className="w-[200px]" src={toy_pogo} alt="" />
            <p className="text-ld font-semibold mt-5">
              The Evolution of the Toy <br /> Industry From Playful
              Entertainment <br /> to Educational Enrichment
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
            <p className="flex gap-3 mt-10">
              <FaRegCopyright className="text-xl"></FaRegCopyright> Copyright
              all right
            </p>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Address</span>
            <a className="link link-hover">Dhaka-1200 block-B</a>
            <a className="link link-hover">Bangladesh</a>
            <a className="link link-hover">India</a>
            <a className="link link-hover">United State</a>
            <a className="link link-hover">Argentina</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <div className="flex gap-4 mt-5">
              <Link
                to={"https://www.facebook.com/profile.php?id=100086218014706"}
              >
                <img
                  className="w-[50px] btn-circle btn bg-current border-none"
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                  alt=""
                />
              </Link>
              <img
                className="w-[50px] btn-circle btn bg-current border-none"
                src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                alt=""
              />
              <img
                className="w-[50px] btn-circle btn bg-current border-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
