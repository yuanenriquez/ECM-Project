-- Run this once in MySQL Workbench or another MySQL client while connected
-- as a MySQL administrator. Replace the placeholder password first.
--
-- This creates a local-only application account for the reconstructed API.
-- The Node.js .env file must use the same DB_USER and DB_PASSWORD values.

CREATE DATABASE IF NOT EXISTS evacuation_center_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'evac_app'@'127.0.0.1'
  IDENTIFIED BY 'REPLACE_WITH_A_STRONG_LOCAL_PASSWORD';

GRANT ALL PRIVILEGES ON evacuation_center_db.*
  TO 'evac_app'@'127.0.0.1';

FLUSH PRIVILEGES;
