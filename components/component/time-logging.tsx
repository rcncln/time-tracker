"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactElement, useState } from "react";
import { QueryResultRow } from "pg";

function splitTime(input: string): number {
  var parts = input.split(":");
  var hours = parseInt(parts[0]);
  var minutes = parseInt(parts[1]);
  return hours * 60 + minutes;
}

type FormData = {
  project: string;
  date: string;
  duration: string;
};

export function TimeLogging({ rows }: { rows: QueryResultRow }) {
  const [formData, setFormData] = useState<FormData>({
    project: "",
    date: "",
    duration: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Card>
        <CardHeader className="flex items-center gap-2">
          <ClockIcon className="w-6 h-6" />
          <CardTitle>Time Logging</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label className="text-sm" htmlFor="project">
              Project
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Projects</SelectLabel>
                  {rows?.map((row) => (
                    <SelectItem value={row.project_name} key={row.project_name}>
                      {row.project_name}
                    </SelectItem>
                  ))}

                
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label className="text-sm" htmlFor="date">
              Date
            </Label>
            <Input id="date" type="date" onChange={handleChange} />
          </div>
          <div className="grid gap-1.5">
            <Label className="text-sm" htmlFor="duration">
              Duration (hh:mm)
            </Label>
            <Input
              id="duration"
              placeholder="Enter duration"
              type="text"
              onChange={handleChange}
            />
          </div>
          <Button className="w-full">Submit</Button>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead className="w-32">Date</TableHead>
                <TableHead className="w-32">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y">
              <TableRow>
                <TableCell className="font-semibold">
                  Website Redesign
                </TableCell>
                <TableCell>2023-10-10</TableCell>
                <TableCell>8h</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Mobile App Development
                </TableCell>
                <TableCell>2023-10-11</TableCell>
                <TableCell>8h</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Cloud Migration</TableCell>
                <TableCell>2023-10-12</TableCell>
                <TableCell>7h</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Marketing Campaign
                </TableCell>
                <TableCell>2023-10-13</TableCell>
                <TableCell>8h 30m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Customer Support System
                </TableCell>
                <TableCell>2023-10-14</TableCell>
                <TableCell>8h</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
