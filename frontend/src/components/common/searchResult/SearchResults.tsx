// components/SearchResults.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResultsProps {
  results: {
    services?: any[];
    groups?: any[];
    products?: any[];
    events?: any[];
  };
  isOpen: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isOpen }) => {
  
  const combinedResults = [
    ...(results.services?.map((s) => ({ ...s, type: "Service" })) || []),
    ...(results.groups?.map((g) => ({ ...g, type: "Group" })) || []),
    ...(results.products?.map((p) => ({ ...p, type: "Product" })) || []),
    ...(results.events?.map((e) => ({ ...e, type: "Event" })) || []),
  ];

  return (
    <AnimatePresence>
      {isOpen && combinedResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full  overflow-y-auto bg-white  shadow-xl border border-gray-200 z-50 p-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {combinedResults.map((item) => (
              <Card
                key={item._id}
                className="rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description || "No description available"}
                  </p>
                  <p className="mt-2 font-medium text-teal-600">
                    {item.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchResults;
