module.exports = {
    port: process.env.PORT || 8081,
    db: {
       database: process.env.DB_NAME || 'musictracker',
       user:  process.env.DB_USER || 'musictracker',
       password:  process.env.DB_PASSWORD || 'musictracker',
       options: {
           dialect:  process.env.DB_DIALECT || 'sqlite',
           host:  process.env.DB_HOST || 'localhost',
           storage: './musictracker.squlite'
       }
    }
}