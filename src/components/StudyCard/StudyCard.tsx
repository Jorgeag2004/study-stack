'use client'
import { Star } from 'lucide-react'
import React from "react";
import { ContextMenu } from "@/components/buttons/ContextMenu";

const starIconMap: Record<number, React.ReactElement> = {
    1:
        (<div className={"flex ml-auto"}>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
        </div>),
    2:
        (<div className={"flex ml-auto"}>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
        </div>),
    3:
        (<div className={"flex ml-auto"}>
          <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
          <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
          <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
        </div>)
}

interface StudyCardProps {
    name: string;
    course: string;
    daysSinceReview: number;
    numStars: number;
}

export const StudyCard = (props: StudyCardProps) => {
    return (
        <div className="flex items-center relative w-70 rounded-2xl min-h-31 bg-neutral-800">
           <div className={'w-full'}>
               <p className="text-2xl text-green-600 pt-3 pl-4">{props.name}</p>
               <p className="text-xl text-orange-200 pl-4">{props.course}</p>
               <div className={'pt-2 pb-2 flex items-center'}>
                   <p className="pl-4">{props.daysSinceReview}</p>
                   {starIconMap[props.numStars]}
               </div>
           </div>
            <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
        </div>
    )
}