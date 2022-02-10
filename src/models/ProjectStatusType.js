const ProjectStatusType =
    "DO $$ BEGIN \
        CREATE TYPE ProjectStatusType AS ENUM ('In Progress', 'Complete'); \
    EXCEPTION \
        WHEN duplicate_object THEN null; \
    END $$;";

module.exports = ProjectStatusType;
