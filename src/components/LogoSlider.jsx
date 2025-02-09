const LogoSlider = () => {
  return (
    <div className="w-full py-4">
      <h2 className="text-center text-xl font-bold">Featured in</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <img
            src={"/forb.png"}
            alt="brand logo"
            className="size-28 object-contain"
          />
          <img
            src={"/uni.png"}
            alt="brand logo"
            className="size-28 object-contain"
          />
          <img
            src={"/forb.png"}
            alt="brand logo"
            className="size-28 object-contain"
          />
          <img
            src={"/uni.png"}
            alt="brand logo"
            className="size-28 object-contain"
          />
          <img
            src={"/forb.png"}
            alt="brand logo"
            className="size-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
