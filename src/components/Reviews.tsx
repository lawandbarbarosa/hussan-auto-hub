import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Waj Nas",
    badge: "Local Guide",
    date: "2 weeks ago",
    rating: 5,
    text: "My friend Sakib sent me there to get my car fixed and I had an excellent experience at Hussan auto repair. From the moment I arrived, the staff were professional, courteous, and attentive. They took the time to clearly explain the work needed.",
  },
  {
    name: "Navid Ahmad Ahmadi",
    date: "4 weeks ago",
    rating: 5,
    text: "Hands down one of the best mechanics I've ever dealt with. Super friendly, very skilled, and genuinely cares about doing the job right. No upselling, no nonsense—just honest work and great results. I left feeling confident and satisfied.",
  },
  {
    name: "Harkirat Pandher",
    date: "1 month ago",
    rating: 5,
    text: "I brought my car in for a heater issue they couldn't fix, but they spent about 4 hours diagnosing it, tried a new thermostat, and used coolant — and still didn't charge me anything. Really appreciate their honesty and professionalism. Hard to find shops like this.",
  },
];

const highlights = [
  "Exceptional good quality work and service at a very good price.",
  "Cheaper, quicker, probably higher quality than if I did the oil change myself!",
  "Excellent Auto Service, staff is really respectful and nice.",
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <span className="font-display font-bold text-2xl">4.8</span>
            <span className="text-muted-foreground">from 227 reviews</span>
          </div>
        </div>
        
        {/* Highlight quotes */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center"
            >
              <Quote className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium">"{highlight}"</p>
            </div>
          ))}
        </div>
        
        {/* Full reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="card-elevated border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{review.name}</div>
                      {review.badge && (
                        <div className="text-xs text-muted-foreground">{review.badge}</div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= review.rating ? "text-accent fill-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            See all 227 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
