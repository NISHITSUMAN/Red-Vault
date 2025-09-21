import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  MapPin, 
  Phone, 
  User,
  AlertTriangle,
  Zap,
  Clock,
  Hospital,
  Droplets
} from "lucide-react";

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    urgencyLevel: "",
    hospitalName: "",
    hospitalAddress: "",
    contactNumber: "",
    unitsNeeded: "",
    medicalCondition: "",
    additionalNotes: "",
    isForSelf: false
  });

  const { toast } = useToast();

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgencyLevels = [
    { value: "critical", label: "Critical", icon: AlertTriangle, color: "destructive" },
    { value: "urgent", label: "Urgent", icon: Zap, color: "warning" },
    { value: "normal", label: "Normal", icon: Clock, color: "success" }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.bloodGroup || !formData.urgencyLevel || 
        !formData.hospitalName || !formData.contactNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Blood Request Submitted",
      description: "Your request has been sent to nearby donors. You'll receive updates via SMS/Email.",
    });

    // Reset form
    setFormData({
      patientName: "",
      bloodGroup: "",
      urgencyLevel: "",
      hospitalName: "",
      hospitalAddress: "",
      contactNumber: "",
      unitsNeeded: "",
      medicalCondition: "",
      additionalNotes: "",
      isForSelf: false
    });
  };

  const getUrgencyIcon = (urgencyLevel: string) => {
    const urgency = urgencyLevels.find(u => u.value === urgencyLevel);
    if (!urgency) return null;
    const Icon = urgency.icon;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="donor" notifications={3} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Request Blood</h1>
          <p className="text-muted-foreground">
            Submit a blood request and connect with donors instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Blood Request Form</span>
                </CardTitle>
                <CardDescription>
                  Fill out the details below to submit your blood request
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Patient Information</h3>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="isForSelf"
                        checked={formData.isForSelf}
                        onCheckedChange={(checked) => handleInputChange("isForSelf", checked as boolean)}
                      />
                      <Label htmlFor="isForSelf">This request is for myself</Label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patientName">Patient Name *</Label>
                        <Input
                          id="patientName"
                          placeholder="Enter patient's full name"
                          value={formData.patientName}
                          onChange={(e) => handleInputChange("patientName", e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group *</Label>
                        <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange("bloodGroup", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            {bloodGroups.map(group => (
                              <SelectItem key={group} value={group}>
                                <div className="flex items-center space-x-2">
                                  <Droplets className="w-4 h-4" />
                                  <span>{group}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="unitsNeeded">Units Needed</Label>
                        <Input
                          id="unitsNeeded"
                          type="number"
                          placeholder="Number of units"
                          value={formData.unitsNeeded}
                          onChange={(e) => handleInputChange("unitsNeeded", e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number *</Label>
                        <Input
                          id="contactNumber"
                          placeholder="+1 (555) 123-4567"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Urgency Level */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Urgency Level *</h3>
                    <RadioGroup 
                      value={formData.urgencyLevel} 
                      onValueChange={(value) => handleInputChange("urgencyLevel", value)}
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        {urgencyLevels.map((urgency) => (
                          <div key={urgency.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={urgency.value} id={urgency.value} />
                            <Label 
                              htmlFor={urgency.value} 
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <urgency.icon className="w-4 h-4" />
                              <span>{urgency.label}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Hospital Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Hospital/Location Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hospitalName">Hospital/Clinic Name *</Label>
                      <Input
                        id="hospitalName"
                        placeholder="Enter hospital or clinic name"
                        value={formData.hospitalName}
                        onChange={(e) => handleInputChange("hospitalName", e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hospitalAddress">Hospital Address</Label>
                      <Input
                        id="hospitalAddress"
                        placeholder="Enter complete address"
                        value={formData.hospitalAddress}
                        onChange={(e) => handleInputChange("hospitalAddress", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="medicalCondition">Medical Condition</Label>
                      <Input
                        id="medicalCondition"
                        placeholder="Brief description of medical condition"
                        value={formData.medicalCondition}
                        onChange={(e) => handleInputChange("medicalCondition", e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Any additional information or special requirements"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Blood Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span>Important Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Before Requesting:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Verify blood group with medical documents</li>
                    <li>• Contact hospital blood bank first</li>
                    <li>• Ensure you have proper medical authorization</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Response Time:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Critical: Within 30 minutes</li>
                    <li>• Urgent: Within 2 hours</li>
                    <li>• Normal: Within 24 hours</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Emergency Hotline</span>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    911
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Blood Bank Locator</span>
                  <Button variant="outline" size="sm">
                    <Hospital className="w-4 h-4 mr-2" />
                    Find
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">24/7 Support</span>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;