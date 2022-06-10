package server

import (
	"github.com/Bzelijah/case-2/internal/pg"
	"github.com/labstack/echo/v4"
)

type server struct {
	echoServer *echo.Echo
	pgDto      *pg.Dto
}
