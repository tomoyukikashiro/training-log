import {useEffect, useState} from "react";
import {db, LogTable} from "../lib/db";
import Header from "../components/Header";

const recentDate = async () => {
  const data = await db.logs.orderBy('date').reverse().first()
  return data?.date
}

const Latest = () => {
  const [logs, setLogs] = useState<LogTable[]>([])
  const [date, setDate] = useState<Date|undefined>(undefined)
  useEffect(() => {
    const fetch = async () => {
      const date = await recentDate()
      setDate(date)
      const data = await db.logs.where({date}).toArray() as LogTable[]
      setLogs(data)
    }
    fetch()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="nine columns" style={{ float: "none", margin: "auto" }}>
          <Header />
          <h1>Latest</h1>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>日付</th>
                <th>種目</th>
                <th>重さ</th>
                <th>回数</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td>{date?.toLocaleDateString('ja-JP', {dateStyle: "short"})}</td>
                  <td>{log.training}</td>
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

export default Latest