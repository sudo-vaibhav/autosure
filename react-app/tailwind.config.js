module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    colors: {
      primary: {
        700: '#4CCDB7',
        900: '#00B899',
      },
      secondary: {
        500: '#DCD7FF',
        900: '#8B7AFC',
      },
      light: {
        100: '#fff',
        300: '#FDFDFD',
        500: '#F2F2F7',
        700: '#D0D1D2',
        900: '#A1A1A1',
      },
      dark: {
        100: '#434343',
        300: '#343434',
        500: '#3E3E3E',
        700: '#303030',
        900: '#000',
      },
      transparent: {
        900: 'rgba(1,1,1,0)',
      },
    },
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18,minmax(0,1fr))',
      },
      gridColumnEnd: {
        '19': '19',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      // this function essentially adds all the colors mentioned above as css variables in the code
      // which can be very helpful
      // https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574

      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars =
            typeof value === 'string'
              ? { [`--${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
}
