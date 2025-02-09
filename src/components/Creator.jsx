const Creator = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-20">
         <div>
            <img src="/user.png" alt="user" className="w-20 rounded-md" />
         </div>
      <div>
        <p className="text-[14px] font-bold">Trusted by 60,000+ Creators</p>
        <div>
          <div>
            <div className="relative flex items-center h-16 p-3 rounded-full ">
              <div className="absolute  overflow-hidden border-2 border-white rounded-full left-[20px] w-10 h-10">
                <img className="w-full  h-full" src="/user.png" alt="" />
              </div>
              <div className="absolute  overflow-hidden  border-2 border-white rounded-full left-[40px] w-10 h-10">
                <img className="w-full h-full" src="/user1.png" alt="" />
              </div>
              <div className="absolute  overflow-hidden border-2 border-white rounded-full left-[60px] w-10 h-10">
                <img className="w-full h-full" src="/user.png" alt="" />
              </div>
              <div className="absolute  overflow-hidden  border-2 border-white rounded-full left-[80px] w-10 h-10">
                <img className="w-full h-full" src="/user1.png" alt="" />
              </div>
              <div className="absolute  overflow-hidden  border-2 border-white rounded-full left-[100px] w-10 h-10">
                <img className="w-full h-full" src="/user1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
