function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let url = document.getElementById("url_input").value;
	console.log("::: Form Submitted :::");

	if (Client.checkForUrl(url)) {
		console.log("Valid URL 🔥: ", url);

		fetch("http://localhost:8081/test", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ url }),
		})
			.then((res) => res.json())
			.then(function (res) {
				// console.log(res);
				document.getElementById("language").innerHTML =
					"Language: " + res.model;
				document.getElementById("score_tag").innerHTML =
					"Score Tag: " + res.score_tag.toLowerCase();
				document.getElementById("agreement").innerHTML =
					"Agreement: " + res.agreement.toLowerCase();
				document.getElementById("subjectivity").innerHTML =
					"Subjectivity: " + res.subjectivity.toLowerCase();
				document.getElementById("confidence").innerHTML =
					"Confidence: " + res.confidence;
				document.getElementById("irony").innerHTML =
					"Irony: " + res.irony.toLowerCase();
				document.getElementById("results_section").className = "";
			});
	} else {
		console.log("Invalid URL: ", url);
	}
}

export { handleSubmit };
