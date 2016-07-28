function getVariables(str) {
	patt = [/\W/,/[0-9]/];
	var res = [];
	var i = 0;
	while (i < str.length) {
		j = i + 1;
		while (!patt[0].test(str.substring(i,j)) && 
		!patt[1].test(str.substring(i,i+1)) && 
		j <= str.length) {j++};
		if (j > i+1) {res.push(str.substring(i,j-1))};
		i = j;
  }
  return res;
}


