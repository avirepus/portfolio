/*--------------------------------------------------------------------------------------
REQUIRE
--------------------------------------------------------------------------------------*/
var yo = require('yo-yo')
var csjs = require('csjs-inject')
var minixhr = require('minixhr')

/*--------------------------------------------------------------------------------------
LOADING FONT
--------------------------------------------------------------------------------------*/
var links = ['https://fonts.googleapis.com/css?family=Crafty+Girls','https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css']
var font = yo` <link href=${links[0]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
var fontAwesome = yo`<link href=${links[1]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
document.head.appendChild(fontAwesome)



minixhr('https://api.github.com/users/avirepus', startPage)

function startPage (data) {
  var data = JSON.parse(data)
  document.body.appendChild(template(data))
  activateScrollEffect(COLORS)
}


/*--------------------------------------------------------------------------------------
THEME
--------------------------------------------------------------------------------------*/
var RED        = "#B80C09"
var PINK       = 'hsla(346,84%,61%,1)'
var YELLOW     = 'hsla(42,100%,70%,1)'
var GREEN      = 'hsla(164,95%,43%,1)'
var GREY       = "#E5E7E6"
var BLUE       = "#0E0E52"
var violet     = "#8A4F7D"
var COLORS     = [RED, PINK, YELLOW, GREEN, GREY, BLUE]

/*--------------------------------------------------------------------------------------
WEB PAGE
--------------------------------------------------------------------------------------*/
var css = csjs`

  body {
    text-align: center;
    color: black;
    background-color: ${RED};
    font-family: 'Crafty Girls', cursive;
  }
  h1 {
    margin-top: 1em;
    color: ${GREY};
    font-size: 3.5em;
    text-align: center;
  }
	h2{
    margin-top: 3em;
    font-size: 2em;
    margin-bottom: 8em;
  }
	img{
    margin-top: 1.5em;
    border: 13px double ${BLUE};
    border-radius: 50%;
    width: 13em;
  }
@-webkit-keyframes bounce {
      0% {
        bottom: 15px;
      }
      100% {
        bottom: 15px;
        color:	${BLUE};
      }
      60% {
        bottom: 2px;
      }
    }
.arrow {
      position: relative;
      font-size: 2.5em;
      animation: bounce 2s infinite;
    }

`

function template (data) {
  return yo`
  <div>
  <img src="${data.avatar_url}">
  <h1>${data.name}</h1>
  <h3>${data.bio}</h3>
  <div>
        <i class="${css.arrow} fa fa-chevron-down" aria-hidden="true"></i>
        </div>
  ${portfolioComponent()}
  ${textboxComponent ()}
  ${footerComponent ()}
  </div>
`
}
document.body.appendChild(template ())

document.body.appendChild(template ())

/*--------------------------------------------------------------------------------------
PORTFOLIO
--------------------------------------------------------------------------------------*/  function portfolioComponent () {
	var css = csjs`

.portfolio {
      margin: 2em 0 2em 0;
      width: 100%;
    }

    .portfolioItem {
      width: 90%;
      padding-bottom: 100px;
      display:block;
      align-items          : center;
      float: center;

      transition: 2s;
    }
    .portfolioTitle {
      margin: 5em 0 1em 33%;
      width                : 40%;
      padding: 0.5em;
      font-size: 2em;
      color: ${PINK};
      background-color: ${YELLOW};
      border-radius: 4px;
      border: 4px solid ${GREY};
      transition: 2s;
    }
    .portfolioBody {
      margin: 1em 0 6em 13%;
      color: ${GREY};
      text-align: center;
      font-size: 1.5em;
      transition: 4s;
    }
  	.portfolioItem_isHover {
      width                : 90%;
      padding-bottom       : 100px;
      display              : block;
      align-items          : center;
      cursor               : pointer;
      transition           : 2s;
      float: center;
    }
  .portfolioTitle_isHover {
      margin                : 5em 0 1em 33%;
      width                : 40%;
      padding               : 0.5em;
      font-size             : 2em;
      background-color: 		${YELLOW};
      border-radius         : 4px;
      border: 4px solid ${violet};
      transition            : 2s;
    }
  .portfolioBody_isHover {
      margin: 1em 0 6em 13%;
      text-align           : center;
      font-size            : 1.5em;
      transition           : 4s;
    text-align: justify;

    }

  `
  function template () {
    return yo`
    <div onmouseover=${hoverPortfolio}>
      <div class="${css.portfolio}">
        <div class="${css.portfolioItem}">
          <div class="${css.portfolioTitle}">
            Portfolio: My quiz app
          </div>
          <div class="${css.portfolioBody}">
            My quiz is a quiz app where users can answer
            Likert scale questions and compare their answers
            with others. It stores all the data in the database
            and enables an admin view of all the answers.
           </div>
        </div>
      </div>
    </div>
    `
  }

  var element = template()
  return element

  //hover
    function hoverPortfolio () {
    var element = this
    var newElement = yo`
    <div onmouseout=${unhoverPortfolio} onclick=${openNewTab}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem_isHover}">
            <div class="${css.portfolioTitle_isHover}">
              Portfolio: My quiz app
            </div>
            <div class="${css.portfolioBody_isHover}">
              My quiz is a quiz app where users can answer
              Likert scale questions and compare their answers
              with others. It stores all the data in the database
              and enables an admin view of all the answers.
             </div>
          </div>
        </div>
      </div>
    `
    // 'this' is a reference to the dom node,
    // that hoverPortfolio was attached to as an eventListener
    yo.update(element, newElement)
  }
    var element = template()
	  return element

    function unhoverPortfolio() {
      var element = this
      var newElement = template()
      yo.update(element, template())
    }
 		function openNewTab() {
    var url = "https://avirepus.github.io/quiz/"
    var win = window.open(url, '_blank')
    win.focus()
  }

}

//textbox

function textboxComponent () {
  var css = csjs`
  .textbox {
    margin: 5em 25% 3em 25%;
    font-size: 2em;
    line-height: 1.2em;
    text-align: justify;
    margin-top: 2em;
  }
  `

  function template () {
    return yo`
      <div>
        <div class="${css.textbox}">
          Check out stuff I do and get in touch. We can meet for coffee
          and talk about amazing products you want to build. I can
          help you make it work :)
        </div>
      </div>
    `
  }

  var element = template()
	return element
}

//footer

function footerComponent () {
	var css = csjs`
  	.container {
      display: flex;
      justify-content: center;
    }
    .icon {
      padding: 1em;
      font-size: 35px;
      color: ${BLUE};
    }
    .icon:hover {
      opacity: 0.4;
    }
    `

  function template () {
    return yo`
    <div class="${css.container}">
      <a href="https://github.com/avirepus">
        <i class="${css.icon} fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="mailto:avirepus88@gmail.com ">
        <i class="${css.icon} fa fa-envelope-o" aria-hidden="true"></i>
      </a>
      <a     href="https://www.facebook.com/ivanica888">
       <i class="${css.icon} fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>
    `
  }

  var element = template()
  return element
}

//helpers

function activateScrollEffect (COLORS) {
  var docHeight = document.body.offsetHeight
  var colorAreaHeight = docHeight/COLORS.length
  window.addEventListener("scroll", function(event) {
    var position = document.body.scrollTop
    var i = Math.floor(position/colorAreaHeight)
    var color    = COLORS[i]
    document.body.style.backgroundColor = color
    document.body.style.transition = "background-color 3s"
  })
}
    activateScrollEffect(COLORS)
