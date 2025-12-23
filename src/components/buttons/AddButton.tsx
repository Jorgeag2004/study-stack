'use client'

import { Plus } from 'lucide-react'

export const AddButton = ({handleActionClick}: {handleActionClick : () => void})=> {
    return (
        <div className={'pt-3 place-self-end'} onClick={handleActionClick}>
            <Plus className={' stroke-green-600 hover:stroke-gray-500'} />
        </div>
    )
}