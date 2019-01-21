import fluid from '@candour/fluid'
import colors from './colors'

export default {
  heading: {
    1: {
      fontWeight: 600,
    },
    2: {
      fontSize: fluid(45, 80),
      letterSpacing: '-.015em',
      fontWeight: 600,
      wordBreak: 'break-word',
    },
    3: {
    },
    4: {
      letterSpacing: '.06em',
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
