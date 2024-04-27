"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "../ui/mode-toggle";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/clerk-react";
import { Button } from "../ui/button";

export function Header() {
  const router = useRouter();
  const { signOut } = useClerk();

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>
      <div className="">
        <Popover>
          <PopoverTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="hover:bg-muted/50 cursor-pointer">
              <Button onClick={() => signOut(() => router.push("/"))}>
                Sign out
              </Button>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ModeToggle />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
