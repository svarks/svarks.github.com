require 'rubygems'
require 'bundler/setup'
require 'json'

Bundler.require :default

task default: ['compile:haml', 'compile:sprockets']

namespace :compile do
  task :haml do
    input_file = File.expand_path('../app/index.haml', __FILE__)
    output_file = File.expand_path('../index.html', __FILE__)
    engine = Haml::Engine.new File.read(input_file)

    puts "Compiling Haml"

    File.open(output_file, 'w') do |f|
      @data = YAML.load(File.open("data.yml"))
      f.write engine.render(self)
    end
  end

  task :sprockets do
    puts "Compiling Sprockets"

    assets = Sprockets::Environment.new
    assets.append_path 'app'
    assets.append_path 'app/stylesheets'
    assets.append_path File.dirname(HamlCoffeeAssets.helpers_path)

    %w(vendor.js app.js style.css).each do |name|
      assets[name].write_to File.expand_path("../compiled/#{name}", __FILE__)
    end
  end
end
