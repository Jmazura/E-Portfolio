import '../styles/footer.css'
import Icons from './Icons'

export default function Footer() {
  return (
     <footer className="justify-center sm:justify-between">
      <span className="hidden sm:block" >developer:name</span>
      <span>all rights reserved @ 2025</span>
      <span className="hidden sm:block" ><Icons foot="foot"/></span>
     </footer>
  )
}
