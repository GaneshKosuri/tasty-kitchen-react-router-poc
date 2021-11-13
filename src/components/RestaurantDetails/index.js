import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
// import {FaStar, FaRupeeSign} from 'react-icons/fa'

import WithRouter from '../WithRouter'

import './index.css'
import FoodItems from '../FoodItems'
import Header from '../Header'
import Footer from '../Footer'
import SomethingWentWrong from '../SomethingWentWrong'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestaurantDetails extends Component {
  state = {
    restaurantData: {},
    apiStatus: apiStatusConstants.initial,
    foodItems: [],
  }

  componentDidMount() {
    this.getRestaurantItemData()
  }

  getRestaurantItemData = async () => {
    const {matches} = this.props
    console.log('matches', matches)
    const {
      params: {id},
    } = matches[-1]
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      const fetchedData = await response.json()
      const foodItemsData = fetchedData.food_items.map(item => ({
        name: item.name,
        id: item.id,
        cost: item.cost,
        imageUrl: item.image_url,
        rating: item.rating,
        reviewsCount: item.reviews_count,
      }))

      this.setState({
        restaurantData: fetchedData,
        foodItems: foodItemsData,
        apiStatus: apiStatusConstants.success,
      })
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <SomethingWentWrong onClickTryAgain={this.getRestaurantItemData} />
  )

  renderRestaurantItemDetails = () => {
    const {restaurantData, foodItems} = this.state
    return (
      <>
        <Header />
        <div className="restaurant-Image-text-details-container">
          <img
            src={restaurantData.image_url}
            alt="restaurant"
            className="separate-restaurant-image"
          />

          <div className="restaurant-details-container">
            <h1 className="separate-restaurant-name">{restaurantData.name}</h1>
            <p className="separate-restaurant-type">{restaurantData.cuisine}</p>
            <p className="separate-restaurant-location">
              {restaurantData.location}
            </p>
            <div className="separate-rating-costs-container">
              <div className="separate-rating-details-container">
                <div className="separate-rating-container">
                  <img
                    src="https://res.cloudinary.com/dj7inbtyj/image/upload/v1628483481/Mini%20Projects/white-star_slt5mw.png"
                    alt="white-star"
                    className="separate-star-icon"
                  />
                  <p className="separate-rating">{restaurantData.rating}</p>
                </div>
                <p className="para">{`${restaurantData.reviews_count} Ratings`}</p>
              </div>
              <div className="cost-for-two-container">
                <div className="cost-container">
                  <p className="cost-for-two">{restaurantData.cost_for_two}</p>
                </div>
                <p className="para">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="restaurant-each-item-container">
          {foodItems.map(eachItem => (
            <FoodItems itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <Footer />
      </>
    )
  }

  renderLoader = () => (
    <div className="loader-container" testid="restaurant-details-loader">
      <Loader type="Oval" color="gold" height="40" width="50" />
    </div>
  )

  renderBasedONApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="restaurant-items-container">
        {this.renderBasedONApiStatus()}
      </div>
    )
  }
}

export default WithRouter(RestaurantDetails)
