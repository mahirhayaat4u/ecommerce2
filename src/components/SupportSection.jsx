import { RefreshCcw, Package, MessageCircle, DollarSign, ChevronDown } from "lucide-react";

export default function SupportSection() { const features = [ { icon: <RefreshCcw className="w-6 h-6" />, title: "Returns & Exchanges", desc: "Not happy? Return or exchange your items quickly and hassle-free.", }, { icon: <Package className="w-6 h-6" />, title: "Check Your Order Status", desc: "Stay updated every step of the way — from purchase to delivery.", }, { icon: <MessageCircle className="w-6 h-6" />, title: "Visit Our Support Center", desc: "Need assistance? Find answers and support anytime, anywhere.", }, { icon: <DollarSign className="w-6 h-6" />, title: "Price‑Match Guarantee", desc: "Found a better price? We’ll match it so you get the best deal.", }, ];

const faqs = [ "How long does it typically take to process an order?", "Can I change the contents of my order?", "Do you ship internationally?", "Is my personal information secure during checkout?", ];

const returns = [ "What is your return policy?", "How long does it take to process a refund?", ];

return ( <section className="max-w-7xl mx-auto px-4 py-16"> {/* Top cards */} <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {features.map((item, i) => ( <div
key={i}
className="border rounded-xl p-6 text-center bg-white hover:shadow-md transition"
> <div className="flex justify-center mb-4 text-gray-700">{item.icon}</div> <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3> <p className="text-sm text-gray-500 mb-3">{item.desc}</p> <button className="text-sm font-medium text-gray-900 underline"> Learn More </button> </div> ))} </div>

{/* Assistance + FAQ */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
    <div>
      <h2 className="text-2xl font-bold mb-2">
        24/7 Assistance, Whenever You Need It
      </h2>
      <p className="text-gray-500 mb-6">
        Round‑the‑clock support for a smooth shopping experience.
      </p>
      <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg text-sm font-medium">
        Contact Support
      </button>
    </div>

    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-3">SHIPPING</p>
        {faqs.map((q, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b py-3 cursor-pointer"
          >
            <span className="text-sm font-medium">{q}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        ))}
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 mb-3">RETURNS & REFUND</p>
        {returns.map((q, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b py-3 cursor-pointer"
          >
            <span className="text-sm font-medium">{q}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        ))}
        <button className="text-sm mt-3 font-medium underline">Read All</button>
      </div>
    </div>
  </div>

  {/* Newsletter */}
  <div className="mt-20 bg-gray-100 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="max-w-md">
      <h3 className="text-xl font-semibold mb-2">
        Join the Gifts Wale and Get 10% Off Your First Order!
      </h3>
      <div className="flex gap-3 mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border rounded-lg px-4 py-2"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 rounded-lg font-medium">
          Sign Up
        </button>
      </div>
    </div>
    <div className="hidden lg:block w-1/2 h-32 bg-gray-200 rounded-xl" />
  </div>
</section>

); }