CREATE TABLE tasks (
    id                  SERIAL,
    created_at          timestamp       DEFAULT CURRENT_TIMESTAMP,
    company_name        text            DEFAULT '',
    sphere              text            DEFAULT '',
    vacancy_name        text            DEFAULT '',
    tasks               text ARRAY      DEFAULT ARRAY[''],
    skills              text ARRAY      DEFAULT ARRAY[''],
    conditions          text ARRAY      DEFAULT ARRAY[''],
    motivation          text ARRAY      DEFAULT ARRAY[''],
    email               text            DEFAULT '',
    age                 text            DEFAULT ''
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

INSERT INTO tasks (company_name, sphere, vacancy_name, tasks, skills, conditions, motivation, email, age) VALUES
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', '18-25'),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', '26-35'),
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', '35-55'),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', '55+'),
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', '18-25'),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', '55+'),
    ('someCompany', 'айти', 'супер-кодер', '{"быть крутым", "умным"}', '{"писать код", "писать много кода"}', '{"дадим чёткий комп для работы", "мега-офис"}', '{"благодарственные письма", "космический корабль"}', 'supermilo@skinhead.rus', '55+'),
    ('anotherCompany', 'общепит', 'шаурмен', '{"волосатые руки", "армянский акцент"}', '{"любить кошек"}', '{"большая печка", "шаурмечка в центре москвы"}', '{"мясо", "воздушные шарики"}', 'megatip@dildax.conch', '18-25');
