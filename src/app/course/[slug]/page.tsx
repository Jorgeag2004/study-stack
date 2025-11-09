import {Assignment} from "@/types/assignment";
import {StudyItem} from "@/types/study_item";
import {LearnItem} from "@/types/learn_item";
import {fetch_assignments_by_id} from "@/lib/data/fetch_assignments_by_id";
import {fetch_learn_items_by_id}  from "@/lib/data/fetch_learn_items_by_id";
import {fetch_study_items_by_id} from "@/lib/data/fetch_study_items_by_id";
import {AssignmentStack} from "@/components/stacks/AssignmentStack";
import {StudyItemStack} from "@/components/stacks/StudyItemStack";
import {LearnItemStack} from "@/components/stacks/LearnItemStack";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: {[key: string]: string}
}) {
    const course_id = searchParams["course_id"]

    const assignments: Assignment[] = await fetch_assignments_by_id(course_id);
    const study_items: StudyItem[] = await fetch_study_items_by_id(course_id);
    const learn_items: LearnItem[] = await fetch_learn_items_by_id(course_id);

    return (
        <div className={"flex items-center gap-8 justify-center h-screen bg-neutral-800"}>
            <AssignmentStack assignments={assignments} compressed={true} />
            <StudyItemStack study_items={study_items} compressed={true} />
            <LearnItemStack learn_items={learn_items} compressed={true} />
        </div>
    )
}