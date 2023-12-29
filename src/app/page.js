import DownloadOurApp from "@/components/layout/DownloadOurApp";
import HeroSection from "@/components/layout/Hero";
import HowItWorks from "@/components/layout/HowItWorks";
import WorkWithUs from "@/components/layout/WorkWithUs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <HeroSection />
      <HowItWorks />
      <WorkWithUs />
      <DownloadOurApp />
    </main>
  );
}
