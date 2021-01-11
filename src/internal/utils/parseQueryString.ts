function parseValue(value: any) {
    if (!isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
        value = Number(value);
    } else if (value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
        value = value.toLowerCase() === 'true';
    }
    return value;
}

export function parseQueryString<T>(search: string): T {
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce(
        (params, hash) => {
            const split = hash.indexOf('=');
            const key = hash.slice(0, split);
            const value = parseValue(hash.slice(split + 1));
            return Object.assign(params, { [key]: value });
        },
        {} as any,
    );
}
