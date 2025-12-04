export const languages = {
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    code: 'es',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'Hola', translation: 'Hello', pronunciation: 'OH-lah' },
          { word: 'Adiós', translation: 'Goodbye', pronunciation: 'ah-DYOHS' },
          { word: 'Por favor', translation: 'Please', pronunciation: 'por fah-VOR' },
          { word: 'Gracias', translation: 'Thank you', pronunciation: 'GRAH-see-ahs' },
          { word: 'Sí', translation: 'Yes', pronunciation: 'see' },
          { word: 'No', translation: 'No', pronunciation: 'noh' },
        ],
        streetSlang: [
          { word: '¿Qué onda?', translation: 'What\'s up? (casual)', pronunciation: 'keh on-dah' },
          { word: 'Chido', translation: 'Cool/awesome', pronunciation: 'chee-doh' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: 'Uno', translation: 'One', pronunciation: 'OO-noh' },
          { word: 'Dos', translation: 'Two', pronunciation: 'dohs' },
          { word: 'Tres', translation: 'Three', pronunciation: 'trehs' },
          { word: 'Cuatro', translation: 'Four', pronunciation: 'KWAH-troh' },
          { word: 'Cinco', translation: 'Five', pronunciation: 'SEEN-koh' },
        ],
        streetSlang: [
          { word: 'Un chingo', translation: 'A ton/a lot', pronunciation: 'oon cheen-goh' },
          { word: 'A montón', translation: 'A bunch/many', pronunciation: 'ah mon-TOHN' },
        ]
      },
      {
        id: 3,
        title: 'Colors',
        words: [
          { word: 'Rojo', translation: 'Red', pronunciation: 'ROH-hoh' },
          { word: 'Azul', translation: 'Blue', pronunciation: 'ah-SOOL' },
          { word: 'Verde', translation: 'Green', pronunciation: 'VEHR-deh' },
          { word: 'Amarillo', translation: 'Yellow', pronunciation: 'ah-mah-REE-yoh' },
          { word: 'Negro', translation: 'Black', pronunciation: 'NEH-groh' },
        ],
        streetSlang: [
          { word: 'Estar en rojo', translation: 'To be broke (in debt)', pronunciation: 'es-TAR en ROH-hoh' },
          { word: 'Verde', translation: 'Money (slang)', pronunciation: 'VEHR-deh' },
        ]
      },
      {
        id: 4,
        title: 'Common Phrases',
        words: [
          { word: 'Por favor', translation: 'Please', pronunciation: 'por fa-vor' },
          { word: 'Gracias', translation: 'Thank you', pronunciation: 'gra-sias' },
          { word: 'De nada', translation: 'You\'re welcome', pronunciation: 'de na-da' },
          { word: 'Lo siento', translation: 'I\'m sorry', pronunciation: 'lo sien-to' },
          { word: 'Sí', translation: 'Yes', pronunciation: 'si' },
        ],
        streetSlang: [
          { word: 'No hay pedo', translation: 'No problem (casual)', pronunciation: 'noh eye PEH-doh' },
          { word: 'Órale', translation: 'Wow/alright (exclamation)', pronunciation: 'OH-rah-leh' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: 'Agua', translation: 'Water', pronunciation: 'ah-gwa' },
          { word: 'Pan', translation: 'Bread', pronunciation: 'pahn' },
          { word: 'Carne', translation: 'Meat', pronunciation: 'kar-neh' },
          { word: 'Fruta', translation: 'Fruit', pronunciation: 'froo-tah' },
          { word: 'Leche', translation: 'Milk', pronunciation: 'leh-cheh' },
        ],
        streetSlang: [
          { word: 'Echarse algo', translation: 'To grab/eat something', pronunciation: 'eh-CHAR-seh AHL-goh' },
          { word: 'Está rico', translation: 'It\'s delicious/tasty', pronunciation: 'es-TAH REE-koh' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: 'Madre', translation: 'Mother', pronunciation: 'mah-dreh' },
          { word: 'Padre', translation: 'Father', pronunciation: 'pah-dreh' },
          { word: 'Hermano', translation: 'Brother', pronunciation: 'er-mah-no' },
          { word: 'Hermana', translation: 'Sister', pronunciation: 'er-mah-nah' },
          { word: 'Amigo', translation: 'Friend', pronunciation: 'ah-mee-go' },
        ],
        streetSlang: [
          { word: 'Carnal', translation: 'Bro/dude (close friend)', pronunciation: 'kar-NAHL' },
          { word: 'Cuate', translation: 'Buddy/pal', pronunciation: 'KWAH-teh' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: 'Cabeza', translation: 'Head', pronunciation: 'kah-beh-sah' },
          { word: 'Ojo', translation: 'Eye', pronunciation: 'oh-ho' },
          { word: 'Mano', translation: 'Hand', pronunciation: 'mah-no' },
          { word: 'Pie', translation: 'Foot', pronunciation: 'pee-eh' },
          { word: 'Boca', translation: 'Mouth', pronunciation: 'boh-kah' },
        ],
        streetSlang: [
          { word: 'Echar un ojo', translation: 'To take a look', pronunciation: 'eh-CHAR oon OH-ho' },
          { word: 'Dar la mano', translation: 'To give a hand (help)', pronunciation: 'dar lah MAH-no' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: 'Perro', translation: 'Dog', pronunciation: 'peh-roh' },
          { word: 'Gato', translation: 'Cat', pronunciation: 'gah-toh' },
          { word: 'Pájaro', translation: 'Bird', pronunciation: 'pah-hah-roh' },
          { word: 'Pez', translation: 'Fish', pronunciation: 'pess' },
          { word: 'Caballo', translation: 'Horse', pronunciation: 'kah-bah-yoh' },
        ],
        streetSlang: [
          { word: 'Estar como perro', translation: 'To be really tired', pronunciation: 'es-TAR KOH-moh PEH-roh' },
          { word: 'Ser un gato', translation: 'To be sneaky/cunning', pronunciation: 'ser oon GAH-toh' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: 'Hoy', translation: 'Today', pronunciation: 'oy' },
          { word: 'Mañana', translation: 'Tomorrow', pronunciation: 'mah-nyah-nah' },
          { word: 'Lunes', translation: 'Monday', pronunciation: 'loo-ness' },
          { word: 'Hora', translation: 'Hour', pronunciation: 'oh-rah' },
          { word: 'Día', translation: 'Day', pronunciation: 'dee-ah' },
        ],
        streetSlang: [
          { word: 'Ahorita', translation: 'Right now/in a bit (flexible)', pronunciation: 'ah-oh-REE-tah' },
          { word: 'Ya mero', translation: 'Almost/just about', pronunciation: 'yah MEH-roh' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: 'Sol', translation: 'Sun', pronunciation: 'sohl' },
          { word: 'Lluvia', translation: 'Rain', pronunciation: 'yoo-vee-ah' },
          { word: 'Nieve', translation: 'Snow', pronunciation: 'nee-eh-veh' },
          { word: 'Viento', translation: 'Wind', pronunciation: 'vee-en-toh' },
          { word: 'Nube', translation: 'Cloud', pronunciation: 'noo-beh' },
        ],
        streetSlang: [
          { word: 'Hace un sol de justicia', translation: 'It\'s really hot (scorching sun)', pronunciation: 'AH-seh oon sohl deh hoos-TEE-see-ah' },
          { word: 'Está lloviendo a cántaros', translation: 'It\'s pouring rain', pronunciation: 'es-TAH yoh-vee-EN-doh ah KAN-tah-rohs' },
        ]
      }
    ]
  },
  french: {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    code: 'fr',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'Bonjour', translation: 'Hello', pronunciation: 'bohn-ZHOOR' },
          { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh ruh-VWAHR' },
          { word: 'S\'il vous plaît', translation: 'Please', pronunciation: 'seel voo PLEH' },
          { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE' },
          { word: 'Oui', translation: 'Yes', pronunciation: 'wee' },
          { word: 'Non', translation: 'No', pronunciation: 'nohn' },
        ],
        streetSlang: [
          { word: 'Salut', translation: 'Hey/Hi (casual)', pronunciation: 'sah-LOO' },
          { word: 'Ciao', translation: 'Bye (casual, borrowed)', pronunciation: 'chow' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: 'Un', translation: 'One', pronunciation: 'uhn' },
          { word: 'Deux', translation: 'Two', pronunciation: 'duh' },
          { word: 'Trois', translation: 'Three', pronunciation: 'trwah' },
          { word: 'Quatre', translation: 'Four', pronunciation: 'KAHT-ruh' },
          { word: 'Cinq', translation: 'Five', pronunciation: 'sank' },
        ],
        streetSlang: [
          { word: 'Une tonne', translation: 'A ton/a lot', pronunciation: 'oon ton' },
          { word: 'Des tonnes', translation: 'Tons of (many)', pronunciation: 'day ton' },
        ]
      },
      {
        id: 3,
        title: 'Colors',
        words: [
          { word: 'Rouge', translation: 'Red', pronunciation: 'roozh' },
          { word: 'Bleu', translation: 'Blue', pronunciation: 'bluh' },
          { word: 'Vert', translation: 'Green', pronunciation: 'vehr' },
          { word: 'Jaune', translation: 'Yellow', pronunciation: 'zhohn' },
          { word: 'Noir', translation: 'Black', pronunciation: 'nwahr' },
        ],
        streetSlang: [
          { word: 'Être dans le rouge', translation: 'To be in debt/broke', pronunciation: 'etr dahn luh roozh' },
          { word: 'Voir la vie en rose', translation: 'To see life positively', pronunciation: 'vwahr lah vee ahn rohz' },
        ]
      },
      {
        id: 4,
        title: 'Common Phrases',
        words: [
          { word: 'S\'il vous plaît', translation: 'Please', pronunciation: 'seel voo pleh' },
          { word: 'Merci', translation: 'Thank you', pronunciation: 'mer-see' },
          { word: 'De rien', translation: 'You\'re welcome', pronunciation: 'duh ree-en' },
          { word: 'Désolé', translation: 'I\'m sorry', pronunciation: 'day-zo-lay' },
          { word: 'Oui', translation: 'Yes', pronunciation: 'wee' },
        ],
        streetSlang: [
          { word: 'Pas de souci', translation: 'No worries (casual)', pronunciation: 'pah duh soo-SEE' },
          { word: 'T\'inquiète', translation: 'Don\'t worry (casual)', pronunciation: 'tan-KYET' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: 'Eau', translation: 'Water', pronunciation: 'oh' },
          { word: 'Pain', translation: 'Bread', pronunciation: 'pan' },
          { word: 'Viande', translation: 'Meat', pronunciation: 'vee-ahnd' },
          { word: 'Fruit', translation: 'Fruit', pronunciation: 'frwee' },
          { word: 'Lait', translation: 'Milk', pronunciation: 'leh' },
        ],
        streetSlang: [
          { word: 'Bouffer', translation: 'To eat (slang)', pronunciation: 'boo-FAY' },
          { word: 'C\'est trop bon', translation: 'It\'s so good/delicious', pronunciation: 'say troh bohn' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: 'Mère', translation: 'Mother', pronunciation: 'mehr' },
          { word: 'Père', translation: 'Father', pronunciation: 'pehr' },
          { word: 'Frère', translation: 'Brother', pronunciation: 'frehr' },
          { word: 'Sœur', translation: 'Sister', pronunciation: 'sur' },
          { word: 'Ami', translation: 'Friend', pronunciation: 'ah-mee' },
        ],
        streetSlang: [
          { word: 'Pote', translation: 'Buddy/mate (casual friend)', pronunciation: 'poht' },
          { word: 'Poto', translation: 'Friend (very casual)', pronunciation: 'poh-TOH' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: 'Tête', translation: 'Head', pronunciation: 'tet' },
          { word: 'Œil', translation: 'Eye', pronunciation: 'uh-y' },
          { word: 'Main', translation: 'Hand', pronunciation: 'man' },
          { word: 'Pied', translation: 'Foot', pronunciation: 'pee-ay' },
          { word: 'Bouche', translation: 'Mouth', pronunciation: 'boosh' },
        ],
        streetSlang: [
          { word: 'Jeter un œil', translation: 'To take a look', pronunciation: 'zhuh-TAY oon uh-y' },
          { word: 'Donner un coup de main', translation: 'To give a hand (help)', pronunciation: 'doh-NAY oon koo duh man' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: 'Chien', translation: 'Dog', pronunciation: 'shee-en' },
          { word: 'Chat', translation: 'Cat', pronunciation: 'shah' },
          { word: 'Oiseau', translation: 'Bird', pronunciation: 'wah-zoh' },
          { word: 'Poisson', translation: 'Fish', pronunciation: 'pwah-son' },
          { word: 'Cheval', translation: 'Horse', pronunciation: 'shuh-vahl' },
        ],
        streetSlang: [
          { word: 'Crever de faim', translation: 'To be starving (like a dog)', pronunciation: 'kruh-VAY duh fan' },
          { word: 'Avoir un chat dans la gorge', translation: 'To have a frog in your throat', pronunciation: 'ah-VWAHR oon shah dahn lah gorzh' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: 'Aujourd\'hui', translation: 'Today', pronunciation: 'oh-zhoor-dwee' },
          { word: 'Demain', translation: 'Tomorrow', pronunciation: 'duh-man' },
          { word: 'Lundi', translation: 'Monday', pronunciation: 'lun-dee' },
          { word: 'Heure', translation: 'Hour', pronunciation: 'ur' },
          { word: 'Jour', translation: 'Day', pronunciation: 'zhoor' },
        ],
        streetSlang: [
          { word: 'Tout à l\'heure', translation: 'In a bit/later', pronunciation: 'toot ah l-ur' },
          { word: 'À tout de suite', translation: 'See you in a minute', pronunciation: 'ah toot duh sweet' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: 'Soleil', translation: 'Sun', pronunciation: 'so-lay' },
          { word: 'Pluie', translation: 'Rain', pronunciation: 'plwee' },
          { word: 'Neige', translation: 'Snow', pronunciation: 'nezh' },
          { word: 'Vent', translation: 'Wind', pronunciation: 'von' },
          { word: 'Nuage', translation: 'Cloud', pronunciation: 'noo-ahzh' },
        ],
        streetSlang: [
          { word: 'Il fait un temps de chien', translation: 'Terrible weather (dog weather)', pronunciation: 'eel fay oon tahn duh shee-en' },
          { word: 'Il pleut des cordes', translation: 'It\'s raining cats and dogs', pronunciation: 'eel pluh day kord' },
        ]
      }
    ]
  },
  german: {
    id: 'german',
    name: 'German',
    flag: '🇩🇪',
    code: 'de',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'Hallo', translation: 'Hello', pronunciation: 'HAH-loh' },
          { word: 'Auf Wiedersehen', translation: 'Goodbye', pronunciation: 'owf VEE-der-zay-en' },
          { word: 'Bitte', translation: 'Please', pronunciation: 'BIT-tuh' },
          { word: 'Danke', translation: 'Thank you', pronunciation: 'DAHN-kuh' },
          { word: 'Ja', translation: 'Yes', pronunciation: 'yah' },
          { word: 'Nein', translation: 'No', pronunciation: 'nine' },
        ],
        streetSlang: [
          { word: 'Na', translation: 'Hey/Well (casual greeting)', pronunciation: 'nah' },
          { word: 'Tschüss', translation: 'Bye (casual)', pronunciation: 'chooss' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: 'Eins', translation: 'One', pronunciation: 'eyns' },
          { word: 'Zwei', translation: 'Two', pronunciation: 'tsvy' },
          { word: 'Drei', translation: 'Three', pronunciation: 'dry' },
          { word: 'Vier', translation: 'Four', pronunciation: 'feer' },
          { word: 'Fünf', translation: 'Five', pronunciation: 'fuhnf' },
        ],
        streetSlang: [
          { word: 'Mega viel', translation: 'A ton/a lot', pronunciation: 'MAY-gah feel' },
          { word: 'Unmengen', translation: 'Loads/masses of', pronunciation: 'OON-meng-en' },
        ]
      },
      {
        id: 3,
        title: 'Colors',
        words: [
          { word: 'Rot', translation: 'Red', pronunciation: 'roht' },
          { word: 'Blau', translation: 'Blue', pronunciation: 'blow' },
          { word: 'Grün', translation: 'Green', pronunciation: 'gruun' },
          { word: 'Gelb', translation: 'Yellow', pronunciation: 'gelp' },
          { word: 'Schwarz', translation: 'Black', pronunciation: 'shvahrts' },
        ],
        streetSlang: [
          { word: 'In den roten Zahlen sein', translation: 'To be in debt', pronunciation: 'in den ROH-ten TSAH-len zine' },
          { word: 'Grün sein', translation: 'To be inexperienced/new', pronunciation: 'gruun zine' },
        ]
      },
      {
        id: 4,
        title: 'Common Phrases',
        words: [
          { word: 'Bitte', translation: 'Please', pronunciation: 'bit-tuh' },
          { word: 'Danke', translation: 'Thank you', pronunciation: 'dahn-kuh' },
          { word: 'Gern geschehen', translation: 'You\'re welcome', pronunciation: 'gehrn guh-sheh-hen' },
          { word: 'Es tut mir leid', translation: 'I\'m sorry', pronunciation: 'es toot meer lite' },
          { word: 'Ja', translation: 'Yes', pronunciation: 'yah' },
        ],
        streetSlang: [
          { word: 'Kein Problem', translation: 'No problem (casual)', pronunciation: 'kine proh-BLEM' },
          { word: 'Alles klar', translation: 'All good/alright', pronunciation: 'AH-les klahr' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: 'Wasser', translation: 'Water', pronunciation: 'vah-ser' },
          { word: 'Brot', translation: 'Bread', pronunciation: 'broht' },
          { word: 'Fleisch', translation: 'Meat', pronunciation: 'flysh' },
          { word: 'Obst', translation: 'Fruit', pronunciation: 'ohpst' },
          { word: 'Milch', translation: 'Milk', pronunciation: 'milkh' },
        ],
        streetSlang: [
          { word: 'Futter', translation: 'Food/grub (slang)', pronunciation: 'FOO-ter' },
          { word: 'Lecker', translation: 'Tasty/delicious', pronunciation: 'LEK-er' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: 'Mutter', translation: 'Mother', pronunciation: 'moo-ter' },
          { word: 'Vater', translation: 'Father', pronunciation: 'fah-ter' },
          { word: 'Bruder', translation: 'Brother', pronunciation: 'broo-der' },
          { word: 'Schwester', translation: 'Sister', pronunciation: 'shves-ter' },
          { word: 'Freund', translation: 'Friend', pronunciation: 'froynt' },
        ],
        streetSlang: [
          { word: 'Kumpel', translation: 'Buddy/mate (casual friend)', pronunciation: 'KOOM-pel' },
          { word: 'Alter', translation: 'Dude/man (very casual)', pronunciation: 'AHL-ter' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: 'Kopf', translation: 'Head', pronunciation: 'kohpf' },
          { word: 'Auge', translation: 'Eye', pronunciation: 'ow-guh' },
          { word: 'Hand', translation: 'Hand', pronunciation: 'hahnt' },
          { word: 'Fuß', translation: 'Foot', pronunciation: 'foos' },
          { word: 'Mund', translation: 'Mouth', pronunciation: 'moont' },
        ],
        streetSlang: [
          { word: 'Ein Auge zudrücken', translation: 'To turn a blind eye', pronunciation: 'ine OW-guh tsoo-DROO-ken' },
          { word: 'Unter die Arme greifen', translation: 'To give a helping hand', pronunciation: 'OON-ter dee AHR-meh GRY-fen' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: 'Hund', translation: 'Dog', pronunciation: 'hoont' },
          { word: 'Katze', translation: 'Cat', pronunciation: 'kaht-suh' },
          { word: 'Vogel', translation: 'Bird', pronunciation: 'foh-gel' },
          { word: 'Fisch', translation: 'Fish', pronunciation: 'fish' },
          { word: 'Pferd', translation: 'Horse', pronunciation: 'pfairt' },
        ],
        streetSlang: [
          { word: 'Wie ein Hund leben', translation: 'To live like a dog (miserably)', pronunciation: 'vee ine hoont LAY-ben' },
          { word: 'Die Katze im Sack kaufen', translation: 'To buy a pig in a poke', pronunciation: 'dee KAHT-suh im zahk KOW-fen' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: 'Heute', translation: 'Today', pronunciation: 'hoy-tuh' },
          { word: 'Morgen', translation: 'Tomorrow', pronunciation: 'mor-gen' },
          { word: 'Montag', translation: 'Monday', pronunciation: 'mohn-tahk' },
          { word: 'Stunde', translation: 'Hour', pronunciation: 'shtoon-duh' },
          { word: 'Tag', translation: 'Day', pronunciation: 'tahk' },
        ],
        streetSlang: [
          { word: 'Gleich', translation: 'In a bit/soon', pronunciation: 'glysh' },
          { word: 'Später', translation: 'Later', pronunciation: 'SHPAY-ter' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: 'Sonne', translation: 'Sun', pronunciation: 'zon-uh' },
          { word: 'Regen', translation: 'Rain', pronunciation: 'ray-gen' },
          { word: 'Schnee', translation: 'Snow', pronunciation: 'shnay' },
          { word: 'Wind', translation: 'Wind', pronunciation: 'vint' },
          { word: 'Wolke', translation: 'Cloud', pronunciation: 'vol-kuh' },
        ],
        streetSlang: [
          { word: 'Hundewetter', translation: 'Terrible weather (dog weather)', pronunciation: 'HOON-deh-VET-ter' },
          { word: 'Es schüttet', translation: 'It\'s pouring (rain)', pronunciation: 'es SHOO-tet' },
        ]
      }
    ]
  },
  korean: {
    id: 'korean',
    name: 'Korean',
    flag: '🇰🇷',
    code: 'ko',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: '안녕하세요', translation: 'Hello', pronunciation: 'ahn-nyung-ha-se-yo', romanji: 'Annyeonghaseyo' },
          { word: '안녕히 계세요', translation: 'Goodbye (to person staying)', pronunciation: 'ahn-nyung-hee geh-seh-yo', romanji: 'Annyeonghi gyeseyo' },
          { word: '부탁합니다', translation: 'Please', pronunciation: 'boo-tak-hap-nee-da', romanji: 'Butakhamnida' },
          { word: '감사합니다', translation: 'Thank you', pronunciation: 'gam-sa-hap-nee-da', romanji: 'Gamsahamnida' },
          { word: '네', translation: 'Yes', pronunciation: 'neh', romanji: 'Ne' },
          { word: '아니요', translation: 'No', pronunciation: 'ah-nee-yo', romanji: 'Aniyo' },
        ],
        streetSlang: [
          { word: '안녕', translation: 'Hey/Hi (casual)', pronunciation: 'an-nyeong', romanji: 'Annyeong' },
          { word: '잘 가', translation: 'Bye (casual)', pronunciation: 'jal ga', romanji: 'Jal ga' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: '하나', translation: 'One', pronunciation: 'hah-nah', romanji: 'Hana' },
          { word: '둘', translation: 'Two', pronunciation: 'dool', romanji: 'Dul' },
          { word: '셋', translation: 'Three', pronunciation: 'seht', romanji: 'Set' },
          { word: '넷', translation: 'Four', pronunciation: 'neht', romanji: 'Net' },
          { word: '다섯', translation: 'Five', pronunciation: 'dah-seot', romanji: 'Daseot' },
        ],
        streetSlang: [
          { word: '대박', translation: 'Wow/jackpot (when surprised by a number/amount)', pronunciation: 'dae-bak', romanji: 'Daebak' },
          { word: '쩐다', translation: 'That\'s a lot/expensive', pronunciation: 'jjeon-da', romanji: 'Jjeonda' },
        ]
      },
      {
        id: 3,
        title: 'Colors',
        words: [
          { word: '빨간색', translation: 'Red', pronunciation: 'ppal-gan-saek', romanji: 'Ppalgan-saek' },
          { word: '파란색', translation: 'Blue', pronunciation: 'pa-ran-saek', romanji: 'Paran-saek' },
          { word: '초록색', translation: 'Green', pronunciation: 'cho-rok-saek', romanji: 'Chorok-saek' },
          { word: '노란색', translation: 'Yellow', pronunciation: 'no-ran-saek', romanji: 'Noran-saek' },
          { word: '검은색', translation: 'Black', pronunciation: 'geo-meun-saek', romanji: 'Geomeun-saek' },
        ],
        streetSlang: [
          { word: '빨간불', translation: 'Red light (stop/danger)', pronunciation: 'ppal-gan-bul', romanji: 'Ppalganbul' },
          { word: '초록불', translation: 'Green light (go/okay)', pronunciation: 'cho-rok-bul', romanji: 'Chorokbul' },
        ]
      },
      {
        id: 4,
        title: 'Greetings',
        words: [
          { word: '안녕하세요', translation: 'Hello', pronunciation: 'an-nyeong-ha-se-yo', romanji: 'Annyeonghaseyo' },
          { word: '감사합니다', translation: 'Thank you', pronunciation: 'gam-sa-ham-ni-da', romanji: 'Gamsahamnida' },
          { word: '미안해요', translation: 'Sorry', pronunciation: 'mi-an-hae-yo', romanji: 'Mianhaeyo' },
          { word: '괜찮아요', translation: 'It\'s okay', pronunciation: 'gwaen-chan-a-yo', romanji: 'Gwaenchanayo' },
          { word: '안녕히 가세요', translation: 'Goodbye', pronunciation: 'an-nyeong-hi ga-se-yo', romanji: 'Annyeonghi gaseyo' },
        ],
        streetSlang: [
          { word: '괜찮아', translation: 'It\'s fine (casual)', pronunciation: 'gwaen-chan-a', romanji: 'Gwaenchana' },
          { word: '별말씀을', translation: 'Don\'t mention it (casual)', pronunciation: 'byeol-mal-sseum-eul', romanji: 'Byeolmalsseumeul' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: '물', translation: 'Water', pronunciation: 'mul', romanji: 'Mul' },
          { word: '빵', translation: 'Bread', pronunciation: 'ppang', romanji: 'Ppang' },
          { word: '고기', translation: 'Meat', pronunciation: 'go-gi', romanji: 'Gogi' },
          { word: '과일', translation: 'Fruit', pronunciation: 'gwa-il', romanji: 'Gwail' },
          { word: '우유', translation: 'Milk', pronunciation: 'u-yu', romanji: 'Uyu' },
        ],
        streetSlang: [
          { word: '맛있어', translation: 'It\'s delicious (casual)', pronunciation: 'ma-si-sseo', romanji: 'Masisseo' },
          { word: '꿀맛', translation: 'Honey taste (super tasty)', pronunciation: 'kkul-mat', romanji: 'Kkulmat' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: '어머니', translation: 'Mother', pronunciation: 'eo-meo-ni', romanji: 'Eomeoni' },
          { word: '아버지', translation: 'Father', pronunciation: 'a-beo-ji', romanji: 'Abeoji' },
          { word: '형제', translation: 'Brother', pronunciation: 'hyeong-je', romanji: 'Hyeongje' },
          { word: '자매', translation: 'Sister', pronunciation: 'ja-mae', romanji: 'Jamae' },
          { word: '친구', translation: 'Friend', pronunciation: 'chin-gu', romanji: 'Chingu' },
        ],
        streetSlang: [
          { word: '형', translation: 'Bro (to older male friend)', pronunciation: 'hyeong', romanji: 'Hyeong' },
          { word: '누나', translation: 'Noona (to older female friend)', pronunciation: 'nu-na', romanji: 'Nuna' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: '머리', translation: 'Head', pronunciation: 'meo-ri', romanji: 'Meori' },
          { word: '눈', translation: 'Eye', pronunciation: 'nun', romanji: 'Nun' },
          { word: '손', translation: 'Hand', pronunciation: 'son', romanji: 'Son' },
          { word: '발', translation: 'Foot', pronunciation: 'bal', romanji: 'Bal' },
          { word: '입', translation: 'Mouth', pronunciation: 'ip', romanji: 'Ip' },
        ],
        streetSlang: [
          { word: '눈치', translation: 'Social awareness/reading the room', pronunciation: 'nun-chi', romanji: 'Nunchi' },
          { word: '손이 크다', translation: 'To be generous (big hands)', pronunciation: 'son-i keu-da', romanji: 'Soni keuda' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: '개', translation: 'Dog', pronunciation: 'gae', romanji: 'Gae' },
          { word: '고양이', translation: 'Cat', pronunciation: 'go-yang-i', romanji: 'Goyangi' },
          { word: '새', translation: 'Bird', pronunciation: 'sae', romanji: 'Sae' },
          { word: '물고기', translation: 'Fish', pronunciation: 'mul-go-gi', romanji: 'Mulgogi' },
          { word: '말', translation: 'Horse', pronunciation: 'mal', romanji: 'Mal' },
        ],
        streetSlang: [
          { word: '개꿀', translation: 'Super lucky/awesome (dog honey)', pronunciation: 'gae-kkul', romanji: 'Gaekkul' },
          { word: '고양이 같은', translation: 'Cat-like (sneaky/cute)', pronunciation: 'go-yang-i gat-eun', romanji: 'Goyangi gateun' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: '오늘', translation: 'Today', pronunciation: 'o-neul', romanji: 'Oneul' },
          { word: '내일', translation: 'Tomorrow', pronunciation: 'nae-il', romanji: 'Naeil' },
          { word: '월요일', translation: 'Monday', pronunciation: 'wol-yo-il', romanji: 'Wolyoil' },
          { word: '시간', translation: 'Hour', pronunciation: 'si-gan', romanji: 'Sigan' },
          { word: '날', translation: 'Day', pronunciation: 'nal', romanji: 'Nal' },
        ],
        streetSlang: [
          { word: '지금', translation: 'Right now', pronunciation: 'ji-geum', romanji: 'Jigeum' },
          { word: '나중에', translation: 'Later', pronunciation: 'na-jung-e', romanji: 'Najunge' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: '태양', translation: 'Sun', pronunciation: 'tae-yang', romanji: 'Taeyang' },
          { word: '비', translation: 'Rain', pronunciation: 'bi', romanji: 'Bi' },
          { word: '눈', translation: 'Snow', pronunciation: 'nun', romanji: 'Nun' },
          { word: '바람', translation: 'Wind', pronunciation: 'ba-ram', romanji: 'Baram' },
          { word: '구름', translation: 'Cloud', pronunciation: 'gu-reum', romanji: 'Gureum' },
        ],
        streetSlang: [
          { word: '비 오는 날', translation: 'Rainy day (bad day)', pronunciation: 'bi o-neun nal', romanji: 'Bi oneun nal' },
          { word: '날씨가 좋다', translation: 'Good weather (good mood)', pronunciation: 'nal-ssi-ga jo-ta', romanji: 'Nalssiga jota' },
        ]
      }
    ]
  },
  portuguese: {
    id: 'portuguese',
    name: 'Portuguese',
    flag: '🇵🇹',
    code: 'pt',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'Olá', translation: 'Hello', pronunciation: 'oh-LAH' },
          { word: 'Tchau', translation: 'Goodbye', pronunciation: 'chow' },
          { word: 'Por favor', translation: 'Please', pronunciation: 'por fah-VOR' },
          { word: 'Obrigado', translation: 'Thank you', pronunciation: 'oh-bree-GAH-doo' },
          { word: 'Sim', translation: 'Yes', pronunciation: 'seem' },
          { word: 'Não', translation: 'No', pronunciation: 'now' },
        ],
        streetSlang: [
          { word: 'E aí', translation: 'What\'s up? (casual)', pronunciation: 'eh eye' },
          { word: 'Valeu', translation: 'Thanks (casual)', pronunciation: 'vah-LEH-oo' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: 'Um', translation: 'One', pronunciation: 'oong' },
          { word: 'Dois', translation: 'Two', pronunciation: 'doysh' },
          { word: 'Três', translation: 'Three', pronunciation: 'trehs' },
          { word: 'Quatro', translation: 'Four', pronunciation: 'KWAH-troo' },
          { word: 'Cinco', translation: 'Five', pronunciation: 'SEEN-koo' },
        ],
        streetSlang: [
          { word: 'Um monte', translation: 'A ton/a lot', pronunciation: 'oon MON-teh' },
          { word: 'Pra caramba', translation: 'A whole bunch', pronunciation: 'prah kah-RAHM-bah' },
        ]
      },
      {
        id: 3,
        title: 'Common Phrases',
        words: [
          { word: 'Como você está?', translation: 'How are you?', pronunciation: 'KOH-moo voh-SAY ehs-TAH' },
          { word: 'Bem', translation: 'Good', pronunciation: 'bayng' },
          { word: 'Onde está?', translation: 'Where is?', pronunciation: 'OHN-deh ehs-TAH' },
          { word: 'Desculpe', translation: 'I\'m sorry', pronunciation: 'dehs-KOOL-peh' },
          { word: 'De nada', translation: 'You\'re welcome', pronunciation: 'deh NAH-dah' },
        ],
        streetSlang: [
          { word: 'Tranquilo', translation: 'No worries (casual)', pronunciation: 'trahn-KEE-loh' },
          { word: 'Firmeza', translation: 'Cool/alright', pronunciation: 'feer-MEH-zah' },
        ]
      },
      {
        id: 4,
        title: 'Colors',
        words: [
          { word: 'Vermelho', translation: 'Red', pronunciation: 'vehr-MEH-lyo' },
          { word: 'Azul', translation: 'Blue', pronunciation: 'ah-ZOOL' },
          { word: 'Verde', translation: 'Green', pronunciation: 'VEHR-deh' },
          { word: 'Amarelo', translation: 'Yellow', pronunciation: 'ah-mah-REH-loh' },
          { word: 'Preto', translation: 'Black', pronunciation: 'PREH-toh' },
        ],
        streetSlang: [
          { word: 'Estar no vermelho', translation: 'To be in debt', pronunciation: 'es-TAR noh vehr-MEH-lyo' },
          { word: 'Verde', translation: 'Money (slang)', pronunciation: 'VEHR-deh' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: 'Água', translation: 'Water', pronunciation: 'ah-gwa' },
          { word: 'Pão', translation: 'Bread', pronunciation: 'pow' },
          { word: 'Carne', translation: 'Meat', pronunciation: 'kar-neh' },
          { word: 'Fruta', translation: 'Fruit', pronunciation: 'froo-tah' },
          { word: 'Leite', translation: 'Milk', pronunciation: 'lay-teh' },
        ],
        streetSlang: [
          { word: 'Comer', translation: 'To eat (casual)', pronunciation: 'koh-MEHR' },
          { word: 'Tá gostoso', translation: 'It\'s tasty', pronunciation: 'tah gohs-TOH-soo' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: 'Mãe', translation: 'Mother', pronunciation: 'mah-eh' },
          { word: 'Pai', translation: 'Father', pronunciation: 'pie' },
          { word: 'Irmão', translation: 'Brother', pronunciation: 'eer-mow' },
          { word: 'Irmã', translation: 'Sister', pronunciation: 'eer-mah' },
          { word: 'Amigo', translation: 'Friend', pronunciation: 'ah-mee-go' },
        ],
        streetSlang: [
          { word: 'Mano', translation: 'Bro/dude (casual)', pronunciation: 'MAH-noh' },
          { word: 'Cara', translation: 'Dude/guy', pronunciation: 'KAH-rah' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: 'Cabeça', translation: 'Head', pronunciation: 'kah-beh-sah' },
          { word: 'Olho', translation: 'Eye', pronunciation: 'oh-lyo' },
          { word: 'Mão', translation: 'Hand', pronunciation: 'mow' },
          { word: 'Pé', translation: 'Foot', pronunciation: 'peh' },
          { word: 'Boca', translation: 'Mouth', pronunciation: 'boh-kah' },
        ],
        streetSlang: [
          { word: 'Dar uma olhada', translation: 'To take a look', pronunciation: 'dar OO-mah oh-LYAH-dah' },
          { word: 'Dar uma mão', translation: 'To give a hand (help)', pronunciation: 'dar OO-mah mow' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: 'Cachorro', translation: 'Dog', pronunciation: 'kah-shoh-roh' },
          { word: 'Gato', translation: 'Cat', pronunciation: 'gah-toh' },
          { word: 'Pássaro', translation: 'Bird', pronunciation: 'pah-sah-roh' },
          { word: 'Peixe', translation: 'Fish', pronunciation: 'pay-sheh' },
          { word: 'Cavalo', translation: 'Horse', pronunciation: 'kah-vah-loh' },
        ],
        streetSlang: [
          { word: 'Cansado que nem cachorro', translation: 'Tired as a dog', pronunciation: 'kahn-SAH-doo keh nem kah-SHOH-roh' },
          { word: 'Vida de gato', translation: 'Cat life (easy life)', pronunciation: 'VEE-dah deh GAH-toh' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: 'Hoje', translation: 'Today', pronunciation: 'oh-zheh' },
          { word: 'Amanhã', translation: 'Tomorrow', pronunciation: 'ah-mahn-yah' },
          { word: 'Segunda-feira', translation: 'Monday', pronunciation: 'seh-goon-dah fay-rah' },
          { word: 'Hora', translation: 'Hour', pronunciation: 'oh-rah' },
          { word: 'Dia', translation: 'Day', pronunciation: 'dee-ah' },
        ],
        streetSlang: [
          { word: 'Agora', translation: 'Right now', pronunciation: 'ah-GOH-rah' },
          { word: 'Depois', translation: 'Later', pronunciation: 'deh-POYS' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: 'Sol', translation: 'Sun', pronunciation: 'sohl' },
          { word: 'Chuva', translation: 'Rain', pronunciation: 'shoo-vah' },
          { word: 'Neve', translation: 'Snow', pronunciation: 'neh-veh' },
          { word: 'Vento', translation: 'Wind', pronunciation: 'ven-toh' },
          { word: 'Nuvem', translation: 'Cloud', pronunciation: 'noo-vem' },
        ],
        streetSlang: [
          { word: 'Fazer um sol de rachar', translation: 'Scorching hot sun', pronunciation: 'fah-ZEHR oon sohl deh rah-SHAR' },
          { word: 'Chuva torrencial', translation: 'Torrential rain', pronunciation: 'SHOO-vah tohr-ren-SEE-ahl' },
        ]
      }
    ]
  },
  japanese: {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    code: 'ja',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'こんにちは', translation: 'Hello', pronunciation: 'kon-nee-chee-wah', romanji: 'Konnichiwa' },
          { word: 'さようなら', translation: 'Goodbye', pronunciation: 'sah-yoh-nah-rah', romanji: 'Sayonara' },
          { word: 'お願いします', translation: 'Please', pronunciation: 'oh-neh-gah-ee shee-mahs', romanji: 'Onegaishimasu' },
          { word: 'ありがとう', translation: 'Thank you', pronunciation: 'ah-ree-gah-toh', romanji: 'Arigatou' },
          { word: 'はい', translation: 'Yes', pronunciation: 'hai', romanji: 'Hai' },
          { word: 'いいえ', translation: 'No', pronunciation: 'ee-eh', romanji: 'Iie' },
        ],
        streetSlang: [
          { word: 'やあ', translation: 'Hey/Hi (casual)', pronunciation: 'yaa', romanji: 'Yaa' },
          { word: 'バイバイ', translation: 'Bye bye (casual)', pronunciation: 'bai-bai', romanji: 'Baibai' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: '一', translation: 'One', pronunciation: 'ee-chee', romanji: 'Ichi' },
          { word: '二', translation: 'Two', pronunciation: 'nee', romanji: 'Ni' },
          { word: '三', translation: 'Three', pronunciation: 'sahn', romanji: 'San' },
          { word: '四', translation: 'Four', pronunciation: 'shee', romanji: 'Shi' },
          { word: '五', translation: 'Five', pronunciation: 'goh', romanji: 'Go' },
        ],
        streetSlang: [
          { word: 'めちゃくちゃ', translation: 'A ton/crazy amount', pronunciation: 'me-cha-ku-cha', romanji: 'Mechakucha' },
          { word: 'すごい', translation: 'Amazing/a lot', pronunciation: 'su-goi', romanji: 'Sugoi' },
        ]
      },
      {
        id: 3,
        title: 'Common Phrases',
        words: [
          { word: 'お元気ですか?', translation: 'How are you?', pronunciation: 'oh-gen-kee des-kah', romanji: 'Ogenki desu ka?' },
          { word: '良い', translation: 'Good', pronunciation: 'ee-ee', romanji: 'Ii' },
          { word: 'どこですか?', translation: 'Where is?', pronunciation: 'doh-koh des-kah', romanji: 'Doko desu ka?' },
          { word: 'すみません', translation: 'I\'m sorry', pronunciation: 'soo-mee-mah-sen', romanji: 'Sumimasen' },
          { word: 'どういたしまして', translation: 'You\'re welcome', pronunciation: 'doh-ee-tah-shee-mah-sheh-teh', romanji: 'Douitashimashite' },
        ],
        streetSlang: [
          { word: '大丈夫', translation: 'It\'s fine/okay (casual)', pronunciation: 'dai-jou-bu', romanji: 'Daijoubu' },
          { word: '気にしないで', translation: 'Don\'t worry about it', pronunciation: 'ki-ni-shi-nai-de', romanji: 'Kini shinaide' },
        ]
      },
      {
        id: 4,
        title: 'Colors',
        words: [
          { word: '赤', translation: 'Red', pronunciation: 'aka', romanji: 'Aka' },
          { word: '青', translation: 'Blue', pronunciation: 'ao', romanji: 'Ao' },
          { word: '緑', translation: 'Green', pronunciation: 'midori', romanji: 'Midori' },
          { word: '黄色', translation: 'Yellow', pronunciation: 'kiiro', romanji: 'Kiiro' },
          { word: '黒', translation: 'Black', pronunciation: 'kuro', romanji: 'Kuro' },
        ],
        streetSlang: [
          { word: '赤字', translation: 'In the red (debt)', pronunciation: 'aka-ji', romanji: 'Akaji' },
          { word: '黒字', translation: 'In the black (profit)', pronunciation: 'kuro-ji', romanji: 'Kuroji' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: '水', translation: 'Water', pronunciation: 'mizu', romanji: 'Mizu' },
          { word: 'パン', translation: 'Bread', pronunciation: 'pan', romanji: 'Pan' },
          { word: '肉', translation: 'Meat', pronunciation: 'niku', romanji: 'Niku' },
          { word: '果物', translation: 'Fruit', pronunciation: 'kudamono', romanji: 'Kudamono' },
          { word: '牛乳', translation: 'Milk', pronunciation: 'gyuunyuu', romanji: 'Gyuunyuu' },
        ],
        streetSlang: [
          { word: '食べる', translation: 'To eat (casual)', pronunciation: 'ta-be-ru', romanji: 'Taberu' },
          { word: 'うまい', translation: 'Delicious/tasty', pronunciation: 'u-ma-i', romanji: 'Umai' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: '母', translation: 'Mother', pronunciation: 'haha', romanji: 'Haha' },
          { word: '父', translation: 'Father', pronunciation: 'chichi', romanji: 'Chichi' },
          { word: '兄弟', translation: 'Brother', pronunciation: 'kyoudai', romanji: 'Kyoudai' },
          { word: '姉妹', translation: 'Sister', pronunciation: 'shimai', romanji: 'Shimai' },
          { word: '友達', translation: 'Friend', pronunciation: 'tomodachi', romanji: 'Tomodachi' },
        ],
        streetSlang: [
          { word: '仲間', translation: 'Buddy/mate (close friend)', pronunciation: 'na-ka-ma', romanji: 'Nakama' },
          { word: '相棒', translation: 'Partner/buddy', pronunciation: 'ai-bou', romanji: 'Aibou' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: '頭', translation: 'Head', pronunciation: 'atama', romanji: 'Atama' },
          { word: '目', translation: 'Eye', pronunciation: 'me', romanji: 'Me' },
          { word: '手', translation: 'Hand', pronunciation: 'te', romanji: 'Te' },
          { word: '足', translation: 'Foot', pronunciation: 'ashi', romanji: 'Ashi' },
          { word: '口', translation: 'Mouth', pronunciation: 'kuchi', romanji: 'Kuchi' },
        ],
        streetSlang: [
          { word: '目を通す', translation: 'To take a look', pronunciation: 'me-wo-too-su', romanji: 'Me wo toosu' },
          { word: '手を貸す', translation: 'To give a hand (help)', pronunciation: 'te-wo-ka-su', romanji: 'Te wo kasu' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: '犬', translation: 'Dog', pronunciation: 'inu', romanji: 'Inu' },
          { word: '猫', translation: 'Cat', pronunciation: 'neko', romanji: 'Neko' },
          { word: '鳥', translation: 'Bird', pronunciation: 'tori', romanji: 'Tori' },
          { word: '魚', translation: 'Fish', pronunciation: 'sakana', romanji: 'Sakana' },
          { word: '馬', translation: 'Horse', pronunciation: 'uma', romanji: 'Uma' },
        ],
        streetSlang: [
          { word: '犬のように疲れる', translation: 'Tired like a dog', pronunciation: 'inu-no-yo-ni tsu-ka-re-ru', romanji: 'Inu no youni tsukareru' },
          { word: '猫のような', translation: 'Cat-like (sneaky)', pronunciation: 'neko-no-yo-na', romanji: 'Neko no youna' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: '今日', translation: 'Today', pronunciation: 'kyou', romanji: 'Kyou' },
          { word: '明日', translation: 'Tomorrow', pronunciation: 'ashita', romanji: 'Ashita' },
          { word: '月曜日', translation: 'Monday', pronunciation: 'getsuyoubi', romanji: 'Getsuyoubi' },
          { word: '時間', translation: 'Hour', pronunciation: 'jikan', romanji: 'Jikan' },
          { word: '日', translation: 'Day', pronunciation: 'hi', romanji: 'Hi' },
        ],
        streetSlang: [
          { word: '今すぐ', translation: 'Right now', pronunciation: 'ima-su-gu', romanji: 'Ima sugu' },
          { word: '後で', translation: 'Later', pronunciation: 'ato-de', romanji: 'Ato de' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: '太陽', translation: 'Sun', pronunciation: 'taiyou', romanji: 'Taiyou' },
          { word: '雨', translation: 'Rain', pronunciation: 'ame', romanji: 'Ame' },
          { word: '雪', translation: 'Snow', pronunciation: 'yuki', romanji: 'Yuki' },
          { word: '風', translation: 'Wind', pronunciation: 'kaze', romanji: 'Kaze' },
          { word: '雲', translation: 'Cloud', pronunciation: 'kumo', romanji: 'Kumo' },
        ],
        streetSlang: [
          { word: '焼けつくような暑さ', translation: 'Scorching heat', pronunciation: 'ya-ke-tsu-ku-yo-na a-tsu-sa', romanji: 'Yaketsuku youna atsusa' },
          { word: '土砂降り', translation: 'Downpour', pronunciation: 'do-sha-bu-ri', romanji: 'Doshaburi' },
        ]
      }
    ]
  },
  chinese: {
    id: 'chinese',
    name: 'Chinese',
    flag: '🇨🇳',
    code: 'zh',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: '你好', translation: 'Hello', pronunciation: 'nee-hah-oh', romanji: 'Nǐ hǎo' },
          { word: '再见', translation: 'Goodbye', pronunciation: 'zai-jee-en', romanji: 'Zàijiàn' },
          { word: '请', translation: 'Please', pronunciation: 'cheeng', romanji: 'Qǐng' },
          { word: '谢谢', translation: 'Thank you', pronunciation: 'shieh-shieh', romanji: 'Xièxiè' },
          { word: '是', translation: 'Yes', pronunciation: 'shir', romanji: 'Shì' },
          { word: '不', translation: 'No', pronunciation: 'boo', romanji: 'Bù' },
        ],
        streetSlang: [
          { word: '嗨', translation: 'Hey/Hi (casual)', pronunciation: 'hai', romanji: 'Hāi' },
          { word: '拜拜', translation: 'Bye bye (casual)', pronunciation: 'bai-bai', romanji: 'Bàibài' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: '一', translation: 'One', pronunciation: 'ee', romanji: 'Yī' },
          { word: '二', translation: 'Two', pronunciation: 'ur', romanji: 'Èr' },
          { word: '三', translation: 'Three', pronunciation: 'sahn', romanji: 'Sān' },
          { word: '四', translation: 'Four', pronunciation: 'sir', romanji: 'Sì' },
          { word: '五', translation: 'Five', pronunciation: 'woo', romanji: 'Wǔ' },
        ],
        streetSlang: [
          { word: '很多', translation: 'A lot/many', pronunciation: 'hen duo', romanji: 'Hěn duō' },
          { word: '超级多', translation: 'Super many', pronunciation: 'chao ji duo', romanji: 'Chāojí duō' },
        ]
      },
      {
        id: 3,
        title: 'Common Phrases',
        words: [
          { word: '你好吗?', translation: 'How are you?', pronunciation: 'nee-hah-oh-mah', romanji: 'Nǐ hǎo ma?' },
          { word: '好', translation: 'Good', pronunciation: 'hah-oh', romanji: 'Hǎo' },
          { word: '在哪里?', translation: 'Where is?', pronunciation: 'zai-nah-lee', romanji: 'Zài nǎlǐ?' },
          { word: '对不起', translation: 'I\'m sorry', pronunciation: 'dway-boo-chee', romanji: 'Duìbùqǐ' },
          { word: '不客气', translation: 'You\'re welcome', pronunciation: 'boo-keh-chee', romanji: 'Bù kèqì' },
        ],
        streetSlang: [
          { word: '没事', translation: 'It\'s fine/no problem (casual)', pronunciation: 'mei shi', romanji: 'Méishì' },
          { word: '别客气', translation: 'Don\'t mention it', pronunciation: 'bie ke qi', romanji: 'Bié kèqì' },
        ]
      },
      {
        id: 4,
        title: 'Colors',
        words: [
          { word: '红色', translation: 'Red', pronunciation: 'hóng sè', romanji: 'Hóng sè' },
          { word: '蓝色', translation: 'Blue', pronunciation: 'lán sè', romanji: 'Lán sè' },
          { word: '绿色', translation: 'Green', pronunciation: 'lǜ sè', romanji: 'Lǜ sè' },
          { word: '黄色', translation: 'Yellow', pronunciation: 'huáng sè', romanji: 'Huáng sè' },
          { word: '黑色', translation: 'Black', pronunciation: 'hēi sè', romanji: 'Hēi sè' },
        ],
        streetSlang: [
          { word: '赤字', translation: 'In the red (debt)', pronunciation: 'chi zi', romanji: 'Chìzì' },
          { word: '黑钱', translation: 'Black money (illegal money)', pronunciation: 'hei qian', romanji: 'Hēi qián' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: '水', translation: 'Water', pronunciation: 'shuǐ', romanji: 'Shuǐ' },
          { word: '面包', translation: 'Bread', pronunciation: 'miànbāo', romanji: 'Miànbāo' },
          { word: '肉', translation: 'Meat', pronunciation: 'ròu', romanji: 'Ròu' },
          { word: '水果', translation: 'Fruit', pronunciation: 'shuǐguǒ', romanji: 'Shuǐguǒ' },
          { word: '牛奶', translation: 'Milk', pronunciation: 'niúnǎi', romanji: 'Niúnǎi' },
        ],
        streetSlang: [
          { word: '吃', translation: 'To eat (casual)', pronunciation: 'chi', romanji: 'Chī' },
          { word: '好吃', translation: 'Delicious/tasty', pronunciation: 'hao chi', romanji: 'Hǎochī' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: '母亲', translation: 'Mother', pronunciation: 'mǔqīn', romanji: 'Mǔqīn' },
          { word: '父亲', translation: 'Father', pronunciation: 'fùqīn', romanji: 'Fùqīn' },
          { word: '兄弟', translation: 'Brother', pronunciation: 'xiōngdì', romanji: 'Xiōngdì' },
          { word: '姐妹', translation: 'Sister', pronunciation: 'jiěmèi', romanji: 'Jiěmèi' },
          { word: '朋友', translation: 'Friend', pronunciation: 'péngyou', romanji: 'Péngyou' },
        ],
        streetSlang: [
          { word: '哥们', translation: 'Bro/buddy (casual friend)', pronunciation: 'ge men', romanji: 'Gēmen' },
          { word: '兄弟', translation: 'Brother/buddy', pronunciation: 'xiong di', romanji: 'Xiōngdì' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: '头', translation: 'Head', pronunciation: 'tóu', romanji: 'Tóu' },
          { word: '眼睛', translation: 'Eye', pronunciation: 'yǎnjīng', romanji: 'Yǎnjīng' },
          { word: '手', translation: 'Hand', pronunciation: 'shǒu', romanji: 'Shǒu' },
          { word: '脚', translation: 'Foot', pronunciation: 'jiǎo', romanji: 'Jiǎo' },
          { word: '嘴', translation: 'Mouth', pronunciation: 'zuǐ', romanji: 'Zuǐ' },
        ],
        streetSlang: [
          { word: '看一眼', translation: 'To take a look', pronunciation: 'kan yi yan', romanji: 'Kàn yī yǎn' },
          { word: '帮把手', translation: 'To give a hand (help)', pronunciation: 'bang ba shou', romanji: 'Bāng bǎ shǒu' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: '狗', translation: 'Dog', pronunciation: 'gǒu', romanji: 'Gǒu' },
          { word: '猫', translation: 'Cat', pronunciation: 'māo', romanji: 'Māo' },
          { word: '鸟', translation: 'Bird', pronunciation: 'niǎo', romanji: 'Niǎo' },
          { word: '鱼', translation: 'Fish', pronunciation: 'yú', romanji: 'Yú' },
          { word: '马', translation: 'Horse', pronunciation: 'mǎ', romanji: 'Mǎ' },
        ],
        streetSlang: [
          { word: '累成狗', translation: 'Tired as a dog', pronunciation: 'lei cheng gou', romanji: 'Lèi chéng gǒu' },
          { word: '像猫一样', translation: 'Cat-like (sneaky)', pronunciation: 'xiang mao yi yang', romanji: 'Xiàng māo yīyàng' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: '今天', translation: 'Today', pronunciation: 'jīntiān', romanji: 'Jīntiān' },
          { word: '明天', translation: 'Tomorrow', pronunciation: 'míngtiān', romanji: 'Míngtiān' },
          { word: '星期一', translation: 'Monday', pronunciation: 'xīngqīyī', romanji: 'Xīngqīyī' },
          { word: '小时', translation: 'Hour', pronunciation: 'xiǎoshí', romanji: 'Xiǎoshí' },
          { word: '天', translation: 'Day', pronunciation: 'tiān', romanji: 'Tiān' },
        ],
        streetSlang: [
          { word: '现在', translation: 'Right now', pronunciation: 'xian zai', romanji: 'Xiànzài' },
          { word: '待会儿', translation: 'Later', pronunciation: 'dai hui er', romanji: 'Dàihuìr' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: '太阳', translation: 'Sun', pronunciation: 'tàiyáng', romanji: 'Tàiyáng' },
          { word: '雨', translation: 'Rain', pronunciation: 'yǔ', romanji: 'Yǔ' },
          { word: '雪', translation: 'Snow', pronunciation: 'xuě', romanji: 'Xuě' },
          { word: '风', translation: 'Wind', pronunciation: 'fēng', romanji: 'Fēng' },
          { word: '云', translation: 'Cloud', pronunciation: 'yún', romanji: 'Yún' },
        ],
        streetSlang: [
          { word: '热死了', translation: 'Scorching hot', pronunciation: 're si le', romanji: 'Rè sǐle' },
          { word: '下大雨', translation: 'Heavy rain', pronunciation: 'xia da yu', romanji: 'Xià dàyǔ' },
        ]
      }
    ]
  },
  russian: {
    id: 'russian',
    name: 'Russian',
    flag: '🇷🇺',
    code: 'ru',
    lessons: [
      {
        id: 1,
        title: 'Greetings & Basics',
        words: [
          { word: 'Привет', translation: 'Hello', pronunciation: 'pri-vyet' },
          { word: 'Спасибо', translation: 'Thank you', pronunciation: 'spa-see-boh' },
          { word: 'Извините', translation: 'Sorry', pronunciation: 'iz-vi-nee-tye' },
          { word: 'Пожалуйста', translation: 'Please', pronunciation: 'pah-zhah-loo-sta' },
          { word: 'До свидания', translation: 'Goodbye', pronunciation: 'dah svi-dah-nee-ya' },
        ],
        streetSlang: [
          { word: 'Приветик', translation: 'Hey/Hi (very casual)', pronunciation: 'pri-VYE-tik' },
          { word: 'Пока', translation: 'Bye (casual)', pronunciation: 'pa-KAH' },
        ]
      },
      {
        id: 2,
        title: 'Numbers',
        words: [
          { word: 'Один', translation: 'One', pronunciation: 'ah-deen' },
          { word: 'Два', translation: 'Two', pronunciation: 'dvah' },
          { word: 'Три', translation: 'Three', pronunciation: 'tree' },
          { word: 'Четыре', translation: 'Four', pronunciation: 'chye-tee-rye' },
          { word: 'Пять', translation: 'Five', pronunciation: 'pyat' },
        ],
        streetSlang: [
          { word: 'Куча', translation: 'A ton/a lot', pronunciation: 'KOO-chah' },
          { word: 'Много', translation: 'Many/a lot', pronunciation: 'MNO-go' },
        ]
      },
      {
        id: 3,
        title: 'Colors',
        words: [
          { word: 'Красный', translation: 'Red', pronunciation: 'kras-niy' },
          { word: 'Синий', translation: 'Blue', pronunciation: 'see-niy' },
          { word: 'Зелёный', translation: 'Green', pronunciation: 'zi-lyo-niy' },
          { word: 'Жёлтый', translation: 'Yellow', pronunciation: 'zhol-tiy' },
          { word: 'Чёрный', translation: 'Black', pronunciation: 'chor-niy' },
        ],
        streetSlang: [
          { word: 'В минусе', translation: 'In the red (in debt)', pronunciation: 'v MEE-noo-seh' },
          { word: 'В плюсе', translation: 'In the black (profit)', pronunciation: 'v PLOO-seh' },
        ]
      },
      {
        id: 4,
        title: 'Common Phrases',
        words: [
          { word: 'Да', translation: 'Yes', pronunciation: 'dah' },
          { word: 'Нет', translation: 'No', pronunciation: 'nyet' },
          { word: 'Как дела?', translation: 'How are you?', pronunciation: 'kak di-lah' },
          { word: 'Хорошо', translation: 'Good', pronunciation: 'ha-ra-sho' },
          { word: 'Не знаю', translation: 'I don\'t know', pronunciation: 'nye zna-yu' },
        ],
        streetSlang: [
          { word: 'Всё ок', translation: 'Everything\'s okay (casual)', pronunciation: 'vsyo ok' },
          { word: 'Ничего', translation: 'No problem/it\'s fine', pronunciation: 'nee-chee-VO' },
        ]
      },
      {
        id: 5,
        title: 'Food & Drink',
        words: [
          { word: 'Вода', translation: 'Water', pronunciation: 'va-dah' },
          { word: 'Хлеб', translation: 'Bread', pronunciation: 'khleb' },
          { word: 'Мясо', translation: 'Meat', pronunciation: 'mya-soh' },
          { word: 'Фрукты', translation: 'Fruit', pronunciation: 'frook-tih' },
          { word: 'Молоко', translation: 'Milk', pronunciation: 'ma-la-koh' },
        ],
        streetSlang: [
          { word: 'Жрать', translation: 'To eat (slang)', pronunciation: 'zhraht' },
          { word: 'Вкусно', translation: 'Tasty/delicious', pronunciation: 'VKOO-sno' },
        ]
      },
      {
        id: 6,
        title: 'Family & People',
        words: [
          { word: 'Мать', translation: 'Mother', pronunciation: 'mat' },
          { word: 'Отец', translation: 'Father', pronunciation: 'a-tyets' },
          { word: 'Брат', translation: 'Brother', pronunciation: 'brat' },
          { word: 'Сестра', translation: 'Sister', pronunciation: 'syes-tra' },
          { word: 'Друг', translation: 'Friend', pronunciation: 'drook' },
        ],
        streetSlang: [
          { word: 'Братан', translation: 'Bro/buddy (casual)', pronunciation: 'bra-TAN' },
          { word: 'Дружище', translation: 'Pal/buddy', pronunciation: 'droo-ZHEE-sheh' },
        ]
      },
      {
        id: 7,
        title: 'Body Parts',
        words: [
          { word: 'Голова', translation: 'Head', pronunciation: 'ga-la-vah' },
          { word: 'Глаз', translation: 'Eye', pronunciation: 'glaz' },
          { word: 'Рука', translation: 'Hand', pronunciation: 'roo-kah' },
          { word: 'Нога', translation: 'Foot', pronunciation: 'na-gah' },
          { word: 'Рот', translation: 'Mouth', pronunciation: 'rot' },
        ],
        streetSlang: [
          { word: 'Глянуть', translation: 'To take a look (casual)', pronunciation: 'GLYA-noot' },
          { word: 'Помочь', translation: 'To give a hand (help)', pronunciation: 'pa-MOCH' },
        ]
      },
      {
        id: 8,
        title: 'Animals',
        words: [
          { word: 'Собака', translation: 'Dog', pronunciation: 'sa-bah-kah' },
          { word: 'Кошка', translation: 'Cat', pronunciation: 'kosh-kah' },
          { word: 'Птица', translation: 'Bird', pronunciation: 'ptee-tsa' },
          { word: 'Рыба', translation: 'Fish', pronunciation: 'rih-bah' },
          { word: 'Лошадь', translation: 'Horse', pronunciation: 'lo-shad' },
        ],
        streetSlang: [
          { word: 'Устал как собака', translation: 'Tired as a dog', pronunciation: 'oos-TAL kak sa-BAH-kah' },
          { word: 'Как кошка', translation: 'Cat-like (sneaky)', pronunciation: 'kak KOSH-kah' },
        ]
      },
      {
        id: 9,
        title: 'Time & Days',
        words: [
          { word: 'Сегодня', translation: 'Today', pronunciation: 'sye-vod-nya' },
          { word: 'Завтра', translation: 'Tomorrow', pronunciation: 'zav-tra' },
          { word: 'Понедельник', translation: 'Monday', pronunciation: 'pa-nye-dyel-neek' },
          { word: 'Час', translation: 'Hour', pronunciation: 'chas' },
          { word: 'День', translation: 'Day', pronunciation: 'dyen' },
        ],
        streetSlang: [
          { word: 'Сейчас', translation: 'Right now', pronunciation: 'sye-CHAHS' },
          { word: 'Потом', translation: 'Later', pronunciation: 'pa-TOM' },
        ]
      },
      {
        id: 10,
        title: 'Weather',
        words: [
          { word: 'Солнце', translation: 'Sun', pronunciation: 'sol-ntse' },
          { word: 'Дождь', translation: 'Rain', pronunciation: 'dozhd' },
          { word: 'Снег', translation: 'Snow', pronunciation: 'snyeg' },
          { word: 'Ветер', translation: 'Wind', pronunciation: 'vye-ter' },
          { word: 'Облако', translation: 'Cloud', pronunciation: 'ob-la-koh' },
        ],
        streetSlang: [
          { word: 'Собачья погода', translation: 'Dog weather (terrible weather)', pronunciation: 'sa-BAH-chya pa-GO-dah' },
          { word: 'Льёт как из ведра', translation: 'Pouring rain', pronunciation: 'lyot kak iz ved-RA' },
        ]
      }
    ]
  }
};

export const getLanguageById = (id) => languages[id];
export const getAllLanguages = () => Object.values(languages);

