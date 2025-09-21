import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  User, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Edit, 
  Search,
  AlertTriangle,
  Award,
  Star,
  Clock,
  Droplets,
  Zap,
  Shield
} from "lucide-react";

const UserDashboard = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["profile", "request", "donors", "alerts", "rewards"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Mock user data
  const user = {
    name: "John Doe",
    bloodGroup: "O+",
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    verified: true,
    donationsCount: 5,
    pointsEarned: 250,
    badgeLevel: "Gold Donor"
  };

  const mockDonors = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      bloodGroup: "A+", 
      location: "2.3 km away", 
      phone: "+1 (555) 987-6543",
      verified: true,
      lastDonation: "2 weeks ago"
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      bloodGroup: "A+", 
      location: "1.8 km away", 
      phone: "+1 (555) 456-7890",
      verified: true,
      lastDonation: "1 month ago"
    },
    { 
      id: 3, 
      name: "Emily Rodriguez", 
      bloodGroup: "A+", 
      location: "3.1 km away", 
      phone: "+1 (555) 234-5678",
      verified: false,
      lastDonation: "3 weeks ago"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "emergency",
      message: "Critical: A+ blood needed at NYC General Hospital",
      time: "2 hours ago",
      location: "NYC General Hospital"
    },
    {
      id: 2,
      type: "urgent",
      message: "Urgent: Multiple casualties, O- blood required",
      time: "5 hours ago",
      location: "St. Mary's Medical Center"
    },
    {
      id: 3,
      type: "normal",
      message: "Regular donation drive this weekend",
      time: "1 day ago",
      location: "Community Center"
    }
  ];

  const getAlertVariant = (type: string) => {
    switch (type) {
      case 'emergency': return 'destructive';
      case 'urgent': return 'secondary';
      default: return 'outline';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'emergency': return <AlertTriangle className="w-4 h-4" />;
      case 'urgent': return <Zap className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="donor" notifications={3} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}!</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="request">Request Blood</TabsTrigger>
            <TabsTrigger value="donors">Find Donors</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Personal Information
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{user.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Droplets className="w-3 h-3" />
                          <span>{user.bloodGroup}</span>
                        </Badge>
                        {user.verified && (
                          <Badge variant="outline" className="flex items-center space-x-1">
                            <Shield className="w-3 h-3 text-success" />
                            <span>Verified</span>
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 md:col-span-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donation Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{user.donationsCount}</div>
                    <p className="text-muted-foreground">Total Donations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-semibold">{user.pointsEarned}</div>
                    <p className="text-muted-foreground">Points Earned</p>
                  </div>

                  <div className="text-center">
                    <Badge className="bg-warning text-warning-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      {user.badgeLevel}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Next Badge Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

         {/* Request Blood Tab */}
<TabsContent value="request" className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Request Blood</CardTitle>
      <CardDescription>
        Submit a blood request for yourself or someone in need
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-center py-12">
        <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Blood Request Form</h3>
        <p className="text-muted-foreground mb-6">
          This feature will allow users to submit blood requests with urgency levels
        </p>

        {/* ✅ Redirect to Google Form in new tab */}
        <Button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSctxlaIWD8HPPlILLwTf4OPk6IZP8yoSTGideJl_eBDBLHA7w/viewform?usp=header",
              "_blank"
            )
          }
        >
          Create Blood Request
        </Button>
      </div>
    </CardContent>
  </Card>
</TabsContent>


          {/* Find Donors Tab */}
          <TabsContent value="donors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Find Donors
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search Filters
                  </Button>
                </CardTitle>
                <CardDescription>
                  Find verified blood donors in your area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockDonors.map((donor) => (
                  <Card key={donor.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-muted">
                              {donor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{donor.name}</h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="flex items-center space-x-1">
                                <Droplets className="w-3 h-3" />
                                <span>{donor.bloodGroup}</span>
                              </Badge>
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{donor.location}</span>
                              </span>
                              {donor.verified && (
                                <Badge variant="outline" className="flex items-center space-x-1">
                                  <Shield className="w-3 h-3 text-success" />
                                  <span>Verified</span>
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                          <Button size="sm">Contact</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Alerts</CardTitle>
                <CardDescription>
                  Stay updated on blood requests in your area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert) => (
                  <Card key={alert.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex space-x-3">
                          <div className="mt-1">{getAlertIcon(alert.type)}</div>
                          <div className="space-y-1">
                            <p className="font-medium">{alert.message}</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{alert.time}</span>
                              <span>•</span>
                              <MapPin className="w-3 h-3" />
                              <span>{alert.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant={getAlertVariant(alert.type)}>
                          {alert.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Badges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-warning-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Gold Donor</h4>
                      <p className="text-sm text-muted-foreground">5+ donations completed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Verified Hero</h4>
                      <p className="text-sm text-muted-foreground">Successfully verified donor</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Platinum Hero</h4>
                      <p className="text-sm text-muted-foreground">10+ donations (5 more needed)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-warning text-warning-foreground">1</Badge>
                      <span className="font-medium">Maria Garcia</span>
                    </div>
                    <span className="text-muted-foreground">15 donations</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">2</Badge>
                      <span className="font-medium">David Kim</span>
                    </div>
                    <span className="text-muted-foreground">12 donations</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">3</Badge>
                      <span className="font-medium">Lisa Johnson</span>
                    </div>
                    <span className="text-muted-foreground">8 donations</span>
                  </div>

                  <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">7</Badge>
                      <span className="font-medium">You</span>
                    </div>
                    <span className="text-muted-foreground">5 donations</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
