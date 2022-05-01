import DesignCard from "../utilities/Cards/designCard";
import Cards from "../utilities/Cards/devCard";
import DevCard from "../utilities/Cards/devCard";

const SoftwareProjects = () => {
  const projectArray = [
    {
      title: "MakeWay App",
      subtitle: "Software Development & Product Design",
      description:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox ",
      id: 1,
    },
    {
      title: "TTU Student Portal App",
      subtitle: "Mobile Development",
      description:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox ",
      id: 2,
    },
  ];
  return (
    <div>
      <div className="grid max-w-[1240px] m-auto">
        <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl text-purple-900 mt-10 md:mt-0 ">Portfolio</p>
          <h1 className="py-3 text-3xl md:text-3xl font-bold ">
            What I’m building / Have built
          </h1>
          <div className="flex flex-row gap-10">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProjects;
