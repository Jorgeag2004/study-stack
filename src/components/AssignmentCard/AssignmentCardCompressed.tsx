import {Circle} from "lucide-react";

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

    const circleStyle: string = `w-4 h-4 absolute right-2 ${colorMap[props.color] ?? ""}`;
    return (
        <div className="relative flex items-center w-70 rounded-2xl h-21 bg-neutral-800">
            <p className="text-2xl text-green-600 pl-4">{props.name}</p>
            <p className="absolute right-8">{props.dueDate}</p>
            <Circle className={circleStyle} />
        </div>
    )
}