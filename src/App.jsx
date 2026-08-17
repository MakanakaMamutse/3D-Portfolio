import { BrowserRouter } from "react-router-dom";

import { About, ClientBuilds, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Journey, Footer } from "./components";

import { Analytics } from "@vercel/analytics/react"; // Import Analytics


const App = () => {
  return (
    <BrowserRouter> {/* Wrapped the entire app with BrowserRouter for navigation */}
      <div className='relative z-0 bg-primary'> {/* Set the main container with a background */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> {/* Applied background styling and Renders */}
          <Navbar />
          <Hero />
        </div> {/* Rendering the different Section/Components*/}
        <About />
        <Experience />
        <Tech />
        <ClientBuilds /> {/* Client websites, shown above the personal projects */}
        <Works />
        <Feedbacks />
        <div className='relative z-0'> {/* Created a nested div to maintain layering */}
          <Contact />
          <Footer />
          <Journey /> {/* Hidden evidence board — revealed by button after the footer */}
          <StarsCanvas />
        </div>
      </div>
      <Analytics /> {/* Rendered Analytics at the root level */}
    </BrowserRouter>
  );
}

export default App;
