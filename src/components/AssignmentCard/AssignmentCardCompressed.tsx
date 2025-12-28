'use client'
import {Circle} from "lucide-react";
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";
import { delete_assignment_by_id } from "@/lib/data/delete_assignment_by_id";
import { AssignmentForm } from "@/components/forms/AssignmentForm";
import {useState} from "react";

interface AssignmentCardProps {
    name: string,
    dueDate: string,
    color: string,
    id: string,
    date_text: string,
}

const colorMap: Record<string, string> = {
    "yellow-600": "fill-yellow-500 stroke-yellow-500",
    "green-600": "fill-green-600 stroke-green-600",
    "red-600": "fill-red-600 stroke-red-600",
};

export const AssignmentCardCompressed = (props: AssignmentCardProps) => {
    const circleStyle: string = `w-4 h-4 flex-shrink-0 ${colorMap[props.color]}`;

    const [openForm, setOpenForm] = useState(false);

    return (
       <div className={'flex items-center w-70 rounded-2xl min-h-21 bg-neutral-800'}>
           <div className="flex items-center w-full justify-between px-4 py-3 gap-3">
               <p className="text-xl text-green-600 font-medium  flex-grow" title={props.name}>
                   {props.name}
               </p>
               <div className="flex items-center gap-2 flex-shrink-0">
                   <p className="text-sm text-neutral-300 whitespace-nowrap">
                       {props.date_text}
                   </p>
                   <Circle className={circleStyle} />
               </div>
           </div>
           <ContextMenu edit_function={() => setOpenForm(true)} delete_function={() => delete_assignment_by_id(props.id)} />
           {openForm && <AssignmentForm id={props.id} name={props.name} due_date={props.dueDate} toggle_form={() => setOpenForm(false)} />}
       </div>
    )
}