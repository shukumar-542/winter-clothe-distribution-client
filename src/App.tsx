import './App.css'
import MainLayout from './components/layouts/MainLayout'
import { useAppSelector } from './redux/features/hooks'

function App() {
const {darkMode} = useAppSelector(store => store.theme);
  return <div className={` ${darkMode ? "bg-black text-white" : ""} `}><MainLayout /></div>
}

export default App
