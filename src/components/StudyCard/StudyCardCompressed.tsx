import React from "react";
import {Star} from "lucide-react";

const starIconMap: Record<number, React.ReactElement> = {
    1:
        (<div className={"flex absolute bottom-[17px] right-3"}>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
        </div>),
    2:
        (<div className={"flex absolute bottom-[17px] right-3"}>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            <Star className={"w-5 h-5 fill-neutral-700 stroke-neutral-700"}/>
        </div>),
    3:
        (<div className={"flex absolute bottom-[17px] right-3"}>
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
        <div className="relative w-70 rounded-2xl h-21 bg-neutral-800">
            <p className="text-2xl text-green-600 pt-3 pl-4">{props.name}</p>
            <p  className="absolute bottom-3 pl-4">{props.daysSinceReview}</p>
            {starIconMap[props.numStars]}
        </div>
    )
}
