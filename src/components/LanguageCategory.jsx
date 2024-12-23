import { FaChalkboardTeacher, FaLanguage, FaBookReader } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const LanguageCategory = () => {
  const categories = [
    { icon: <FaChalkboardTeacher />, title: "English tutors", teachers: "28,030" },
    { icon: <FaLanguage />, title: "Spanish tutors", teachers: "8,904" },
    { icon: <FaBookReader />, title: "French tutors", teachers: "3,380" },
    { icon: <FaChalkboardTeacher />, title: "German tutors", teachers: "1,412" },
    { icon: <FaLanguage />, title: "Italian tutors", teachers: "2,276" },
    { icon: <FaBookReader />, title: "Chinese tutors", teachers: "4,887" },
    { icon: <FaChalkboardTeacher />, title: "Arabic tutors", teachers: "3,328" },
    { icon: <FaLanguage />, title: "Japanese tutors", teachers: "2,458" },
    { icon: <FaBookReader />, title: "Portuguese tutors", teachers: "1,375" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border rounded-lg hover:shadow-lg cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl text-gray-600">{category.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-500">{category.teachers} teachers</p>
            </div>
          </div>
          <div className="text-xl text-gray-500">
            <MdArrowForward />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageCategory;
