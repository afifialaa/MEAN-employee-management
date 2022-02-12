require('dotenv').config();
const db = require('../config')

const User = require('../../models/user.model')

seed()

async function seed() {
    for (let i = 0; i < 100; i++) {
        let userObj = generateMockUser()
        let user = new User(userObj)
        let saved = await user.save()
        if (!saved) {
            console.log('failed to save user')
            continue
        }
        console.log('inserting user ', userObj)
    }

    // Close database connection
    db.close()
}



/** Generates and saves mock user */
function generateMockUser() {
    let user = {
        email: generateMockEmail(),
        password: generateMockPassword(),
        role: generateMockRole()
    }
    return user
}

/** Generate mock password */
function generateMockPassword() {
    let mockPassword = ''

    for (let i = 0; i < 10; i++) {
        mockPassword += String.fromCharCode(generateRandomLetter())
    }

    return mockPassword
}

/** Generate mock role */
function generateMockRole() {
    const roles = ['admin', 'normal']
    return roles[generateRandomLetter(0, 2)]
}


/** Generates mock email */
function generateMockEmail() {
    let mockEmail = ''
    for (let i = 0; i < 12; i++) {
        if (i == 7) {
            mockEmail += '@'
            continue
        }
        mockEmail += String.fromCharCode(generateRandomLetter())
    }

    mockEmail += '.com'

    return mockEmail
}

/** Generates random letter */
function generateRandomLetter(min = 97, max = 122) {
    return Math.floor(Math.random() * (max - min) + min)
}