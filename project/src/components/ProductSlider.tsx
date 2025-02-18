import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface ProductSliderProps {
  products: Product[];
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const goToPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setStartIndex((prev) => Math.min(products.length - itemsToShow, prev + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-full md:w-1/3 px-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        disabled={startIndex === 0}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${
          startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        disabled={startIndex >= products.length - itemsToShow}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${
          startIndex >= products.length - itemsToShow
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-100'
        }`}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}