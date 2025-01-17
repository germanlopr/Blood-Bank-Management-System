import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StatCard } from "@/components/StatCard";
import { BloodTypeChart } from "@/components/BloodTypeChart";
import { RecentDonations } from "@/components/RecentDonations";
import { Droplet, Users, Calendar, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F7FAFC]">
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger />
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to Blood Bank Management System</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Donations Today"
                value="24"
                icon={<Droplet className="h-6 w-6" />}
              />
              <StatCard
                title="Registered Donors"
                value="1,234"
                icon={<Users className="h-6 w-6" />}
              />
              <StatCard
                title="Scheduled Today"
                value="8"
                icon={<Calendar className="h-6 w-6" />}
              />
              <StatCard
                title="Critical Shortage"
                value="O-"
                icon={<AlertCircle className="h-6 w-6" />}
                className="bg-red-50"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <BloodTypeChart />
              <RecentDonations />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;