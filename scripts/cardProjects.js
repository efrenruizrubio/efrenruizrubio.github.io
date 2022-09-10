const projects = [
	{
		title: "Philosophical Quiz",
		description:
			"It's an app that makes use of the HTML Drag and Drop API. The user drops the answer in the question container, and after having all the questions answered, the user can check the results for the answers provided.",
		tags: ["VS Code", "Vite", "Drag & Drop", "HTML", "CSS", "Responsive"],
		id: "philosophical-project",
		background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url("https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/philosophical-quiz.webp?alt=media&token=80bfd7fe-6460-42a5-8349-87c8c4a48440")`,
	},
	{
		title: "Invoice Generator",
		description:
			"It's a web app that its main function is to generate PDF's with input given by the user, which can be given by input devices like the Keyboard or a CSV file. Also it's able to store the user's account into a database which is needed for generating a history with all of the invoices generated.",
		tags: ["VS Code", "React", "Material UI", "PHP"],
		id: "invoice-project",
		background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url("https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/facturas.webp?alt=media&token=299e2a82-0972-4fcf-88d9-efac4bd79c1f")`,
	},
	{
		title: "Personal Blog",
		description:
			"It's a project that I designed to learn more about front end development. I'll keep it updated as long as I'm motivated. It's simple, but it uses good practices in HTML and CSS, and it's one of my first pages fully responsive.",
		tags: ["VS Code", "HTML", "CSS", "Responsive Design"],
		id: "blog-project",
		background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url("https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/blog.webp?alt=media&token=ffbd7fcd-c82b-438f-9ef0-7a2a176595b4")`,
	},
	{
		title: "Batatabit",
		description:
			"This is a landing page for a exchange company, it's made with HTML and CSS purely and its design is implemented with a mindset of mobile-first.",
		tags: ["VS Code", "HTML", "CSS", "Responsive Design"],
		id: "batatabit-project",
		background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url("https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/batatabit.webp?alt=media&token=7118952b-7b16-4f28-9d99-0d94b1e874d3")`,
	},
];

const createCards = () => {
	const cardsContainer = document.querySelector(".work__card__container");
	projects.forEach((el) => {
		const cardContainer = document.createElement("div");
		const cardTitle = document.createElement("a");
		const cardDescription = document.createElement("p");
		const cardList = document.createElement("ul");

		cardContainer.classList.add("work__card", el.id);
		cardTitle.classList.add("work__card__title");
		cardDescription.classList.add("work__card__description");
		cardList.classList.add("work__card__list");

		cardContainer.id = el.id;
		cardContainer.style.backgroundImage = el.background;
		cardTitle.innerText = el.title;
		cardDescription.innerText = el.description;
		el.tags.forEach((tag) => {
			const tagElement = document.createElement("li");
			tagElement.classList.add("work__card__list__element");
			tagElement.innerText = tag;
			cardList.append(tagElement);
		});

		cardContainer.append(cardTitle, cardDescription, cardList);

		cardsContainer.append(cardContainer);
	});
};

createCards();
