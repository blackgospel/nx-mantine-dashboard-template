/**
 * Concatenates two string values to create a new path.
 *
 * @param root - The root path to concatenate.
 * @param sublink - The sublink to concatenate.
 *
 * @returns The concatenated path string.
 */
export const createPath = (root: string, sublink: string): string => {
  return `${root}${sublink}`
}
