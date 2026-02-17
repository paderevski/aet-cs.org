import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxMzI4MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Technology education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6">
          Shape the Future Through Technology
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Empowering the next generation of innovators in science, mathematics, engineering, and computer science
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programs"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Explore Programs
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
