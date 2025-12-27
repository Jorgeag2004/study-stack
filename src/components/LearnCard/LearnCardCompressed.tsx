import {ContextMenu} from "@/components/buttons/ContextMenu";
import React from "react";
import { delete_learn_item_by_id } from "@/lib/data/delete_learn_item_by_id";

interface LearnCardCompressedProps {
    name: string;
    dateCovered: string;
}

export const LearnCardCompressed = (props: LearnCardCompressedProps) => {
    return (
      <div className={'w-70 flex rounded-2xl min-h-21 bg-neutral-800 items-center'}>
          <div className="flex items-center justify-between  px-4 py-3 gap-3">
              <p className="text-xl text-green-600 font-medium flex-1 min-w-0" title={props.name}>
                  {props.name}
              </p>
              <p className="text-sm text-neutral-300 whitespace-nowrap flex-shrink-0">
                  {props.dateCovered}
              </p>
          </div>
          <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
      </div>
    )
}