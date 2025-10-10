import { StudyCard }  from './StudyCard'
import {getDaysDiff} from "@/utils/DateUtils";

interface StudyCardContainerProps {
    id: string,
    name: string,
    couseName: string,
    starRating: number,
    lastReview: string,
    courseId: string
}

export const StudyCardContainer = (props: StudyCardContainerProps) => {
    const daysSinceReview: number = getDaysDiff(props.lastReview)

    return (
        <StudyCard name={props.name} course={props.couseName} daysSinceReview={daysSinceReview} numStars={props.starRating} />
    )
}