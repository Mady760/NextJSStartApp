import '@/styles/globals.css'
import Navbar from './components/navbar'
// import hero_Section from './components/section'

export default function App({ Component, pageProps }) {
  return <>
      {/* <Navbar/>
      <hero_Section /> */}
      <Component {...pageProps} />
  </>
}
