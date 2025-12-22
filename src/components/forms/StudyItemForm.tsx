'use client'
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import { useState } from "react";
import { format } from 'date-fns';
import {DayPicker} from "react-day-picker";
import { Stars } from "@/ui/Stars";
import { edit_study_item_by_id } from "@/lib/data/edit_study_item_by_id";
import { add_study_item } from "@/lib/data/add_study_item";

import 'react-day-picker/style.css'

interface StudyItemFormProps {
    id?: string;
    name?: string;
    star_rating?: number;
    last_review?: string;
    course_id?: string;
}

const schema = z.object({
    name: z.string().min(1, 'Title Required'),
    star_rating: z.number()
})

type FormFields = z.infer<typeof schema>;

export const StudyItemForm = ({id, name, star_rating, last_review, course_id}: StudyItemFormProps) => {

    const [lastReview, setLastReview] = useState(last_review ? new Date(last_review) : new Date());


    const { register, handleSubmit, formState: { errors }, control} = useForm<FormFields>(
        {
            defaultValues: {
                name: name,
                star_rating: star_rating ? star_rating : 1
            },
            resolver: zodResolver(schema),
        }
    )

    const watched_rating =  useWatch<FormFields>({control, name: 'star_rating'});

    const onSubmit: SubmitHandler<FormFields> = (data) => {
       if (id) {
           edit_study_item_by_id({id: id, name: data.name, star_rating: data.star_rating, last_review: format(lastReview, 'yyyy-MM-dd')})
       } else if (course_id) {
           add_study_item(data.name, data.star_rating, format(lastReview, 'yyyy-MM-dd'), course_id)
       }
    }

    return (
        <div className={'bg-neutral-700 rounded-lg'}>
            <form className={'flex flex-col gap-4 '} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={'text-green-600 mt-6 ml-6 mr-6'}>Study Item Title</h2>
                <input {...register('name')} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} type={'text'} placeholder={'Enter Title'}/>
                {errors.name && <div className={'text-red-500 block mx-auto'}>{errors.name.message}</div>}


                <hr className={'border-green-600'} />

                <h2 className={'text-green-600 ml-6 mr-6'}>Last Review</h2>
                <DayPicker animate mode={'single'} selected={lastReview} className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} onSelect={(date) => setLastReview(date!)} />

                <hr className={'border-green-600'} />

                <h2 className={'text-green-600 ml-6 mr-6'}>Star Rating</h2>
                <select className={'mr-6 ml-6 mb-1 bg-neutral-500 rounded-sm pl-2'} {...register('star_rating', { valueAsNumber: true })}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>

                <Stars count={Number(watched_rating)} />

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