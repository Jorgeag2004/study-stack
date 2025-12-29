'use client'
import { useForm, SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { add_assignment } from "@/lib/data/add_assignment";
import { edit_assignment_by_id } from "@/lib/data/edit_assignment_by_id";
import {parseLocalDate} from "@/utils/DateUtils";

import 'react-day-picker/style.css'


interface AssignmentFormProps {
    id?: string;
    name?: string;
    due_date?: string;
    course_id?: string;
    toggle_form: () => void;
}

const schema = z.object({
    name: z.string().min(1, 'Assignment Title Required').max(30, 'Title too long'),
})

type FormFields = z.infer<typeof schema>;

export function AssignmentForm({id, name, due_date, course_id, toggle_form}: AssignmentFormProps) {

    const [dueDate, setDueDate] = useState(due_date ? parseLocalDate(due_date) : new Date());

    const { register, handleSubmit, formState: { errors }} = useForm<FormFields>(
        {
            defaultValues: {
                name: name,
            },
            resolver: zodResolver(schema),
        }
    )

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        const name = data.name;
        const date_formatted: string = format(dueDate, 'yyyy-MM-dd');

        if (id) {
            edit_assignment_by_id({id: id, name: name, due_date: date_formatted})
        } else if (course_id) {
            add_assignment(name, date_formatted, course_id)
        }
        toggle_form();
    }

    return (
        <div className={'fixed inset-0 bg-white/5 backdrop-blur-md flex items-center justify-center z-50'}>
            <div className={'bg-neutral-700 rounded-lg'}>
                <form className={'flex flex-col gap-4 '} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Assignment Title</h2>
                    <input {...register('name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Title'}/>
                    {errors.name && <div className={'text-red-500 block mx-auto'}>{errors.name.message}</div>}

                    <hr className={'border-green-600'} />

                    <h2 className={'text-green-600 ml-6 mr-6'}>Due Date</h2>
                    <DayPicker animate mode={'single'} selected={dueDate} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} onSelect={(date) => setDueDate(date!)} />

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
