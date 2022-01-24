import React from 'react'
import './MainArea.css'
import {MdHistory, MdHome, MdPlaylistPlay, MdVideoLibrary, MdWatchLater, MdRssFeed} from 'react-icons/md'
import {FaFutbol, FaGripfire, FaMusic, FaNewspaper} from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'
function MainArea(){
    return(
        <div className="MainArea">
           
           <div className="Sidebar">
            <div className="HOME">
             <div className="Quick_Icon">
               <MdHome color="red" font-size="3rem"/>
               <div>HOME</div>
              </div>
              <div className="Quick_Icon">
               <FaGripfire color="grey" font-size="3rem"/>
               <div>Trending</div>
              </div>
              <div className="Quick_Icon">
               <BsFillCollectionPlayFill color="grey" font-size="3rem"/>
               <div>Subscribe</div>
              </div>
             </div>
             <div className="Library"> 
              <div className="Quick_Icon">
               <MdHome color="grey" font-size="3rem"/>
               <div>HOME</div>
              </div>
              <div className="Quick_Icon">
               <MdVideoLibrary color="grey" font-size="3rem"/>
               <div>Video Library</div>
              </div>
              <div className="Quick_Icon">
               <MdHistory color="grey" font-size="3rem"/>
               <div>History</div>
              </div>
              <div className="Quick_Icon">
               <MdWatchLater color="grey" font-size="3rem"/>
               <div>Watch Later</div>
              </div>
              <div className="Quick_Icon">
               <MdPlaylistPlay color="grey" font-size="3rem"/>
               <div>YouTube Clone</div>
              </div>
              </div>

              <div className="More_From_Youtube">
              <div className="Quick_Icon">
               <GiGamepad color="grey" font-size="3rem"/>
               <div>Gaming</div>
              </div>
              <div className="Quick_Icon">
               <MdRssFeed color="grey" font-size="3rem"/>
               <div>Live</div>
              </div>
              <div className="Quick_Icon">
               <FaFutbol color="grey" font-size="3rem"/>
               <div>Sports</div>
              </div>
              <div className="Quick_Icon">
               <FaMusic color="grey" font-size="3rem"/>
               <div>Musics</div>
              </div>
              <div className="Quick_Icon">
               <FaNewspaper color="grey" font-size="3rem"/>
               <div>News</div>
              </div>

             
            </div>
          </div>

          <div className="Main">

        <div className="Videos">
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>React JS - React Tutorial for Beginners</div>
                  </div>
                  <br></br>
                  <div className="view">
                  4,359,715 viewsJul 16, 2018
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=N3AkSS5hXMA"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>What Is React (React js) & Why Is It So Popular?</div>
                  </div>
                  <br></br>
                  <div className="view">
                  483,951 viewsJun 27, 2018
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=W6NZfCO5SIk"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour</div>
                  </div>
                  <br></br>
                  <div className="view">
                  6,462,804 viewsApr 24, 2018
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=PFmuCDHHpwk"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>Object-oriented Programming in JavaScript: Made Super Simple | Mosh</div>
                  </div>
                  <br></br>
                  <div className="view">
                  1,199,529 viewsMar 30, 2018
                  </div>
              </div>
        </div>
        <div className="Videos">
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=pEbIhUySqbk"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>React vs Angular vs Vue: What to Learn to Get a Front-end Job</div>
                  </div>
                  <br></br>
                  <div className="view">
                  213,029 viewsApr 17, 2019
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=qz0aGYrrlhU"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>HTML Tutorial for Beginners: HTML Crash Course [2021]</div>
                  </div>
                  <br></br>
                  <div className="view">
                  2,646,913 viewsJan 11, 2021
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=0-S5a0eXPoc"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>React Native Tutorial for Beginners - Build a React Native App [2020]</div>
                  </div>
                  <br></br>
                  <div className="view">
                  1,642,937 viewsPremiered May 11, 2020
                  </div>
              </div>
              <div className="Video">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=k5E2AVpwsko"
                    height="170px"
                    width="280px"
                    controls/>
                    <br></br>
                  <div className="Logo">
                 <img src="/images/React.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                  <div>Angular Tutorial for Beginners: Learn Angular & TypeScript</div>
                  </div>
                  <br></br>
                  <div className="view">
                  2,972,131 viewsSep 5, 2017
                  </div>
              </div>
        </div>
          </div>

        </div>
    )
}
export default MainArea
