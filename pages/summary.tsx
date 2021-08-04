import Dexie from "dexie"
import {db, LogTable} from "../lib/db"
import {useEffect, useState} from "react";
import Header from "../components/Header";

const uniqueTraining = async () => {
  return db.logs.orderBy("training").uniqueKeys(keysArray => {
    const p = keysArray.map(training => {
      return db.logs
        .where({training})
        .sortBy("weight")
        .then(data => {
          return data.sort((a, b) => b.weight - a.weight)[0]
        })
    })
    return Dexie.Promise.all(p)
  })
}

const Summary = () => {
  const [logs, setLogs] = useState<LogTable[]>([])
  useEffect(() => {
    const fetch = async () => {
      const _logs = await uniqueTraining() as LogTable[]
      setLogs(_logs)
    }
    fetch()
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="nine columns">
          <Header />
          <h1>Summary</h1>
          <table className="u-full-width">
            <thead>
            <tr>
              <th>種目</th>
              <th>日付</th>
              <th>重さ</th>
              <th>回数</th>
            </tr>
            </thead>
            <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.training}</td>
                <td>{log.date.toLocaleDateString('ja-JP', {dateStyle: "short"})}</td>
                <td>{log.weight}</td>
                <td>{log.count}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Summary