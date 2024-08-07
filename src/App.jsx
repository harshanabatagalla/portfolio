import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from "./components"
import Expertiese from "./components/Expertiese"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hro-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Expertiese />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
