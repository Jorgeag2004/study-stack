import {get_days_text} from "@/utils/DateUtils";
import {LearnCard} from "@/components/LearnCard/LearnCard";
import {LearnCardCompressed} from "@/components/LearnCard/LearnCardCompressed";

interface LearnCardContainerProps {
    id: string;
    name: string;
    courseName: string;
    dateCovered: string;
    courseID: string;
    compressed?: boolean;
}

export const LearnCardContainer = ({id, name, courseName, dateCovered, courseID, compressed=false}: LearnCardContainerProps) => {

    const date_text: string = get_days_text(dateCovered);

    if (compressed) {
        return (
            <LearnCardCompressed id={id} date_text={date_text} dateCovered={dateCovered} name={name} />
        )
    }

    return (
        <LearnCard id={id} date_text={date_text} name={name} course={courseName} dateCovered={dateCovered} />
    )

}