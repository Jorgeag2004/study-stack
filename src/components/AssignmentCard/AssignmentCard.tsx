'use client'
import { Circle } from 'lucide-react'
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";

interface AssignmentCardProps {
    name: string,
    course: string;
    dueDate: string,
    color: string,
}

const colorMap: Record<string, string> = {
    "yellow-600": "fill-yellow-500 stroke-yellow-500",
    "green-600": "fill-green-600 stroke-green-600",
    "red-600": "fill-red-600 stroke-red-600",
};

export const AssignmentCard = (props: AssignmentCardProps) => {
    const circleStyle: string = `w-4 h-4 flex-shrink-0 ${colorMap[props.color]}`;

    return (
        <div className="w-70 rounded-2xl min-h-31 flex items-center bg-neutral-800">
           <div className={'w-full p-3 flex flex-col'}>
               <div className="min-h-0">
                   <p className="text-xl text-green-600 font-medium" title={props.name}>
                       {props.name}
                   </p>
                   <p className="text-lg text-orange-200" title={props.course}>
                       {props.course}
                   </p>
               </div>
               <div className="flex items-center justify-between gap-2">
                   <p className="text-sm text-neutral-300 truncate">
                       {props.dueDate}
                   </p>
                   <Circle className={circleStyle} />
               </div>
           </div>
            <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
        </div>
    )
}