import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join thousands of students who are building the future through technology, innovation, and scientific discovery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#admissions"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Request Information
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-colors"
          >
            Schedule Campus Tour
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
