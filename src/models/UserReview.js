const UserReview =
    'CREATE TABLE IF NOT EXISTS "UserReview"(\
        reviewed_username CITEXT, \
        reviewer_username CITEXT, \
        subject VARCHAR(255), \
        body VARCHAR(255), \
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (reviewed_username, reviewer_username), \
        FOREIGN KEY (reviewed_username) REFERENCES "User"(username), \
        FOREIGN KEY (reviewer_username) REFERENCES "User"(username) \
    )';

module.exports = UserReview;
