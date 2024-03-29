$(document).ready(function(){
    // add button style
		$("[name='poll_bar'").addClass("btn btn-default");
		// Add button style with alignment to left with margin.
		$("[name='poll_bar'").css({"text-align":"left","margin":"5px"});

		//loop
		$("[name='poll_bar'").each(
				function(i){
				  //get poll value
					var bar_width = (parseFloat($("[name='poll_val'").eq(i).text())/2).toString();
					bar_width = bar_width + "%"; //add percentage sign.
					//set bar button width as per poll value mention in span.
					$("[name='poll_bar'").eq(i).width(bar_width);

					//Define rules.
					var bar_width_rule = parseFloat($("[name='poll_val'").eq(i).text());
					if(bar_width_rule >= 50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-success")}
					if(bar_width_rule <  50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-warning")}
					if(bar_width_rule <= 10){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-danger")}

					//Hide dril down divs
					$("#" + $("[name='poll_bar'").eq(i).text()).hide();
	  });
});
