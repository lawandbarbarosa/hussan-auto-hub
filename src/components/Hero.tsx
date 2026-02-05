import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section text-primary-foreground py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm">Calgary's Trusted Auto Repair Since Day One</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Expert Auto Repair at{" "}
            <span className="text-gradient">Honest Prices</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Exceptional quality work and service at very good prices. Our experienced technicians use the latest tools and techniques to keep your vehicle running smoothly and safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 accent-glow font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 403-226-8474
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Calendar className="w-5 h-5 mr-2" />
              Get Directions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-3xl font-bold text-accent">227+</div>
                <div className="text-sm text-primary-foreground/70">Happy Customers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">4.8</div>
                <div className="text-sm text-primary-foreground/70">Star Rating</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/70">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
