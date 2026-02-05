import { Wrench, Car, Gauge, Battery, Thermometer, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Complete diagnostics and repairs for all vehicle makes and models.",
  },
  {
    icon: Car,
    title: "Oil Changes",
    description: "Quick, affordable oil changes with quality filters and lubricants.",
  },
  {
    icon: Gauge,
    title: "Brake Service",
    description: "Expert brake inspection, repair, and replacement services.",
  },
  {
    icon: Battery,
    title: "Battery Service",
    description: "Battery testing, charging, and replacement for reliable starts.",
  },
  {
    icon: Thermometer,
    title: "Heating & Cooling",
    description: "AC repair and heater diagnostics to keep you comfortable.",
  },
  {
    icon: Shield,
    title: "Inspections",
    description: "Comprehensive vehicle inspections for safety and peace of mind.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Full-Service Auto Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our experienced technicians handle it all with precision and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-elevated border-border/50 bg-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
