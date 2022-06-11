package server

import (
	"encoding/json"
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) create(c echo.Context) error {
	var task task
	err := json.NewDecoder(c.Request().Body).Decode(&task)
	if err != nil {
		return c.String(fasthttp.StatusBadRequest, err.Error())
	}
	fmt.Println(task)

	return c.NoContent(fasthttp.StatusNotFound)
}
