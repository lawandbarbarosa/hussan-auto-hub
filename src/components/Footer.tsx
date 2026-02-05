import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-section text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground">H</span>
              </div>
              <span className="font-display font-bold text-lg">Hussan Auto Repair</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Calgary's trusted auto repair shop. Quality service at honest prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>11124 36 St NE #3050, Calgary, AB</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+14032268474" className="hover:text-accent transition-colors">
                  +1 403-226-8474
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Hussan Auto Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
