//logic to show nav
const menu_btn = document.querySelector(".menu-btn")

//add event listener to it
menu_btn.addEventListener("click", show_nav)

function show_nav(){
    const nav_bar = document.querySelector("nav")
    nav_bar.classList.toggle("show-nav")

    menu_btn.classList.toggle("change-menu-bg")
}

//logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

//logic to display result
const result = document.querySelector(".result")
//target the form
const result_form = document.querySelector("form")
//add submit event listener to it
result_form.addEventListener("submit", check_result)

//define the check result function
function check_result(event){
    event.preventDefault()
    // grab the uder exam no
    let user_number = document.querySelector(".exam-no").value   
    // check if the user_number has the result on the database
    let result_found = all_students.find(function(result){
        return result.exam_no === user_number
    })

    if(result_found){
           //spit out the result details
           document.querySelector(".exam-num").innerHTML = result_found.exam_no
           document.querySelector(".firstname").innerHTML = result_found.firstname
           document.querySelector(".lastname").innerHTML = result_found.lastname
           document.querySelector(".gender").innerHTML = result_found.gender
           document.querySelector(".score").innerHTML = result_found.score
           document.querySelector(".grade").innerHTML = result_found.grade
           document.querySelector(".remarks").innerHTML = result_found.remark

           //set the image of the owner of the result
           document.querySelector(".profile-image").src = result_found.image

           //change the display property of the result section to flex, and that of the form to none
           result.style.display = "flex"
           result_form.style.display = "none"
    }else{
        // display no result found
        // set the profile image to none
          document.querySelector(".profile-image").style.display = "none"
          // set the call to actions display to none
          document.querySelector(".call-to-actions").style.display = "none"
          document.querySelector(".result-details").innerHTML = `<h1 class="no-result">Ooops! No result found for 
         the exam no: ${user_number}</h1>`
            result.style.display = "flex"
            result_form.style.display = "none"

    }

}


// write the close result logic here
const exit_btn = document.querySelector(".exit-btn")

exit_btn.addEventListener("click", exit_results)

//define function
function exit_results(){
    document.querySelector("form").style.display = "flex"
    result.style.display = "none"
}
