/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = function () {
	
	};
    // Application Constructor

app.prototype.onDeviceReady = function() {
	app.receivedEvent('deviceready');
	var connectionString = "Endpoint=sb://austinsnotificationhub2-ns.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=aLkUJUoD6SxBTpcGrKrLwT6y5hMPssCOjhWuW8j1IdQ=",
	notificationHubPath = "austinsnotificationhub2",
	sender_id = "730194827269";
	
	alert("test");

	var hub = new WindowsAzure.Messaging.NotificationHub(notificationHubPath, connectionString, sender_id);

	hub.registerApplicationAsync().then(function (result) {
		
		//console.log("Registration successful: " + result.registrationId);
		alert("Registration successful: " + result.registrationId/*JSON.stringify(result)*/);
	},
	function (error) {
			//console.log("Registration failed: " + JSON.stringify(error));
			alert(JSON.stringify(error));
	});

	hub.onPushNotificationReceived = function (msg) {
		//console.log("Push Notification received: " + JSON.stringify(msg));
		alert(msg.message);
	};
};