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
import { CourseForm } from '@/components/forms/CourseForm';
import { IconType } from "@/types/lucide_icon";
import { AssignmentForm } from "@/components/forms/AssignmentForm";
import { LearnItemForm } from "@/components/forms/LearnItemForm";
import { StudyItemForm } from "@/components/forms/StudyItemForm";


export default async function page(){

    return(
        <div className={"flex items-center gap-8 justify-center h-screen bg-neutral-800"}>
            <StudyItemForm id={'579716b5-f1e2-4df8-b91b-7af3712b3fee'} name={'Combinationals'} star_rating={2} last_review={'2025-12-23'}/>
        </div>
    )
}