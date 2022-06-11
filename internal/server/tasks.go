package server

import (
	"fmt"
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/labstack/echo/v4"
	"github.com/valyala/fasthttp"
)

func (s *server) tasks(c echo.Context) error {
	filter := c.QueryParam("filter")
	fmt.Println("filter", filter)
	if filter == "false" || filter == "" {
		tasks, err := s.pgDto.GetTasks()
		if err != nil {
			logger.Error(CTX).Err(err).Msg("error while get all tasks")
			return c.NoContent(fasthttp.StatusConflict)
		}

		fmt.Println("tasks", tasks)
		if len(tasks) < 1 {
			logger.Error(CTX).Msg("tasks not found")
		}
		return c.Blob(fasthttp.StatusOK, "application/json", configs.JSONMarshal(tasks))
	}

	return c.NoContent(fasthttp.StatusOK)
}
