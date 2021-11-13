import './index.css'

const SomethingWentWrong = props => {
  const {onClickTryAgain} = props
  return (
    <div className="something-went-wrong-container">
      <img
        src="https://res.cloudinary.com/dj7inbtyj/image/upload/v1628501634/Mini%20Projects/Group_yuetlk.png"
        alt="page not found"
        className="not-found-img"
      />
      <p className="something-went-wrong-description">
        Something went wrong. Please try again.
      </p>
      <button type="button" className="try-again-btn" onClick={onClickTryAgain}>
        Try Again
      </button>
    </div>
  )
}

export default SomethingWentWrong
