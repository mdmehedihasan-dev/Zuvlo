import MainBtn from "./MainBtn";
import SectionCard from "./SectionCard";

const MarketingSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-6xl leading-16 text-[#141414] px-32 font-bold text-center mb-6">
        Master Online Marketing with Ease and Independence, Completely Free
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
       
        <SectionCard
          title="Join a platform that"
          highlight="cares"
          description="Where marketers and recruiters exchange insights on a daily basis."
          bgColor="bg-[#E4F1FF]"
        >
          <img src="/carers.png" alt="Platform" className=" absolute bottom-0 right-[20px] mt-4" />
        </SectionCard>
       
        <SectionCard
          title="Simple & easy to"
          highlight="get started"
          description="The popular 60-minute mobile funnel crash course, moderated live."
          bgColor="bg-[#E4E7FF]"
        >
          <img src="/carer2.png" alt="Course" className=" mt-4 absolute bottom-0 right-[50px] " />
        </SectionCard>
      </div>

      <div className="mt-8 bg-[#FAF1E3] flex  rounded-lg shadow-md justify-between">
        <div className="w-2/3 flex flex-col p-6 gap-10 text-center">
         <div> <h3 className="text-6xl text-[#4F340A] font-semibold">
            Sign up this month, <span className="text-red-500">earn more</span>
          </h3>
          <p className="text-xl leading-[29px] mt-2 px-48">
            Our Head of Content, Leni, guides you through your first successful
            funnel.
          </p></div>
          <div>
          <MainBtn title={"Sign Up"} />
          </div>
        </div>
        <div className="w-1/3 relative">
            <img src="/earn.png" alt="mobile" className="w-[405px] absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
