var React = require('react')
var ReactDOM = require('react-dom')
const constants = require('./scripts/constants.js')

var Nav = require('./components/nav.jsx')
var BootstrapPre = require('./components/bootstrap-pre.jsx')
require('./styles/index.scss')
var Example = require('./components/example.jsx')


let App = React.createClass({
  getInitialState: function () {
    return {
      selectedElementIndex: constants.elements.indexOf('Navbar'),
    }
  },
  changeSelectedElement: function (clickedLiIndex) {
    this.setState({ selectedElementIndex: clickedLiIndex })
  },
  render: function () {
    let featureTitle = constants.elements[this.state.selectedElementIndex]
    return (
      <div id="main-container">
        <Nav
          selectedElementIndex={ this.state.selectedElementIndex }
          liClicked={ this.changeSelectedElement }
        />
        <main>
          <div className="content">
            <h1>{ featureTitle }</h1>
            {/* TODO: Use the actual example rather than an image */}
            <Example/>
            <img
              className="image-responsive"
              src={require('./images/navbar.png')}
              alt="navbar example"
            />
            <h2>Code Snippet</h2>
            <BootstrapPre/>
          </div>
        </main>
        <footer>
          <div className="options">
            <a className="btn">Copy to Clipboard</a>
          </div>
        </footer>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
)
