"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 🔹 Animation variant for fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function HackathonPage() {
  return (
    <motion.main
      className="flex-1 flex flex-col items-center justify-start bg-background text-foreground py-8 lg:py-12 xl:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      <section className="w-full max-w-6xl mx-auto px-4 lg:px-8 xl:px-12">
        <div className="bg-card rounded-2xl shadow-md border p-4 lg:p-6 xl:p-8">
          {/* Hackathon Name */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-background/80 text-center leading-tight">
              SmartCityX: The AIoT Hackathon
            </div>
          </div>

          {/* Top: Banner + Info */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
            {/* Banner/Pic */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/hacksmartX.png"
                alt="Hackathon banner"
                width={800}
                height={450}
                className="object-contain w-full h-56 lg:h-72 xl:h-80 rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>

            {/* Date, Location, Status */}
            <div className="flex flex-col gap-3 lg:gap-4 lg:w-72 xl:w-80">
              <div className="px-4 lg:px-5 py-2 lg:py-3 rounded-md bg-background/80 text-sm lg:text-base">
                Registration Closing:{" "}
                <span className="font-semibold">July 15 at 11:59 PM</span>
              </div>
              <div className="px-4 lg:px-5 py-2 lg:py-3 rounded-md bg-background/80 text-sm lg:text-base">
                <span className="font-semibold">
                  Location: Amrita Vishwa Vidyapeetham, Coimbatore
                </span>
              </div>
              <div className="px-4 lg:px-5 py-2 lg:py-3 rounded-md bg-background/80 text-sm lg:text-base">
                Status: <span className="font-semibold text-green-500">Open</span>
              </div>
              <Link
                href="https://forms.office.com/r/ddTi3K1yNR"
                className="mt-2 w-full block"
              >
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition">
                  Register Now
                </button>
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-4">
            <div className="w-full px-4 py-2 rounded-md bg-background/80 text-2xl font-semibold text-center">
              Build Smarter. Code Better. Hack the Future.
            </div>
          </div>

          {/* Description */}
          <div className="w-full min-h-[120px] px-4 py-6 rounded-xl bg-background/80 text-lg flex flex-col gap-6 shadow-md border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">
              Why Join SmartCityX?
            </div>
            <p>
              Join us for{" "}
              <span className="font-semibold text-primary">SmartCityX</span>, an{" "}
              <span className="font-semibold">AIoT-powered hackathon</span> that
              invites innovators to shape the cities of tomorrow. This event
              challenges participants to deploy{" "}
              <span className="font-semibold">1D or 2D AIoT models</span> on
              ESP32 boards to solve real-world problems in the Smart City
              domain—ranging from child care, healthcare, to urban
              infrastructure.
            </p>
            <p>
              Whether you're a budding engineer or a seasoned techie, this is
              your chance to ideate, simulate, and build deployed hardware
              solutions that bring real change.
            </p>

            <div>
              <div className="text-xl font-semibold text-primary mb-1">
                What’s the Challenge?
              </div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Build and deploy either a:</li>
                <ul className="list-[circle] pl-6">
                  <li>
                    <span className="font-semibold">1D Model</span> (Linear
                    sensor-based solution)
                  </li>
                  <li>
                    <span className="font-semibold">2D Model</span> (Multi-sensor
                    or multidimensional system)
                  </li>
                </ul>
                <li>
                  All solutions must run on the{" "}
                  <span className="font-semibold">ESP32</span> platform.
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xl font-semibold text-primary mb-1">
                Phases of the Hackathon
              </div>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Ideation Phase:</span> Submit
                  your team’s idea — problem statement and solution.
                </li>
                <li>
                  <span className="font-semibold">Prototyping Phase:</span> Use{" "}
                  <span className="font-semibold">Wokwi simulator</span> to
                  demonstrate a basic concept.
                </li>
                <li>
                  <span className="font-semibold">Deployment Phase:</span>{" "}
                  Purchase hardware and begin hands-on implementation.
                </li>
              </ol>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-muted/60 rounded-lg p-4 border border-primary/10">
                <div className="font-semibold text-primary">Team Size</div>
                <div>3 to 4 members per team</div>
                <div className="text-muted-foreground text-sm">
                  Collaborate, brainstorm, and conquer the urban challenges!
                </div>
              </div>
              <div className="flex-1 bg-muted/60 rounded-lg p-4 border border-primary/10">
                <div className="font-semibold text-primary">
                  What’s at Stake?
                </div>
                <ul className="list-disc pl-5">
                  <li>
                    Top 5 teams →{" "}
                    <span className="font-semibold">Core Members</span> of the
                    IoT Club
                  </li>
                  <li>
                    Next 5 teams →{" "}
                    <span className="font-semibold">Trainees</span> in the IoT
                    Club
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-xl font-semibold text-primary mb-1">
                Who Can Join?
              </div>
              <div>
                <span className="font-semibold">
                  Open exclusively to 2nd and 3rd-year students
                </span>{" "}
                who are tech enthusiasts, hardware hackers, and IoT builders.
              </div>
              <div className="mt-2">
                If you’re passionate about solving Smart City challenges using
                AIoT and ESP32, this hackathon is for you.
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
