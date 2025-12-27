'use client'
import { ContextMenu } from "@/components/buttons/ContextMenu";

export default async function page(){

    return(
        <div className={"flex items-center gap-8 justify-center h-screen bg-neutral-800"}>
            <ContextMenu edit_function={() => console.log('edit')} delete_function={() => console.log('delete')}/>
        </div>
    )
}