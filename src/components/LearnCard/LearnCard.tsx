'use client'
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";
import {useState} from "react";
import { LearnItemForm } from "@/components/forms/LearnItemForm";
import { delete_learn_item_by_id } from "@/lib/data/delete_learn_item_by_id";

interface LearnCardProps {
    name: string;
    course: string;
    dateCovered: string;
    id: string;
    date_text: string;
}

export const LearnCard = (props: LearnCardProps) => {

    const [openForm, setOpenForm] = useState(false);

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
                       {props.date_text}
                   </p>
               </div>
           </div>
           <ContextMenu edit_function={() => setOpenForm(true)} delete_function={() => delete_learn_item_by_id(props.id)} />
           {openForm && <LearnItemForm toggle_form={() => setOpenForm(false)} name={props.name} id={props.id} date_covered={props.dateCovered}/> }
       </div>
    )
}