const { pool } = require('../../../utils/db');

const getAllProjects = async (req, res) => {
    try {
        let projects;

        // if no filters or keywords are provided
        if (!req.query.skill && !req.query.tag && !req.query.search) {
            projects = await pool.query(
                'SELECT id,name,description,creator,status,created_at FROM "Project"'
            );
        } else {
            if (req.query.search) {
                const searchTerms = req.query.search.toLowerCase().split(' ');

                if (req.query.skill && req.query.tag) {
                    projects = await pool.query(
                        `SELECT id,name,description,creator,status,created_at 
                        FROM "Project" 
                        WHERE id IN (SELECT project_id 
                                    FROM "ProjectSkill"
                                    WHERE skill = ANY ($1)
                                    GROUP BY project_id
                                    HAVING COUNT(DISTINCT skill) = array_length($1, 1))
                                AND id IN (SELECT project_id 
                                            FROM "ProjectTag"
                                            WHERE tag = ANY ($2)
                                            GROUP BY project_id
                                            HAVING COUNT(DISTINCT tag) = array_length($1, 1))
                                AND (SELECT bool_or(position(searchTerm in name) > 0)
                                    FROM unnest($3::text[]) searchTerm)`,
                        [req.query.skill, req.query.tag, searchTerms]
                    );
                } else if (req.query.skill) {
                        projects = await pool.query(
                            `SELECT id,name,description,creator,status,created_at 
                            FROM "Project" 
                            WHERE id IN (SELECT project_id 
                                        FROM "ProjectSkill"
                                        WHERE skill = ANY ($1)
                                        GROUP BY project_id
                                        HAVING COUNT(DISTINCT skill) = array_length($1, 1))
                                    AND (SELECT bool_or(position(searchTerm in name) > 0)
                                        FROM unnest($2::text[]) searchTerm)`,
                            [req.query.skill, searchTerms]
                        );
                } else if (req.query.tag) {
                    projects = await pool.query(
                        `SELECT id,name,description,creator,status,created_at 
                        FROM "Project" 
                        WHERE id IN (SELECT project_id 
                                    FROM "ProjectTag"
                                    WHERE tag = ANY ($1)
                                    GROUP BY project_id
                                    HAVING COUNT(DISTINCT tag) = array_length($1, 1))
                                AND (SELECT bool_or(position(searchTerm in name) > 0)
                                    FROM unnest($2::text[]) searchTerm)`,
                        [req.query.tag, searchTerms]
                    );
                } else {
                    projects = await pool.query(
                        `SELECT id,name,description,creator,status,created_at 
                        FROM "Project" 
                        WHERE (SELECT bool_or(position(searchTerm in name) > 0)
                                FROM unnest($2::text[]) searchTerm)`,
                        [searchTerms]
                    );
                }
            } else {
                if (req.query.skill && req.query.tag) {
                    projects = await pool.query(
                        `SELECT id,name,description,creator,status,created_at 
                        FROM "Project" 
                        WHERE id IN (SELECT project_id 
                                    FROM "ProjectSkill"
                                    WHERE skill = ANY ($1)
                                    GROUP BY project_id
                                    HAVING COUNT(DISTINCT skill) = array_length($1, 1))
                                AND id IN (SELECT project_id 
                                    FROM "ProjectTag"
                                    WHERE tag = ANY ($2)
                                    GROUP BY project_id
                                    HAVING COUNT(DISTINCT tag) = array_length($1, 1))`,
                        [req.query.skill, req.query.tag]
                    );
                } else if (req.query.skill) {

                        projects = await pool.query(
                            `SELECT id,name,description,creator,status,created_at 
                            FROM "Project" 
                            WHERE id IN (SELECT project_id 
                                        FROM "ProjectSkill"
                                        WHERE skill = ANY ($1)
                                        GROUP BY project_id
                                        HAVING COUNT(DISTINCT skill) = array_length($1, 1))`,
                            [req.query.skill]
                        );
                } else if (req.query.tag) {
                    projects = await pool.query(
                        `SELECT id,name,description,creator,status,created_at 
                        FROM "Project" 
                        WHERE id IN (SELECT project_id 
                                    FROM "ProjectTag"
                                    WHERE tag = ANY ($1)
                                    GROUP BY project_id
                                    HAVING COUNT(DISTINCT tag) = array_length($1, 1))`,
                        [req.query.tag]
                    );
                }
            } 
        }

        let promises = [];

        // get skills of projects
        promises.push(
            ...projects.rows.map(async (row) => {
                const skills = await pool.query({
                    text: 'SELECT skill FROM "ProjectSkill" WHERE project_id = $1',
                    values: [row.id],
                    rowMode: 'array',
                });
                row.skills = skills.rows.flat();
                return row;
            })
        );

        // get tags of projects
        promises.push(
            ...projects.rows.map(async (row) => {
                const tags = await pool.query({
                    text: 'SELECT tag FROM "ProjectTag" WHERE project_id = $1',
                    values: [row.id],
                    rowMode: 'array',
                });
                row.tags = tags.rows.flat();
                return row;
            })
        );

        await Promise.all(promises);
        return res.status(200).json(projects.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getAllProjects;
