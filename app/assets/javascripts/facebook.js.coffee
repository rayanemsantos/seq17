$(document).ready ->
  $('body').prepend('<div id="fb-root"></div>')

  $.ajax
    url: "#{window.location.protocol}//connect.facebook.net/pt_BR/sdk.js?&version=v2.10"
    dataType: 'script'
    cache: true


window.fbAsyncInit = ->
  FB.init(appId: '1958219931100778', cookie: true)

  $('#sign_in').click (e) ->
    e.preventDefault()
    FB.login ((response) ->
      window.location = '/users/auth/facebook?auth_type=rerequest&scope=email' if response.authResponse
    ), scope: 'public_profile,email'

  $('#sign_out').click (e) ->
    FB.getLoginStatus (response) ->
      FB.logout() if response.authResponse
    true
