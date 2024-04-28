import React, { lazy, Suspense } from "react";
import { Avatar } from "../ui/avatar";

// Lazily load the UserButton component
const LazyUserButton = lazy(() =>
  import("@clerk/nextjs").then((module) => ({
    default: module.UserButton,
  }))
);

// Create a fallback component to display during loading
const LoadingFallback = () => (
  <div className="text-gray-800 bg-black">
    <Avatar />
  </div>
);

// Export the lazily loaded component wrapped in Suspense
export default function LazyUserButtonWrapper() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyUserButton />
    </Suspense>
  );
}
