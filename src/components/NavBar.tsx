import Link from 'next/link'
import {Course} from '@/types/course'
import {fetch_all_courses} from '@/lib/data/fetch_all_courses'
import { CourseButton } from "@/components/buttons/CourseButton";

export async function NavBar() {

    const courses: Course[] = await fetch_all_courses();

    return (
        <div className="flex flex-col gap-8 w-[15%] h-[100%] min-w-[250px] max-w-[350px] bg-neutral-800 border-r border-green-500">
            <Link className={'pl-3'} href="/">
                <p>home</p>
            </Link>
            {courses.map((c: Course) => (
               <CourseButton key={c.id} course_id={c.id} course_name={c.name} icon={c.icon} />
            ))}
        </div>
    )
}