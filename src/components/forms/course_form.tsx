import { IconType } from '@/types/lucide_icon'
import * as LucideIcons from 'lucide-react';
import { Circle } from 'lucide-react'

interface CourseFormProps {
    course_name?: string;
    icon: IconType;
}

export function CourseForm() {

    return (
        <div className={'bg-neutral-700 rounded-lg'}>
            <form className={'flex flex-col gap-4'}>
                <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Course Name</h2>
                <input className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Course Name'}/>
                <hr className={'border-green-600'} />
                <h2 className={'text-green-600 ml-6 mr-6'}>Icon</h2>
                <select className={'ml-6 mr-6 bg-neutral-500 rounded-sm'}>
                    <option value={'math'}>Math</option>
                </select>
            </form>
            <Circle className={'block mx-auto m-3 mt-5 stroke-green-600'}/>
        </div>
    )
}