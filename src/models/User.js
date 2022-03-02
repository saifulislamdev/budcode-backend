const User =
    'CREATE TABLE IF NOT EXISTS "User" (\
        username CITEXT, \
        password VARCHAR(255) NOT NULL, \
        first_name VARCHAR(255) NOT NULL, \
        last_name VARCHAR(255), \
        email CITEXT UNIQUE, \
        bio VARCHAR(255), \
        occupation VARCHAR(255), \
        gender VARCHAR(255), \
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (username) \
    );';

module.exports = User;
