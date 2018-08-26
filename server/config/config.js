module.exports = {
    development: {
        db: 'mongodb://jin:lin-0428@ds127362.mlab.com:27362/grapnel',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://jin-lin428:lin-0428@ds127362.mlab.com:27362/grapnel',
        app: {
            name: 'graphql'
        },
        tokenSecret: 'hello'
    }
};