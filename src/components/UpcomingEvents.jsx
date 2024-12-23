

const UpcomingEvents = () => {
  const events = [
    {
      title: "Spanish Cultural Night",
      date: "25th Dec 2024",
      description: "Explore the beauty of Spanish culture through music, food, and language.",
    },
    {
      title: "French Speaking Workshop",
      date: "5th Jan 2025",
      description: "A hands-on workshop to practice and perfect your French-speaking skills.",
    },
    {
      title: "Language Exchange Program",
      date: "15th Jan 2025",
      description: "Connect with native speakers and enhance your skills through conversation.",
    },
  ];

  return (
    <div className="my-8 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
