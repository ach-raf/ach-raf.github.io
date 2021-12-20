var firstLetterUppercase = function(str) {
   str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
   });
   return str;
}
function ajax_call(_url, _options) {
  return new Promise(resolve => {
    setTimeout(() => {
		$.ajax({
			url: _url,
			type: "GET",
			success: function(result) {
				resolve(result);
			},
			error: function(error) {
				console.log(`Error ${error}`)
				resolve(`Error ${error}`);
			}
		})	
		
    }, 2000);
  });
}
function log_result(_result){
	$.each(_result, function(key, value) {
		console.log(key, value);
	});
	
}
async function api_call(_url, _options) {
	  console.log('calling');
	  const result = await ajax_call(url, 'options');
	  log_result(result['Search'])
}