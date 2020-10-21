var current = $('.home');


$("[data-toggle=popover]").popover();

// navbar collapses when user clicks on nav options
$('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
});

$('.main-logo').on('click',function(e){

   
    if(current !== $('.home')){
        current.hide()
        $('.home').fadeIn()
    }

    current = $('.home')
    
})

$('#home-btn').on('click',function(e){

   
    if(current !== $('.home')){
        current.hide()
        $('.home').fadeIn()
    }

    current = $('.home')
    
})

$('#abt-us-btn').on('click',function(){

    if(current !== $('.abt-us-page')){

        current.hide()
        $('.abt-us-page').fadeIn()
        $('.abt-dynamic').hide()
        
    }

    current = $('.abt-us-page')


})

$('#srv-btn').on('click',function(){

    if(current !== $('.srv-page')){

        current.hide()
        $('.srv-page').fadeIn()
        $('.srv-nav').fadeIn()
        $('.srv-dyn-out').hide()
       
        
    }

    current = $('.srv-page')

})

$('#pkg-btn').on('click',function(){

    if(current !== $('.pkg-page')){

        current.hide()
        $('.pkg-page').fadeIn()
        $('.pkg-nav').fadeIn()
        $('.pkg-dyn-out').hide()
       
        
    }

    current = $('.pkg-page')

})

$('.abt-us-page').on('click','.vision-btn',function(){

    $('.abt-dynamic').hide().fadeIn().html(
        `
        <div class='container vsn-dyn'>
            <h1>Our Vision</h1>
            <p>To provide an outstanding personalized professional health care to individuals of all ages within your own home or health care facility.</p>
            <h1>Our Mission</h1>
            <p>To support you and your family’s health care when you need us.</p>
            <h1>Our Goal</h1>
            <p>To treat you the way we like to be treated with compassion, respect, dignity and confidentiality.</p>
        </div>
        `
    )

    $('html, body').animate({
        scrollTop: ($('.abt-btn').first().offset().top)
    },700);

})

$('.abt-us-page').on('click','.cmt-btn',function(){

    $('.abt-dynamic').hide().fadeIn().html(
        `
        <div class='container cmt-dyn'>
            <h1>Our Commitments</h1>
            <ul>
                <li>Homecare on Wheels incorporated are committed to be:
                <br>
                Professional ♥ Knowledgeable ♥ Respectful ♥ Dedicated ♥ Integrity.</li>
                <li>Homecare on Wheels believe in treating all clients with the respect and dignity they deserve.</li>
                <li>Clients and their family members will be an important partner in setting up the home health care plans.</li>
                <li>Homecare on Wheels professional nurses will assess and advise what healthcare services available we respect your health care decision as a priority and work in collaboration with our clients to make it happen.</li>
                <li>Homecare on Wheels staff will be straightforward and honest with their advice and will respect a client’s choices.</li>
                <li>Performance and deliverance of care will not be compromised by an individual’s race, ethnicity, gender, age, sexual orientation, religious beliefs, physical or intellectual abilities, income status or family relationships.</li>
                <li>Homecare on Wheels is committed to the confidentiality of all client’s health information and personal health information security.</li>
                <li>Homecare on Wheels rigorously screen all staff and are committed to improving the skills and expertise of each staff member.</li>
                <li>Homecare on Wheels is committed to improving its services and welcome feedback from clients, staff, agencies and the community at large at any time.</li>
            </ul>
        </div>        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.abt-btn').first().offset().top)
    },700);

})

$('.abt-us-page').on('click','.mgmt-btn',function(){

    $('.abt-dynamic').hide().fadeIn().html(
        `
        <div class='container mgmt-dyn'>
            <h1>Our Management</h1>
            <p>Homecare on Wheels Inc. was founded by group of four persons, among whom are Georgina Njoku and Bonnie Garba, 
            two Registered Nurses who have worked in a multitude of settings, from hospitals, long term care facilities,
             community health care organizations, physician offices and Community Care Access Centre (CCAC).  
             They are very familiar with not only the health care challenges and emotional strain that families 
             and Caregivers face when a loved one encounters health issues requiring hospitalization or homecare but 
             also the uncertainty and stresses of setting up home care upon returning home.  
             Their first-hand knowledge in helping families navigate the health care system and personalize your 
             care need is critical to your healing and recovering. The two other partners are business professionals with a 
             proven record.</p>
             <br>
             <img class='img-fluid mb-2' src='/img/georgina.jpg'>
             <h4>Nurse Consultant</h4>
             <p class='mb-0'><em>Georgina Njoku, BScN, MScN, DNP, RN, GNC&copy</em></p>
             <p><em>Geriatrics Clinical Nurse Specialist</em></p>
             <p>Georgina has had extensive health care industry: over 10 years of Long-term Care experience, 
             5 years in Acute care hospitals, 8 years in Community care as a Care Coordinator for Community care Access Center 
             and over 5 years of Nursing leadership experience including 3 years as an outstanding Director of Care role 
             for Sienna Senior living home with 238 beds in Toronto, Ontario.  During her time with Sienna Senior living, 
             Georgina cleared this home’s MOH orders, restructured nursing department and built capacity on the nursing 
             leadership team and frontline staff as a result, Georgina and her team won the OLTCA Quality Innovative award in 
             2018 and OLTC Leadership Clinical Practice award for 2019.</p>
        </div>
        `
    )

    $('html, body').animate({
        scrollTop: ($('.abt-btn').first().offset().top)
    },700);

})

$('.srv-nav').on('click','.hmss-btn',function(){
  
  
        $('.srv-nav').hide()
        $('.srv-dyn-out').hide().fadeIn().html(
    
            `
            <div class='hmss-dyn anchor-dyn'>
                <div class='text-center'>
                    <img src='/img/hscc-fs.jpg'>
                    <h1>Home Making Support Services</h1>
                    <p>We will assist you with your household chores. Our Home Making Support Services assist with daily household tasks.  
                    Your home life can be improved significantly by a nurse, a helper or a companion. 
                    We offer a wide range of services to accommodate both short- and long-term needs that best suits your need.</p>
                    
                    <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help as you age, 
                    our assessment Nurse Coordinator will assess your situation and help you to determine the best combination of services 
                    for you based on your individual circumstances and budget.</p>

                </div>
                <div class='mb-2'>

                    <p>Our most <span><strong>popular Home Making Support Services</strong></span> includes:</p>

                    <ul>
                        <li>Taking care of laundry</li>
                        <li>Light housekeeping</li>
                        <li>Watering plants</li>
                        <li>Taking out the garbage and recycling</li>
                        <li>Changing bed linens and making beds</li>
                        <li>Assist with housekeeping tasks</li>
                        <li>Help with preparing grocery lists</li>
                        <li>Preparing light meals</li>
                        <li>Feed & Assist with the care of household pets</li>
                    </ul>

                </div>
            </div>
            
            
            `
        )

        $('html, body').animate({
            scrollTop: ($('.anchor-dyn').first().offset().top)
        },700);
})

$('.srv-nav').on('click','.ncss-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='ncss-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/ncss-fs.jpg'>
                <h1>Nursing Care Support Services</h1>
                <h4>Delivering Professional Nursing Care is our Promise to you!</h4>
                <p>During your initial consultation, our Assessment Care Coordinator will help you determine the best 
                combination of services for you, based on your individual circumstances. We strive to match personalities and continuity 
                of care with every client and will work tirelessly to ensure that all of our clients are satisfied with our performance.</p>

            </div>
            <div class='mb-2'>

                <p>Our most <span><strong>popular Nursing Care Services</strong></span> includes:</p>

                <ul>
                    <li>Admission Assessment</li>
                    <li>Monitoring vital signs as required</li>
                    <li>Wound Care/Dressings Management</li>
                    <li>Medication Management and Reconciliation</li>
                    <li>Designing Individualized Care Plans</li>
                    <li>Coordination with other Health Professionals (e.g. dentists, vision care, dietician, pharmacists, etc.)</li>
                    <li>Referrals made as appropriate</li>
                    <li>Health Maintenance (education regarding health/illness needs)</li>
                    <li>Catheterization & Catheter Care</li>
                    <li>Ostomy care</li>
                    <li>Injection Administration</li>
                    <li>Diabetic care and education</li>
                    <li>Pain Assessment & Management</li>
                    <li>Regular documentation</li>
                    <li>Convalescent care</li>
                    <li>Palliative care</li>
                </ul>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.srv-nav').on('click','.pcss-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='pcss-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/pcss-fs.jpg'>
                <h1>Personal Care Support Services</h1>
                <p>Homecare on Wheels' main focus is to help our clients manage their care in a professional and caring way. 
                Performing daily activities of living can be stressful when you are feeling unwell. 
                Whether you are residing in a home, long term facility retirement home, hospital, or some other type of accommodation. 
                Our staff is here to assist you with all the personal care requirements unique to your situation.</p>
                <p>During your initial consultation, our Nurse Assessment Care Coordinators will help you determine 
                the best combination of services for you based upon your individual circumstances and budget. We strive to
                 match personalities and continuity of care with every client and will work tirelessly to ensure that all of our 
                 clients are satisfied with our performance.</p>

            </div>
            <div class='mb-2'>

                <p>Our most <span><strong>popular Personal Care Services</strong></span> are listed below. 
                Your Health Care Coordinator can provide you with a complete 
                list of our Personal Care Services during your initial consultation.</p>

                <ul>
                    <li>Assist with bathing</li>
                    <li>Assist with personal hygiene (grooming, dressing, etc.)</li>
                    <li>Toileting</li>
                    <li>Catheter care</li>
                    <li>Skin care</li>
                    <li>Medication reminders</li>
                    <li>Mobility assistance</li>
                    <li>Assist with prescribed physiotherapy exercises</li>
                    <li>Escort to Doctor’s or Professional appointment</li>
                    <li>Companionship, reading</li>
                    <li>Assist with evening care</li>
                </ul>

                <p>We are available to you 24 hours a day, 7 days a week, to answer any questions, 
                or solve any issues that you may have regarding your care.</p>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})


$('.srv-nav').on('click','.gnss-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='gnss-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/gnss-fs.jpg'>
                <h1>Geriatric Clinical Nurse Specialists Services</h1>
                <p>Let’s face it, aging process requires specialized care from age related illness to medication management. 
                It is a fact that the elderly population are more susceptible to certain illnesses and diseases. </p>
                <p>Homecare on Wheels Inc has unique advantage of engaging the services of a geriatric nursing consultant, 
                Dr. Georgina Njoku who is a delegated professional trained Nurse whose life time passion is caring for 
                the elderly population. Specializing in Geriatric clinical nurse practice, she takes pleasure and passion 
                in caring for seniors and she trains her team to do the same.</p>
                <p>Our specialist will help you to navigate the health care system will give you the full advantage of 
                their experience and advice in approaching your specific circumstances. 
                This consultation can streamline your health care and ensure that there is no duplication of services or medications.</p>

            </div>
            <div class='mb-2'>

                <h1>This consultation is at least 2½ hours long and may include any of the following:</h1>

                <ul>
                    <li>Advanced Comprehensive Health Care Assessment</li>
                    <li>Advance Pain Assessment & Management</li>
                    <li>Fall Risk Assessment</li>
                    <li>Diabetic Assessment</li>
                    <li>Wound Care Assessment</li>
                    <li>Cognitive Capacity Assessment</li>
                    <li>Senior Behavioural Assessment</li>
                    <li>Senior Functional Assessment</li>
                    <li>Caregiver Stress Assessment</li>
                    <li>Geriatric Health Consultation</li>
                    <li>Palliative Care Consultation</li>
                    <li>Chronic Disease Management</li>
                </ul>

                <p>Remain available 24 hours a day, 7 days a week to answer any questions or solve any issues 
                that you may have regarding your care.</p>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.srv-nav').on('click','.crc-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='crc-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/crc-fs.jpg'>
                <h1>Caregiver & Respite Care Support Services</h1>
                <p>Caregiver burnout is a reality. Caregivers often neglect their own health in caring for their love ones. 
                Over time a caregiver will continue to shoulder increasing care burden to a point that it becomes overwhelming 
                and affects your own health. Our Caregiver & Respite Care Services allow you to recharge your batteries, 
                resting comfortably in the knowledge that your loved one is being cared for by compassionate professionals. 
                Taking time for yourself does more than just renew energy and relieve stress, it also gives your loved one a chance 
                to interact with someone new, which is often a welcome distraction.</p>

                <p>During your initial consultation, our Nurse Assessment Coordinator will help you 
                determine the best combination of services for both you and the one you're caring for. 
                At Homecare on wheels Inc, we are committed to maintaining open lines of communication to allow our clients to take 
                full advantage of the services we provide and customize their care as, and when, they see fit. 
                We strive to match personalities and continuity of care with every client and will work tirelessly 
                to ensure that all of our clients are satisfied with our performance.</p>

            </div>
            <div class='mb-2'>

                <p>Our most <span>popular Caregiver & Respite Care Services</span> are listed below.</p>
                <ul>
                    <li>Temporary relief for the caregiver</li>
                    <li>Companionship</li>
                    <li>Mobility Assistance</li>
                    <li>Support for Light Recreational Activities (participate in crafts, playing cards, etc.)</li>
                    <li>Emotional Support</li>
                    <li>Assist with Medication Reminders</li>
                    <li>Escort Client to Professional or Group Appointment</li>
                    <li>Any other services required, such as Personal Support or Nursing, 
                    will be addressed with your Homecare on Wheels Case Manager during the initial Home Care Assessment visit.</li>
                    <li>Regularly review and supervise the Homecare Support Services you're receiving, and adjust these services as required.</li>
                    <li>With your consent, consult with other health care professionals as necessary.</li>
                </ul>

                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>
                <p>With your consent, consult with other health care professionals as necessary.</p>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.srv-nav').on('click','.pvss-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='pvss-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/pvss-fs.jpg'>
                <h1>In-Home Virtual Physician/Nurse Practitioner Visits & Assessments</h1>
                <h4>Are you finding it difficult to get to a Doctor’s Appointment?</h4>
                <p>When dealing with an illness, it can be difficult to travel to visit a physician, whether that be due to problems in 
                arranging transportation, finding the energy to travel or taking time off work for the occasion. 
                That's why Homecare on Wheels offers physician/ Nurse Practitioner house/Virtual calls. 
                The doctor's office is no further than your living room, so you don’t have to leave the comfort of your home, 
                especially if you have mobility or health care concerns that make it inconvenient to travel to see a physician.</p>

                <p>The health care services delivered by our Physicians or Nurse Practitioner are covered under OHIP. 
                The Administration and Transportation fee will be billed to the client.</p>

                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>

            </div>

        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.srv-nav').on('click','.mcss-btn',function(){
  
  
    $('.srv-nav').hide()
    $('.srv-dyn-out').hide().fadeIn().html(

        `
        <div class='mcss-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/mcss-fs.jpg'>
                <h1>Management Care Services</h1>
                <h4>Let us take the stress off of your shoulders</h4>
                <p>We want to put your mind at ease about the Homecare Services that you are receiving by providing you with professional and open care. 
                We are always open and respectful of your opinions and your concerns and will do our best to accommodate any needs that you have, 
                be they medical, privacy or financial concerns.</p>

                <p>With the help of our knowledgeable staff, your health care services will be coordinated by trained, 
                competent individuals who will communicate any relevant information to the proper health care professionals, 
                to avoid costly, and sometimes harmful, duplication of services.</p>

            </div>
            <div class='mb-2'>

                <p>We encourage you to try our services which includes:</p>
                <ul>
                    <li>We will coordinate your care</li>
                    <li>Arrange any assistive devices, home safety equipment or monitoring services</li>
                    <li>Set-up your appointments and arrange transportation to these appointments</li>
                    <li>Accompany you to your appointments if required</li>
                    <li>Arrange interpreter if required</li>
                    <li>Contact and arrange delivery of your medical supplies, prescriptions, etc.</li>
                    <li>Help you navigate the health care system for your individual health needs</li>
                    <li>Contact other health care professionals as required with your prior consent</li>
                    <li>Arrange consultations as required</li>
                    <li>Keep your family up-to-date with your medical journey, with your consent</li>
                </ul>

                <p>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care.</p>
                <p>With your consent, consult with other health care professionals as necessary.</p>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.pkg-nav').on('click','.hsp-btn',function(){
  
  
    $('.pkg-nav').hide()
    $('.pkg-dyn-out').hide().fadeIn().html(

        `
        <div class='hsp-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/hsp-fs.jpg'>
                <h1>Home Care Support Package</h1>
                <h4>Sometimes all you NEED is a hand with household chores</h4>
                <p>Our Home Care Support Staff assist with the daily household tasks that you may not be able to perform anymore due to, 
                ill health, injury, aging process or busy life. Homecare on Wheels recognizes that there are a variety of ways that one's 
                home life can be improved significantly by a nurse, a helper or even a companion. </p>

                <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help Homecare on 
                Wheels home care package is set up for you. Our Home Support
                Team is committed to maintaining open lines of communication between your requirements and our services.  
                Our clients can relax knowing their household chores will be taken care of, allowing them to concentrate on other things.</p>

                <h1>Your satisfaction is our goal</h1>
            </div>
            <div class='mb-2'>

                <p>Our most popular services in the Home Care Support Package includes:</p>
                <ul>
                    <li>Taking care of laundry</li>
                    <li>Light housekeeping</li>
                    <li>Watering plants</li>
                    <li>Taking out the garbage and recycling</li>
                    <li>Changing bed linens and making beds</li>
                    <li>Assist with housekeeping tasks</li>
                    <li>Help with preparing grocery lists</li>
                    <li>Preparing light meals</li>
                    <li>Feed & Assist with the care of household pets</li>
                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>
                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>
                </ul>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})

$('.pkg-nav').on('click','.hsp-btn',function(){
  
  
    $('.pkg-nav').hide()
    $('.pkg-dyn-out').hide().fadeIn().html(

        `
        <div class='hsp-dyn anchor-dyn'>
            <div class='text-center'>
                <img src='/img/hsp-fs.jpg'>
                <h1>Home Care Support Package</h1>
                <h4>Sometimes all you NEED is a hand with household chores</h4>
                <p>Our Home Care Support Staff assist with the daily household tasks that you may not be able to perform anymore due to, 
                ill health, injury, aging process or busy life. Homecare on Wheels recognizes that there are a variety of ways that one's 
                home life can be improved significantly by a nurse, a helper or even a companion. </p>

                <p>Whether returning home from the hospital, dealing with illness or simply requiring a little help Homecare on 
                Wheels home care package is set up for you. Our Home Support
                Team is committed to maintaining open lines of communication between your requirements and our services.  
                Our clients can relax knowing their household chores will be taken care of, allowing them to concentrate on other things.</p>

                <h1>Your satisfaction is our goal</h1>
            </div>
            <div class='mb-2'>

                <p>Our most popular services in the Home Care Support Package includes:</p>
                <ul>
                    <li>Taking care of laundry</li>
                    <li>Light housekeeping</li>
                    <li>Watering plants</li>
                    <li>Taking out the garbage and recycling</li>
                    <li>Changing bed linens and making beds</li>
                    <li>Assist with housekeeping tasks</li>
                    <li>Help with preparing grocery lists</li>
                    <li>Preparing light meals</li>
                    <li>Feed & Assist with the care of household pets</li>
                    <li>Regularly review and supervise the Home Care Support Services you're receiving, and adjust these services as required</li>
                    <li>Remain available to you 24 hours a day, 7 days a week, to answer any questions, or solve any issues that you may have regarding your care</li>
                </ul>

            </div>
        </div>
        
        
        `
    )

    $('html, body').animate({
        scrollTop: ($('.anchor-dyn').first().offset().top)
    },700);
})





