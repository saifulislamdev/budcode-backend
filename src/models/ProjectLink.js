const ProjectLink =
    'CREATE TABLE IF NOT EXISTS "ProjectLink"( \
        project_id INT, \
        link VARCHAR(255) NOT NULL, \
        type VARCHAR(255) NOT NULL, \
        PRIMARY KEY (project_id, type), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id) \
    )';

module.exports = ProjectLink;
