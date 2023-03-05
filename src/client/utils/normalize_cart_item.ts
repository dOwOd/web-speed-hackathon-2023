const MAX_LENGTH = 2;

export const normalizeCartItemCount = (item: number) => item > MAX_LENGTH ? MAX_LENGTH : item;
