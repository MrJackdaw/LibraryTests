// utility functions

export function suppress(callback: Function) {
    return function stopPropagation(e: CustomEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (callback) return callback();
    }
}