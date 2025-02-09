/* eslint-disable react/prop-types */

const SectionCard = ({ title, highlight, description, bgColor, children }) => {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden relative h-[400px]  shadow-md text-center text-[#2A496B]`}>
    <div className="p-6">
    <h3 className="text-[40px] leading-[52px] px-28  font-bold">
      {title} <span className="text-red-500">{highlight}</span>
    </h3>
    <p className="text-sm mt-2 px-40">{description}</p>
    <div className="mt-4">{children}</div>
    </div>
  </div>
  )
}

export default SectionCard