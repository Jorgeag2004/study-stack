import { LearnItem } from "@/types/learn_item";
import { LearnCardContainer } from "@/components/LearnCard/LearnCardContainer";

interface LearnItemStackProps {
    learn_items: LearnItem[];
    compressed: boolean;
}

 export const LearnItemStack = (props: LearnItemStackProps) => {

    const stack_styling: string = "flex flex-col basis-s w-fit rounded-2xl bg-zinc-600 p-2 gap-6";
    return (
        <div className={stack_styling}>
            {props.learn_items.map((l: LearnItem, index: number) => (
               <LearnCardContainer key={index} id={l.id} name={l.name} courseName={l.course_name} dateCovered={l.date_covered} courseID={l.course_id} compressed={props.compressed} />
            ))}
        </div>
    )
}