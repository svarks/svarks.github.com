require 'rubygems'
require 'bundler/setup'

Bundler.require :default

task :default => [:generate_html, :generate_css, :generate_pdf]

task :generate_html do
  puts "Generating html"
  
  @data = Mash.new(YAML.load(File.open("data.yml")))
  @data.companies.each do |company|
    company.date_start = Date.parse(company.date_start)
    company.date_end = if company.date_end == 'Today'
      Date.today
    else
      Date.parse(company.date_end)
    end
  end
  
  def time_between_in_months(from, to)
    months = ((to - from).abs / 30).round
    years  = months / 12
    months = months % 12
    
    output = []
    output << pluralize('year', years) if years > 0
    output << pluralize('month', months) if months > 0
    output.join(', ')
  end

  def pluralize(word, count)
    "#{count} #{word}#{'s' if count > 1}"
  end
  
  Dir[File.expand_path('../src/*.haml', __FILE__)].each do |file|
    output_file = file.gsub(/\.haml/, '').gsub(/\/src/, '')
    engine = Haml::Engine.new(File.read(file), {})
    
    File.open(output_file, 'w') do |f|
      f.write engine.render(self)
    end
    
    puts "#{output_file} compiled."
  end
end

task :generate_css do
  puts "Generating css"
  
  require 'sass/plugin'
  Sass::Plugin.options[:template_location] = File.expand_path("../src/stylesheets", __FILE__)
  Sass::Plugin.options[:css_location]      = File.expand_path("../public", __FILE__)
  Sass::Plugin.update_stylesheets
end

task :generate_pdf do
  puts "Generating pdf"
  
  pdfkit = PDFKit.new(File.open('index.html'), :page_size => 'A4', :"print-media-type" => true)
  pdfkit.to_file("resume.pdf")
end
