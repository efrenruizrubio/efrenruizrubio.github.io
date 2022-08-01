getAge = (date) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDay() < birthDate.getDay())) {
        age--;
    }
    return age;
}

const age = document.getElementById('age');
age.innerHTML = getAge('2000-08-02');