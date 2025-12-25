import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/services/productService";
import EmblaCarousel from "@/features/Embla/EmblaCarousel";
import { ProductProvider } from "@/context/productContext";
import DefaultProductImage from "@/assets/imgs/labtop.png";
import Loader from "@/components/common/loader/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getProductById(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 my-6 sm:my-10 text-base sm:text-lg">
    <Loader />
  </p>;
  if (!product) return <p className="p-6 text-center">Product not found.</p>;

  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
  const imageSrc = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${BASE_URL.replace(/\/$/, "")}/${product.image.replace(/^\//, "")}`
    : DefaultProductImage;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full max-w-md rounded-xl object-cover shadow-md"
            onError={(e) => {
              e.currentTarget.src = DefaultProductImage as string;
            }}
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="text-xl font-semibold">
            $ <span className="font-bold">{product.price}</span>
          </div>

          {/* Phone */}
          <div>
            <p className="font-semibold mb-2">Call the owner</p>
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33 16.67C6.18 14.52 4.52 11.92 3.48 9.06C2.91 7.49 3.43 5.78 4.61 4.6L5.34 3.87C5.73 3.48 6.25 3.25 6.84 3.25C7.43 3.25 7.95 3.48 8.33 3.87L10.04 5.58C10.43 5.97 10.66 6.49 10.66 7.07C10.66 7.66 10.43 8.18 10.04 8.56L9.62 8.98C9.28 9.32 9.09 9.78 9.09 10.26C9.09 10.74 9.28 11.2 9.62 11.54L13.46 15.38C13.8 15.72 14.26 15.91 14.74 15.91C15.22 15.91 15.68 15.72 16.02 15.38L16.44 14.96C16.83 14.57 17.35 14.34 17.93 14.34C18.52 14.34 19.04 14.57 19.42 14.96L21.13 16.67C21.52 17.06 21.75 17.58 21.75 18.16C21.75 18.75 21.52 19.27 21.13 19.66L20.4 20.39C19.22 21.56 17.51 22.09 15.94 21.52C13.08 20.48 10.48 18.82 8.33 16.67Z"
                  stroke="#00ABB6"
                  strokeWidth="1.5"
                />
              </svg>

              <span className="text-sm font-semibold text-[#00ABB6]">
                {product.phone || "(480) 555-0103"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* More Products */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">More Products</h2>
        <ProductProvider>
          <EmblaCarousel />
        </ProductProvider>
      </div>
    </div>
  );
}
