import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel anytime, and you will have access until the end of your billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can customize your invoices with additional details from your account settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is done on a monthly or yearly basis, depending on your subscription plan.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your email in your account settings.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl  mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold text-center">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-4 bg-white  hover:bg-gray-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? <CiCircleMinus size={20}/> : <CiCirclePlus size={20}/>  }</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-8 bg-white text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
