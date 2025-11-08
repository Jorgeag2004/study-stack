import { StudyCard }  from './StudyCard'
import {get_days_diff} from "@/utils/DateUtils";
import { StudyCardCompressed } from "@/components/StudyCard/StudyCardCompressed";

interface StudyCardContainerProps {
    id: string,
    name: string,
    courseName: string,
    starRating: number,
    lastReview: string,
    courseID: string,
    compressed?: boolean,
}

export const StudyCardContainer = ({id, name, courseName, starRating, lastReview, courseID, compressed=false} : StudyCardContainerProps) => {
    const daysSinceReview: number = get_days_diff(lastReview)

    if (compressed) {
        return (
            <StudyCardCompressed name={name} daysSinceReview={daysSinceReview} numStars={starRating} />
        )
    }

    return (
        <StudyCard name={name} course={courseName} daysSinceReview={daysSinceReview} numStars={starRating} />
    )
}