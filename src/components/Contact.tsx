import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Location</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Northeast Calgary, we're here to serve all your automotive needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="relative rounded-xl overflow-hidden bg-secondary h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8!2d-113.98!3d51.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzEyLjAiTiAxMTPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hussan Auto Repair Location"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 accent-glow">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="card-elevated border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      11124 36 St NE #3050<br />
                      Calgary, AB T3N 1L3, Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+14032268474" 
                      className="text-accent hover:underline font-medium text-lg"
                    >
                      +1 403-226-8474
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us for estimates and appointments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
