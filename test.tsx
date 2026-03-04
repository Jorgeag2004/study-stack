import { fetch_course_info_by_id } from "@/lib/data/fetch_course_info_by_id";

async function main() {
    const res = await fetch_course_info_by_id('7694100d-ac92-4afb-84cf-0e2e273a1549')

    console.log(res);
}

main().catch(console.error);