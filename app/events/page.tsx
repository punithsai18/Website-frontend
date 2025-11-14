import Events from "@/components/events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Intel IoT Club",
  description:
    "Explore the latest workshops, sessions, hackathons, and activities organised by the Intel IoT Club.",
};

export default function EventsPage() {
  return (
    <main className="flex-1 container mx-auto px-4 lg:px-8 xl:px-12 py-8 lg:py-12 xl:py-16">
      <section>
        <h1 className="text-3xl font-semibold mb-6">Our Events</h1>
        <Events />
      </section>
    </main>
  );
}
