import { LearnCard } from "@/components/LearnCard/LearnCard";

export default function page(){

    return(
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-white">
            <LearnCard name={"Newtons 2nd law"} course={"Physics 2"} dateCovered={"Nov 8"}/>
        </div>
    )
}