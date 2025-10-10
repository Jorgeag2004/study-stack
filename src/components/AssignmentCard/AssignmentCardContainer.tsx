import {AssignmentCard} from "@/components/AssignmentCard/AssignmentCard";
import {getDaysDiff, getDateText} from "@/utils/DateUtils";
import {AssignmentCardCompressed} from "@/components/AssignmentCard/AssignmentCardCompressed";

interface AssignmentCardContainerProps {
    id: string,
    name: string,
    courseName: string,
    dueDate: string,
    courseID: string,
    compressed?: boolean,
}

export const AssignmentCardContainer = ({id, name, dueDate, compressed=false, courseName, courseID}: AssignmentCardContainerProps) => {
    // find days until due date
    const days_left: number = getDaysDiff(dueDate);
    // get date in text format
    const days_text: string = getDateText(dueDate);

    let color: string;
    if (days_left <= 1) {
        color = "red-600";
    }
    else if (days_left <= 5) {
        color = "yellow-600";
    }
    else {
        color = "green-600";
    }

    if (compressed) {
        return (
            <AssignmentCardCompressed color={color} dueDate={days_text} name={name} />
        )
    }

    return (
        <AssignmentCard name={name} color={color} dueDate={days_text} course={courseName} />
    )
}