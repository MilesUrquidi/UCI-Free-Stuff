"use client";

import { X, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ShareModal({ onClose }: { onClose: () => void }) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "ZotDeals",
        text: "Check out all the free stuff you can get with your UCI email!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Enjoying ZotDeals?
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Share it with a friend and help every student find deals!
        </p>

        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </motion.div>
    </motion.div>
  );
}
