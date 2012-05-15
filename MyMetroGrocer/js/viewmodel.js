/// <reference path="//Microsoft.WinJS.0.6/js/base.js" />
/// <reference path="//Microsoft.WinJS.0.6/js/ui.js" />

(function () {
    "use strict";

    WinJS.Namespace.define("ViewModel", 
        {UserData: WinJS.Binding.as({
            // private members
            _shoppingItems: [],
            _preferredStores: [],

            // public members
            homeZipCode: null,

            getStores: function () {
                return this._preferredStores;
            },

            addStore: function (newStore) {
                this._preferredStores.push(newStore);
            },

            getItems: function () {
                return this._shoppingItems;
            },

            addItem: function (newName, newQuantity, newStore) {
                this._shoppingItems.push({
                    item: newName,
                    quantity: newQuantity,
                    store: newStore
                });
            }
        })
    });


    ViewModel.UserData.homeZipCode = "NY 10118";

    ViewModel.UserData.addStore("Whole Foods");
    ViewModel.UserData.addStore("Kroger");
    ViewModel.UserData.addStore("Costco");
    ViewModel.UserData.addStore("Walmart");

    ViewModel.UserData.addItem("Apples", 4, "Whole Foods");
    ViewModel.UserData.addItem("Hot dogs", 12, "Costco");
    ViewModel.UserData.addItem("Soda", "4 pack", "Costco");


})();
