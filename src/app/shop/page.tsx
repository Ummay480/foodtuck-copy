import React from 'react';
import NavBar from '@/components/NavBar';
import HeroBanner from '@/components/HeroBanner';
import ProductDetails from '@/components/ProductDetails';
import SimilarProducts from '@/components/SimilarProducts';



const Shop = () => (
  <>
    
    <main className="container mx-auto px-6">
    <NavBar/>
      {/* Hero Banner */}
      <HeroBanner title="Our Shop" />

      <h2 className="text-2xl font-bold my-6">Shop Details</h2>
      
      <div>
      <ProductDetails />
      </div>
       <SimilarProducts />
  
    </main>
 
  </>
);

export default Shop;
