import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="h-screen flex justify-center items-center">
      <UserProfile />
    </div>
  );
}
