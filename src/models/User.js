const User =
  'CREATE TABLE IF NOT EXISTS "User" (\
    username VARCHAR(255), \
    password VARCHAR(255), \
    first_name VARCHAR(255) NOT NULL, \
    last_name VARCHAR(255), \
    email VARCHAR(255) UNIQUE, \
    gender VARCHAR(255), \
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
    PRIMARY KEY (username));';

module.exports = User;