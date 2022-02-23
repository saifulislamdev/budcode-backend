const { pool } = require('../../../utils/db');

const getFilters = async (req, res) => {
    try {
        const skillResults = pool.query(
            `SELECT skill, COUNT(skill) 
            FROM "ProjectSkill" 
            GROUP BY skill 
            ORDER BY count DESC`
        );
        
        const tagResults = pool.query(
            `SELECT tag, COUNT(tag) 
            FROM "ProjectTag" 
            GROUP BY tag 
            ORDER BY count DESC`
        );

        const results = await Promise.all([skillResults, tagResults]);
        const { rows: skills } = results[0];
        const { rows: tags } = results[1];
        return res.status(200).json({ skills, tags });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getFilters;
