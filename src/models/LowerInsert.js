const LowerInsert = 
    `CREATE OR REPLACE FUNCTION LowerInsert() RETURNS trigger AS
    $$
    DECLARE
        col TEXT := TG_ARGV[0];
        target TEXT;
    BEGIN
        EXECUTE format('SELECT ($1).%I', col)
        USING NEW
        INTO target;
        target = LOWER(target);
        NEW := NEW #= hstore(col, target);
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    `

module.exports = LowerInsert;