CREATE TABLE tasks (
    id                  SERIAL,
    created_at          timestamp       DEFAULT CURRENT_TIMESTAMP,
    companyName         text            DEFAULT '',
    sphere              text            DEFAULT '',
    vacancyName         text            DEFAULT '',
    name                text            DEFAULT '',
    conditions          text            DEFAULT '',
    tasks               text ARRAY      DEFAULT ARRAY[''],
    info                text ARRAY      DEFAULT ARRAY[''],
    salary              text            DEFAULT '',
    skills              text ARRAY      DEFAULT ARRAY[''],
    email               text            DEFAULT '',
    age                 int             DEFAULT 0,
    date                timestamp
);

CREATE TABLE users (
    id                  SERIAL,
    name                text            DEFAULT '',
    secondName          text            DEFAULT '',
    birthdayDate        text            DEFAULT '',
    gender              text            DEFAULT '',
    phone               text            DEFAULT '',
    email               text            DEFAULT '',
    password            text            DEFAULT '',
    work                text            DEFAULT '',
    englishLevel        text            DEFAULT ''
)
