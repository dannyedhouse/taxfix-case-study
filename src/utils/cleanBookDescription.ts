export const cleanDescription = (desc: string | undefined) => {
  if (!desc) return undefined;

  let cleaned = desc.split(/----------\s*Also contained in:/i)[0];

  cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  cleaned = cleaned.trim();

  return cleaned || undefined;
};
