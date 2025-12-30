import Link from 'next/link'
import { IconType } from "@/types/lucide_icon";
import * as LucideIcons from "lucide-react";

interface CourseButtonProps {
    course_id: string;
    course_name: string;
    icon: IconType;
}

export function CourseButton(props: CourseButtonProps) {
    const Icon = (LucideIcons as unknown as Record<string, React.ComponentType>)[props.icon];

    return (
       <Link className={'pl-3'} href={{pathname: `/course/${props.course_name}`, query: {course_id: props.course_id}}}>
            <div className={'flex flex-cols gap-2 items-center'}>
                <p className={'text-2xl'}>{props.course_name}</p>
                <Icon className={'fill-gray-600 stroke-green-600'} />
            </div>
       </Link>
    )
}