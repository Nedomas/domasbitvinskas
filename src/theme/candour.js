import fluid from '@candour/fluid'
import colors from './colors'

export default {
  headline: {
    1: {
      fontSize: fluid(40, 60),
      lineHeight: fluid(45, 65),
    },
    2: {
      fontSize: fluid(45, 80),
      lineHeight: fluid(45, 80),
      letterSpacing: '-.015em',
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
    backgroundColor: colors.darkGrey,
    fontSize: fluid(14, 18),
    minWidth: fluid(150, 250),
    maxWidth: fluid(150, 250),
  },
}
