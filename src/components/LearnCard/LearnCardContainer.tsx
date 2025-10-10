import {getDateText} from "@/utils/DateUtils";
import {LearnCard} from "./LearnCard";

interface LearnCardContainerProps {
    id: string;
    name: string;
    couseName: string;
    dateCovered: string;
    courseId: string;
}

export const LearnCardContainer = (props: LearnCardContainerProps) => {

    const date_text: string = getDateText(props.dateCovered);

    return (
        <LearnCard name={props.name} course={props.couseName} dateCovered={date_text} />
    )
}