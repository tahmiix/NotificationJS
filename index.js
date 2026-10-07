let notifications = ["09h00,First","09h02,Second"];

let newNotification = "";

if(newNotification){
    notifications.unshift(newNotification);

    console.log(notifications);

    console.log("Delete notification from top");

    if(notifications.includes(newNotification)){
        notifications.shift();
        console.log("Removed")

        console.log(notifications);
   
    }else{
        console.log("`Nothing to remove");
    }
    

}else if(newNotification == ""){

    console.log("Refresh Notifications")
}

console.log("Search Notifications");

if(notifications.includes("9h00,First")){

    console.log("You recieved a notification at 9h00");
}


