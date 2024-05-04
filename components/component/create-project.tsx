"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useHook } from "../hooks/create-project-hooks";

export function ProjectCreation({ userId }: { userId: number }) {
  const {
    handleChange,
    handleSubmit,
    loading,
    handleInputBlur,
    handleInputFocus,
    projectName,
  } = useHook(userId);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="flex items-center gap-2">
            <ProjectIcon className="w-6 h-6" />
            <CardTitle>Create Project</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-1.5">
              <Label className="text-sm" htmlFor="project">
                Project
              </Label>
              <div className="grid gap-1.5">
                <Input
                  id="duration"
                  placeholder="Enter project name"
                  type="text"
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={projectName}
                />
                
              </div>
            </div>
            <Button className="w-full" disabled={projectName.trim() === ""}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
}

function ProjectIcon(props: any) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
