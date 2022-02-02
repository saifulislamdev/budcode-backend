const ProjectFollower =
    'CREATE TABLE IF NOT EXISTS "ProjectFollower"( \
        project_id SERIAL, \
        username VARCHAR(255), \
        status BOOLEAN DEFAULT TRUE NOT NULL, \
        PRIMARY KEY (project_id, username), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id), \
        FOREIGN KEY (username) REFERENCES "User"(username))';

module.exports = ProjectFollower;
