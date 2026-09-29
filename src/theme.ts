/**
 * Design tokens for 1stapp.
 * Everything visual should reference these instead of hard-coded values,
 * so the whole app can be re-themed from one place.
 */

export const colors = {
  background: '#F5F6FA',
  surface: '#FFFFFF',
  border: '#E4E7EC',

  text: '#101828',
  textMuted: '#667085',

  accent: '#4F46E5',
  accentSoft: '#EEF2FF',
  accentPressed: '#4338CA',

  success: '#12B76A',
  successSoft: '#ECFDF3',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

export const fonts = {
  title: 30,
  heading: 18,
  body: 15,
  caption: 13,
  tiny: 11,
} as const;

/** Soft elevation that reads well on both Android and iOS. */
export const shadow = {
  shadowColor: '#101828',
  shadowOpacity: 0.06,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 2,
} as const;
