module.exports = {
    content: [
		'snippets/**/*.php',
		'templates/**/*.php',
		'source/styles/**/*.css'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			'light': {
				'white': {
					DEFAULT: '#FFFFFF',
				},
				'green': {
					DEFAULT: '#EFF6F6',
					1: '#99D0D2',
					2: '#47BBC0',
				},
				'gray': {
					DEFAULT: '#CDCDCD',
					1: '#F2F2F2',
				},
				'red': {
					DEFAULT: '#E9DCDC'
				},
				'orange': {
					DEFAULT: '#FBEFD8'
				}
			},
			'dark': {
				'black': {
					DEFAULT: 'black',
				},
				'green': {
					DEFAULT: '#003A4B',
					1: '#007863',
					2: '#00A6A3',
				},
				'gray': {
					DEFAULT: '#495A57',
					1: '#6D7372',
				},
				'red': {
					DEFAULT: '#780000'
				},
				'orange': {
					DEFAULT: '#F39714',
					1: '#B46C07'
				}
			},
			data: {
			 	unfolded: 'status="unfolded"',
			 	folded: 'status="folded"',
			},

		},
		container: {
		 	padding: {
		 		DEFAULT: '1rem',
		 		sm: '2rem',
		 	},
		},
		fontFamily: {
			'sans-1': ['Open sans', 'sans-serif'],
			'sans-2': ['Titillium Web', 'sans-serif'],
		},
		extend: {
			gridTemplateColumns: {	  
			  // Complex site-specific column configuration
			  '50-50': '50% 50%',
			},
			maxWidth:{
				'prose': '75ch',
			}
		}
	}
}
  