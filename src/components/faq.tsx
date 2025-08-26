'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from 'lucide-react';

export const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="p-4 bg-white rounded-lg shadow-sm">
         <div
            className="flex items-center cursor-pointer justify-between"
            onClick={() => setIsOpen(!isOpen)}
         >
            <h3 className="text-xl font-medium text-gray-800">
               {question}
            </h3>
            {isOpen ? <Minus className="text-yellow mr-2 flex-shrink-0" /> : <Plus className="text-yellow mr-2 flex-shrink-0" />}
         </div>
         <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
         >
            <p className="mt-2">{answer}</p>
         </motion.div>
      </div>
   );
};