package pg

import (
	"github.com/Bzelijah/case-2/configs"
	"github.com/lib/pq"
)

func (d *Dto) GetTasks() ([]configs.Task, error) {
	query := `
		SELECT
		    id,
			company_name,
			sphere,
			vacancy_name,
			tasks,
			skills,
			conditions,
			motivation,
			email,
			min_age,
			max_age
		FROM tasks`
	rows, err := d.Connect.Query(query)
	if err != nil {
		return []configs.Task{}, err
	}
	var tasks []configs.Task
	for rows.Next() {
		var task configs.Task
		err := rows.Scan(&task.Id, &task.CompanyName, &task.Sphere,
			&task.VacancyName, pq.Array(&task.Tasks), pq.Array(&task.Skills),
			pq.Array(&task.Conditions), pq.Array(&task.Motivation), &task.Email,
			&task.MinAge, &task.MaxAge,
		)
		if err != nil {
			return tasks, err
		}
		tasks = append(tasks, task)
	}
	if len(tasks) == 0 {
		return []configs.Task{}, Nil
	}

	return tasks, nil
}
