export function magnifier(width) {
    if (width.slice(0, -1) * 1 + 0.25 <= 30) width = width.slice(0, -1) * 1 + 0.1 + "%";
    return width;
}

export function shrinker(width) {
    if (width.slice(0, -1) * 1 - 0.25 >= 4) width = width.slice(0, -1) * 1 - 0.1 + "%";
    return width;
}