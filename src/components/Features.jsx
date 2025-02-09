const Features = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Everything You Need to Succeed, All in One Place
      </h2>
      <div className="flex flex-wrap gap-1">
        <div className="flex gap-1">
          <div className="base-[500px] h-[500px] flex flex-col gap-5 p-10 justify-center items-center rounded-xl bg-[#F9BDB5]">
            <p className="self-start font-bold">Ai Feature</p>
            <img src="/ai2.png" className="w-3xs" />
            <img src="/ai1.png" className="w-96 self-start" />
            <p>
              Use a pre-designed template or personalize with video, stickers,
              fonts, and more
            </p>
          </div>
          {/* ================ */}

          <div>
            <div className="w-[770px] h-[230px] flex px-5 justify-center items-center rounded-xl bg-[#F94F64]">
              <div className="flex flex-col gap-y-20">
                <p className="self-start font-bold">24/7 Support</p>
                <p>
                  Use a pre-designed template or personalize with video,
                  stickers, fonts, and more
                </p>
              </div>
              <img src="/support.png" className="w-96" />
            </div>

            <div className="flex gap-x-3 mt-4 ">
              {/* ================ */}
              <div className="basis-[380px] h-[250px] flex flex-col  px-5 rounded-xl bg-[#C00E01]">
                <img src="/cardtk.png" className="w-[208px] mx-auto" />
                <div className="text-white">
                  <p className="self-start font-bold">24/7 Support</p>
                  <p>
                    Use a pre-designed template or personalize with video,
                    stickers, fonts, and more
                  </p>
                </div>
              </div>

              {/* ================ */}
              <div className="basis-[380px] h-[250px] flex flex-col  px-5 rounded-xl bg-[#C00E01]">
                <img src="/cardtk.png" className="w-[208px] mx-auto" />
                <div className="text-white">
                  <p className="self-start font-bold">24/7 Support</p>
                  <p>
                    Use a pre-designed template or personalize with video,
                    stickers, fonts, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================ */}
        <div className="basis-[850px] h-[230px] flex px-5 justify-center items-center rounded-xl bg-[#DB0A15]">
          <div className="flex flex-col gap-y-20">
            <p className="self-start font-bold">24/7 Support</p>
            <p>
              Use a pre-designed template or personalize with video, stickers,
              fonts, and more
            </p>
          </div>
          <img src="/support.png" className="w-80" />
        </div>
        {/* ================ */}
        <div className="basis-[380px] h-[230px] flex flex-col gap-5 p-10 justify-center items-center rounded-xl bg-[#F94F64]">
          <p className="self-start font-bold">Ai Feature</p>
          <p>
            Use a pre-designed template or personalize with video, stickers,
            fonts, and more
          </p>
          <img src="/ai1.png" className="w-96 self-start" />
        </div>
      </div>
    </div>
  );
};

export default Features;
