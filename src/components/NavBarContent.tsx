'use client'
import {Course} from "@/types/course";
import Link from "next/link";
import {CourseButton} from "@/components/buttons/CourseButton";
import {CirclePlus} from "lucide-react";
import {useState} from "react";
import {CourseForm} from "@/components/forms/CourseForm";
import {Home} from 'lucide-react'

export const NavbarContent = ({courses}: {courses: Course[]}) => {
    const [openAddCourse, setOpenAddCourse] = useState(false);

    return (
        <div className="flex flex-col gap-8 w-[15%] h-[100%] min-w-[250px] max-w-[350px] bg-neutral-800 border-r border-green-500">
            <Link className={'pl-3 pt-4'} href={'/'}>
                <div className={'flex flex-cols gap-2'}>
                    <p className={'font-bold text-green-600 text-2xl'}>StudyStack...</p>
                </div>
            </Link>

            {courses.map((c: Course) => (
                <CourseButton key={c.id} course_id={c.id} course_name={c.name} icon={c.icon} />
            ))}

            <div className={'pt-3 place-self-end pr-4'} onClick={() => setOpenAddCourse(true)}>
                <CirclePlus className={' stroke-green-50 hover:stroke-gray-500'} />
            </div>
            {openAddCourse && <CourseForm toggle_form={() => setOpenAddCourse(false)} />}
        </div>
    )
}