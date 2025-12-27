interface LearnCardProps {
    name: string;
    course: string;
    dateCovered: string;
}

export const LearnCard = (props: LearnCardProps) => {
    return (
        <div className="w-70 rounded-2xl min-h-31 bg-neutral-800 p-3 flex flex-col justify-between">
            <div className="flex-shrink min-h-0">
                <p className="text-xl text-green-600 font-medium break-words leading-tight" title={props.name}>
                    {props.name}
                </p>
                <p className="text-lg text-orange-200 break-words leading-tight" title={props.course}>
                    {props.course}
                </p>
            </div>
            <div className="flex justify-end flex-shrink-0 mt-2">
                <p className="text-sm text-neutral-300">
                    {props.dateCovered}
                </p>
            </div>
        </div>
    )
}