import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {Array()
        .fill(10)
        .map(() => {
          <Skeleton className="w-[100px] h-[20px] rounded-full" />;
        })}
    </>
  );
}
