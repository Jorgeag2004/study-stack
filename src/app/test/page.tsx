import {LearnCardContainer} from "@/components/LearnCard/LearnCardContainer";
import {StudyCardContainer} from "@/components/StudyCard/StudyCardContainer";
import {AssignmentCardContainer} from "@/components/AssignmentCard/AssignmentCardContainer";

export default function page(){

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-white">
            <LearnCardContainer compressed={true} name={"Conditional Probability"} courseName={"Probs and Sats"} courseID={"aa27363f-2ad8-462b-b6e1-e77270f35ad6"} id={"aa27363f-2ad8-462b-b6e1-e77270f35ad6"} dateCovered={"2025-10-4"} />
        </div>
    )
}