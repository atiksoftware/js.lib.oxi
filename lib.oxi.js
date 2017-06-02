
	var oxi = {


		/* URL start */
		url : {
			/* SLUG :  Friendly seo url */
			slug : function(e){
				return e.replace(/ /g, "-").replace(/</g, "").replace(/>/g, "").replace(/"/g, "").replace(/é/g, "").replace(/!/g, "").replace(/'/, "").replace(/£/, "").replace(/^/, "").replace(/#/, "").replace(/$/, "").replace(/\+/g, "").replace(/%/g, "").replace(/½/g, "").replace(/&/g, "").replace(/\//g, "").replace(/{/g, "").replace(/\(/g, "").replace(/\[/g, "").replace(/\)/g, "").replace(/]/g, "").replace(/=/g, "").replace(/}/g, "").replace(/\?/g, "").replace(/\*/g, "").replace(/@/g, "").replace(/€/g, "").replace(/~/g, "").replace(/æ/g, "").replace(/ß/g, "").replace(/;/g, "").replace(/,/g, "").replace(/`/g, "").replace(/|/g, "").replace(/\./g, "").replace(/:/g, "").replace(/İ/g, "i").replace(/I/g, "i").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/Ğ/g, "g").replace(/ü/g, "u").replace(/Ü/g, "u").replace(/ş/g, "s").replace(/Ş/g, "s").replace(/ö/g, "o").replace(/Ö/g, "o").replace(/ç/g, "c").replace(/Ç/g, "c").replace(/--/g, "-").replace(/---/g, "-").replace(/----/g, "-").replace(/----/g, "-");
			}
			
		}
		/* URL end */

	}
