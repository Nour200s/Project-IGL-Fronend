/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:["Poppins"]
    },
    fontSize: {
      'custom': '49px',
      '40px':'40px',
      '28px':'28px',   
      '21px':'21px',
      '26px':'26px',
      '31px':'31px', 
      '55px':'55px', 
      '50px':'50px',

    },
  },
  plugins: [],
}


