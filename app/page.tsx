import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessTypes from "@/components/BusinessTypes";
import WhyUs from "@/components/WhyUs";
import GeneratorPreview from "@/components/GeneratorPreview";
import AIEngine from "@/components/AIEngine";
import Results from "@/components/Results";
import BeforeAfter from "@/components/BeforeAfter";
import ContentShowcase from "@/components/ContentShowcase";
import ReviewForm from "@/components/ReviewForm";
import { supabase } from "@/lib/supabase";
import Footer from "@/components/Footer";

async function testConnection() {
  const { data, error } = await supabase
    .from("reviews")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);
}

testConnection();

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]" id="top">
      <Navbar />
      <Hero />
      <BusinessTypes />
      <WhyUs />
      <GeneratorPreview />
      {/* <Results /> */}
      {/* <AIEngine /> */}
      <BeforeAfter />
      {/* <ContentShowcase /> */}
      {/* <ReviewForm /> */}
      <Footer />
    </main>
  );
}