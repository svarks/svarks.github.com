guard 'shell' do
  watch(%r{data.yml})                    { `rake compile:haml` }
  watch(%r{app/.*\.haml})                { `rake compile:haml` }
  watch(%r{app/.*\.(coffee|sass|hamlc)}) { `rake compile:sprockets` }
end
