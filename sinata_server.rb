require 'sinatra'
require 'json'
require_relative 'lib/stooges'

#
# All routes under /api return JSON
# We need to make sure we match these first
#
get '/api/stooges' do
  content_type :json
  stooges = Stooges.new
  # This is here to emulate a slow database
  sleep 5
  stooges.all.to_json
end

#
# All non /api routes will render index.html
# This is a singe page web app, so all routing 
# is done using Angular.
#
get '/' do
  send_file 'public/html/index.html'
end

get '/*' do
  send_file 'public/html/index.html'
end

