import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-blood-donation.jpg";
import { 
  Heart, 
  Users, 
  MapPin, 
  Clock, 
  Shield, 
  Phone,
  Award,
  Zap,
  Globe,
  Star
} from "lucide-react";

const Landing = () => {
  const stats = [
    { number: "500+", label: "Registered Donors", icon: Users },
    { number: "200+", label: "Lives Saved", icon: Heart },
    { number: "50+", label: "Hospitals Connected", icon: MapPin },
    { number: "24/7", label: "Emergency Support", icon: Clock },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Matching",
      description: "AI-powered donor matching based on blood type, location, and availability."
    },
    {
      icon: Shield,
      title: "Verified Donors",
      description: "All donors are verified through our rigorous screening process."
    },
    {
      icon: Phone,
      title: "Emergency Alerts",
      description: "Real-time emergency notifications for critical blood requests."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected network of blood banks and hospitals worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
                  <Heart className="w-3 h-3 mr-1" />
                  Be a Hero Today
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Find Blood Donors
                  <span className="text-primary block">Instantly</span>
                  <span className="text-2xl lg:text-4xl text-muted-foreground block mt-2">
                    Save Lives. Be a Hero.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Connect with verified blood donors in your area within minutes. 
                  Join our community of life-savers and make a difference today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/register">
                    <Users className="w-4 h-4 mr-2" />
                    Register as Donor
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link to="/request-blood">
                    <Heart className="w-4 h-4 mr-2" />
                    Request Blood Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage}
                  alt="Blood donation heroes saving lives"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating stats card */}
              <Card className="absolute -bottom-6 -left-6 bg-background shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">200+ Lives Saved</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Red Vault?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets humanitarian mission. Our platform ensures 
              rapid, reliable, and secure blood donation connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Save Lives?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of heroes who are already making a difference. 
              Your blood donation could be someone's second chance at life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                Start Your Hero Journey
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/emergency">
                Emergency Request
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Red Vault</span>
              </div>
              <p className="text-muted-foreground">
                Connecting blood donors with those in need, one life at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary">About Us</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
                <Link to="/privacy" className="block text-muted-foreground hover:text-primary">Privacy Policy</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">For Donors</h4>
              <div className="space-y-2">
                <Link to="/register" className="block text-muted-foreground hover:text-primary">Register</Link>
                <Link to="/dashboard" className="block text-muted-foreground hover:text-primary">Dashboard</Link>
                <Link to="/rewards" className="block text-muted-foreground hover:text-primary">Rewards</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Emergency</h4>
              <div className="space-y-2">
                <Link to="/request-blood" className="block text-muted-foreground hover:text-primary">Request Blood</Link>
                <Link to="/find-donors" className="block text-muted-foreground hover:text-primary">Find Donors</Link>
                <p className="text-muted-foreground">24/7 Hotline: 1-800-BLOOD</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Red Vault. All rights reserved. Saving lives together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;