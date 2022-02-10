const NotificationType =
    "DO $$ BEGIN \
        CREATE TYPE NotificationType AS ENUM ('Request', 'Review'); \
    EXCEPTION \
        WHEN duplicate_object THEN null; \
    END $$;";

module.exports = NotificationType;
