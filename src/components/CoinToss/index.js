import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResult: 0}

  generateTossResult = () => {
    const newtossResult = Math.floor(Math.random() * 2)
    let newHeadsCount = 0
    let newTailsCount = 0
    if (newtossResult === 0) {
      newHeadsCount = 1
    } else {
      newTailsCount = 1
    }
    this.setState(prevState => ({
      headsCount: prevState.headsCount + newHeadsCount,
      tailsCount: prevState.tailsCount + newTailsCount,
      tossResult: newtossResult,
    }))
  }

  getImageUrl = () => {
    const {tossResult} = this.state
    let imageUrl = ''
    if (tossResult === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return imageUrl
  }

  render() {
    const {headsCount, tailsCount} = this.state
    const imageUrl = this.getImageUrl()

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="info">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button
            className="toss-btn"
            type="button"
            onClick={this.generateTossResult}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count total">Total: {headsCount + tailsCount}</p>
            <p className="count heads">Heads: {headsCount}</p>
            <p className="count tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
