import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  MapPin, 
  Phone, 
  Filter,
  Droplets,
  Shield,
  Map
} from "lucide-react";

const FindDonors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const mockDonors = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      bloodGroup: "A+", 
      location: "Manhattan, NY",
      distance: "2.3 km",
      phone: "+1 (555) 987-6543",
      verified: true,
      lastDonation: "2 weeks ago",
      availability: "Available"
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      bloodGroup: "O+", 
      location: "Brooklyn, NY",
      distance: "1.8 km",
      phone: "+1 (555) 456-7890",
      verified: true,
      lastDonation: "1 month ago",
      availability: "Available"
    },
    { 
      id: 3, 
      name: "Emily Rodriguez", 
      bloodGroup: "B+", 
      location: "Queens, NY",
      distance: "3.1 km",
      phone: "+1 (555) 234-5678",
      verified: false,
      lastDonation: "3 weeks ago",
      availability: "Busy"
    },
    { 
      id: 4, 
      name: "David Wilson", 
      bloodGroup: "AB+", 
      location: "Manhattan, NY",
      distance: "0.8 km",
      phone: "+1 (555) 345-6789",
      verified: true,
      lastDonation: "1 week ago",
      availability: "Available"
    },
    { 
      id: 5, 
      name: "Lisa Martinez", 
      bloodGroup: "O-", 
      location: "Bronx, NY",
      distance: "4.2 km",
      phone: "+1 (555) 678-9012",
      verified: true,
      lastDonation: "4 days ago",
      availability: "Available"
    }
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const locations = ["Manhattan, NY", "Brooklyn, NY", "Queens, NY", "Bronx, NY", "Staten Island, NY"];

  const filteredDonors = mockDonors.filter(donor => {
    const matchesSearch = searchQuery === "" || 
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBloodGroup = selectedBloodGroup === "" || donor.bloodGroup === selectedBloodGroup;
    const matchesLocation = selectedLocation === "" || donor.location === selectedLocation;
    
    return matchesSearch && matchesBloodGroup && matchesLocation;
  });

  const getAvailabilityVariant = (availability: string) => {
    return availability === "Available" ? "default" : "secondary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="donor" notifications={3} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Blood Donors</h1>
          <p className="text-muted-foreground">
            Connect with verified blood donors in your area
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Search Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Blood Groups</SelectItem>
                  {bloodGroups.map(group => (
                    <SelectItem key={group} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center space-x-2">
                <Map className="w-4 h-4" />
                <span>Map View</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Found {filteredDonors.length} donor{filteredDonors.length !== 1 ? 's' : ''}
            </h2>
            <Button variant="outline" size="sm">
              Sort by Distance
            </Button>
          </div>

          <div className="grid gap-4">
            {filteredDonors.map((donor) => (
              <Card key={donor.id} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-muted text-lg">
                          {donor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold">{donor.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="flex items-center space-x-1">
                            <Droplets className="w-3 h-3" />
                            <span>{donor.bloodGroup}</span>
                          </Badge>
                          {donor.verified && (
                            <Badge variant="outline" className="flex items-center space-x-1">
                              <Shield className="w-3 h-3 text-success" />
                              <span>Verified</span>
                            </Badge>
                          )}
                          <Badge variant={getAvailabilityVariant(donor.availability)}>
                            {donor.availability}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{donor.location} • {donor.distance}</span>
                          </span>
                          <span>Last donation: {donor.lastDonation}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </Button>
                      <Button size="sm">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDonors.length === 0 && (
            <Card>
              <CardContent className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No donors found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search filters or expanding your search area
                </p>
                <Button variant="outline">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDonors;