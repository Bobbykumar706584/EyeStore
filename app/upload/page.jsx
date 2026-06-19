"use client";

import { products } from "@/data/products";
import { uploadProducts } from "@/lib/services/productService";

export default function UploadPage() {
  const handleUpload = async () => {
    await uploadProducts(products);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-8 py-4 rounded-xl"
      >
        Upload Products
      </button>
    </div>
  );
}
