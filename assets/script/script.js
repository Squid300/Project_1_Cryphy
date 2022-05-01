var getCrypto = function () {
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://api.coinlore.net/api/global/",
      method: "GET",
      headers: {},
    };
  
    $.ajax(settings).done(function (response) {
      var cryptoObj = {
        data: response.data,
      };
      cryptoList = cryptoObj;
    //   if (
    //     window.location.pathname === 
    //   ) {
    // //    // createFavEl();
    //   }
    //   for (var i = 0; i < 100; i++) {
    //     if (
    //       window.location.pathname === 
    //     ) {
    //       createCryptoEl(response.data[i]);
    //     }
    //   }
     })
}
getCrypto();