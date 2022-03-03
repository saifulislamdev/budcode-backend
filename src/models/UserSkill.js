const UserSkill =
    'CREATE TABLE IF NOT EXISTS "UserSkill"( \
        username CITEXT, \
        skill VARCHAR(255), \
        PRIMARY KEY (username, skill), \
        FOREIGN KEY (username) REFERENCES "User"(username) \
    );';

module.exports = UserSkill;
