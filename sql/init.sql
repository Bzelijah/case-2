CREATE TABLE tasks (
    id                  SERIAL,
    created_at          timestamp       DEFAULT CURRENT_TIMESTAMP,
    company_name         text            DEFAULT '',
    sphere              text            DEFAULT '',
    vacancy_name         text            DEFAULT '',
    tasks               text ARRAY      DEFAULT ARRAY[''],
    skills              text ARRAY      DEFAULT ARRAY[''],
    conditions          text ARRAY      DEFAULT ARRAY[''],
    motivation          text ARRAY      DEFAULT ARRAY[''],
    email               text            DEFAULT '',
    min_age              int             DEFAULT 0,
    max_age              int             DEFAULT 0
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

INSERT INTO tasks (company_name, sphere, vacancy_name, tasks, skills, conditions, motivation, email, min_age, max_age) VALUES
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', 19, 24),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', 30, 0);
