'use strict';

function main() {
    var buttonHideProfile = document.querySelector('.profile-button');
    var buttonHideHeader = document.querySelector('.header-button');
    var sectionProfile = document.querySelector('.profile');
    var header = document.querySelector('header');

        function hideHeader(e) {
            header.classList.toggle('hidden');
            if(header.classList.contains('hidden')){
                e.currentTarget.innerText = 'Show Header';
            }
            else {
            e.currentTarget.innerText = 'Hide Header'
            }
        }
    

        function hideProfileSection(e){
            sectionProfile.classList.toggle('hidden');
            if(sectionProfile.classList.contains('hidden')){
                e.currentTarget.innerText = 'Show Profile';
            }
            else {
            e.currentTarget.innerText = 'Hide Profile'
            }
            
        }
        buttonHideHeader.addEventListener('click', hideHeader);
        buttonHideProfile.addEventListener('click', hideProfileSection);    
}

window.addEventListener("load", main);
