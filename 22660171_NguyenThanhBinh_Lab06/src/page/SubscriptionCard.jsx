import React from "react";
import bg from "../assets/tinh-hoa-am-thuc-viet-nam-1_1.jpg"
const SubscriptionCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg max-w-5xl mx-auto p-6 gap-6">
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-sm font-semibold text-gray-600">
          This recipe is exclusively available to subscribers
        </h3>
        <h2 className="text-3xl font-bold text-pink-600 mt-2">
          Join now to access effortless, hassle-free recipes
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
          <li>✅ 20,000+ recipes to suit all tastes and skill levels</li>
          <li>✅ Filter for diets, cook times, and more</li>
          <li>✅ Personal Recipe Box for favorites</li>
          <li>✅ Gain exclusive access to our subscriber-only mobile app</li>
        </ul>
        <p className="text-lg font-bold text-gray-800 mt-4">0.25USD / Week</p>
        <p className="text-xs text-gray-500">Billed as $1 every 4 weeks for the first year</p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Subscribe Now
        </button>
        <p className="mt-2 text-xs text-gray-400">Cancel or Pause anytime</p>
      </div>
      <div className="flex-1">
        <img src={bg} alt="Delicious food" className="rounded-xl shadow-md w-full" />
      </div>
    </div>
  );
};

const SubscriptionFeatures = () => {
  const features = [
    { title: "Cooking", description: "Enjoy recipes, advice and inspiration for any occasion." },
    { title: "Wirecutter", description: "Explore independent reviews for thousands of products." },
    { title: "Games", description: "Unwind with Spelling Bee, Wordle, The Crossword." },
    { title: "The Athletic", description: "Discover in-depth, personalized sports journalism." },
  ];

  return (
    <div className="mt-10 text-center">
      <h3 className="text-xl font-bold text-pink-600">An All Access subscription includes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {features.map((feature, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-xl shadow">
            <h4 className="text-lg font-semibold">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubscriptionPage = () => {
  return (
    <div className="p-6">
      <SubscriptionCard />
      <SubscriptionFeatures />
    </div>
  );
};

export default SubscriptionPage;
