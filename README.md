# -
各种工具，笔记，技巧，快速入口。
SELECT DISTINCT TABLE_NAME 
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE COLUMN_NAME IN ('ColumnA')
        AND TABLE_SCHEMA='Database';
