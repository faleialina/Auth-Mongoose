
import Header from '@/components/Header/Header'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LinearProgress from '@mui/material/LinearProgress';
import style from './page.module.css'

export default function Main() {
  return (
    <div>
      <div className={style.main} >
        <Header />
        <h1>Main Page</h1>
        <div><FingerprintIcon color="warning" sx={{ fontSize: 80 }}/></div>
        <div><LinearProgress color="warning" /></div>
      </div>
    </div>
  )
};
