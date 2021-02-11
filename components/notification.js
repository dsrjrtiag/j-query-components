var notificationWidget;
var active = false;

$(document).ready(function(){
    var notificationElement = $("#notification");
        
    // Initialize the widget.
    notificationElement.kendoNotification({
        position: {
            left: ($(window).width() / 2) - 175,
            appendTo: "#notification",
            pinned: true,
        },
        stacking: "up",
        autoHideAfter: 0,
        hide: onHide,
        button: true,
        hideOnClick: false,
        width: 350,

        animation: {
            open: {
                effects: "slideIn:up"
            },
            close: {
                effects: "slideIn:up",
                reverse: true
            }
        }
    });

    // Get the widget object
    notificationWidget = notificationElement.data("kendoNotification");
});


function onHide(){
    active = false;
}

function notification(message, type){
        //For only one notification at a time
        // if(active){
        //     notificationWidget.hide();
        // }

        // Display notification
        notificationWidget.show(message, type);
        active = true;
}