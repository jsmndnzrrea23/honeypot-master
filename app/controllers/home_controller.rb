class HomeController < ApplicationController
  def index
  end

  def test
    render json: {
      status: 'success'
    }
  end
end
