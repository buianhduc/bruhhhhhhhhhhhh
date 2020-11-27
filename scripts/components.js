components = {}

components.quizPage = `
<div class="container-fluid">

            <div class="question-container container-fluid row">
                <!-- <div class="col-1">| |</div> -->
                <h4 class="text-center col-12"></h4>
                <h1 class="col-12 text-center" id="question-title"></h1>

            </div>
            <div class="row">
                <div class="col-lg-2 time-container d-flex align-items-center justify-content-center">
                    <div id="progress" class=" label-center time d-flex align-items-center justify-content-center" data-preset="bubble" data-type="stroke" style="width: 100%; height: 200px" stroke-width="100px">
                        <!-- <div class="ldBar "  data-value="0" ></div> -->
                    </div>
                </div>
                <div class="col-lg-8 d-flex align-items-center justify-content-center">
                    <div class="images">
                        <img src="https://via.placeholder.com/1080x350" alt="" style="height: 350px; max-width: 100%;">
                    </div>
                </div>
                <div class="col-lg-2 d-flex align-items-center justify-content-center"> 
                    <div class="score-container d-flex align-items-center justify-content-center">
                    <h5 class="score" >Score:</h5>
                      <h1 class="score" id="scoreVal">100+</h1>
                    </div>
                </div>
            </div>
            <div class="row container-fluid mt-4">
                <div class="col-lg-6">
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-1">bruh</button></div>
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-2">bruh</button></div>
                </div>
                <div class="col-lg-6">
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-3">bruh</button></div>
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-4">bruh</button></div>
                </div>                
            </div>
            
        </div>`

components.board = `<div class="play-screen">
<div class="header">
  <div class="buttons">
    <button class="btn btn-primary" id="home"><i class="fa fa-home" aria-hidden="true"></i></button>
    <button class="btn btn-primary" id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
  </div>
  <div class="title">Top 5 highest scores</div>
</div>
<div class="chart-container">
    <table class="table table-bordered table-hover">
        <thead class="categories">
          <tr>
            <th scope="col"><i class="fa fa-trophy" aria-hidden="true"></i></th>
            <th scope="col">Player</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody id="show-results"></tbody>
      </table>
</div>
</div>`
components.loadingScreen = `
<div id="loadingScreen"><div>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
</div></div>`

components.scoreBoard = `<canvas height="1" id="confetti" width="1"></canvas>
<div class="outer">
        <div class="container">
                <div class="content text-center" style = "margin-top: 0; margin-bottom:0; background-color: transparent;">
                    <h3>Chúc mừng bạn , bạn được</h3>
                    <h1>50 điểm</h1>
                </div>
                <div class="buttons">
                    <button class="btn btn-blue-grey">Chơi lại</button>
                    <button class="btn btn-blue-grey" id="boardTrigger">Xem vị trí của bạn</button>
                </div>
        </div>
</div> `

components.landingPage = `
<div class="outer">
        <div class="container card rounded">
                <div class="title text-center" style = "margin-top: 0; margin-bottom:0; background-color: transparent;">
                    <h1>CHÀO MỪNG BẠN</h1>
                </div>
                <div id="info" class="md-form card-content">
                    <input type="text" id="username" class = "form-control" >
                    <label for="userInput">Tên của bạn...</label>
                    <button class="btn btn-grey" id="submitInfoBtn"><h3>Bắt đầu chơi</h3></button>
                </div>
        </div>
</div> `