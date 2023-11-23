import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import { Title } from "../../components/Title/Title";

const AddToys = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { user } = useContext(AuthContext);
  const addToyHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const toysAllInfo = {
      toyName,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      photo,
      description,
    };
    console.log(toysAllInfo);
    fetch("https://toys-marketplace-server-agmt-11.vercel.app/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toysAllInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully added");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <div className="md:h-screen pt-32 flex items-center flex-col justify-center">
        <Helmet>
          <title>Add your Toy</title>
        </Helmet>
        <Title title={"Add your won Toy"} />
        <form
          data-aos="fade-right p-10 bg-neutral-focus bg-opacity-10 text-gray-500 rounded-3xl"
          data-aos-duration="3000"
          onSubmit={addToyHandler}
          className="w-full mb-16 space-y-3 border p-3 rounded-xl shadow-2xl md:p-10"
        >
          {/* row1 */}
          <div className="md:flex items-center  gap-5 full">
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Toy name</h3>
              <input
                type="text"
                required
                name="toyName"
                placeholder="Toy name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Seller name</h3>
              <input
                type="link"
                required
                name="sellerName"
                placeholder="Seller name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row2 */}
          <div className="md:flex items-center  gap-5 full">
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Email</h3>
              <input
                type="email"
                required
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Category</h3>
              <input
                type="text"
                required
                name="category"
                placeholder="Sub category"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row3 */}
          <div className="md:flex items-center  gap-5 full">
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Price</h3>
              <input
                type="number"
                required
                name="price"
                placeholder="Toy price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Rating</h3>
              <input
                type="text"
                required
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row4 */}
          <div className="md:flex items-center  gap-5 full">
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Quantity</h3>
              <input
                type="number"
                required
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </div>
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3>Photo</h3>
              <input
                type="link"
                required
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row 5 */}
          <div className="md:flex items-center justify-center gap-5 full mb-10">
            <div className="space-y-2 font-bold w-full md:w-1/2">
              <h3 className="text-center">Description</h3>
              <textarea
                type="text"
                required
                name="description"
                placeholder="description"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
          <button className="text-white bg-rose-500 hover:bg-rose-600 px-6 py-3 w-full text-center rounded-sm ">
            Add a Toy
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddToys;
