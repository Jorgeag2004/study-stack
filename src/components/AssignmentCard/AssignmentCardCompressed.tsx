import {Circle} from "lucide-react";
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";

interface AssignmentCardProps {
    name: string,
    dueDate: string,
    color: string,
}

const colorMap: Record<string, string> = {
    "yellow-600": "fill-yellow-500 stroke-yellow-500",
    "green-600": "fill-green-600 stroke-green-600",
    "red-600": "fill-red-600 stroke-red-600",
};

export const AssignmentCardCompressed = (props: AssignmentCardProps) => {
    const circleStyle: string = `w-4 h-4 flex-shrink-0 ${colorMap[props.color]}`;

    return (
       <div className={'flex items-center w-70 rounded-2xl min-h-21 bg-neutral-800'}>
           <div className="flex items-center justify-between px-4 py-3 gap-3">
               <p className="text-xl text-green-600 font-medium  flex-grow" title={props.name}>
                   {props.name}
               </p>
               <div className="flex items-center gap-2 flex-shrink-0">
                   <p className="text-sm text-neutral-300 whitespace-nowrap">
                       {props.dueDate}
                   </p>
                   <Circle className={circleStyle} />
               </div>
           </div>
           <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
       </div>
    )
}