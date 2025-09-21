import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import { User, Mail, Phone, Lock, Eye, EyeOff, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// ✅ Import storage
import { saveUser, isEmailTaken } from "./storage";

// Validation schema
const schema = z
  .object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().regex(/^\d{10,15}$/, "Phone must be 10–15 digits"),
    bloodGroup: z.string().min(1, "Select a blood group"),
    location: z.string().min(1, "Select your city"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms & Privacy Policy" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const cities = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
  ];

  const onSubmit = (data) => {
    // Check if email already exists
    if (isEmailTaken(data.email)) {
      toast({
        title: "❌ Email Already Registered",
        description: "Please login or use a different email.",
        variant: "destructive",
      });
      return;
    }

    // Save user
    saveUser({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      bloodGroup: data.bloodGroup,
      location: data.location,
      password: data.password,
    });

    toast({
      title: "✅ Registration Successful",
      description: `Welcome ${data.fullName}! You can now login.`,
    });

    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Join Red Vault</h1>
            <p className="text-muted-foreground mt-2">
              Register to become a hero and help save lives
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>
                  Fill out the form below to join our community
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="John Doe" className="pl-10" {...register("fullName")} />
                  </div>
                  {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label>Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="your@email.com" className="pl-10" {...register("email")} />
                  </div>
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label>Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="tel" placeholder="1234567890" className="pl-10" {...register("phone")} />
                  </div>
                  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label>Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" {...register("password")} />
                    <Button type="button" variant="ghost" size="sm" className="absolute inset-y-0 right-0 pr-3" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label>Confirm Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" {...register("confirmPassword")} />
                    <Button type="button" variant="ghost" size="sm" className="absolute inset-y-0 right-0 pr-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" {...register("terms")} />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <Link to="/terms" className="text-primary">Terms</Link> and <Link to="/privacy-policy" className="text-primary">Privacy Policy</Link>
                  </Label>
                </div>
                {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full" size="lg">Create Account</Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
