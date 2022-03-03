const UserNotification =
    'CREATE TABLE IF NOT EXISTS "UserNotification"( \
        id SERIAL, \
        username CITEXT, \
        subject VARCHAR(255), \
        body VARCHAR(255), \
        type NotificationType, \
        PRIMARY KEY (id), \
        FOREIGN KEY(username) REFERENCES "User"(username) \
    );';

module.exports = UserNotification;
