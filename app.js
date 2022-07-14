// The querySelector() method returns the first element that matches a CSS selector.

// To return all matches (not only the first), use the querySelectorAll() instead.

const sections = document.querySelectorAll('.section');

const sectBtns = document.querySelectorAll('.controls');

const sectBtn = document.querySelectorAll('.control');

const allSections = document.querySelectorAll('.main-content');

// document.addEventListener(event(click,), function, Capture)
function PageTransitions(){
    //Button click - active class

    //Loop through the buttons and 

    //**add the active class to the current/ clicked button**
    for (let i = 0; i< sectBtn.length; i++){

        sectBtn[i].addEventListener('click', function(){

            //  () =>{ } ----this keyword doesnt exist in arrow function.
            let currentBtn = document.querySelectorAll('.active-btn'); 

            //ClassList- property return CSS classmates of an element.
            //ClassName- property sets or returns an element's class attribute.

            //DIFF- Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them)

            //To replace active class to nil
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); 

            //to add className this keyword is used on the clicked button
            this.className += ' active-btn';
        })
    }

    // Section Active
    document.addEventListener('click', function(e) {
        const id = e.target.dataset.id;

        if(id){
            //remove selected from other sections
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active'); 

        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();