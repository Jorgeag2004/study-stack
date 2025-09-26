import {AssignmentCard} from "@/app/components/AssignmentCard";

export default function page(){

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-white">
            <AssignmentCard name={"HW 2"} course={"Calc II"} dueDate={"Nov 2"} color={"yellow-600"}/>
        </div>
    )
}