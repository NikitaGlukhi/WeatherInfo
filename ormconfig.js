module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  entities: ['dist/sever/modules/**/*.entity.js'],
  migrationsTableName: 'migration_table',
  migrations: ['dist/migration/**/*.js'],
  migrationsRun: false,
  synchronize: false,
  logging: true,
  cli: {
    migrationsRun: 'migration'
  }
};
