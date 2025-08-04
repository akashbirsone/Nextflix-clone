import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What is Netflix?",
      answers: [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
      ]
    },
    {
      question: "How much does Netflix cost?",
      answers: [
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
        "Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
      ]
    },
    {
      question: "Where can I watch?",
      answers: [
        "Watch anywhere, anytime. Sign in on the web at netflix.com or on the app from smart TVs, phones, tablets, streaming players, and game consoles.",
        "You can also download your favourite shows using the iOS or Android app and watch without internet."
      ]
    },
    {
      question: "Is Netflix good for kids?",
      answers: [
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content.",
        "Kids profiles have PIN-protected parental controls, letting you restrict what kids can see."
      ]
    }
  ];

  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-20 py-10">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden group"
          >
            <summary className="cursor-pointer p-4 text-lg font-semibold hover:bg-gray-800 transition duration-300">
              {faq.question}
            </summary>
            <div className="px-4 pb-4 text-sm sm:text-base text-gray-300 space-y-2">
              {faq.answers.map((ans, i) => (
                <p key={i}>{ans}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
