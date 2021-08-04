import Head from 'next/head'

import { TRAININGS } from '../lib/constants'
import {LogTable, db} from '../lib/db'
import {ChangeEvent, FormEvent, useCallback, useState} from "react";
import Header from "../components/Header";

export default function Home() {
  const [training, setTraining] = useState<string>(TRAININGS[0].value)
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
  return (
    <div>
      <Head>
        <title>Training Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="nine columns">
            <Header />
            <h1>Logging</h1>
            <main>
              <form onSubmit={onSubmit}>
                <select onChange={onChangeTraining} value={training} className="u-full-width">
                  { TRAININGS.map((t, i) => (
                    <option key={t.value} value={t.value}>{t.name}</option>
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
