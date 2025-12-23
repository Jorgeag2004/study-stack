import { StudyItem } from '@/types/study_item'
import { StudyCardContainer } from "@/components/StudyCard/StudyCardContainer";

interface StudyItemStackProps {
    study_items:  StudyItem[];
    compressed:    boolean;
}

export const StudyItemStack = (props: StudyItemStackProps) => {

    const stack_styling: string = "flex min-w-70 min-h-10 flex-col basis-s w-fit rounded-2xl bg-zinc-600 p-2 gap-6";

    return (
        <div className={stack_styling}>
            {props.study_items.map((s: StudyItem, index: number) => (
                <StudyCardContainer key={index} name={s.name} starRating={s.star_rating} courseName={s.course_name} courseID={s.course_id} id={s.id} lastReview={s.last_review} compressed={props.compressed} />
            ))}
        </div>
    )
}