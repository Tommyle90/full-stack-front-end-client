'use strict'

// const store = require('../store.js')

const createMealSuccess = (createMealResponse) => {
  $('message').html('New Meal Saved')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {
  createMealSuccess,
  failure
}
