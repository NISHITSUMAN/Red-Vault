import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodGroup: string;
  city: string;
  createdAt: string;
};

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement | null>(null);

  let toastFn: (opts: { title?: string; description?: string }) => void = (opts) =>
    alert(`${opts.title || ""}${opts.description ? " - " + opts.description : ""}`);
  try {
    const toastHook = useToast();
    if (toastHook && typeof toastHook.toast === "function") {
      toastFn = toastHook.toast;
    }
  } catch (e) {}

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState(BLOOD_GROUPS[0]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const getStoredUsers = (): User[] => {
    try {
      const raw = localStorage.getItem("rv_users");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed as User[];
    } catch (e) {
      return [];
    }
  };

  const setStoredUsers = (users: User[]) => {
    try {
      localStorage.setItem("rv_users", JSON.stringify(users));
    } catch (e) {}
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !city.trim()) {
      toastFn({ title: "Missing fields", description: "Please complete all fields." });
      return;
    }
    if (!isValidEmail(email.trim())) {
      toastFn({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }
    const digits = phone.replace(/[^0-9]/g, "");
    if (digits.length < 6) {
      toastFn({ title: "Invalid phone", description: "Please enter a valid phone number." });
      return;
    }

    setLoading(true);
    try {
      const newUser: User = {
        id: String(Date.now()),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        bloodGroup,
        city: city.trim(),
        createdAt: new Date().toISOString(),
      };

      const users = getStoredUsers();
      if (users.some((u) => u.email.toLowerCase() === newUser.email.toLowerCase())) {
        toastFn({ title: "Account exists", description: "An account with this email already exists." });
        setLoading(false);
        return;
      }

      users.push(newUser);
      setStoredUsers(users);
      localStorage.setItem("rv_current_user", JSON.stringify(newUser));

      toastFn({ title: "Account created", description: `Welcome, ${newUser.name}! Redirecting to dashboard...` });

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (err) {
      console.error(err);
      toastFn({ title: "Error", description: "Could not create account." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen flex items-center justify-center p-6 bg-slate-50"
    >
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Create your Red Vault account</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Simple demo registration (dummy data only)</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name-input">Full name</Label>
              <Input
                id="name-input"
                ref={nameRef}
                placeholder="e.g. Saanvi Suman"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="email-input">Email</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone-input">Phone</Label>
                <Input
                  id="phone-input"
                  placeholder="98765xxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="blood-select">Blood Group</Label>
                <Select
                  value={bloodGroup}
                  onValueChange={setBloodGroup}
                >
                  {BLOOD_GROUPS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="city-input">City</Label>
              <Input
                id="city-input"
                placeholder="Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Creating account..." : "Create account"}
              </Button>

              <Button type="button" variant="ghost" onClick={() => navigate("/login")} className="underline">
                Already have an account?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RegisterPage;
