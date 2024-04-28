import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import LazyUserButtonWrapper from "./lazy-user-button";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>
      <div>
      <LazyUserButtonWrapper />
      </div>
    </div>
  );
}
