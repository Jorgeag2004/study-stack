import {LearnCardContainer} from "@/components/LearnCard/LearnCardContainer";
import {StudyCardContainer} from "@/components/StudyCard/StudyCardContainer";
import {AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";
import { AssignmentStack } from "@/components/stacks/AssignmentStack";
import { Assignment } from '@/types/assignment'
import { fetch_all_assignments } from "@/lib/data/fetch_all_assignments";

export default async function page(){

    const assignments: Assignment[] = await fetch_all_assignments()

    return(
        <div className={"flex items-center justify-center h-screen bg-neutral-800"}>
            <AssignmentStack assignments={assignments} compressed={false} />
        </div>
    )
}