import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="hero-section text-primary-foreground">
      <div className="container py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-xl">H</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl">Hussan Auto Repair</h1>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= 4 ? "text-accent" : "text-accent/70"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium ml-1">4.8</span>
                <span className="text-sm text-primary-foreground/70">(227 reviews)</span>
              </div>
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 accent-glow">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>
        </div>
      </div>
      
      <div className="border-t border-primary-foreground/10">
        <div className="container py-2">
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>11124 36 St NE #3050, Calgary, AB</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium">Open</span>
              <span>· Closes 6 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+14032268474" className="hover:text-accent transition-colors">+1 403-226-8474</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
