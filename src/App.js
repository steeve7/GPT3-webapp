import { Footer, Blog, Posibility, Features, WhatGPT3, Header} from './containers'
import { CTA, Brand, Navbar } from './component'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='grandient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
