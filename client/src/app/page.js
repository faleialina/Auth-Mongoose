
import Header from '@/components/Header/Header'
import style from './page.module.css'

export default function Home() {
  return (
    <div>
      <main className={style.main} >
      <Header />
      <h1>HomePage</h1>
      </main>
    </div>
  )
}
