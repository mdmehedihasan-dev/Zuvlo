import MainBtn from "./MainBtn";
import MobileScroll from "./MobileScroll";

const SubscriptionSection = () => {
  return (
    <div className=" bg-gradient-to-br from-white  to-red-100">
      <div className="max-w-7xl relative mx-auto flex flex-col md:flex-row  justify-between px-10 py-16 ">
        {/* Left Section */}
        <div className="flex flex-col gap-y-28">
          <div className="max-w-md text-left">
            <div className="px-3 py-1 bg-gray-200 rounded-full w-fit mb-4">
              🐵 Subscription
            </div>
            <h1 className="text-4xl leading-[63px] font-bold text-gray-900">
              Monetize Your Content Through{" "}
              <span className="text-red-500">Subscriptions</span>
            </h1>
            <p className="mt-4 mb-8 text-gray-600">
              Unlock Recurring Revenue by Offering Your Exclusive Content Behind
              a Paywall for Your Top Fans to Subscribe
            </p>
            <MainBtn title={"Sign Up"} />
          </div>
          <div className="max-w-md text-left">
            <div className="px-3 py-1 bg-gray-200 rounded-full w-fit mb-4">
              🐵 Subscription
            </div>
            <h1 className="text-4xl leading-[63px] font-bold text-gray-900">
              Monetize Your Content Through{" "}
              <span className="text-red-500">Subscriptions</span>
            </h1>
            <p className="mt-4 mb-8 text-gray-600">
              Unlock Recurring Revenue by Offering Your Exclusive Content Behind
              a Paywall for Your Top Fans to Subscribe
            </p>
            <MainBtn title={"Sign Up"} />
          </div>
          <div className="max-w-md text-left">
            <div className="px-3 py-1 bg-gray-200 rounded-full w-fit mb-4">
              🐵 Subscription
            </div>
            <h1 className="text-4xl leading-[63px] font-bold text-gray-900">
              Monetize Your Content Through{" "}
              <span className="text-red-500">Subscriptions</span>
            </h1>
            <p className="mt-4 mb-8 text-gray-600">
              Unlock Recurring Revenue by Offering Your Exclusive Content Behind
              a Paywall for Your Top Fans to Subscribe
            </p>
            <MainBtn title={"Sign Up"} />
          </div>
        </div>

        {/* Right Section - Mobile UI Preview */}
        <MobileScroll/>
     
      </div>
    </div>
  );
};

export default SubscriptionSection;
