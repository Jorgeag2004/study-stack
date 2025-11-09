import { Assignment } from '@/types/assignment'
import { AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";

interface AssignmentStackProps {
    assignments: Assignment[]
    compressed:  boolean
}

export const AssignmentStack = (props: AssignmentStackProps) => {

    const stack_styling: string = "flex flex-col basis-s w-fit rounded-2xl bg-zinc-600 p-2 gap-6";

    return (
        <div className={stack_styling}>
            {props.assignments.map((a: Assignment, index: number) => (
                <AssignmentCardContainer key={index} name={a.name} id={a.id} dueDate={a.due_date} courseName={a.course_name} courseID={a.course_id} compressed={props.compressed} />
                ))}
        </div>
    )
}
