import { useContext, useEffect } from "react";
import Toys from "./Toys";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import useMyToys from "../../components/hooks/useMyToys";
import Container from "../../components/container/Container";
import { Loader } from "../../components/loader/Loader";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    Aos.init();
  }, []);

  const [myToys, refetch, isLoading] = useMyToys();
  console.log(myToys);

  // delete

  return (
    <Container>
      <div className="pt-16 px-2 md:px-5">
        <Helmet>
          <title>My toys</title>
        </Helmet>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center py-16 text-rose-500"
        >
          <h2 className="text-3xl style ">
            All Toys are Here{" "}
            <span className="text-5xl text-rose-500">{myToys.length}</span>
          </h2>
          <hr className="w-1/3" />
        </div>
        {!isLoading ? (
          <div className="overflow-x-auto md:overflow-hidden  w-full mt-5 mb-10">
            {user ? (
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <th>Delete</th>
                    </th>
                    <th>Photo</th>
                    <th>Toy Name</th>
                    <th>Seller Name</th>
                    <th>You email</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Update</th>
                  </tr>
                </thead>
                {myToys.length == 0 ? (
                  <Loader />
                ) : (
                  <>
                    {myToys?.map((toy) => (
                      <Toys key={toy._id} toy={toy} refetch={refetch}></Toys>
                    ))}
                  </>
                )}
              </table>
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center">
                <progress className="progress w-56"></progress>
              </div>
            )}
          </div>
        ) : (
          <div className="w-[1400px] h-screen flex items-center justify-center">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyToys;
