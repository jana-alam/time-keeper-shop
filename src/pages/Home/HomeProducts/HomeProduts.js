import useAuth from "../../../hooks/useAuth";
import Product from "../../SharedComponents/Product/Product";

const HomeProduts = () => {
  const { products } = useAuth();

  return (
    <section className="py-8 pb-24 relative">
      <div className="space-y-4">
        <h1 className="text-center text-6xl text-gray-600 font-semibold">
          Our <span className="text-orange-600">Time Keeper</span>
        </h1>
        <p className="text-center text-lg font-medium text-gray-700">
          We have the best quality watched across the country
        </p>
      </div>
      {/* Products container */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 py-8">
        {products.slice(0, 6).map((watch) => (
          <Product key={watch._id} watch={watch} />
        ))}
      </div>
    </section>
  );
};

export default HomeProduts;
