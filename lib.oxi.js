
	var oxi = {


		/* URL start */
		url : {
			/* SLUG :  Friendly seo url */
			slug : function(e){
				return e.replace(/ /g, "-").replace(/</g, "").replace(/>/g, "").replace(/"/g, "").replace(/é/g, "").replace(/!/g, "").replace(/'/, "").replace(/£/, "").replace(/^/, "").replace(/#/, "").replace(/$/, "").replace(/\+/g, "").replace(/%/g, "").replace(/½/g, "").replace(/&/g, "").replace(/\//g, "").replace(/{/g, "").replace(/\(/g, "").replace(/\[/g, "").replace(/\)/g, "").replace(/]/g, "").replace(/=/g, "").replace(/}/g, "").replace(/\?/g, "").replace(/\*/g, "").replace(/@/g, "").replace(/€/g, "").replace(/~/g, "").replace(/æ/g, "").replace(/ß/g, "").replace(/;/g, "").replace(/,/g, "").replace(/`/g, "").replace(/|/g, "").replace(/\./g, "").replace(/:/g, "").replace(/İ/g, "i").replace(/I/g, "i").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/Ğ/g, "g").replace(/ü/g, "u").replace(/Ü/g, "u").replace(/ş/g, "s").replace(/Ş/g, "s").replace(/ö/g, "o").replace(/Ö/g, "o").replace(/ç/g, "c").replace(/Ç/g, "c").replace(/--/g, "-").replace(/---/g, "-").replace(/----/g, "-").replace(/----/g, "-");
			}

		},
		/* URL end */

		/* Domain start */
		domain : {
			info : function(e){
				parsed_url = {}
				url = (e ? e : window.location.href)
				protocol_i = url.indexOf('://');
				parsed_url.protocol = url.substr(0,protocol_i);
				remaining_url = url.substr(protocol_i + 3, url.length);
				domain_i = remaining_url.indexOf(':');
				if(domain_i < 3){
					domain_i = remaining_url.indexOf('/');
				}
				domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
				parsed_url.domain = remaining_url.substr(0, domain_i);
				domain_parts = parsed_url.domain.split('.');
				switch ( domain_parts.length ){
					case 2:
						parsed_url.subdomain = null;
						parsed_url.host = domain_parts[0];
						parsed_url.tld = domain_parts[1];
						break;
					case 3:
						parsed_url.subdomain = domain_parts[0];
						parsed_url.host = domain_parts[1];
						parsed_url.tld = domain_parts[2];
						break;
					case 4:
						parsed_url.subdomain = domain_parts[0];
						parsed_url.host = domain_parts[1];
						parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
						break;
				}
				parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;
				domain_i = remaining_url.indexOf('/');
				parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);
				return parsed_url;
			}
		}
		/* Domain start */
	}
