import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Shield, 
  Award, 
  Zap, 
  Globe,
  Target,
  Eye,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every donation is an act of compassion that can save lives."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We maintain the highest standards of safety and verification."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast connections when every second counts in emergencies."
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a global network of life-savers."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Lives Saved" },
    { number: "5,000+", label: "Verified Donors" },
    { number: "500+", label: "Partner Hospitals" },
    { number: "24/7", label: "Emergency Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
            <Heart className="w-3 h-3 mr-1" />
            Our Mission
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Connecting Lives Through
            <span className="text-primary block">Blood Donation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LifeSaver is dedicated to bridging the gap between blood donors and those in need. 
            Our platform ensures that no life is lost due to blood shortage.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a reliable, efficient, and secure platform that connects blood donors 
                with patients in need, ensuring that life-saving blood is always available when 
                and where it's needed most.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where no life is lost due to blood shortage. We envision a global 
                community of verified donors ready to help in times of need, supported by 
                technology that makes blood donation simple and impactful.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How LifeSaver Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">1. Register & Verify</h3>
                <p className="text-muted-foreground">
                  Donors register and undergo our thorough verification process to ensure safety and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">2. Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI-powered system instantly matches blood requests with suitable donors based on location and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">3. Save Lives</h3>
                <p className="text-muted-foreground">
                  Quick connections lead to successful donations, helping save lives in critical situations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety & Quality */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Safety & Quality Assurance</CardTitle>
            <CardDescription className="text-center">
              We prioritize the safety of both donors and recipients through rigorous standards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold">Donor Verification</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Medical eligibility screening</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Identity verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Regular health updates</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Data Security</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">HIPAA compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Secure communication</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Life-Saving Community</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every drop counts. Every donor matters. Be part of a community that 
            makes the difference between life and death.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Become a Donor
            </button>
            <button className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Request Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;