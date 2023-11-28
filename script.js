var exploreVisible = false;

$( function() {
    $( "#sortable" ).sortable({
        handle: 'i',
        items: '> div:not(#nonSortable)',
        axis: 'y',
        containment: 'parent',
        helper: function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui.clone().addClass('drag-panels-helper');
        },
        update: function(event, ui) {
            var sortedIDs = $( "#sortable" ).sortable( "toArray" );
            sortedIDs.forEach(function(id, index) {
                var element = $('#side2').find('#' + id);
                $('#side2').append(element);
            });
        }
    });
    $( "#sortable" ).disableSelection();
    $( "#sortable input[type='checkbox']" ).change(function() {
        var id = $(this).closest('div').attr('id');
        var isChecked = $(this).is(':checked');
        if (isChecked) {
            $('#side2').find('#' + id).show();
        } else {
            $('#side2').find('#' + id).hide();
        }
    });
} );

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('index.html')) {
        document.getElementById('comment').addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendComment(event);
            }
        });
    }
});

function sendComment(event) {
    var username = "Username";
    var commentInput = event.target.previousElementSibling;
    var commentText = commentInput.value;
    var imgSrc = "fa-solid fa-circle-user";

    var commentDiv = document.createElement("div");
    commentDiv.innerHTML = `
        <div>
            <div class = "comment"> 
                <i onclick="userClick()" id="seperate-profile-picture" class=" button-class ${imgSrc}" style="width: 2.6vw; height: 2.6vw; border-radius: 5vw; display: block;"></i>
                <div class = "comment-block" style = "margin-left: 3.1vw;">
                    <p style="margin: 0; margin-top: 0.3vw; margin-left: 0.6vw; color: #FFFFFF; font-weight: 500;" >${username}</p>
                    <p style="margin: 0; margin-top: 0.3vw; margin-left: 0.6vw; color: #FFFFFF; margin-top: 0.4vw;">${commentText}</p>
                </div>
            </div>
            <div class = "comment-information">
                <p style="margin: 0; font-weight: 300;">2d</p>
                <p style="margin: 0; margin-right: 0.8vw; margin-left: 0.8vw; font-weight: 500;">Like</p>
                <p style="margin: 0; font-weight: 500;">Reply</p>
            </div>
        </div>
    `;

    var locaterDiv = commentInput.closest("#locater");
    var inputPositionBefore = commentInput.getBoundingClientRect().top;
    locaterDiv.parentNode.insertBefore(commentDiv, locaterDiv);
    var inputPositionAfter = commentInput.getBoundingClientRect().top;
    if (inputPositionAfter !== inputPositionBefore) {
        window.scrollBy(0, inputPositionAfter - inputPositionBefore);
    }
    commentInput.value = "";
}

let isAdding = false;
let triggerDistance = 10;

window.addEventListener('scroll', function() {
    if (isAdding) return;
    let mainContent = document.querySelector('#mainContent');
    let reference = document.querySelector('#reference');
    let scrollBottom = mainContent.scrollTop + mainContent.clientHeight;
    let mainContentBottom = mainContent.scrollHeight;
    if (mainContentBottom - scrollBottom < triggerDistance) {
        isAdding = true;
        let clone = reference.cloneNode(true);
        mainContent.appendChild(clone);
        setTimeout(() => { isAdding = false; }, 1000);
    }
});

function zoom() {
    var img = document.getElementById("dynamic");
    var overlay = document.getElementById("overlay3");
    var zoomedImg = document.getElementById("zoomedImg");
    zoomedImg.src = img.src;
    overlay.style.display = "block";

    zoomedImg.parentElement.parentElement.classList.remove('leftside')
    document.getElementById("leftarrow").style.display = "none";
    document.getElementById("rightarrow").style.display = "none";
}

function zoom2() {
    var img = document.getElementById("dynamic2");
    var overlay = document.getElementById("overlay3");
    var zoomedImg = document.getElementById("zoomedImg");
    zoomedImg.src = img.src;
    overlay.style.display = "block";

    zoomedImg.parentElement.parentElement.classList.remove('leftside')
    document.getElementById("leftarrow").style.display = "none";
    document.getElementById("rightarrow").style.display = "none";
    
}

function unzoom(event) {
    if (event.target.id === 'overlay3') {
        document.getElementById("overlay3").style.display = "none";
        zoomedImg.parentElement.parentElement.classList.add('leftside')
        document.getElementById("leftarrow").style.display = "flex"
        document.getElementById("rightarrow").style.display = "flex"
    }
}


function videoClick(){
    window.location.href = "video.html";
}

function homeClick(){
    window.location.href = "index.html";
}

function xPanelClick(){
    document.getElementById('overlay').style.visibility = 'hidden';
}

function editPanelsClick(){
    document.getElementById('overlay').style.visibility = 'visible';
}

function filterContent(){
    document.getElementById('overlayContent').style.visibility = 'visible';
}

function filterContent2(){
    document.getElementById('overlayContent2').style.visibility = 'visible';
}

function xPanelClickContent(){
    document.getElementById('overlayContent').style.visibility = 'hidden';
}

function xPanelClickContent2(){
    document.getElementById('overlayContent2').style.visibility = 'hidden';
}

function messengerClick(){
    document.getElementById('overlayMessenger').style.visibility = 'visible';
}

function notificationClick(){
    document.getElementById('overlayNotif').style.visibility = 'visible';
}

function xPanelClickMessenger(){
    document.getElementById('overlayMessenger').style.visibility = 'hidden';
}

function xPanelClickNotif(){
    document.getElementById('overlayNotif').style.visibility = 'hidden';
}

function fullscreenPost(){
    window.location.href = "fullscreen.html";
}

function fullscreenPost2(){
    window.location.href = "fullscreen2.html";
}

//add functionality for making background gray when clicked

function friendsArrowClick(){
    var container = document.getElementById('friendsContent');
    var exploreArrow = document.getElementById('friendsArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('friendstitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('friendstitle').style.color = "#ffffff"
    }
}

function groupArrowClick(){
    var container = document.getElementById('group-container');
    var exploreArrow = document.getElementById('groupArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('groupTitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('groupTitle').style.color = "#ffffff"
    }
}


function pageArrowClick(){
    var container = document.getElementById('page-container');
    var exploreArrow = document.getElementById('pageArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('pagestitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('pagestitle').style.color = "#fff"
    }
}

function birthdayArrowClick(){
    var container = document.getElementById('bday-container');
    var exploreArrow = document.getElementById('birthdayArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('bdaytitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('bdaytitle').style.color = "#fff"
    }
}

function eventsArrowClick(){
    var container = document.getElementById('event-container');
    var exploreArrow = document.getElementById('eventsArrow')

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.style.flexDirection = "column"
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';
        document.getElementById('eventtitle').style.color = "#0866FF"
    } else {
        container.style.display = 'none';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';
        document.getElementById('eventtitle').style.color = "#fff"
    }
}

function shortcutsClick() {
    var newHtml = '<p style="margin:0; font-size: larger; font-weight:300; color: #b2b2b2;">You have no shortcuts.</p>';
    var container = document.getElementById('shortcutClickDiv');
    var shortcutArrow = document.getElementById('shortcutArrow');

    if (container.innerHTML === newHtml) 
    {
        container.innerHTML = '';
        shortcutArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        shortcutArrow.style.transform = 'rotate(180deg)';
        shortcutArrow.style.color = '#FFFFFF';
    } 

    else 
    {
        container.innerHTML = newHtml;
        shortcutArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        shortcutArrow.style.transform = 'rotate(90deg)';
        shortcutArrow.style.color = '#0866FF';
    }
}

function exploreClick() {
    var container = document.getElementById('exploreClickDiv');
    var exploreArrow = document.getElementById('exploreArrow');

    if (container.style.visibility === 'hidden') {
        container.style.visibility = 'visible';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(90deg)';
        exploreArrow.style.color = '#0866FF';

        exploreVisible = true;
    } else {
        container.style.visibility = 'hidden';
        exploreArrow.style.transition = 'transform 0.3s ease, color 0.3s ease';
        exploreArrow.style.transform = 'rotate(180deg)';
        exploreArrow.style.color = '#FFFFFF';

        exploreVisible = false;
    }
}

function discoveryHubClick()
{
    var container1 = document.getElementById('side1');
    var container2 = document.getElementById('side2');

    container1.style.visibility = 'hidden';
    document.getElementById('exploreClickDiv').style.visibility = 'hidden'

    container2.style.visibility = 'visible';
}

function linksClick()
{
    var container1 = document.getElementById('side1');
    var container2 = document.getElementById('side2');

    container1.style.visibility = 'visible';
    if (exploreVisible)
    {
        document.getElementById('exploreClickDiv').style.visibility = 'visible'
    }
    

    container2.style.visibility = 'hidden';
}

// Function to show the floating panel
function showFloatingPanel() {
    const floatingPanel = document.getElementById('floatingPanel');
    floatingPanel.classList.add('show');
    
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'none';
    mainPage.style.display = 'block';
}

// Function to hide the floating panel
function hideFloatingPanel() {
    const floatingPanel = document.getElementById('floatingPanel');
    document.getElementById('user-text').value = ""

    floatingPanel.classList.remove('show');
}

// Function to handle audience selection
document.querySelectorAll('.audience-page a').forEach(audienceOption => {
    audienceOption.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedAudience = this.getAttribute('data-audience');
        document.querySelector('.dropdown-btn').textContent = `${selectedAudience}`;
        
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-play', 'fa-rotate-90');
        icon.style.color = '#ffffff';
		icon.style.marginLeft = '0.3vw';
		
        document.querySelector('.dropdown-btn').appendChild(icon);
        document.querySelector('.audience-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'block';
    });
});

// Function to handle audience button click
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'block';
    mainPage.style.display = 'none';
});

// Functionality for back button
document.querySelector('.back-btn').addEventListener('click', function() {
    var audiencePage = document.querySelector('.audience-page');
    var mainPage = document.querySelector('.main-page');

    audiencePage.style.display = 'none';
    mainPage.style.display = 'block';
});
