"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { QueryResultRow } from "pg";
import { postProject } from "@/lib/postProject";

type FormData = {
  projectName: string;
};

export function ProjectCreation({ rows }: { rows?: QueryResultRow[] }) {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit form");

    const result = await postProject({ ...formData });
    console.log(result);
  };

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
                />
              </div>
            </div>
            <Button className="w-full">Submit</Button>
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
