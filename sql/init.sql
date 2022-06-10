CREATE TABLE tasks (
    id                  SERIAL,
    external_id         text         DEFAULT '',
    created_at          timestamp    DEFAULT CURRENT_TIMESTAMP,
    disabled_at         timestamp,
    name                text         NOT NULL,
    priority            integer      NOT NULL,
    disabled            boolean      DEFAULT false
);