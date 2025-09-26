interface LearnCardProps {
    name: string;
    course: string;
    dateCovered: string;
}

export const LearnCard = (props: LearnCardProps) => {
    return(
      <div className="relative w-70 rounded-2xl h-31 bg-neutral-800">
        <p className="text-2xl text-green-600 pt-3 pl-4">{props.name}</p>
          <p className="text-xl text-orange-200 pl-4">{props.course}</p>
          <p className="absolute bottom-3 right-3">{props.dateCovered}</p>
      </div>
    )
}