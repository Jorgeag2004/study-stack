import {AssignmentCard} from "@/components/AssignmentCard/AssignmentCard";
import {getDaysDiff, getDateText} from "@/utils/DateUtils";

interface AssignmentCardContainerProps {
    id: string,
    name: string,
    courseName: string,
    dueDate: string,
    courseID: string,
}

export const AssignmentCardContainer = (props: AssignmentCardContainerProps) => {
    // find days until due date
    const days_left: number = getDaysDiff(props.dueDate);
    // get date in text format
    const days_text: string = getDateText(props.dueDate);

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

    return (
        <AssignmentCard name={props.name} color={color} dueDate={days_text} course={props.courseName} />
    )
}