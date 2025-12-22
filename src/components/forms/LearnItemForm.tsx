'use client'
import { useForm, SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {format} from "date-fns";
import { add_learn_item } from "@/lib/data/add_learn_item";
import { edit_learn_item_by_id } from "@/lib/data/edit_learn_item_by_id";
import {DayPicker} from "react-day-picker";

import 'react-day-picker/style.css'
import {add_course} from "@/lib/data/add_course";

interface LearnItemFormProps {
    id?: string;
    name?: string;
    date_covered?: string;
    course_id?: string;
}

const schema = z.object({
    name: z.string().min(1, 'Title Required'),
})

type FormFields = z.infer<typeof schema>;

export const LearnItemForm = ({id, name, date_covered, course_id}: LearnItemFormProps) => {

    const [dateCovered, setDateCovered] = useState(date_covered ? new Date(date_covered) : new Date());

    const { register, handleSubmit, formState: { errors }} = useForm<FormFields>(
        {
            defaultValues: {
                name: name,
            },
            resolver: zodResolver(schema),
        }
    )

    const onSubmit: SubmitHandler<FormFields> = (data) => {
       const name = data.name
       const date_formatted = format(dateCovered, 'yyyy-MM-dd')

       if (id) {
           edit_learn_item_by_id({name: name, id: id, date_covered: date_formatted})
       } else if (course_id) {
           add_learn_item(name, date_formatted, course_id)
       }
    }

    return (
        <div className={'bg-neutral-700 rounded-lg'}>
           <form className={'flex flex-col gap-4 '} onSubmit={handleSubmit(onSubmit)}>
               <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Learning Item Title</h2>
               <input {...register('name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Title'}/>
               {errors.name && <div className={'text-red-500 block mx-auto'}>{errors.name.message}</div>}

               <hr className={'border-green-600'} />


               <h2 className={'text-green-600 ml-6 mr-6'}>Date Covered</h2>
               <DayPicker animate mode={'single'} selected={dateCovered} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} onSelect={(date) => setDateCovered(date!)} />

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