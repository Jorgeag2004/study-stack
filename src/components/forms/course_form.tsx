'use client'
import * as LucideIcons from 'lucide-react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";

interface CourseFormProps {
    course_name?: string;
    icon?: IconType;
}

const IconEnum = z.enum(Object.keys(LucideIcons) as [string, ...string[]]);

type IconType = z.infer<typeof IconEnum>;

const schema = z.object({
    course_name: z.string().min(1, 'Course Name is Required'),
    icon: IconEnum
})

type FormFields = z.infer<typeof schema>;

export function CourseForm({ course_name, icon }: CourseFormProps) {

    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>(
        {
            defaultValues: {
                course_name: course_name,
                icon: icon ? icon : 'Circle'
            },
            resolver: zodResolver(schema),
        }
    );

    const watched_icon = useWatch<FormFields>({ control, name: 'icon' });

    const Icon = watched_icon
        ? LucideIcons[watched_icon as keyof typeof LucideIcons]
        : null;

    const onSubmit:  SubmitHandler<FormFields> = (data) => {
       console.log(data);
    }

    return (
        <div className={'bg-neutral-700 rounded-lg'}>
            <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Course Name</h2>
                <input {...register('course_name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Course Name'}/>
                {errors.course_name && <div className={'text-red-500 block mx-auto'}>{errors.course_name.message}</div>}

                <hr className={'border-green-600'} />

                <h2 className={'text-green-600 ml-6 mr-6'}>Icon</h2>
                <select {...register('icon')} className={'ml-6 mr-6 bg-neutral-500 rounded-sm'}>
                    {Object.keys(LucideIcons).map((iconName) => (
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
                    <button
                        className="w-full flex-grow rounded-b-lg hover:bg-neutral-500"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}