import CountUp from "react-countup";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiBooksFill, PiStudentFill } from "react-icons/pi";

const statistics = [
  {
    name: "Stagiaires",
    count: 3601,
    icon: <PiStudentFill />,
  },
  {
    name: "Formateurs",
    count: 50,
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Formations",
    count: 60,
    icon: <PiBooksFill />,
  },
  {
    name: "Staff administratif",
    count: 20,
    icon: <BsFillPersonFill />,
  },
];

function StatisticCard() {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:px-16">
        {statistics.map((statistic, index) => (
          <li
            key={`count-${index}`}
            className="bg-blue z-3 flex w-full -translate-y-8 flex-col items-center justify-center gap-2 rounded-xl py-8">
            <div className="text-green text-8xl">{statistic.icon}</div>
            <CountUp
              delay={0.5}
              duration={3}
              end={statistic.count}
              className="text-5xl font-bold text-white"
            />
            <div className="text-xl font-bold text-white uppercase">
              {statistic.name}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticCard;
