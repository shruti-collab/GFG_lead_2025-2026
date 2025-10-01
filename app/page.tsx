'use client'
import { useState } from 'react'
import TeamGrid from '@/components/TeamGrid'
import PersonDialog from '@/components/PersonDialog'
import { Member } from '@/data/team'
import HeroSection from '@/components/homepage/hero-section'
import AboutSection from '@/components/homepage/about'
import ContactSection from '@/components/homepage/contact-section'
import EventsSection from '@/components/homepage/events-section'


export default function Page() {
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <>
      <HeroSection />
      <TeamGrid onOpen={setSelected} />
      <EventsSection/>
      <AboutSection />
      <ContactSection />
      <PersonDialog person={selected} onClose={() => setSelected(null)} />
    </>
  )
}