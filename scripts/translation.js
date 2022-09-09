const translateButton = document.querySelector(".translate-button");

const translateToSpanish = () => {
	const salute = document.querySelector(".introduction__salute");
	const description = document.querySelector(".introduction__description");
	const summary = document.querySelector(".introduction__text");
	const summaryChilds = Array.from(summary.children);
	const contactButton = document.querySelector(".introduction__contact-button");
	const sectionTitles = Array.from(
		document.querySelectorAll(".numbered-topic__text"),
	);
	const aboutDescription = document.querySelector(".about__description");

	salute.innerText = "Hola, mi nombre es";
	description.innerText = `Soy un Ingeniero de Software actualmente enfocándome en desarrollo Frontend.`;
	summary.innerHTML = `Tengo <span id=${summaryChilds[0].id}>${summaryChilds[0].innerText}</span> años y sigo estudiando en la <a href="${summaryChilds[1].href}" target="_blank">${summaryChilds[1].innerText}</a>, y, al mismo tiempo, estoy tomando cursos en la plataforma online <a href="${summaryChilds[2].href}" target="_blank">${summaryChilds[2].innerText}</a>, la cual me ayuda a nunca parar de aprender.`;
	contactButton.innerText = "Contacto";

	sectionTitles[0].innerHTML = "Acerca de mí&nbsp;";
	sectionTitles[1].innerHTML = "Dónde he trabajado&nbsp;";
	sectionTitles[2].innerHTML = "Proyectos&nbsp;";
	sectionTitles[3].innerHTML = "Contáctame&nbsp;";

	aboutDescription.innerHTML = `Hola 😁, mi nombre es Efrén y soy un programador desde 2018. Me encanta solucionar problemas y aprender nuevas cosas. Sigo en la universidad, y mientras termino mis estudios empecé a tomar cursos para desarrollar mis habilidades en el frontend. Desde pequeño, siempre he estado interesado en las computardoras y he mantenido la curiosidad de cómo las cosas funcionan, misma que me motiva a seguir aprendiendo nuevas tecnologías para implementarlas en los proyectos que he realizado a través de toda mi carrera.<br><br>Actualmente me encuentro trabajando en distintos proyectos, uno de ellos es un <a href="https://github.com/efrenruizrubio/intelligent-system" target="_blank">Sistema Experto</a> (Todavía no está finalizado), e incluso un <a href="https://corrientes-filosoficas.netlify.app/" target="_blank">Quiz de corrientes filosóficas</a>, que es para un maestro de mi antigua preparatoria. (MVP terminado)<br><br>Aquí se enlistan varias tecnologías con las que he trabajado:`;

	if (translateButton.innerText === "Translate to English") {
		history.scrollRestoration = "manual";
		window.location.reload();
	}

	translateButton.innerText = "Translate to English";
};

translateButton.addEventListener("click", translateToSpanish);
