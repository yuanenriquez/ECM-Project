require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/database');
require('./models/User'); // Register the User model with this Sequelize instance.

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');

    // Kept for this academic prototype. For a production application, use
    // reviewed Sequelize migrations instead of automatic schema sync.
    await sequelize.sync();
    console.log('Database models synchronized.');

    const port = Number(process.env.PORT || 4000);
    const server = app.listen(port, () => {
      console.log(`API server listening on port ${port}.`);
    });

    const shutdown = async (signal) => {
      console.log(`${signal} received. Shutting down...`);
      server.close(async () => {
        await sequelize.close();
        process.exit(0);
      });
    };

    process.once('SIGINT', () => shutdown('SIGINT'));
    process.once('SIGTERM', () => shutdown('SIGTERM'));
    return server;
  } catch (error) {
    console.error('Unable to start the API server:', error.message);
    await sequelize.close().catch(() => {});
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { startServer };
