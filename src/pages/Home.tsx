import { Link } from 'react-router-dom'; // Use React Router's Link
import { Button } from "@/components/ui/button";
import Features from '@/components/Features';
import FAQ from '@/components/Faq';
import Contact from '@/components/Contact';

export default function Hero() {
  return (
  <>
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
        Revolutionize Your Workflow
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
        Our SaaS platform empowers teams to collaborate, innovate, and achieve more. Experience the future of productivity today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild size="lg">
          <Link to="/#contact">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/#features">Learn More</Link>
        </Button>
      </div>
    </section>
    <Features />
    <FAQ />
    <Contact />
  </>
  );
}
