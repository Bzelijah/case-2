package configs

type IEnv struct {
	currentDate     string
	currentDateTime string
	PostgresConnStr string
}

type Task struct {
	Id          int
	CompanyName string   `json:"companyName" db:"company_name"`
	Sphere      string   `json:"sphere" db:"sphere"`
	VacancyName string   `json:"vacancyName" db:"vacancy_name"`
	Tasks       []string `json:"tasks" db:"tasks"`
	Skills      []string `json:"skills" db:"skills"`
	Conditions  []string `json:"conditions" db:"conditions"`
	Motivation  []string `json:"motivation" db:"motivation"`
	Email       string   `json:"email" db:"email"`
	Age         string   `json:"age" db:"age"`
}

type FilterSettings struct {
	Age    string
	Sphere string
	Enable string
}
