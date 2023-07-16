module.exports = {
    content: [
		'snippets/**/*.php',
		'templates/**/*.php',
		'source/styles/**/*.css'
	],
	theme: {
		colors: {
			transparent: 'transparent',
            token : {
                'light': {
                    'white': {
                        DEFAULT: '#FFFFFF',
                    }
                },
                'dark': {
                    'black': {
                        DEFAULT: 'black',
                    }
                },

            accent : {
                'dark': {
                    'brand': {
                        '1': '',
                        '2': '',
                    },
                },
                'light' {
                    'brand': {
                        '1': '',
                        '2': '',
                    }
                },
            },
            'heading' : '',
            'body': '',
            'body-light' : '',
            

		},
		container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
		},
		extend: {
			maxWidth:{
				'prose': '75ch',
			}
		}
	}
}
  