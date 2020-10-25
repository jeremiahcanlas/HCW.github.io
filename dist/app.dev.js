"use strict";

var current = $('.home');
$("[data-toggle=popover]").popover(); // navbar collapses when user clicks on nav options

$('.navbar-collapse a').on('click', function () {
  $(".navbar-collapse").collapse('hide');
});
$('.main-logo').on('click', function (e) {
  if (current !== $('.home')) {
    current.hide();
    $('.home').fadeIn();
  }

  current = $('.home');
});
$('#home-btn').on('click', function (e) {
  if (current !== $('.home')) {
    current.hide();
    $('.home').fadeIn();
  }

  current = $('.home');
});
$('#abt-us-btn').on('click', function () {
  if (current !== $('.abt-us-page')) {
    current.hide();
    $('.abt-us-page').fadeIn();
    $('.abt-dynamic').hide();
  }

  current = $('.abt-us-page');
});
$('#srv-btn').on('click', function () {
  if (current !== $('.srv-page')) {
    current.hide();
    $('.srv-page').fadeIn();
    $('.srv-nav').fadeIn();
    $('.srv-dyn-out').hide();
    $('.go-back').hide();
  }

  current = $('.srv-page');
});
$('#pkg-btn').on('click', function () {
  if (current !== $('.pkg-page')) {
    current.hide();
    $('.pkg-page').fadeIn();
    $('.pkg-nav').fadeIn();
    $('.pkg-dyn-out').hide();
    $('.go-back').hide();
  }

  current = $('.pkg-page');
});
$('.go-back').on('click', function (event) {
  var target = $(event.target);

  if (target.hasClass('pkg-b')) {
    $('.pkg-page').fadeIn();
    $('.pkg-nav').fadeIn();
    $('.pkg-dyn-out').hide();
    $('html, body').animate({
      scrollTop: $('.main-back').first().offset().top
    }, 700);
  } else if (target.hasClass('srv-b')) {
    $('.srv-page').fadeIn();
    $('.srv-nav').fadeIn();
    $('.srv-dyn-out').hide();
    $('html, body').animate({
      scrollTop: $('.main-back2').first().offset().top
    }, 700);
  }

  $('.go-back').hide();
});
$('#stf-btn').on('click', function () {
  if (current !== $('.stf-page')) {
    current.hide();
    $('.stf-page').fadeIn();
  }

  current = $('.stf-page');
});
$('#ct-btn').on('click', function () {
  if (current !== $('.contact-page')) {
    current.hide();
    $('.map-dyn').hide();
    $('.contact-page').fadeIn();
  }

  current = $('.contact-page');
});
$('#faq-btn').on('click', function () {
  if (current !== $('.faq-page')) {
    current.hide();
    $('.answer').removeClass('p-show');
    $('.faq-page').fadeIn();
  }

  current = $('.faq-page');
});
$('.abt-us-page').on('click', '.vision-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container vsn-dyn'>\n            <h1>Our Vision</h1>\n            <p>To provide an outstanding personalized professional health care to individuals of all ages within your own home or health care facility.</p>\n            <h1>Our Mission</h1>\n            <p>To support you and your family\u2019s health care when you need us.</p>\n            <h1>Our Goal</h1>\n            <p>To treat you the way we like to be treated with compassion, respect, dignity and confidentiality.</p>\n        </div>\n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.abt-us-page').on('click', '.cmt-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container cmt-dyn'>\n            <h1>Our Commitments</h1>\n            <ul>\n                <li>Homecare on Wheels incorporated are committed to be:\n                <br>\n                Professional \u2665 Knowledgeable \u2665 Respectful \u2665 Dedicated \u2665 Integrity.</li>\n                <li>Homecare on Wheels believe in treating all clients with the respect and dignity they deserve.</li>\n                <li>Clients and their family members will be an important partner in setting up the home health care plans.</li>\n                <li>Homecare on Wheels professional nurses will assess and advise what healthcare services available we respect your health care decision as a priority and work in collaboration with our clients to make it happen.</li>\n                <li>Homecare on Wheels staff will be straightforward and honest with their advice and will respect a client\u2019s choices.</li>\n                <li>Performance and deliverance of care will not be compromised by an individual\u2019s race, ethnicity, gender, age, sexual orientation, religious beliefs, physical or intellectual abilities, income status or family relationships.</li>\n                <li>Homecare on Wheels is committed to the confidentiality of all client\u2019s health information and personal health information security.</li>\n                <li>Homecare on Wheels rigorously screen all staff and are committed to improving the skills and expertise of each staff member.</li>\n                <li>Homecare on Wheels is committed to improving its services and welcome feedback from clients, staff, agencies and the community at large at any time.</li>\n            </ul>\n        </div>        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.abt-us-page').on('click', '.mgmt-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container mgmt-dyn'>\n            <h1>Our Management</h1>\n            <p>Homecare on Wheels Inc. was founded by group of four persons, among whom are Georgina Njoku and Bonnie Garba, \n            two Registered Nurses who have worked in a multitude of settings, from hospitals, long term care facilities,\n             community health care organizations, physician offices and Community Care Access Centre (CCAC).\xA0 \n             They are very familiar with not only the health care challenges and emotional strain that families \n             and Caregivers face when a loved one encounters health issues requiring hospitalization or homecare but \n             also the uncertainty and stresses of setting up home care upon returning home.\xA0 \n             Their first-hand knowledge in helping families navigate the health care system and personalize your \n             care need is critical to your healing and recovering. The two other partners are business professionals with a \n             proven record.</p>\n             <br>\n             <img class='img-fluid mb-2' src='/img/georgina.jpg'>\n             <h4>Nurse Consultant</h4>\n             <p class='mb-0'><em>Georgina Njoku, BScN, MScN, DNP, RN, GNC&copy</em></p>\n             <p><em>Geriatrics Clinical Nurse Specialist</em></p>\n             <p>Georgina has had extensive health care industry: over 10 years of Long-term Care experience, \n             5 years in Acute care hospitals, 8 years in Community care as a Care Coordinator for Community care Access Center \n             and over 5 years of Nursing leadership experience including 3 years as an outstanding Director of Care role \n             for Sienna Senior living home with 238 beds in Toronto, Ontario.  During her time with Sienna Senior living, \n             Georgina cleared this home\u2019s MOH orders, restructured nursing department and built capacity on the nursing \n             leadership team and frontline staff as a result, Georgina and her team won the OLTCA Quality Innovative award in \n             2018 and OLTC Leadership Clinical Practice award for 2019.</p>\n        </div>\n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.hmss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n            <div class='hmss-dyn anchor-dyn'>\n                <div class='text-center'>\n                    <img src='/img/hscc-fs.jpg'>\n                    <h1>Home Making Support Services</h1>\n                    <p>We will assist you with your household chores. Our Home Making Support Services assist with daily household tasks.  \n                    Your home life can be improved significantly by a nurse, a helper or a companion. \n                    We offer a wide range of services to accommodate both short- and long-term needs that best suits your need.</p>\n                    \n                    <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help as you age, \n                    our assessment Nurse Coordinator will assess your situation and help you to determine the best combination of services \n                    for you based on your individual circumstances and budget.</p>\n\n                </div>\n                <div class='mb-2'>\n\n                    <p>Our most\xA0<span><strong>popular Home Making Support Services</strong></span>\xA0includes:</p>\n\n                    <ul>\n                        <li>Taking care of laundry</li>\n                        <li>Light housekeeping</li>\n                        <li>Watering plants</li>\n                        <li>Taking out the garbage and recycling</li>\n                        <li>Changing bed linens and making beds</li>\n                        <li>Assist with housekeeping tasks</li>\n                        <li>Help with preparing grocery lists</li>\n                        <li>Preparing light meals</li>\n                        <li>Feed & Assist with the care of household pets</li>\n                    </ul>\n\n                </div>\n            </div>\n            \n            \n            ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.ncss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='ncss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/ncss-fs.jpg'>\n                <h1>Nursing Care Support Services</h1>\n                <h4>Delivering Professional Nursing Care is our Promise to you!</h4>\n                <p>During your initial consultation, our Assessment Care Coordinator will help you determine the best \n                combination of services for you, based on your individual circumstances. We strive to match personalities and continuity \n                of care with every client and will work tirelessly to ensure that all of our clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span><strong>popular Nursing Care Services</strong></span>\xA0includes:</p>\n\n                <ul>\n                    <li>Admission Assessment</li>\n                    <li>Monitoring vital signs as required</li>\n                    <li>Wound Care/Dressings Management</li>\n                    <li>Medication Management and Reconciliation</li>\n                    <li>Designing Individualized Care Plans</li>\n                    <li>Coordination with other Health Professionals (e.g. dentists, vision care, dietician, pharmacists, etc.)</li>\n                    <li>Referrals made as appropriate</li>\n                    <li>Health Maintenance (education regarding health/illness needs)</li>\n                    <li>Catheterization & Catheter Care</li>\n                    <li>Ostomy care</li>\n                    <li>Injection Administration</li>\n                    <li>Diabetic care and education</li>\n                    <li>Pain Assessment & Management</li>\n                    <li>Regular documentation</li>\n                    <li>Convalescent care</li>\n                    <li>Palliative care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.pcss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='pcss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/pcss-fs.jpg'>\n                <h1>Personal Care Support Services</h1>\n                <p>Homecare on Wheels'\xA0main focus is to help our clients manage their care in a professional and caring way. \n                Performing daily activities of living can be stressful when you are feeling unwell. \n                Whether you are residing in a home, long term facility retirement home, hospital, or some other type of accommodation. \n                Our staff is here to assist you with all the personal care requirements unique to your situation.</p>\n                <p>During your initial consultation, our Nurse Assessment Care Coordinators will help you determine \n                the best combination of services for you based upon your individual circumstances and budget. We strive to\n                 match personalities and continuity of care with every client and will work tirelessly to ensure that all of our \n                 clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span><strong>popular Personal Care Services</strong></span>\xA0are listed below. \n                Your Health Care Coordinator can provide you with a complete \n                list of our Personal Care Services during your initial consultation.</p>\n\n                <ul>\n                    <li>Assist with bathing</li>\n                    <li>Assist with personal hygiene (grooming, dressing, etc.)</li>\n                    <li>Toileting</li>\n                    <li>Catheter care</li>\n                    <li>Skin care</li>\n                    <li>Medication reminders</li>\n                    <li>Mobility assistance</li>\n                    <li>Assist with prescribed physiotherapy exercises</li>\n                    <li>Escort to Doctor\u2019s or Professional appointment</li>\n                    <li>Companionship, reading</li>\n                    <li>Assist with evening care</li>\n                </ul>\n\n                <p>We are available to you 24 hours a day, 7 days a week, to answer any questions, \n                or solve any issues that you may have regarding your care.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.gnss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='gnss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/gnss-fs.jpg'>\n                <h1>Geriatric Clinical Nurse Specialists Services</h1>\n                <p>Let\u2019s face it, aging process requires specialized care from age related illness to medication management. \n                It is a fact that the elderly population are more susceptible to certain illnesses and diseases. </p>\n                <p>Homecare on Wheels\xA0Inc has unique advantage of engaging the services of a geriatric nursing consultant, \n                Dr. Georgina Njoku who is a delegated professional trained Nurse whose life time passion is caring for \n                the elderly population. Specializing in Geriatric clinical nurse practice, she takes pleasure and passion \n                in caring for seniors and she trains her team to do the same.</p>\n                <p>Our specialist will help you to navigate the health care system will give you the full advantage of \n                their experience and advice in approaching your specific circumstances. \n                This consultation can streamline your health care and ensure that there is no duplication of services or medications.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <h1>This consultation is at least 2\xBD hours long and may include any of the following:</h1>\n\n                <ul>\n                    <li>Advanced Comprehensive Health Care Assessment</li>\n                    <li>Advance Pain Assessment & Management</li>\n                    <li>Fall Risk Assessment</li>\n                    <li>Diabetic Assessment</li>\n                    <li>Wound Care Assessment</li>\n                    <li>Cognitive Capacity Assessment</li>\n                    <li>Senior Behavioural Assessment</li>\n                    <li>Senior Functional Assessment</li>\n                    <li>Caregiver Stress Assessment</li>\n                    <li>Geriatric Health Consultation</li>\n                    <li>Palliative Care Consultation</li>\n                    <li>Chronic Disease Management</li>\n                </ul>\n\n                <p>Remain available 24 hours a day, 7 days a week to answer any questions or solve any issues \n                that you may have regarding your care.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.crc-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='crc-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/crc-fs.jpg'>\n                <h1>Caregiver & Respite Care Support Services</h1>\n                <p>Caregiver burnout is a reality. Caregivers often neglect their own health in caring for their love ones. \n                Over time a caregiver will continue to shoulder increasing care burden to a point that it becomes overwhelming \n                and affects your own health. Our Caregiver & Respite Care Services allow you to recharge your batteries, \n                resting comfortably in the knowledge that your loved one is being cared for by compassionate professionals. \n                Taking time for yourself does more than just renew energy and relieve stress, it also gives your loved one a chance \n                to interact with someone new, which is often a welcome distraction.</p>\n\n                <p>During your initial consultation, our Nurse Assessment Coordinator will help you \n                determine the best combination of services for both you and the one you're caring for. \n                At Homecare on wheels Inc, we are committed to maintaining open lines of communication to allow our clients to take \n                full advantage of the services we provide and customize their care as, and when, they see fit. \n                We strive to match personalities and continuity of care with every client and will work tirelessly \n                to ensure that all of our clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span>popular Caregiver & Respite Care Services</span>\xA0are listed below.</p>\n                <ul>\n                    <li>Temporary relief for the caregiver</li>\n                    <li>Companionship</li>\n                    <li>Mobility Assistance</li>\n                    <li>Support for Light Recreational Activities (participate in crafts, playing cards, etc.)</li>\n                    <li>Emotional Support</li>\n                    <li>Assist with Medication Reminders</li>\n                    <li>Escort Client to Professional or Group Appointment</li>\n                    <li>Any other services required, such as Personal Support or Nursing, \n                    will be addressed with your Homecare on Wheels Case Manager during the initial Home Care Assessment visit.</li>\n                    <li>Regularly review and supervise the Homecare Support Services you're receiving, and adjust these services as required.</li>\n                    <li>With your consent, consult with other health care professionals as necessary.</li>\n                </ul>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n                <p>With your consent, consult with other health care professionals as necessary.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.pvss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='pvss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/pvss-fs.jpg'>\n                <h1>In-Home Virtual Physician/Nurse Practitioner Visits & Assessments</h1>\n                <h4>Are you finding it difficult to get to a Doctor\u2019s Appointment?</h4>\n                <p>When dealing with an illness, it can be difficult to travel to visit a physician, whether that be due to problems in \n                arranging transportation, finding the energy to travel or taking time off work for the occasion. \n                That's why\xA0Homecare on Wheels\xA0offers physician/ Nurse Practitioner house/Virtual calls. \n                The doctor's office is no further than your living room, so you don\u2019t have to leave the comfort of your home, \n                especially if you have mobility or health care concerns that make it inconvenient to travel to see a physician.</p>\n\n                <p>The health care services delivered by our Physicians or Nurse Practitioner are covered under OHIP. \n                The Administration and Transportation fee will be billed to the client.</p>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n\n            </div>\n\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.srv-nav').on('click', '.mcss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='mcss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/mcss-fs.jpg'>\n                <h1>Management Care Services</h1>\n                <h4>Let us take the stress off of your shoulders</h4>\n                <p>We want to put your mind at ease about the\xA0Homecare Services\xA0that you are receiving by providing you with professional and open care. \n                We are always open and respectful of your opinions and your concerns and will do our best to accommodate any needs that you have, \n                be they medical, privacy or financial concerns.</p>\n\n                <p>With the help of our knowledgeable staff, your health care services will be coordinated by trained, \n                competent individuals who will communicate any relevant information to the proper health care professionals, \n                to avoid costly, and sometimes harmful, duplication of services.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>We encourage you to try our services which includes:</p>\n                <ul>\n                    <li>We will coordinate your care</li>\n                    <li>Arrange any assistive devices, home safety equipment or monitoring services</li>\n                    <li>Set-up your appointments and arrange transportation to these appointments</li>\n                    <li>Accompany you to your appointments if required</li>\n                    <li>Arrange interpreter if required</li>\n                    <li>Contact and arrange delivery of your medical supplies, prescriptions, etc.</li>\n                    <li>Help you navigate the health care system for your individual health needs</li>\n                    <li>Contact other health care professionals as required with your prior consent</li>\n                    <li>Arrange consultations as required</li>\n                    <li>Keep your family up-to-date with your medical journey, with your consent</li>\n                </ul>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n                <p>With your consent, consult with other health care professionals as necessary.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top - 190
  }, 700);
});
$('.pkg-nav').on('click', '.hsp-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='hsp-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/hsp-fs.jpg'>\n                <h1>Home Care Support Package</h1>\n                <h4>Sometimes all you NEED is a hand with household chores</h4>\n                <p>Our Home Care Support Staff\xA0assist with the daily household tasks that you may not be able to perform anymore due to, \n                ill health, injury, aging process or busy life.\xA0Homecare on Wheels\xA0recognizes that there are a variety of ways that one's \n                home life can be improved significantly by a nurse, a helper or even a companion. </p>\n\n                <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help Homecare on \n                Wheels home care package is set up for you. Our Home Support\n                Team is committed to maintaining open lines of communication between your requirements and our services.\xA0 \n                Our clients can relax knowing their household chores will be taken care of, allowing them to concentrate on other things.</p>\n\n                <h1>Your satisfaction is our goal</h1>\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most popular services in the Home Care Support Package includes:</p>\n                <ul>\n                    <li>Taking care of laundry</li>\n                    <li>Light housekeeping</li>\n                    <li>Watering plants</li>\n                    <li>Taking out the garbage and recycling</li>\n                    <li>Changing bed linens and making beds</li>\n                    <li>Assist with housekeeping tasks</li>\n                    <li>Help with preparing grocery lists</li>\n                    <li>Preparing light meals</li>\n                    <li>Feed & Assist with the care of household pets</li>\n                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>\n                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.pcs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='pcs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/pcp-fs.jpg'>\n                <h1>Personal Care Support Package</h1>\n                <p>Homecare on Wheels' main focus is to help our clients manage their care in a professional and caring way. Performing daily activities can be stressful, whether you are residing in a home, long term facility retirement home, hospital, or some other type of accommodation. Our staff is here to assist you with all the personal care requirements unique to your situation. </p>\n                <p>Our Personal Care services are delivered by trained, dedicated caregivers who believe in providing you with care in a respectful and dignified way while maintaining your privacy and independence.</p>\n                <p>Our Home Support Team is committed to maintaining open lines of communication between your requirements and our services.  Our clients can relax knowing help with their daily personal hygiene will be taken care of, allowing them to concentrate on other things.</p>\n            </div>\n            <div class='mb-2'>\n\n                <p>Some of our most popular services in the Personal Care Support Package includes:</p>\n                <ul>\n                    <li>Assist with bathing</li>\n                    <li>Assist with personal hygiene (grooming, dressing, etc.)</li>\n                    <li>Toileting / Catheter Care</li>\n                    <li>Skin care</li>\n                    <li>Medication reminders</li>\n                    <li>Mobility assistance</li>\n                    <li>Assist with prescribed physiotherapy exercises</li>\n                    <li>Escort to Doctor\u2019s or Professional appointment</li>\n                    <li>Companionship, reading</li>\n                    <li>Assist with evening care</li>\n                    <li>Ask your Health Care Coordinator for a complete list of Services</li>\n                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>\n                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.scs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='scs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/scs-fs.jpg'>\n                <h1>Senior Care Support Package</h1>\n                <h4>Are you concerned with your loved one needing assistance with their day to day activities?</h4>\n                <p>The Senior Care Support Package is designed to give you the peace of mind in knowing that your loved one(s) \n                are well taken care of and being assisted by professionals. That\u2019s why Homecare on Wheels offers this basic Home Care and Personal Care support package,\n                 so you can be sure that your loved one is getting the care, attention and assistance they deserve. </p>\n                <p>Don\u2019t get overwhelmed and exhausted, let us give you the rest you deserve, \n                give you time to recharge your energy level, sign up today and give us a chance to prove to you just how much we care!</p>\n\n           \n             </div>\n            <div class='mb-2'>\n\n                <p>The Senior Care Support Package includes:</p>\n                <ul>\n                    <li>Initial Assessment with our Nurse Health Care Assessment Coordinator</li>\n                    <li>Regular Follow-ups with our Nurse Health Care Assessment Coordinator regarding the care & services being received</li>\n                    <li>Regular Communication with the Family Spokesperson or your Power of Attorney</li>\n                    <li>Home Care Services</li>\n                    <li>Personal Care Services</li>\n                    <li>24 Hour Telephone Support</li>\n                    <li>Health Care System Navigation Support</li>\n                    <li>With your consent, consult with other health care professionals as necessary</li>\n                    <li>Consult with other health care professionals as necessary</li>\n                </ul>\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.crs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='crs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/crs-fs.jpg'>\n                <h1>Caregiver & Respite-Care Support Package</h1>\n                <h4>Caring for a loved one can be overwhelming, we understand!</h4>\n                <p>We give you the permission to allow us to shoulder some of the caregiver burden. \n                Our staff are trained and caring individuals who are dedicated to providing efficient and effective care so you don't\n                 need to feel like your loved one is getting less than they deserve. Our Caregiver & Respite Care Services allow you to recharge your batteries, \n                 resting comfortably in the knowledge that your loved one is being cared for by compassionate professionals. Knowing the person caring for your \n                 loved one provides comfortable, respectful, safe and professional care.  We strive to match personalities and continuity of care with every client \n                 and will work tirelessly to ensure that all of our clients are satisfied with our performance.</p>\n\n           \n             </div>\n            <div class='mb-2'>\n\n                <p>Caregiver & Respite Care Package includes:</p>\n                <ul>\n                    <li>Temporary relief for the caregiver</li>\n                    <li>Companionship</li>\n                    <li>Mobility Assistance</li>\n                    <li>Support for Light Recreational Activities (participate in crafts, playing cards, etc.)</li>\n                    <li>Emotional Support</li>\n                    <li>*Access to our Support Group</li>\n                    <li>Assist with Medication Reminders</li>\n                    <li>*Escort Client to Professional or Group Appointment</li>\n                    <li>Any other services required, such as Personal Support or Nursing can be addressed with our Health Care Coordinator during the initial Home Care Assessment visit.</li>\n                    <li>With you and your loved one's consent, consult with other health care professionals as necessary</li>\n                </ul>\n                <p>Remain available to you and your loved one 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your loved one's care</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.rhs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='rhs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/rhs-fs.jpg'>\n                <h1>Returning Home Support Service</h1>\n                <h4>Return Home Stress-Free!</h4>\n                <p>Returning home following a short or extended hospital or rehabilitation stay can be scary, and stressful. \n                Coordinating transportation, setting up and attending appointments, picking up medication and making sense of instructions, \n                tips and directions can be enough to confuse a person, and all of these can be a detriment to your recovery time and your family\u2019s reunion.</p>\n                <p>At Homecare on Wheels, we offer a package that can help ease all of these burdens and let you concentrate on your recovery and your wellbeing.</p>\n                <h3>Getting your health back!</h3>\n                <p>All of our Health Care Assessment Coordinator are Nurses who are well prepared to meet with you, \n                your family spokesperson and the appropriate health care personnel before you are discharged to get things in order for your return and become \n                acquainted with the specifics of your situation. Our Health Care team will also ensure that everything is prepared for your return home and the \n                transition from health care facility to home goes smoothly.</p>\n\n           \n             </div>\n            <div class='mb-2'>\n\n                <p>Return Home Package includes:</p>\n            <ul>\n                    <li>Initial Assessment by Health Care Assessment Coordinator</li>\n                    <li>Discharge & Health Care Needs Assessment of the client</li>\n                    <li>Home Visit (Prior to discharge, to ensure preparation)</li>\n                    <li>Coordination of Medical Supply/Equipment Orders & Delivery</li>\n                    <li>Arrange Transportation Home</li>\n                    <li>24 Hour Telephone Support</li>\n                    <li>Home Care and / or Personal Support Services*</li>\n                    <li>Health Care System Navigation Support</li>\n                    <li>With you and your loved one's consent, consult with other health care professionals as necessary</li>\n              </ul>\n                <p>Remain available to you and your loved one 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your loved one's care</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.nhs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='nhs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/nhs-fs.jpg'>\n                <h1>Navigating the Health Care Support Package</h1>\n                <h4>Navigating Canada\u2019s Health Care system on your own can cause frustration and confusion</h4>\n                <p>Trying to navigate Canada\u2019s Health Care system on your own may cause frustration and confusion. \n                Don\u2019t get bogged down in all the messy details and technical mumbo-jumbo, just give us a call and let us guide you.\n                Years of experience in the field has made our Health Care Assessment Coordinators experts in the health care system, \n                what works, and just as importantly, what doesn\u2019t work.</p>\n                <p>At times, it is beneficial to have the processes, procedures and technical explanations given in layman\u2019s terms and repeated \n                in a quiet relaxed environment where you can process the information. Our compassionate, knowledgeable Health Care Coordinators let \n                them guide you through the processes, meanings and importance of the things happening in your health care.</p>\n\n           \n             </div>\n            <div class='mb-2'>\n\n                <p>Navigating Health Care Support Package includes:</p>\n            <ul>\n                    <li>Initial Assessment with our Nurse Health Care Assessment Coordinator</li>\n                    <li>Development of a Customized Health Care Plan</li>\n                    <li>Guidance and Advice (what to expect, how to move forward)</li>\n                    <li>Regular Communication with the Family Spokesperson and /or Client</li>\n                    <li>Coordination of Health Care Appointments</li>\n                    <li>Coordination of Transportation (as needed)</li>\n                    <li>Accompany the Client to Appointments (if requested)</li>\n                    <li>Consultation with other Health Care Professionals (with Client\u2019s/Family Spokesperson\u2019s consent)</li>\n                    <li>24 Hour Telephone Support</li>\n                    <li>Health Care System Navigation Support</li>\n                    <li>All packages are customized to individual health care needs, and can be tailored to short- or long-term periods, depending on the requirements.</li>\n\n              </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.gcs-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='gcs-dyn anchor-dyn2'>\n            <div class='text-center'>\n                <img src='/img/gcs-fs.jpg'>\n                <h1>Geriatric Clinical Specialist Package</h1>\n                <h4>Our elderly population require specialized care</h4>\n                <p>The aging process often leaves the elderly population more susceptible to certain illnesses and chronic diseases. \n                The increased number of medications can lead to Polypharmacy taking several medications at times for the same treatment. \n                While some medications can interact adversely or react differently in the elderly population. \n                Too many seniors are under the care of several health care professionals at different and separate levels who don't always communicate with each other, \n                each treating and prescribing for the illness. Homecare on Wheels has the unique advantage of engaging the services of a geriatric nursing consultant. \n                Our consultant can review ALL of your health care considerations, including health care management, services \n                and medications prescribed by various health care professionals. Our specialist can navigate the healthcare system on your behalf, or that of a loved one. </p>\n                <p>This consultation can streamline your health care and ensure that there is no duplication of services or medications.</p>\n\n           \n             </div>\n            <div class='mb-2'>\n\n                <p>This consultation is 2\xBD hours long and can include any of the following:</p>\n            <ul>\n                    <li>Advanced Comprehensive Health Care Assessment</li>\n                    <li>Advance Pain Assessment & Management</li>\n                    <li>Fall Risk Assessment</li>\n                    <li>Diabetic Assessment</li>\n                    <li>Wound Care Assessment</li>\n                    <li>Cognitive Capacity Assessment</li>\n                    <li>Senior Behavioural Assessment</li>\n                    <li>Senior Functional Assessment</li>\n                    <li>Caregiver Stress Assessment</li>\n                    <li>Geriatric Health Consultation</li>\n                    <li>Palliative Care Consultation</li>\n                    <li>Chronic Disease Management</li>\n                    <li>Set up a consultation at your convenience.</li>\n                    <li>Set up a Homecare on Wheels Package or Services to provide you or your loved one with professional care.</li>\n                    <li>Review our recommendations with you and your family spokesperson</li>\n                    <li>Accompany you or your loved one during a consultation with a healthcare professional.</li>\n                    <li>Remain available 24 hours a day, 7 days a week to answer any questions or solve any issues that you may have regarding your care.</li>\n              </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('.go-back').fadeIn();
  $('html, body').animate({
    scrollTop: $('.anchor-dyn2').first().offset().top
  }, 700);
});
$('.map-nav').on('click', function (event) {
  var target = $(event.target);

  if (target.hasClass('map1')) {
    $('.map-dyn').hide().fadeIn().html("\n            <div class='map'>\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.0310209464856!2d-81.1837072845349!3d42.9776201791503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2bc8b17772b%3A0x967cf6d74206ca2!2s27%20Hamber%20Ct%2C%20London%2C%20ON%20N5W%201R4!5e0!3m2!1sen!2sca!4v1603320797659!5m2!1sen!2sca\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n            </div>\n            \n            ");
  } else if (target.hasClass('map2')) {
    $('.map-dyn').hide().fadeIn().html("\n            <div class='map'>\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5942681299875!2d-81.98728178455566!3d42.329851879189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882fe397fcae890f%3A0x5c9cc32f67869cf9!2s277%20Chatham%20St%20S%2C%20Blenheim%2C%20ON%20N0P%201A0!5e0!3m2!1sen!2sca!4v1603321006348!5m2!1sen!2sca\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>        \n            </div>\n            ");
  }

  $('html, body').animate({
    scrollTop: $('.map-dyn').first().offset().top
  }, 700);
});
$('#questions').on('click', function (event) {
  var target = $(event.target);

  for (var i = 1; i <= 10; i++) {
    if (target.hasClass("q".concat(i))) {
      $(".a".concat(i)).toggleClass('p-show');
    }
  }
});
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 0) {
    $('.scroll-below').fadeOut();
  } else {
    $('.scroll-below').fadeIn();
  }
});