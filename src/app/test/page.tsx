import {LearnCardContainer} from "@/components/LearnCard/LearnCardContainer";
import {StudyCardContainer} from "@/components/StudyCard/StudyCardContainer";
import {AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";
import {AssignmentCardCompressed} from "@/components/AssignmentCard/AssignmentCardCompressed";

export default function page(){

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-white">
            <AssignmentCardContainer compressed={true} dueDate={"2025-10-6"}  name={"Solving Homogenous Solutions"} id={"be3783cf-330f-4c4b-b435-012c52136e2a"} courseID={"be3783cf-330f-4c4b-b435-012c52136e2a"} courseName={"Diff EQ"} />
        </div>
    )
}