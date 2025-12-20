'use client'
import { useForm, SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';

import 'react-day-picker/style.css'


interface AssignmentFormProps {
    id?: string;
    name?: string;
    due_date?: string;
}

const schema = z.object({
    name: z.string().min(1, 'Assignment Title Required'),
})

type FormFields = z.infer<typeof schema>;

export function AssignmentForm({id, name, due_date}: AssignmentFormProps) {

    const [startDate, setStartDate] = useState(due_date ? new Date(due_date) : new Date());

    const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>(
        {
            defaultValues: {
                name: name,
            },
            resolver: zodResolver(schema),
        }
    )

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data.name)
        console.log(format(startDate, 'yyyy-MM-dd'))
    }

    return (

        <div className={'bg-neutral-700 rounded-lg'}>
            <form className={'flex flex-col gap-4 '} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Assignment Title</h2>
                <input {...register('name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Title'}/>
                {errors.name && <div className={'text-red-500 block mx-auto'}>{errors.name.message}</div>}

                <hr className={'border-green-600'} />

                <h2 className={'text-green-600 ml-6 mr-6'}>Due Date</h2>
                <DayPicker animate mode={'single'} selected={startDate} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} onSelect={(date) => setStartDate(date)} />

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
