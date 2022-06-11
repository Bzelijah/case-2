package server

import (
	"errors"
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) tasks(c echo.Context) error {
	filter := c.QueryParam("filter")
	if filter == "false" || filter == "" {
		tasks, err := s.getTasksWithoutFilter()
		if err != nil {
			logger.Error(CTX).Err(err).Msg("error while get all tasks")
			return c.NoContent(fasthttp.StatusConflict)
		}

		return c.Blob(fasthttp.StatusOK, "application/json", configs.JSONMarshal(tasks))
	}

	return c.NoContent(fasthttp.StatusOK)
}

func (s *server) getTasksWithoutFilter() ([]configs.Task, error) {
	tasks, err := s.pgDto.GetTasks()
	if err != nil {
		return []configs.Task{}, err
	}
	if len(tasks) < 1 {
		return []configs.Task{}, errors.New("tasks not found")
	}

	return tasks, nil
}