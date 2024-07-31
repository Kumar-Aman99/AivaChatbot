import './Avia.css';

export default function Aiva(){

    return(
        <>
<header>
              <div className="header-bar">
                   <div className="header-bar-logo"><span>AIVA</span>CHATBOT</div>
                   <div className="header-bar-logo-bar">
                       <div className="header-bar-list-button">
                           <ul>
                                <li className="list1">Model1</li>
                                <li className="list2">Model2</li>
                                <li className="list2">Model3</li>
                           </ul>
                   </div>
                    <div className="header-image-button">
                      <label className="switch">
                      <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                     <img src="https://www.w3schools.com/howto/img_avatar.png" />
                   </div>
                </div>
              </div>
      </header>

      <section>
            <div className="outer-sidebar">
              <div className="sidebar">
                  <h3>+ New chat</h3>
                  <div className="sidebar-inner">
                      <i className="fa-solid fa-person-rays"></i>
                      <p>Upgrade Plus</p>
                </div>
              </div>
                <div className="recommended-task-options-area">
                  <div>
                        <h1 style="color:black"><div className="aiva">AIVA</div>CHATBOT</h1>
                        <div className="recommneded-option">
                             <div className="task-options">
                              <h4>Come up with concepts</h4>
                                 <p>for a retro style arcade game</p>
                             </div>
                             <div className="task-options">
                                  <h4>Come up with concepts</h4>
                                 <p>for a retro style arcade game</p>
                             </div>
                             <div className="task-options">
                                  <h4>Come up with concepts</h4>
                                 <p>for a retro style arcade game</p>
                               </div>
                               <div className="task-options">
                                   <h4>Come up with concepts</h4>
                                  <p>for a retro style arcade game</p>
                              </div>
                              <div className="task-options">
                                   <h4>Come up with concepts</h4>
                                  <p>for a retro style arcade game</p>
                             </div>
                             <div className="task-options">
                                   <h4>Come up with concepts</h4>
                                  <p>for a retro style arcade game</p>
                             </div>
                             <div className="input-box">
                              <input type="text" placeholder="send a message...."/>
                              <i className="fa-solid fa-arrow-right icon"></i>
                         </div>
                        </div>
                        
                  </div>
               
                  <div className="paragraph"> 
                       <p>Generated Links of <b>Websites</b> and <b>Documents</b> will appear here</p>
                  </div>
            </div>
          </div>
      </section>
      </>
)}