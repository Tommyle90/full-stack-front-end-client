'use strict'
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
})

$('#sign-up-btn').click(function () {
  $('#sign-up-form').fadeIn(500)
  $('#sign-in-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#message').show(500)
})

$('#sign-in-btn').click(function () {
  $('#sign-in-form').fadeIn(500)
  $('#sign-up-form').fadeOut(500)
  $('#change-password-form').fadeOut(500)
  $('#message').show(500)
})

$('#change-pass-btn').click(function () {
  $('#change-password-form').fadeIn(500)
  $('#sign-up-form').fadeOut(500)
  $('#sign-in-form').fadeOut(500)
  $('#message').show(500)
})
