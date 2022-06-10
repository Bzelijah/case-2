package logger

import (
	"os"

	"github.com/rs/zerolog"
)

var standardLogger = zerolog.New(os.Stdout).With().Timestamp().Logger()
var stderrLogger = zerolog.New(os.Stderr).With().Timestamp().Logger()

func init() {
	zerolog.MessageFieldName = "msg"
	zerolog.LevelFieldName = "lvl"
	zerolog.TimestampFieldName = "ts"
	zerolog.TimeFieldFormat = "02 Jan 06 15:04:05"
}

func Info(ctx string) *zerolog.Event {
	return standardLogger.Info().
		Str("ctx", ctx)
}

func Error(ctx string) *zerolog.Event {
	return stderrLogger.Error().
		Str("ctx", ctx)
}

func Warning(ctx string) *zerolog.Event {
	return stderrLogger.Warn().
		Str("ctx", ctx)
}

func Debug(ctx string) *zerolog.Event {
	return stderrLogger.Debug().
		Str("ctx", ctx)
}
