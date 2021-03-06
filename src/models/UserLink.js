const UserLink =
    'CREATE TABLE IF NOT EXISTS "UserLink"(\
        username CITEXT, \
        link VARCHAR(255) NOT NULL, \
        type VARCHAR(255) NOT NULL, \
        PRIMARY KEY (username, type), \
        FOREIGN KEY (username) REFERENCES "User"(username) \
    )';

module.exports = UserLink;
