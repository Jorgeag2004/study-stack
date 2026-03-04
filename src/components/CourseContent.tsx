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
import {ContextMenu} from "@/components/buttons/ContextMenu";
import {CourseForm} from "@/components/forms/CourseForm";
import {delete_course_by_id} from "@/lib/data/delete_course_by_id";
import { IconMap } from "@/lib/Icons"
import { HelpCircle } from "lucide-react";

interface CourseContentProps {
    assignments: Assignment[],
    study_items: StudyItem[],
    learn_items: LearnItem[],
    course_id: string,
    name: string;
    icon: string;
}

export const CourseContent = ({assignments, study_items, learn_items, course_id, name, icon}: CourseContentProps) => {

    const [openAddAssignment, setOpenAddAssignment] = useState<boolean>(false);
    const [openAddStudyItem, setOpenAddStudyItem] = useState<boolean>(false);
    const [openAddLearnItem, setOpenAddLearnItem] = useState<boolean>(false);
    const [openEditCourse, setOpenEditCourse] = useState<boolean>(false);

    const Icon = IconMap[icon] ?? HelpCircle

    return (
        <div className={'bg-neutral-800 w-full h-full'}>
            <div className={'p-3 flex items-center gap-2'}>
                <ContextMenu edit_function={() => setOpenEditCourse(true)} delete_function={() => delete_course_by_id(course_id)}/>
                <p className={'text-2xl'}>{name}</p>
                <Icon/>
            </div>
            <div className={"h-full flex items-center gap-8 justify-center"}>
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
            {openEditCourse && <CourseForm toggle_form={() => setOpenEditCourse(false)} course_name={name} id={course_id} icon={icon} />}
        </div>
    )
}
