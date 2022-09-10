const sliderContainer = document.querySelector(".experience__slider");
const jobsContainer = document.querySelector(".experience__content__right");

const jobs = [
	{
		company: "Axo Systems",
		position: "FullStack Developer",
		date: "May 2021 - Mar 2022",
		description: [
			"Developed a website for CNI Consultores using Wordpress, that it's main purpose is to be a blog to spread information about finance and business, and also works as a platform for selling courses and webinars",
			"Maintained an existing API developed with PHP hosted in a remote server that allows the communication of a ERP app for CNI Consultores.",
			"Developed components for the frontend of the ERP app using React with Material UI.",
		],
		class: "axo",
		id: "Axo",
	},
	{
		company: "Teleperformance Alpha",
		position: "Bilingual Agent",
		date: "Sep 2020 - Mar 2021",
		description: [
			"I was an Agent for Comcast, specifically to the division of Xfinity. Using software from the company, I used to help the customers in an English Care Campaign",
			"Resolved issues with the customer's services, such as telephone, cable and internet. Also helped them in issues with their bills.",
		],
		class: "teleperformance",
		id: "Teleperformance",
	},
];

const assignJobs = () => {
	jobs.forEach((item) => {
		const jobItem = document.createElement("div");
		const button = document.createElement("button");
		const position = document.createElement("h3");
		const date = document.createElement("span");
		const list = document.createElement("ul");

		button.innerText = item.company;
		button.type = "button";
		button.classList.add("experience__slider__button", item.id);
		sliderContainer.append(button);

		position.innerText = item.position;
		position.classList.add("experience__slider__item__title");
		position.id = item.id;

		date.innerText = item.date;
		date.classList.add("experience__slider__item__date");

		list.classList.add("experience__slider__item__list");
		jobItem.classList.add("experience__slider__item", item.id);

		item.description.forEach((description) => {
			const listItem = document.createElement("li");
			listItem.innerText = description;
			listItem.classList.add(
				"experience__slider__item__list__element",
				item.class,
			);
			list.append(listItem);
		});

		jobItem.append(position, date, list);
		jobsContainer.append(jobItem);
	});

	const button = document.querySelector(".experience__slider__button");
	setTimeout(() => {
		button.click();
	}, [100]);
};

assignJobs();

const changeClass = (e) => {
	const buttons = document.querySelectorAll(".experience__slider__button");
	const jobItems = document.querySelectorAll(".experience__slider__item");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("active");
		jobItems[i].style.display = "none";
		if (jobItems[i].classList[1] === e.currentTarget.classList[1])
			jobItems[i].style.display = "block";
	}

	e.currentTarget.classList.add("active");
};

const changeTabOpen = () => {
	const buttons = document.querySelectorAll(".experience__slider__button");

	buttons.forEach((button) => {
		button.addEventListener("click", changeClass);
	});
};

changeTabOpen();
