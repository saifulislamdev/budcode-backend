const UserSkill =
    'CREATE TABLE IF NOT EXISTS "UserSkill"( \
        username VARCHAR(255), \
        skill VARCHAR(255), \
        PRIMARY KEY (username, skill), \
        FOREIGN KEY (username) REFERENCES "User"(username), \
    );';

module.exports = UserSkill;
