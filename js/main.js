//button to open the search bar on large screen devices equal or above 1200px //
function openModal() {
    document.getElementById("myModal-search").style.width = "100%";
}

function closeModal() {
    document.getElementById("myModal-search").style.width = "0%";
}
function changeColor() {
    document.getElementById("new-search").style.width = "100%";
}

// automatically get the new year's update for each year.
var d = new Date();
var year = d.getFullYear();
document.getElementById("date").innerHTML = year;

$(document).ready(function () {
    $('.slideshow-img')
        .not(".slick-intialized")
        .slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            prevArrow: ".container-holding .slider-btn .prev",
            nextArrow: ".container-holding .slider-btn .next",
        });

        $(".xyz").hover(function() {
            $(".media").slideToggle("slow");
            $(".dropdown-content").animate({top: '50px'}, 400);
            $(".dropdown").toggleClass("active");
            
        });
        $(".kzy").hover(function() {
            $(".contact").slideToggle("slow");
            $(".dropdown-content").animate({top: '50px'}, 400);
            $(".dropdown").toggleClass("active");
        });
});



// read more or read less BTN //
function showMore() {
    var moreBTN = document.getElementById("more-btn");
    var moreText = document.getElementById("moreText");
    var dots = document.getElementById("dots");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreBTN.innerHTML = "Read More";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        moreBTN.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

//animation control for webpage //
AOS.init({
    duration: 1500,
});

//music search list

function mySearch() {
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("boxmySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    //filter and remove list not having search content on music list

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

//controls dropdown-menu on side navigation bar//

var dropbtn = document.getElementsByClassName("sideNav-dropdown-btn");
var i;
for (i = 0; i < dropbtn.length; i++) {
    dropbtn[i].addEventListener("click", function () {
        this.classList.toggle('active');
        var dropContent = this.nextElementSibling;
        if (dropContent.style.display === "block") {
            dropContent.style.display = "none";
        } else {
            dropContent.style.display = "block";
        }
    });
}
//Open sidenav when the hamburger-menu bar is clicked 

function openNav() {
    document.getElementById("mysideNavbar").style.width = "250px";
    document.getElementById("mysideNavbar").style.opacity = "1";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mysideNavbar").style.width = "0";
    document.getElementById("mysideNavbar").style.opacity = "0.5";
    document.body.style.backgroundColor = "white";
}


//formspree 



  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");
    var subscribe = document.getElementById("my-form-subscribe");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
      subscribe.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      subscribe.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }



