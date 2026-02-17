import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    academics: {
      title: 'Academics',
      links: ['Programs', 'Departments', 'Faculty', 'Research', 'Libraries'],
    },
    admissions: {
      title: 'Admissions',
      links: ['Apply', 'Tuition', 'Financial Aid', 'Visit Campus', 'International Students'],
    },
    student_life: {
      title: 'Student Life',
      links: ['Housing', 'Dining', 'Activities', 'Athletics', 'Career Services'],
    },
    about: {
      title: 'About',
      links: ['Our Story', 'Leadership', 'Campus', 'News', 'Contact'],
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2026 School of Technology. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
