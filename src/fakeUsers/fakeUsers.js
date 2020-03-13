const users = [
    {
        "id": 1,
        "name": "Hector Duran",
        "username": "Hector_D",
        "email": "hectorduran123@vul.com",
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
        "phone": "1-770-736-8036",
        "website": "hectorduran.org",
        "salary": "500,000"
    },
    {
        "id": 2,
        "name": "Kaylin Stout",
        "username": "KStout",
        "email": "kaylinstout1991@vul.com",
        "image": "https://randomuser.me/api/portraits/women/72.jpg",
        "phone": "1-670-733-8032",
        "website": "kaylinstout.org",
        "salary": "100,000"
    },
    {
        "id": 3,
        "name": "Damon Tran",
        "username": "TheTran",
        "email": "damonthetran@vul.com",
        "image": "https://randomuser.me/api/portraits/men/1.jpg",
        "phone": "1-679-232-6032",
        "website": "damontran.org",
        "salary": "250,000"
    },
    {
        "id": 4,
        "name": "Sean Orozco",
        "username": "Sean_O",
        "email": "orozco.sean@vul.com",
        "image": "https://randomuser.me/api/portraits/men/77.jpg",
        "phone": "1-970-736-1136",
        "website": "seanorozco.org",
        "salary": "300,000"
    },
    {
        "id": 5,
        "name": "Felicity Esparza",
        "username": "FelicityS",
        "email": "felicityqueen@vul.com",
        "image": "https://randomuser.me/api/portraits/women/40.jpg",
        "phone": "1-670-733-1239",
        "website": "felicityesparza.org",
        "salary": "600,000"
    },
    {
        "id": 6,
        "name": "Jair Martin",
        "username": "MrMartini",
        "email": "jairmartin@vul.com",
        "image": "https://randomuser.me/api/portraits/men/41.jpg",
        "phone": "1-679-912-6032",
        "website": "jairmartin.org",
        "salary": "350,000"
    },
    {
        "id": 7,
        "name": "Harmony Merritt",
        "username": "HarMer",
        "email": "harmonymerritt111@vul.com",
        "image": "https://randomuser.me/api/portraits/women/21.jpg",
        "phone": "1-210-736-4556",
        "website": "harmonymerritt.org",
        "salary": "450,000"
    },
    {
        "id": 8,
        "name": "Omar Crawford",
        "username": "OCraw",
        "email": "omarthecrawford@vul.com",
        "image": "https://randomuser.me/api/portraits/men/54.jpg",
        "phone": "1-670-733-1090",
        "website": "omarcrawford.org",
        "salary": "220,000"
    },
    {
        "id": 9,
        "name": "Brenna David",
        "username": "BreDave",
        "email": "brennadavid@vul.com",
        "image": "https://randomuser.me/api/portraits/women/71.jpg",
        "phone": "1-619-895-3093",
        "website": "brennadavid.org",
        "salary": "470,000"
    },
    {
        "id": 10,
        "name": "Janelle Charles",
        "username": "JaneCharles",
        "email": "janellecharles101@vul.com",
        "image": "https://randomuser.me/api/portraits/women/50.jpg",
        "phone": "1-970-736-1136",
        "website": "janecharles.org",
        "salary": "315,000"
    },
    {
        "id": 11,
        "name": "Vincent Wall",
        "username": "theWall",
        "email": "vincentthewall@vul.com",
        "image": "https://randomuser.me/api/portraits/men/11.jpg",
        "phone": "1-110-733-7897",
        "website": "vincentwall.org",
        "salary": "105,000"
    },
    {
        "id": 12,
        "name": "Damian Walters",
        "username": "DamWalt",
        "email": "damianwalters@vul.com",
        "image": "https://randomuser.me/api/portraits/men/52.jpg",
        "phone": "1-420-932-1783",
        "website": "damianwalters.org",
        "salary": "375,000"
    },
    {
        "id": 13,
        "name": "Francesca Torres",
        "username": "Frances",
        "email": "francescatorres23@vul.com",
        "image": "https://randomuser.me/api/portraits/women/26.jpg",
        "phone": "1-202-555-0123",
        "website": "francescatorres.org",
        "salary": "210,000"
    },
    {
        "id": 14,
        "name": "Jeremiah Andrade",
        "username": "andAndrade",
        "email": "andradejeremiah@vul.com",
        "image": "https://randomuser.me/api/portraits/women/62.jpg",
        "phone": "1-202-555-0150",
        "website": "andradejeremiah.org",
        "salary": "113,000"
    },
    {
        "id": 15,
        "name": "Daniella Andrews",
        "username": "dfordaniella",
        "email": "dannyand@vul.com",
        "image": "https://randomuser.me/api/portraits/women/90.jpg",
        "phone": "1-202-555-0114",
        "website": "daniellaandrews.org",
        "salary": "160,000"
    }
]

function shuffleUsers(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


const fakeUsers = shuffleUsers(users)

export default fakeUsers;