import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import EditBtn from '@/components/common/EditButton/EditBtn'
import DeleteBtn from '@/components/common/DeleteBtn/DeleteBtn'
import Labtop from '@/assets/imgs/labtop.png'
import { useProfileStore } from '@/store/useProfileStore'
import { Link } from 'react-router-dom'
import { Product } from '@/utils/context-interface/productInterface'
import toast from "react-hot-toast";

export default function ProfileListing() {
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
  const [editableProductId, setEditableProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { profile, products, getUserProducts, deleteProduct, updateProduct } = useProfileStore();

  useEffect(() => {
    getUserProducts();
  }, [getUserProducts]);

  // focus أول input عند التحويل لوضع edit
  useEffect(() => {
    if (editableProductId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editableProductId]);

  function handleDeleteProduct(id: string) {
    deleteProduct(id);
  }

  function handleEditProducts(product: Product) {
    setEditableProductId(product._id);
    setFormData(product); 
  }

  async function handleBlur(field: keyof Product, value: string | number) {
    if (!editableProductId) return;
    try {
      await updateProduct(editableProductId, { [field]: value });
      toast.success("Product updated successfully 🎉");
    } catch (err) {
      toast.error("Update failed!");
    }
  }

  return (
    <div className="w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-gray-400 text-sm mb-4 font-bold">Your Listing</h2>

      <div className="flex justify-between items-center p-3">
        <div className="flex justify-between items-center">
          <img src={`${BASE_URL}/${profile?.photo}`} alt=" profile image" className='rounded-full w-24 h-20 object-cover' />
          <h2 className='font-bold ml-4 text-2xl'>
            {profile?.fullName ?? "Un Known User"}
          </h2>
        </div>
      </div>

      {/* Add New */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center p-2">
          <Link to="/halal-business-dirctory/sell-products">
            <OrangeButton title="Make New Shopping" icon={<Plus />} />
          </Link>
        </div>
      </div>

      {products.map((product) => (
        <div key={product._id} className="mb-6">
          <div className="crudBtns flex items-center gap-5 justify-end">
            <EditBtn onClick={() => handleEditProducts(product)} />
            <DeleteBtn onClick={() => handleDeleteProduct(product._id)} />
          </div>

          <div className="flex">
            <div className="w-1/2">
              <img src={Labtop} alt="Labtop image" className='w-full h-full object-cover' />
            </div>

            <div className="w-1/2 p-4 space-y-3">
              {/* Name */}
              {editableProductId === product._id ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className='w-full p-2 border rounded'
                />
              ) : (
                <h1 className="font-bold text-xl">{product.name}</h1>
              )}

              {/* Description */}
              {editableProductId === product._id ? (
                <textarea
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  onBlur={(e) => handleBlur("description", e.target.value)}
                  className='w-full p-2 border rounded'
                />
              ) : (
                <p className='text-gray-500'>{product.description}</p>
              )}

              {/* Price */}
              {editableProductId === product._id ? (
                <input
                  type="number"
                  value={formData.price || 0}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  onBlur={(e) => handleBlur("price", Number(e.target.value))}
                  className='w-full p-2 border rounded'
                />
              ) : (
                <p className='text-gray-500'>Price: ${product.price}</p>
              )}

              {/* Contact */}
              {editableProductId === product._id ? (
                <input
                  type="text"
                  value={formData.contactNumber || ""}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  onBlur={(e) => handleBlur("contactNumber", e.target.value)}
                  className='w-full p-2 border rounded'
                />
              ) : (
                <p className="font-bold">Call: {product.contactNumber}</p>
              )}
            </div>
          </div>
        </div>
      ))}

      {products.length === 0 && (
        <div className="flex justify-center w-full items-center">
          <h1 className='font-bold text-3xl'>
            No Products in your store
          </h1>
        </div>
      )}
    </div>
  )
}
