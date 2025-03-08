"use client"
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';
import SimilarProducts from '@/components/SimilarProducts';
import SupportSection from '@/components/SupportSection';

const ShopDetails = () => (
  <>
   
    <main className="container mx-auto px-6">
      <HeroBanner title='Shop Details'/>
      <h2 className="text-2xl font-bold my-6">Shop Details</h2>
      <ProductDetails />
      <SimilarProducts />
      <SupportSection />
    </main>
    <Footer />
  </>
);

export default ShopDetails;
