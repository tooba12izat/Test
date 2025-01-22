import Header from "@/components/testPageComponents/Header";
import Overview from "@/components/testPageComponents/Overview";
import Add from "@/components/testPageComponents/Add";
import ActiveProjects from "@/components/testPageComponents/ActiveProjects";
import ActiveTalent from "@/components/testPageComponents/ActiveTalents";
import TimeTracking from "@/components/testPageComponents/TimeTracking";
import Activity from "@/components/testPageComponents/Activity";

const Page = async () => {

  return (
    <>
    <div className="font-Matter">
      <Header />
      <div className="bg-[#fbfbfb] flex flex-col w-full">
        <div><p className="text-gray-900 font-semibold text-3xl px-6 pt-6 pb-2">Welcome back, Hunzalah </p>
          <p className="font-normal text-gray-600 text-base px-6 ">Hire, track and manage your talents and projects.</p>
        </div>

        <div className="flex w-full space-x-4  px-6 pt-5">
          <Overview />
          <Add />
        </div>
        <div className="flex w-full space-x-4 px-6 pt-5">
          <ActiveTalent />
          <ActiveProjects />
        </div>
        <div className="flex w-full space-x-4 px-6 py-5">
          <TimeTracking />
          <Activity />

        </div>
      </div>
      </div>

    </>
  )
}
export default Page;