
const Stats = () => {
    const stats = [
        { value: "32,000+", label: "Experienced tutors" },
        { value: "300,000+", label: "5-star tutor reviews" },
        { value: "120+", label: "Subjects taught" },
        { value: "180+", label: "Tutor nationalities" },
    ];
    return (
        <div className="bg-base-100 py-10">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;