const JoinStatusType = 
    "DO $$ BEGIN \
        CREATE TYPE JoinStatusType AS ENUM ('Requested', 'Accepted', 'Denied'); \
    EXCEPTION \
        WHEN duplicate_object THEN null; \
    END $$;";

module.exports = JoinStatusType;
