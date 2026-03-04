'use client'
import * as LucidIcons from 'lucide-react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { add_course } from "@/lib/data/add_course";
import { edit_course_by_id } from "@/lib/data/edit_course_by_id";
import { IconMap } from "@/lib/Icons"

interface CourseFormProps {
    course_name?: string;
    icon?: IconType;
    id?: string;
    toggle_form: () => void;
}

const iconNames = Object.keys(IconMap)

const IconEnum = z.enum(iconNames as [string, ...string[]]);

type IconType = z.infer<typeof IconEnum>;

const schema = z.object({
    course_name: z.string().min(1, 'Course Name is Required'),
    icon: IconEnum
})

type FormFields = z.infer<typeof schema>;

export function CourseForm({ course_name, icon, id, toggle_form}: CourseFormProps) {

    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>(
        {
            defaultValues: {
                course_name: course_name,
                icon: icon ? icon : 'Sigma'
            },
            resolver: zodResolver(schema),
        }
    );

    const watched_icon = useWatch<FormFields>({ control, name: 'icon' });

    const Icon = IconMap[watched_icon];

    const onSubmit:  SubmitHandler<FormFields> = async (data) => {
        if (id && (!icon || !course_name)) {
            throw new TypeError('Parameters icon and course_name must be provided when id is passed')
        } else if (id) {
            await edit_course_by_id({id: id, name: data.course_name, icon: data.icon})
        } else {
            await add_course(data.course_name, data.icon)
        }
        toggle_form();
    }

    return (
        <div className={'fixed inset-0 bg-white/5 backdrop-blur-md flex items-center justify-center z-50'}>
            <div className={'bg-neutral-700 rounded-lg'}>
                <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Course Name</h2>
                    <input {...register('course_name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Course Name'}/>
                    {errors.course_name && <div className={'text-red-500 block mx-auto'}>{errors.course_name.message}</div>}

                    <hr className={'border-green-600'} />

                    <h2 className={'text-green-600 ml-6 mr-6'}>Icon</h2>
                    <select {...register('icon')} className={'ml-6 mr-6 bg-neutral-500 rounded-sm'}>
                        {iconNames.map((iconName) => (
                            <option key={iconName} value={iconName}>
                                {iconName}
                            </option>
                        ))}
                    </select>
                    {Icon && (
                        <Icon className="block mx-auto m-3 mt-2 stroke-green-600" />
                    )}
                    <div className="flex flex-col h-10 flex-grow">
                        <hr className="border-green-600" />
                        <div className="flex h-10 flex-grow">
                            <button
                                type={'button'}
                                className="w-full flex-grow rounded-b-lg hover:bg-neutral-500"
                                onClick={() => {toggle_form()}}
                            >
                                Cancel
                            </button>
                            <button
                                className="w-full flex-grow rounded-b-lg hover:bg-neutral-500"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}