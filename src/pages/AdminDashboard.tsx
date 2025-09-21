import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  Shield, 
  Users, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Filter,
  BarChart3,
  Zap,
  Flag,
  Siren,
  Droplets
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = {
    totalDonors: 1247,
    pendingVerification: 23,
    activeRequests: 15,
    emergencyAlerts: 3,
    todayDonations: 8
  };

  const pendingDonors = [
    {
      id: 1,
      name: "Alice Cooper",
      bloodGroup: "A+",
      location: "Brooklyn, NY",
      phone: "+1 (555) 123-4567",
      email: "alice@email.com",
      submittedAt: "2 hours ago"
    },
    {
      id: 2,
      name: "Robert Wilson",
      bloodGroup: "O-",
      location: "Manhattan, NY",
      phone: "+1 (555) 987-6543",
      email: "robert@email.com",
      submittedAt: "4 hours ago"
    },
    {
      id: 3,
      name: "Jennifer Davis",
      bloodGroup: "B+",
      location: "Queens, NY",
      phone: "+1 (555) 456-7890",
      email: "jennifer@email.com",
      submittedAt: "1 day ago"
    }
  ];

  const bloodRequests = [
    {
      id: 1,
      bloodGroup: "A+",
      urgency: "Critical",
      hospital: "NYC General Hospital",
      requester: "Dr. Sarah Johnson",
      quantity: "2 units",
      timeAgo: "30 minutes ago",
      status: "Active"
    },
    {
      id: 2,
      bloodGroup: "O-",
      urgency: "Urgent",
      hospital: "St. Mary's Medical Center",
      requester: "Dr. Michael Chen",
      quantity: "4 units",
      timeAgo: "2 hours ago",
      status: "Active"
    },
    {
      id: 3,
      bloodGroup: "B-",
      urgency: "Normal",
      hospital: "Brooklyn Hospital",
      requester: "Dr. Emily Rodriguez",
      quantity: "1 unit",
      timeAgo: "5 hours ago",
      status: "Fulfilled"
    }
  ];

  const getUrgencyVariant = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'destructive';
      case 'Urgent': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Fulfilled': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" notifications={5} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span>Admin Dashboard</span>
          </h1>
          <p className="text-muted-foreground">Manage donors, requests, and system operations</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="verify">Verify Donors</TabsTrigger>
            <TabsTrigger value="requests">Blood Requests</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
            <TabsTrigger value="crisis">Crisis Mode</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDonors}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-warning">{stats.pendingVerification}</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.activeRequests}</div>
                  <p className="text-xs text-muted-foreground">Ongoing blood requests</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Emergency Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">{stats.emergencyAlerts}</div>
                  <p className="text-xs text-muted-foreground">Critical situations</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Today's Donations</CardTitle>
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">{stats.todayDonations}</div>
                  <p className="text-xs text-muted-foreground">Lives saved today</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">Donor verified: John Smith</p>
                      <p className="text-sm text-muted-foreground">5 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium">Emergency alert sent: A+ blood needed</p>
                      <p className="text-sm text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Blood request fulfilled: O- type</p>
                      <p className="text-sm text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blood Type Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {['O+', 'A+', 'B+', 'AB+', 'O-', 'A-', 'B-', 'AB-'].map((type, index) => (
                    <div key={type} className="flex items-center justify-between">
                      <span className="font-medium">{type}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={Math.max(10, 100 - index * 10)} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground w-12">
                          {Math.max(50, 400 - index * 40)}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Verify Donors Tab */}
          <TabsContent value="verify" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Donor Verification
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </CardTitle>
                <CardDescription>
                  Review and verify new donor registrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingDonors.map((donor) => (
                  <Card key={donor.id} className="border-l-4 border-l-warning">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-muted">
                              {donor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="font-semibold">{donor.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <Badge variant="outline" className="flex items-center space-x-1">
                                <Droplets className="w-3 h-3" />
                                <span>{donor.bloodGroup}</span>
                              </Badge>
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{donor.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{donor.submittedAt}</span>
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center space-x-1">
                                <Phone className="w-3 h-3" />
                                <span>{donor.phone}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Mail className="w-3 h-3" />
                                <span>{donor.email}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                          <Button size="sm" className="bg-success hover:bg-success/90">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blood Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Blood Requests Management
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                </CardTitle>
                <CardDescription>
                  Monitor and manage all blood requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {bloodRequests.map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="flex items-center space-x-1">
                              <Droplets className="w-3 h-3" />
                              <span>{request.bloodGroup}</span>
                            </Badge>
                            <Badge variant={getUrgencyVariant(request.urgency)}>
                              {request.urgency}
                            </Badge>
                            <Badge variant={getStatusVariant(request.status)}>
                              {request.status}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold">{request.hospital}</h4>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Requested by: {request.requester}</span>
                              <span>Quantity: {request.quantity}</span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{request.timeAgo}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">
                            <Zap className="w-4 h-4 mr-2" />
                            Send Alert
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>
                  System reports and spam management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Flag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reports Management</h3>
                  <p className="text-muted-foreground mb-6">
                    Review reported content and manage spam reports
                  </p>
                  <Button variant="outline">View All Reports</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Heatmap Tab */}
          <TabsContent value="heatmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donor & Request Heatmap</CardTitle>
                <CardDescription>
                  Visual representation of donor density and blood request hotspots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Heatmap</h3>
                  <p className="text-muted-foreground mb-6">
                    Geographic visualization of donor distribution and request patterns
                  </p>
                  <Button variant="outline">Load Heatmap</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crisis Mode Tab */}
          <TabsContent value="crisis" className="space-y-6">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <Siren className="w-6 h-6" />
                  <span>Crisis Mode</span>
                </CardTitle>
                <CardDescription>
                  Emergency mass notification system for critical situations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-2">Emergency Broadcast System</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use this feature only in critical emergencies to send mass notifications to all donors
                  </p>
                  <Button variant="destructive" size="lg" className="w-full">
                    <Siren className="w-4 h-4 mr-2" />
                    Activate Crisis Mode
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Mass Casualty Event
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Heart className="w-4 h-4 mr-2" />
                        Multiple Blood Types Needed
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Clock className="w-4 h-4 mr-2" />
                        Time-Critical Request
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Recent Crisis Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium">Multi-vehicle accident - Queens</p>
                        <p className="text-muted-foreground">2 days ago • 847 donors notified</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Hospital shortage - Manhattan</p>
                        <p className="text-muted-foreground">1 week ago • 1,203 donors notified</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;