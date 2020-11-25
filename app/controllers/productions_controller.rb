class ProductionsController < ApplicationController
  def index
    horses = []

    Production.all.each do | production |
      unless production.mother == 'Mère' || production.mother == 'Père'
        horses << production
      end
    end

    @horses = horses
  end
end
