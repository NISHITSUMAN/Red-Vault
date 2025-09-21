import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { 
  Award, 
  Star, 
  Trophy, 
  Heart,
  Shield,
  Crown,
  Zap,
  Target,
  Gift,
  Medal
} from "lucide-react";

const Rewards = () => {
  const userStats = {
    totalDonations: 5,
    totalPoints: 250,
    currentLevel: "Gold Donor",
    nextLevel: "Platinum Hero",
    pointsToNext: 250,
    rank: 7
  };

  const badges = [
    {
      id: 1,
      name: "First Hero",
      description: "Complete your first donation",
      icon: Heart,
      earned: true,
      earnedDate: "2024-01-15",
      color: "success"
    },
    {
      id: 2,
      name: "Verified Hero",
      description: "Successfully complete verification process",
      icon: Shield,
      earned: true,
      earnedDate: "2024-01-16",
      color: "success"
    },
    {
      id: 3,
      name: "Bronze Donor",
      description: "Complete 2 donations",
      icon: Medal,
      earned: true,
      earnedDate: "2024-02-20",
      color: "warning"
    },
    {
      id: 4,
      name: "Silver Donor",
      description: "Complete 3 donations",
      icon: Award,
      earned: true,
      earnedDate: "2024-04-10",
      color: "secondary"
    },
    {
      id: 5,
      name: "Gold Donor",
      description: "Complete 5 donations",
      icon: Trophy,
      earned: true,
      earnedDate: "2024-08-15",
      color: "warning"
    },
    {
      id: 6,
      name: "Platinum Hero",
      description: "Complete 10 donations",
      icon: Crown,
      earned: false,
      color: "muted"
    },
    {
      id: 7,
      name: "Diamond Legend",
      description: "Complete 20 donations",
      icon: Star,
      earned: false,
      color: "muted"
    },
    {
      id: 8,
      name: "Emergency Responder",
      description: "Respond to 3 emergency requests",
      icon: Zap,
      earned: false,
      color: "muted"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Maria Garcia", donations: 15, points: 750, avatar: "MG" },
    { rank: 2, name: "David Kim", donations: 12, points: 600, avatar: "DK" },
    { rank: 3, name: "Lisa Johnson", donations: 8, points: 400, avatar: "LJ" },
    { rank: 4, name: "Carlos Rodriguez", donations: 7, points: 350, avatar: "CR" },
    { rank: 5, name: "Anna Chen", donations: 6, points: 300, avatar: "AC" },
    { rank: 6, name: "Mike Wilson", donations: 6, points: 300, avatar: "MW" },
    { rank: 7, name: "You", donations: 5, points: 250, avatar: "JD", isCurrentUser: true },
    { rank: 8, name: "Sarah Miller", donations: 4, points: 200, avatar: "SM" },
  ];

  const challenges = [
    {
      id: 1,
      name: "Weekend Warrior",
      description: "Donate blood on a weekend",
      reward: "50 points",
      progress: 0,
      total: 1,
      icon: Target
    },
    {
      id: 2,
      name: "Monthly Hero",
      description: "Donate once every month for 3 months",
      reward: "100 points + Special Badge",
      progress: 2,
      total: 3,
      icon: Award
    },
    {
      id: 3,
      name: "Emergency Response",
      description: "Respond to 2 emergency requests",
      reward: "75 points",
      progress: 1,
      total: 2,
      icon: Zap
    }
  ];

  const rewards = [
    {
      id: 1,
      name: "Health Checkup Voucher",
      cost: 500,
      description: "Free comprehensive health checkup at partner clinics",
      available: false
    },
    {
      id: 2,
      name: "Gift Card - $25",
      cost: 300,
      description: "Amazon gift card worth $25",
      available: false
    },
    {
      id: 3,
      name: "Blood Donor T-Shirt",
      cost: 100,
      description: "Official LifeSaver donor t-shirt",
      available: true
    },
    {
      id: 4,
      name: "Certificate of Recognition",
      cost: 50,
      description: "Digital certificate recognizing your contribution",
      available: true
    }
  ];

  const getRankBadgeVariant = (rank: number) => {
    if (rank === 1) return "default";
    if (rank === 2) return "secondary";
    if (rank === 3) return "outline";
    return "outline";
  };

  const getBadgeIcon = (IconComponent: any, earned: boolean) => {
    return <IconComponent className={`w-6 h-6 ${earned ? '' : 'opacity-50'}`} />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="donor" notifications={3} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Rewards & Achievements</h1>
          <p className="text-muted-foreground">
            Track your progress, earn badges, and redeem rewards for your contributions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Your Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{userStats.totalDonations}</div>
                    <p className="text-muted-foreground">Total Donations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning">{userStats.totalPoints}</div>
                    <p className="text-muted-foreground">Points Earned</p>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-warning text-warning-foreground">
                      {userStats.currentLevel}
                    </Badge>
                    <p className="text-muted-foreground mt-1">Current Level</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress to {userStats.nextLevel}</span>
                    <span>{userStats.pointsToNext} points to go</span>
                  </div>
                  <Progress value={50} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Badges & Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-success" />
                  <span>Badges & Achievements</span>
                </CardTitle>
                <CardDescription>
                  Collect badges by completing donations and helping save lives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div 
                      key={badge.id} 
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        badge.earned ? 'bg-muted/30' : 'opacity-60'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        badge.earned ? `bg-${badge.color}` : 'bg-muted'
                      }`}>
                        {getBadgeIcon(badge.icon, badge.earned)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{badge.name}</h4>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                        {badge.earned && badge.earnedDate && (
                          <p className="text-xs text-muted-foreground">
                            Earned: {new Date(badge.earnedDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      {badge.earned && (
                        <Badge variant="outline" className="text-success border-success">
                          Earned
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Active Challenges</span>
                </CardTitle>
                <CardDescription>
                  Complete challenges to earn bonus points and special rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <challenge.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">{challenge.name}</h4>
                      </div>
                      <Badge variant="outline">{challenge.reward}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{challenge.progress}/{challenge.total}</span>
                      </div>
                      <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rewards Store */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-primary" />
                  <span>Rewards Store</span>
                </CardTitle>
                <CardDescription>
                  Redeem your points for valuable rewards and recognition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {rewards.map((reward) => (
                    <div key={reward.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{reward.name}</h4>
                        <Badge variant={reward.available ? "default" : "secondary"}>
                          {reward.cost} pts
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                      <Button 
                        size="sm" 
                        variant={reward.available ? "default" : "secondary"}
                        disabled={!reward.available}
                        className="w-full"
                      >
                        {reward.available ? "Redeem" : "Need More Points"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span>Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.slice(0, 8).map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between ${
                      user.isCurrentUser ? 'bg-muted/50 p-2 rounded' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Badge variant={getRankBadgeVariant(user.rank)}>
                        {user.rank}
                      </Badge>
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      <span className={`text-sm ${user.isCurrentUser ? 'font-semibold' : ''}`}>
                        {user.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{user.donations}</div>
                      <div className="text-xs text-muted-foreground">{user.points} pts</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Points Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Points Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Donations (5 × 50)</span>
                  <span className="font-medium">250 pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Verification Bonus</span>
                  <span className="font-medium">50 pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Referral Bonus</span>
                  <span className="font-medium">25 pts</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total Points</span>
                  <span className="text-primary">325 pts</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;