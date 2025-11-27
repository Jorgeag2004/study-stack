import { AssignmentStack } from "@/components/stacks/AssignmentStack";
import { Assignment } from '@/types/assignment'
import { fetch_all_assignments } from "@/lib/data/fetch_all_assignments";
import { StudyItem } from "@/types/study_item";
import { StudyItemStack } from "@/components/stacks/StudyItemStack";
import {fetch_all_study_items } from "@/lib/data/fetch_all_study_items";
import { fetch_all_learn_items } from "@/lib/data/fetch_all_learn_items";
import { LearnItem } from '@/types/learn_item'
import { LearnItemStack } from '@/components/stacks/LearnItemStack'
import { Course } from '@/types/course';
import { CourseButton } from "@/components/CourseButton";
import { CourseForm } from '@/components/forms/course_form';
import { IconType } from "@/types/lucide_icon";


export default async function page(){

    const assignments: Assignment[] = await fetch_all_assignments()

    const study_items: StudyItem[] = await fetch_all_study_items()

    const learn_items: LearnItem[] = await fetch_all_learn_items()


    return(
        <div className={"flex items-center gap-8 justify-center h-screen bg-neutral-800"}>
            <CourseForm course_name={'Calc III'} icon={'Eye'}/>
        </div>
    )
}