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
          { word: '¿Qué tal?', translation: 'How\'s it going?', pronunciation: 'keh tahl' },
          { word: 'Órale', translation: 'Right on!/Let\'s go!', pronunciation: 'oh-rah-leh' },
          { word: 'No manches', translation: 'No way!/You\'re kidding!', pronunciation: 'noh mahn-ches' },
          { word: 'Ándale', translation: 'Come on!/Let\'s do it!', pronunciation: 'ahn-dah-leh' },
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
          { word: 'Un chingo de', translation: 'A ton of (emphasizing quantity)', pronunciation: 'oon CHEEN-goh deh' },
          { word: 'Ni de pedo', translation: 'No way!/Not a chance', pronunciation: 'nee deh PEH-doh' },
          { word: 'Un montón', translation: 'A huge amount', pronunciation: 'oon mon-TOHN' },
          { word: 'Un buen', translation: 'A good amount', pronunciation: 'oon bwehn' },
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
          { word: 'Estar verde', translation: 'To be inexperienced/new', pronunciation: 'es-TAR VEHR-deh' },
          { word: 'Ponerse rojo', translation: 'To blush/get embarrassed', pronunciation: 'poh-NER-seh ROH-hoh' },
          { word: 'Ver la vida color de rosa', translation: 'To see life through rose-colored glasses', pronunciation: 'vehr lah VEE-dah koh-LOR deh ROH-sah' },
          { word: 'Estar en azul', translation: 'To be sad/down (blue)', pronunciation: 'es-TAR en ah-SOOL' },
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
          { word: 'No te preocupes', translation: 'Don\'t worry (casual)', pronunciation: 'noh teh preh-oh-KOO-pehs' },
          { word: 'Está chido', translation: 'It\'s cool/alright', pronunciation: 'es-TAH CHEE-doh' },
          { word: 'Tranquilo', translation: 'Chill/relax', pronunciation: 'trahn-KEE-loh' },
          { word: 'Está bien', translation: 'It\'s fine/okay', pronunciation: 'es-TAH bee-EN' },
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
          { word: 'Está bueno', translation: 'It\'s good/tasty', pronunciation: 'es-TAH BWEH-noh' },
          { word: 'Tener hambre', translation: 'To be hungry', pronunciation: 'teh-NEHR AHM-breh' },
          { word: 'Está delicioso', translation: 'It\'s delicious', pronunciation: 'es-TAH deh-lee-SEE-oh-soh' },
          { word: 'Tengo ganas de comer', translation: 'I feel like eating', pronunciation: 'TEN-goh GAH-nahs deh koh-MEHR' },
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
          { word: 'Hermano', translation: 'Bro (literally brother, used for friends)', pronunciation: 'er-MAH-noh' },
          { word: 'Compa', translation: 'Buddy/friend (short for compadre)', pronunciation: 'KOHM-pah' },
          { word: 'Güey', translation: 'Dude/guy (very casual)', pronunciation: 'gway' },
          { word: 'Bro', translation: 'Bro (borrowed from English)', pronunciation: 'broh' },
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
          { word: 'Estar de cabeza', translation: 'To be confused/upside down', pronunciation: 'es-TAR deh kah-BEH-sah' },
          { word: 'Tener buen ojo', translation: 'To have a good eye (good judgment)', pronunciation: 'teh-NEHR bwehn OH-ho' },
          { word: 'Estar hasta el cuello', translation: 'To be up to your neck (overwhelmed)', pronunciation: 'es-TAR AHS-tah el KWEH-yoh' },
          { word: 'Tener la cabeza en las nubes', translation: 'To have your head in the clouds', pronunciation: 'teh-NEHR lah kah-BEH-sah en lahs NOO-behs' },
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
          { word: 'Estar hecho perro', translation: 'To be exhausted/worn out', pronunciation: 'es-TAR EH-choh PEH-roh' },
          { word: 'Ser un gallo', translation: 'To be brave/bold', pronunciation: 'ser oon GAH-yoh' },
          { word: 'Volar como pájaro', translation: 'To fly like a bird (feel free)', pronunciation: 'voh-LAR KOH-moh PAH-hah-roh' },
          { word: 'Fuerte como caballo', translation: 'Strong as a horse', pronunciation: 'FWEHR-teh KOH-moh kah-BAH-yoh' },
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
          { word: 'Ahorita mismo', translation: 'Right this moment', pronunciation: 'ah-oh-REE-tah MEES-moh' },
          { word: 'Ya casi', translation: 'Almost there/almost done', pronunciation: 'yah KAH-see' },
          { word: 'En un rato', translation: 'In a while', pronunciation: 'en oon RAH-toh' },
          { word: 'Al rato', translation: 'Later/in a bit', pronunciation: 'ahl RAH-toh' },
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
          { word: 'Hace un frío que pela', translation: 'It\'s freezing cold', pronunciation: 'AH-seh oon FREE-oh keh PEH-lah' },
          { word: 'Está nublado', translation: 'It\'s cloudy', pronunciation: 'es-TAH noo-BLAH-doh' },
          { word: 'Hace un calorón', translation: 'It\'s super hot', pronunciation: 'AH-seh oon kah-loh-ROHN' },
          { word: 'Está haciendo viento', translation: 'It\'s windy', pronunciation: 'es-TAH ah-see-EN-doh vee-EN-toh' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: 'Tren/Metro', translation: 'Train/Metro', pronunciation: 'trehn/MEH-troh' },
          { word: 'Taxi/Uber', translation: 'Taxi/Uber', pronunciation: 'TAHK-see/OO-ber' },
          { word: 'Aeropuerto', translation: 'Airport', pronunciation: 'ah-eh-roh-PWEHR-toh' },
          { word: 'Boleto', translation: 'Ticket', pronunciation: 'boh-LEH-toh' },
          { word: 'Horario', translation: 'Schedule/Timetable', pronunciation: 'oh-RAH-ree-oh' },
        ],
        streetSlang: [
          { word: 'Echarse un viaje', translation: 'To take a trip (casual)', pronunciation: 'eh-CHAR-seh oon vee-AH-heh' },
          { word: 'Agarrar el metro', translation: 'To catch the metro', pronunciation: 'ah-gah-RAR el MEH-troh' },
          { word: 'Estar en el avión', translation: 'To be on the plane', pronunciation: 'es-TAR en el ah-vee-OHN' },
          { word: 'Perder el vuelo', translation: 'To miss the flight', pronunciation: 'pehr-DEHR el VWEH-loh' },
          { word: 'Viajar en chinga', translation: 'To travel fast/quickly', pronunciation: 'vee-ah-HAR en CHEEN-gah' },
          { word: 'Estar de viaje', translation: 'To be traveling', pronunciation: 'es-TAR deh vee-AH-heh' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Oficina', translation: 'Office', pronunciation: 'oh-fee-SEE-nah' },
          { word: 'Reunión', translation: 'Meeting', pronunciation: 'reh-oo-nee-OHN' },
          { word: 'Correo electrónico', translation: 'Email', pronunciation: 'koh-RREH-oh eh-lek-TROH-nee-koh' },
          { word: 'Jefe', translation: 'Boss/Manager', pronunciation: 'HEH-feh' },
          { word: 'Colega', translation: 'Colleague', pronunciation: 'koh-LEH-gah' },
        ],
        streetSlang: [
          { word: 'Chamba', translation: 'Work/job (slang)', pronunciation: 'CHAHM-bah' },
          { word: 'Echar la chamba', translation: 'To work hard', pronunciation: 'eh-CHAR lah CHAHM-bah' },
          { word: 'Estar en la chamba', translation: 'To be at work', pronunciation: 'es-TAR en lah CHAHM-bah' },
          { word: 'Jefe de jefes', translation: 'Big boss', pronunciation: 'HEH-feh deh HEH-fehs' },
          { word: 'Trabajar como perro', translation: 'To work like a dog', pronunciation: 'trah-bah-HAR KOH-moh PEH-roh' },
          { word: 'Estar hasta el cuello', translation: 'To be swamped with work', pronunciation: 'es-TAR AHS-tah el KWEH-yoh' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Música', translation: 'Music', pronunciation: 'MOO-see-kah' },
          { word: 'Deportes', translation: 'Sports', pronunciation: 'deh-POR-tehs' },
          { word: 'Lectura', translation: 'Reading', pronunciation: 'lek-TOO-rah' },
          { word: 'Cocinar', translation: 'Cooking', pronunciation: 'koh-see-NAHR' },
          { word: 'Viajar', translation: 'Travel', pronunciation: 'vee-ah-HAR' },
        ],
        streetSlang: [
          { word: 'Echarse un rol', translation: 'To hang out/have fun', pronunciation: 'eh-CHAR-seh oon rohl' },
          { word: 'Estar en la onda', translation: 'To be into something', pronunciation: 'es-TAR en lah ON-dah' },
          { word: 'Echarse un partido', translation: 'To play a game/match', pronunciation: 'eh-CHAR-seh oon par-TEE-doh' },
          { word: 'Estar en el pedo', translation: 'To be into something (very casual)', pronunciation: 'es-TAR en el PEH-doh' },
          { word: 'Echarse una leída', translation: 'To do some reading', pronunciation: 'eh-CHAR-seh OO-nah leh-EE-dah' },
          { word: 'Estar chido', translation: 'To be cool/awesome', pronunciation: 'es-TAR CHEE-doh' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Feliz', translation: 'Happy', pronunciation: 'feh-LEES' },
          { word: 'Triste', translation: 'Sad', pronunciation: 'TREES-teh' },
          { word: 'Enojado', translation: 'Angry', pronunciation: 'eh-noh-HAH-doh' },
          { word: 'Cansado', translation: 'Tired', pronunciation: 'kahn-SAH-doh' },
          { word: 'Emocionado', translation: 'Excited', pronunciation: 'eh-moh-see-oh-NAH-doh' },
        ],
        streetSlang: [
          { word: 'Estar de buenas', translation: 'To be in a good mood', pronunciation: 'es-TAR deh BWEH-nahs' },
          { word: 'Estar de malas', translation: 'To be in a bad mood', pronunciation: 'es-TAR deh MAH-lahs' },
          { word: 'Estar hasta la madre', translation: 'To be fed up/angry', pronunciation: 'es-TAR AHS-tah lah MAH-dreh' },
          { word: 'Estar hecho polvo', translation: 'To be exhausted', pronunciation: 'es-TAR EH-choh POHL-voh' },
          { word: 'Estar al cien', translation: 'To be super excited', pronunciation: 'es-TAR ahl see-EN' },
          { word: 'Estar de la chingada', translation: 'To be really upset/angry', pronunciation: 'es-TAR deh lah cheen-GAH-dah' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Izquierda', translation: 'Left', pronunciation: 'ees-kee-EHR-dah' },
          { word: 'Derecha', translation: 'Right', pronunciation: 'deh-REH-chah' },
          { word: 'Derecho', translation: 'Straight ahead', pronunciation: 'deh-REH-choh' },
          { word: 'Cerca', translation: 'Near', pronunciation: 'SEHR-kah' },
          { word: 'Lejos', translation: 'Far', pronunciation: 'LEH-hohs' },
        ],
        streetSlang: [
          { word: 'Por aquí', translation: 'Around here', pronunciation: 'por ah-KEE' },
          { word: 'Por allá', translation: 'Over there', pronunciation: 'por ah-LYAH' },
          { word: 'A la vuelta', translation: 'Around the corner', pronunciation: 'ah lah VWEHL-tah' },
          { word: 'A dos cuadras', translation: 'Two blocks away', pronunciation: 'ah dohs KWAH-drahs' },
          { word: 'Está cerca', translation: 'It\'s close/near', pronunciation: 'es-TAH SEHR-kah' },
          { word: 'Está lejos', translation: 'It\'s far', pronunciation: 'es-TAH LEH-hohs' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Ayer', translation: 'Yesterday', pronunciation: 'ah-YEHR' },
          { word: 'La semana pasada', translation: 'Last week', pronunciation: 'lah seh-MAH-nah pah-SAH-dah' },
          { word: 'Fui', translation: 'I went', pronunciation: 'fwee' },
          { word: 'Hice', translation: 'I did', pronunciation: 'EE-seh' },
          { word: 'Vi', translation: 'I saw', pronunciation: 'vee' },
        ],
        streetSlang: [
          { word: 'Ayer en la noche', translation: 'Last night (casual)', pronunciation: 'ah-YEHR en lah NOH-cheh' },
          { word: 'Hace rato', translation: 'A while ago', pronunciation: 'AH-seh RAH-toh' },
          { word: 'Me fui de pinta', translation: 'I skipped/went out (slang)', pronunciation: 'meh fwee deh PEEN-tah' },
          { word: 'Eché la hueva', translation: 'I slacked off/did nothing', pronunciation: 'eh-CHEH lah WEH-vah' },
          { word: 'Me la pasé', translation: 'I spent time (doing something)', pronunciation: 'meh lah pah-SEH' },
          { word: 'Hace un chingo', translation: 'A long time ago', pronunciation: 'AH-seh oon CHEEN-goh' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Mañana', translation: 'Tomorrow', pronunciation: 'mahn-YAH-nah' },
          { word: 'La próxima semana', translation: 'Next week', pronunciation: 'lah PROHK-see-mah seh-MAH-nah' },
          { word: 'Voy a ir', translation: 'I will go', pronunciation: 'voy ah eer' },
          { word: 'Quiero', translation: 'I want to', pronunciation: 'kee-EH-roh' },
          { word: 'Voy a', translation: 'I\'m going to', pronunciation: 'voy ah' },
        ],
        streetSlang: [
          { word: 'Mañana en la mañana', translation: 'Tomorrow morning', pronunciation: 'mahn-YAH-nah en lah mahn-YAH-nah' },
          { word: 'Voy a echar la hueva', translation: 'I\'m going to slack off', pronunciation: 'voy ah eh-CHAR lah WEH-vah' },
          { word: 'Me voy a echar un viaje', translation: 'I\'m going to take a trip', pronunciation: 'meh voy ah eh-CHAR oon vee-AH-heh' },
          { word: 'Voy a chambear', translation: 'I\'m going to work', pronunciation: 'voy ah chahm-BEH-ar' },
          { word: 'Quiero echar un rol', translation: 'I want to hang out', pronunciation: 'kee-EH-roh eh-CHAR oon rohl' },
          { word: 'Voy a estar ahí', translation: 'I\'ll be there', pronunciation: 'voy ah es-TAR ah-EE' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Vamos', translation: 'Let\'s go', pronunciation: 'VAH-mohs' },
          { word: '¿Qué tal si...?', translation: 'How about...?', pronunciation: 'keh tahl see' },
          { word: '¿Por qué no...?', translation: 'Why don\'t we...?', pronunciation: 'por keh noh' },
          { word: '¿Deberíamos...?', translation: 'Should we...?', pronunciation: 'deh-beh-ree-AH-mohs' },
          { word: 'Tal vez podemos', translation: 'Maybe we can', pronunciation: 'tahl vehs poh-DEH-mohs' },
        ],
        streetSlang: [
          { word: 'Vamos a echar la hueva', translation: 'Let\'s slack off', pronunciation: 'VAH-mohs ah eh-CHAR lah WEH-vah' },
          { word: '¿Qué tal si nos echamos un rol?', translation: 'How about we hang out?', pronunciation: 'keh tahl see nohs eh-CHA-mohs oon rohl' },
          { word: '¿Por qué no nos vamos?', translation: 'Why don\'t we go?', pronunciation: 'por keh noh nohs VAH-mohs' },
          { word: '¿Le entramos?', translation: 'Should we do it? (casual)', pronunciation: 'leh en-TRAH-mohs' },
          { word: 'Tal vez nos echamos una vuelta', translation: 'Maybe we can go around', pronunciation: 'tahl vehs nohs eh-CHA-mohs OO-nah VWEHL-tah' },
          { word: '¿Le damos?', translation: 'Should we do it? (very casual)', pronunciation: 'leh DAH-mohs' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Creo que', translation: 'I think', pronunciation: 'KREH-oh keh' },
          { word: 'Creo', translation: 'I believe', pronunciation: 'KREH-oh' },
          { word: 'En mi opinión', translation: 'In my opinion', pronunciation: 'en mee oh-pee-nee-OHN' },
          { word: 'Estoy de acuerdo', translation: 'I agree', pronunciation: 'es-TOY deh ah-KWEHR-doh' },
          { word: 'No estoy de acuerdo', translation: 'I disagree', pronunciation: 'noh es-TOY deh ah-KWEHR-doh' },
        ],
        streetSlang: [
          { word: 'Creo que sí', translation: 'I think so (casual)', pronunciation: 'KREH-oh keh see' },
          { word: 'Para mí', translation: 'For me/In my opinion', pronunciation: 'PAH-rah mee' },
          { word: 'Está chido', translation: 'It\'s cool/I agree', pronunciation: 'es-TAH CHEE-doh' },
          { word: 'No manches', translation: 'No way!/I disagree', pronunciation: 'noh MAHN-ches' },
          { word: 'Está bien', translation: 'It\'s fine/I agree', pronunciation: 'es-TAH bee-EN' },
          { word: 'Nel', translation: 'Nah/No way (very casual)', pronunciation: 'nel' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '¿Puedes ayudarme?', translation: 'Can you help me?', pronunciation: 'PWEH-dehs ah-yoo-DAHR-meh' },
          { word: 'Necesito', translation: 'I need', pronunciation: 'neh-seh-SEE-toh' },
          { word: 'Está roto', translation: 'It\'s broken', pronunciation: 'es-TAH ROH-toh' },
          { word: '¿Dónde puedo encontrar...?', translation: 'Where can I find...?', pronunciation: 'DOHN-deh PWEH-doh en-kon-TRAR' },
          { word: '¿Cómo hago...?', translation: 'How do I...?', pronunciation: 'KOH-moh AH-goh' },
        ],
        streetSlang: [
          { word: '¿Me echas la mano?', translation: 'Can you help me? (casual)', pronunciation: 'meh EH-chas lah MAH-noh' },
          { word: 'Necesito un favor', translation: 'I need a favor', pronunciation: 'neh-seh-SEE-toh oon fah-VOR' },
          { word: 'Está jodido', translation: 'It\'s messed up/broken (slang)', pronunciation: 'es-TAH hoh-DEE-doh' },
          { word: '¿Dónde está?', translation: 'Where is it?', pronunciation: 'DOHN-deh es-TAH' },
          { word: '¿Cómo le hago?', translation: 'How do I do it? (casual)', pronunciation: 'KOH-moh leh AH-goh' },
          { word: 'Está hasta la madre', translation: 'It\'s completely broken (slang)', pronunciation: 'es-TAH AHS-tah lah MAH-dreh' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: Los Pollitos Dicen (The Little Chicks Say)',
        premium: true,
        songInfo: {
          name: 'Los Pollitos Dicen',
          englishName: 'The Little Chicks Say',
          type: 'Children\'s Song',
          culturalSignificance: 'A beloved Latin American children\'s song teaching animal sounds, family words, and care. Sung in homes and schools across Spanish-speaking countries.'
        },
        lyrics: [
          { original: 'Los pollitos dicen', translation: 'The little chicks say', pronunciation: 'lohs poh-YEE-tohs DEE-sen' },
          { original: 'Pío, pío, pío', translation: 'Peep, peep, peep', pronunciation: 'PEE-oh PEE-oh PEE-oh' },
          { original: 'Cuando tienen hambre', translation: 'When they are hungry', pronunciation: 'KWAN-doh tee-EH-nen AHM-breh' },
          { original: 'Cuando tienen frío', translation: 'When they are cold', pronunciation: 'KWAN-doh tee-EH-nen FREE-oh' },
          { original: 'La gallina busca', translation: 'The hen searches', pronunciation: 'lah gah-YEE-nah BOOS-kah' },
          { original: 'El maíz y el trigo', translation: 'Corn and wheat', pronunciation: 'el mah-EES ee el TREE-goh' },
          { original: 'Les da la comida', translation: 'Gives them food', pronunciation: 'lehs dah lah koh-MEE-dah' },
          { original: 'Y les presta abrigo', translation: 'And gives them shelter', pronunciation: 'ee lehs PREHS-tah ah-BREE-goh' }
        ],
        culturalNotes: 'This song is sung to children from infancy, teaching them about animals, sounds, and maternal care. It\'s often used in preschools and family settings. The song represents warmth, care, and the bond between mother and children.',
        words: [
          { word: 'Pollitos', translation: 'Little chicks', pronunciation: 'poh-YEE-tohs', example: 'Los pollitos dicen pío' },
          { word: 'Pío', translation: 'Peep (chick sound)', pronunciation: 'PEE-oh', example: 'Pío, pío, pío' },
          { word: 'Hambre', translation: 'Hunger', pronunciation: 'AHM-breh', example: 'Cuando tienen hambre' },
          { word: 'Frío', translation: 'Cold', pronunciation: 'FREE-oh', example: 'Cuando tienen frío' },
          { word: 'Gallina', translation: 'Hen', pronunciation: 'gah-YEE-nah', example: 'La gallina busca' },
          { word: 'Maíz', translation: 'Corn', pronunciation: 'mah-EES', example: 'El maíz y el trigo' },
          { word: 'Trigo', translation: 'Wheat', pronunciation: 'TREE-goh', example: 'El maíz y el trigo' },
          { word: 'Comida', translation: 'Food', pronunciation: 'koh-MEE-dah', example: 'Les da la comida' },
          { word: 'Abrigo', translation: 'Shelter/warmth', pronunciation: 'ah-BREE-goh', example: 'Y les presta abrigo' },
          { word: 'Busca', translation: 'Searches/looks for', pronunciation: 'BOOS-kah', example: 'La gallina busca' }
        ],
        streetSlang: [
          { word: 'Esa canción está chida', translation: 'That song is cool/awesome', pronunciation: 'EH-sah kahn-SYOHN es-TAH CHEE-dah' },
          { word: 'Me encanta esa rola', translation: 'I love that song (slang)', pronunciation: 'meh en-KAHN-tah EH-sah ROH-lah' },
          { word: 'Está pegajosa', translation: 'It\'s catchy/stuck in my head', pronunciation: 'es-TAH peh-gah-HOH-sah' },
          { word: 'Cantarla a todo pulmón', translation: 'To sing it at the top of your lungs', pronunciation: 'kahn-TAR-lah ah TOH-doh pool-MOHN' },
          { word: 'Tiene buen ritmo', translation: 'It has good rhythm', pronunciation: 'tee-EH-neh bwehn REET-moh' },
          { word: 'Me la sé de memoria', translation: 'I know it by heart', pronunciation: 'meh lah seh deh meh-MOH-ree-ah' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: 'Más vale tarde que nunca', literalTranslation: 'Better late than never', meaning: 'It\'s better to do something late than not at all', context: 'When someone finally does something they\'ve been putting off', slangEquivalent: 'Mejor tarde que nunca' },
          { original: 'No hay mal que por bien no venga', literalTranslation: 'There is no bad from which good doesn\'t come', meaning: 'Every cloud has a silver lining', context: 'When something bad happens but leads to something good', slangEquivalent: 'Todo pasa por algo' },
          { original: 'A quien madruga, Dios le ayuda', literalTranslation: 'God helps those who wake up early', meaning: 'The early bird catches the worm', context: 'Encouraging someone to start early or work hard', slangEquivalent: 'El que madruga agarra más' },
          { original: 'El que mucho abarca, poco aprieta', literalTranslation: 'He who grasps much, squeezes little', meaning: 'Don\'t bite off more than you can chew', context: 'Warning against taking on too many tasks', slangEquivalent: 'No puedes con todo' },
          { original: 'Más vale pájaro en mano que ciento volando', literalTranslation: 'Better a bird in hand than a hundred flying', meaning: 'A bird in the hand is worth two in the bush', context: 'Preferring something certain over something uncertain', slangEquivalent: 'Mejor lo seguro' },
          { original: 'Camarón que se duerme, se lo lleva la corriente', literalTranslation: 'The shrimp that falls asleep is carried away by the current', meaning: 'If you don\'t pay attention, you\'ll miss opportunities', context: 'Warning to stay alert and active', slangEquivalent: 'Si te duermes, pierdes' },
          { original: 'Del dicho al hecho hay mucho trecho', literalTranslation: 'From saying to doing there is a long stretch', meaning: 'Easier said than done', context: 'When someone promises something but it\'s hard to do', slangEquivalent: 'Es más fácil decirlo que hacerlo' },
          { original: 'En boca cerrada no entran moscas', literalTranslation: 'Flies don\'t enter a closed mouth', meaning: 'Sometimes it\'s better to keep quiet', context: 'Advising someone to stay silent to avoid trouble', slangEquivalent: 'Mejor callar' }
        ],
        streetSlang: [
          { word: 'Eso es la neta', translation: 'That\'s the truth', pronunciation: 'EH-soh es lah NEH-tah' },
          { word: 'Está cañón', translation: 'It\'s really hard/difficult', pronunciation: 'es-TAH kah-NYOHN' },
          { word: 'No mames', translation: 'No way!/Are you serious?', pronunciation: 'noh MAH-mes' },
          { word: 'Está chido', translation: 'It\'s cool/awesome', pronunciation: 'es-TAH CHEE-doh' },
          { word: 'Está de pelos', translation: 'It\'s perfect/amazing', pronunciation: 'es-TAH deh PEH-lohs' },
          { word: 'Está padrísimo', translation: 'It\'s super cool', pronunciation: 'es-TAH pah-DREE-see-moh' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'q', fullForm: 'que', englishEquivalent: 'that/what', usage: 'Friends only, very casual', platform: 'WhatsApp, Instagram, Twitter' },
          { abbreviation: 'xq', fullForm: 'porque', englishEquivalent: 'because', usage: 'Friends only', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'tqm', fullForm: 'te quiero mucho', englishEquivalent: 'I love you a lot', usage: 'Close friends/family', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'tmb', fullForm: 'también', englishEquivalent: 'also/too', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: 'tb', fullForm: 'también', englishEquivalent: 'also/too', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: 'xfa', fullForm: 'por favor', englishEquivalent: 'please', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'nms', fullForm: 'no mames', englishEquivalent: 'no way!/seriously?', usage: 'Friends only, very casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'qpd', fullForm: 'qué pedo', englishEquivalent: 'what\'s up?', usage: 'Friends only, very casual', platform: 'WhatsApp' },
          { abbreviation: 'saludos', fullForm: 'saludos', englishEquivalent: 'greetings', usage: 'Anyone, formal', platform: 'Email, WhatsApp' },
          { abbreviation: 'bsos', fullForm: 'besos', englishEquivalent: 'kisses', usage: 'Friends/family', platform: 'WhatsApp, Instagram' }
        ],
        emojiMeanings: [
          { emoji: '😎', meaning: 'Cool/awesome', culturalContext: 'Very common, used for anything cool' },
          { emoji: '🔥', meaning: 'Fire/amazing', culturalContext: 'Something is really good or exciting' },
          { emoji: '💯', meaning: 'Perfect/100%', culturalContext: 'Agreement or something is perfect' },
          { emoji: '🤙', meaning: 'Hang loose/okay', culturalContext: 'Very casual, friends only' },
          { emoji: '👌', meaning: 'Okay/perfect', culturalContext: 'Universal approval sign' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: 'Ça va?', translation: 'How\'s it going?', pronunciation: 'sah vah' },
          { word: 'À plus', translation: 'See you later (casual)', pronunciation: 'ah ploos' },
          { word: 'Salut mon pote', translation: 'Hey my buddy', pronunciation: 'sah-LOO mohn poht' },
          { word: 'À tout à l\'heure', translation: 'See you soon', pronunciation: 'ah toot ah l-ur' },
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
          { word: 'Un max', translation: 'A lot/maximum', pronunciation: 'oon maks' },
          { word: 'Des masses', translation: 'Masses of (many)', pronunciation: 'day mahs' },
          { word: 'Un paquet', translation: 'A pack/bunch', pronunciation: 'oon pah-KAY' },
          { word: 'Beaucoup trop', translation: 'Way too much', pronunciation: 'boh-KOO troh' },
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
          { word: 'Être vert', translation: 'To be inexperienced/green', pronunciation: 'etr vehr' },
          { word: 'Avoir le blues', translation: 'To feel down/sad', pronunciation: 'ah-VWAHR luh blooz' },
          { word: 'Rouge de colère', translation: 'Red with anger', pronunciation: 'roozh duh koh-LEHR' },
          { word: 'Vert de jalousie', translation: 'Green with envy', pronunciation: 'vehr duh zhah-loo-ZEE' },
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
          { word: 'Pas de problème', translation: 'No problem', pronunciation: 'pah duh proh-BLEHM' },
          { word: 'C\'est cool', translation: 'It\'s cool/alright', pronunciation: 'say kool' },
          { word: 'Tranquille', translation: 'Chill/relax', pronunciation: 'trahn-KEEL' },
          { word: 'C\'est bon', translation: 'It\'s fine/okay', pronunciation: 'say bohn' },
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
          { word: 'J\'ai la dalle', translation: 'I\'m hungry (slang)', pronunciation: 'zhay lah dahl' },
          { word: 'C\'est délicieux', translation: 'It\'s delicious', pronunciation: 'say day-lee-SYUH' },
          { word: 'C\'est de la balle', translation: 'It\'s awesome (slang)', pronunciation: 'say duh lah bahl' },
          { word: 'J\'ai faim', translation: 'I\'m hungry', pronunciation: 'zhay fan' },
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
          { word: 'Poteau', translation: 'Best friend/buddy', pronunciation: 'poh-TOH' },
          { word: 'Pote de toujours', translation: 'Old friend/forever friend', pronunciation: 'poht duh too-ZHOOR' },
          { word: 'Mon pote', translation: 'My buddy', pronunciation: 'mohn poht' },
          { word: 'Copain', translation: 'Buddy/friend', pronunciation: 'koh-PAN' },
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
          { word: 'Avoir la tête ailleurs', translation: 'To have your head elsewhere (distracted)', pronunciation: 'ah-VWAHR lah tet ah-YEUR' },
          { word: 'Avoir les yeux plus gros que le ventre', translation: 'Eyes bigger than stomach', pronunciation: 'ah-VWAHR lay zuh ploo groh kuh luh VAHN-truh' },
          { word: 'Avoir la grosse tête', translation: 'To have a big head (arrogant)', pronunciation: 'ah-VWAHR lah grohs tet' },
          { word: 'Avoir les yeux qui brillent', translation: 'To have shining eyes (excited)', pronunciation: 'ah-VWAHR lay zuh kee bree-yent' },
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
          { word: 'Être un chien', translation: 'To be mean/nasty', pronunciation: 'etr oon shee-en' },
          { word: 'Avoir un appétit d\'oiseau', translation: 'To eat like a bird (small appetite)', pronunciation: 'ah-VWAHR oon ah-pay-TEE dwah-ZOH' },
          { word: 'Libre comme un oiseau', translation: 'Free as a bird', pronunciation: 'LEE-bruh kohm oon wah-ZOH' },
          { word: 'Fort comme un cheval', translation: 'Strong as a horse', pronunciation: 'for kohm oon shuh-VAHL' },
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
          { word: 'Tout de suite', translation: 'Right away/immediately', pronunciation: 'toot duh sweet' },
          { word: 'Dans un instant', translation: 'In a moment', pronunciation: 'dahn oon an-STAHN' },
          { word: 'Bientôt', translation: 'Soon', pronunciation: 'bee-ahn-TOH' },
          { word: 'Plus tard', translation: 'Later', pronunciation: 'ploo tahr' },
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
          { word: 'Il fait un froid de canard', translation: 'It\'s freezing cold', pronunciation: 'eel fay oon frwah duh kah-NAHR' },
          { word: 'Il fait un soleil de plomb', translation: 'Scorching hot sun', pronunciation: 'eel fay oon so-LAY duh plohn' },
          { word: 'Il fait un froid de loup', translation: 'Freezing cold (wolf cold)', pronunciation: 'eel fay oon frwah duh loo' },
          { word: 'Il fait nuageux', translation: 'It\'s cloudy', pronunciation: 'eel fay noo-ah-ZHUH' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: 'Train/Métro', translation: 'Train/Metro', pronunciation: 'tran/MAY-troh' },
          { word: 'Taxi/Uber', translation: 'Taxi/Uber', pronunciation: 'tahk-SEE/OO-ber' },
          { word: 'Aéroport', translation: 'Airport', pronunciation: 'ah-ay-roh-POR' },
          { word: 'Billet', translation: 'Ticket', pronunciation: 'bee-YAY' },
          { word: 'Horaire', translation: 'Schedule/Timetable', pronunciation: 'oh-REHR' },
        ],
        streetSlang: [
          { word: 'Prendre le métro', translation: 'To take the metro', pronunciation: 'prahn-druh luh MAY-troh' },
          { word: 'Choper un taxi', translation: 'To catch a taxi (slang)', pronunciation: 'shoh-PAY oon tahk-SEE' },
          { word: 'Être dans l\'avion', translation: 'To be on the plane', pronunciation: 'etr dahn lah-vee-OHN' },
          { word: 'Rater le vol', translation: 'To miss the flight', pronunciation: 'rah-TAY luh vol' },
          { word: 'Se déplacer vite', translation: 'To travel fast', pronunciation: 'suh day-plah-SAY veet' },
          { word: 'Être en voyage', translation: 'To be traveling', pronunciation: 'etr ahn vwah-YAHZH' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Bureau', translation: 'Office', pronunciation: 'boo-ROH' },
          { word: 'Réunion', translation: 'Meeting', pronunciation: 'ray-oo-nee-OHN' },
          { word: 'Email', translation: 'Email', pronunciation: 'ee-MAYL' },
          { word: 'Patron', translation: 'Boss/Manager', pronunciation: 'pah-TROHN' },
          { word: 'Collègue', translation: 'Colleague', pronunciation: 'koh-LEHG' },
        ],
        streetSlang: [
          { word: 'Boulot', translation: 'Work/job (slang)', pronunciation: 'boo-LOH' },
          { word: 'Bosser', translation: 'To work hard (slang)', pronunciation: 'boh-SAY' },
          { word: 'Être au boulot', translation: 'To be at work', pronunciation: 'etr oh boo-LOH' },
          { word: 'Grand patron', translation: 'Big boss', pronunciation: 'grahn pah-TROHN' },
          { word: 'Travailler comme un chien', translation: 'To work like a dog', pronunciation: 'trah-vah-YAY kohm oon shee-en' },
          { word: 'Être débordé', translation: 'To be swamped', pronunciation: 'etr day-bor-DAY' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Musique', translation: 'Music', pronunciation: 'moo-ZEEK' },
          { word: 'Sport', translation: 'Sports', pronunciation: 'spor' },
          { word: 'Lecture', translation: 'Reading', pronunciation: 'lek-TOOR' },
          { word: 'Cuisine', translation: 'Cooking', pronunciation: 'kwee-ZEEN' },
          { word: 'Voyage', translation: 'Travel', pronunciation: 'vwah-YAHZH' },
        ],
        streetSlang: [
          { word: 'S\'éclater', translation: 'To have fun/enjoy', pronunciation: 'say-klah-TAY' },
          { word: 'Être branché', translation: 'To be into something', pronunciation: 'etr brahn-SHAY' },
          { word: 'Faire un match', translation: 'To play a game/match', pronunciation: 'fehr oon mahch' },
          { word: 'Être dans le délire', translation: 'To be really into something', pronunciation: 'etr dahn luh day-LEER' },
          { word: 'Lire un truc', translation: 'To read something', pronunciation: 'leer oon trook' },
          { word: 'C\'est cool', translation: 'It\'s cool/awesome', pronunciation: 'say kool' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Heureux', translation: 'Happy', pronunciation: 'uh-RUH' },
          { word: 'Triste', translation: 'Sad', pronunciation: 'treest' },
          { word: 'En colère', translation: 'Angry', pronunciation: 'ahn koh-LEHR' },
          { word: 'Fatigué', translation: 'Tired', pronunciation: 'fah-tee-GAY' },
          { word: 'Excité', translation: 'Excited', pronunciation: 'ek-see-TAY' },
        ],
        streetSlang: [
          { word: 'Être de bonne humeur', translation: 'To be in a good mood', pronunciation: 'etr duh bon oo-MUR' },
          { word: 'Être de mauvaise humeur', translation: 'To be in a bad mood', pronunciation: 'etr duh moh-VEHZ oo-MUR' },
          { word: 'Être énervé', translation: 'To be annoyed/angry', pronunciation: 'etr ay-ner-VAY' },
          { word: 'Être crevé', translation: 'To be exhausted (slang)', pronunciation: 'etr kruh-VAY' },
          { word: 'Être super content', translation: 'To be super excited', pronunciation: 'etr soo-per kon-TAHN' },
          { word: 'Être vénère', translation: 'To be really angry (slang)', pronunciation: 'etr vay-NEHR' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Gauche', translation: 'Left', pronunciation: 'gohsh' },
          { word: 'Droite', translation: 'Right', pronunciation: 'drwaht' },
          { word: 'Tout droit', translation: 'Straight ahead', pronunciation: 'too drwah' },
          { word: 'Près', translation: 'Near', pronunciation: 'preh' },
          { word: 'Loin', translation: 'Far', pronunciation: 'lwan' },
        ],
        streetSlang: [
          { word: 'Par ici', translation: 'Around here', pronunciation: 'par ee-SEE' },
          { word: 'Par là', translation: 'Over there', pronunciation: 'par lah' },
          { word: 'Au coin', translation: 'Around the corner', pronunciation: 'oh kwan' },
          { word: 'À deux pas', translation: 'Two steps away', pronunciation: 'ah duh pah' },
          { word: 'C\'est près', translation: 'It\'s close/near', pronunciation: 'say preh' },
          { word: 'C\'est loin', translation: 'It\'s far', pronunciation: 'say lwan' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Hier', translation: 'Yesterday', pronunciation: 'ee-AY' },
          { word: 'La semaine dernière', translation: 'Last week', pronunciation: 'lah suh-MEHN dehr-NYEHR' },
          { word: 'Je suis allé', translation: 'I went', pronunciation: 'zhuh swee zah-LAY' },
          { word: 'J\'ai fait', translation: 'I did', pronunciation: 'zhay feh' },
          { word: 'J\'ai vu', translation: 'I saw', pronunciation: 'zhay voo' },
        ],
        streetSlang: [
          { word: 'Hier soir', translation: 'Last night', pronunciation: 'ee-AY swahr' },
          { word: 'Y a pas longtemps', translation: 'Not long ago', pronunciation: 'ee ah pah lohn-TAHN' },
          { word: 'J\'ai séché', translation: 'I skipped/bailed (slang)', pronunciation: 'zhay say-SHAY' },
          { word: 'J\'ai glandé', translation: 'I slacked off', pronunciation: 'zhay glahn-DAY' },
          { word: 'J\'ai passé du temps', translation: 'I spent time', pronunciation: 'zhay pah-SAY doo tahn' },
          { word: 'Y a un bail', translation: 'A long time ago (slang)', pronunciation: 'ee ah oon bah-eel' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Demain', translation: 'Tomorrow', pronunciation: 'duh-MAN' },
          { word: 'La semaine prochaine', translation: 'Next week', pronunciation: 'lah suh-MEHN proh-SHEHN' },
          { word: 'Je vais aller', translation: 'I will go', pronunciation: 'zhuh vay zah-LAY' },
          { word: 'Je veux', translation: 'I want to', pronunciation: 'zhuh vuh' },
          { word: 'Je vais', translation: 'I\'m going to', pronunciation: 'zhuh vay' },
        ],
        streetSlang: [
          { word: 'Demain matin', translation: 'Tomorrow morning', pronunciation: 'duh-MAN mah-TAN' },
          { word: 'Je vais glander', translation: 'I\'m going to slack off', pronunciation: 'zhuh vay glahn-DAY' },
          { word: 'Je vais me barrer', translation: 'I\'m going to leave', pronunciation: 'zhuh vay muh bah-RAY' },
          { word: 'Je vais bosser', translation: 'I\'m going to work', pronunciation: 'zhuh vay boh-SAY' },
          { word: 'Je veux traîner', translation: 'I want to hang out', pronunciation: 'zhuh vuh tray-NAY' },
          { word: 'Je serai là', translation: 'I\'ll be there', pronunciation: 'zhuh suh-RAY lah' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Allons-y', translation: 'Let\'s go', pronunciation: 'ah-lohn-ZEE' },
          { word: 'Et si...?', translation: 'How about...?', pronunciation: 'ay see' },
          { word: 'Pourquoi ne pas...?', translation: 'Why don\'t we...?', pronunciation: 'poor-kwah nuh pah' },
          { word: 'Devrions-nous...?', translation: 'Should we...?', pronunciation: 'duh-vree-OHN noo' },
          { word: 'Peut-être qu\'on peut', translation: 'Maybe we can', pronunciation: 'puh-TEH-truh kon puh' },
        ],
        streetSlang: [
          { word: 'On y va?', translation: 'Let\'s go? (casual)', pronunciation: 'ohn ee vah' },
          { word: 'Et si on traînait?', translation: 'How about we hang out?', pronunciation: 'ay see ohn tray-NAY' },
          { word: 'Pourquoi on y va pas?', translation: 'Why don\'t we go?', pronunciation: 'poor-kwah ohn ee vah pah' },
          { word: 'On le fait?', translation: 'Should we do it?', pronunciation: 'ohn luh feh' },
          { word: 'Peut-être qu\'on sort', translation: 'Maybe we can go out', pronunciation: 'puh-TEH-truh kon sor' },
          { word: 'On se barre?', translation: 'Should we leave? (casual)', pronunciation: 'ohn suh bahr' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Je pense que', translation: 'I think', pronunciation: 'zhuh pahns kuh' },
          { word: 'Je crois', translation: 'I believe', pronunciation: 'zhuh krwah' },
          { word: 'À mon avis', translation: 'In my opinion', pronunciation: 'ah mohn ah-VEE' },
          { word: 'Je suis d\'accord', translation: 'I agree', pronunciation: 'zhuh swee dah-KOR' },
          { word: 'Je ne suis pas d\'accord', translation: 'I disagree', pronunciation: 'zhuh nuh swee pah dah-KOR' },
        ],
        streetSlang: [
          { word: 'Je pense que oui', translation: 'I think so', pronunciation: 'zhuh pahns kuh wee' },
          { word: 'Pour moi', translation: 'For me/In my opinion', pronunciation: 'poor mwah' },
          { word: 'C\'est cool', translation: 'It\'s cool/I agree', pronunciation: 'say kool' },
          { word: 'N\'importe quoi', translation: 'No way!/That\'s nonsense', pronunciation: 'nan-por-tuh kwah' },
          { word: 'C\'est bon', translation: 'It\'s fine/I agree', pronunciation: 'say bohn' },
          { word: 'Nah', translation: 'Nah/No way (very casual)', pronunciation: 'nah' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Peux-tu m\'aider?', translation: 'Can you help me?', pronunciation: 'puh too may-DAY' },
          { word: 'J\'ai besoin de', translation: 'I need', pronunciation: 'zhay buh-ZWAN duh' },
          { word: 'C\'est cassé', translation: 'It\'s broken', pronunciation: 'say kah-SAY' },
          { word: 'Où puis-je trouver...?', translation: 'Where can I find...?', pronunciation: 'oo pweezh troo-VAY' },
          { word: 'Comment je fais...?', translation: 'How do I...?', pronunciation: 'koh-MAHN zhuh feh' },
        ],
        streetSlang: [
          { word: 'Tu peux me donner un coup de main?', translation: 'Can you help me? (casual)', pronunciation: 'too puh muh doh-NAY oon koo duh man' },
          { word: 'J\'ai besoin d\'un service', translation: 'I need a favor', pronunciation: 'zhay buh-ZWAN doon sehr-VEES' },
          { word: 'C\'est niqué', translation: 'It\'s messed up/broken (slang)', pronunciation: 'say nee-KAY' },
          { word: 'Où c\'est?', translation: 'Where is it?', pronunciation: 'oo say' },
          { word: 'Comment je fais ça?', translation: 'How do I do it?', pronunciation: 'koh-MAHN zhuh feh sah' },
          { word: 'C\'est complètement foutu', translation: 'It\'s completely broken (slang)', pronunciation: 'say kohn-pleh-tuh-MAHN foo-TOO' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: Frère Jacques (Brother John)',
        premium: true,
        songInfo: {
          name: 'Frère Jacques',
          englishName: 'Brother John',
          type: 'Children\'s Song',
          culturalSignificance: 'One of the most famous French children\'s songs, known worldwide. Teaches time, actions, and questions. Often used as a round/canon song.'
        },
        lyrics: [
          { original: 'Frère Jacques, Frère Jacques', translation: 'Brother John, Brother John', pronunciation: 'frehr zhahk frehr zhahk' },
          { original: 'Dormez-vous? Dormez-vous?', translation: 'Are you sleeping? Are you sleeping?', pronunciation: 'dor-may voo dor-may voo' },
          { original: 'Sonnez les matines! Sonnez les matines!', translation: 'Ring the morning bells! Ring the morning bells!', pronunciation: 'soh-nay lay mah-teen soh-nay lay mah-teen' },
          { original: 'Ding, dang, dong. Ding, dang, dong.', translation: 'Ding, dang, dong. Ding, dang, dong.', pronunciation: 'deeng dahng dohng deeng dahng dohng' }
        ],
        culturalNotes: 'This song is sung as a round (canon) where different groups start at different times. It\'s taught in French schools to help children learn about time, morning routines, and musical rounds. The song has been translated into many languages and is recognized globally.',
        words: [
          { word: 'Frère', translation: 'Brother', pronunciation: 'frehr', example: 'Frère Jacques' },
          { word: 'Dormez', translation: 'Sleep (you plural)', pronunciation: 'dor-may', example: 'Dormez-vous?' },
          { word: 'Sonnez', translation: 'Ring (imperative)', pronunciation: 'soh-nay', example: 'Sonnez les matines!' },
          { word: 'Matines', translation: 'Morning bells', pronunciation: 'mah-teen', example: 'Sonnez les matines!' },
          { word: 'Ding', translation: 'Ding (bell sound)', pronunciation: 'deeng', example: 'Ding, dang, dong' },
          { word: 'Dang', translation: 'Dang (bell sound)', pronunciation: 'dahng', example: 'Ding, dang, dong' },
          { word: 'Dong', translation: 'Dong (bell sound)', pronunciation: 'dohng', example: 'Ding, dang, dong' },
          { word: 'Vous', translation: 'You (formal/plural)', pronunciation: 'voo', example: 'Dormez-vous?' },
          { word: 'Les', translation: 'The (plural)', pronunciation: 'lay', example: 'Sonnez les matines!' }
        ],
        streetSlang: [
          { word: 'Cette chanson est cool', translation: 'This song is cool', pronunciation: 'set shahn-SOHN ay kool' },
          { word: 'J\'adore ce morceau', translation: 'I love this track/song', pronunciation: 'zhah-dor suh mor-SOH' },
          { word: 'C\'est accrocheur', translation: 'It\'s catchy', pronunciation: 'say ah-kroh-SHUHR' },
          { word: 'Chanter à tue-tête', translation: 'To sing at the top of your lungs', pronunciation: 'shahn-tay ah too-tet' },
          { word: 'Ça a du rythme', translation: 'It has rhythm', pronunciation: 'sah ah doo REET-muh' },
          { word: 'Je la connais par cœur', translation: 'I know it by heart', pronunciation: 'zhuh lah kon-ay par kuhr' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: 'Mieux vaut tard que jamais', literalTranslation: 'Better late than never', meaning: 'It\'s better to do something late than not at all', context: 'When someone finally does something they\'ve been putting off', slangEquivalent: 'Mieux vaut tard' },
          { original: 'À chaque jour suffit sa peine', literalTranslation: 'Each day has enough trouble of its own', meaning: 'Don\'t worry about tomorrow', context: 'Advising to focus on today\'s problems', slangEquivalent: 'Un jour à la fois' },
          { original: 'L\'appétit vient en mangeant', literalTranslation: 'Appetite comes while eating', meaning: 'The more you have, the more you want', context: 'When someone gets more interested as they do something', slangEquivalent: 'Plus tu en as, plus tu en veux' },
          { original: 'Qui ne risque rien n\'a rien', literalTranslation: 'Who risks nothing has nothing', meaning: 'Nothing ventured, nothing gained', context: 'Encouraging someone to take risks', slangEquivalent: 'Faut oser' },
          { original: 'Il ne faut pas mettre tous ses œufs dans le même panier', literalTranslation: 'Don\'t put all your eggs in the same basket', meaning: 'Don\'t put all your resources in one place', context: 'Warning against relying on one thing', slangEquivalent: 'Ne mets pas tout au même endroit' },
          { original: 'Qui vivra verra', literalTranslation: 'Who will live will see', meaning: 'Time will tell', context: 'When the outcome is uncertain', slangEquivalent: 'On verra bien' },
          { original: 'Pierre qui roule n\'amasse pas mousse', literalTranslation: 'A rolling stone gathers no moss', meaning: 'People who move around don\'t accumulate things', context: 'About someone who doesn\'t settle down', slangEquivalent: 'Il bouge tout le temps' },
          { original: 'C\'est en forgeant qu\'on devient forgeron', literalTranslation: 'It\'s by forging that one becomes a blacksmith', meaning: 'Practice makes perfect', context: 'Encouraging practice and learning', slangEquivalent: 'C\'est en pratiquant' }
        ],
        streetSlang: [
          { word: 'C\'est de la balle', translation: 'It\'s awesome', pronunciation: 'seh duh lah bahl' },
          { word: 'C\'est stylé', translation: 'It\'s cool/stylish', pronunciation: 'seh stee-LAY' },
          { word: 'C\'est ouf', translation: 'It\'s crazy/amazing', pronunciation: 'seh oof' },
          { word: 'C\'est trop bien', translation: 'It\'s too good', pronunciation: 'seh troh bee-en' },
          { word: 'C\'est génial', translation: 'It\'s great', pronunciation: 'seh zhay-NYAL' },
          { word: 'C\'est nickel', translation: 'It\'s perfect', pronunciation: 'seh nee-KEL' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'c', fullForm: 'c\'est', englishEquivalent: 'it is', usage: 'Friends only, very casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'jsp', fullForm: 'je ne sais pas', englishEquivalent: 'I don\'t know', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram, Twitter' },
          { abbreviation: 'ptdr', fullForm: 'pété de rire', englishEquivalent: 'dying of laughter', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'mdr', fullForm: 'mort de rire', englishEquivalent: 'dying of laughter', usage: 'Anyone, very common', platform: 'All platforms' },
          { abbreviation: 'tkt', fullForm: 't\'inquiète', englishEquivalent: 'don\'t worry', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'bjr', fullForm: 'bonjour', englishEquivalent: 'hello', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'stp', fullForm: 's\'il te plaît', englishEquivalent: 'please', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'svp', fullForm: 's\'il vous plaît', englishEquivalent: 'please', usage: 'Anyone, formal', platform: 'Email, WhatsApp' },
          { abbreviation: 'biz', fullForm: 'bisous', englishEquivalent: 'kisses', usage: 'Friends/family', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'a+', fullForm: 'à plus', englishEquivalent: 'see you later', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' }
        ],
        emojiMeanings: [
          { emoji: '😊', meaning: 'Happy/smiling', culturalContext: 'Very common, friendly' },
          { emoji: '❤️', meaning: 'Love', culturalContext: 'Used with friends and family' },
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Universal approval' },
          { emoji: '😉', meaning: 'Winking/joking', culturalContext: 'Playful, friends only' },
          { emoji: '💪', meaning: 'Strength/good luck', culturalContext: 'Encouragement' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: 'Wie geht\'s?', translation: 'How\'s it going?', pronunciation: 'vee gates' },
          { word: 'Bis später', translation: 'See you later', pronunciation: 'bis SHPAY-ter' },
          { word: 'Servus', translation: 'Hi/Bye (Bavarian/Austrian)', pronunciation: 'SER-voos' },
          { word: 'Bis dann', translation: 'See you then', pronunciation: 'bis dahn' },
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
          { word: 'Massenhaft', translation: 'Massive amounts', pronunciation: 'MAH-sen-hahft' },
          { word: 'Unendlich viel', translation: 'Endless amounts', pronunciation: 'OON-end-likh feel' },
          { word: 'Richtig viel', translation: 'Really a lot', pronunciation: 'RIKH-tikh feel' },
          { word: 'Voll viel', translation: 'Totally a lot', pronunciation: 'fol feel' },
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
          { word: 'Rot sehen', translation: 'To see red (get angry)', pronunciation: 'roht ZAY-en' },
          { word: 'Blau sein', translation: 'To be drunk', pronunciation: 'blow zine' },
          { word: 'Grün vor Neid', translation: 'Green with envy', pronunciation: 'gruun for nite' },
          { word: 'Schwarz sehen', translation: 'To see things pessimistically', pronunciation: 'shvahrts ZAY-en' },
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
          { word: 'Passt schon', translation: 'It\'s fine/alright', pronunciation: 'pahst shohn' },
          { word: 'Ist cool', translation: 'It\'s cool', pronunciation: 'ist kool' },
          { word: 'Kein Stress', translation: 'No stress/chill', pronunciation: 'kine shtres' },
          { word: 'Alles gut', translation: 'Everything\'s good', pronunciation: 'AH-les goot' },
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
          { word: 'Ich habe Hunger', translation: 'I\'m hungry', pronunciation: 'ikh HAH-beh HOON-ger' },
          { word: 'Mega lecker', translation: 'Super tasty', pronunciation: 'MAY-gah LEK-er' },
          { word: 'Köstlich', translation: 'Delicious', pronunciation: 'KERST-likh' },
          { word: 'Ich hab Bock auf', translation: 'I feel like (eating)', pronunciation: 'ikh hahp bok owf' },
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
          { word: 'Brudi', translation: 'Bro (very casual)', pronunciation: 'BROO-dee' },
          { word: 'Freundin', translation: 'Girlfriend/friend (female)', pronunciation: 'FROYNT-in' },
          { word: 'Kollege', translation: 'Colleague/buddy', pronunciation: 'koh-LEH-geh' },
          { word: 'Kamerad', translation: 'Comrade/buddy', pronunciation: 'kah-meh-RAHT' },
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
          { word: 'Kopf hoch', translation: 'Chin up/head up', pronunciation: 'kohpf hohkh' },
          { word: 'Die Hand ins Feuer legen', translation: 'To vouch for someone', pronunciation: 'dee hahnt ins FOY-er LAY-gen' },
          { word: 'Einen klaren Kopf haben', translation: 'To have a clear head (be smart)', pronunciation: 'INE-en KLAH-ren kohpf HAH-ben' },
          { word: 'Den Mund halten', translation: 'To keep your mouth shut', pronunciation: 'den moont HAHL-ten' },
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
          { word: 'Wie ein Vogel fliegen', translation: 'To fly like a bird (feel free)', pronunciation: 'vee ine FOH-gel FLEE-gen' },
          { word: 'Stark wie ein Pferd', translation: 'Strong as a horse', pronunciation: 'shtahrk vee ine pfairt' },
          { word: 'Müde wie ein Hund', translation: 'Tired as a dog', pronunciation: 'MOO-deh vee ine hoont' },
          { word: 'Schlau wie ein Fuchs', translation: 'Clever as a fox', pronunciation: 'shlow vee ine fooks' },
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
          { word: 'Gleich sofort', translation: 'Right away/immediately', pronunciation: 'glysh ZOH-fort' },
          { word: 'In einem Moment', translation: 'In a moment', pronunciation: 'in IN-em moh-MENT' },
          { word: 'Gleich jetzt', translation: 'Right now', pronunciation: 'glysh yetst' },
          { word: 'Bald', translation: 'Soon', pronunciation: 'bahlt' },
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
          { word: 'Es ist eiskalt', translation: 'It\'s freezing cold', pronunciation: 'es ist ICE-kahlt' },
          { word: 'Sonnenschein', translation: 'Sunshine', pronunciation: 'ZON-en-shine' },
          { word: 'Es ist saukalt', translation: 'It\'s freezing cold (pig cold)', pronunciation: 'es ist ZOW-kahlt' },
          { word: 'Es ist bewölkt', translation: 'It\'s cloudy', pronunciation: 'es ist beh-VERKT' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: 'Zug/U-Bahn', translation: 'Train/Metro', pronunciation: 'tsook/OO-bahn' },
          { word: 'Taxi/Uber', translation: 'Taxi/Uber', pronunciation: 'TAHK-see/OO-ber' },
          { word: 'Flughafen', translation: 'Airport', pronunciation: 'FLOOG-hah-fen' },
          { word: 'Ticket', translation: 'Ticket', pronunciation: 'TIK-et' },
          { word: 'Fahrplan', translation: 'Schedule/Timetable', pronunciation: 'FAHR-plahn' },
        ],
        streetSlang: [
          { word: 'Die U-Bahn nehmen', translation: 'To take the metro', pronunciation: 'dee OO-bahn NAY-men' },
          { word: 'Ein Taxi schnappen', translation: 'To catch a taxi (slang)', pronunciation: 'ine TAHK-see SHNAHP-en' },
          { word: 'Im Flugzeug sein', translation: 'To be on the plane', pronunciation: 'im FLOOG-tsoyk zine' },
          { word: 'Den Flug verpassen', translation: 'To miss the flight', pronunciation: 'den flook fer-PAHS-en' },
          { word: 'Schnell reisen', translation: 'To travel fast', pronunciation: 'shnel RY-zen' },
          { word: 'Auf Reisen sein', translation: 'To be traveling', pronunciation: 'owf RY-zen zine' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Büro', translation: 'Office', pronunciation: 'BOO-roh' },
          { word: 'Meeting', translation: 'Meeting', pronunciation: 'MEE-ting' },
          { word: 'E-Mail', translation: 'Email', pronunciation: 'EE-mayl' },
          { word: 'Chef', translation: 'Boss/Manager', pronunciation: 'shef' },
          { word: 'Kollege', translation: 'Colleague', pronunciation: 'koh-LEH-geh' },
        ],
        streetSlang: [
          { word: 'Arbeit', translation: 'Work/job (slang)', pronunciation: 'AHR-bite' },
          { word: 'Schuften', translation: 'To work hard (slang)', pronunciation: 'SHOOF-ten' },
          { word: 'Auf Arbeit sein', translation: 'To be at work', pronunciation: 'owf AHR-bite zine' },
          { word: 'Großer Chef', translation: 'Big boss', pronunciation: 'GROH-ser shef' },
          { word: 'Wie ein Hund arbeiten', translation: 'To work like a dog', pronunciation: 'vee ine hoont AHR-bite-en' },
          { word: 'Viel zu tun haben', translation: 'To be swamped', pronunciation: 'feel tsoo toon HAH-ben' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Musik', translation: 'Music', pronunciation: 'moo-ZEEK' },
          { word: 'Sport', translation: 'Sports', pronunciation: 'shport' },
          { word: 'Lesen', translation: 'Reading', pronunciation: 'LAY-zen' },
          { word: 'Kochen', translation: 'Cooking', pronunciation: 'KOH-khen' },
          { word: 'Reisen', translation: 'Travel', pronunciation: 'RY-zen' },
        ],
        streetSlang: [
          { word: 'Spaß haben', translation: 'To have fun', pronunciation: 'shpahs HAH-ben' },
          { word: 'Auf etwas stehen', translation: 'To be into something', pronunciation: 'owf ET-vahs SHTAY-en' },
          { word: 'Ein Spiel machen', translation: 'To play a game', pronunciation: 'ine shpeel MAH-khen' },
          { word: 'Voll drauf sein', translation: 'To be really into something', pronunciation: 'fol drowf zine' },
          { word: 'Was lesen', translation: 'To read something', pronunciation: 'vahs LAY-zen' },
          { word: 'Cool sein', translation: 'To be cool/awesome', pronunciation: 'kool zine' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Glücklich', translation: 'Happy', pronunciation: 'GLUUK-likh' },
          { word: 'Traurig', translation: 'Sad', pronunciation: 'TROW-rikh' },
          { word: 'Wütend', translation: 'Angry', pronunciation: 'VOO-tent' },
          { word: 'Müde', translation: 'Tired', pronunciation: 'MOO-deh' },
          { word: 'Aufgeregt', translation: 'Excited', pronunciation: 'OWF-geh-rekt' },
        ],
        streetSlang: [
          { word: 'Gute Laune haben', translation: 'To be in a good mood', pronunciation: 'GOO-teh LOW-neh HAH-ben' },
          { word: 'Schlechte Laune haben', translation: 'To be in a bad mood', pronunciation: 'SHLEKH-teh LOW-neh HAH-ben' },
          { word: 'Sauer sein', translation: 'To be annoyed/angry', pronunciation: 'ZOW-er zine' },
          { word: 'Kaputt sein', translation: 'To be exhausted (slang)', pronunciation: 'kah-POOT zine' },
          { word: 'Super aufgeregt sein', translation: 'To be super excited', pronunciation: 'SOO-per OWF-geh-rekt zine' },
          { word: 'Mega sauer sein', translation: 'To be really angry (slang)', pronunciation: 'MAY-gah ZOW-er zine' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Links', translation: 'Left', pronunciation: 'links' },
          { word: 'Rechts', translation: 'Right', pronunciation: 'rekhts' },
          { word: 'Geradeaus', translation: 'Straight ahead', pronunciation: 'geh-RAH-deh-ows' },
          { word: 'Nah', translation: 'Near', pronunciation: 'nah' },
          { word: 'Weit', translation: 'Far', pronunciation: 'vite' },
        ],
        streetSlang: [
          { word: 'Hier in der Nähe', translation: 'Around here', pronunciation: 'heer in der NAY-heh' },
          { word: 'Dort drüben', translation: 'Over there', pronunciation: 'dort DROO-ben' },
          { word: 'Um die Ecke', translation: 'Around the corner', pronunciation: 'oom dee EK-keh' },
          { word: 'Zwei Straßen weiter', translation: 'Two blocks away', pronunciation: 'tsvy SHTRAH-sen VY-ter' },
          { word: 'Es ist nah', translation: 'It\'s close/near', pronunciation: 'es ist nah' },
          { word: 'Es ist weit', translation: 'It\'s far', pronunciation: 'es ist vite' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Gestern', translation: 'Yesterday', pronunciation: 'GES-tern' },
          { word: 'Letzte Woche', translation: 'Last week', pronunciation: 'LETZ-teh VOH-kheh' },
          { word: 'Ich bin gegangen', translation: 'I went', pronunciation: 'ikh bin geh-GAHN-gen' },
          { word: 'Ich habe gemacht', translation: 'I did', pronunciation: 'ikh HAH-beh geh-MAHKT' },
          { word: 'Ich habe gesehen', translation: 'I saw', pronunciation: 'ikh HAH-beh geh-ZAY-en' },
        ],
        streetSlang: [
          { word: 'Gestern Abend', translation: 'Last night', pronunciation: 'GES-tern AH-bent' },
          { word: 'Vor einer Weile', translation: 'A while ago', pronunciation: 'for INE-er VY-leh' },
          { word: 'Ich habe geschwänzt', translation: 'I skipped/bailed (slang)', pronunciation: 'ikh HAH-beh geh-SHVENTS' },
          { word: 'Ich habe rumgehangen', translation: 'I slacked off', pronunciation: 'ikh HAH-beh room-geh-HAHN-gen' },
          { word: 'Ich habe Zeit verbracht', translation: 'I spent time', pronunciation: 'ikh HAH-beh tsyte fer-BRAHKT' },
          { word: 'Vor Ewigkeiten', translation: 'A long time ago', pronunciation: 'for AY-vikh-ky-ten' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Morgen', translation: 'Tomorrow', pronunciation: 'MOR-gen' },
          { word: 'Nächste Woche', translation: 'Next week', pronunciation: 'NAYKH-steh VOH-kheh' },
          { word: 'Ich werde gehen', translation: 'I will go', pronunciation: 'ikh VER-deh GAY-en' },
          { word: 'Ich möchte', translation: 'I want to', pronunciation: 'ikh MERKH-teh' },
          { word: 'Ich werde', translation: 'I\'m going to', pronunciation: 'ikh VER-deh' },
        ],
        streetSlang: [
          { word: 'Morgen früh', translation: 'Tomorrow morning', pronunciation: 'MOR-gen froo' },
          { word: 'Ich werde rumhängen', translation: 'I\'m going to slack off', pronunciation: 'ikh VER-deh room-HENG-en' },
          { word: 'Ich werde abhauen', translation: 'I\'m going to leave', pronunciation: 'ikh VER-deh AHP-how-en' },
          { word: 'Ich werde arbeiten', translation: 'I\'m going to work', pronunciation: 'ikh VER-deh AHR-by-ten' },
          { word: 'Ich möchte chillen', translation: 'I want to hang out', pronunciation: 'ikh MERKH-teh CHIL-en' },
          { word: 'Ich werde da sein', translation: 'I\'ll be there', pronunciation: 'ikh VER-deh dah zine' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Lass uns gehen', translation: 'Let\'s go', pronunciation: 'lahs oons GAY-en' },
          { word: 'Wie wäre es mit...?', translation: 'How about...?', pronunciation: 'vee VAY-reh es mit' },
          { word: 'Warum gehen wir nicht...?', translation: 'Why don\'t we...?', pronunciation: 'vah-ROOM GAY-en veer nikht' },
          { word: 'Sollten wir...?', translation: 'Should we...?', pronunciation: 'ZOL-ten veer' },
          { word: 'Vielleicht können wir', translation: 'Maybe we can', pronunciation: 'fee-LYKHT KERN-en veer' },
        ],
        streetSlang: [
          { word: 'Gehen wir?', translation: 'Let\'s go? (casual)', pronunciation: 'GAY-en veer' },
          { word: 'Wie wäre es, wenn wir chillen?', translation: 'How about we hang out?', pronunciation: 'vee VAY-reh es ven veer CHIL-en' },
          { word: 'Warum gehen wir nicht?', translation: 'Why don\'t we go?', pronunciation: 'vah-ROOM GAY-en veer nikht' },
          { word: 'Machen wir\'s?', translation: 'Should we do it?', pronunciation: 'MAH-khen veers' },
          { word: 'Vielleicht gehen wir raus', translation: 'Maybe we can go out', pronunciation: 'fee-LYKHT GAY-en veer rows' },
          { word: 'Hauen wir ab?', translation: 'Should we leave? (casual)', pronunciation: 'HOW-en veer ahp' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Ich denke, dass', translation: 'I think', pronunciation: 'ikh DEN-keh dahs' },
          { word: 'Ich glaube', translation: 'I believe', pronunciation: 'ikh GLOW-beh' },
          { word: 'Meiner Meinung nach', translation: 'In my opinion', pronunciation: 'MY-ner MY-noong nahkh' },
          { word: 'Ich stimme zu', translation: 'I agree', pronunciation: 'ikh SHTIM-meh tsoo' },
          { word: 'Ich stimme nicht zu', translation: 'I disagree', pronunciation: 'ikh SHTIM-meh nikht tsoo' },
        ],
        streetSlang: [
          { word: 'Ich denke schon', translation: 'I think so', pronunciation: 'ikh DEN-keh shohn' },
          { word: 'Für mich', translation: 'For me/In my opinion', pronunciation: 'foor mikh' },
          { word: 'Ist cool', translation: 'It\'s cool/I agree', pronunciation: 'ist kool' },
          { word: 'Quatsch', translation: 'No way!/That\'s nonsense', pronunciation: 'kvahch' },
          { word: 'Ist okay', translation: 'It\'s fine/I agree', pronunciation: 'ist oh-KAY' },
          { word: 'Nee', translation: 'Nah/No way (very casual)', pronunciation: 'nay' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Kannst du mir helfen?', translation: 'Can you help me?', pronunciation: 'kahnst doo meer HEL-fen' },
          { word: 'Ich brauche', translation: 'I need', pronunciation: 'ikh BROW-kheh' },
          { word: 'Es ist kaputt', translation: 'It\'s broken', pronunciation: 'es ist kah-POOT' },
          { word: 'Wo kann ich finden...?', translation: 'Where can I find...?', pronunciation: 'voh kahn ikh FIN-den' },
          { word: 'Wie mache ich...?', translation: 'How do I...?', pronunciation: 'vee MAH-kheh ikh' },
        ],
        streetSlang: [
          { word: 'Kannst du mir helfen?', translation: 'Can you help me? (casual)', pronunciation: 'kahnst doo meer HEL-fen' },
          { word: 'Ich brauche einen Gefallen', translation: 'I need a favor', pronunciation: 'ikh BROW-kheh INE-en geh-FAH-len' },
          { word: 'Es ist im Arsch', translation: 'It\'s messed up/broken (slang)', pronunciation: 'es ist im arsh' },
          { word: 'Wo ist es?', translation: 'Where is it?', pronunciation: 'voh ist es' },
          { word: 'Wie mach ich das?', translation: 'How do I do it? (casual)', pronunciation: 'vee mahkh ikh dahs' },
          { word: 'Es ist komplett kaputt', translation: 'It\'s completely broken (slang)', pronunciation: 'es ist kom-PLET kah-POOT' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: Hänschen klein (Little Hans)',
        premium: true,
        songInfo: {
          name: 'Hänschen klein',
          englishName: 'Little Hans',
          type: 'Children\'s Song',
          culturalSignificance: 'A classic German children\'s song about a small boy venturing into the world. Teaches independence, family bonds, and adventure. Often sung in kindergartens and homes across German-speaking countries.'
        },
        lyrics: [
          { original: 'Hänschen klein, ging allein', translation: 'Little Hans went alone', pronunciation: 'HEN-shen kline ging ahl-LINE' },
          { original: 'In die weite Welt hinein', translation: 'Into the wide world', pronunciation: 'in dee VY-teh velt hin-INE' },
          { original: 'Stock und Hut steht ihm gut', translation: 'Staff and hat suit him well', pronunciation: 'shtok oont hoot shtayt eem goot' },
          { original: 'Ist gar wohlgemut', translation: 'He is quite cheerful', pronunciation: 'ist gar VOHL-geh-moot' },
          { original: 'Aber Mama weinet sehr', translation: 'But Mama cries very much', pronunciation: 'AH-ber MAH-mah VY-net zayr' },
          { original: 'Hat ja nun kein Hänschen mehr', translation: 'She has no little Hans anymore', pronunciation: 'hat yah noon kine HEN-shen mayr' },
          { original: 'Wünsch dir Glück, sagt ihr Blick', translation: 'Wish you luck, says her look', pronunciation: 'voonsh deer glook zahkt eer blik' },
          { original: 'Kehr\' nur bald zurück', translation: 'Just return soon', pronunciation: 'kayr noor bahlt tsoo-ROOK' }
        ],
        culturalNotes: 'This song teaches children about independence and adventure while emphasizing the importance of family bonds. It\'s often used in German kindergartens to help children understand separation and reunion. The song represents the universal theme of growing up and exploring the world while maintaining family connections.',
        words: [
          { word: 'Hänschen', translation: 'Little Hans (diminutive)', pronunciation: 'HEN-shen', example: 'Hänschen klein' },
          { word: 'klein', translation: 'Small/little', pronunciation: 'kline', example: 'Hänschen klein' },
          { word: 'allein', translation: 'Alone', pronunciation: 'ahl-LINE', example: 'ging allein' },
          { word: 'weite Welt', translation: 'Wide world', pronunciation: 'VY-teh velt', example: 'In die weite Welt hinein' },
          { word: 'Stock', translation: 'Staff/stick', pronunciation: 'shtok', example: 'Stock und Hut' },
          { word: 'Hut', translation: 'Hat', pronunciation: 'hoot', example: 'Stock und Hut' },
          { word: 'wohlgemut', translation: 'Cheerful/in good spirits', pronunciation: 'VOHL-geh-moot', example: 'Ist gar wohlgemut' },
          { word: 'Mama', translation: 'Mom/Mama', pronunciation: 'MAH-mah', example: 'Aber Mama weinet sehr' },
          { word: 'weinet', translation: 'Cries (old form)', pronunciation: 'VY-net', example: 'Mama weinet sehr' },
          { word: 'zurück', translation: 'Back/return', pronunciation: 'tsoo-ROOK', example: 'Kehr\' nur bald zurück' }
        ],
        streetSlang: [
          { word: 'Dieses Lied ist cool', translation: 'This song is cool', pronunciation: 'DEE-zes leet ist kool' },
          { word: 'Ich liebe diesen Song', translation: 'I love this song', pronunciation: 'ikh LEE-beh DEE-zen song' },
          { word: 'Es ist eingängig', translation: 'It\'s catchy', pronunciation: 'es ist INE-geng-ikh' },
          { word: 'Aus voller Kehle singen', translation: 'To sing at the top of your lungs', pronunciation: 'ows FOL-ler KAY-leh ZING-en' },
          { word: 'Es hat Rhythmus', translation: 'It has rhythm', pronunciation: 'es hat REET-moos' },
          { word: 'Ich kann es auswendig', translation: 'I know it by heart', pronunciation: 'ikh kahn es OWS-ven-dikh' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: 'Besser spät als nie', literalTranslation: 'Better late than never', meaning: 'It\'s better to do something late than not at all', context: 'When someone finally does something they\'ve been putting off', slangEquivalent: 'Besser spät' },
          { original: 'Was du heute kannst besorgen, das verschiebe nicht auf morgen', literalTranslation: 'What you can do today, don\'t postpone until tomorrow', meaning: 'Don\'t put off until tomorrow what you can do today', context: 'Encouraging immediate action', slangEquivalent: 'Mach es jetzt' },
          { original: 'Der frühe Vogel fängt den Wurm', literalTranslation: 'The early bird catches the worm', meaning: 'Those who start early succeed', context: 'Encouraging early action', slangEquivalent: 'Früh aufstehen lohnt sich' },
          { original: 'Wer nicht wagt, der nicht gewinnt', literalTranslation: 'Who doesn\'t dare, doesn\'t win', meaning: 'Nothing ventured, nothing gained', context: 'Encouraging risk-taking', slangEquivalent: 'Risiko lohnt sich' },
          { original: 'Alles hat ein Ende, nur die Wurst hat zwei', literalTranslation: 'Everything has an end, only the sausage has two', meaning: 'Everything comes to an end', context: 'When something is ending', slangEquivalent: 'Alles geht vorbei' },
          { original: 'Wer A sagt, muss auch B sagen', literalTranslation: 'Who says A must also say B', meaning: 'In for a penny, in for a pound', context: 'When committed to something', slangEquivalent: 'Wenn schon, denn schon' },
          { original: 'Übung macht den Meister', literalTranslation: 'Practice makes the master', meaning: 'Practice makes perfect', context: 'Encouraging practice', slangEquivalent: 'Üben, üben, üben' },
          { original: 'Morgenstund hat Gold im Mund', literalTranslation: 'Morning hour has gold in its mouth', meaning: 'The early bird catches the worm', context: 'Encouraging early rising', slangEquivalent: 'Früh aufstehen' }
        ],
        streetSlang: [
          { word: 'Das ist geil', translation: 'That\'s awesome/cool', pronunciation: 'dahs ist gile' },
          { word: 'Das ist krass', translation: 'That\'s crazy/amazing', pronunciation: 'dahs ist krahs' },
          { word: 'Das ist mega', translation: 'That\'s mega/awesome', pronunciation: 'dahs ist MAY-gah' },
          { word: 'Das ist cool', translation: 'That\'s cool', pronunciation: 'dahs ist kool' },
          { word: 'Das ist der Hammer', translation: 'That\'s the bomb/awesome', pronunciation: 'dahs ist der HAH-mer' },
          { word: 'Das ist super', translation: 'That\'s super', pronunciation: 'dahs ist ZOO-per' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'vllt', fullForm: 'vielleicht', englishEquivalent: 'maybe', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'lg', fullForm: 'liebe Grüße', englishEquivalent: 'best regards', usage: 'Anyone, formal', platform: 'Email, WhatsApp' },
          { abbreviation: 'hdgdl', fullForm: 'hab dich ganz doll lieb', englishEquivalent: 'love you very much', usage: 'Close friends/family', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'ka', fullForm: 'keine Ahnung', englishEquivalent: 'no idea', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'kp', fullForm: 'kein Plan', englishEquivalent: 'no idea', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'mfg', fullForm: 'mit freundlichen Grüßen', englishEquivalent: 'with kind regards', usage: 'Anyone, formal', platform: 'Email' },
          { abbreviation: 'gn8', fullForm: 'gute Nacht', englishEquivalent: 'good night', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'vlt', fullForm: 'vielleicht', englishEquivalent: 'maybe', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'bzw', fullForm: 'beziehungsweise', englishEquivalent: 'respectively/or', usage: 'Anyone, formal', platform: 'Email, WhatsApp' },
          { abbreviation: 'zB', fullForm: 'zum Beispiel', englishEquivalent: 'for example', usage: 'Anyone, casual', platform: 'All platforms' }
        ],
        emojiMeanings: [
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Very common, universal' },
          { emoji: '😊', meaning: 'Happy/smiling', culturalContext: 'Friendly, common' },
          { emoji: '🔥', meaning: 'Fire/amazing', culturalContext: 'Something is really good' },
          { emoji: '💪', meaning: 'Strength/good luck', culturalContext: 'Encouragement' },
          { emoji: '❤️', meaning: 'Love', culturalContext: 'Used with friends and family' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: 'Beleza?', translation: 'How\'s it going?', pronunciation: 'beh-LEH-zah' },
          { word: 'Falou', translation: 'See you later', pronunciation: 'fah-LOW' },
          { word: 'E aí, beleza?', translation: 'What\'s up, all good?', pronunciation: 'eh eye beh-LEH-zah' },
          { word: 'Falou, valeu', translation: 'See you, thanks', pronunciation: 'fah-LOW vah-LEH-oo' },
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
          { word: 'Um bocado', translation: 'A bunch/lot', pronunciation: 'oon boh-KAH-doo' },
          { word: 'Demais', translation: 'Too much/a lot', pronunciation: 'deh-MAIS' },
          { word: 'Um monte de', translation: 'A ton of', pronunciation: 'oon MON-teh deh' },
          { word: 'Pra cacete', translation: 'A hell of a lot', pronunciation: 'prah kah-SEH-teh' },
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
          { word: 'Sem problema', translation: 'No problem', pronunciation: 'sayng proh-BLEH-mah' },
          { word: 'Tá de boa', translation: 'It\'s all good', pronunciation: 'tah deh BOH-ah' },
          { word: 'Relaxa', translation: 'Relax/chill', pronunciation: 'reh-LAHK-sah' },
          { word: 'Tá tudo certo', translation: 'Everything\'s fine', pronunciation: 'tah TOO-doo SEHR-too' },
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
          { word: 'Verde de raiva', translation: 'Green with envy/anger', pronunciation: 'VEHR-deh deh RAI-vah' },
          { word: 'Verde esperança', translation: 'Green hope (optimism)', pronunciation: 'VEHR-deh es-peh-RAHN-sah' },
          { word: 'Ver vermelho', translation: 'To see red (get angry)', pronunciation: 'vehr vehr-MEH-lyo' },
          { word: 'Azul da cor do mar', translation: 'Blue like the sea', pronunciation: 'ah-ZOOL dah kor doo mahr' },
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
          { word: 'Tô com fome', translation: 'I\'m hungry', pronunciation: 'toh kohm FOH-meh' },
          { word: 'Tá uma delícia', translation: 'It\'s delicious', pronunciation: 'tah OO-mah deh-LEE-see-ah' },
          { word: 'Tá muito bom', translation: 'It\'s really good', pronunciation: 'tah MOO-ee-toh bohm' },
          { word: 'Tô morrendo de fome', translation: 'I\'m starving', pronunciation: 'toh moh-REN-doo deh FOH-meh' },
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
          { word: 'Brother', translation: 'Bro (borrowed from English)', pronunciation: 'BROH-ther' },
          { word: 'Parceiro', translation: 'Partner/buddy', pronunciation: 'par-SAY-roh' },
          { word: 'Cara, mano', translation: 'Dude, bro', pronunciation: 'KAH-rah MAH-noh' },
          { word: 'Meu parceiro', translation: 'My partner/buddy', pronunciation: 'meh-oo par-SAY-roh' },
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
          { word: 'Cabeça vazia', translation: 'Empty head (forgetful)', pronunciation: 'kah-BEH-sah vah-ZEE-ah' },
          { word: 'Ter bom olho', translation: 'To have a good eye (good judgment)', pronunciation: 'tehr bohm OH-lyo' },
          { word: 'Cabeça cheia', translation: 'Full head (overwhelmed)', pronunciation: 'kah-BEH-sah SHAY-ah' },
          { word: 'Fechar a boca', translation: 'To shut your mouth', pronunciation: 'feh-SHAR ah BOH-kah' },
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
          { word: 'Livre como um pássaro', translation: 'Free as a bird', pronunciation: 'LEE-vreh KOH-moo oong PAH-sah-roh' },
          { word: 'Forte como um cavalo', translation: 'Strong as a horse', pronunciation: 'FOHR-teh KOH-moo oong kah-VAH-loh' },
          { word: 'Esperto como uma raposa', translation: 'Clever as a fox', pronunciation: 'es-PEHR-toh KOH-moo OO-mah rah-POH-zah' },
          { word: 'Bravo como um leão', translation: 'Brave as a lion', pronunciation: 'BRAH-voh KOH-moo oong leh-OW' },
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
          { word: 'Agora mesmo', translation: 'Right this moment', pronunciation: 'ah-GOH-rah MEZ-moh' },
          { word: 'Daqui a pouco', translation: 'In a little bit', pronunciation: 'dah-KEE ah POH-choo' },
          { word: 'Já já', translation: 'Right away/soon', pronunciation: 'zhah zhah' },
          { word: 'Mais tarde', translation: 'Later on', pronunciation: 'mais TAHR-deh' },
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
          { word: 'Frio de rachar', translation: 'Freezing cold', pronunciation: 'FREE-oh deh rah-SHAR' },
          { word: 'Tempo nublado', translation: 'Cloudy weather', pronunciation: 'TEM-poh noo-BLAH-doo' },
          { word: 'Calor do inferno', translation: 'Hell\'s heat', pronunciation: 'kah-LOR doo een-FEHR-loh' },
          { word: 'Vento forte', translation: 'Strong wind', pronunciation: 'VEN-toh FOHR-teh' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: 'Trem/Metrô', translation: 'Train/Metro', pronunciation: 'trehm/meh-TROH' },
          { word: 'Táxi/Uber', translation: 'Taxi/Uber', pronunciation: 'TAHK-see/OO-ber' },
          { word: 'Aeroporto', translation: 'Airport', pronunciation: 'ah-eh-roh-POR-toh' },
          { word: 'Bilhete', translation: 'Ticket', pronunciation: 'beel-YEH-teh' },
          { word: 'Horário', translation: 'Schedule/Timetable', pronunciation: 'oh-RAH-ree-oh' },
        ],
        streetSlang: [
          { word: 'Pegar o metrô', translation: 'To take the metro', pronunciation: 'peh-GAR oh meh-TROH' },
          { word: 'Pegar um táxi', translation: 'To catch a taxi', pronunciation: 'peh-GAR oong TAHK-see' },
          { word: 'Estar no avião', translation: 'To be on the plane', pronunciation: 'es-TAR noh ah-vee-OWN' },
          { word: 'Perder o voo', translation: 'To miss the flight', pronunciation: 'pehr-DEHR oh voh' },
          { word: 'Viajar rápido', translation: 'To travel fast', pronunciation: 'vee-ah-ZHAR RAH-pee-doh' },
          { word: 'Estar viajando', translation: 'To be traveling', pronunciation: 'es-TAR vee-ah-ZHAN-doh' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Escritório', translation: 'Office', pronunciation: 'es-kree-TOH-ree-oh' },
          { word: 'Reunião', translation: 'Meeting', pronunciation: 'reh-oo-nee-OWN' },
          { word: 'Email', translation: 'Email', pronunciation: 'ee-MAYL' },
          { word: 'Chefe', translation: 'Boss/Manager', pronunciation: 'SHEH-feh' },
          { word: 'Colega', translation: 'Colleague', pronunciation: 'koh-LEH-gah' },
        ],
        streetSlang: [
          { word: 'Trampo', translation: 'Work/job (slang)', pronunciation: 'TRAHM-poh' },
          { word: 'Ralar', translation: 'To work hard (slang)', pronunciation: 'rah-LAR' },
          { word: 'Estar no trampo', translation: 'To be at work', pronunciation: 'es-TAR noh TRAHM-poh' },
          { word: 'Chefão', translation: 'Big boss', pronunciation: 'sheh-FOWN' },
          { word: 'Trabalhar que nem cachorro', translation: 'To work like a dog', pronunciation: 'trah-bah-LYAR keh nem kah-SHOH-roh' },
          { word: 'Estar atolado', translation: 'To be swamped', pronunciation: 'es-TAR ah-toh-LAH-doh' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Música', translation: 'Music', pronunciation: 'MOO-see-kah' },
          { word: 'Esportes', translation: 'Sports', pronunciation: 'es-POR-tehs' },
          { word: 'Leitura', translation: 'Reading', pronunciation: 'lay-TOO-rah' },
          { word: 'Cozinhar', translation: 'Cooking', pronunciation: 'koh-zee-NYAR' },
          { word: 'Viajar', translation: 'Travel', pronunciation: 'vee-ah-ZHAR' },
        ],
        streetSlang: [
          { word: 'Se divertir', translation: 'To have fun', pronunciation: 'seh dee-vehr-TEER' },
          { word: 'Estar ligado em', translation: 'To be into something', pronunciation: 'es-TAR lee-GAH-doh em' },
          { word: 'Jogar um jogo', translation: 'To play a game', pronunciation: 'zhoh-GAR oong ZHO-goh' },
          { word: 'Estar no clima', translation: 'To be really into something', pronunciation: 'es-TAR noh KLEE-mah' },
          { word: 'Ler alguma coisa', translation: 'To read something', pronunciation: 'lehr ahl-GOO-mah KOY-zah' },
          { word: 'Estar maneiro', translation: 'It\'s cool/awesome', pronunciation: 'es-TAR mah-NAY-roh' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Feliz', translation: 'Happy', pronunciation: 'feh-LEES' },
          { word: 'Triste', translation: 'Sad', pronunciation: 'TREES-teh' },
          { word: 'Bravo', translation: 'Angry', pronunciation: 'BRAH-voh' },
          { word: 'Cansado', translation: 'Tired', pronunciation: 'kahn-SAH-doh' },
          { word: 'Animado', translation: 'Excited', pronunciation: 'ah-nee-MAH-doh' },
        ],
        streetSlang: [
          { word: 'Estar de boa', translation: 'To be in a good mood', pronunciation: 'es-TAR deh BOH-ah' },
          { word: 'Estar de mal', translation: 'To be in a bad mood', pronunciation: 'es-TAR deh mahl' },
          { word: 'Estar puto', translation: 'To be annoyed/angry (slang)', pronunciation: 'es-TAR POO-toh' },
          { word: 'Estar morto', translation: 'To be exhausted (slang)', pronunciation: 'es-TAR MOR-toh' },
          { word: 'Estar super animado', translation: 'To be super excited', pronunciation: 'es-TAR SOO-per ah-nee-MAH-doh' },
          { word: 'Estar muito puto', translation: 'To be really angry', pronunciation: 'es-TAR MOO-ee-toh POO-toh' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Esquerda', translation: 'Left', pronunciation: 'es-KEHR-dah' },
          { word: 'Direita', translation: 'Right', pronunciation: 'dee-RAY-tah' },
          { word: 'Em frente', translation: 'Straight ahead', pronunciation: 'em FREHN-teh' },
          { word: 'Perto', translation: 'Near', pronunciation: 'PEHR-toh' },
          { word: 'Longe', translation: 'Far', pronunciation: 'LON-zheh' },
        ],
        streetSlang: [
          { word: 'Por aqui', translation: 'Around here', pronunciation: 'por ah-KEE' },
          { word: 'Por ali', translation: 'Over there', pronunciation: 'por ah-LEE' },
          { word: 'Na esquina', translation: 'Around the corner', pronunciation: 'nah es-KEE-nah' },
          { word: 'Duas quadras', translation: 'Two blocks away', pronunciation: 'DOO-ahs KWAH-drahs' },
          { word: 'Está perto', translation: 'It\'s close/near', pronunciation: 'es-TAH PEHR-toh' },
          { word: 'Está longe', translation: 'It\'s far', pronunciation: 'es-TAH LON-zheh' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Ontem', translation: 'Yesterday', pronunciation: 'OHN-tem' },
          { word: 'Semana passada', translation: 'Last week', pronunciation: 'seh-MAH-nah pah-SAH-dah' },
          { word: 'Fui', translation: 'I went', pronunciation: 'fwee' },
          { word: 'Fiz', translation: 'I did', pronunciation: 'fees' },
          { word: 'Vi', translation: 'I saw', pronunciation: 'vee' },
        ],
        streetSlang: [
          { word: 'Ontem à noite', translation: 'Last night', pronunciation: 'OHN-tem ah noy-teh' },
          { word: 'Faz um tempo', translation: 'A while ago', pronunciation: 'fahs oong TEM-poh' },
          { word: 'Fui de bobeira', translation: 'I skipped/bailed (slang)', pronunciation: 'fwee deh boh-BAY-rah' },
          { word: 'Fiquei de boa', translation: 'I slacked off', pronunciation: 'fee-KAY deh BOH-ah' },
          { word: 'Passei tempo', translation: 'I spent time', pronunciation: 'pah-SAY TEM-poh' },
          { word: 'Faz um tempão', translation: 'A long time ago', pronunciation: 'fahs oong tem-POWN' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Amanhã', translation: 'Tomorrow', pronunciation: 'ah-mahn-YAH' },
          { word: 'Próxima semana', translation: 'Next week', pronunciation: 'PROHK-see-mah seh-MAH-nah' },
          { word: 'Vou ir', translation: 'I will go', pronunciation: 'voh eer' },
          { word: 'Quero', translation: 'I want to', pronunciation: 'KEH-roh' },
          { word: 'Vou', translation: 'I\'m going to', pronunciation: 'voh' },
        ],
        streetSlang: [
          { word: 'Amanhã de manhã', translation: 'Tomorrow morning', pronunciation: 'ah-mahn-YAH deh mahn-YAH' },
          { word: 'Vou ficar de boa', translation: 'I\'m going to slack off', pronunciation: 'voh fee-KAR deh BOH-ah' },
          { word: 'Vou vazar', translation: 'I\'m going to leave', pronunciation: 'voh vah-ZAR' },
          { word: 'Vou trabalhar', translation: 'I\'m going to work', pronunciation: 'voh trah-bah-LYAR' },
          { word: 'Quero curtir', translation: 'I want to hang out', pronunciation: 'KEH-roh koor-TEER' },
          { word: 'Vou estar lá', translation: 'I\'ll be there', pronunciation: 'voh es-TAR lah' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Vamos', translation: 'Let\'s go', pronunciation: 'VAH-mohs' },
          { word: 'Que tal...?', translation: 'How about...?', pronunciation: 'keh tahl' },
          { word: 'Por que não...?', translation: 'Why don\'t we...?', pronunciation: 'por keh now' },
          { word: 'Devemos...?', translation: 'Should we...?', pronunciation: 'deh-VEH-mohs' },
          { word: 'Talvez possamos', translation: 'Maybe we can', pronunciation: 'tahl-VEHS poh-SAH-mohs' },
        ],
        streetSlang: [
          { word: 'Bora?', translation: 'Let\'s go? (casual)', pronunciation: 'BOH-rah' },
          { word: 'Que tal a gente curtir?', translation: 'How about we hang out?', pronunciation: 'keh tahl ah ZHEN-teh koor-TEER' },
          { word: 'Por que não vamos?', translation: 'Why don\'t we go?', pronunciation: 'por keh now VAH-mohs' },
          { word: 'Fazemos?', translation: 'Should we do it?', pronunciation: 'fah-ZEH-mohs' },
          { word: 'Talvez a gente saia', translation: 'Maybe we can go out', pronunciation: 'tahl-VEHS ah ZHEN-teh SAY-ah' },
          { word: 'Vamos vazar?', translation: 'Should we leave? (casual)', pronunciation: 'VAH-mohs vah-ZAR' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Acho que', translation: 'I think', pronunciation: 'AH-sho keh' },
          { word: 'Acredito', translation: 'I believe', pronunciation: 'ah-kreh-DEE-toh' },
          { word: 'Na minha opinião', translation: 'In my opinion', pronunciation: 'nah MEE-nyah oh-pee-nee-OWN' },
          { word: 'Concordo', translation: 'I agree', pronunciation: 'kon-KOR-doh' },
          { word: 'Discordo', translation: 'I disagree', pronunciation: 'dees-KOR-doh' },
        ],
        streetSlang: [
          { word: 'Acho que sim', translation: 'I think so', pronunciation: 'AH-sho keh seem' },
          { word: 'Pra mim', translation: 'For me/In my opinion', pronunciation: 'prah meem' },
          { word: 'Tá de boa', translation: 'It\'s cool/I agree', pronunciation: 'tah deh BOH-ah' },
          { word: 'Nem aí', translation: 'No way!/I don\'t care', pronunciation: 'nem ah-EE' },
          { word: 'Tá tudo certo', translation: 'It\'s fine/I agree', pronunciation: 'tah TOO-doh SEHR-toh' },
          { word: 'Nem', translation: 'Nah/No way (very casual)', pronunciation: 'nem' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Pode me ajudar?', translation: 'Can you help me?', pronunciation: 'POH-deh meh ah-zhoo-DAR' },
          { word: 'Preciso', translation: 'I need', pronunciation: 'preh-SEE-zoh' },
          { word: 'Está quebrado', translation: 'It\'s broken', pronunciation: 'es-TAH keh-BRAH-doh' },
          { word: 'Onde posso encontrar...?', translation: 'Where can I find...?', pronunciation: 'OHN-deh POH-soh en-kon-TRAR' },
          { word: 'Como faço...?', translation: 'How do I...?', pronunciation: 'KOH-moh FAH-soh' },
        ],
        streetSlang: [
          { word: 'Me dá uma mão?', translation: 'Can you help me? (casual)', pronunciation: 'meh dah OO-mah mown' },
          { word: 'Preciso de um favor', translation: 'I need a favor', pronunciation: 'preh-SEE-zoh deh oong fah-VOR' },
          { word: 'Tá zuado', translation: 'It\'s messed up/broken (slang)', pronunciation: 'tah zoo-AH-doh' },
          { word: 'Onde tá?', translation: 'Where is it?', pronunciation: 'OHN-deh tah' },
          { word: 'Como que faz isso?', translation: 'How do I do it? (casual)', pronunciation: 'KOH-moh keh fahs EE-soh' },
          { word: 'Tá completamente zuado', translation: 'It\'s completely broken (slang)', pronunciation: 'tah kom-pleh-TAH-men-teh zoo-AH-doh' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: A Barata (The Cockroach)',
        premium: true,
        songInfo: {
          name: 'A Barata',
          englishName: 'The Cockroach',
          type: 'Children\'s Song',
          culturalSignificance: 'A popular Brazilian children\'s song known for its humor and playfulness. Teaches vocabulary through repetition and humor. Often sung in Brazilian schools and homes, teaching children about animals and clothing in a fun way.'
        },
        lyrics: [
          { original: 'A barata diz que tem', translation: 'The cockroach says it has', pronunciation: 'ah bah-RAH-tah dees keh tem' },
          { original: 'Sete saias de filó', translation: 'Seven petticoats of fine fabric', pronunciation: 'SEH-teh SAY-ahs deh fee-LOH' },
          { original: 'É mentira da barata', translation: 'It\'s a lie from the cockroach', pronunciation: 'eh men-TEE-rah dah bah-RAH-tah' },
          { original: 'Ela tem é uma só', translation: 'She only has one', pronunciation: 'EH-lah tem eh OO-mah soh' },
          { original: 'Ah ah ah, oh oh oh', translation: 'Ah ah ah, oh oh oh', pronunciation: 'ah ah ah oh oh oh' },
          { original: 'Ela tem é uma só', translation: 'She only has one', pronunciation: 'EH-lah tem eh OO-mah soh' },
          { original: 'A barata diz que tem', translation: 'The cockroach says it has', pronunciation: 'ah bah-RAH-tah dees keh tem' },
          { original: 'Um sapato de veludo', translation: 'A velvet shoe', pronunciation: 'oon sah-PAH-toh deh veh-LOO-doh' },
          { original: 'É mentira da barata', translation: 'It\'s a lie from the cockroach', pronunciation: 'eh men-TEE-rah dah bah-RAH-tah' },
          { original: 'O pé dela é peludo', translation: 'Her foot is hairy', pronunciation: 'oh peh DEH-lah eh peh-LOO-doh' },
          { original: 'Ah ah ah, oh oh oh', translation: 'Ah ah ah, oh oh oh', pronunciation: 'ah ah ah oh oh oh' },
          { original: 'O pé dela é peludo', translation: 'Her foot is hairy', pronunciation: 'oh peh DEH-lah eh peh-LOO-doh' }
        ],
        culturalNotes: 'This humorous song is beloved by Brazilian children for its playful nature and repetition. It teaches vocabulary about clothing and body parts while being entertaining. The song is often used in early childhood education to engage children and teach them Portuguese through music and humor.',
        words: [
          { word: 'Barata', translation: 'Cockroach', pronunciation: 'bah-RAH-tah', example: 'A barata diz que tem' },
          { word: 'Sete', translation: 'Seven', pronunciation: 'SEH-teh', example: 'Sete saias' },
          { word: 'Saias', translation: 'Petticoats/skirts', pronunciation: 'SAY-ahs', example: 'Sete saias de filó' },
          { word: 'Filó', translation: 'Fine fabric', pronunciation: 'fee-LOH', example: 'Sete saias de filó' },
          { word: 'Mentira', translation: 'Lie/falsehood', pronunciation: 'men-TEE-rah', example: 'É mentira da barata' },
          { word: 'Sapato', translation: 'Shoe', pronunciation: 'sah-PAH-toh', example: 'Um sapato de veludo' },
          { word: 'Veludo', translation: 'Velvet', pronunciation: 'veh-LOO-doh', example: 'Um sapato de veludo' },
          { word: 'Pé', translation: 'Foot', pronunciation: 'peh', example: 'O pé dela é peludo' },
          { word: 'Peludo', translation: 'Hairy', pronunciation: 'peh-LOO-doh', example: 'O pé dela é peludo' },
          { word: 'Ela', translation: 'She', pronunciation: 'EH-lah', example: 'Ela tem é uma só' }
        ],
        streetSlang: [
          { word: 'Essa música é massa', translation: 'This song is cool/awesome', pronunciation: 'EH-sah MOO-see-kah eh MAH-sah' },
          { word: 'Adoro essa música', translation: 'I love this song', pronunciation: 'ah-DOH-roh EH-sah MOO-see-kah' },
          { word: 'É viciante', translation: 'It\'s addictive/catchy', pronunciation: 'eh vee-see-AHN-teh' },
          { word: 'Cantar no topo da voz', translation: 'To sing at the top of your lungs', pronunciation: 'kahn-TAR noh TOH-poh dah vohs' },
          { word: 'Tem um ritmo legal', translation: 'It has a cool rhythm', pronunciation: 'tem oong REET-moh leh-GAHL' },
          { word: 'Sei de cor', translation: 'I know it by heart', pronunciation: 'say deh kor' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: 'Antes tarde do que nunca', literalTranslation: 'Better late than never', meaning: 'It\'s better to do something late than not at all', context: 'When someone finally does something', slangEquivalent: 'Melhor tarde' },
          { original: 'Não deixe para amanhã o que você pode fazer hoje', literalTranslation: 'Don\'t leave for tomorrow what you can do today', meaning: 'Don\'t put off until tomorrow what you can do today', context: 'Encouraging immediate action', slangEquivalent: 'Faz agora' },
          { original: 'Quem cedo madruga, Deus ajuda', literalTranslation: 'God helps those who wake up early', meaning: 'The early bird catches the worm', context: 'Encouraging early action', slangEquivalent: 'Acorda cedo' },
          { original: 'Quem não arrisca, não petisca', literalTranslation: 'Who doesn\'t risk, doesn\'t snack', meaning: 'Nothing ventured, nothing gained', context: 'Encouraging risk-taking', slangEquivalent: 'Arrisca aí' },
          { original: 'Quem tudo quer, tudo perde', literalTranslation: 'Who wants everything, loses everything', meaning: 'Greed leads to loss', context: 'Warning against greed', slangEquivalent: 'Não seja ganancioso' },
          { original: 'A união faz a força', literalTranslation: 'Unity makes strength', meaning: 'Together we are stronger', context: 'Encouraging teamwork', slangEquivalent: 'Juntos somos mais fortes' },
          { original: 'A prática leva à perfeição', literalTranslation: 'Practice leads to perfection', meaning: 'Practice makes perfect', context: 'Encouraging practice', slangEquivalent: 'Treina mais' },
          { original: 'Água mole em pedra dura, tanto bate até que fura', literalTranslation: 'Soft water on hard stone, hits so much until it pierces', meaning: 'Persistence pays off', context: 'Encouraging persistence', slangEquivalent: 'Não desiste' }
        ],
        streetSlang: [
          { word: 'Massa demais', translation: 'Super cool/awesome', pronunciation: 'MAH-sah deh-MAIS' },
          { word: 'Muito legal', translation: 'Very cool', pronunciation: 'MOO-ee-toh leh-GAHL' },
          { word: 'Top demais', translation: 'Top/awesome', pronunciation: 'top deh-MAIS' },
          { word: 'Show de bola', translation: 'Great/awesome', pronunciation: 'show deh BOH-lah' },
          { word: 'Muito bom', translation: 'Very good', pronunciation: 'MOO-ee-toh bohm' },
          { word: 'Perfeito', translation: 'Perfect', pronunciation: 'per-FAY-toh' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'vc', fullForm: 'você', englishEquivalent: 'you', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'tb', fullForm: 'também', englishEquivalent: 'also/too', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: 'pq', fullForm: 'porque', englishEquivalent: 'because', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'q', fullForm: 'que', englishEquivalent: 'that/what', usage: 'Friends only, very casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'blz', fullForm: 'beleza', englishEquivalent: 'okay/cool', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'vlw', fullForm: 'valeu', englishEquivalent: 'thanks', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'flw', fullForm: 'falou', englishEquivalent: 'see you', usage: 'Friends only, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'obg', fullForm: 'obrigado', englishEquivalent: 'thanks', usage: 'Anyone, casual', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'sdd', fullForm: 'saudade', englishEquivalent: 'missing you', usage: 'Close friends/family', platform: 'WhatsApp, Instagram' },
          { abbreviation: 'bjs', fullForm: 'beijos', englishEquivalent: 'kisses', usage: 'Friends/family', platform: 'WhatsApp, Instagram' }
        ],
        emojiMeanings: [
          { emoji: '😊', meaning: 'Happy/smiling', culturalContext: 'Very common, friendly' },
          { emoji: '❤️', meaning: 'Love', culturalContext: 'Used with friends and family' },
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Universal approval' },
          { emoji: '🔥', meaning: 'Fire/amazing', culturalContext: 'Something is really good' },
          { emoji: '💪', meaning: 'Strength/good luck', culturalContext: 'Encouragement' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: '元気？', translation: 'How\'s it going?', pronunciation: 'gen-ki', romanji: 'Genki?' },
          { word: 'またね', translation: 'See you later', pronunciation: 'ma-ta-ne', romanji: 'Matane' },
          { word: 'おっす', translation: 'Hey (very casual)', pronunciation: 'oss', romanji: 'Ossu' },
          { word: 'また今度', translation: 'See you next time', pronunciation: 'ma-ta kon-do', romanji: 'Mata kondo' },
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
          { word: 'めっちゃ', translation: 'Super/really (Kansai dialect)', pronunciation: 'met-cha', romanji: 'Metcha' },
          { word: 'やばい', translation: 'Crazy/amazing (slang)', pronunciation: 'ya-bai', romanji: 'Yabai' },
          { word: '超', translation: 'Super/ultra', pronunciation: 'chou', romanji: 'Chou' },
          { word: 'マジで', translation: 'Seriously/for real', pronunciation: 'ma-ji de', romanji: 'Majide' },
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
          { word: '問題ない', translation: 'No problem', pronunciation: 'mon-dai-nai', romanji: 'Mondai nai' },
          { word: 'いいよ', translation: 'It\'s fine/alright', pronunciation: 'ii-yo', romanji: 'Ii yo' },
          { word: '平気', translation: 'No worries/chill', pronunciation: 'hei-ki', romanji: 'Heiki' },
          { word: '大丈夫だよ', translation: 'It\'s fine, don\'t worry', pronunciation: 'dai-jou-bu da-yo', romanji: 'Daijoubu dayo' },
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
          { word: '青ざめる', translation: 'To turn pale (blue)', pronunciation: 'ao-za-me-ru', romanji: 'Aozameru' },
          { word: '緑の光', translation: 'Green light (go ahead)', pronunciation: 'midori-no-hikari', romanji: 'Midori no hikari' },
          { word: '赤面する', translation: 'To blush (red face)', pronunciation: 'seki-men su-ru', romanji: 'Sekimen suru' },
          { word: '青い顔', translation: 'Blue face (pale/scared)', pronunciation: 'ao-i kao', romanji: 'Aoi kao' },
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
          { word: 'お腹すいた', translation: 'I\'m hungry', pronunciation: 'o-na-ka-su-i-ta', romanji: 'Onaka suita' },
          { word: 'いただきます', translation: 'Thanks for the meal', pronunciation: 'i-ta-da-ki-ma-su', romanji: 'Itadakimasu' },
          { word: 'めちゃうまい', translation: 'Super delicious', pronunciation: 'me-cha u-ma-i', romanji: 'Mecha umai' },
          { word: 'お腹ペコペコ', translation: 'I\'m starving', pronunciation: 'o-na-ka pe-ko-pe-ko', romanji: 'Onaka pekopeko' },
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
          { word: '友達', translation: 'Friend (casual)', pronunciation: 'to-mo-da-chi', romanji: 'Tomodachi' },
          { word: '親友', translation: 'Best friend', pronunciation: 'shin-yuu', romanji: 'Shinyuu' },
          { word: 'お前', translation: 'You (very casual)', pronunciation: 'o-mae', romanji: 'Omae' },
          { word: 'おい', translation: 'Hey (casual)', pronunciation: 'oi', romanji: 'Oi' },
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
          { word: '頭がいい', translation: 'To be smart (good head)', pronunciation: 'a-ta-ma-ga-ii', romanji: 'Atama ga ii' },
          { word: '口が重い', translation: 'To be tight-lipped (heavy mouth)', pronunciation: 'ku-chi-ga-o-mo-i', romanji: 'Kuchi ga omoi' },
          { word: '頭がいいね', translation: 'You\'re smart', pronunciation: 'a-ta-ma-ga-ii-ne', romanji: 'Atama ga iine' },
          { word: '口を閉じる', translation: 'To shut your mouth', pronunciation: 'ku-chi-wo-to-ji-ru', romanji: 'Kuchi wo tojiru' },
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
          { word: '鳥のように自由', translation: 'Free as a bird', pronunciation: 'to-ri-no-yo-ni-ji-yuu', romanji: 'Tori no youni jiyuu' },
          { word: '馬のように強い', translation: 'Strong as a horse', pronunciation: 'u-ma-no-yo-ni-tsu-yo-i', romanji: 'Uma no youni tsuyoi' },
          { word: 'キツネのように賢い', translation: 'Clever as a fox', pronunciation: 'ki-tsu-ne-no-yo-ni ka-shi-ko-i', romanji: 'Kitsune no youni kashikoi' },
          { word: 'ライオンのように勇敢', translation: 'Brave as a lion', pronunciation: 'ra-i-on-no-yo-ni yu-u-kan', romanji: 'Raion no youni yuukan' },
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
          { word: 'すぐに', translation: 'Immediately', pronunciation: 'su-gu-ni', romanji: 'Sugu ni' },
          { word: 'もうすぐ', translation: 'Soon', pronunciation: 'mou-su-gu', romanji: 'Mou sugu' },
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
          { word: '寒い', translation: 'It\'s cold', pronunciation: 'sa-mu-i', romanji: 'Samui' },
          { word: '暑い', translation: 'It\'s hot', pronunciation: 'a-tsu-i', romanji: 'Atsui' },
          { word: 'めちゃ暑い', translation: 'Super hot', pronunciation: 'me-cha a-tsu-i', romanji: 'Mecha atsui' },
          { word: '曇り', translation: 'Cloudy', pronunciation: 'ku-mo-ri', romanji: 'Kumori' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: '電車/地下鉄', translation: 'Train/Metro', pronunciation: 'densha/chikatetsu', romanji: 'Densha/Chikatetsu' },
          { word: 'タクシー/ウーバー', translation: 'Taxi/Uber', pronunciation: 'takushii/uubaa', romanji: 'Takushii/Uubaa' },
          { word: '空港', translation: 'Airport', pronunciation: 'kuukou', romanji: 'Kuukou' },
          { word: '切符', translation: 'Ticket', pronunciation: 'kippu', romanji: 'Kippu' },
          { word: '時刻表', translation: 'Schedule/Timetable', pronunciation: 'jikokuhyou', romanji: 'Jikokuhyou' },
        ],
        streetSlang: [
          { word: '電車に乗る', translation: 'To take the train/metro', pronunciation: 'densha ni noru', romanji: 'Densha ni noru' },
          { word: 'タクシーを拾う', translation: 'To catch a taxi', pronunciation: 'takushii wo hirou', romanji: 'Takushii wo hirou' },
          { word: '飛行機に乗っている', translation: 'To be on the plane', pronunciation: 'hikouki ni notte iru', romanji: 'Hikouki ni notte iru' },
          { word: '飛行機を逃す', translation: 'To miss the flight', pronunciation: 'hikouki wo nogasu', romanji: 'Hikouki wo nogasu' },
          { word: '速く移動する', translation: 'To travel fast', pronunciation: 'hayaku idou suru', romanji: 'Hayaku idou suru' },
          { word: '旅行中', translation: 'To be traveling', pronunciation: 'ryokouchuu', romanji: 'Ryokouchuu' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'オフィス', translation: 'Office', pronunciation: 'ofisu', romanji: 'Ofisu' },
          { word: '会議', translation: 'Meeting', pronunciation: 'kaigi', romanji: 'Kaigi' },
          { word: 'メール', translation: 'Email', pronunciation: 'meeru', romanji: 'Meeru' },
          { word: '上司', translation: 'Boss/Manager', pronunciation: 'joushi', romanji: 'Joushi' },
          { word: '同僚', translation: 'Colleague', pronunciation: 'douryou', romanji: 'Douryou' },
        ],
        streetSlang: [
          { word: '仕事', translation: 'Work/job', pronunciation: 'shigoto', romanji: 'Shigoto' },
          { word: 'ガンガン働く', translation: 'To work hard (slang)', pronunciation: 'gangan hataraku', romanji: 'Gangan hataraku' },
          { word: '仕事中', translation: 'To be at work', pronunciation: 'shigotochuu', romanji: 'Shigotochuu' },
          { word: '大ボス', translation: 'Big boss', pronunciation: 'daibosu', romanji: 'Daibosu' },
          { word: '犬のように働く', translation: 'To work like a dog', pronunciation: 'inu no youni hataraku', romanji: 'Inu no youni hataraku' },
          { word: '忙しい', translation: 'To be swamped', pronunciation: 'isogashii', romanji: 'Isogashii' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: '音楽', translation: 'Music', pronunciation: 'ongaku', romanji: 'Ongaku' },
          { word: 'スポーツ', translation: 'Sports', pronunciation: 'supootsu', romanji: 'Supootsu' },
          { word: '読書', translation: 'Reading', pronunciation: 'dokusho', romanji: 'Dokusho' },
          { word: '料理', translation: 'Cooking', pronunciation: 'ryouri', romanji: 'Ryouri' },
          { word: '旅行', translation: 'Travel', pronunciation: 'ryokou', romanji: 'Ryokou' },
        ],
        streetSlang: [
          { word: '楽しむ', translation: 'To have fun', pronunciation: 'tanoshimu', romanji: 'Tanoshimu' },
          { word: 'ハマる', translation: 'To be into something', pronunciation: 'hamaru', romanji: 'Hamaru' },
          { word: 'ゲームをする', translation: 'To play a game', pronunciation: 'geemu wo suru', romanji: 'Geemu wo suru' },
          { word: 'めちゃハマってる', translation: 'To be really into something', pronunciation: 'mecha hamatteru', romanji: 'Mecha hamatteru' },
          { word: '本を読む', translation: 'To read something', pronunciation: 'hon wo yomu', romanji: 'Hon wo yomu' },
          { word: 'かっこいい', translation: 'It\'s cool/awesome', pronunciation: 'kakkoii', romanji: 'Kakkoii' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: '幸せ', translation: 'Happy', pronunciation: 'shiawase', romanji: 'Shiawase' },
          { word: '悲しい', translation: 'Sad', pronunciation: 'kanashii', romanji: 'Kanashii' },
          { word: '怒っている', translation: 'Angry', pronunciation: 'okotte iru', romanji: 'Okotte iru' },
          { word: '疲れた', translation: 'Tired', pronunciation: 'tsukareta', romanji: 'Tsukareta' },
          { word: '興奮している', translation: 'Excited', pronunciation: 'koufun shite iru', romanji: 'Koufun shite iru' },
        ],
        streetSlang: [
          { word: '機嫌がいい', translation: 'To be in a good mood', pronunciation: 'kigen ga ii', romanji: 'Kigen ga ii' },
          { word: '機嫌が悪い', translation: 'To be in a bad mood', pronunciation: 'kigen ga warui', romanji: 'Kigen ga warui' },
          { word: 'イライラする', translation: 'To be annoyed/angry', pronunciation: 'iraira suru', romanji: 'Iraira suru' },
          { word: 'クタクタ', translation: 'To be exhausted (slang)', pronunciation: 'kutakuta', romanji: 'Kutakuta' },
          { word: '超興奮', translation: 'To be super excited', pronunciation: 'chou koufun', romanji: 'Chou koufun' },
          { word: 'めちゃ怒ってる', translation: 'To be really angry', pronunciation: 'mecha okotteru', romanji: 'Mecha okotteru' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: '左', translation: 'Left', pronunciation: 'hidari', romanji: 'Hidari' },
          { word: '右', translation: 'Right', pronunciation: 'migi', romanji: 'Migi' },
          { word: 'まっすぐ', translation: 'Straight ahead', pronunciation: 'massugu', romanji: 'Massugu' },
          { word: '近い', translation: 'Near', pronunciation: 'chikai', romanji: 'Chikai' },
          { word: '遠い', translation: 'Far', pronunciation: 'tooi', romanji: 'Tooi' },
        ],
        streetSlang: [
          { word: 'この辺り', translation: 'Around here', pronunciation: 'kono atari', romanji: 'Kono atari' },
          { word: 'あそこ', translation: 'Over there', pronunciation: 'asoko', romanji: 'Asoko' },
          { word: '角を曲がる', translation: 'Around the corner', pronunciation: 'kado wo magaru', romanji: 'Kado wo magaru' },
          { word: '二ブロック', translation: 'Two blocks away', pronunciation: 'ni burokku', romanji: 'Ni burokku' },
          { word: '近い', translation: 'It\'s close/near', pronunciation: 'chikai', romanji: 'Chikai' },
          { word: '遠い', translation: 'It\'s far', pronunciation: 'tooi', romanji: 'Tooi' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: '昨日', translation: 'Yesterday', pronunciation: 'kinou', romanji: 'Kinou' },
          { word: '先週', translation: 'Last week', pronunciation: 'senshuu', romanji: 'Senshuu' },
          { word: '行った', translation: 'I went', pronunciation: 'itta', romanji: 'Itta' },
          { word: 'した', translation: 'I did', pronunciation: 'shita', romanji: 'Shita' },
          { word: '見た', translation: 'I saw', pronunciation: 'mita', romanji: 'Mita' },
        ],
        streetSlang: [
          { word: '昨夜', translation: 'Last night', pronunciation: 'sakuya', romanji: 'Sakuya' },
          { word: '少し前', translation: 'A while ago', pronunciation: 'sukoshi mae', romanji: 'Sukoshi mae' },
          { word: 'サボった', translation: 'I skipped/bailed (slang)', pronunciation: 'sabotta', romanji: 'Sabotta' },
          { word: 'ダラダラした', translation: 'I slacked off', pronunciation: 'daradara shita', romanji: 'Daradara shita' },
          { word: '時間を過ごした', translation: 'I spent time', pronunciation: 'jikan wo sugoshita', romanji: 'Jikan wo sugoshita' },
          { word: 'ずっと前', translation: 'A long time ago', pronunciation: 'zutto mae', romanji: 'Zutto mae' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: '明日', translation: 'Tomorrow', pronunciation: 'ashita', romanji: 'Ashita' },
          { word: '来週', translation: 'Next week', pronunciation: 'raishuu', romanji: 'Raishuu' },
          { word: '行く', translation: 'I will go', pronunciation: 'iku', romanji: 'Iku' },
          { word: 'したい', translation: 'I want to', pronunciation: 'shitai', romanji: 'Shitai' },
          { word: 'する', translation: 'I\'m going to', pronunciation: 'suru', romanji: 'Suru' },
        ],
        streetSlang: [
          { word: '明日の朝', translation: 'Tomorrow morning', pronunciation: 'ashita no asa', romanji: 'Ashita no asa' },
          { word: 'ダラダラする', translation: 'I\'m going to slack off', pronunciation: 'daradara suru', romanji: 'Daradara suru' },
          { word: '帰る', translation: 'I\'m going to leave', pronunciation: 'kaeru', romanji: 'Kaeru' },
          { word: '働く', translation: 'I\'m going to work', pronunciation: 'hataraku', romanji: 'Hataraku' },
          { word: '遊びたい', translation: 'I want to hang out', pronunciation: 'asobitai', romanji: 'Asobitai' },
          { word: 'そこにいる', translation: 'I\'ll be there', pronunciation: 'soko ni iru', romanji: 'Soko ni iru' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '行こう', translation: 'Let\'s go', pronunciation: 'ikou', romanji: 'Ikou' },
          { word: '...はどう?', translation: 'How about...?', pronunciation: '...wa dou', romanji: '...wa dou' },
          { word: '...しない?', translation: 'Why don\'t we...?', pronunciation: '...shinai', romanji: '...shinai' },
          { word: '...すべき?', translation: 'Should we...?', pronunciation: '...subeki', romanji: '...subeki' },
          { word: '...できるかも', translation: 'Maybe we can', pronunciation: '...dekiru kamo', romanji: '...dekiru kamo' },
        ],
        streetSlang: [
          { word: '行く?', translation: 'Let\'s go? (casual)', pronunciation: 'iku', romanji: 'Iku' },
          { word: '遊ばない?', translation: 'How about we hang out?', pronunciation: 'asobanai', romanji: 'Asobanai' },
          { word: '行かない?', translation: 'Why don\'t we go?', pronunciation: 'ikanai', romanji: 'Ikanai' },
          { word: 'やる?', translation: 'Should we do it?', pronunciation: 'yaru', romanji: 'Yaru' },
          { word: '出かけるかも', translation: 'Maybe we can go out', pronunciation: 'dekakeru kamo', romanji: 'Dekakeru kamo' },
          { word: '帰る?', translation: 'Should we leave? (casual)', pronunciation: 'kaeru', romanji: 'Kaeru' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: '...と思う', translation: 'I think', pronunciation: '...to omou', romanji: '...to omou' },
          { word: '信じる', translation: 'I believe', pronunciation: 'shinjiru', romanji: 'Shinjiru' },
          { word: '私の意見では', translation: 'In my opinion', pronunciation: 'watashi no iken dewa', romanji: 'Watashi no iken dewa' },
          { word: '賛成', translation: 'I agree', pronunciation: 'sansei', romanji: 'Sansei' },
          { word: '反対', translation: 'I disagree', pronunciation: 'hantai', romanji: 'Hantai' },
        ],
        streetSlang: [
          { word: 'そう思う', translation: 'I think so', pronunciation: 'sou omou', romanji: 'Sou omou' },
          { word: '私にとって', translation: 'For me/In my opinion', pronunciation: 'watashi ni totte', romanji: 'Watashi ni totte' },
          { word: 'いいね', translation: 'It\'s cool/I agree', pronunciation: 'iine', romanji: 'Iine' },
          { word: 'ありえない', translation: 'No way!/That\'s impossible', pronunciation: 'arienai', romanji: 'Arienai' },
          { word: '大丈夫', translation: 'It\'s fine/I agree', pronunciation: 'daijoubu', romanji: 'Daijoubu' },
          { word: 'ううん', translation: 'Nah/No way (very casual)', pronunciation: 'uun', romanji: 'Uun' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '手伝ってくれる?', translation: 'Can you help me?', pronunciation: 'tetsudatte kureru', romanji: 'Tetsudatte kureru' },
          { word: '必要', translation: 'I need', pronunciation: 'hitsuyou', romanji: 'Hitsuyou' },
          { word: '壊れた', translation: 'It\'s broken', pronunciation: 'kowareta', romanji: 'Kowareta' },
          { word: '...はどこで見つけられる?', translation: 'Where can I find...?', pronunciation: '...wa doko de mitsukerareru', romanji: '...wa doko de mitsukerareru' },
          { word: '...どうやってする?', translation: 'How do I...?', pronunciation: '...douyatte suru', romanji: '...douyatte suru' },
        ],
        streetSlang: [
          { word: '手伝って', translation: 'Can you help me? (casual)', pronunciation: 'tetsudatte', romanji: 'Tetsudatte' },
          { word: 'お願いがある', translation: 'I need a favor', pronunciation: 'onegai ga aru', romanji: 'Onegai ga aru' },
          { word: 'めちゃくちゃ', translation: 'It\'s messed up/broken (slang)', pronunciation: 'mechakucha', romanji: 'Mechakucha' },
          { word: 'どこ?', translation: 'Where is it?', pronunciation: 'doko', romanji: 'Doko' },
          { word: 'これどうやる?', translation: 'How do I do it? (casual)', pronunciation: 'kore dou yaru', romanji: 'Kore dou yaru' },
          { word: '完全に壊れた', translation: 'It\'s completely broken (slang)', pronunciation: 'kanzen ni kowareta', romanji: 'Kanzen ni kowareta' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: ちょうちょう (Butterfly)',
        premium: true,
        songInfo: {
          name: 'ちょうちょう',
          englishName: 'Butterfly',
          type: 'Children\'s Song',
          culturalSignificance: 'A traditional Japanese children\'s song about a butterfly. Teaches nature vocabulary, movement, and seasons. Often sung in spring and used in early childhood education.'
        },
        lyrics: [
          { original: 'ちょうちょう ちょうちょう', translation: 'Butterfly, butterfly', pronunciation: 'chou chou chou chou', romanji: 'Chou chou chou chou' },
          { original: '菜の葉にとまれ', translation: 'Land on the vegetable leaves', pronunciation: 'na no ha ni to ma re', romanji: 'Na no ha ni tomare' },
          { original: '菜の葉にとまれば', translation: 'If you land on the vegetable leaves', pronunciation: 'na no ha ni to ma re ba', romanji: 'Na no ha ni tomareba' },
          { original: '桜の花とまれ', translation: 'Land on the cherry blossoms', pronunciation: 'sa ku ra no ha na to ma re', romanji: 'Sakura no hana tomare' },
          { original: '桜の花とまれば', translation: 'If you land on the cherry blossoms', pronunciation: 'sa ku ra no ha na to ma re ba', romanji: 'Sakura no hana tomareba' },
          { original: '菜の葉にとまれ', translation: 'Land on the vegetable leaves', pronunciation: 'na no ha ni to ma re', romanji: 'Na no ha ni tomare' }
        ],
        culturalNotes: 'This song celebrates spring and cherry blossom season (桜), a deeply important cultural time in Japan. The song teaches children about nature, butterflies, and the beauty of seasonal changes. It\'s commonly sung during hanami (cherry blossom viewing) season and in preschools.',
        words: [
          { word: 'ちょうちょう', translation: 'Butterfly', pronunciation: 'chou chou', romanji: 'Chou chou', example: 'ちょうちょう ちょうちょう' },
          { word: '菜の葉', translation: 'Vegetable leaves', pronunciation: 'na no ha', romanji: 'Na no ha', example: '菜の葉にとまれ' },
          { word: 'とまれ', translation: 'Land/stop (imperative)', pronunciation: 'to ma re', romanji: 'Tomare', example: '菜の葉にとまれ' },
          { word: 'とまれば', translation: 'If you land', pronunciation: 'to ma re ba', romanji: 'Tomareba', example: '菜の葉にとまれば' },
          { word: '桜', translation: 'Cherry blossom', pronunciation: 'sa ku ra', romanji: 'Sakura', example: '桜の花' },
          { word: '花', translation: 'Flower', pronunciation: 'ha na', romanji: 'Hana', example: '桜の花' },
          { word: 'の', translation: 'Of (possessive particle)', pronunciation: 'no', romanji: 'No', example: '桜の花' },
          { word: 'に', translation: 'On/at (location particle)', pronunciation: 'ni', romanji: 'Ni', example: '菜の葉に' },
          { word: 'と', translation: 'And/with (particle)', pronunciation: 'to', romanji: 'To', example: '桜の花と' }
        ],
        streetSlang: [
          { word: 'この曲めちゃいい', translation: 'This song is super good', pronunciation: 'kono kyoku mecha ii', romanji: 'Kono kyoku mecha ii' },
          { word: 'この曲好き', translation: 'I like this song', pronunciation: 'kono kyoku suki', romanji: 'Kono kyoku suki' },
          { word: 'ハマる', translation: 'To be hooked/addicted (to a song)', pronunciation: 'ha ma ru', romanji: 'Hamaruru' },
          { word: '大声で歌う', translation: 'To sing loudly', pronunciation: 'o go e de u ta u', romanji: 'Ogoe de utau' },
          { word: 'リズムがいい', translation: 'The rhythm is good', pronunciation: 'ri zu mu ga ii', romanji: 'Rizumu ga ii' },
          { word: '覚えて歌える', translation: 'I can sing it from memory', pronunciation: 'obo e te u ta e ru', romanji: 'Oboete utaeru' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: '遅くてもしないよりはまし', literalTranslation: 'Better late than not doing', meaning: 'Better late than never', context: 'When someone finally does something', slangEquivalent: '遅くてもやる' },
          { original: '始めが半分', literalTranslation: 'The beginning is half', meaning: 'Well begun is half done', context: 'Encouraging to start', slangEquivalent: '始めれば半分' },
          { original: '百聞は一見に如かず', literalTranslation: 'Hearing a hundred times is not as good as seeing once', meaning: 'Seeing is believing', context: 'When you need to see something', slangEquivalent: '見た方がいい' },
          { original: '出る杭は打たれる', literalTranslation: 'The nail that sticks out gets hammered', meaning: 'Don\'t stand out too much', context: 'Warning about conformity', slangEquivalent: '目立ちすぎない' },
          { original: '石の上にも三年', literalTranslation: 'Three years on a stone', meaning: 'Persistence pays off', context: 'Encouraging persistence', slangEquivalent: '続ければできる' },
          { original: '猿も木から落ちる', literalTranslation: 'Even monkeys fall from trees', meaning: 'Even experts make mistakes', context: 'When someone makes a mistake', slangEquivalent: '誰でも失敗する' },
          { original: '継続は力なり', literalTranslation: 'Continuation is power', meaning: 'Practice makes perfect', context: 'Encouraging practice', slangEquivalent: '続けることが大事' },
          { original: '千里の道も一歩から', literalTranslation: 'A journey of a thousand miles starts with one step', meaning: 'Every journey begins with a single step', context: 'Encouraging to start', slangEquivalent: '一歩ずつ' }
        ],
        streetSlang: [
          { word: 'めちゃくちゃいい', translation: 'Super good/awesome', pronunciation: 'me cha ku cha ii', romanji: 'Mechakucha ii' },
          { word: '最高', translation: 'The best', pronunciation: 'sai kou', romanji: 'Saikou' },
          { word: 'やばい', translation: 'Crazy/amazing', pronunciation: 'ya bai', romanji: 'Yabai' },
          { word: 'すごい', translation: 'Amazing', pronunciation: 'su go i', romanji: 'Sugoi' },
          { word: 'かっこいい', translation: 'Cool', pronunciation: 'ka kko ii', romanji: 'Kakkoii' },
          { word: '完璧', translation: 'Perfect', pronunciation: 'kan peki', romanji: 'Kanpeki' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'w', fullForm: '笑', englishEquivalent: 'laughing', usage: 'Anyone, very common', platform: 'Line, Twitter, Instagram' },
          { abbreviation: 'www', fullForm: '笑', englishEquivalent: 'laughing (multiple)', usage: 'Anyone, very common', platform: 'All platforms' },
          { abbreviation: '草', fullForm: '笑', englishEquivalent: 'laughing (slang)', usage: 'Friends only, casual', platform: 'Twitter, Instagram' },
          { abbreviation: 'kwsk', fullForm: '詳しく', englishEquivalent: 'tell me more', usage: 'Friends only, casual', platform: 'Line, Twitter' },
          { abbreviation: 'ggrks', fullForm: 'ググレカス', englishEquivalent: 'google it', usage: 'Friends only, casual', platform: 'Twitter' },
          { abbreviation: 'ty', fullForm: 'thank you', englishEquivalent: 'thanks', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: 'gn', fullForm: 'good night', englishEquivalent: 'good night', usage: 'Anyone, casual', platform: 'Line, WhatsApp' },
          { abbreviation: 'おk', fullForm: 'OK', englishEquivalent: 'okay', usage: 'Anyone, casual', platform: 'Line, WhatsApp' },
          { abbreviation: '了解', fullForm: '了解', englishEquivalent: 'got it/understood', usage: 'Anyone, casual', platform: 'Line, WhatsApp' },
          { abbreviation: 'おつ', fullForm: 'お疲れ様', englishEquivalent: 'thanks for your work', usage: 'Anyone, casual', platform: 'Line, WhatsApp' }
        ],
        emojiMeanings: [
          { emoji: 'w', meaning: 'Laughing', culturalContext: 'Very common, equivalent to LOL' },
          { emoji: 'www', meaning: 'Laughing hard', culturalContext: 'Multiple w\'s = harder laugh' },
          { emoji: '草', meaning: 'Laughing (slang)', culturalContext: 'Internet slang for laughing' },
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Universal approval' },
          { emoji: '💪', meaning: 'Strength/good luck', culturalContext: 'Encouragement' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: '怎么样?', translation: 'How\'s it going?', pronunciation: 'zen me yang', romanji: 'Zěnmeyàng?' },
          { word: '回头见', translation: 'See you later', pronunciation: 'hui tou jian', romanji: 'Huítóu jiàn' },
          { word: '嘿', translation: 'Hey (very casual)', pronunciation: 'hei', romanji: 'Hēi' },
          { word: '下次见', translation: 'See you next time', pronunciation: 'xia ci jian', romanji: 'Xià cì jiàn' },
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
          { word: '一大堆', translation: 'A huge pile', pronunciation: 'yi da dui', romanji: 'Yī dà duī' },
          { word: '超多', translation: 'Super many (casual)', pronunciation: 'chao duo', romanji: 'Chāo duō' },
          { word: '超级多', translation: 'Extremely many', pronunciation: 'chao ji duo', romanji: 'Chāojí duō' },
          { word: '真的很多', translation: 'Really a lot', pronunciation: 'zhen de hen duo', romanji: 'Zhēn de hěn duō' },
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
          { word: '没问题', translation: 'No problem', pronunciation: 'mei wen ti', romanji: 'Méi wèntí' },
          { word: '好的', translation: 'Okay/alright', pronunciation: 'hao de', romanji: 'Hǎo de' },
          { word: '没事儿', translation: 'No worries/chill', pronunciation: 'mei shi er', romanji: 'Méishìr' },
          { word: '都行', translation: 'Everything\'s fine', pronunciation: 'dou xing', romanji: 'Dōu xíng' },
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
          { word: '眼红', translation: 'Green with envy (red eyes)', pronunciation: 'yan hong', romanji: 'Yǎnhóng' },
          { word: '绿灯', translation: 'Green light (go ahead)', pronunciation: 'lü deng', romanji: 'Lǜ dēng' },
          { word: '脸红', translation: 'To blush (red face)', pronunciation: 'lian hong', romanji: 'Liǎn hóng' },
          { word: '脸色发青', translation: 'Blue face (pale/scared)', pronunciation: 'lian se fa qing', romanji: 'Liǎnsè fā qīng' },
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
          { word: '我饿了', translation: 'I\'m hungry', pronunciation: 'wo e le', romanji: 'Wǒ è le' },
          { word: '太香了', translation: 'So delicious', pronunciation: 'tai xiang le', romanji: 'Tài xiāng le' },
          { word: '超级好吃', translation: 'Super delicious', pronunciation: 'chao ji hao chi', romanji: 'Chāojí hǎochī' },
          { word: '饿死了', translation: 'I\'m starving', pronunciation: 'e si le', romanji: 'È sǐ le' },
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
          { word: '朋友', translation: 'Friend (casual)', pronunciation: 'peng you', romanji: 'Péngyou' },
          { word: '好朋友', translation: 'Good friend', pronunciation: 'hao peng you', romanji: 'Hǎo péngyou' },
          { word: '哥们儿', translation: 'Bro (very casual)', pronunciation: 'ge men er', romanji: 'Gēmenr' },
          { word: '老铁', translation: 'Bro (very casual)', pronunciation: 'lao tie', romanji: 'Lǎo tiě' },
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
          { word: '聪明', translation: 'Smart (good head)', pronunciation: 'cong ming', romanji: 'Cōngmíng' },
          { word: '嘴严', translation: 'Tight-lipped (heavy mouth)', pronunciation: 'zui yan', romanji: 'Zuǐ yán' },
          { word: '真聪明', translation: 'You\'re smart', pronunciation: 'zhen cong ming', romanji: 'Zhēn cōngmíng' },
          { word: '闭嘴', translation: 'Shut your mouth', pronunciation: 'bi zui', romanji: 'Bì zuǐ' },
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
          { word: '自由如鸟', translation: 'Free as a bird', pronunciation: 'zi you ru niao', romanji: 'Zìyóu rú niǎo' },
          { word: '力大如马', translation: 'Strong as a horse', pronunciation: 'li da ru ma', romanji: 'Lì dà rú mǎ' },
          { word: '狡猾如狐', translation: 'Clever as a fox', pronunciation: 'jiao hua ru hu', romanji: 'Jiǎohuá rú hú' },
          { word: '勇敢如狮', translation: 'Brave as a lion', pronunciation: 'yong gan ru shi', romanji: 'Yǒnggǎn rú shī' },
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
          { word: '马上', translation: 'Immediately', pronunciation: 'ma shang', romanji: 'Mǎshàng' },
          { word: '很快', translation: 'Soon', pronunciation: 'hen kuai', romanji: 'Hěn kuài' },
          { word: '立刻', translation: 'Right this instant', pronunciation: 'li ke', romanji: 'Lìkè' },
          { word: '一会儿', translation: 'In a little while', pronunciation: 'yi hui er', romanji: 'Yīhuìr' },
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
          { word: '冷死了', translation: 'Freezing cold', pronunciation: 'leng si le', romanji: 'Lěng sǐle' },
          { word: '多云', translation: 'Cloudy', pronunciation: 'duo yun', romanji: 'Duō yún' },
          { word: '超级热', translation: 'Super hot', pronunciation: 'chao ji re', romanji: 'Chāojí rè' },
          { word: '刮大风', translation: 'Strong wind', pronunciation: 'gua da feng', romanji: 'Guā dàfēng' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: '火车/地铁', translation: 'Train/Metro', pronunciation: 'huǒchē/dìtiě', romanji: 'Huǒchē/Dìtiě' },
          { word: '出租车/优步', translation: 'Taxi/Uber', pronunciation: 'chūzūchē/yōubù', romanji: 'Chūzūchē/Yōubù' },
          { word: '机场', translation: 'Airport', pronunciation: 'jīchǎng', romanji: 'Jīchǎng' },
          { word: '票', translation: 'Ticket', pronunciation: 'piào', romanji: 'Piào' },
          { word: '时刻表', translation: 'Schedule/Timetable', pronunciation: 'shíkèbiǎo', romanji: 'Shíkèbiǎo' },
        ],
        streetSlang: [
          { word: '坐地铁', translation: 'To take the metro', pronunciation: 'zuò dìtiě', romanji: 'Zuò dìtiě' },
          { word: '打车', translation: 'To catch a taxi', pronunciation: 'dǎ chē', romanji: 'Dǎ chē' },
          { word: '在飞机上', translation: 'To be on the plane', pronunciation: 'zài fēijī shàng', romanji: 'Zài fēijī shàng' },
          { word: '错过航班', translation: 'To miss the flight', pronunciation: 'cuòguò hángbān', romanji: 'Cuòguò hángbān' },
          { word: '快速旅行', translation: 'To travel fast', pronunciation: 'kuàisù lǚxíng', romanji: 'Kuàisù lǚxíng' },
          { word: '旅行中', translation: 'To be traveling', pronunciation: 'lǚxíng zhōng', romanji: 'Lǚxíng zhōng' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: '办公室', translation: 'Office', pronunciation: 'bàngōngshì', romanji: 'Bàngōngshì' },
          { word: '会议', translation: 'Meeting', pronunciation: 'huìyì', romanji: 'Huìyì' },
          { word: '电子邮件', translation: 'Email', pronunciation: 'diànzǐ yóujiàn', romanji: 'Diànzǐ yóujiàn' },
          { word: '老板', translation: 'Boss/Manager', pronunciation: 'lǎobǎn', romanji: 'Lǎobǎn' },
          { word: '同事', translation: 'Colleague', pronunciation: 'tóngshì', romanji: 'Tóngshì' },
        ],
        streetSlang: [
          { word: '工作', translation: 'Work/job', pronunciation: 'gōngzuò', romanji: 'Gōngzuò' },
          { word: '拼命工作', translation: 'To work hard (slang)', pronunciation: 'pīnmìng gōngzuò', romanji: 'Pīnmìng gōngzuò' },
          { word: '在工作', translation: 'To be at work', pronunciation: 'zài gōngzuò', romanji: 'Zài gōngzuò' },
          { word: '大老板', translation: 'Big boss', pronunciation: 'dà lǎobǎn', romanji: 'Dà lǎobǎn' },
          { word: '像狗一样工作', translation: 'To work like a dog', pronunciation: 'xiàng gǒu yīyàng gōngzuò', romanji: 'Xiàng gǒu yīyàng gōngzuò' },
          { word: '忙死了', translation: 'To be swamped', pronunciation: 'máng sǐle', romanji: 'Máng sǐle' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: '音乐', translation: 'Music', pronunciation: 'yīnyuè', romanji: 'Yīnyuè' },
          { word: '运动', translation: 'Sports', pronunciation: 'yùndòng', romanji: 'Yùndòng' },
          { word: '阅读', translation: 'Reading', pronunciation: 'yuèdú', romanji: 'Yuèdú' },
          { word: '烹饪', translation: 'Cooking', pronunciation: 'pēngrèn', romanji: 'Pēngrèn' },
          { word: '旅行', translation: 'Travel', pronunciation: 'lǚxíng', romanji: 'Lǚxíng' },
        ],
        streetSlang: [
          { word: '玩得开心', translation: 'To have fun', pronunciation: 'wán dé kāixīn', romanji: 'Wán dé kāixīn' },
          { word: '迷上', translation: 'To be into something', pronunciation: 'míshàng', romanji: 'Míshàng' },
          { word: '玩游戏', translation: 'To play a game', pronunciation: 'wán yóuxì', romanji: 'Wán yóuxì' },
          { word: '完全迷上了', translation: 'To be really into something', pronunciation: 'wánquán míshàngle', romanji: 'Wánquán míshàngle' },
          { word: '读点东西', translation: 'To read something', pronunciation: 'dú diǎn dōngxī', romanji: 'Dú diǎn dōngxī' },
          { word: '太酷了', translation: 'It\'s cool/awesome', pronunciation: 'tài kùle', romanji: 'Tài kùle' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: '快乐', translation: 'Happy', pronunciation: 'kuàilè', romanji: 'Kuàilè' },
          { word: '悲伤', translation: 'Sad', pronunciation: 'bēishāng', romanji: 'Bēishāng' },
          { word: '生气', translation: 'Angry', pronunciation: 'shēngqì', romanji: 'Shēngqì' },
          { word: '累', translation: 'Tired', pronunciation: 'lèi', romanji: 'Lèi' },
          { word: '兴奋', translation: 'Excited', pronunciation: 'xīngfèn', romanji: 'Xīngfèn' },
        ],
        streetSlang: [
          { word: '心情好', translation: 'To be in a good mood', pronunciation: 'xīnqíng hǎo', romanji: 'Xīnqíng hǎo' },
          { word: '心情不好', translation: 'To be in a bad mood', pronunciation: 'xīnqíng bù hǎo', romanji: 'Xīnqíng bù hǎo' },
          { word: '烦死了', translation: 'To be annoyed/angry', pronunciation: 'fán sǐle', romanji: 'Fán sǐle' },
          { word: '累死了', translation: 'To be exhausted', pronunciation: 'lèi sǐle', romanji: 'Lèi sǐle' },
          { word: '超级兴奋', translation: 'To be super excited', pronunciation: 'chāojí xīngfèn', romanji: 'Chāojí xīngfèn' },
          { word: '气死了', translation: 'To be really angry', pronunciation: 'qì sǐle', romanji: 'Qì sǐle' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: '左', translation: 'Left', pronunciation: 'zuǒ', romanji: 'Zuǒ' },
          { word: '右', translation: 'Right', pronunciation: 'yòu', romanji: 'Yòu' },
          { word: '直走', translation: 'Straight ahead', pronunciation: 'zhí zǒu', romanji: 'Zhí zǒu' },
          { word: '近', translation: 'Near', pronunciation: 'jìn', romanji: 'Jìn' },
          { word: '远', translation: 'Far', pronunciation: 'yuǎn', romanji: 'Yuǎn' },
        ],
        streetSlang: [
          { word: '这附近', translation: 'Around here', pronunciation: 'zhè fùjìn', romanji: 'Zhè fùjìn' },
          { word: '那边', translation: 'Over there', pronunciation: 'nà biān', romanji: 'Nà biān' },
          { word: '拐角处', translation: 'Around the corner', pronunciation: 'guǎijiǎo chù', romanji: 'Guǎijiǎo chù' },
          { word: '两个街区', translation: 'Two blocks away', pronunciation: 'liǎng gè jiēqū', romanji: 'Liǎng gè jiēqū' },
          { word: '很近', translation: 'It\'s close/near', pronunciation: 'hěn jìn', romanji: 'Hěn jìn' },
          { word: '很远', translation: 'It\'s far', pronunciation: 'hěn yuǎn', romanji: 'Hěn yuǎn' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: '昨天', translation: 'Yesterday', pronunciation: 'zuótiān', romanji: 'Zuótiān' },
          { word: '上周', translation: 'Last week', pronunciation: 'shàngzhōu', romanji: 'Shàngzhōu' },
          { word: '去了', translation: 'I went', pronunciation: 'qùle', romanji: 'Qùle' },
          { word: '做了', translation: 'I did', pronunciation: 'zuòle', romanji: 'Zuòle' },
          { word: '看到了', translation: 'I saw', pronunciation: 'kàndàole', romanji: 'Kàndàole' },
        ],
        streetSlang: [
          { word: '昨晚', translation: 'Last night', pronunciation: 'zuówǎn', romanji: 'Zuówǎn' },
          { word: '刚才', translation: 'A while ago', pronunciation: 'gāngcái', romanji: 'Gāngcái' },
          { word: '逃课了', translation: 'I skipped/bailed (slang)', pronunciation: 'táokèle', romanji: 'Táokèle' },
          { word: '偷懒了', translation: 'I slacked off', pronunciation: 'tōulǎnle', romanji: 'Tōulǎnle' },
          { word: '度过了时间', translation: 'I spent time', pronunciation: 'dùguòle shíjiān', romanji: 'Dùguòle shíjiān' },
          { word: '很久以前', translation: 'A long time ago', pronunciation: 'hěnjiǔ yǐqián', romanji: 'Hěnjiǔ yǐqián' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: '明天', translation: 'Tomorrow', pronunciation: 'míngtiān', romanji: 'Míngtiān' },
          { word: '下周', translation: 'Next week', pronunciation: 'xiàzhōu', romanji: 'Xiàzhōu' },
          { word: '会去', translation: 'I will go', pronunciation: 'huì qù', romanji: 'Huì qù' },
          { word: '想要', translation: 'I want to', pronunciation: 'xiǎngyào', romanji: 'Xiǎngyào' },
          { word: '要去', translation: 'I\'m going to', pronunciation: 'yào qù', romanji: 'Yào qù' },
        ],
        streetSlang: [
          { word: '明天早上', translation: 'Tomorrow morning', pronunciation: 'míngtiān zǎoshàng', romanji: 'Míngtiān zǎoshàng' },
          { word: '要偷懒', translation: 'I\'m going to slack off', pronunciation: 'yào tōulǎn', romanji: 'Yào tōulǎn' },
          { word: '要走了', translation: 'I\'m going to leave', pronunciation: 'yào zǒule', romanji: 'Yào zǒule' },
          { word: '要工作', translation: 'I\'m going to work', pronunciation: 'yào gōngzuò', romanji: 'Yào gōngzuò' },
          { word: '想出去玩', translation: 'I want to hang out', pronunciation: 'xiǎng chūqù wán', romanji: 'Xiǎng chūqù wán' },
          { word: '会在那里', translation: 'I\'ll be there', pronunciation: 'huì zài nàlǐ', romanji: 'Huì zài nàlǐ' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '走吧', translation: 'Let\'s go', pronunciation: 'zǒu ba', romanji: 'Zǒu ba' },
          { word: '...怎么样?', translation: 'How about...?', pronunciation: '...zěnmeyàng', romanji: '...zěnmeyàng' },
          { word: '为什么不...?', translation: 'Why don\'t we...?', pronunciation: 'wèishéme bù', romanji: 'Wèishéme bù' },
          { word: '我们应该...?', translation: 'Should we...?', pronunciation: 'wǒmen yīnggāi', romanji: 'Wǒmen yīnggāi' },
          { word: '也许我们可以', translation: 'Maybe we can', pronunciation: 'yěxǔ wǒmen kěyǐ', romanji: 'Yěxǔ wǒmen kěyǐ' },
        ],
        streetSlang: [
          { word: '去吗?', translation: 'Let\'s go? (casual)', pronunciation: 'qù ma', romanji: 'Qù ma' },
          { word: '出去玩吗?', translation: 'How about we hang out?', pronunciation: 'chūqù wán ma', romanji: 'Chūqù wán ma' },
          { word: '不去吗?', translation: 'Why don\'t we go?', pronunciation: 'bù qù ma', romanji: 'Bù qù ma' },
          { word: '做吗?', translation: 'Should we do it?', pronunciation: 'zuò ma', romanji: 'Zuò ma' },
          { word: '也许出去', translation: 'Maybe we can go out', pronunciation: 'yěxǔ chūqù', romanji: 'Yěxǔ chūqù' },
          { word: '走吗?', translation: 'Should we leave? (casual)', pronunciation: 'zǒu ma', romanji: 'Zǒu ma' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: '我认为', translation: 'I think', pronunciation: 'wǒ rènwéi', romanji: 'Wǒ rènwéi' },
          { word: '我相信', translation: 'I believe', pronunciation: 'wǒ xiāngxìn', romanji: 'Wǒ xiāngxìn' },
          { word: '在我看来', translation: 'In my opinion', pronunciation: 'zài wǒ kànlái', romanji: 'Zài wǒ kànlái' },
          { word: '我同意', translation: 'I agree', pronunciation: 'wǒ tóngyì', romanji: 'Wǒ tóngyì' },
          { word: '我不同意', translation: 'I disagree', pronunciation: 'wǒ bù tóngyì', romanji: 'Wǒ bù tóngyì' },
        ],
        streetSlang: [
          { word: '我也这么想', translation: 'I think so', pronunciation: 'wǒ yě zhème xiǎng', romanji: 'Wǒ yě zhème xiǎng' },
          { word: '对我来说', translation: 'For me/In my opinion', pronunciation: 'duì wǒ lái shuō', romanji: 'Duì wǒ lái shuō' },
          { word: '挺好的', translation: 'It\'s cool/I agree', pronunciation: 'tǐng hǎo de', romanji: 'Tǐng hǎo de' },
          { word: '不可能', translation: 'No way!/That\'s impossible', pronunciation: 'bù kěnéng', romanji: 'Bù kěnéng' },
          { word: '可以', translation: 'It\'s fine/I agree', pronunciation: 'kěyǐ', romanji: 'Kěyǐ' },
          { word: '不行', translation: 'Nah/No way (very casual)', pronunciation: 'bùxíng', romanji: 'Bùxíng' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '你能帮我吗?', translation: 'Can you help me?', pronunciation: 'nǐ néng bāng wǒ ma', romanji: 'Nǐ néng bāng wǒ ma' },
          { word: '我需要', translation: 'I need', pronunciation: 'wǒ xūyào', romanji: 'Wǒ xūyào' },
          { word: '坏了', translation: 'It\'s broken', pronunciation: 'huàile', romanji: 'Huàile' },
          { word: '在哪里能找到...?', translation: 'Where can I find...?', pronunciation: 'zài nǎlǐ néng zhǎodào', romanji: 'Zài nǎlǐ néng zhǎodào' },
          { word: '我怎么做...?', translation: 'How do I...?', pronunciation: 'wǒ zěnme zuò', romanji: 'Wǒ zěnme zuò' },
        ],
        streetSlang: [
          { word: '帮个忙?', translation: 'Can you help me? (casual)', pronunciation: 'bāng gè máng', romanji: 'Bāng gè máng' },
          { word: '帮个忙', translation: 'I need a favor', pronunciation: 'bāng gè máng', romanji: 'Bāng gè máng' },
          { word: '搞砸了', translation: 'It\'s messed up/broken (slang)', pronunciation: 'gǎozále', romanji: 'Gǎozále' },
          { word: '在哪?', translation: 'Where is it?', pronunciation: 'zài nǎ', romanji: 'Zài nǎ' },
          { word: '这个怎么做?', translation: 'How do I do it? (casual)', pronunciation: 'zhège zěnme zuò', romanji: 'Zhège zěnme zuò' },
          { word: '完全坏了', translation: 'It\'s completely broken (slang)', pronunciation: 'wánquán huàile', romanji: 'Wánquán huàile' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: 两只老虎 (Liǎng Zhī Lǎohǔ - Two Tigers)',
        premium: true,
        songInfo: {
          name: '两只老虎',
          englishName: 'Two Tigers',
          type: 'Children\'s Song',
          culturalSignificance: 'The Chinese version of "Frère Jacques," this is one of the most popular children\'s songs in China. It teaches counting, body parts, and descriptions. Sung by generations of Chinese children in kindergartens and homes.'
        },
        lyrics: [
          { original: '两只老虎，两只老虎', translation: 'Two tigers, two tigers', pronunciation: 'liǎng zhī lǎohǔ liǎng zhī lǎohǔ', romanji: 'Liǎng zhī lǎohǔ, liǎng zhī lǎohǔ' },
          { original: '跑得快，跑得快', translation: 'Run fast, run fast', pronunciation: 'pǎo dé kuài pǎo dé kuài', romanji: 'Pǎo dé kuài, pǎo dé kuài' },
          { original: '一只没有耳朵', translation: 'One has no ears', pronunciation: 'yī zhī méiyǒu ěrduo', romanji: 'Yī zhī méiyǒu ěrduo' },
          { original: '一只没有尾巴', translation: 'One has no tail', pronunciation: 'yī zhī méiyǒu wěiba', romanji: 'Yī zhī méiyǒu wěiba' },
          { original: '真奇怪！真奇怪！', translation: 'Really strange! Really strange!', pronunciation: 'zhēn qíguài zhēn qíguài', romanji: 'Zhēn qíguài! Zhēn qíguài!' }
        ],
        culturalNotes: 'This song is universally known by Chinese children and is often one of the first songs they learn. It teaches basic vocabulary about animals, body parts, and counting. The repetitive structure makes it easy for children to memorize. The song is commonly used in Chinese kindergartens and represents a shared cultural experience across generations.',
        words: [
          { word: '两只', translation: 'Two (animals)', pronunciation: 'liǎng zhī', romanji: 'Liǎng zhī', example: '两只老虎' },
          { word: '老虎', translation: 'Tiger', pronunciation: 'lǎohǔ', romanji: 'Lǎohǔ', example: '两只老虎' },
          { word: '跑', translation: 'Run', pronunciation: 'pǎo', romanji: 'Pǎo', example: '跑得快' },
          { word: '快', translation: 'Fast', pronunciation: 'kuài', romanji: 'Kuài', example: '跑得快' },
          { word: '一只', translation: 'One (animal)', pronunciation: 'yī zhī', romanji: 'Yī zhī', example: '一只没有耳朵' },
          { word: '没有', translation: 'Don\'t have/no', pronunciation: 'méiyǒu', romanji: 'Méiyǒu', example: '没有耳朵' },
          { word: '耳朵', translation: 'Ears', pronunciation: 'ěrduo', romanji: 'Ěrduo', example: '没有耳朵' },
          { word: '尾巴', translation: 'Tail', pronunciation: 'wěiba', romanji: 'Wěiba', example: '没有尾巴' },
          { word: '真', translation: 'Really/very', pronunciation: 'zhēn', romanji: 'Zhēn', example: '真奇怪' },
          { word: '奇怪', translation: 'Strange/weird', pronunciation: 'qíguài', romanji: 'Qíguài', example: '真奇怪' }
        ],
        streetSlang: [
          { word: '这首歌超好听', translation: 'This song is super good', pronunciation: 'zhè shǒu gē chāo hǎotīng', romanji: 'Zhè shǒu gē chāo hǎotīng' },
          { word: '我喜欢这首歌', translation: 'I like this song', pronunciation: 'wǒ xǐhuān zhè shǒu gē', romanji: 'Wǒ xǐhuān zhè shǒu gē' },
          { word: '很洗脑', translation: 'It\'s catchy/stuck in my head', pronunciation: 'hěn xǐnǎo', romanji: 'Hěn xǐnǎo' },
          { word: '大声唱', translation: 'To sing loudly', pronunciation: 'dàshēng chàng', romanji: 'Dàshēng chàng' },
          { word: '节奏很好', translation: 'The rhythm is good', pronunciation: 'jiézòu hěn hǎo', romanji: 'Jiézòu hěn hǎo' },
          { word: '我会背', translation: 'I know it by heart', pronunciation: 'wǒ huì bèi', romanji: 'Wǒ huì bèi' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: '迟做总比不做好', literalTranslation: 'Better late than not doing', meaning: 'Better late than never', context: 'When someone finally does something', slangEquivalent: '迟做也比不做强', romanji: 'Chí zuò zǒng bǐ bù zuò hǎo' },
          { original: '万事开头难', literalTranslation: 'Everything is difficult at the beginning', meaning: 'The first step is the hardest', context: 'Encouraging to start', slangEquivalent: '开始最难', romanji: 'Wànshì kāitóu nán' },
          { original: '百闻不如一见', literalTranslation: 'Hearing a hundred times is not as good as seeing once', meaning: 'Seeing is believing', context: 'When you need to see something', slangEquivalent: '亲眼看看', romanji: 'Bǎi wén bùrú yī jiàn' },
          { original: '一分耕耘，一分收获', literalTranslation: 'One point of plowing, one point of harvest', meaning: 'You reap what you sow', context: 'About hard work paying off', slangEquivalent: '努力就有回报', romanji: 'Yī fēn gēngyún, yī fēn shōuhuò' },
          { original: '熟能生巧', literalTranslation: 'Familiarity breeds skill', meaning: 'Practice makes perfect', context: 'Encouraging practice', slangEquivalent: '多练就会', romanji: 'Shú néng shēng qiǎo' },
          { original: '千里之行，始于足下', literalTranslation: 'A journey of a thousand miles starts under one\'s feet', meaning: 'Every journey begins with a single step', context: 'Encouraging to start', slangEquivalent: '一步一步来', romanji: 'Qiānlǐ zhī xíng, shǐ yú zú xià' },
          { original: '失败是成功之母', literalTranslation: 'Failure is the mother of success', meaning: 'Failure leads to success', context: 'Encouraging after failure', slangEquivalent: '失败是经验', romanji: 'Shībài shì chénggōng zhī mǔ' },
          { original: '有志者事竟成', literalTranslation: 'Where there is a will, there is a way', meaning: 'Perseverance leads to success', context: 'Encouraging persistence', slangEquivalent: '坚持就会成功', romanji: 'Yǒuzhì zhě shì jìng chéng' }
        ],
        streetSlang: [
          { word: '超赞', translation: 'Super awesome', pronunciation: 'chāo zàn', romanji: 'Chāo zàn' },
          { word: '太棒了', translation: 'Too awesome', pronunciation: 'tài bàng le', romanji: 'Tài bàng le' },
          { word: '牛逼', translation: 'Awesome/cool (slang)', pronunciation: 'niú bī', romanji: 'Niú bī' },
          { word: '厉害', translation: 'Amazing', pronunciation: 'lì hài', romanji: 'Lìhài' },
          { word: '完美', translation: 'Perfect', pronunciation: 'wán měi', romanji: 'Wánměi' },
          { word: '绝了', translation: 'Amazing/perfect', pronunciation: 'jué le', romanji: 'Jué le' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'nb', fullForm: '牛逼', englishEquivalent: 'awesome', usage: 'Friends only, casual', platform: 'WeChat, QQ' },
          { abbreviation: 'gg', fullForm: '哥哥', englishEquivalent: 'brother', usage: 'Anyone, casual', platform: 'WeChat, QQ' },
          { abbreviation: 'mm', fullForm: '妹妹', englishEquivalent: 'sister', usage: 'Anyone, casual', platform: 'WeChat, QQ' },
          { abbreviation: '88', fullForm: '拜拜', englishEquivalent: 'bye bye', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: '666', fullForm: '六六六', englishEquivalent: 'awesome (slang)', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: '233', fullForm: 'laughing', englishEquivalent: 'laughing', usage: 'Anyone, casual', platform: 'WeChat, QQ' },
          { abbreviation: 'orz', fullForm: 'kneeling', englishEquivalent: 'respect/defeat', usage: 'Anyone, casual', platform: 'All platforms' },
          { abbreviation: 'tql', fullForm: '太强了', englishEquivalent: 'too strong', usage: 'Anyone, casual', platform: 'WeChat, QQ' },
          { abbreviation: 'yyds', fullForm: '永远的神', englishEquivalent: 'eternal god (GOAT)', usage: 'Anyone, casual', platform: 'WeChat, QQ, Bilibili' },
          { abbreviation: 'awsl', fullForm: '啊我死了', englishEquivalent: 'I\'m dead (cute)', usage: 'Anyone, casual', platform: 'WeChat, QQ, Bilibili' }
        ],
        emojiMeanings: [
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Very common, universal' },
          { emoji: '😊', meaning: 'Happy/smiling', culturalContext: 'Friendly, common' },
          { emoji: '❤️', meaning: 'Love', culturalContext: 'Used with friends and family' },
          { emoji: '666', meaning: 'Awesome', culturalContext: 'Very common internet slang' },
          { emoji: 'orz', meaning: 'Respect/defeat', culturalContext: 'Internet meme' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
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
          { word: 'Как дела?', translation: 'How\'s it going?', pronunciation: 'kak di-LAH' },
          { word: 'Увидимся', translation: 'See you later', pronunciation: 'oo-VEE-dim-sya' },
          { word: 'Йо', translation: 'Yo (very casual)', pronunciation: 'yo' },
          { word: 'До встречи', translation: 'Until we meet', pronunciation: 'da VS-tre-chee' },
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
          { word: 'Очень много', translation: 'Very many', pronunciation: 'O-chen MNO-go' },
          { word: 'Тонна', translation: 'A ton (emphasizing)', pronunciation: 'TON-na' },
          { word: 'Куча всего', translation: 'A ton of everything', pronunciation: 'KOO-chah vsye-VO' },
          { word: 'Огромное количество', translation: 'Huge amount', pronunciation: 'a-GROM-no-ye ko-LI-chest-vo' },
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
          { word: 'Зелёный', translation: 'Green (inexperienced)', pronunciation: 'zi-LYO-niy' },
          { word: 'Чёрный день', translation: 'Black day (bad day)', pronunciation: 'chor-NIY den' },
          { word: 'Покраснеть', translation: 'To blush (turn red)', pronunciation: 'pa-kras-NYET' },
          { word: 'Побледнеть', translation: 'To turn pale (blue)', pronunciation: 'pa-blyed-NYET' },
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
          { word: 'Без проблем', translation: 'No problem', pronunciation: 'bez pro-BLEM' },
          { word: 'Всё нормально', translation: 'Everything\'s fine', pronunciation: 'vsyo nor-MAL-no' },
          { word: 'Расслабься', translation: 'Relax/chill', pronunciation: 'ras-SLAB-sya' },
          { word: 'Всё хорошо', translation: 'Everything\'s good', pronunciation: 'vsyo ha-ra-SHO' },
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
          { word: 'Хочу есть', translation: 'I\'m hungry', pronunciation: 'ha-CHOO yest' },
          { word: 'Очень вкусно', translation: 'Very delicious', pronunciation: 'O-chen VKOO-sno' },
          { word: 'Объедение', translation: 'Delicious (super tasty)', pronunciation: 'ab-ye-DYE-nee-ye' },
          { word: 'Умираю с голоду', translation: 'I\'m starving', pronunciation: 'oo-mee-RA-yu s GO-la-doo' },
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
          { word: 'Брат', translation: 'Bro (casual)', pronunciation: 'brat' },
          { word: 'Друг', translation: 'Friend (casual)', pronunciation: 'drook' },
          { word: 'Братишка', translation: 'Little bro', pronunciation: 'bra-TEESH-kah' },
          { word: 'Дружок', translation: 'Little friend/buddy', pronunciation: 'droo-ZHOK' },
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
          { word: 'Умная голова', translation: 'Smart head', pronunciation: 'OOM-na-ya ga-la-VAH' },
          { word: 'Держать язык за зубами', translation: 'To keep your mouth shut', pronunciation: 'dyer-ZHAT ya-ZYK za zoo-BAH-mee' },
          { word: 'Голова работает', translation: 'Head works (you\'re smart)', pronunciation: 'ga-la-VAH ra-BO-ta-yet' },
          { word: 'Закрой рот', translation: 'Shut your mouth', pronunciation: 'za-KROY rot' },
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
          { word: 'Свободен как птица', translation: 'Free as a bird', pronunciation: 'sva-BO-den kak PTEE-tsa' },
          { word: 'Сильный как лошадь', translation: 'Strong as a horse', pronunciation: 'SEEL-niy kak LO-shad' },
          { word: 'Хитрый как лиса', translation: 'Clever as a fox', pronunciation: 'HEET-riy kak LEE-sa' },
          { word: 'Храбрый как лев', translation: 'Brave as a lion', pronunciation: 'KHRA-briy kak lyev' },
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
          { word: 'Сразу', translation: 'Immediately', pronunciation: 'SRA-zu' },
          { word: 'Скоро', translation: 'Soon', pronunciation: 'SKO-ro' },
          { word: 'Прямо сейчас', translation: 'Right this instant', pronunciation: 'PRYA-mo se-CHAHS' },
          { word: 'Через минуту', translation: 'In a minute', pronunciation: 'CHE-rez mee-NOO-too' },
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
          { word: 'Мороз', translation: 'Freezing cold', pronunciation: 'ma-ROZ' },
          { word: 'Облачно', translation: 'Cloudy', pronunciation: 'ob-LACH-no' },
          { word: 'Очень жарко', translation: 'Very hot', pronunciation: 'O-chen ZHAR-ka' },
          { word: 'Сильный ветер', translation: 'Strong wind', pronunciation: 'SEEL-niy VYE-ter' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: 'Поезд/Метро', translation: 'Train/Metro', pronunciation: 'PO-yezd/me-TRO' },
          { word: 'Такси/Убер', translation: 'Taxi/Uber', pronunciation: 'tak-SEE/OO-ber' },
          { word: 'Аэропорт', translation: 'Airport', pronunciation: 'ah-eh-ro-PORT' },
          { word: 'Билет', translation: 'Ticket', pronunciation: 'bee-LYET' },
          { word: 'Расписание', translation: 'Schedule/Timetable', pronunciation: 'ras-pee-SA-nee-ye' },
        ],
        streetSlang: [
          { word: 'Ехать на метро', translation: 'To take the metro', pronunciation: 'ye-KHAT nah me-TRO' },
          { word: 'Поймать такси', translation: 'To catch a taxi', pronunciation: 'poy-MAT tak-SEE' },
          { word: 'Быть в самолёте', translation: 'To be on the plane', pronunciation: 'bit v sa-ma-LYO-te' },
          { word: 'Опоздать на рейс', translation: 'To miss the flight', pronunciation: 'a-paz-DAT nah rays' },
          { word: 'Быстро путешествовать', translation: 'To travel fast', pronunciation: 'BIS-tro poo-te-SHE-stvo-vat' },
          { word: 'Быть в путешествии', translation: 'To be traveling', pronunciation: 'bit v poo-te-SHE-stvi-ye' },
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Офис', translation: 'Office', pronunciation: 'O-fis' },
          { word: 'Встреча', translation: 'Meeting', pronunciation: 'VS-tre-cha' },
          { word: 'Email', translation: 'Email', pronunciation: 'ee-MAYL' },
          { word: 'Начальник', translation: 'Boss/Manager', pronunciation: 'na-CHAL-nik' },
          { word: 'Коллега', translation: 'Colleague', pronunciation: 'kol-LEH-ga' },
        ],
        streetSlang: [
          { word: 'Работа', translation: 'Work/job', pronunciation: 'ra-BO-ta' },
          { word: 'Вкалывать', translation: 'To work hard (slang)', pronunciation: 'VKA-ly-vat' },
          { word: 'Быть на работе', translation: 'To be at work', pronunciation: 'bit nah ra-BO-te' },
          { word: 'Большой начальник', translation: 'Big boss', pronunciation: 'bol-SHOY na-CHAL-nik' },
          { word: 'Работать как собака', translation: 'To work like a dog', pronunciation: 'ra-BO-tat kak sa-BAH-ka' },
          { word: 'Быть заваленным', translation: 'To be swamped', pronunciation: 'bit za-VA-le-nim' },
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Музыка', translation: 'Music', pronunciation: 'MOO-zi-ka' },
          { word: 'Спорт', translation: 'Sports', pronunciation: 'sport' },
          { word: 'Чтение', translation: 'Reading', pronunciation: 'CHTE-nee-ye' },
          { word: 'Готовка', translation: 'Cooking', pronunciation: 'ga-TOV-ka' },
          { word: 'Путешествие', translation: 'Travel', pronunciation: 'poo-te-SHE-stvi-ye' },
        ],
        streetSlang: [
          { word: 'Веселиться', translation: 'To have fun', pronunciation: 've-se-LIT-sya' },
          { word: 'Увлекаться', translation: 'To be into something', pronunciation: 'oo-vle-KAT-sya' },
          { word: 'Играть в игру', translation: 'To play a game', pronunciation: 'ee-GRAT v ee-GROO' },
          { word: 'Полностью увлечён', translation: 'To be really into something', pronunciation: 'pol-NOS-tyu oo-vle-CHYON' },
          { word: 'Почитать', translation: 'To read something', pronunciation: 'pa-chi-TAT' },
          { word: 'Круто', translation: 'It\'s cool/awesome', pronunciation: 'KROO-to' },
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Счастливый', translation: 'Happy', pronunciation: 'shchas-LEE-viy' },
          { word: 'Грустный', translation: 'Sad', pronunciation: 'groost-niy' },
          { word: 'Злой', translation: 'Angry', pronunciation: 'zloy' },
          { word: 'Усталый', translation: 'Tired', pronunciation: 'oos-TA-liy' },
          { word: 'Взволнованный', translation: 'Excited', pronunciation: 'vzvol-NO-van-niy' },
        ],
        streetSlang: [
          { word: 'Быть в хорошем настроении', translation: 'To be in a good mood', pronunciation: 'bit v ha-RO-shem nas-TRO-ye-nee' },
          { word: 'Быть в плохом настроении', translation: 'To be in a bad mood', pronunciation: 'bit v PLO-hom nas-TRO-ye-nee' },
          { word: 'Раздражённый', translation: 'To be annoyed/angry', pronunciation: 'raz-dra-ZHYON-niy' },
          { word: 'Вымотанный', translation: 'To be exhausted (slang)', pronunciation: 'vi-MO-tan-niy' },
          { word: 'Супер взволнован', translation: 'To be super excited', pronunciation: 'SOO-per vzvol-NO-van' },
          { word: 'Очень злой', translation: 'To be really angry', pronunciation: 'O-chen zloy' },
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Лево', translation: 'Left', pronunciation: 'LYE-vo' },
          { word: 'Право', translation: 'Right', pronunciation: 'PRA-vo' },
          { word: 'Прямо', translation: 'Straight ahead', pronunciation: 'PRYA-mo' },
          { word: 'Близко', translation: 'Near', pronunciation: 'BLEEZ-ko' },
          { word: 'Далеко', translation: 'Far', pronunciation: 'da-lye-KO' },
        ],
        streetSlang: [
          { word: 'Где-то здесь', translation: 'Around here', pronunciation: 'gde-to zdes' },
          { word: 'Там', translation: 'Over there', pronunciation: 'tam' },
          { word: 'За углом', translation: 'Around the corner', pronunciation: 'za oo-GLOM' },
          { word: 'Два квартала', translation: 'Two blocks away', pronunciation: 'dva kvar-TA-la' },
          { word: 'Близко', translation: 'It\'s close/near', pronunciation: 'BLEEZ-ko' },
          { word: 'Далеко', translation: 'It\'s far', pronunciation: 'da-lye-KO' },
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Вчера', translation: 'Yesterday', pronunciation: 'vche-RA' },
          { word: 'На прошлой неделе', translation: 'Last week', pronunciation: 'na PROSH-loy ne-DYE-le' },
          { word: 'Я пошёл', translation: 'I went', pronunciation: 'ya pa-SHYOL' },
          { word: 'Я сделал', translation: 'I did', pronunciation: 'ya SDE-lal' },
          { word: 'Я видел', translation: 'I saw', pronunciation: 'ya VEE-del' },
        ],
        streetSlang: [
          { word: 'Вчера вечером', translation: 'Last night', pronunciation: 'vche-RA VYE-che-rom' },
          { word: 'Недавно', translation: 'A while ago', pronunciation: 'ne-DAV-no' },
          { word: 'Я прогулял', translation: 'I skipped/bailed (slang)', pronunciation: 'ya pro-goo-YAL' },
          { word: 'Я бездельничал', translation: 'I slacked off', pronunciation: 'ya bez-DYEL-nee-chal' },
          { word: 'Я провёл время', translation: 'I spent time', pronunciation: 'ya pro-VYOL VRE-mya' },
          { word: 'Давно', translation: 'A long time ago', pronunciation: 'dav-NO' },
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Завтра', translation: 'Tomorrow', pronunciation: 'ZAV-tra' },
          { word: 'На следующей неделе', translation: 'Next week', pronunciation: 'na SLYE-du-yu-shchey ne-DYE-le' },
          { word: 'Я пойду', translation: 'I will go', pronunciation: 'ya poy-DOO' },
          { word: 'Я хочу', translation: 'I want to', pronunciation: 'ya ha-CHOO' },
          { word: 'Я собираюсь', translation: 'I\'m going to', pronunciation: 'ya sa-bi-RA-yus' },
        ],
        streetSlang: [
          { word: 'Завтра утром', translation: 'Tomorrow morning', pronunciation: 'ZAV-tra OO-trom' },
          { word: 'Я буду бездельничать', translation: 'I\'m going to slack off', pronunciation: 'ya BOO-doo bez-DYEL-nee-chat' },
          { word: 'Я уйду', translation: 'I\'m going to leave', pronunciation: 'ya oo-YOO-doo' },
          { word: 'Я буду работать', translation: 'I\'m going to work', pronunciation: 'ya BOO-doo ra-BO-tat' },
          { word: 'Хочу потусить', translation: 'I want to hang out', pronunciation: 'ha-CHOO po-too-SEET' },
          { word: 'Я буду там', translation: 'I\'ll be there', pronunciation: 'ya BOO-doo tam' },
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Пойдём', translation: 'Let\'s go', pronunciation: 'poy-DYOM' },
          { word: 'Как насчёт...?', translation: 'How about...?', pronunciation: 'kak nas-SHYOT' },
          { word: 'Почему бы нам не...?', translation: 'Why don\'t we...?', pronunciation: 'pa-che-MU bi nam ne' },
          { word: 'Должны ли мы...?', translation: 'Should we...?', pronunciation: 'da-LZHNI li mi' },
          { word: 'Может быть, мы можем', translation: 'Maybe we can', pronunciation: 'MO-zhet bit mi MO-zhem' },
        ],
        streetSlang: [
          { word: 'Пойдём?', translation: 'Let\'s go? (casual)', pronunciation: 'poy-DYOM' },
          { word: 'Как насчёт потусить?', translation: 'How about we hang out?', pronunciation: 'kak nas-SHYOT po-too-SEET' },
          { word: 'Почему не пойдём?', translation: 'Why don\'t we go?', pronunciation: 'pa-che-MU ne poy-DYOM' },
          { word: 'Делаем?', translation: 'Should we do it?', pronunciation: 'de-LA-yem' },
          { word: 'Может, выйдем?', translation: 'Maybe we can go out', pronunciation: 'MO-zhet VY-y-dem' },
          { word: 'Уходим?', translation: 'Should we leave? (casual)', pronunciation: 'oo-KHO-dim' },
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Я думаю, что', translation: 'I think', pronunciation: 'ya DOO-ma-yu shto' },
          { word: 'Я верю', translation: 'I believe', pronunciation: 'ya VYE-ryu' },
          { word: 'По моему мнению', translation: 'In my opinion', pronunciation: 'po ma-YE-mu mne-NEE-yu' },
          { word: 'Я согласен', translation: 'I agree', pronunciation: 'ya sa-GLA-sen' },
          { word: 'Я не согласен', translation: 'I disagree', pronunciation: 'ya ne sa-GLA-sen' },
        ],
        streetSlang: [
          { word: 'Думаю, да', translation: 'I think so', pronunciation: 'DOO-ma-yu da' },
          { word: 'Для меня', translation: 'For me/In my opinion', pronunciation: 'dlya me-NYA' },
          { word: 'Круто', translation: 'It\'s cool/I agree', pronunciation: 'KROO-to' },
          { word: 'Бред', translation: 'No way!/That\'s nonsense', pronunciation: 'bret' },
          { word: 'Нормально', translation: 'It\'s fine/I agree', pronunciation: 'nor-MAL-no' },
          { word: 'Не', translation: 'Nah/No way (very casual)', pronunciation: 'ne' },
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Можешь помочь?', translation: 'Can you help me?', pronunciation: 'MO-zhesh pa-MOCH' },
          { word: 'Мне нужно', translation: 'I need', pronunciation: 'mne NOOZH-no' },
          { word: 'Сломано', translation: 'It\'s broken', pronunciation: 'sla-MA-no' },
          { word: 'Где я могу найти...?', translation: 'Where can I find...?', pronunciation: 'gde ya ma-GOO na-YTEE' },
          { word: 'Как мне...?', translation: 'How do I...?', pronunciation: 'kak mne' },
        ],
        streetSlang: [
          { word: 'Поможешь?', translation: 'Can you help me? (casual)', pronunciation: 'pa-MO-zhesh' },
          { word: 'Нужна помощь', translation: 'I need a favor', pronunciation: 'noozh-NA PO-mosh' },
          { word: 'Всё пошло не так', translation: 'It\'s messed up/broken (slang)', pronunciation: 'vsyo pa-SHLO ne tak' },
          { word: 'Где это?', translation: 'Where is it?', pronunciation: 'gde E-to' },
          { word: 'Как это сделать?', translation: 'How do I do it? (casual)', pronunciation: 'kak E-to SDE-lat' },
          { word: 'Полностью сломано', translation: 'It\'s completely broken (slang)', pronunciation: 'POL-nas-tyu sla-MA-no' },
        ]
      },
      {
        id: 21,
        title: 'Song Lesson: В лесу родилась ёлочка (A Christmas Tree Was Born in the Forest)',
        premium: true,
        songInfo: {
          name: 'В лесу родилась ёлочка',
          englishName: 'A Christmas Tree Was Born in the Forest',
          type: 'Children\'s Song',
          culturalSignificance: 'Russia\'s most beloved New Year and Christmas song, sung by generations. This song is central to Russian winter celebrations and represents family, tradition, and the magic of the holiday season. Every Russian child knows this song.'
        },
        lyrics: [
          { original: 'В лесу родилась ёлочка', translation: 'A Christmas tree was born in the forest', pronunciation: 'v leh-SOO ra-DEEL-as YO-loch-ka' },
          { original: 'В лесу она росла', translation: 'In the forest it grew', pronunciation: 'v leh-SOO ah-NA ras-LAH' },
          { original: 'Зимой и летом стройная', translation: 'In winter and summer, slender', pronunciation: 'zee-MOY ee LYE-tom STROY-na-ya' },
          { original: 'Зелёная была', translation: 'It was green', pronunciation: 'zeh-LYO-na-ya bi-LAH' },
          { original: 'Метель ей пела песенку', translation: 'The blizzard sang it a song', pronunciation: 'meh-TYEL yey PEH-la PEH-sen-koo' },
          { original: 'Спи, ёлочка, бай-бай', translation: 'Sleep, little tree, bye-bye', pronunciation: 'spee YO-loch-ka bay-bay' },
          { original: 'Мороз снежком укутывал', translation: 'Frost wrapped it with snow', pronunciation: 'mah-ROZ snyezh-KOM oo-KOO-ti-val' },
          { original: 'Смотри, не замерзай', translation: 'Look, don\'t freeze', pronunciation: 'sma-TREE neh zah-mer-ZAY' }
        ],
        culturalNotes: 'This is the quintessential Russian New Year song, sung at every family celebration, school concert, and public gathering during the winter holidays. The song represents Russian winter culture, family traditions, and the magic of the New Year celebration. It\'s often the first song Russian children learn and holds deep emotional significance for Russians of all ages.',
        words: [
          { word: 'Лес', translation: 'Forest', pronunciation: 'lyes', example: 'В лесу родилась' },
          { word: 'Родилась', translation: 'Was born', pronunciation: 'ra-DEEL-as', example: 'В лесу родилась ёлочка' },
          { word: 'Ёлочка', translation: 'Little Christmas tree', pronunciation: 'YO-loch-ka', example: 'В лесу родилась ёлочка' },
          { word: 'Росла', translation: 'Grew', pronunciation: 'ras-LAH', example: 'В лесу она росла' },
          { word: 'Зимой', translation: 'In winter', pronunciation: 'zee-MOY', example: 'Зимой и летом' },
          { word: 'Летом', translation: 'In summer', pronunciation: 'LYE-tom', example: 'Зимой и летом' },
          { word: 'Стройная', translation: 'Slender', pronunciation: 'STROY-na-ya', example: 'Зимой и летом стройная' },
          { word: 'Зелёная', translation: 'Green', pronunciation: 'zeh-LYO-na-ya', example: 'Зелёная была' },
          { word: 'Метель', translation: 'Blizzard', pronunciation: 'meh-TYEL', example: 'Метель ей пела песенку' },
          { word: 'Мороз', translation: 'Frost', pronunciation: 'mah-ROZ', example: 'Мороз снежком укутывал' }
        ],
        streetSlang: [
          { word: 'Эта песня крутая', translation: 'This song is cool', pronunciation: 'EH-ta PYES-nya kroo-TA-ya' },
          { word: 'Обожаю эту песню', translation: 'I love this song', pronunciation: 'ah-bah-ZHA-yu EH-too PYES-nyu' },
          { word: 'Она затягивает', translation: 'It\'s catchy/addictive', pronunciation: 'ah-NA zah-tya-GI-va-yet' },
          { word: 'Петь во весь голос', translation: 'To sing at the top of your lungs', pronunciation: 'pyet voh ves GOH-los' },
          { word: 'У неё хороший ритм', translation: 'It has good rhythm', pronunciation: 'oo neh-YO hah-RO-shiy reetm' },
          { word: 'Знаю наизусть', translation: 'I know it by heart', pronunciation: 'ZNA-yu nah-ee-ZOOST' }
        ]
      },
      {
        id: 22,
        title: 'Proverbs & Sayings',
        premium: true,
        proverbs: [
          { original: 'Лучше поздно, чем никогда', literalTranslation: 'Better late than never', meaning: 'It\'s better to do something late than not at all', context: 'When someone finally does something', slangEquivalent: 'Лучше поздно' },
          { original: 'Не откладывай на завтра то, что можно сделать сегодня', literalTranslation: 'Don\'t put off until tomorrow what you can do today', meaning: 'Don\'t procrastinate', context: 'Encouraging immediate action', slangEquivalent: 'Делай сейчас' },
          { original: 'Кто рано встаёт, тому Бог подаёт', literalTranslation: 'God gives to those who rise early', meaning: 'The early bird catches the worm', context: 'Encouraging early action', slangEquivalent: 'Вставай рано' },
          { original: 'Кто не рискует, тот не пьёт шампанского', literalTranslation: 'Who doesn\'t risk, doesn\'t drink champagne', meaning: 'Nothing ventured, nothing gained', context: 'Encouraging risk-taking', slangEquivalent: 'Рискуй' },
          { original: 'Всё хорошо, что хорошо кончается', literalTranslation: 'All is well that ends well', meaning: 'The end justifies the means', context: 'When something ends well', slangEquivalent: 'Главное - результат' },
          { original: 'Повторение - мать учения', literalTranslation: 'Repetition is the mother of learning', meaning: 'Practice makes perfect', context: 'Encouraging practice', slangEquivalent: 'Повторяй больше' },
          { original: 'Тише едешь - дальше будешь', literalTranslation: 'Drive slower - you\'ll go farther', meaning: 'Slow and steady wins the race', context: 'Encouraging patience', slangEquivalent: 'Не спеши' },
          { original: 'Дорога в тысячу вёрст начинается с одного шага', literalTranslation: 'A journey of a thousand versts begins with one step', meaning: 'Every journey begins with a single step', context: 'Encouraging to start', slangEquivalent: 'Шаг за шагом' }
        ],
        streetSlang: [
          { word: 'Круто', translation: 'Cool/awesome', pronunciation: 'KROO-toh' },
          { word: 'Классно', translation: 'Classy/awesome', pronunciation: 'KLAS-sno' },
          { word: 'Офигенно', translation: 'Amazing/awesome (slang)', pronunciation: 'ah-fee-GYEN-no' },
          { word: 'Шикарно', translation: 'Gorgeous/amazing', pronunciation: 'shee-KAR-no' },
          { word: 'Супер', translation: 'Super', pronunciation: 'SOO-per' },
          { word: 'Отлично', translation: 'Excellent', pronunciation: 'at-LEECH-no' }
        ]
      },
      {
        id: 23,
        title: 'Texting & Internet Slang',
        premium: true,
        abbreviations: [
          { abbreviation: 'спс', fullForm: 'спасибо', englishEquivalent: 'thanks', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'пж', fullForm: 'пожалуйста', englishEquivalent: 'please', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'ок', fullForm: 'окей', englishEquivalent: 'okay', usage: 'Anyone, very common', platform: 'All platforms' },
          { abbreviation: 'нзч', fullForm: 'не за что', englishEquivalent: 'you\'re welcome', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'мб', fullForm: 'может быть', englishEquivalent: 'maybe', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'хз', fullForm: 'хрен знает', englishEquivalent: 'no idea', usage: 'Friends only, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'имхо', fullForm: 'по моему скромному мнению', englishEquivalent: 'in my humble opinion', usage: 'Anyone, casual', platform: 'VK, forums' },
          { abbreviation: 'лол', fullForm: 'laughing out loud', englishEquivalent: 'laughing', usage: 'Anyone, very common', platform: 'All platforms' },
          { abbreviation: 'сп', fullForm: 'спокойной ночи', englishEquivalent: 'good night', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' },
          { abbreviation: 'всм', fullForm: 'в смысле', englishEquivalent: 'what do you mean', usage: 'Anyone, casual', platform: 'VK, WhatsApp, Telegram' }
        ],
        emojiMeanings: [
          { emoji: '👍', meaning: 'Okay/approval', culturalContext: 'Very common, universal' },
          { emoji: '😊', meaning: 'Happy/smiling', culturalContext: 'Friendly, common' },
          { emoji: '❤️', meaning: 'Love', culturalContext: 'Used with friends and family' },
          { emoji: '🔥', meaning: 'Fire/amazing', culturalContext: 'Something is really good' },
          { emoji: '💪', meaning: 'Strength/good luck', culturalContext: 'Encouragement' }
        ],
        internetSlang: [
          { word: 'LOL', translation: 'Laughing out loud', pronunciation: 'el-oh-el', usage: 'Anyone, very common' },
          { word: 'OMG', translation: 'Oh my God', pronunciation: 'oh-em-gee', usage: 'Anyone, casual' },
          { word: 'WTF', translation: 'What the f***', pronunciation: 'double-u-tee-ef', usage: 'Friends only, very casual' },
          { word: 'BTW', translation: 'By the way', pronunciation: 'bee-tee-double-u', usage: 'Anyone, casual' },
          { word: 'IDK', translation: 'I don\'t know', pronunciation: 'eye-dee-kay', usage: 'Anyone, casual' },
          { word: 'TBH', translation: 'To be honest', pronunciation: 'tee-bee-aitch', usage: 'Anyone, casual' }
        ]
      }
    ]
  }
};

export const getLanguageById = (id) => languages[id];
export const getAllLanguages = () => Object.values(languages);

