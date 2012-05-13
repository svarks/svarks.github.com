guard 'shell' do
  watch(%r{data.yml})     { `rake generate_html` }
  watch(%r{src/.*\.haml}) { `rake generate_html` }
  watch(%r{src/.*\.sass}) { `rake generate_css` }
end