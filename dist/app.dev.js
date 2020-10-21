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
  }

  current = $('.srv-page');
});
$('#pkg-btn').on('click', function () {
  if (current !== $('.pkg-page')) {
    current.hide();
    $('.pkg-page').fadeIn();
    $('.pkg-nav').fadeIn();
    $('.pkg-dyn-out').hide();
  }

  current = $('.pkg-page');
});
$('.abt-us-page').on('click', '.vision-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container vsn-dyn'>\n            <h1>Our Vision</h1>\n            <p>To provide an outstanding personalized professional health care to individuals of all ages within your own home or health care facility.</p>\n            <h1>Our Mission</h1>\n            <p>To support you and your family\u2019s health care when you need us.</p>\n            <h1>Our Goal</h1>\n            <p>To treat you the way we like to be treated with compassion, respect, dignity and confidentiality.</p>\n        </div>\n        ");
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.abt-us-page').on('click', '.cmt-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container cmt-dyn'>\n            <h1>Our Commitments</h1>\n            <ul>\n                <li>Homecare on Wheels incorporated are committed to be:\n                <br>\n                Professional \u2665 Knowledgeable \u2665 Respectful \u2665 Dedicated \u2665 Integrity.</li>\n                <li>Homecare on Wheels believe in treating all clients with the respect and dignity they deserve.</li>\n                <li>Clients and their family members will be an important partner in setting up the home health care plans.</li>\n                <li>Homecare on Wheels professional nurses will assess and advise what healthcare services available we respect your health care decision as a priority and work in collaboration with our clients to make it happen.</li>\n                <li>Homecare on Wheels staff will be straightforward and honest with their advice and will respect a client\u2019s choices.</li>\n                <li>Performance and deliverance of care will not be compromised by an individual\u2019s race, ethnicity, gender, age, sexual orientation, religious beliefs, physical or intellectual abilities, income status or family relationships.</li>\n                <li>Homecare on Wheels is committed to the confidentiality of all client\u2019s health information and personal health information security.</li>\n                <li>Homecare on Wheels rigorously screen all staff and are committed to improving the skills and expertise of each staff member.</li>\n                <li>Homecare on Wheels is committed to improving its services and welcome feedback from clients, staff, agencies and the community at large at any time.</li>\n            </ul>\n        </div>        \n        ");
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.abt-us-page').on('click', '.mgmt-btn', function () {
  $('.abt-dynamic').hide().fadeIn().html("\n        <div class='container mgmt-dyn'>\n            <h1>Our Management</h1>\n            <p>Homecare on Wheels Inc. was founded by group of four persons, among whom are Georgina Njoku and Bonnie Garba, \n            two Registered Nurses who have worked in a multitude of settings, from hospitals, long term care facilities,\n             community health care organizations, physician offices and Community Care Access Centre (CCAC).\xA0 \n             They are very familiar with not only the health care challenges and emotional strain that families \n             and Caregivers face when a loved one encounters health issues requiring hospitalization or homecare but \n             also the uncertainty and stresses of setting up home care upon returning home.\xA0 \n             Their first-hand knowledge in helping families navigate the health care system and personalize your \n             care need is critical to your healing and recovering. The two other partners are business professionals with a \n             proven record.</p>\n             <br>\n             <img class='img-fluid mb-2' src='/img/georgina.jpg'>\n             <h4>Nurse Consultant</h4>\n             <p class='mb-0'><em>Georgina Njoku, BScN, MScN, DNP, RN, GNC&copy</em></p>\n             <p><em>Geriatrics Clinical Nurse Specialist</em></p>\n             <p>Georgina has had extensive health care industry: over 10 years of Long-term Care experience, \n             5 years in Acute care hospitals, 8 years in Community care as a Care Coordinator for Community care Access Center \n             and over 5 years of Nursing leadership experience including 3 years as an outstanding Director of Care role \n             for Sienna Senior living home with 238 beds in Toronto, Ontario.  During her time with Sienna Senior living, \n             Georgina cleared this home\u2019s MOH orders, restructured nursing department and built capacity on the nursing \n             leadership team and frontline staff as a result, Georgina and her team won the OLTCA Quality Innovative award in \n             2018 and OLTC Leadership Clinical Practice award for 2019.</p>\n        </div>\n        ");
  $('html, body').animate({
    scrollTop: $('.abt-btn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.hmss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n            <div class='hmss-dyn anchor-dyn'>\n                <div class='text-center'>\n                    <img src='/img/hscc-fs.jpg'>\n                    <h1>Home Making Support Services</h1>\n                    <p>We will assist you with your household chores. Our Home Making Support Services assist with daily household tasks.  \n                    Your home life can be improved significantly by a nurse, a helper or a companion. \n                    We offer a wide range of services to accommodate both short- and long-term needs that best suits your need.</p>\n                    \n                    <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help as you age, \n                    our assessment Nurse Coordinator will assess your situation and help you to determine the best combination of services \n                    for you based on your individual circumstances and budget.</p>\n\n                </div>\n                <div class='mb-2'>\n\n                    <p>Our most\xA0<span><strong>popular Home Making Support Services</strong></span>\xA0includes:</p>\n\n                    <ul>\n                        <li>Taking care of laundry</li>\n                        <li>Light housekeeping</li>\n                        <li>Watering plants</li>\n                        <li>Taking out the garbage and recycling</li>\n                        <li>Changing bed linens and making beds</li>\n                        <li>Assist with housekeeping tasks</li>\n                        <li>Help with preparing grocery lists</li>\n                        <li>Preparing light meals</li>\n                        <li>Feed & Assist with the care of household pets</li>\n                    </ul>\n\n                </div>\n            </div>\n            \n            \n            ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.ncss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='ncss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/ncss-fs.jpg'>\n                <h1>Nursing Care Support Services</h1>\n                <h4>Delivering Professional Nursing Care is our Promise to you!</h4>\n                <p>During your initial consultation, our Assessment Care Coordinator will help you determine the best \n                combination of services for you, based on your individual circumstances. We strive to match personalities and continuity \n                of care with every client and will work tirelessly to ensure that all of our clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span><strong>popular Nursing Care Services</strong></span>\xA0includes:</p>\n\n                <ul>\n                    <li>Admission Assessment</li>\n                    <li>Monitoring vital signs as required</li>\n                    <li>Wound Care/Dressings Management</li>\n                    <li>Medication Management and Reconciliation</li>\n                    <li>Designing Individualized Care Plans</li>\n                    <li>Coordination with other Health Professionals (e.g. dentists, vision care, dietician, pharmacists, etc.)</li>\n                    <li>Referrals made as appropriate</li>\n                    <li>Health Maintenance (education regarding health/illness needs)</li>\n                    <li>Catheterization & Catheter Care</li>\n                    <li>Ostomy care</li>\n                    <li>Injection Administration</li>\n                    <li>Diabetic care and education</li>\n                    <li>Pain Assessment & Management</li>\n                    <li>Regular documentation</li>\n                    <li>Convalescent care</li>\n                    <li>Palliative care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.pcss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='pcss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/pcss-fs.jpg'>\n                <h1>Personal Care Support Services</h1>\n                <p>Homecare on Wheels'\xA0main focus is to help our clients manage their care in a professional and caring way. \n                Performing daily activities of living can be stressful when you are feeling unwell. \n                Whether you are residing in a home, long term facility retirement home, hospital, or some other type of accommodation. \n                Our staff is here to assist you with all the personal care requirements unique to your situation.</p>\n                <p>During your initial consultation, our Nurse Assessment Care Coordinators will help you determine \n                the best combination of services for you based upon your individual circumstances and budget. We strive to\n                 match personalities and continuity of care with every client and will work tirelessly to ensure that all of our \n                 clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span><strong>popular Personal Care Services</strong></span>\xA0are listed below. \n                Your Health Care Coordinator can provide you with a complete \n                list of our Personal Care Services during your initial consultation.</p>\n\n                <ul>\n                    <li>Assist with bathing</li>\n                    <li>Assist with personal hygiene (grooming, dressing, etc.)</li>\n                    <li>Toileting</li>\n                    <li>Catheter care</li>\n                    <li>Skin care</li>\n                    <li>Medication reminders</li>\n                    <li>Mobility assistance</li>\n                    <li>Assist with prescribed physiotherapy exercises</li>\n                    <li>Escort to Doctor\u2019s or Professional appointment</li>\n                    <li>Companionship, reading</li>\n                    <li>Assist with evening care</li>\n                </ul>\n\n                <p>We are available to you 24 hours a day, 7 days a week, to answer any questions, \n                or solve any issues that you may have regarding your care.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.gnss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='gnss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/gnss-fs.jpg'>\n                <h1>Geriatric Clinical Nurse Specialists Services</h1>\n                <p>Let\u2019s face it, aging process requires specialized care from age related illness to medication management. \n                It is a fact that the elderly population are more susceptible to certain illnesses and diseases. </p>\n                <p>Homecare on Wheels\xA0Inc has unique advantage of engaging the services of a geriatric nursing consultant, \n                Dr. Georgina Njoku who is a delegated professional trained Nurse whose life time passion is caring for \n                the elderly population. Specializing in Geriatric clinical nurse practice, she takes pleasure and passion \n                in caring for seniors and she trains her team to do the same.</p>\n                <p>Our specialist will help you to navigate the health care system will give you the full advantage of \n                their experience and advice in approaching your specific circumstances. \n                This consultation can streamline your health care and ensure that there is no duplication of services or medications.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <h1>This consultation is at least 2\xBD hours long and may include any of the following:</h1>\n\n                <ul>\n                    <li>Advanced Comprehensive Health Care Assessment</li>\n                    <li>Advance Pain Assessment & Management</li>\n                    <li>Fall Risk Assessment</li>\n                    <li>Diabetic Assessment</li>\n                    <li>Wound Care Assessment</li>\n                    <li>Cognitive Capacity Assessment</li>\n                    <li>Senior Behavioural Assessment</li>\n                    <li>Senior Functional Assessment</li>\n                    <li>Caregiver Stress Assessment</li>\n                    <li>Geriatric Health Consultation</li>\n                    <li>Palliative Care Consultation</li>\n                    <li>Chronic Disease Management</li>\n                </ul>\n\n                <p>Remain available 24 hours a day, 7 days a week to answer any questions or solve any issues \n                that you may have regarding your care.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.crc-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='crc-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/crc-fs.jpg'>\n                <h1>Caregiver & Respite Care Support Services</h1>\n                <p>Caregiver burnout is a reality. Caregivers often neglect their own health in caring for their love ones. \n                Over time a caregiver will continue to shoulder increasing care burden to a point that it becomes overwhelming \n                and affects your own health. Our Caregiver & Respite Care Services allow you to recharge your batteries, \n                resting comfortably in the knowledge that your loved one is being cared for by compassionate professionals. \n                Taking time for yourself does more than just renew energy and relieve stress, it also gives your loved one a chance \n                to interact with someone new, which is often a welcome distraction.</p>\n\n                <p>During your initial consultation, our Nurse Assessment Coordinator will help you \n                determine the best combination of services for both you and the one you're caring for. \n                At Homecare on wheels Inc, we are committed to maintaining open lines of communication to allow our clients to take \n                full advantage of the services we provide and customize their care as, and when, they see fit. \n                We strive to match personalities and continuity of care with every client and will work tirelessly \n                to ensure that all of our clients are satisfied with our performance.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most\xA0<span>popular Caregiver & Respite Care Services</span>\xA0are listed below.</p>\n                <ul>\n                    <li>Temporary relief for the caregiver</li>\n                    <li>Companionship</li>\n                    <li>Mobility Assistance</li>\n                    <li>Support for Light Recreational Activities (participate in crafts, playing cards, etc.)</li>\n                    <li>Emotional Support</li>\n                    <li>Assist with Medication Reminders</li>\n                    <li>Escort Client to Professional or Group Appointment</li>\n                    <li>Any other services required, such as Personal Support or Nursing, \n                    will be addressed with your Homecare on Wheels Case Manager during the initial Home Care Assessment visit.</li>\n                    <li>Regularly review and supervise the Homecare Support Services you're receiving, and adjust these services as required.</li>\n                    <li>With your consent, consult with other health care professionals as necessary.</li>\n                </ul>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n                <p>With your consent, consult with other health care professionals as necessary.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.pvss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='pvss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/pvss-fs.jpg'>\n                <h1>In-Home Virtual Physician/Nurse Practitioner Visits & Assessments</h1>\n                <h4>Are you finding it difficult to get to a Doctor\u2019s Appointment?</h4>\n                <p>When dealing with an illness, it can be difficult to travel to visit a physician, whether that be due to problems in \n                arranging transportation, finding the energy to travel or taking time off work for the occasion. \n                That's why\xA0Homecare on Wheels\xA0offers physician/ Nurse Practitioner house/Virtual calls. \n                The doctor's office is no further than your living room, so you don\u2019t have to leave the comfort of your home, \n                especially if you have mobility or health care concerns that make it inconvenient to travel to see a physician.</p>\n\n                <p>The health care services delivered by our Physicians or Nurse Practitioner are covered under OHIP. \n                The Administration and Transportation fee will be billed to the client.</p>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n\n            </div>\n\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.srv-nav').on('click', '.mcss-btn', function () {
  $('.srv-nav').hide();
  $('.srv-dyn-out').hide().fadeIn().html("\n        <div class='mcss-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/mcss-fs.jpg'>\n                <h1>Management Care Services</h1>\n                <h4>Let us take the stress off of your shoulders</h4>\n                <p>We want to put your mind at ease about the\xA0Homecare Services\xA0that you are receiving by providing you with professional and open care. \n                We are always open and respectful of your opinions and your concerns and will do our best to accommodate any needs that you have, \n                be they medical, privacy or financial concerns.</p>\n\n                <p>With the help of our knowledgeable staff, your health care services will be coordinated by trained, \n                competent individuals who will communicate any relevant information to the proper health care professionals, \n                to avoid costly, and sometimes harmful, duplication of services.</p>\n\n            </div>\n            <div class='mb-2'>\n\n                <p>We encourage you to try our services which includes:</p>\n                <ul>\n                    <li>We will coordinate your care</li>\n                    <li>Arrange any assistive devices, home safety equipment or monitoring services</li>\n                    <li>Set-up your appointments and arrange transportation to these appointments</li>\n                    <li>Accompany you to your appointments if required</li>\n                    <li>Arrange interpreter if required</li>\n                    <li>Contact and arrange delivery of your medical supplies, prescriptions, etc.</li>\n                    <li>Help you navigate the health care system for your individual health needs</li>\n                    <li>Contact other health care professionals as required with your prior consent</li>\n                    <li>Arrange consultations as required</li>\n                    <li>Keep your family up-to-date with your medical journey, with your consent</li>\n                </ul>\n\n                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>\n                <p>With your consent, consult with other health care professionals as necessary.</p>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.hsp-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='hsp-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/hsp-fs.jpg'>\n                <h1>Home Care Support Package</h1>\n                <h4>Sometimes all you NEED is a hand with household chores</h4>\n                <p>Our Home Care Support Staff\xA0assist with the daily household tasks that you may not be able to perform anymore due to, \n                ill health, injury, aging process or busy life.\xA0Homecare on Wheels\xA0recognizes that there are a variety of ways that one's \n                home life can be improved significantly by a nurse, a helper or even a companion. </p>\n\n                <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help Homecare on \n                Wheels home care package is set up for you. Our Home Support\n                Team is committed to maintaining open lines of communication between your requirements and our services.\xA0 \n                Our clients can relax knowing their household chores will be taken care of, allowing them to concentrate on other things.</p>\n\n                <h1>Your satisfaction is our goal</h1>\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most popular services in the Home Care Support Package includes:</p>\n                <ul>\n                    <li>Taking care of laundry</li>\n                    <li>Light housekeeping</li>\n                    <li>Watering plants</li>\n                    <li>Taking out the garbage and recycling</li>\n                    <li>Changing bed linens and making beds</li>\n                    <li>Assist with housekeeping tasks</li>\n                    <li>Help with preparing grocery lists</li>\n                    <li>Preparing light meals</li>\n                    <li>Feed & Assist with the care of household pets</li>\n                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>\n                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});
$('.pkg-nav').on('click', '.hsp-btn', function () {
  $('.pkg-nav').hide();
  $('.pkg-dyn-out').hide().fadeIn().html("\n        <div class='hsp-dyn anchor-dyn'>\n            <div class='text-center'>\n                <img src='/img/hsp-fs.jpg'>\n                <h1>Home Care Support Package</h1>\n                <h4>Sometimes all you NEED is a hand with household chores</h4>\n                <p>Our Home Care Support Staff\xA0assist with the daily household tasks that you may not be able to perform anymore due to, \n                ill health, injury, aging process or busy life.\xA0Homecare on Wheels\xA0recognizes that there are a variety of ways that one's \n                home life can be improved significantly by a nurse, a helper or even a companion. </p>\n\n                <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help Homecare on \n                Wheels home care package is set up for you. Our Home Support\n                Team is committed to maintaining open lines of communication between your requirements and our services.\xA0 \n                Our clients can relax knowing their household chores will be taken care of, allowing them to concentrate on other things.</p>\n\n                <h1>Your satisfaction is our goal</h1>\n            </div>\n            <div class='mb-2'>\n\n                <p>Our most popular services in the Home Care Support Package includes:</p>\n                <ul>\n                    <li>Taking care of laundry</li>\n                    <li>Light housekeeping</li>\n                    <li>Watering plants</li>\n                    <li>Taking out the garbage and recycling</li>\n                    <li>Changing bed linens and making beds</li>\n                    <li>Assist with housekeeping tasks</li>\n                    <li>Help with preparing grocery lists</li>\n                    <li>Preparing light meals</li>\n                    <li>Feed & Assist with the care of household pets</li>\n                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>\n                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>\n                </ul>\n\n            </div>\n        </div>\n        \n        \n        ");
  $('html, body').animate({
    scrollTop: $('.anchor-dyn').first().offset().top
  }, 700);
});