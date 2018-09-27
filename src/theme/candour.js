import fluid from '@candour/fluid'
import colors from './colors'

export default {
  heading: {
    1: {
      fontSize: fluid(40, 60),
      lineHeight: fluid(45, 65),
      fontWeight: 600,
    },
    2: {
      fontSize: fluid(45, 80),
      lineHeight: fluid(45, 80),
      letterSpacing: '-.015em',
      fontWeight: 600,
    },
    3: {
      fontSize: fluid(20, 24),
      lineHeight: fluid(24, 28),
    },
    4: {
      letterSpacing: '.06em',
      fontSize: fluid(14, 16),
      lineHeight: fluid(14, 16),
    },
  },
  text: {
    1: {
      color: colors.grey,
    },
    2: {
      color: colors.grey,
    },
    3: {
      fontSize: fluid(20, 24),
      lineHeight: fluid(23, 36),
      color: colors.grey,
    },
  },
  button: {
    base: {
      backgroundColor: colors.darkGrey,
      fontSize: fluid(14, 18),
      minWidth: fluid(150, 250),
      maxWidth: fluid(150, 250),
    },
  },
  narrow: {
    maxWidth: '300px',
  },
  limited: {
    maxWidth: '700px',
  },
}
