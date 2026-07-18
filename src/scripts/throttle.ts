export function throttle<T extends (...args: any[]) => void>(fn: T, throttleTimeInMilliseconds: number): T {
    let lastInvocation: ReturnType<typeof Date.now> = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    return ((...args) => {
        const now = Date.now();
        const remainingMilliseconds = throttleTimeInMilliseconds - (now - lastInvocation);
        if (remainingMilliseconds <= 0) {
            lastInvocation = now;
            fn(...args);
        } else if (!timer) {
            timer = setTimeout(() => {
                lastInvocation = Date.now();
                timer = null;
                fn(...args);
            }, remainingMilliseconds);
        }
    }) as T;
}