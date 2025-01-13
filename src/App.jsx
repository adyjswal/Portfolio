import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const modeChanger = () => setIsLightMode(!isLightMode);

  return (
    <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} font-sans h-auto w-full transition-colors duration-500 ease-in-out scroll-smooth`}>
      <header>
        <div className={`${isLightMode ? 'bg-white text-black' : 'bg-black text-white'} w-full flex justify-center items-center fixed transition-colors duration-500 ease-in-out top-0`}>
          <p className="mr-10 text-3xl font-bold font-arial cursor-pointer hover:text-green-500">Portfolio</p>
          <div className="h-10 w-1/3 flex justify-evenly items-center ml-80 rounded-full mx-24 gap-8" id="tags">
            <a className="font-bold hover:text-green-500 hover:-translate-y-1 hover:scale-110" href="#home">Home</a>
            <a className="font-bold hover:text-green-500 hover:-translate-y-1 hover:scale-110" href="#about">About</a>
            <a className="font-bold hover:text-green-500 hover:-translate-y-1 hover:scale-110" href="https://drive.google.com/file/d/1VvjIxtf87SBcMcXrGFstkYOSZWUxhYDA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="font-bold hover:text-green-500 hover:-translate-y-1 hover:scale-110" href="#projects">Projects</a>
            <a className="font-bold hover:text-green-500 hover:-translate-y-1 hover:scale-110" href="#contact">Contact</a>
          </div>
          <div className="px-4 py-1 rounded-full my-6 cursor-pointer bg-gray-300" onClick={modeChanger}>
            <div className={`h-6 w-6 bg-white text-black rounded-full flex justify-center items-center relative ${isLightMode ? 'right-3' : 'left-3'}`}>
              <FontAwesomeIcon size="sm" icon={isLightMode ? faSun : faMoon} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <section className="h-screen bg-blue-500" id="home">
            <div className="h-96 flex justify-center items-center">
              <div>Home Section</div>
            </div>
          </section>
          <section className="h-screen bg-pink-500" id="about">
            <div className="h-96 flex justify-center items-center">
              <div>About Section</div>
            </div>
          </section>
          <section className="h-screen bg-yellow-500" id="projects">
            <div className="h-96 flex justify-center items-center">
              <div>Project Section</div>
            </div>
          </section>
          <section className="h-screen flex justify-center items-center" id="contact">
            <div className="h-2/3">
              <div>
                <h1 className="text-3xl font-bold text-center hover:text-green-500">Contact Me</h1>
                <div className="h-16 flex justify-center items-center gap-10">
                  <a href="https://www.linkedin.com/in/adyjswal/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="xl" icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/adyjswal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="xl" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div>
                <form name="contact" action="mailto:adykr0406@gmail.com" target="_blank" method="POST">
                  <input className="h-12 p-3 w-full text-white bg-custom-grey" type="text" name="name" placeholder="Your Name" required /><br /><br />
                  <input className="h-12 p-3 w-full text-white bg-custom-grey" type="text" name="email" placeholder="Email" required /><br /><br />
                  <input className="h-12 p-3 w-full text-white bg-custom-grey" type="text" name="contact no" placeholder="Contact No" required /><br /><br />
                  <textarea className="p-3 text-white bg-custom-grey" name="message" rows="6" cols="90" placeholder="Message"></textarea><br /><br />
                  <div className="h-12 w-48 mx-64 bg-white hover:bg-green-500 rounded inline-block cursor-pointer duration-700">
                    <button className="h-10 w-48 font-bold bg-green-500 hover:bg-white hover:text-green-500 rounded transition duration-700 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="h-32 p-6 text-2xl bg-custom-grey text-white text-center">
          Copyright &#169; 2025 Aditya Kumar. All rights reserved. <br />
          Built with passion &#x26; ReactJs
        </div>
      </footer>
    </div>
  );
}

export default App;