'use client'
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";

interface LearnCardProps {
    name: string;
    course: string;
    dateCovered: string;
}

export const LearnCard = (props: LearnCardProps) => {
    return (
       <div className="w-70 flex items-center rounded-2xl min-h-31 bg-neutral-800">
           <div className=" p-3 flex flex-col justify-between w-full">
               <div className=" min-h-0">
                   <p className="text-xl text-green-600 font-medium " title={props.name}>
                       {props.name}
                   </p>
                   <p className="text-lg text-orange-200" title={props.course}>
                       {props.course}
                   </p>
               </div>
               <div className="flex justify-end mt-2">
                   <p className="text-sm text-neutral-300">
                       {props.dateCovered}
                   </p>
               </div>
           </div>
           <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
       </div>
    )
}