document.getElementById("defaultOpen").click();

function openWork(evt, workName){
    var experienceSliderItem, experienceSliderButton;
    experienceSliderItem = document.getElementsByClassName("experience__slider__item");
    for(let i = 0; i < experienceSliderItem.length; i++){
        experienceSliderItem[i].style.display = "none";
    }

    experienceSliderButton = document.getElementsByClassName("experience__slider__button");
    for(let i = 0; i < experienceSliderButton.length; i++){
        experienceSliderButton[i].className = experienceSliderButton[i].className.replace(" active", "");
    }

    document.getElementById(workName).style.display = "block";
    evt.currentTarget.className += " active";
}