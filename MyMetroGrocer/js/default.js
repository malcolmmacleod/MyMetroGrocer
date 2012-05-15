// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;

    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize 
                // your application here.
                performInitialSetup(eventObject);
            } else {
                // TODO: This application has been reactivated from suspension. 
                // Restore application state here.
                performRestore(eventObject);
            }
            WinJS.UI.processAll();
        }
    };

    app.oncheckpoint = function (eventObject) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the 
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // eventObject.setPromise().
        performSuspend(eventObject);

    };

    app.start();

    function performInitialSetup(e) {
        WinJS.Binding.processAll(document.body, ViewModel);

        WinJS.Utilities.query('button').listen("click", function (e) {
            if (this.id == "addItemButton") {
                ViewModel.UserData.addItem("Ice Cream", 1, "Vanilla", "Walmart");
            }
            else {
                ViewModel.UserData.getItems().pop();
            }
        });
    }

    function performRestore(e) {
        // TODO
    }

    function performSuspend(e) {
        // TODO
    }
})();
