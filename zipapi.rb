require 'grape'
require 'csv'

class Zip
  def self.all
    CSV.read("zipcode.csv")[1..100]
  end
end

class ZipAPI < Grape::API
  prefix :zip

  get :all do
    Zip.all
  end

  get :test do
    {:test => "message"}
  end
end

require 'pp'

#pp Zip.all
