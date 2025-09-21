import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Heart,
  AlertTriangle,
  Users,
  Shield
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "24/7 emergency blood request support",
      contact: "1-800-BLOOD (1-800-25663)",
      type: "emergency"
    },
    {
      icon: Mail,
      title: "General Support",
      description: "For general inquiries and support",
      contact: "support@Red Vault.com",
      type: "general"
    },
    {
      icon: Shield,
      title: "Medical Team",
      description: "For medical questions and verification",
      contact: "medical@Red Vault.com",
      type: "medical"
    }
  ];

  const offices = [
    {
      city: "New York HQ",
      address: "123 Health Street, Manhattan, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Los Angeles",
      address: "456 Wellness Ave, Los Angeles, CA 90210",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      city: "Chicago",
      address: "789 Care Boulevard, Chicago, IL 60601",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri: 9AM-6PM"
    }
  ];

  const faqItems = [
    {
      question: "How do I register as a blood donor?",
      answer: "Simply click on 'Register as Donor' on our homepage and fill out the verification form. Our medical team will review your application within 24 hours."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use end-to-end encryption and follow HIPAA compliance standards to protect your personal and medical information."
    },
    {
      question: "How quickly can I find a donor in an emergency?",
      answer: "Our AI-powered matching system can connect you with verified donors in your area within minutes. Emergency requests are prioritized."
    },
    {
      question: "What blood types are most needed?",
      answer: "O- is the universal donor type and is always in high demand. However, all blood types are needed. You can check current needs on your dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
            <MessageSquare className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            We're Here to
            <span className="text-primary block">Help You Save Lives</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need support? Our dedicated team is available 24/7 
            to assist with emergencies and provide guidance.
          </p>
        </div>

        {/* Emergency Banner */}
        <Card className="mb-12 border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-destructive/10 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-destructive">Medical Emergency?</h3>
                  <p className="text-muted-foreground">For urgent blood requests, call our emergency hotline immediately</p>
                </div>
              </div>
              <Button variant="destructive" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 1-800-BLOOD
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="medical">Medical Question</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe how we can help you..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full" size="lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        method.type === 'emergency' 
                          ? 'bg-destructive/10' 
                          : 'bg-primary/10'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          method.type === 'emergency' 
                            ? 'text-destructive' 
                            : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                        <p className="font-medium">{method.contact}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Emergency Hotline: 24/7</p>
                    <p className="text-sm text-muted-foreground">Always available for urgent requests</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Support Team: Mon-Fri, 9AM-6PM EST</p>
                    <p className="text-sm text-muted-foreground">General inquiries and technical support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{office.address}</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-12">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of heroes who are already saving lives in their communities. 
            Your contribution can be someone's second chance at life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Register as Donor
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request Blood Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;