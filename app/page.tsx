import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, CheckCircle, TrendingUp, UserPlus } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Build Better Habits, One Day at a Time
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your daily habits, build streaks, and achieve your goals with our
            simple but powerful habit tracking system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <CheckCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Track Daily Habits</h3>
            <p className="text-muted-foreground">
              Create and track your daily habits with a simple and intuitive interface.
            </p>
          </Card>

          <Card className="p-6">
            <TrendingUp className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Build Streaks</h3>
            <p className="text-muted-foreground">
              Stay motivated by maintaining streaks and earning achievements.
            </p>
          </Card>

          <Card className="p-6">
            <Activity className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">
              Visualize your progress with detailed statistics and insights.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/auth/signup">
                <UserPlus className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}