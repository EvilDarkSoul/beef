#
# Copyright (c) 2006-2023 Wade Alcorn - wade@bindshell.net
# Browser Exploitation Framework (BeEF) - http://beefproject.com
# See the file 'doc/COPYING' for copying permission
#
module BeEF
  module Core
    module NetworkStack
      module Handlers
        class Raw
          def initialize(status, header = {}, body = nil)
            @status = status
            @header = header
            @body = body
          end

          def call(_env)
            # [@status, @header, @body]
            @response = Rack::Response.new(
              body = @body,
              status = @status,
              header = @header
            )
          end

          @request

          @response
        end
      end
    end
  end
end
