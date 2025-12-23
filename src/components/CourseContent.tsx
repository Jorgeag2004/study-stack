'use client'
import {useState} from "react";
import {AssignmentForm} from "@/components/forms/AssignmentForm";
import {LearnItemForm} from "@/components/forms/LearnItemForm";
import {StudyItemForm} from "@/components/forms/StudyItemForm";
import { AddButton } from "@/components/buttons/AddButton";
import {Assignment} from "@/types/assignment";
import {StudyItem} from "@/types/study_item";
import {LearnItem} from "@/types/learn_item";
import {AssignmentStack} from "@/components/stacks/AssignmentStack";
import {StudyItemStack} from "@/components/stacks/StudyItemStack";
import {LearnItemStack} from "@/components/stacks/LearnItemStack";

interface CourseContentProps {
    assignments: Assignment[],
    study_items: StudyItem[],
    learn_items: LearnItem[],
    course_id: string
}

export const CourseContent = ({assignments, study_items, learn_items, course_id}: CourseContentProps) => {

    const [openAddAssignment, setOpenAddAssignment] = useState<boolean>(false);
    const [openAddStudyItem, setOpenAddStudyItem] = useState<boolean>(false);
    const [openAddLearnItem, setOpenAddLearnItem] = useState<boolean>(false);

    return (
        <div className={"flex items-center gap-8 justify-center h-screen bg-neutral-800"}>
            <div className={'flex-col'}>
                <AssignmentStack assignments={assignments} compressed={true} />
                <AddButton handleActionClick={() => setOpenAddAssignment(true)}/>
                {openAddAssignment && <AssignmentForm toggle_form={() => setOpenAddAssignment(false)} course_id={course_id}/>}
            </div>
            <div className={'flex-col'}>
                <StudyItemStack study_items={study_items} compressed={true} />
                <AddButton handleActionClick={() => setOpenAddStudyItem(true)}/>
                {openAddStudyItem && <StudyItemForm toggle_form={() => setOpenAddStudyItem(false)} course_id={course_id}/>}
            </div>
            <div className={'flex-col'}>
                <LearnItemStack learn_items={learn_items} compressed={true} />
                <AddButton handleActionClick={() => setOpenAddLearnItem(true)}/>
                {openAddLearnItem && <LearnItemForm toggle_form={() => setOpenAddLearnItem(false)} course_id={course_id}/>}
            </div>
        </div>
    )
}
