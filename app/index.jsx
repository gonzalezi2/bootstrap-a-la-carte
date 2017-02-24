var React = require('react')
var ReactDOM = require('react-dom')
const constants = require('./scripts/constants.js')

var Navigation = require('./components/navigation.jsx')
const componentCode = [
                      require('./components/elements/alerts-pre.jsx'),
                      require('./components/elements/button-dropdowns-pre.jsx'),
                      require('./components/elements/button-groups-pre.jsx'),
                      require('./components/elements/dropdowns-pre.jsx'),
                      require('./components/elements/glyphicons-pre.jsx'),
                      require('./components/elements/input-groups-pre.jsx'),
                      require('./components/elements/list-group-pre.jsx'),
                      require('./components/elements/media-object-pre.jsx'),
                      require('./components/elements/navbar-pre.jsx'),
                      require('./components/elements/navs-pre.jsx'),
                      require('./components/elements/panels-pre.jsx'),
                      require('./components/elements/progress-bars-pre.jsx'),
                      require('./components/elements/responsive-embed-pre.jsx'),
                      require('./components/elements/wells-pre.jsx'),
                    ]
require('./styles/index.scss')


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
    const featureTitle = constants.elements[this.state.selectedElementIndex]
    const BootstrapElement = componentCode[this.state.selectedElementIndex]
    return (
      <div>
        <Navigation
          selectedElementIndex={ this.state.selectedElementIndex }
          liClicked={ this.changeSelectedElement }
        />
        <main>
          <div className="content">
            <h1>{ featureTitle }</h1>
            {/* TODO: Use the actual example rather than an image */}
            <img
              className="image-responsive"
              src={require('./images/navbar.png')}
              alt="navbar example"
            />
            <h2>Code Snippet</h2>
            <BootstrapElement/>
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
