import { StudyItem } from '@/types/study_item'
import {get_days_diff} from "@/utils/DateUtils";

export const getStudyItemSortValue = (study_item: StudyItem) => {
    const days_since_review = get_days_diff(study_item.last_review);

    const confidence_value = (3 - study_item.star_rating) * 25

    return confidence_value - days_since_review
}