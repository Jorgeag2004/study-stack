interface LearnCardCompressedProps {
    name: string;
    dateCovered: string;
}

export const LearnCardCompressed = (props: LearnCardCompressedProps) => {
    return (
        <div className="flex items-center justify-between w-70 rounded-2xl min-h-21 bg-neutral-800 px-4 py-3 gap-3">
            <p className="text-xl text-green-600 font-medium flex-1 break-words min-w-0" title={props.name}>
                {props.name}
            </p>
            <p className="text-sm text-neutral-300 whitespace-nowrap flex-shrink-0">
                {props.dateCovered}
            </p>
        </div>
    )
}