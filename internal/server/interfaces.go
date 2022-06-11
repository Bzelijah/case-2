package server

import (
	"github.com/Bzelijah/case-2/internal/pg"
	"github.com/labstack/echo/v4"
)

type server struct {
	echoServer *echo.Echo
	pgDto      *pg.Dto
}

type task struct {
	CompanyName string   `json:"companyName" db:"company_name"`
	Sphere      string   `json:"sphere" db:"sphere"`
	VacancyName string   `json:"vacancyName" db:"vacancy_name"`
	Tasks       []string `json:"tasks" db:"tasks"`
	Skills      []string `json:"skills" db:"skills"`
	Conditions  []string `json:"conditions" db:"conditions"`
	Motivation  []string `json:"motivation" db:"motivation"`
	Email       []string `json:"email" db:"email"`
	MinAge      int      `json:"minAge" db:"min_age"`
	MaxAge      int      `json:"maxAge" db:"max_age"`
}
