package server

import (
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) create(c echo.Context) error {

	return c.NoContent(fasthttp.StatusNotFound)
}
