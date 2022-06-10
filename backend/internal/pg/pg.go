package pg

import (
	"errors"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type PGError error

const CTX = "postgres"

var Nil = PGError(errors.New("empty response"))
var EmptySet = errors.New("sql: no rows in result set")

type Dto struct {
	Connect *sqlx.DB
}

func New(connectionString string, maxOpenCons, maxIdleCons int) (*Dto, error) {
	Connect, err := sqlx.Connect("postgres", connectionString)
	if err != nil {
		return nil, err
	}
	Connect.SetMaxOpenConns(maxOpenCons)
	Connect.SetMaxIdleConns(maxIdleCons)
	err = Connect.Ping()
	if err != nil {
		return nil, err
	}

	d := &Dto{
		Connect: Connect,
	}

	return d, nil
}
