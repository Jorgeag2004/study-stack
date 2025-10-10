interface LearnCardCompressedProps {
    name: string;
    dateCovered: string;
}

export const LearnCardCompressed = (props: LearnCardCompressedProps) => {

    return (
        <div className="relative flex items-center w-70 rounded-2xl h-21 bg-neutral-800">
            <p className="text-2xl text-green-600 pl-4">{props.name}</p>
            <p className="absolute right-3">{props.dateCovered}</p>
        </div>
    )
}