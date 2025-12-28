import {Assignment} from "@/types/assignment";
import {StudyItem} from "@/types/study_item";
import {LearnItem} from "@/types/learn_item";
import {fetch_assignments_by_id} from "@/lib/data/fetch_assignments_by_id";
import {fetch_learn_items_by_id}  from "@/lib/data/fetch_learn_items_by_id";
import {fetch_study_items_by_id} from "@/lib/data/fetch_study_items_by_id";
import {Course} from "@/types/course";
import {fetch_course_info_by_id} from "@/lib/data/fetch_course_info_by_id";
import {CourseContent} from "@/components/CourseContent";

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: {[key: string]: string}
}) {

    const course_id = searchParams["course_id"]


    const assignments: Assignment[] = await fetch_assignments_by_id(course_id);
    const study_items: StudyItem[] = await fetch_study_items_by_id(course_id);
    const learn_items: LearnItem[] = await fetch_learn_items_by_id(course_id);

    const res = await fetch_course_info_by_id(course_id);

    const name: string = res.name

    const icon: string = res.icon

    return (<CourseContent name={name} course_id={course_id} assignments={assignments} study_items={study_items} icon={icon} learn_items={learn_items}/>)
}