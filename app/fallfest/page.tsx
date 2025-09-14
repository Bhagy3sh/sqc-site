"use client";

import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// === Section components ===

function HomeHero() {
  return (
    <section className="py-24 text-center">
      <SectionHeading title="IBM Qiskit Fall Fest 2025" />
      <p className="mb-3 text-lg font-semibold">October – November 2025</p>
      <p className="mb-8 text-gray-300 max-w-3xl mx-auto">
        University campuses worldwide & virtual. Join a global celebration of 100 years of quantum innovation including workshops, hackathons, challenges, guest talks, and socials.
      </p>
      <Button asChild className="bg-blue-600 px-10 py-4 text-lg font-semibold shadow-lg hover:bg-blue-700">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Register Now">
          Register Now
        </a>
      </Button>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="About Qiskit Fall Fest" />
      <Card>
        <CardContent>
          <p className="text-gray-300 leading-relaxed text-lg">
            Qiskit Fall Fest is an annual student-driven quantum computing event series. In 2025, it celebrates a century of quantum science and invites participants of all levels for hands-on workshops, challenges, insightful talks, and community building.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="Schedule / Program" />
      <Card>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg leading-relaxed">
            <li>Kickoff sessions in October with campus-specific schedules</li>
            <li>Intro and advanced Quantum workshops</li>
            <li>Coding challenges culminating in a Hackathon</li>
            <li>Guest speaker sessions, awards, and social events</li>
          </ul>
          <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold">
            <a href="#" download aria-label="Download Schedule PDF">
              Download Full Schedule (PDF)
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

function WorkshopsSection() {
  const workshops = [
    { name: "Workshop 1: Qiskit 101", audience: "Beginner" },
    { name: "Workshop 2: Intro to Quantum Mechanics", audience: "Beginner-Friendly" },
    { name: "Workshop 3: Quantum Optimization", audience: "Intermediate+" },
    { name: "Workshop 4: Coding Challenges", audience: "All Levels" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="Workshops & Challenges" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {workshops.map(({ name, audience }, i) => (
          <Card key={i} className="bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
              <p className="text-gray-400 mb-4">Audience: {audience}</p>
              <Button asChild variant="outline" size="sm" className="px-4 py-2">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`Open notebook for ${name}`}>
                  Open Notebook
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SpeakersSection() {
  const speakers = [
    {
      name: "Speaker 1",
      bio: "Expert in quantum algorithms and education.",
      session: "#",
    },
    {
      name: "Speaker 2",
      bio: "Researcher specializing in quantum cryptography.",
      session: "#",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="Speakers & Mentors" />
      <div className="space-y-8">
        {speakers.map(({ name, bio, session }, i) => (
          <Card key={i} className="bg-gray-900 shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-bold text-white">{name}</h3>
              <p className="my-3 text-gray-400">{bio}</p>
              <Button asChild variant="ghost" size="sm" className="px-4 py-2">
                <a href={session} target="_blank" rel="noopener noreferrer" aria-label={`View session of ${name}`}>
                  Session Details
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function RegisterSection() {
  return (
    <section className="max-w-3xl mx-auto text-center px-6 sm:px-12 py-16">
      <SectionHeading title="Register" />
      <p className="mb-10 text-gray-300 text-lg leading-relaxed">
        Register now to join IBM Qiskit Fall Fest 2025. Be part of this exciting global quantum computing event.
      </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-xl font-bold shadow-lg">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Register for Qiskit Fall Fest">
          Register Now
        </a>
      </Button>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="Resources" />
      <Card>
        <CardContent>
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg leading-relaxed">
            <li>
              Canonical GitHub:{" "}
              <a href="#" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                qiskit-community/fall-fest (placeholder)
              </a>{" "}
              (check for 2025 updates)
            </li>
            <li>Access workshop notebooks, slides, and recordings from campus events.</li>
            <li>Version and date info included in the main README.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

function TeamSponsorsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12 text-center">
      <SectionHeading title="Team, Organizers, & Sponsors" />
      <Card>
        <CardContent>
          <ul className="list-disc list-inside mb-8 text-gray-300 max-w-lg mx-auto">
            <li>Students & Quantum Club Leaders worldwide</li>
            <li>IBM Quantum</li>
            <li>University Partners</li>
          </ul>
          <div className="flex justify-center space-x-12 mb-8">
            <img src="/logos/ibm-quantum.svg" alt="IBM Quantum Logo" className="h-12" />
            <img src="/logos/university.svg" alt="University Partner Logo" className="h-12" />
          </div>
          <p className="text-gray-400">
            Contact:{" "}
            <a href="mailto:quantum@us.ibm.com" className="text-blue-400 underline">
              quantum@us.ibm.com
            </a>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

function CodeOfConductFooter() {
  return (
    <footer className="text-center py-6 border-t border-gray-700 mt-20 text-gray-500 text-sm">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 underline"
        aria-label="Code of Conduct and Safety Guidelines"
      >
        Code of Conduct & Safety Guidelines
      </a>
    </footer>
  );
}

function VenueTravelSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <SectionHeading title="Contact / Venue / Travel" />
      <Card>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed text-lg">
            <li>
              <strong>Contact:</strong> Reach out via your university Quantum Club or at{" "}
              <a href="mailto:quantum@us.ibm.com" className="text-blue-400 underline" aria-label="Email quantum at us.ibm.com">
                quantum@us.ibm.com
              </a>
            </li>
            <li>
              <strong>Venues:</strong> Events take place at university campuses worldwide and online.
            </li>
            <li>
              <strong>Travel info:</strong> Provided by campus organizers.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

// === Default exported page ===

export default function FallFestPage() {
  return (
    <main className="container mx-auto p-6 space-y-12">
      <HomeHero />
      <AboutSection />
      <ScheduleSection />
      <WorkshopsSection />
      <SpeakersSection />
      <RegisterSection />
      <ResourcesSection />
      <TeamSponsorsSection />
      <VenueTravelSection />
      <CodeOfConductFooter />
    </main>
  );
}
