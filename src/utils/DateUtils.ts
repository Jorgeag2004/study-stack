// function takes in string date (YYYY-MM-DD)
// returns diff between input date and today's date
export function get_days_diff(date: string):  number {
    const [year, month, day] = date.split("-").map(Number);
    const targetUtc = Date.UTC(year, month - 1, day); // UTC midnight of input

    const now = new Date();
    const todayUtc = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate()
    ); // UTC midnight today

    const diffMs = targetUtc - todayUtc;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
}

// function takes in string date (YYYY-MM-DD)
// returns date as string in natural language
export function get_days_text(date: string): string {
    const [year, month, day] = date.split("-").map(Number);
    const date_object = new Date(year, month - 1, day);
    return date_object.toLocaleDateString('en-US', {
        month: "short",
        day: "numeric",
    });
}

export const parseLocalDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day)); // month is 0-indexed
};
