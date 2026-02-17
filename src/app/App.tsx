import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProgramCard } from './components/ProgramCard';
import { StatsSection } from './components/StatsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  const programs = [
    {
      id: 'science',
      title: 'Science',
      description: 'Explore the mysteries of the natural world through hands-on laboratory experiences and cutting-edge research opportunities.',
      imageSrc: 'https://images.unsplash.com/photo-1608037222022-62649819f8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGV4cGVyaW1lbnRzfGVufDF8fHx8MTc3MTM1MzExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Advanced laboratory facilities with state-of-the-art equipment',
        'Research opportunities in biology, chemistry, and physics',
        'Interdisciplinary collaboration across scientific fields',
        'Expert faculty with active research programs',
      ],
    },
    {
      id: 'math',
      title: 'Mathematics',
      description: 'Master the language of logic and patterns while developing analytical skills that power innovation across all fields of technology.',
      imageSrc: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGVxdWF0aW9ucyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzEzNTMxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Pure and applied mathematics curriculum',
        'Statistical analysis and data science programs',
        'Computational mathematics and modeling',
        'Problem-solving workshops and competitions',
      ],
    },
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Design, build, and innovate with comprehensive programs in mechanical, electrical, civil, and robotics engineering.',
      imageSrc: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHJvYm90aWNzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Hands-on projects from day one',
        'Industry partnerships and internship opportunities',
        'Design studios and fabrication labs',
        'Capstone projects with real-world applications',
      ],
    },
    {
      id: 'cs',
      title: 'Computer Science',
      description: 'Learn to code the future with programs in software development, artificial intelligence, cybersecurity, and data science.',
      imageSrc: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kaW5nfGVufDF8fHx8MTc3MTM1MzExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Modern programming languages and frameworks',
        'Machine learning and AI specializations',
        'Cybersecurity and network infrastructure',
        'Collaborative coding projects and hackathons',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <div id="programs" className="bg-gray-50">
        {programs.map((program, index) => (
          <ProgramCard
            key={program.id}
            {...program}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
