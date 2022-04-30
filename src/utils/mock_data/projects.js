const initialProjects = [
    {
        id: 1,
        name: 'BudCode',
        creator: 'anvinhtr',
        description: `A software development collaboration platform`,
        skills: ['Node', 'React', 'HTML', 'CSS', 'PostgreSQL'],
        tags: ['web development', 'full-stack development'],
        links: [
            {
                type: 'GitHub',
                link: 'https://github.com/saifulislamdev/budcode-backend'
            },

            {
                type: 'Frontend deployment',
                link: 'https://budcode.netlify.app/'
            }
        ]
    },

    {
        id: 2,
        name: 'Organice',
        creator: 'tanviryouhana',
        description: `Organize your notes`,
        skills: ['Node', 'React', 'HTML', 'CSS', 'Redux'],
        tags: ['productivity', 'web development', 'full-stack development'],
        links: [
            {
                type: 'GitHub',
                link: 'https://github.com/200ok-ch/organice'
            }
        ]
    },

    {
        id: 3,
        name: 'Team Up',
        creator: 'abdulimtiaz',
        description: `A full-stack web application to help with teaming and scheduling meetings and creating polls`,
        skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Flask', 'SQLite'],
        tags: ['web development', 'full-stack development', 'charity'],
        links: [
            {
                type: 'GitHub',
                link: 'https://github.com/sajadgzd/TeamUp'
            }
        ]
    },

    {
        id: 4,
        name: 'Cold Wheels Racing',
        creator: 'saif',
        description: `A racing game that incorporates aspects from other genres, like RPG and shoot-em-up games`,
        skills: ['C#', 'Unity'],
        tags: ['gaming', 'racing']
    },

    {
        id: 5,
        name: 'CCNY Zero',
        creator: 'tufayelahmed',
        description: `A graduate program management system`,
        skills: ['JavaScript', 'HTML', 'CSS'],
        tags: ['web development', 'full-stack development', 'education', 'management'],
        links: [
            {
                type: 'GitHub',
                link: 'https://github.com/Tufayel5/Csc-322-Final-Project-1'
            }
        ]
    },
];

module.exports = initialProjects;