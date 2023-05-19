function formatTimestamp(timestamp: Date, locale: string): string {
    return timestamp.toLocaleDateString(locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
}

export default formatTimestamp;
