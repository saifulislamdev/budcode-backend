const ProjectTag =
    'CREATE TABLE IF NOT EXISTS "ProjectTag"(\
        project_id INT, \
        tag VARCHAR(255), \
        PRIMARY KEY (project_id, tag), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id));';

module.exports = ProjectTag;
