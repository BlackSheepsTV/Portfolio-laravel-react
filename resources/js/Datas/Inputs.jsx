export const inputs = [
    {
        label: 'Prénom',
        name: 'firstname',
        type: 'text',
        placeholder: 'Gaëtan',
        required: true,
        class: 'small-input',
        regex: '([a-zA-Zéèàçëäï])+'
    },

    {
        label: 'Nom',
        name: 'name',
        type: 'text',
        placeholder: 'ETAME',
        required: true,
        class: 'small-input',
        regex: '([a-zA-Zéèàçëäï])+'
    },

    {
        label: 'Entreprise',
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
        placeholder: 'mon.email@gmail.com',
        required: true,
        class: 'medium-input',
        regex: '^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
    },

    {
        label: 'Téléphone',
        name: 'phone',
        type: 'text',
        placeholder: '0623481278',
        required: true,
        class: 'medium-input',
        regex: '([0-9]{2}){5}'
    },
]

