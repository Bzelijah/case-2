package main

import (
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/Bzelijah/case-2/internal/pg"
	"github.com/Bzelijah/case-2/internal/server"
)

func main() {
	pgDto, err := pg.New(configs.Envs().PostgresConnStr, configs.PG_MAX_OPEN_CONS, configs.PG_MAX_IDLE_CONS)
	if err != nil {
		logger.Error(pg.CTX).Err(err).Str("conn_string", configs.Envs().PostgresConnStr).
			Msg("connect to postgres failure")
		panic(err)
	} else {
		logger.Info(pg.CTX).Msg("injected")
	}

	serv := server.New(pgDto)
	panic(serv.Run())
}
