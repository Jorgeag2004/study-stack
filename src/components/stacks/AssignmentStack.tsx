import { assignment } from '@/types/assignment'
import { AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";

interface assignments_stack_props {
    assignments: Assignment[]
    compressed?:  boolean
}

export const AssignmentStack = (props: assignments_stack_props) => {

    const stack_styling: string = "flex flex-col basis-s w-fit rounded-2xl bg-zinc-600 p-2 gap-6";

    if (props.compressed) {
        return (
            <div className={stack_styling}>
                {props.assignments.map((a: Assignment, index: number) => (
                    <AssignmentCardContainer key={index} name={a.name} id={a.id} dueDate={a.due_date} courseName={a.course_name} courseID={a.course_id} compressed={true} />
                    ))}
            </div>
        )
    }
    return (
        <div className={stack_styling}>
            {props.assignments.map((a: Assignment, index: number) => (
                <AssignmentCardContainer key={index} name={a.name} id={a.id} dueDate={a.due_date} courseName={a.course_name} courseID={a.course_id} compressed={false} />
            ))}
        </div>
    )
}
