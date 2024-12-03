// src/utils/dateUtils.ts
import { format } from 'date-fns';

/**
 * Formats a date based on the provided format string.
 * @param date - The date to format.
 * @param formatString - The format string to use.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date | string, formatString: string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatString);
};