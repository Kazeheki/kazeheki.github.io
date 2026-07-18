export function debounce<T extends (...args: any[]) => void>(fn: T, debounceInMilliseconds: number): T {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return ((...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn(...args), debounceInMilliseconds);
    }) as T;
}