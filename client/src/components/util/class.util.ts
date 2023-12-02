function mergeClassNames(
  initial: string | string[],
  additional?: string | undefined
) {
  const classNames = Array.isArray(initial) ? initial : [initial];
  if (additional) {
    classNames.push(additional);
  }
  return classNames.join(" ");
}

export default mergeClassNames;
