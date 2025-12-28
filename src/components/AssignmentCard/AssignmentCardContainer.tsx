import {AssignmentCard} from "@/components/AssignmentCard/AssignmentCard";
import {get_days_diff, get_days_text} from "@/utils/DateUtils";
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
    const days_left: number = get_days_diff(dueDate);
    // get date in text format
    const days_text: string = get_days_text(dueDate);

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
            <AssignmentCardCompressed id={id} color={color} date_text={days_text} dueDate={dueDate} name={name} />
        )
    }

    return (
        <AssignmentCard id={id} name={name} color={color} date_text={days_text} dueDate={dueDate} course={courseName} />
    )
}