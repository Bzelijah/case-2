CREATE TABLE tasks (
    id                  SERIAL,
    created_at          timestamp       DEFAULT CURRENT_TIMESTAMP,
    companyName         text            DEFAULT '',
    sphere              text            DEFAULT '',
    vacancyName         text            DEFAULT '',
    tasks               text ARRAY      DEFAULT ARRAY[''],
    skills              text ARRAY      DEFAULT ARRAY[''],
    conditions          text ARRAY      DEFAULT ARRAY[''],
    reward              text ARRAY      DEFAULT ARRAY[''],
    email               text            DEFAULT '',
    minAge              int             DEFAULT 0,
    maxAge              int             DEFAULT 0
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
);

INSERT INTO tasks (companyName, sphere, vacancyName, tasks, skills, conditions, reward, email, minAge, maxAge) VALUES
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', 19, 24),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', 30, 0);
