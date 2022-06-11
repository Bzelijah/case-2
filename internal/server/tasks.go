package server

import (
	"errors"
	"fmt"
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
	"net/url"
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

	filterSettings := getFilterSettings(c.QueryParams())
	fmt.Println(filterSettings)

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

func (s *server) getTasksWithFilter() ([]configs.Task, error) {
	return []configs.Task{}, errors.New("tasks not found")
}

func getFilterSettings(queryParams url.Values) configs.FilterSettings {
	var settings configs.FilterSettings
	if len(queryParams["minAge"]) != 0 {
		settings.MinAge = queryParams["minAge"][0]
	}
	if len(queryParams["maxAge"]) != 0 {
		settings.MaxAge = queryParams["maxAge"][0]
	}
	if len(queryParams["sphere"]) != 0 {
		settings.Sphere = queryParams["sphere"][0]
	}

	return settings
}
