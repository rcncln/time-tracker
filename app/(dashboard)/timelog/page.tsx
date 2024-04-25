import React from "react";
import { fetchProjects } from "@/lib/getData";
import { TimeLogging } from "@/components/component/time-logging";

export default async function Timelog() {
  const { rows, errorMessage } = await fetchProjects();

  return <TimeLogging rows={rows || []} errorMessage={errorMessage} />
}
