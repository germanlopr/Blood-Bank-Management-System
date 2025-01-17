import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const recentDonations = [
  { id: 1, donor: "John Doe", bloodType: "A+", date: "2024-03-20", status: "Completed" },
  { id: 2, donor: "Jane Smith", bloodType: "O-", date: "2024-03-20", status: "Processing" },
  { id: 3, donor: "Mike Johnson", bloodType: "B+", date: "2024-03-19", status: "Completed" },
  { id: 4, donor: "Sarah Wilson", bloodType: "AB+", date: "2024-03-19", status: "Completed" },
  { id: 5, donor: "Tom Brown", bloodType: "A-", date: "2024-03-18", status: "Completed" },
];

export function RecentDonations() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Recent Donations</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-4">
          {recentDonations.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg"
            >
              <div>
                <p className="font-medium">{donation.donor}</p>
                <p className="text-sm text-muted-foreground">{donation.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                  {donation.bloodType}
                </span>
                <span className="text-sm text-muted-foreground">{donation.status}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}