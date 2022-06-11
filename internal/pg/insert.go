package pg

import (
	"github.com/Bzelijah/case-2/configs"
	"github.com/lib/pq"
)

func (d *Dto) CreateTask(p configs.Task) error {
	tx, err := d.Connect.Beginx()
	if err != nil {
		return err
	}

	_, err = tx.Exec(
		`INSERT INTO tasks (company_name, sphere, vacancy_name, tasks, skills, conditions, motivation, email, min_age, max_age)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, p.CompanyName, p.Sphere, p.VacancyName, pq.StringArray(p.Tasks), pq.StringArray(p.Skills), pq.StringArray(p.Conditions), pq.StringArray(p.Motivation), p.Email, p.MinAge, p.MaxAge,
	)
	if err != nil {
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return nil
}
