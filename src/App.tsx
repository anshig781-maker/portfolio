import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { GramTechSection } from './sections/GramTechSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { CareerInterestsSection } from './sections/CareerInterestsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E293B] font-sans selection:bg-[#E8DFC9] selection:text-[#0B192C]">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero / Introduction */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Education */}
        <EducationSection />

        {/* Section 4: Professional Experience */}
        <ExperienceSection />

        {/* Section 5: Skills */}
        <SkillsSection />

        {/* Section 6: Flagship Project - Gram-Tech Studio */}
        <GramTechSection />

        {/* Section 6 (Cont.): Other Projects & Competitions */}
        <ProjectsSection />

        {/* Section 7: Achievements & Leadership */}
        <AchievementsSection />

        {/* Section 8: Career Interests */}
        <CareerInterestsSection />

        {/* Section 9: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <DeploymentGuideModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
      />
    </div>
  );
}
