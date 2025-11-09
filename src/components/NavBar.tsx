import Link from 'next/link'
import {Course} from '@/types/course'
import {fetch_all_courses} from '@/lib/data/fetch_all_courses'

export async function NavBar() {

    const courses: Course[] = await fetch_all_courses();

    return (
        <div className="flex flex-col gap-8 w-[15%] h-[100%] min-w-[250px] max-w-[350px] bg-neutral-800 border-r border-green-500">
            <Link href="/">
                <p>home</p>
            </Link>
            {courses.map((c: Course, index: number) => (
                <Link key={index} href={{pathname: `/course/${c.name}`, query: {course_id: c.id}}}>
                    {c.name}
                </Link>
            ))}
        </div>
    )
}