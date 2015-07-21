require 'sinatra'
require 'json'
require_relative 'lib/stooges'

get '/' do
  send_file 'public/html/index.html'
end

get '/api/stooges' do
  content_type :json
  stooges = Stooges.new
  stooges.all.to_json
end
