import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "../ui/mode-toggle";

export function Header() {
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
            <div>sign out</div>{" "}
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
