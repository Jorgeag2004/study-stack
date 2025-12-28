'use client'
import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";
import { delete_learn_item_by_id } from "@/lib/data/delete_learn_item_by_id";
import { useState } from "react";
import { LearnItemForm } from "@/components/forms/LearnItemForm";

interface LearnCardCompressedProps {
    name: string;
    dateCovered: string;
    date_text: string;
    id: string;
}

export const LearnCardCompressed = (props: LearnCardCompressedProps) => {

    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
      <div className={'w-70 flex rounded-2xl min-h-21 bg-neutral-800 items-center'}>
          <div className="flex items-center justify-between  px-4 py-3 gap-3">
              <p className="text-xl text-green-600 font-medium flex-1 min-w-0" title={props.name}>
                  {props.name}
              </p>
              <p className="text-sm text-neutral-300 whitespace-nowrap flex-shrink-0">
                  {props.date_text}
              </p>
          </div>
          <ContextMenu edit_function={() => setOpenForm(true)} delete_function={() => delete_learn_item_by_id(props.id)} />
          {openForm && <LearnItemForm toggle_form={() => setOpenForm(false)} name={props.name} id={props.id} date_covered={props.dateCovered}/> }
      </div>
    )
}