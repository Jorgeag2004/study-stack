import {AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";

export default function page(){

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-white">
            <AssignmentCardContainer name={"HW 3"} dueDate={"2025-11-11"} courseName={"Calc 3"} courseID={"1816b575-b273-419c-b37f-24c2b05b7020"} id={"1816b575-b273-419c-b37f-24c2b05b7020"}/>
        </div>
    )
}