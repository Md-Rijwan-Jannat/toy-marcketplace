import Aos from "aos";
import { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Title } from "../../components/hooks/container/Title/Title";

const UpdateToy = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const toyData = useLoaderData();
  const { _id, price, quantity, description } = toyData;
  const updateToyHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToyInfo = { price, quantity, description };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://toys-marketplace-server-agmt-11.vercel.app/update-toy/${_id}`,
            {
              method: "PATCH",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(updatedToyInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              console.log(updatedToyInfo);
              if (data.modifiedCount > 0) {
                Swal.fire("Updated!", "Your toy has been updated.", "success");
                navigate(`/myToys/${user?.email}`);
              }
            })

            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-3 md:mx-5 pt-28 text-gray-500 rounded-3xl p-10">
      <Helmet>
        <title>Update toy</title>
      </Helmet>
      <Title title={"Update your Toys"} />
      <form
        data-aos="fade-right"
        data-aos-duration="3000"
        onSubmit={updateToyHandler}
        className="w-full mb-16 space-y-3 border p-3 rounded-xl shadow-2xl md:p-10"
      >
        {/* row1 */}
        <div className="md:flex items-center  gap-5 full">
          <div className="space-y-2 font-bold w-full md:w-1/2">
            <h3>Price</h3>
            <input
              type="number"
              required
              name="price"
              defaultValue={price}
              className="input input-bordered w-full text-gray-500"
            />
          </div>
          <div className="space-y-2 font-bold   md:w-1/2">
            <h3>Quantity</h3>
            <input
              type="number"
              required
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full text-gray-500"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="md:flex items-center justify-center gap-5 mb-20">
          <div className="space-y-2 font-bold w-full md:w-1/2">
            <h3 className="text-center">Description</h3>
            <textarea
              type="text"
              required
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered w-full text-gray-500"
            />
          </div>
        </div>
        <button className="text-white bg-rose-500 hover:bg-rose-600 px-6 py-3 w-full text-center rounded-sm">
          Update A Toy
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
