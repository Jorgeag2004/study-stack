import React from "react";
import {Star} from "lucide-react";
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

interface StudyCardCompressedProps {
    name: string;
    daysSinceReview: number;
    numStars: number;
}

export const StudyCardCompressed = (props: StudyCardCompressedProps) => {
    return (
        <div className="flex items-center relative w-70 rounded-2xl min-h-21 bg-neutral-800">
           <div className={'w-full'}>
               <p className="text-2xl text-green-600 pt-3 pl-4">{props.name}</p>
               <div className='flex items-center pt-5 pb-5'>
                   <p className=" pl-4">{props.daysSinceReview}</p>
                   {starIconMap[props.numStars]}
               </div>
           </div>
            <div>
                <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')} />
            </div>
        </div>
    )
}
