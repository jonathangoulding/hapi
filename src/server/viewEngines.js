const Nunjucks = require('nunjucks');
const Vision = require('@hapi/vision');

module.exports = {
        engines: {
            html: {
                compile: (src, options) => {

                    const template = Nunjucks.compile(src, options.environment);

                    return (context) => {

                        return template.render(context);
                    };
                },

                prepare: (options, next) => {

                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch : false });

                    return next();
                }
            }
        },
        relativeTo: __dirname,
        path: '../'
    }