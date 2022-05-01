import DesignCard from "../utilities/Cards/designCard";

const DesignProjects = () => {
  return (
    <div>
      <div className="grid max-w-[1240px] m-auto">
        <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl text-purple-900 mt-10 md:mt-0 ">Portfolio</p>
          <h1 className="py-3 text-3xl md:text-3xl font-bold ">
            Case Studies & Projects
          </h1>
          <div className="flex flex-row gap-10">
            <DesignCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
