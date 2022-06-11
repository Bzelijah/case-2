package server

import (
	"encoding/json"
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) create(c echo.Context) error {
	var task configs.Task
	err := json.NewDecoder(c.Request().Body).Decode(&task)
	if err != nil {
		logger.Error(CTX).Err(err).Msg("decode body")
		return c.String(fasthttp.StatusBadRequest, err.Error())
	}

	err = s.pgDto.CreateTask(task)
	if err != nil {
		logger.Error(CTX).Err(err).Interface("task", task).Msg("error while create task")
		return c.NoContent(fasthttp.StatusConflict)
	}

	return c.NoContent(fasthttp.StatusOK)
}
