package configs

import (
	"bytes"
	"encoding/json"
	"sync"
	"time"

	"github.com/spf13/viper"
)

var (
	envs     IEnv
	lock     sync.RWMutex
	initOnce sync.Once
)

func JSONMarshal(t interface{}) []byte {
	buffer := &bytes.Buffer{}
	encoder := json.NewEncoder(buffer)
	encoder.SetEscapeHTML(false)
	_ = encoder.Encode(t)
	return buffer.Bytes()
}

func Envs() *IEnv {
	initOnce.Do(func() {
		envs.Init()
	})
	lock.RLock()
	defer lock.RUnlock()
	return &envs
}

func (e *IEnv) CurrentDate() string {
	lock.RLock()
	defer lock.RUnlock()
	return e.currentDate
}

func (e *IEnv) SetCurrentDate(s string) {
	lock.Lock()
	defer lock.Unlock()
	e.currentDate = s
}

func (e *IEnv) CurrentDateTime() string {
	lock.RLock()
	defer lock.RUnlock()
	return e.currentDateTime
}

func (e *IEnv) SetCurrentDateTime(s string) {
	lock.Lock()
	defer lock.Unlock()
	e.currentDateTime = s
}

func (e *IEnv) Init() {
	viper.AutomaticEnv()

	e.PostgresConnStr = viper.GetString("POSTGRES_CONN_STR")

	e.SetCurrentDateTime(time.Now().Format("2006-01-02 15:04:05"))
	e.SetCurrentDate(time.Now().Format("2006-01-02"))

	go func() {
		ticker := time.NewTicker(5 * time.Second)
		for range ticker.C {
			e.SetCurrentDateTime(time.Now().Format("2006-01-02 15:04:05"))
			e.SetCurrentDate(time.Now().Format("2006-01-02"))
		}
	}()
}
