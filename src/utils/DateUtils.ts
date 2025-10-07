// function takes in string date (YYYY-MM-DD)
// returns diff between input date and today's date
export function getDaysDiff(date: string):  number {
    const date_object: Date = new Date(date);
    // handle invalid input
    if (isNaN(date_object.getTime())) {
        throw new Error(`Invalid date string: "${date}"`);
    }

    const today = new Date();
    // strip time for full numbers
    today.setHours(0, 0, 0, 0);

    // diff in milliseconds
    const diff_ms: number = date_object.getTime() - today.getTime();
    // convert to days
    const diff_days: number = diff_ms / (1000 * 60 * 60 * 24)
    console.log(diff_days);
    return diff_days;
}
