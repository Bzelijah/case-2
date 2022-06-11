package server

import (
	"context"
	"github.com/Bzelijah/case-2/configs"
	"github.com/Bzelijah/case-2/internal/logger"
	"github.com/Bzelijah/case-2/internal/pg"
	"github.com/labstack/echo/v4"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const (
	CTX = "Server"
)

func New(
	pgDto *pg.Dto,
) *server {
	newServer := &server{
		pgDto:      pgDto,
		echoServer: echo.New(),
	}
	newServer.echoServer.HideBanner = true
	newServer.echoServer.HidePort = true
	return newServer
}

func (s *server) Init() {
	//s.echoServer.GET("/event", s.event)
	s.echoServer.GET("*", s.notFound)
}

func (s *server) Run() error {
	logger.Info(CTX).Msgf("Server started on port %s", configs.PORT)
	s.listenForSignals()
	if err := s.echoServer.Start("0.0.0.0" + configs.PORT); err != nil {
		return err
	}
	return nil
}

func (s *server) listenForSignals() {
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, os.Kill, syscall.SIGTERM)
	go func(quit chan os.Signal) {
		select {
		case sig := <-quit:
			logger.Error(CTX).Msgf("Caught %s signal", sig.String())
			ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
			defer cancel()
			if err := s.echoServer.Shutdown(ctx); err != nil {
				s.echoServer.Logger.Fatal(err)
			}
		}
	}(stop)
}
