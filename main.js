const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const date = document.getElementById('date')
const phonenum = document.getElementById('phnumber')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')
const address = document.getElementById('address')
const postal = document.getElementById('postal')
const select = document.getElementById('select')
const area = document.getElementById('area')
const checkbox = document.getElementById('checkbox')
const btn = document.getElementById('btn')

// function validate(firstName, lastName, date, phonenum, email, password, confirm, address, postal, select, area, checkbox) {
//     if (firstName.value.length < 2) { // qanday qilib faqat lotin harfni qabul qiladigan qilishni bilmadim
//         firstName.focus()
//         firstName.style.outlineColor = 'red'
//         alert("Ismni togri kiriting. Kamida 2 ta harf bolishi kerak va faqat lotin harflaridan foydalaning.")
//         return false
//     }

//     if (lastName.value.length < 2) {
//         lastName.focus()
//         lastName.style.outlineColor = 'red'
//         alert("Familiyani togri kiriting.")
//         return false
//     }

//     if (phonenum.value.length > 15 || phonenum.value.length < 9) {
//         phonenum.focus()
//         phonenum.style.outlineColor = 'red'
//         alert("Telefon raqamini togri kiriting, masalan: +998901234567.")
//         return false
//     }

//     if (email.value.length <= 0) {
//         email.focus()
//         email.style.outlineColor = 'red'
//         alert("Emailni togri kiriting.")
//         return false
//     }

//     if (password.value.length < 8) {
//         password.focus()
//         password.style.outlineColor = 'red'
//         alert("Parol kamida 8 ta belgidan iborat bolishi va katta harf, kichik harf, raqamni oz ichiga olishi kerak.")
//         return false
//     }

//     if (confirm.value !== password.value) {
//         confirm.focus()
//         confirm.style.outlineColor = 'red'
//         alert("Parol va tasdiqlash bir xil bolishi kerak.")
//         return false
//     }

//     if (address.value.length > 9) {
//         address.focus()
//         address.style.outlineColor = 'red'
//         alert("Manzilni togri kiriting. Kamida 10 ta belgi bolishi kerak.")
//         return false
//     }

//     if (postal.value.length > 6) {
//         postal.focus()
//         postal.style.outlineColor = 'red'
//         alert("Pochta indeksini faqat raqamlardan iborat qilib kiriting.")
//         return false
//     }

//     if (area.value.length < 5) {
//         area.focus()
//         area.style.outlineColor = 'red'
//         alert("Qiziqishlaringizni kamida 5 ta belgi bilan yozing.")
//         return false
//     }

//     if (!checkbox.checked) {
//         alert("Qoidalarga rozilik bildiring.")
//         return false
//     }

//     return true
// }

btn && btn.addEventListener('click', function () {
    event.preventDefault()
    // const isValid = validate(firstName, lastName, date, phonenum, email, password, confirm, address, postal, select, area, checkbox)

    // if (!isValid) {
    //     return;
    // }

    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value,
        phonenum: phnumber.value,
        email: email.value,
        password: password.value,
        confirm: confirm.value,
        address: address.value,
        postal: postal.value,
        select: select.value,
        area: area.value,
        checkbox: checkbox.value
    }
    console.log(user)
})

// Vazifa: Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.
// inputni qiymatini boshqa divga qanday qilib kochirishni bilmadim kochirsam ishlamayapti boshqa qilib ham kochirib kordim
// const input = document.querySelector('.input')
// const btn_1 = document.querySelector('.btn_1')
// const neww = document.createElement('div')
// const newww = document.createElement('p')


// btn_1 && btn_1.addEventListener('click', function() {
//     neww.append(newww)
//     newww.textContent = input.value
// })

// Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi."2-vazifa"
const div_2 = document.querySelector('.div_2')
const p_1 = document.querySelector('.p_1')
const btn_2 = document.querySelector('.btn_2')
const input_2 = document.createElement('input')
const button = document.createElement('button')

btn_2 && btn_2.addEventListener('click', function () {
    input_2.setAttribute('type', 'text')
    div_2.replaceChild(input_2, p_1)
    button.textContent = 'saqlash'
    btn_2.replaceWith(button)
})

button && button.addEventListener('click', function () {
    p_1.textContent = input_2.value
    div_2.replaceChild(p_1, input_2)
    button.replaceWith(btn_2)
})

// Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin."2-vazifa"
const input_3 = document.querySelector('.input_2')
const input_4 = document.querySelector('.input_3')
const btn_3 = document.querySelector('.btn_3')

btn_3 && btn_3.addEventListener('click', function () {
    if (input_3.value === input_4.value) {
        alert('Parol mos')
    } else {
        alert('Parol mos emas')
    }
})

// Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi."2-vazifa"
const input_5 = document.querySelector('.input_4')
const btn_4 = document.querySelector('.btn_4')
const newwww = document.createElement('div')

btn_4 && btn_4.addEventListener('click', function () {
    if (input_5.value === 'yashil') {
        newwww.style.backgroundColor = 'green'
    }

    if (input_5.value === 'sariq') {
        newwww.style.backgroundColor = 'yellow'
    }

    if (input_5.value === 'qora') {
        newwww.style.backgroundColor = 'black'
    }
})

// Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi."2-vazifa"
const input_6 = document.querySelector('.input_5')
const btn_5 = document.querySelector('.btn_5')
const ul = document.createElement('ul')
const li = document.createElement('li')

btn_5 && btn_5.addEventListener('click', function () {
    li.textContent = input_6.value
    ul.append(li)
})

// Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi."2-vazifa"
const input_7 = document.querySelector('.input_6')
const btn_6 = document.querySelector('.btn_6')
const div_3 = document.querySelector('.div_3')

btn_6 && btn_6.addEventListener('click', function () {
    div_3.textContent = input_7.value
    input_7.value = ''
})

// Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin."2-vazifa"
const input_8 = document.querySelector('.input_7')
const btn_7 = document.querySelector('.btn_7')

btn_7 && btn_7.addEventListener('click', function () {
    if (Number(input_8.value) > 18) {
        console.log('yoshingiz mos')
    } else {
        console.log('yoshingiz mos emas')
    }

    if (Number(input_8.value)) {
        true
    } else {
        console.log('stringda yozmang')
    }
})

// Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi."2-vazifa"
const input_9 = document.querySelector('.input_8')
const btn_8 = document.querySelector('.btn_8')

btn_8 && btn_8.addEventListener('click', function () {
    if (input_9.value === 'red') {
        document.body.style.backgroundColor = 'red'
    }

    if (input_9.value === 'green') {
        document.body.style.backgroundColor = 'green'
    }

    if (input_9.value === 'blue') {
        document.body.style.backgroundColor = 'blue'
    }
})

// Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi."2-vazifa"
const input_10 = document.querySelector('.input_9')
const input_11 = document.querySelector('.input_10')
const btn_9 = document.querySelector('.btn_9')
const yangi_1 = document.createElement('ul')
const yangi_2 = document.createElement('li')
const yangi_3 = document.createElement('li')

btn_9 && btn_9.addEventListener('click', function () {
    yangi_1.append(yangi_2)
    yangi_1.append(yangi_3)
    yangi_2.textContent = input_10.value
    yangi_3.textContent = input_11.value
})

// Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.
const input_12 = document.querySelector('.input_11')
const son = document.querySelector('.son')

input_12 && input_12.addEventListener('input', function () {
    const trim = input_12.value.trim()
    if (trim) {
        son.textContent = trim.length
    }
})

// Vazifa: Sahifada davlatlar ro‘yxati (ul) bo‘lsin. Formada "Saralash" tugmasi bo‘lsin. Tugma bosilganda, davlatlar ro‘yxati alifbo bo‘yicha qayta tartiblanadi.
// sort ishlamadi negadir

// ?
// Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.

// Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.
const input_13 = document.querySelector('.input_13')
const input_14 = document.querySelector('.input_14')
const input_15 = document.querySelector('.input_15')
const btn_12 = document.querySelector('.btn_12')

btn_12 && btn_12.addEventListener('click', function() {
    input_13.value = ''
    input_14.value = ''
    input_15.value = ''
})

// Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.
const ul_2 = document.querySelector('.ul_2')
const input_16 = document.querySelector('.input_16')
const li_1 = document.querySelector('.li_1')

input_16 && input_16.addEventListener('input', function() {
    event.preventDefault()
    const search = input_16.value
    for (let i = 0; i < ul_2.length; i++) {
        const search_2 = ul_2[i]
        const search_3 = search_2.textContent
        if (search_3.includes(search)) {
            search_2.style.display = ''
        } else {
            search_2.style.display = 'none'
        }
    }
})

// Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.
const div_4 = document.querySelector('.div_4')
const btn_13 = document.querySelector('.btn_13')
const input_17 = document.createElement('input')
const btn_14 = document.createElement('button')
const p_2 = document.querySelector('.p_2')

btn_13 && btn_13.addEventListener('click', function() {
    input_17.setAttribute('type', 'text')
    div_4.replaceChild(input_17, div_4.firstChild)
    btn_14.textContent = 'saqlash'
    btn_13.replaceWith(btn_14)
})

btn_14 && btn_14.addEventListener('click', function() {
    p_2.textContent = input_17.value
    div_4.replaceChild(p_2, div_4.firstChild)
    btn_14.replaceWith(btn_13)
})