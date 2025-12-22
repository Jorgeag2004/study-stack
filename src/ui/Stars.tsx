import {Star} from "lucide-react";
import React from "react";

export const Stars = ({count}: {count: number}) => {
    switch (count) {
        case 1:
            return  (<div className={"flex justify-center"}>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
                <Star className={"w-5 h-5 fill-neutral-400 stroke-neutral-400"}/>
                <Star className={"w-5 h-5 fill-neutral-400 stroke-neutral-400"}/>
            </div>)
        case 2:
            return  (<div className={"flex justify-center"}>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
                <Star className={"w-5 h-5 fill-neutral-400 stroke-neutral-400"}/>
            </div>)
        case 3:
            return  (<div className={"flex justify-center"}>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
                <Star className={"w-5 h-5 fill-green-600 stroke-green-600"}/>
            </div>)
    }
}