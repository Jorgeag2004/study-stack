import {Course} from '@/types/course'
import {fetch_all_courses} from '@/lib/data/fetch_all_courses'
import {NavbarContent} from "@/components/NavBarContent";

export const dynamic = 'force-dynamic';

export async function NavBar() {

    const courses: Course[] = await fetch_all_courses();

    return (
        <NavbarContent courses={courses} />
    )
}