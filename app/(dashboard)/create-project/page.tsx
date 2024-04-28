import React from 'react'
import { ProjectCreation } from '@/components/component/create-project'
import { auth } from "@clerk/nextjs/server";

export default function Project() {
    const { userId } = auth();
    
    return (
        <ProjectCreation />
    )
}