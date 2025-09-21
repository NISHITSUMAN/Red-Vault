import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal Information: Name, email address, phone number, blood group, and location data",
        "Medical Information: Blood type, donation history, and relevant health information for donor matching",
        "Location Data: Current location and preferred donation locations (with your consent)",
        "Device Information: IP address, browser type, device type, and operating system",
        "Usage Data: How you interact with our platform, including pages visited and features used"
      ]
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        "Connect blood donors with recipients in emergency situations",
        "Verify donor eligibility and maintain accurate donor records",
        "Send important notifications about blood requests and donation opportunities",
        "Improve our services and user experience through analytics",
        "Comply with legal requirements and maintain platform safety",
        "Provide customer support and respond to your inquiries"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Eye,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information is shared only with verified recipients during emergency blood requests",
        "Medical professionals and hospitals may access relevant donor information with consent",
        "We may disclose information when required by law or to protect user safety",
        "Third-party service providers may access data solely to provide services on our behalf",
        "Aggregated, anonymized data may be used for research and public health initiatives"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement industry-standard encryption for all data transmission and storage",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and vulnerability assessments are conducted",
        "Multi-factor authentication is required for administrative access",
        "Data backups are encrypted and stored in secure, geographically distributed locations",
        "We maintain incident response procedures for potential security breaches"
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        "Access: Request a copy of the personal information we have about you",
        "Correction: Update or correct inaccurate personal information",
        "Deletion: Request deletion of your personal information (subject to legal requirements)",
        "Consent Withdrawal: Withdraw consent for location tracking or marketing communications",
        "Data Portability: Request your data in a portable format",
        "Opt-out: Unsubscribe from non-essential communications at any time"
      ]
    },
    {
      id: "contact-us",
      title: "Contact Information",
      icon: Mail,
      content: [
        "Data Protection Officer: privacy@lifesaver.com",
        "General Inquiries: support@lifesaver.com",
        "Mailing Address: 123 Healthcare Plaza, Medical District, NY 10001",
        "Phone: +1 (555) 123-LIFE",
        "Response Time: We respond to privacy requests within 30 days",
        "Emergency Contact: For urgent privacy concerns, call our 24/7 hotline"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your privacy is our priority in saving lives
            </p>
            <p className="text-muted-foreground">
              Last updated: September 18, 2025
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Our Commitment to Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At LifeSaver, we understand that your trust is essential when sharing personal and medical 
                information for life-saving purposes. This Privacy Policy explains how we collect, use, 
                protect, and share your information when you use our blood donation platform.
              </p>
              <p>
                We are committed to maintaining the highest standards of privacy protection while enabling 
                critical connections between blood donors and recipients during emergencies.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Important:</strong> By using LifeSaver, you consent to the collection and use of 
                  information as described in this policy. This policy applies to all users, including donors, 
                  recipients, and healthcare professionals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.id} id={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <section.icon className="w-5 h-5 text-primary" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Retention */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Active Donor Accounts:</h4>
                  <p className="text-sm text-muted-foreground">
                    Information is retained while your account is active and for 2 years after your last donation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Medical Records:</h4>
                  <p className="text-sm text-muted-foreground">
                    Donation records are kept for 10 years as required by healthcare regulations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                LifeSaver is not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children under 18. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify users of significant 
                changes through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Email notifications to registered users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Prominent notices on our platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Updated "Last modified" date at the top of this policy</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t">
            <p className="text-muted-foreground">
              Thank you for trusting LifeSaver with your information. Together, we're saving lives while 
              protecting your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;