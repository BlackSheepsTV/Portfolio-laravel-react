export const inputs = [
    {
        label: 'First name',
        name: 'firstname',
        type: 'text',
        placeholder: 'Gaëtan',
        required: true,
        class: 'small-input',
        regex: '([a-zA-Zéèàçëäï])+'
    },

    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'ETAME',
        required: true,
        class: 'small-input',
        regex: '([a-zA-Zéèàçëäï])+'
    },

    {
        label: 'Company',
        name: 'entreprise',
        type: 'text',
        placeholder: 'Facebook',
        required: true,
        class: 'small-input',
        regex: '([a-zA-Z0-9éèàçëäï])+'
    },

    {
        label: 'Email',
        name: 'email',
        type: 'text',
        placeholder: 'your.email@gmail.com',
        required: true,
        class: 'medium-input',
        regex: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
    },

    {
        label: 'Phone number',
        name: 'phone',
        type: 'text',
        placeholder: '0623481278',
        required: true,
        class: 'medium-input',
        regex: '([0-9]{2}){5}'
    },
]

