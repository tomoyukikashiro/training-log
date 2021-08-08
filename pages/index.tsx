import Head from 'next/head'

import {LogTable, db, TrainingTable} from '../lib/db'
import {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import Header from "../components/Header";
import {CATEGORY} from "./settings";

export default function Home() {
  const [trainingData, setTrainingData] = useState<Array<[string, TrainingTable[]]>>([])
  const [training, setTraining] = useState<string>('')
  const onChangeTraining = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setTraining(e.target.value)
  }, [setTraining])
  const [weight, setWeight] = useState<number | null>(null)
  const onChangeWeight = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseInt(e.target.value, 10))
  }, [setWeight])
  const [count, setCount] = useState<number | null>(null)
  const onChangeCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value, 10))
  }, [setCount])
  const onSubmit = useCallback((e: FormEvent) => {
    const save = async () => {
      await db.transaction('rw', db.logs, async () => {
        await db.logs.add(new LogTable(
          training,
          weight as number,
          count as number
        ))
      })
      setTraining('')
      setCount(null)
      setWeight(null)
    }
    e.preventDefault()
    save()
  }, [training, weight, count])

  useEffect(() => {
    const fetch = async () => {
      const groupBy: [string, TrainingTable[]][] = []
      const data = await db.trainings.toArray()
      CATEGORY.forEach(category => {
        // @ts-ignore
        const unique = [...new Set(data.filter((t: TrainingTable)=> t.category === category))]
        groupBy.push([category, unique])
      })
      setTrainingData(groupBy)
      setTraining(groupBy[0][1][0]?.name || '')
    }
    fetch()
  }, [])

  return (
    <div>
      <Head>
        <title>Training Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="nine columns" style={{ float: "none", margin: "auto" }}>
            <Header />
            <h1>Logging</h1>
            <main>
              <form onSubmit={onSubmit}>
                <select onChange={onChangeTraining} value={training} className="u-full-width">
                  { trainingData.map((t, i) => (
                    <optgroup label={t[0]} key={t[0]}>
                      {t[1].map((tt) => (
                        <option value={tt.name} key={tt.id}>{tt.name}</option>
                      ))}
                    </optgroup>
                  )) }
                </select>
                <label>
                  <div>重さ</div>
                  <input required type="text" inputMode="numeric" onChange={onChangeWeight} value={weight === null ? '' : weight}/>
                </label>
                <label>
                  <div>回数</div>
                  <input required type="text" inputMode="numeric" onChange={onChangeCount} value={count === null ? '' : count}/>
                </label>
                <div>
                  <button className="button-primary" type="submit">登録</button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
