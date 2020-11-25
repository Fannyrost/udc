class PagesController < ApplicationController
  def home
  end

  def presentation
    @mother = Production.find_by(mother: "Mère")
    @father = Production.find_by(mother: "Père")

  end

  def gallery
  end

  def saillie
  end

  def contact
  end
end
