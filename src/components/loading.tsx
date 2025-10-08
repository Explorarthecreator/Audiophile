const Loading = () => {
  return (
    <div className={`w-full h-[350px] flex items-center gap-6 justify-center`}>
      <div className="w-[1.6875rem] h-16 bg-gradient-to-r to-[#000/40] from-[#000] animate-ping"></div>
      <div className="w-[1.6875rem] h-16 bg-gradient-to-r to-[#000/40] from-[#000] animate-ping delay-100"></div>
      <div className="w-[1.6875rem] h-16 bg-gradient-to-r to-[#000/40] from-[#000] animate-ping delay-150"></div>
      <div className="w-[1.6875rem] h-16 bg-gradient-to-r to-[#000/40] from-[#000] animate-ping delay-200"></div>
      <div className="w-[1.6875rem] h-16 bg-gradient-to-r to-[#000/40] from-[#000]  animate-ping delay-250"></div>
    </div>
  );
};

export default Loading;
