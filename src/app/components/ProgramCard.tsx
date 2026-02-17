import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  id: string;
  reverse?: boolean;
}

export function ProgramCard({ title, description, imageSrc, features, id, reverse = false }: ProgramCardProps) {
  return (
    <div id={id} className="py-20 px-4">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        {/* Image */}
        <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${reverse ? 'md:col-start-2' : ''}`}>
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className={reverse ? 'md:col-start-1 md:row-start-1' : ''}>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {description}
          </p>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={`#${id}-details`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
