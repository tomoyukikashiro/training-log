import Header from "../components/Header";
import {TrainingTable, db} from "../lib/db";
import {ChangeEvent, FormEvent, useCallback, useState} from "react";

export const CATEGORY = [
  '胸・肩',
  '脚・臀部',
  '上腕・前腕',
  '背中',
  '腹'
]

export default function Settings() {
  const [category, setCategory] = useState<string>(CATEGORY[0])
  const onChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }, [category, setCategory])
  const [name, setName] = useState<string>('')
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [name, setName])
  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    const save = async () => {
      await db.transaction('rw', db.trainings, async () => {
        await db.trainings.add(new TrainingTable(
          category,
          name
        ))
      })
      setCategory(CATEGORY[0])
      setName('')
    }
    save()
  }, [category, name])
  return (
    <div className="container">
      <div className="row">
        <div className="nine columns" style={{ float: "none", margin: "auto" }}>
          <Header />
          <h1>Settings</h1>
          <main>
            <form onSubmit={onSubmit}>
              <select onChange={onChangeCategory} value={category} className="u-full-width">
                { CATEGORY.map((c) => (
                  <option key={c} value={c}>{c}</option>
                )) }
              </select>
              <label>
                <div>トレーニングの名前</div>
                <input className="u-full-width" required type="text" onChange={onChangeName} value={name}/>
              </label>
              <div>
                <button className="button-primary" type="submit">登録</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}