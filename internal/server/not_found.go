package server

import (
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) notFound(c echo.Context) error {
	logger.Info(CTX).Str("path", c.Request().RequestURI).Msg("path not found")
	return c.NoContent(fasthttp.StatusNotFound)
}
