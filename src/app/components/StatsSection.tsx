export function StatsSection() {
  const stats = [
    { value: '10,000+', label: 'Students Enrolled' },
    { value: '95%', label: 'Graduate Employment' },
    { value: '50+', label: 'Research Labs' },
    { value: '200+', label: 'Industry Partners' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
