/* eslint-disable react/prop-types */

const MainBtn = ({ title,rounded }) => {
  return (
    <button className={`bg-gradient-to-r from-[#FF2919] to-[#BE0D00] text-white px-4 py-2 rounded-full ${rounded} hover:opacity-90 transition`}>
      {title}
    </button>
  );
};

export default MainBtn;
