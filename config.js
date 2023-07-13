module.exports = {
	paths: {
        output: 'assets/',
        cms : {
            input: [
                'templates/**/*.php',
                'snippets/**/*.php',
            ]
        },
        scripts: {
            input: 'source/scripts/*',
            polyfills: '.polyfill.js',
            output: 'assets/scripts/'
        },
        styles: {
            input: 'source/styles/main.css',
            watch: 'source/styles/**/*.css',
            output: 'assets/styles/'
        }
    }
}






