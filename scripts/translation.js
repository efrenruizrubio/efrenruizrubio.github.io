const translateButton = document.querySelector(".translate-button");

const translateToSpanish = () => {
	const salute = document.querySelector(".introduction__salute");
	const description = document.querySelector(".introduction__description");

	const menuLinks = document.querySelector(".header__aside__list");
	const menuButton = document.querySelector(
		".header__aside__list__item__button",
	);

	menuLinks.children[0].children[1].innerText = "Acerca de mí";
	menuLinks.children[1].children[1].innerText = "Experiencia";
	menuLinks.children[2].children[1].innerText = "Proyectos";
	menuLinks.children[3].children[1].innerText = "Contacto";
	menuButton.innerText = "Currículum";

	const summary = document.querySelector(".introduction__text");
	const summaryChilds = Array.from(summary.children);
	const introductionContactButton = document.querySelector(
		".introduction__contact-button",
	);

	const sectionTitles = Array.from(
		document.querySelectorAll(".numbered-topic__text"),
	);

	const aboutDescription = document.querySelector(".about__description");

	const axoDescription = document.querySelectorAll(".axo");
	const axoPosition = document.getElementById("Axo");
	const teleperformancePosition = document.getElementById("Teleperformance");
	const teleperformanceDescription =
		document.querySelectorAll(".teleperformance");

	const firstCard = document.querySelector("#philosophical-project");
	const secondCard = document.querySelector("#invoice-project");
	const thirdCard = document.querySelector("#blog-project");
	const fourthCard = document.querySelector("#batatabit-project");

	const contactText = document.querySelector(".contact__text");
	const contactButton = document.querySelector(".contact__button");
	const credits = document.querySelector(".footer__bottom__title");

	salute.innerText = "Hola, mi nombre es";
	description.innerText = `Soy un Ingeniero de Software actualmente enfocándome en desarrollo Frontend.`;

	summary.innerHTML = `Tengo <span id=${summaryChilds[0].id}>${summaryChilds[0].innerText}</span> años y sigo estudiando en la <a href="${summaryChilds[1].href}" target="_blank">${summaryChilds[1].innerText}</a>, y, al mismo tiempo, estoy tomando cursos en la plataforma online <a href="${summaryChilds[2].href}" target="_blank">${summaryChilds[2].innerText}</a>, la cual me ayuda a nunca parar de aprender.`;

	introductionContactButton.innerText = "Contacto";

	sectionTitles[0].innerHTML = "Acerca de mí&nbsp;";
	sectionTitles[1].innerHTML = "Dónde he trabajado&nbsp;";
	sectionTitles[2].innerHTML = "Proyectos&nbsp;";
	sectionTitles[3].innerHTML = "Contáctame&nbsp;";

	aboutDescription.innerHTML = `Hola 😁, mi nombre es Efrén y soy un programador desde 2018. Me encanta solucionar problemas y aprender nuevas cosas. Sigo en la universidad, y mientras termino mis estudios empecé a tomar cursos para desarrollar mis habilidades en el frontend. Desde pequeño, siempre he estado interesado en las computardoras y he mantenido la curiosidad de cómo las cosas funcionan, misma que me motiva a seguir aprendiendo nuevas tecnologías para implementarlas en los proyectos que he realizado a través de toda mi carrera.<br><br>Actualmente me encuentro trabajando en distintos proyectos, uno de ellos es un <a href="https://github.com/efrenruizrubio/intelligent-system" target="_blank">Sistema Experto</a> (Todavía no está finalizado), e incluso un <a href="https://corrientes-filosoficas.netlify.app/" target="_blank">Quiz de corrientes filosóficas</a>, que es para un maestro de mi antigua preparatoria. (MVP terminado)<br><br>Aquí se enlistan varias tecnologías con las que he trabajado:`;

	axoPosition.innerText = "Desarrollador FullStack";

	axoDescription[0].innerText =
		"Desarrollo de un sitio web para la empresa CNI Consultores con Wordpress, su propósito principal es de servir como un blog para artículos de finanzas y negocios, además de ser una plataforma para vender cursos en línea y webinars.";

	axoDescription[1].innerText =
		"Mantenimiento de una REST API existente desarrollada con PHP alojada en un servidor remoto que permite la comunicación de una aplicación ERP para CNI Consultores.";

	axoDescription[2].innerText =
		"Desarrollo de componentes para el ERP en la parte del Frontend utilizando React con Material UI.";

	teleperformancePosition.innerText = "Agente Bilingüe";
	teleperformanceDescription[0].innerText = `Agente para Comcast, específicamente en la división de Xfinity. Utilizando software de la empresa, ayudaba a los clientes en una campaña conocida como "English Care".`;
	teleperformanceDescription[1].innerText =
		"Resolvía problemas en los servicios de los clientes, como teléfono, cable e internet. También les clarificaba sus dudas con respecto a sus facturas.";

	firstCard.children[0].innerText = "Quiz de Filosofía";
	firstCard.children[0].classList.add("work__card__title__link");
	secondCard.children[0].innerText = "Generador de Facturas";
	secondCard.children[0].classList.add("work__card__title__link");
	thirdCard.children[0].innerText = "Blog Personal";
	thirdCard.children[0].classList.add("work__card__title__link");
	fourthCard.children[0].innerText = "Batatabit";
	fourthCard.children[0].classList.add("work__card__title__link");

	firstCard.children[1].innerText =
		"Es una aplicación que hace uso de la API de HTML Drag and Drop. El usuario arrastra y suelta las respuestas en el contenedor de preguntas, después de soltar todas las respuestas, el usuario puede checar sus resultados de las respuestar que otorgó.";

	secondCard.children[1].innerText =
		"Es una aplicación web que genera PDF's con datos de entrada otorgados por el usuario, pueden ser obtenidos a través de dispositivos de entrada, como el teclado o un archivo CSV. Además, permite guardar la información del usuario dentro de una base de datos, la cual es necesaria para acceder a un historial de las facturas generadas.";

	thirdCard.children[1].innerText =
		"Es un proyecto que diseñé para aprender más acerca del desarrollo frontend. Lo mantendré actualizado mientras encuentre motivación para escribir blogs. Es sencillo, pero utiliza buenas prácticas de HTML y CSS, y es una de mis primeras páginas 100% responsiva.";

	fourthCard.children[1].innerText =
		"Es una landing page para una compañía de intercambio de criptomonedas, y está hecha puramente con HTML y CSS. Diseñada con la metodología de mobile-first.";

	contactText.innerText =
		"Actualmente estoy en búsqueda, así que mi bandeja de entrada está abierta, siéntete libre de contactarme si tienes una propuesta de trabajo o simplemente quieres saludar.";

	contactButton.innerText = "Mándame un mensaje";
	credits.firstElementChild.innerText = "Hecho por Efrén Ruíz Rubio.";

	if (translateButton.innerText === "Translate to English") {
		history.scrollRestoration = "manual";
		window.location.reload();
	}

	translateButton.innerText = "Translate to English";
};

translateButton.addEventListener("click", translateToSpanish);
