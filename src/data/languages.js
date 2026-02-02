export const languages = {
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    code: 'es',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'House & Home',
        premium: true,
        words: [
          { word: 'Dormitorio', translation: 'Bedroom', pronunciation: 'dor-mee-TOH-ree-oh' },
          { word: 'Baño', translation: 'Bathroom', pronunciation: 'BAH-nyoh' },
          { word: 'Cocina', translation: 'Kitchen', pronunciation: 'koh-SEE-nah' },
          { word: 'Sala de estar', translation: 'Living room', pronunciation: 'SAH-lah deh es-TAHR' },
          { word: 'Comedor', translation: 'Dining room', pronunciation: 'koh-meh-DOR' },
          { word: 'Cama', translation: 'Bed', pronunciation: 'KAH-mah' },
          { word: 'Mesa', translation: 'Table', pronunciation: 'MEH-sah' },
          { word: 'Silla', translation: 'Chair', pronunciation: 'SEE-yah' },
          { word: 'Sofá', translation: 'Sofa', pronunciation: 'soh-FAH' },
          { word: 'Lámpara', translation: 'Lamp', pronunciation: 'LAHM-pah-rah' },
          { word: 'Refrigerador', translation: 'Refrigerator', pronunciation: 'reh-free-heh-rah-DOR' },
          { word: 'Estufa', translation: 'Stove', pronunciation: 'es-TOO-fah' },
          { word: 'Televisión', translation: 'TV', pronunciation: 'teh-leh-vee-SYOHN' },
          { word: 'Lavadora', translation: 'Washing machine', pronunciation: 'lah-vah-DOH-rah' },
          { word: 'Microondas', translation: 'Microwave', pronunciation: 'mee-kroh-OHN-dahs' },
          { word: 'Limpiar', translation: 'To clean', pronunciation: 'leem-pee-AHR' },
          { word: 'Cocinar', translation: 'To cook', pronunciation: 'koh-see-NAHR' },
          { word: 'Dormir', translation: 'To sleep', pronunciation: 'dor-MEER' },
          { word: 'Relajarse', translation: 'To relax', pronunciation: 'reh-lah-HAHR-seh' },
          { word: 'Ver televisión', translation: 'To watch TV', pronunciation: 'vehr teh-leh-vee-SYOHN' }
        ],
        phrases: [
          { word: '¿Dónde está el baño?', translation: 'Where is the bathroom?', pronunciation: 'DOHN-deh es-TAH el BAH-nyoh' },
          { word: 'Siéntete como en casa', translation: 'Make yourself at home', pronunciation: 'see-EN-teh-teh KOH-moh en KAH-sah' },
          { word: 'Esta es mi habitación', translation: 'This is my room', pronunciation: 'ES-tah es mee ah-bee-tah-SYOHN' },
          { word: 'Voy a cocinar', translation: 'I\'m going to cook', pronunciation: 'voy ah koh-see-NAHR' },
          { word: 'Necesito limpiar', translation: 'I need to clean', pronunciation: 'neh-seh-SEE-toh leem-pee-AHR' },
          { word: '¿Puedo usar la cocina?', translation: 'Can I use the kitchen?', pronunciation: 'PWEH-doh oo-SAHR lah koh-SEE-nah' }
        ],
        culturalNotes: 'Homes in Spanish-speaking countries vary by region. In Spain, apartments (pisos) are common in cities, while in Latin America, houses (casas) are more typical. The living room (sala) is often the social center of the home. Kitchens are important gathering spaces, especially for family meals. Bathrooms are called "baño" or "servicio" depending on the country. Many homes have patios or courtyards (patios) for outdoor living. Home life emphasizes family time, with meals being important social events. It\'s common to remove shoes when entering homes in some regions. Spanish homes often have tiled floors and are designed for warm climates with good ventilation.',
        streetSlang: [
          { word: 'Mi casa es tu casa', translation: 'My house is your house (make yourself at home)', pronunciation: 'mee KAH-sah es too KAH-sah' },
          { word: 'Echarse en el sofá', translation: 'To crash on the sofa (relax)', pronunciation: 'eh-CHAR-seh en el soh-FAH' },
          { word: 'Estar en casa', translation: 'To be at home (chilling)', pronunciation: 'es-TAR en KAH-sah' },
          { word: 'Quedarse en casa', translation: 'To stay home (hang out)', pronunciation: 'keh-DAHR-seh en KAH-sah' },
          { word: 'Casa chica', translation: 'Small apartment/place (casual)', pronunciation: 'KAH-sah CHEE-kah' },
          { word: 'Estar cómodo', translation: 'To be comfortable/at ease', pronunciation: 'es-TAR KOH-moh-doh' }
        ]
      },
      {
        id: 25,
        title: 'Clothing & Fashion',
        premium: true,
        words: [
          { word: 'Camisa', translation: 'Shirt', pronunciation: 'kah-MEE-sah' },
          { word: 'Pantalones', translation: 'Pants', pronunciation: 'pahn-tah-LOH-nes' },
          { word: 'Vestido', translation: 'Dress', pronunciation: 'ves-TEE-doh' },
          { word: 'Zapatos', translation: 'Shoes', pronunciation: 'sah-PAH-tohs' },
          { word: 'Calcetines', translation: 'Socks', pronunciation: 'kahl-seh-TEE-nes' },
          { word: 'Chaqueta', translation: 'Jacket', pronunciation: 'chah-KEH-tah' },
          { word: 'Abrigo', translation: 'Coat', pronunciation: 'ah-BREE-goh' },
          { word: 'Sombrero', translation: 'Hat', pronunciation: 'sohm-BREH-roh' },
          { word: 'Cinturón', translation: 'Belt', pronunciation: 'seen-too-ROHN' },
          { word: 'Bolso', translation: 'Bag', pronunciation: 'BOHL-soh' },
          { word: 'Gafas', translation: 'Glasses', pronunciation: 'GAH-fahs' },
          { word: 'Reloj', translation: 'Watch', pronunciation: 'reh-LOH' },
          { word: 'Usar', translation: 'To wear', pronunciation: 'oo-SAHR' },
          { word: 'Probarse', translation: 'To try on', pronunciation: 'proh-BAHR-seh' },
          { word: 'Quedar bien', translation: 'To fit/look good', pronunciation: 'keh-DAHR bee-EN' },
          { word: 'Quitarse', translation: 'To take off', pronunciation: 'kee-TAHR-seh' },
          { word: 'Ponerse', translation: 'To put on', pronunciation: 'poh-NEHR-seh' }
        ],
        phrases: [
          { word: '¿Qué talla usas?', translation: 'What size do you wear?', pronunciation: 'keh TAH-yah OO-sahs' },
          { word: '¿Cuánto cuesta?', translation: 'How much does it cost?', pronunciation: 'KWAN-toh KWEHS-tah' },
          { word: '¿Tienes esto en [color]?', translation: 'Do you have this in [color]?', pronunciation: 'tee-EH-nes ES-toh en [color]' },
          { word: '¿Puedo probármelo?', translation: 'Can I try this on?', pronunciation: 'PWEH-doh proh-BAHR-meh-loh' },
          { word: 'Te queda muy bien', translation: 'It looks great on you', pronunciation: 'teh KEH-dah moo-ee bee-EN' },
          { word: '¿Dónde están los probadores?', translation: 'Where are the fitting rooms?', pronunciation: 'DOHN-deh es-TAHN lohs proh-bah-DOH-res' }
        ],
        culturalNotes: 'Fashion in Spanish-speaking countries varies by region. Spain is known for stylish, modern fashion, while Latin American countries have vibrant, colorful styles. Zara, Mango, and Bershka are popular Spanish brands. In Latin America, bright colors and patterns are common. Shoes are often removed when entering homes. Fashion is important for social occasions, and people dress well for going out. Street fashion is casual but put-together. Shopping malls (centros comerciales) are popular, and bargaining can occur in markets. Size systems vary: Spain uses European sizes, while Latin America may use US sizes. Fashion is seen as a form of self-expression and social status.',
        streetSlang: [
          { word: 'Estar a la moda', translation: 'To be fashionable/in style', pronunciation: 'es-TAR ah lah MOH-dah' },
          { word: 'Verse bien', translation: 'To look good', pronunciation: 'vehr-seh bee-EN' },
          { word: 'Ropa chida', translation: 'Cool clothes', pronunciation: 'ROH-pah CHEE-dah' },
          { word: 'Estar guapo/guapa', translation: 'To look handsome/beautiful', pronunciation: 'es-TAR GWAH-poh / GWAH-pah' },
          { word: 'Ir de compras', translation: 'To go shopping', pronunciation: 'eer deh KOHM-prahs' },
          { word: 'Quedar genial', translation: 'To look amazing', pronunciation: 'keh-DAHR heh-nee-AHL' }
        ]
      },
      {
        id: 26,
        title: 'Dance & Movement',
        premium: true,
        danceStyles: [
          { name: 'Flamenco', pronunciation: 'flah-MEN-koh', context: 'Traditional Spanish dance, seen at festivals and cultural events', type: 'Traditional' },
          { name: 'Salsa', pronunciation: 'SAHL-sah', context: 'Popular Latin dance in clubs and dance halls', type: 'Traditional/Modern' },
          { name: 'Bachata', pronunciation: 'bah-CHAH-tah', context: 'Romantic Latin dance, very popular in clubs', type: 'Traditional/Modern' },
          { name: 'Tango', pronunciation: 'TAHN-goh', context: 'Passionate dance from Argentina, seen in dance studios and shows', type: 'Traditional' },
          { name: 'Reggaeton', pronunciation: 'reh-gah-eh-TOHN', context: 'Modern club dance style, very popular in nightlife', type: 'Modern' }
        ],
        words: [
          { word: 'Bailar', translation: 'To dance', pronunciation: 'bah-ee-LAHR' },
          { word: 'Bailarín/Bailarina', translation: 'Dancer', pronunciation: 'bah-ee-lah-REEN / bah-ee-lah-REE-nah' },
          { word: 'Música', translation: 'Music', pronunciation: 'MOO-see-kah' },
          { word: 'Ritmo', translation: 'Rhythm', pronunciation: 'REET-moh' },
          { word: 'Pista de baile', translation: 'Dance floor', pronunciation: 'PEES-tah deh BAH-ee-leh' },
          { word: 'Pareja de baile', translation: 'Dance partner', pronunciation: 'pah-REH-hah deh BAH-ee-leh' },
          { word: 'Rápido/Lento', translation: 'Fast/Slow', pronunciation: 'RAH-pee-doh / LEN-toh' },
          { word: 'Girar', translation: 'To spin/turn', pronunciation: 'hee-RAHR' },
          { word: 'Mover el cuerpo', translation: 'Move your body', pronunciation: 'moh-VEHR el KWEHR-poh' }
        ],
        phrases: [
          { word: '¿Quieres bailar?', translation: 'Do you want to dance?', pronunciation: 'kee-EH-res bah-ee-LAHR' },
          { word: '¡Bailas muy bien!', translation: 'You\'re a great dancer!', pronunciation: 'bah-EE-lahs moo-ee bee-EN' },
          { word: 'No sé bailar', translation: 'I don\'t know how to dance', pronunciation: 'noh seh bah-ee-LAHR' },
          { word: 'Enséñame este baile', translation: 'Teach me this dance', pronunciation: 'en-SEH-nyah-meh ES-teh BAH-ee-leh' },
          { word: 'Vamos a la pista de baile', translation: 'Let\'s go to the dance floor', pronunciation: 'VAH-mohs ah lah PEES-tah deh BAH-ee-leh' },
          { word: '¿Qué canción es esta?', translation: 'What song is this?', pronunciation: 'keh kahn-SYOHN es ES-tah' }
        ],
        culturalNotes: 'Dance is central to Spanish and Latin American culture. Flamenco from Andalusia is world-famous, performed at festivals and tablaos. Salsa and Bachata dominate Latin dance clubs worldwide. Reggaeton has become the soundtrack of modern Spanish nightlife, especially among young people. People dance at weddings, festivals (fiestas), clubs (discotecas), and family gatherings. Dance etiquette varies: formal for traditional dances like Flamenco, casual and energetic for club dancing. Modern dance culture in Spain and Latin America blends traditional styles with international trends, creating a vibrant nightlife scene.',
        streetSlang: [
          { word: 'Baila como los dioses', translation: 'Dances like the gods (dances amazingly)', pronunciation: 'BAH-ee-lah KOH-moh lohs dee-OH-ses' },
          { word: 'Tiene dos pies izquierdos', translation: 'Has two left feet (can\'t dance)', pronunciation: 'tee-EH-neh dohs pees ees-kee-EHR-dohs' },
          { word: 'Pegarse', translation: 'To grind/dance close (club slang)', pronunciation: 'peh-GAHR-seh' },
          { word: '¡Vamos a rumbear!', translation: 'Let\'s party/dance!', pronunciation: 'VAH-mohs ah room-beh-AHR' },
          { word: 'Está prendido', translation: 'It\'s lit/hot (party energy)', pronunciation: 'es-TAH pren-DEE-doh' },
          { word: 'Romper la pista', translation: 'To tear up the dance floor', pronunciation: 'rohm-PEHR lah PEES-tah' }
        ]
      },
      {
        id: 27,
        title: 'Spanish Idioms and Expressions',
        premium: true,
        words: [
          { word: 'Estar en las nubes', translation: 'To be daydreaming / distracted (used when someone is not paying attention)', pronunciation: 'es-TAR en las NOO-behs' },
          { word: 'Ser pan comido', translation: 'To be a piece of cake (very easy)', pronunciation: 'ser pahn koh-MEE-doh' },
          { word: 'Costar un ojo de la cara', translation: 'To cost an arm and a leg (very expensive)', pronunciation: 'kohs-TAR oon OH-ho deh lah KAH-rah' },
          { word: 'Meter la pata', translation: 'To mess up / put your foot in it (after a mistake)', pronunciation: 'meh-TEHR lah PAH-tah' },
          { word: 'Tirar la toalla', translation: 'To throw in the towel (give up)', pronunciation: 'tee-RAHR lah toh-AH-yah' },
          { word: 'Estar hecho polvo', translation: 'To be exhausted / wiped out', pronunciation: 'es-TAR EH-choh POHL-voh' },
          { word: 'Echar una mano', translation: 'To lend a hand (help someone)', pronunciation: 'eh-CHAR OO-nah MAH-noh' },
          { word: 'No tener pelos en la lengua', translation: 'To speak very directly (not hold back)', pronunciation: 'noh teh-NEHR PEH-lohs en lah LEN-gwah' }
        ],
        streetSlang: [
          { word: '¡Qué fuerte!', translation: 'That\'s intense / no way! (reaction)', pronunciation: 'keh FWEHR-teh' },
          { word: 'Ni loco', translation: 'No way / not a chance', pronunciation: 'nee LOH-koh' },
          { word: 'Estar a tope', translation: 'To be at full capacity / maxed out', pronunciation: 'es-TAR ah TOH-peh' },
          { word: 'Qué rollo', translation: 'What\'s going on? (very casual, Spain/Mexico)', pronunciation: 'keh ROH-yoh' },
          { word: 'Me da igual', translation: 'I don\'t care / it\'s all the same to me', pronunciation: 'meh dah ee-GWAHL' },
          { word: 'Se me fue la olla', translation: 'I lost it / I spaced out', pronunciation: 'seh meh FWEH lah OH-yah' }
        ]
      }
    ]
  },
  dutch: {
    id: 'dutch',
    name: 'Dutch',
    flag: '🇳🇱',
    code: 'nl',
    lessonCount: 5,
    totalLessons: 5,
    freeLessons: 5,
    lessons: [
      {
        id: 1,
        title: 'Essential Greetings',
        level: 'beginner',
        words: [
          { word: 'Hallo', translation: 'Hello', pronunciation: 'HAH-loh' },
          { word: 'Goedemorgen', translation: 'Good morning', pronunciation: 'HOO-duh-MOR-ghun' },
          { word: 'Goedemiddag', translation: 'Good afternoon', pronunciation: 'HOO-duh-MID-dahg' },
          { word: 'Goedenavond', translation: 'Good evening', pronunciation: 'HOO-dun-AH-vont' },
          { word: 'Hoe gaat het?', translation: 'How are you?', pronunciation: 'hoo GAHT het' },
          { word: 'Goed, dank je', translation: 'Good, thank you', pronunciation: 'hoot DAHNK yuh' },
          { word: 'Mijn naam is...', translation: 'My name is...', pronunciation: 'mine NAHM is' },
          { word: 'Aangenaam', translation: 'Nice to meet you', pronunciation: 'AHN-guh-nahm' }
        ]
      },
      {
        id: 2,
        title: 'Ordering Food & Drinks',
        level: 'beginner',
        words: [
          { word: 'Ik wil graag...', translation: 'I would like...', pronunciation: 'ik vil HRAHG' },
          { word: 'Een koffie, alstublieft', translation: 'A coffee, please', pronunciation: 'un KOF-fee AHL-stoo-bleeft' },
          { word: 'Een biertje', translation: 'A beer', pronunciation: 'un BEER-tyuh' },
          { word: 'Een glas water', translation: 'A glass of water', pronunciation: 'un glahs VAH-tur' },
          { word: 'De rekening, alstublieft', translation: 'The bill, please', pronunciation: 'duh RAY-kuh-ning AHL-stoo-bleeft' },
          { word: 'Lekker!', translation: 'Delicious!', pronunciation: 'LEK-kur' },
          { word: 'Hoeveel kost het?', translation: 'How much does it cost?', pronunciation: 'HOO-vayl KOST het' }
        ]
      },
      {
        id: 3,
        title: 'Essential Questions',
        level: 'beginner',
        words: [
          { word: 'Waar is het toilet?', translation: 'Where is the bathroom?', pronunciation: 'vahr is het twah-LET' },
          { word: 'Spreekt u Engels?', translation: 'Do you speak English?', pronunciation: 'spraykt oo ENG-uls' },
          { word: 'Ik begrijp het niet', translation: 'I don\'t understand', pronunciation: 'ik buh-HRAYP het neet' },
          { word: 'Kunt u dat herhalen?', translation: 'Can you repeat that?', pronunciation: 'kunt oo daht her-HAH-lun' },
          { word: 'Wat is dit?', translation: 'What is this?', pronunciation: 'vaht is dit' },
          { word: 'Waar is...?', translation: 'Where is...?', pronunciation: 'vahr is' },
          { word: 'Kunt u mij helpen?', translation: 'Can you help me?', pronunciation: 'kunt oo may HEL-pun' }
        ]
      },
      {
        id: 4,
        title: 'Getting Around',
        level: 'beginner',
        words: [
          { word: 'Links', translation: 'Left', pronunciation: 'links' },
          { word: 'Rechts', translation: 'Right', pronunciation: 'rekhts' },
          { word: 'Rechtdoor', translation: 'Straight ahead', pronunciation: 'REKHT-door' },
          { word: 'Dichtbij', translation: 'Near', pronunciation: 'DIKHT-bay' },
          { word: 'Ver weg', translation: 'Far away', pronunciation: 'fer VEKH' },
          { word: 'Het station', translation: 'The station', pronunciation: 'het STAH-shon' },
          { word: 'De luchthaven', translation: 'The airport', pronunciation: 'duh LUKHT-hah-vun' },
          { word: 'Ik moet naar...', translation: 'I need to go to...', pronunciation: 'ik moot nahr' }
        ]
      },
      {
        id: 5,
        title: 'Polite Expressions',
        level: 'beginner',
        words: [
          { word: 'Alstublieft', translation: 'Please (formal)', pronunciation: 'AHL-stoo-bleeft' },
          { word: 'Dank u wel', translation: 'Thank you', pronunciation: 'dahnk oo VEL' },
          { word: 'Heel erg bedankt', translation: 'Thank you very much', pronunciation: 'hayl erg buh-DAHNKT' },
          { word: 'Graag gedaan', translation: 'You\'re welcome', pronunciation: 'hrahg guh-DAHN' },
          { word: 'Sorry', translation: 'Sorry', pronunciation: 'SOR-ree' },
          { word: 'Neem me niet kwalijk', translation: 'Excuse me', pronunciation: 'naym muh neet KVAH-luk' },
          { word: 'Ja', translation: 'Yes', pronunciation: 'yah' },
          { word: 'Nee', translation: 'No', pronunciation: 'nay' }
        ]
      }
    ]
  },
  french: {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    code: 'fr',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'House & Home',
        premium: true,
        words: [
          { word: 'Chambre', translation: 'Bedroom', pronunciation: 'shahm-bruh' },
          { word: 'Salle de bain', translation: 'Bathroom', pronunciation: 'sahl duh ban' },
          { word: 'Cuisine', translation: 'Kitchen', pronunciation: 'kwee-ZEEN' },
          { word: 'Salon', translation: 'Living room', pronunciation: 'sah-LOHN' },
          { word: 'Salle à manger', translation: 'Dining room', pronunciation: 'sahl ah mahn-ZHAY' },
          { word: 'Lit', translation: 'Bed', pronunciation: 'lee' },
          { word: 'Table', translation: 'Table', pronunciation: 'TAH-bluh' },
          { word: 'Chaise', translation: 'Chair', pronunciation: 'shez' },
          { word: 'Canapé', translation: 'Sofa', pronunciation: 'kah-nah-PAY' },
          { word: 'Lampe', translation: 'Lamp', pronunciation: 'lahmp' },
          { word: 'Réfrigérateur', translation: 'Refrigerator', pronunciation: 'ray-free-zhay-rah-TUR' },
          { word: 'Cuisinière', translation: 'Stove', pronunciation: 'kwee-zee-NYAIR' },
          { word: 'Télévision', translation: 'TV', pronunciation: 'tay-lay-vee-ZYOHN' },
          { word: 'Lave-linge', translation: 'Washing machine', pronunciation: 'lahv-LANZH' },
          { word: 'Micro-ondes', translation: 'Microwave', pronunciation: 'mee-kroh-ohnd' },
          { word: 'Nettoyer', translation: 'To clean', pronunciation: 'neh-twah-YAY' },
          { word: 'Cuisiner', translation: 'To cook', pronunciation: 'kwee-zee-NAY' },
          { word: 'Dormir', translation: 'To sleep', pronunciation: 'dor-MEER' },
          { word: 'Se détendre', translation: 'To relax', pronunciation: 'suh day-TAHND-ruh' },
          { word: 'Regarder la télé', translation: 'To watch TV', pronunciation: 'ruh-gar-DAY lah tay-LAY' }
        ],
        phrases: [
          { word: 'Où sont les toilettes?', translation: 'Where is the bathroom?', pronunciation: 'oo sohn lay twah-LET' },
          { word: 'Fais comme chez toi', translation: 'Make yourself at home', pronunciation: 'fay kohm shay twah' },
          { word: 'C\'est ma chambre', translation: 'This is my room', pronunciation: 'say mah shahm-bruh' },
          { word: 'Je vais cuisiner', translation: 'I\'m going to cook', pronunciation: 'zhuh vay kwee-zee-NAY' },
          { word: 'Je dois nettoyer', translation: 'I need to clean', pronunciation: 'zhuh dwah neh-twah-YAY' },
          { word: 'Puis-je utiliser la cuisine?', translation: 'Can I use the kitchen?', pronunciation: 'pwee zhuh oo-tee-lee-ZAY lah kwee-ZEEN' }
        ],
        culturalNotes: 'French homes (maisons) vary from city apartments to countryside houses. Parisian apartments are often compact but elegant. The living room (salon) is the social center. Kitchens are important for French cuisine culture. Bathrooms may be separate from toilets (WC). Many French homes have balconies or small gardens. Home life emphasizes meals and family time. French people value their private space and home decor. It\'s common to remove shoes when entering homes. French homes often feature high ceilings, large windows, and decorative elements. The concept of "chez moi" (at my place) is important in French culture.',
        streetSlang: [
          { word: 'Chez moi', translation: 'At my place/home', pronunciation: 'shay mwah' },
          { word: 'Se poser', translation: 'To chill/relax at home', pronunciation: 'suh poh-ZAY' },
          { word: 'Être chez soi', translation: 'To be at home (comfortable)', pronunciation: 'etr shay swah' },
          { word: 'Rester à la maison', translation: 'To stay home', pronunciation: 'res-TAY ah lah may-ZOHN' },
          { word: 'Piaule', translation: 'Place/room (slang)', pronunciation: 'pee-OHL' },
          { word: 'Être bien installé', translation: 'To be comfortable/settled', pronunciation: 'etr bee-en an-stah-LAY' }
        ]
      },
      {
        id: 25,
        title: 'Clothing & Fashion',
        premium: true,
        words: [
          { word: 'Chemise', translation: 'Shirt', pronunciation: 'shuh-MEEZ' },
          { word: 'Pantalon', translation: 'Pants', pronunciation: 'pahn-tah-LOHN' },
          { word: 'Robe', translation: 'Dress', pronunciation: 'rohb' },
          { word: 'Chaussures', translation: 'Shoes', pronunciation: 'shoh-SOOR' },
          { word: 'Chaussettes', translation: 'Socks', pronunciation: 'shoh-SET' },
          { word: 'Veste', translation: 'Jacket', pronunciation: 'vest' },
          { word: 'Manteau', translation: 'Coat', pronunciation: 'mahn-TOH' },
          { word: 'Chapeau', translation: 'Hat', pronunciation: 'shah-POH' },
          { word: 'Ceinture', translation: 'Belt', pronunciation: 'san-TOOR' },
          { word: 'Sac', translation: 'Bag', pronunciation: 'sahk' },
          { word: 'Lunettes', translation: 'Glasses', pronunciation: 'loo-NET' },
          { word: 'Montre', translation: 'Watch', pronunciation: 'mohnt-ruh' },
          { word: 'Porter', translation: 'To wear', pronunciation: 'por-TAY' },
          { word: 'Essayer', translation: 'To try on', pronunciation: 'eh-say-YAY' },
          { word: 'Aller bien', translation: 'To fit/look good', pronunciation: 'ah-LAY bee-EN' },
          { word: 'Enlever', translation: 'To take off', pronunciation: 'ahn-luh-VAY' },
          { word: 'Mettre', translation: 'To put on', pronunciation: 'MET-ruh' }
        ],
        phrases: [
          { word: 'Quelle taille faites-vous?', translation: 'What size do you wear?', pronunciation: 'kel ty fayt-voo' },
          { word: 'Combien ça coûte?', translation: 'How much does it cost?', pronunciation: 'kohm-bee-EN sah koot' },
          { word: 'Vous avez ça en [couleur]?', translation: 'Do you have this in [color]?', pronunciation: 'voo zah-VAY sah ahn [color]' },
          { word: 'Je peux l\'essayer?', translation: 'Can I try this on?', pronunciation: 'zhuh puh lay-say-YAY' },
          { word: 'Ça vous va très bien', translation: 'It looks great on you', pronunciation: 'sah voo vah treh bee-EN' },
          { word: 'Où sont les cabines d\'essayage?', translation: 'Where are the fitting rooms?', pronunciation: 'oo sohn lay kah-BEEN day-say-YAZH' }
        ],
        culturalNotes: 'France is a global fashion capital, home to luxury brands like Chanel, Dior, and Louis Vuitton. Paris Fashion Week is world-renowned. French fashion emphasizes elegance, simplicity, and quality over trends. The "less is more" philosophy is common. Street style in Paris is chic and understated. French people invest in quality pieces rather than fast fashion. Shopping at markets (marchés) and boutiques is popular. Size systems use European measurements. Fashion is seen as an art form and cultural expression. French people dress well even casually, valuing style and presentation. The concept of "chic" is deeply ingrained in French culture.',
        streetSlang: [
          { word: 'Être à la mode', translation: 'To be fashionable/in style', pronunciation: 'etr ah lah mohd' },
          { word: 'Avoir du style', translation: 'To have style', pronunciation: 'ah-VWAHR doo steel' },
          { word: 'Fringues', translation: 'Clothes (slang)', pronunciation: 'fran-guh' },
          { word: 'Être stylé', translation: 'To be stylish', pronunciation: 'etr stee-LAY' },
          { word: 'Faire du shopping', translation: 'To go shopping', pronunciation: 'fair doo shoh-PEENG' },
          { word: 'Ça te va super bien', translation: 'It looks amazing on you', pronunciation: 'sah tuh vah soo-PER bee-EN' }
        ]
      },
      {
        id: 26,
        title: 'Dance & Movement',
        premium: true,
        danceStyles: [
          { name: 'Cancan', pronunciation: 'kahn-KAHN', context: 'Famous French dance from the Moulin Rouge era, seen in shows', type: 'Traditional' },
          { name: 'Valse', pronunciation: 'vahls', context: 'Waltz, elegant ballroom dance', type: 'Traditional' },
          { name: 'Danse de salon', pronunciation: 'dahns duh sah-LOHN', context: 'Ballroom dancing, formal events', type: 'Traditional' },
          { name: 'Danse de club', pronunciation: 'dahns duh kloob', context: 'Modern club dancing, very popular in Paris nightlife', type: 'Modern' },
          { name: 'Électro', pronunciation: 'ay-lek-TROH', context: 'Electronic dance music scene, popular in clubs', type: 'Modern' }
        ],
        words: [
          { word: 'Danser', translation: 'To dance', pronunciation: 'dahn-SAY' },
          { word: 'Danseur/Danseuse', translation: 'Dancer', pronunciation: 'dahn-SUR / dahn-SUHZ' },
          { word: 'Musique', translation: 'Music', pronunciation: 'moo-ZEEK' },
          { word: 'Rythme', translation: 'Rhythm', pronunciation: 'reetm' },
          { word: 'Piste de danse', translation: 'Dance floor', pronunciation: 'peest duh dahns' },
          { word: 'Partenaire de danse', translation: 'Dance partner', pronunciation: 'par-tuh-NAIR duh dahns' },
          { word: 'Rapide/Lent', translation: 'Fast/Slow', pronunciation: 'rah-PEED / lahn' },
          { word: 'Tourner', translation: 'To spin/turn', pronunciation: 'toor-NAY' },
          { word: 'Bouger le corps', translation: 'Move your body', pronunciation: 'boo-ZHAY luh kor' }
        ],
        phrases: [
          { word: 'Tu veux danser?', translation: 'Do you want to dance?', pronunciation: 'too vuh dahn-SAY' },
          { word: 'Tu danses très bien!', translation: 'You\'re a great dancer!', pronunciation: 'too dahns treh bee-EN' },
          { word: 'Je ne sais pas danser', translation: 'I don\'t know how to dance', pronunciation: 'zhuh nuh say pah dahn-SAY' },
          { word: 'Apprends-moi cette danse', translation: 'Teach me this dance', pronunciation: 'ah-PRAHN mwah set dahns' },
          { word: 'Allons sur la piste de danse', translation: 'Let\'s go to the dance floor', pronunciation: 'ah-LOHN soor lah peest duh dahns' },
          { word: 'Quelle est cette chanson?', translation: 'What song is this?', pronunciation: 'kel ay set shahn-SOHN' }
        ],
        culturalNotes: 'Dance culture in France blends elegance and modernity. The Cancan is iconic, originating from 19th-century Paris cabarets like the Moulin Rouge. Ballroom dancing (danse de salon) remains popular at formal events and weddings. Paris has a vibrant nightlife scene with world-famous clubs featuring electronic music and modern dance styles. People dance at festivals (festivals), clubs (boîtes de nuit), weddings (mariages), and cultural events. Dance etiquette is more formal for traditional dances, while club culture is casual and energetic. Modern French dance culture is heavily influenced by electronic music, especially in cities like Paris and Lyon, creating a sophisticated yet fun nightlife experience.',
        streetSlang: [
          { word: 'Danser comme un dieu', translation: 'Dances like a god (dances amazingly)', pronunciation: 'dahn-SAY kohm uhn dee-UH' },
          { word: 'Avoir deux pieds gauches', translation: 'To have two left feet (can\'t dance)', pronunciation: 'ah-VWAHR duh pee-ay gohsh' },
          { word: 'Se déhancher', translation: 'To move your hips (dance slang)', pronunciation: 'suh day-ahn-SHAY' },
          { word: 'On fait la fête!', translation: 'Let\'s party!', pronunciation: 'ohn fay lah FET' },
          { word: 'C\'est chaud', translation: 'It\'s hot/lit (party energy)', pronunciation: 'say shoh' },
          { word: 'Défoncer la piste', translation: 'To tear up the dance floor', pronunciation: 'day-fohn-SAY lah peest' }
        ]
      },
      {
        id: 27,
        title: 'French Idioms and Expressions',
        premium: true,
        words: [
          { word: 'Être dans la lune', translation: 'To be daydreaming / distracted', pronunciation: 'etr dahn lah loon' },
          { word: 'C\'est du gâteau', translation: 'It\'s a piece of cake (very easy)', pronunciation: 'say doo gah-TOH' },
          { word: 'Coûter les yeux de la tête', translation: 'To cost an arm and a leg (very expensive)', pronunciation: 'koo-TAY lay zyuh duh lah tet' },
          { word: 'Mettre les pieds dans le plat', translation: 'To put your foot in it (say something awkward)', pronunciation: 'met-truh lay pyay dahn luh plah' },
          { word: 'Jeter l\'éponge', translation: 'To throw in the towel (give up)', pronunciation: 'zhuh-TAY lay-pohnzh' },
          { word: 'Tomber dans les pommes', translation: 'To faint (literally “fall in the apples”)', pronunciation: 'tohm-BAY dahn lay pom' },
          { word: 'Avoir le cafard', translation: 'To feel down / depressed (literally “have the cockroach”)', pronunciation: 'ah-VWAHR luh kah-FAR' },
          { word: 'Avoir la pêche', translation: 'To feel great / be full of energy', pronunciation: 'ah-VWAHR lah pesh' }
        ],
        streetSlang: [
          { word: 'Ça roule', translation: 'All good / it\'s going fine', pronunciation: 'sah rool' },
          { word: 'Bof', translation: 'Meh / so-so', pronunciation: 'bohf' },
          { word: 'J\'en ai marre', translation: 'I\'m fed up / I\'ve had enough', pronunciation: 'zhahn ay mar' },
          { word: 'Ça me saoule', translation: 'It\'s annoying / it bores me', pronunciation: 'sah muh sool' },
          { word: 'T\'inquiète', translation: 'Don\'t worry (casual)', pronunciation: 'tan-kyet' },
          { word: 'C\'est pas grave', translation: 'It\'s no big deal', pronunciation: 'say pah grav' }
        ]
      }
    ]
  },
  german: {
    id: 'german',
    name: 'German',
    flag: '🇩🇪',
    code: 'de',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'Business Conversations',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Guten Tag, ich freue mich, Sie kennenzulernen.', translation: 'Good day, I am pleased to meet you. (meeting introduction)', pronunciation: 'GOO-ten tahk, ikh FROY-eh mikh, zee KEN-en-tsoo-LEHR-nen' },
          { word: 'Lassen Sie uns das Projekt besprechen.', translation: 'Let’s discuss the project.', pronunciation: 'LAH-sen zee oons dahs proh-YEKT beh-SHPRAY-khen' },
          { word: 'Wir planen den Zeitplan für das Projekt.', translation: 'We are planning the timeline for the project.', pronunciation: 'veer PLAH-nen den TSYTE-plahn fyoor dahs proh-YEKT' },
          { word: 'Ich habe einen Vorschlag für die nächste Phase.', translation: 'I have a proposal for the next phase.', pronunciation: 'ikh HAH-beh EYE-nen FOR-shlahk fyoor dee NEK-steh FAH-zeh' },
          { word: 'Können Sie mir das per E-Mail bestätigen?', translation: 'Can you confirm that by email?', pronunciation: 'KER-nen zee meer dahs pehr EE-mile beh-SHTAY-ti-gen' },
          { word: 'Ich schicke Ihnen die Unterlagen heute.', translation: 'I will send you the documents today.', pronunciation: 'ikh SHIK-keh EE-nen dee OON-ter-lah-gen HOY-teh' },
          { word: 'Wann passt Ihnen ein Termin?', translation: 'When does a meeting time suit you?', pronunciation: 'vahn pahst EE-nen ine ter-MEEN' },
          { word: 'Wir sollten die nächsten Schritte festlegen.', translation: 'We should set the next steps.', pronunciation: 'veer ZOL-ten dee NEK-sten SHRIT-teh FEST-lay-gen' }
        ],
        streetSlang: [
          { word: 'Kurzes Update', translation: 'Quick update (casual business)', pronunciation: 'KOOR-tses UP-dayt' },
          { word: 'Das passt', translation: 'That works / sounds good', pronunciation: 'dahs pahst' },
          { word: 'Ich bin dabei', translation: 'I’m in / I’m on board', pronunciation: 'ikh bin dah-BY' },
          { word: 'Lass uns kurz sprechen', translation: 'Let’s talk briefly', pronunciation: 'lahs oons koorts SHPREKH-en' },
          { word: 'Schick mir kurz die Infos', translation: 'Send me the info quickly', pronunciation: 'shik meer koorts dee IN-fohs' },
          { word: 'Wir sind im Zeitplan', translation: 'We’re on schedule', pronunciation: 'veer zint im TSYTE-plahn' }
        ]
      },
      {
        id: 25,
        title: 'Common German Idioms',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Das ist nicht mein Bier.', translation: 'That’s not my problem (lit. “not my beer”; use when it’s not your responsibility).', pronunciation: 'dahs ist nikht mine beer' },
          { word: 'Ich verstehe nur Bahnhof.', translation: 'I don’t understand a thing (use when you’re confused).', pronunciation: 'ikh fer-SHTAY-eh noor BAHN-hohf' },
          { word: 'Da liegt der Hund begraben.', translation: 'That’s the real issue (use to point to the core problem).', pronunciation: 'dah leegt der hoont beh-GRAH-ben' },
          { word: 'Alles in Butter.', translation: 'Everything is fine (reassuring, “all in butter”).', pronunciation: 'AH-les in BOO-ter' },
          { word: 'Tomaten auf den Augen haben.', translation: 'To be oblivious (lit. “have tomatoes on your eyes”).', pronunciation: 'toh-MAH-ten owf den OW-gen HAH-ben' },
          { word: 'Zwei Fliegen mit einer Klappe schlagen.', translation: 'To kill two birds with one stone (use when one action solves two problems).', pronunciation: 'tsvy FLEE-gen mit EYE-ner KLAH-peh SHLAH-gen' },
          { word: 'Ins kalte Wasser springen.', translation: 'To jump in at the deep end (start without preparation).', pronunciation: 'ins KAHL-teh VAH-ser SHPRING-en' },
          { word: 'Den Nagel auf den Kopf treffen.', translation: 'To hit the nail on the head (exactly right).', pronunciation: 'den NAH-gel owf den kopf TREF-fen' }
        ],
        streetSlang: [
          { word: 'Kein Ding', translation: 'No big deal', pronunciation: 'kine ding' },
          { word: 'Alles easy', translation: 'Everything’s easy / no stress', pronunciation: 'AH-les EE-zee' },
          { word: 'Jetzt mal ehrlich', translation: 'Let’s be honest', pronunciation: 'yetzt mahl EHR-likh' },
          { word: 'So ist das', translation: 'That’s how it is', pronunciation: 'zoh ist dahs' },
          { word: 'Kopf hoch', translation: 'Chin up', pronunciation: 'kopf hoch' },
          { word: 'Passt schon', translation: 'It’s fine / works out', pronunciation: 'pahst shohn' }
        ]
      },
      {
        id: 26,
        title: 'Opinions and Debates',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Meiner Meinung nach…', translation: 'In my opinion…', pronunciation: 'MY-ner MY-noong nahkh' },
          { word: 'Ich stimme dir zu.', translation: 'I agree with you.', pronunciation: 'ikh SHTIM-meh deer tsoo' },
          { word: 'Ich sehe das anders.', translation: 'I see it differently.', pronunciation: 'ikh ZAY-eh dahs AHN-ders' },
          { word: 'Ich bin nicht ganz überzeugt.', translation: 'I’m not fully convinced.', pronunciation: 'ikh bin nikht gahnts oer-tsOYKT' },
          { word: 'Was hältst du davon?', translation: 'What do you think about that?', pronunciation: 'vahs HELST doo dah-FOHN' },
          { word: 'Meiner Ansicht nach ist das wichtig.', translation: 'In my view, that is important.', pronunciation: 'MY-ner AN-zikht nahkh ist dahs VIKH-tikh' },
          { word: 'Lass uns die Vor- und Nachteile abwägen.', translation: 'Let’s weigh the pros and cons.', pronunciation: 'lahs oons dee FOR- oont NAKH-tye-leh AHP-vay-gen' },
          { word: 'Dafür gibt es gute Argumente.', translation: 'There are good arguments for that.', pronunciation: 'dah-FYOOR gilt es GOO-teh ar-goo-MEN-teh' }
        ],
        streetSlang: [
          { word: 'Seh ich genauso', translation: 'I see it the same way', pronunciation: 'zay ikh gen-OW-zoh' },
          { word: 'Da bin ich anderer Meinung', translation: 'I disagree', pronunciation: 'dah bin ikh AN-der-er MY-noong' },
          { word: 'Ehrlich gesagt', translation: 'Honestly speaking', pronunciation: 'EHR-likh guh-ZAHKT' },
          { word: 'Das überzeugt mich nicht', translation: 'That doesn’t convince me', pronunciation: 'dahs oer-TSOYKT mikh nikht' },
          { word: 'Klingt fair', translation: 'Sounds fair', pronunciation: 'klingt fair' },
          { word: 'Lass uns Klartext reden', translation: 'Let’s talk straight', pronunciation: 'lahs oons KLAHR-tekst RAY-den' }
        ]
      },
      {
        id: 27,
        title: 'Telling Stories in Past Tense',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Gestern bin ich früh aufgestanden.', translation: 'Yesterday I got up early.', pronunciation: 'GES-tern bin ikh froo OWF-geh-shtan-den' },
          { word: 'Dann bin ich zur Arbeit gefahren.', translation: 'Then I went to work.', pronunciation: 'dahn bin ikh tsoor AR-bite geh-FAH-ren' },
          { word: 'Danach habe ich einen Freund getroffen.', translation: 'After that I met a friend.', pronunciation: 'dah-NAHKH HAH-beh ikh EYE-nen froint geh-TROF-fen' },
          { word: 'Währenddessen hat es geregnet.', translation: 'Meanwhile it rained.', pronunciation: 'VAY-rend-dessen hat es geh-REG-net' },
          { word: 'Plötzlich ist etwas Unerwartetes passiert.', translation: 'Suddenly something unexpected happened.', pronunciation: 'PLER-tslikh ist ET-vas OON-er-VAR-teh-tes pah-SEE-ert' },
          { word: 'Schließlich bin ich nach Hause gegangen.', translation: 'Finally I went home.', pronunciation: 'SHLEES-likh bin ikh nahkh HOW-zeh geh-GAHN-gen' },
          { word: 'Am Ende war alles in Ordnung.', translation: 'In the end, everything was fine.', pronunciation: 'ahm EN-deh vahr AH-les in ORT-noong' },
          { word: 'Ich habe mich sehr gefreut.', translation: 'I was very happy about it.', pronunciation: 'ikh HAH-beh mikh zayr geh-FROYT' }
        ],
        streetSlang: [
          { word: 'Und dann…', translation: 'And then… (story connector)', pronunciation: 'oont dahn' },
          { word: 'Auf einmal…', translation: 'All of a sudden…', pronunciation: 'owf EYE-mahl' },
          { word: 'Zum Schluss', translation: 'In the end / finally', pronunciation: 'tsum shloos' },
          { word: 'Echt krass', translation: 'Really crazy', pronunciation: 'ekht krahs' },
          { word: 'War richtig cool', translation: 'It was really cool', pronunciation: 'vahr RIKH-tikh kool' },
          { word: 'Lange Rede, kurzer Sinn', translation: 'Long story short', pronunciation: 'LAHNG-eh RAY-deh, KOOR-tser zin' }
        ]
      }
    ]
  },
  hindi: {
    id: 'hindi',
    name: 'Hindi',
    flag: '🇮🇳',
    code: 'hi',
    lessonCount: 10,
    totalLessons: 10,
    freeLessons: 10,
    lessons: [
      {
        id: 1,
        title: 'Essential Greetings',
        level: 'beginner',
        words: [
          { word: 'नमस्ते', translation: 'Hello / Goodbye', pronunciation: 'nuh-muh-STAY' },
          { word: 'आप कैसे हैं?', translation: 'How are you? (formal)', pronunciation: 'AAP kay-say HAIN' },
          { word: 'मैं ठीक हूँ', translation: 'I\'m fine', pronunciation: 'MAIN theek HOON' },
          { word: 'धन्यवाद', translation: 'Thank you', pronunciation: 'dhuhn-yuh-VAAD' },
          { word: 'मेरा नाम... है', translation: 'My name is...', pronunciation: 'may-RAA NAAM... HAI' },
          { word: 'आपका नाम क्या है?', translation: 'What is your name?', pronunciation: 'AAP-kaa NAAM kya HAI' },
          { word: 'मिलकर खुशी हुई', translation: 'Nice to meet you', pronunciation: 'mil-kar KHU-shee HU-ee' },
          { word: 'शुभ प्रभात', translation: 'Good morning', pronunciation: 'shubh pruh-BAAT' }
        ]
      },
      {
        id: 2,
        title: 'Ordering Food & Drinks',
        level: 'beginner',
        words: [
          { word: 'मुझे... चाहिए', translation: 'I need / I want...', pronunciation: 'muj-HAY... chaa-hee-YAY' },
          { word: 'पानी', translation: 'Water', pronunciation: 'PAA-nee' },
          { word: 'चाय', translation: 'Tea', pronunciation: 'CHAI' },
          { word: 'खाना', translation: 'Food', pronunciation: 'KHAA-naa' },
          { word: 'बहुत स्वादिष्ट है', translation: 'It\'s very delicious', pronunciation: 'buh-HUT svaa-DISHT HAI' },
          { word: 'कितना है?', translation: 'How much is it?', pronunciation: 'kit-NAA HAI' },
          { word: 'बिल दीजिए', translation: 'Please bring the bill', pronunciation: 'BILL dee-JEE-yay' }
        ]
      },
      {
        id: 3,
        title: 'Essential Questions',
        level: 'beginner',
        words: [
          { word: 'शौचालय कहाँ है?', translation: 'Where is the bathroom?', pronunciation: 'show-CHAA-lay kah-HAAN HAI' },
          { word: 'क्या आप अंग्रेज़ी बोलते हैं?', translation: 'Do you speak English?', pronunciation: 'kya AAP ang-RAY-zee BOL-tay HAIN' },
          { word: 'मुझे समझ नहीं आया', translation: 'I don\'t understand', pronunciation: 'muj-HAY suh-MAJH nuh-HEEN aa-YAA' },
          { word: 'कृपया दोहराएँ', translation: 'Please repeat', pronunciation: 'krip-YAA doh-RAA-yen' },
          { word: 'यह क्या है?', translation: 'What is this?', pronunciation: 'YEH kya HAI' },
          { word: 'कहाँ है?', translation: 'Where is?', pronunciation: 'kah-HAAN HAI' },
          { word: 'मदद कीजिए', translation: 'Please help', pronunciation: 'muh-DAHD kee-JEE-yay' }
        ]
      },
      {
        id: 4,
        title: 'Getting Around',
        level: 'beginner',
        words: [
          { word: 'बाएँ', translation: 'Left', pronunciation: 'BAA-yen' },
          { word: 'दाएँ', translation: 'Right', pronunciation: 'DAA-yen' },
          { word: 'सीधे', translation: 'Straight', pronunciation: 'SEE-dhay' },
          { word: 'पास', translation: 'Near', pronunciation: 'PAAS' },
          { word: 'दूर', translation: 'Far', pronunciation: 'DOOR' },
          { word: 'स्टेशन', translation: 'Station', pronunciation: 'STAY-shun' },
          { word: 'हवाई अड्डा', translation: 'Airport', pronunciation: 'huh-VAA-ee UDD-aa' },
          { word: 'मुझे... जाना है', translation: 'I need to go to...', pronunciation: 'muj-HAY... JAA-naa HAI' }
        ]
      },
      {
        id: 5,
        title: 'Polite Expressions',
        level: 'beginner',
        words: [
          { word: 'कृपया', translation: 'Please', pronunciation: 'krip-YAA' },
          { word: 'धन्यवाद', translation: 'Thank you', pronunciation: 'dhuhn-yuh-VAAD' },
          { word: 'बहुत-बहुत धन्यवाद', translation: 'Thank you very much', pronunciation: 'buh-HUT buh-HUT dhuhn-yuh-VAAD' },
          { word: 'स्वागत है', translation: 'You\'re welcome', pronunciation: 'svaa-GAHT HAI' },
          { word: 'माफ़ कीजिए', translation: 'Sorry / Excuse me', pronunciation: 'MAAF kee-JEE-yay' },
          { word: 'कोई बात नहीं', translation: 'No problem', pronunciation: 'KO-ee BAAT nuh-HEEN' },
          { word: 'हाँ', translation: 'Yes', pronunciation: 'HAAN' },
          { word: 'नहीं', translation: 'No', pronunciation: 'nuh-HEEN' }
        ]
      },
      {
        id: 6,
        title: 'Numbers & Prices',
        level: 'beginner',
        words: [
          { word: 'एक', translation: 'One', pronunciation: 'ek' },
          { word: 'दो', translation: 'Two', pronunciation: 'doh' },
          { word: 'तीन', translation: 'Three', pronunciation: 'TEEN' },
          { word: 'चार', translation: 'Four', pronunciation: 'CHAAR' },
          { word: 'पाँच', translation: 'Five', pronunciation: 'PAANCH' },
          { word: 'सस्ता', translation: 'Cheap', pronunciation: 'SUS-taa' },
          { word: 'महँगा', translation: 'Expensive', pronunciation: 'muh-HUN-gah' },
          { word: 'छूट है?', translation: 'Is there a discount?', pronunciation: 'chhoot HAI' }
        ]
      },
      {
        id: 7,
        title: 'Time & Dates',
        level: 'beginner',
        words: [
          { word: 'आज', translation: 'Today', pronunciation: 'aaj' },
          { word: 'कल', translation: 'Tomorrow / Yesterday', pronunciation: 'kal' },
          { word: 'सुबह', translation: 'Morning', pronunciation: 'soo-BAH' },
          { word: 'शाम', translation: 'Evening', pronunciation: 'shaam' },
          { word: 'रात', translation: 'Night', pronunciation: 'raat' },
          { word: 'अभी कितने बजे हैं?', translation: 'What time is it now?', pronunciation: 'uh-BHEE kit-nay BUH-jay hain' },
          { word: 'मैं जल्दी आऊँगा', translation: 'I will come early', pronunciation: 'main JAL-dee aa-OO-n-gaa' },
          { word: 'मुलाकात कब है?', translation: 'When is the meeting?', pronunciation: 'moo-laa-KAAT kab HAI' }
        ]
      },
      {
        id: 8,
        title: 'Transportation',
        level: 'beginner',
        words: [
          { word: 'बस', translation: 'Bus', pronunciation: 'bus' },
          { word: 'ट्रेन', translation: 'Train', pronunciation: 'tray-n' },
          { word: 'टैक्सी', translation: 'Taxi', pronunciation: 'TAK-see' },
          { word: 'टिकट', translation: 'Ticket', pronunciation: 'TIK-it' },
          { word: 'कहाँ जाना है?', translation: 'Where do you want to go?', pronunciation: 'kah-HAAN JAA-naa HAI' },
          { word: 'कितना समय लगेगा?', translation: 'How long will it take?', pronunciation: 'kit-NAA su-MAY lay-GAA' },
          { word: 'यहाँ रुकिए', translation: 'Stop here', pronunciation: 'yah-HAAN rook-EE-yay' },
          { word: 'मेट्रो स्टेशन', translation: 'Metro station', pronunciation: 'MAY-troh STAY-shun' }
        ]
      },
      {
        id: 9,
        title: 'Daily Essentials',
        level: 'beginner',
        words: [
          { word: 'फोन', translation: 'Phone', pronunciation: 'fone' },
          { word: 'पता', translation: 'Address', pronunciation: 'puh-TAA' },
          { word: 'पासपोर्ट', translation: 'Passport', pronunciation: 'PAAS-port' },
          { word: 'पैसे', translation: 'Money', pronunciation: 'PIE-say' },
          { word: 'मुझे वाई-फाई चाहिए', translation: 'I need Wi‑Fi', pronunciation: 'muj-HAY wye-fye chaa-hee-YAY' },
          { word: 'मेरी मदद कीजिए', translation: 'Please help me', pronunciation: 'MEH-ree muh-DAD kee-JEE-yay' },
          { word: 'मैं खो गया/गई हूँ', translation: 'I am lost', pronunciation: 'main khoh GUH-yaa / GUH-yee hoon' },
          { word: 'यह जरूरी है', translation: 'This is important', pronunciation: 'yah ज़रू-री HAI' }
        ]
      },
      {
        id: 10,
        title: 'Basic Conversations',
        level: 'beginner',
        words: [
          { word: 'आप कहाँ से हैं?', translation: 'Where are you from?', pronunciation: 'AAP kah-HAAN say hain' },
          { word: 'मैं भारत से हूँ', translation: 'I am from India', pronunciation: 'main BHAH-rat say hoon' },
          { word: 'मैं सीख रहा/रही हूँ', translation: 'I am learning', pronunciation: 'main seekh rah-HAH / rah-HEE hoon' },
          { word: 'धीरे बोलिए', translation: 'Please speak slowly', pronunciation: 'DHEE-ray bo-LEE-yay' },
          { word: 'ठीक है', translation: 'Okay', pronunciation: 'theek HAI' },
          { word: 'कोई समस्या नहीं', translation: 'No problem', pronunciation: 'KO-ee su-MUS-yaa nuh-HEEN' },
          { word: 'बहुत अच्छा', translation: 'Very good', pronunciation: 'buh-HUT UH-chaa' },
          { word: 'फिर मिलते हैं', translation: 'See you again', pronunciation: 'fir mil-tay hain' }
        ]
      }
    ]
  },
  italian: {
    id: 'italian',
    name: 'Italian',
    flag: '🇮🇹',
    code: 'it',
    lessonCount: 10,
    totalLessons: 10,
    freeLessons: 10,
    lessons: [
      {
        id: 1,
        title: 'Essential Greetings',
        level: 'beginner',
        words: [
          { word: 'Ciao!', translation: 'Hi! / Bye!', pronunciation: 'chow' },
          { word: 'Buongiorno', translation: 'Good morning', pronunciation: 'bwon-JOR-no' },
          { word: 'Buonasera', translation: 'Good evening', pronunciation: 'bwon-ah-SEH-rah' },
          { word: 'Come stai?', translation: 'How are you? (informal)', pronunciation: 'KO-meh stai' },
          { word: 'Come sta?', translation: 'How are you? (formal)', pronunciation: 'KO-meh stah' },
          { word: 'Bene, grazie', translation: 'Good, thanks', pronunciation: 'BEH-neh GRAHT-see-eh' },
          { word: 'Mi chiamo...', translation: 'My name is...', pronunciation: 'mee kee-AH-mo' },
          { word: 'Piacere', translation: 'Nice to meet you', pronunciation: 'pee-ah-CHEH-reh' }
        ]
      },
      {
        id: 2,
        title: 'Ordering Food & Drinks',
        level: 'beginner',
        words: [
          { word: 'Vorrei...', translation: 'I would like...', pronunciation: 'vor-RAY' },
          { word: 'Un caffè, per favore', translation: 'A coffee, please', pronunciation: 'oon kaf-FEH pehr fah-VO-reh' },
          { word: 'Una pizza', translation: 'A pizza', pronunciation: 'OO-nah PEET-sah' },
          { word: 'Un bicchiere d\'acqua', translation: 'A glass of water', pronunciation: 'oon bee-kee-EH-reh DAH-kwah' },
          { word: 'Il conto, per favore', translation: 'The check, please', pronunciation: 'eel KON-to pehr fah-VO-reh' },
          { word: 'È delizioso!', translation: 'It\'s delicious!', pronunciation: 'eh deh-lee-tsee-O-so' },
          { word: 'Quanto costa?', translation: 'How much does it cost?', pronunciation: 'KWAN-to KO-stah' }
        ]
      },
      {
        id: 3,
        title: 'Essential Questions',
        level: 'beginner',
        words: [
          { word: 'Dov\'è il bagno?', translation: 'Where is the bathroom?', pronunciation: 'do-VEH eel BAHN-yo' },
          { word: 'Parla inglese?', translation: 'Do you speak English?', pronunciation: 'PAR-lah een-GLEH-zeh' },
          { word: 'Non capisco', translation: 'I don\'t understand', pronunciation: 'non kah-PEE-sko' },
          { word: 'Può ripetere?', translation: 'Can you repeat?', pronunciation: 'pwo ree-PEH-teh-reh' },
          { word: 'Dov\'è...?', translation: 'Where is...?', pronunciation: 'do-VEH' },
          { word: 'Come si dice...?', translation: 'How do you say...?', pronunciation: 'KO-meh see DEE-cheh' },
          { word: 'Mi scusi', translation: 'Excuse me', pronunciation: 'mee SKOO-zee' }
        ]
      },
      {
        id: 4,
        title: 'Getting Around',
        level: 'beginner',
        words: [
          { word: 'A sinistra', translation: 'To the left', pronunciation: 'ah see-NEE-strah' },
          { word: 'A destra', translation: 'To the right', pronunciation: 'ah DEH-strah' },
          { word: 'Sempre dritto', translation: 'Straight ahead', pronunciation: 'SEM-preh DREET-to' },
          { word: 'Vicino', translation: 'Near / Close', pronunciation: 'vee-CHEE-no' },
          { word: 'Lontano', translation: 'Far', pronunciation: 'lon-TAH-no' },
          { word: 'La stazione', translation: 'The station', pronunciation: 'lah staht-see-O-neh' },
          { word: 'L\'aeroporto', translation: 'The airport', pronunciation: 'lah-eh-ro-POR-to' }
        ]
      },
      {
        id: 5,
        title: 'Polite Expressions',
        level: 'beginner',
        words: [
          { word: 'Per favore', translation: 'Please', pronunciation: 'pehr fah-VO-reh' },
          { word: 'Grazie', translation: 'Thank you', pronunciation: 'GRAHT-see-eh' },
          { word: 'Grazie mille', translation: 'Thanks a lot', pronunciation: 'GRAHT-see-eh MEEL-leh' },
          { word: 'Prego', translation: 'You\'re welcome', pronunciation: 'PREH-go' },
          { word: 'Scusa', translation: 'Sorry (informal)', pronunciation: 'SKOO-zah' },
          { word: 'Mi dispiace', translation: 'I\'m sorry', pronunciation: 'mee dee-SPEE-ah-cheh' },
          { word: 'Va bene', translation: 'It\'s okay / That\'s fine', pronunciation: 'vah BEH-neh' },
          { word: 'Arrivederci', translation: 'Goodbye', pronunciation: 'ah-ree-veh-DEHR-chee' }
        ]
      },
      {
        id: 6,
        title: 'Shopping & Bargaining',
        level: 'beginner',
        words: [
          { word: 'Quanto costa questo?', translation: 'How much is this?', pronunciation: 'KWAHN-toh KOH-stah KWAY-stoh' },
          { word: 'È troppo caro', translation: 'It\'s too expensive', pronunciation: 'eh TROHP-poh KAH-roh' },
          { word: 'Ha uno sconto?', translation: 'Do you have a discount?', pronunciation: 'ah OO-noh SKOHN-toh' },
          { word: 'Posso provarlo?', translation: 'Can I try it on?', pronunciation: 'POHS-soh proh-VAHR-loh' },
          { word: 'Lo prendo', translation: 'I\'ll take it', pronunciation: 'loh PREHN-doh' },
          { word: 'Accetta carte di credito?', translation: 'Do you accept credit cards?', pronunciation: 'ah-CHET-tah KAR-teh dee KREH-dee-toh' },
          { word: 'Dov\'è la cassa?', translation: 'Where is the cashier?', pronunciation: 'doh-VEH lah KAHS-sah' }
        ]
      },
      {
        id: 7,
        title: 'At the Hotel',
        level: 'beginner',
        words: [
          { word: 'Ho una prenotazione', translation: 'I have a reservation', pronunciation: 'oh OO-nah preh-noh-tah-tsee-OH-neh' },
          { word: 'Per quante notti?', translation: 'For how many nights?', pronunciation: 'pehr KWAHN-teh NOHT-tee' },
          { word: 'La chiave, per favore', translation: 'The key, please', pronunciation: 'lah kee-AH-veh pehr fah-VOH-reh' },
          { word: 'C\'è il WiFi?', translation: 'Is there WiFi?', pronunciation: 'cheh eel WEE-fee' },
          { word: 'A che ora è la colazione?', translation: 'What time is breakfast?', pronunciation: 'ah keh OH-rah eh lah koh-lah-tsee-OH-neh' },
          { word: 'Può chiamarmi un taxi?', translation: 'Can you call me a taxi?', pronunciation: 'pwoh kee-ah-MAHR-mee oon TAHK-see' },
          { word: 'Vorrei fare il check-out', translation: 'I\'d like to check out', pronunciation: 'vohr-RAY FAH-reh eel check-out' }
        ]
      },
      {
        id: 8,
        title: 'Time & Numbers',
        level: 'beginner',
        words: [
          { word: 'Che ore sono?', translation: 'What time is it?', pronunciation: 'keh OH-reh SOH-noh' },
          { word: 'Sono le tre', translation: 'It\'s three o\'clock', pronunciation: 'SOH-noh leh TREH' },
          { word: 'Uno, due, tre', translation: 'One, two, three', pronunciation: 'OO-noh DOO-eh TREH' },
          { word: 'Dieci, venti, trenta', translation: 'Ten, twenty, thirty', pronunciation: 'dee-EH-chee VEHN-tee TREHN-tah' },
          { word: 'Lunedì, martedì', translation: 'Monday, Tuesday', pronunciation: 'loo-neh-DEE mahr-teh-DEE' },
          { word: 'Oggi, domani, ieri', translation: 'Today, tomorrow, yesterday', pronunciation: 'OHD-jee doh-MAH-nee ee-EH-ree' },
          { word: 'Questa settimana', translation: 'This week', pronunciation: 'KWAY-stah seht-tee-MAH-nah' }
        ]
      },
      {
        id: 9,
        title: 'Emergencies',
        level: 'beginner',
        words: [
          { word: 'Aiuto!', translation: 'Help!', pronunciation: 'ah-YOO-toh' },
          { word: 'Chiami la polizia', translation: 'Call the police', pronunciation: 'kee-AH-mee lah poh-lee-TSEE-ah' },
          { word: 'Ho bisogno di un medico', translation: 'I need a doctor', pronunciation: 'oh bee-ZOHN-yoh dee oon MEH-dee-koh' },
          { word: 'Dov\'è l\'ospedale?', translation: 'Where is the hospital?', pronunciation: 'doh-VEH loh-speh-DAH-leh' },
          { word: 'Mi sono perso', translation: 'I\'m lost', pronunciation: 'mee SOH-noh PEHR-soh' },
          { word: 'Ho perso il passaporto', translation: 'I lost my passport', pronunciation: 'oh PEHR-soh eel pahs-sah-POHR-toh' },
          { word: 'È un\'emergenza', translation: 'It\'s an emergency', pronunciation: 'eh oon-eh-mehr-JEHN-tsah' }
        ]
      },
      {
        id: 10,
        title: 'Making Friends',
        level: 'beginner',
        words: [
          { word: 'Di dove sei?', translation: 'Where are you from?', pronunciation: 'dee DOH-veh say' },
          { word: 'Sono di...', translation: 'I\'m from...', pronunciation: 'SOH-noh dee' },
          { word: 'Che lavoro fai?', translation: 'What do you do for work?', pronunciation: 'keh lah-VOH-roh fai' },
          { word: 'Mi piace molto l\'Italia', translation: 'I really like Italy', pronunciation: 'mee pee-AH-cheh MOHL-toh lee-TAH-lee-ah' },
          { word: 'Posso avere il tuo numero?', translation: 'Can I have your number?', pronunciation: 'POHS-soh ah-VEH-reh eel TOO-oh NOO-meh-roh' },
          { word: 'Usciamo qualche volta?', translation: 'Shall we go out sometime?', pronunciation: 'oo-SHAH-moh KWAHL-keh VOHL-tah' },
          { word: 'È stato un piacere', translation: 'It was a pleasure', pronunciation: 'eh STAH-toh oon pee-ah-CHEH-reh' }
        ]
      }
    ]
  },
  portuguese: {
    id: 'portuguese',
    name: 'Portuguese',
    flag: '🇵🇹',
    code: 'pt',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'Business Conversations',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Prazer em conhecê-lo(a) na reunião de hoje.', translation: 'Nice to meet you at today’s meeting.', pronunciation: 'prah-ZEHR eng koh-nyay-SEE-loh/ah nah heh-oo-nee-AH-o deh OH-zhee' },
          { word: 'Gostaria de apresentar o status do projeto.', translation: 'I’d like to present the project status.', pronunciation: 'gohs-tah-REE-ah jee ah-preh-zen-TAR oo STAH-toos doo pro-ZHEH-toh' },
          { word: 'Estamos alinhando o cronograma e as entregas.', translation: 'We are aligning the schedule and deliverables.', pronunciation: 'ehs-TAH-moos ah-leen-YAHN-doo oo kroh-noh-GRAH-ma ee ahs en-TREH-gahs' },
          { word: 'Tenho uma proposta para a próxima etapa.', translation: 'I have a proposal for the next phase.', pronunciation: 'TEN-yoo OO-mah pro-POHS-tah pah-rah ah PROH-see-mah eh-TAH-pah' },
          { word: 'Você poderia confirmar por e-mail?', translation: 'Could you confirm by email?', pronunciation: 'voh-SEH poh-jee-AH kon-feer-MAR por ee-MAYL' },
          { word: 'Segue anexo o documento.', translation: 'Attached is the document.', pronunciation: 'SEH-ghee ah-NEH-ksoo oo doh-koo-MEN-toh' },
          { word: 'Qual horário funciona melhor para você?', translation: 'What time works best for you?', pronunciation: 'kwahl oh-RAH-ree-oh foon-SEE-oh-nah meh-LYOR pah-rah voh-SEH' },
          { word: 'Podemos marcar uma reunião na próxima semana?', translation: 'Can we schedule a meeting next week?', pronunciation: 'poh-DEH-moos mar-KAR OO-mah heh-oo-nee-AH-o nah PROH-see-mah seh-MAH-nah' }
        ],
        streetSlang: [
          { word: 'Vamos alinhar esse projeto', translation: 'Let’s align on this project', pronunciation: 'VAH-moos ah-leen-YAR EH-see pro-ZHEH-toh' },
          { word: 'Me manda por e-mail, por favor', translation: 'Send it to me by email, please', pronunciation: 'mee MAHN-dah por ee-MAYL por fah-VOR' },
          { word: 'A gente está no prazo', translation: 'We’re on schedule (casual)', pronunciation: 'ah ZHEN-chee es-TAH noo PRAH-zoh' },
          { word: 'Posso te ligar rapidinho?', translation: 'Can I give you a quick call?', pronunciation: 'POH-soo chee lee-GAR hah-pee-DEEN-yoo' },
          { word: 'Vamos marcar um call', translation: 'Let’s schedule a call', pronunciation: 'VAH-moos mar-KAR oong kohl' },
          { word: 'Te atualizo até amanhã', translation: 'I’ll update you by tomorrow', pronunciation: 'chee ah-too-ah-LEE-zoo ah-TEH ah-mah-NYAH' }
        ]
      },
      {
        id: 25,
        title: 'Common Portuguese Idioms',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Chutar o balde', translation: 'To lose patience / give up (lit. “kick the bucket”; BR common. PT-PT: “perder a cabeça” is more common).', pronunciation: 'shoo-TAR oo BAWL-dee' },
          { word: 'Quebrar um galho', translation: 'To do someone a favor / help out (lit. “break a branch”; PT-PT often says “dar uma mão”).', pronunciation: 'keh-BRAHR oong GAL-yoh' },
          { word: 'Pagar o pato', translation: 'To take the blame (lit. “pay the duck”; used when someone is unfairly blamed).', pronunciation: 'pah-GAR oo PAH-toh' },
          { word: 'Ficar de molho', translation: 'To take time off / rest (lit. “stay in sauce”; often after being sick).', pronunciation: 'fee-KAR jee MOHL-yoh' },
          { word: 'Encher linguiça', translation: 'To pad/fill with nonsense (lit. “stuff sausage”; used for extra text).', pronunciation: 'en-SHER leen-GWEE-sah' },
          { word: 'Dar com os burros n\'água', translation: 'To fail / hit a dead end (lit. “meet the donkeys in water”).', pronunciation: 'dar kohm ooz BOO-hoos nah-GWAH' },
          { word: 'Tirar o cavalo da chuva', translation: 'To give up on an expectation (lit. “take the horse out of the rain”).', pronunciation: 'chee-RAR oo kah-VAH-loh dah SHOO-vah' },
          { word: 'Estar com a pulga atrás da orelha', translation: 'To be suspicious (lit. “a flea behind the ear”; used when something feels off).', pronunciation: 'ehs-TAR kohm ah POOL-gah ah-TRAZ dah oh-REH-lyah' }
        ],
        streetSlang: [
          { word: 'De boa', translation: 'All good / no worries', pronunciation: 'jee BOH-ah' },
          { word: 'Tô de boa', translation: 'I’m fine / relaxed', pronunciation: 'toh jee BOH-ah' },
          { word: 'Sem estresse', translation: 'No stress', pronunciation: 'seng ees-TREH-see' },
          { word: 'Na real', translation: 'To be honest / actually', pronunciation: 'nah heh-AWL' },
          { word: 'Fazer um corre', translation: 'To run an errand / hustle (slang)', pronunciation: 'fah-ZER oong KOH-hee' },
          { word: 'Que perrengue', translation: 'What a hassle', pronunciation: 'keh peh-REN-ghee' }
        ]
      },
      {
        id: 26,
        title: 'Opinions and Debates',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Na minha opinião…', translation: 'In my opinion…', pronunciation: 'nah MEEN-yah oh-pee-nee-AW' },
          { word: 'Concordo em parte.', translation: 'I agree in part.', pronunciation: 'kohn-KOR-doh eng PAR-chee' },
          { word: 'Respeitosamente, discordo.', translation: 'Respectfully, I disagree.', pronunciation: 'hes-pey-toh-zah-MEN-chee jees-KOR-doh' },
          { word: 'Não tenho certeza disso.', translation: 'I’m not sure about that.', pronunciation: 'now TEN-yoo ser-TEH-zah DEE-soo' },
          { word: 'Qual é o seu ponto de vista?', translation: 'What is your point of view?', pronunciation: 'kwahl eh oo SEH-oo POHN-toh jee VEES-tah' },
          { word: 'Esse argumento é forte.', translation: 'That argument is strong.', pronunciation: 'EH-see ar-goo-MEN-too eh FOR-chee' },
          { word: 'Não vejo evidências suficientes.', translation: 'I don’t see enough evidence.', pronunciation: 'now VAY-zhoo eh-vee-DEN-see-as soo-fee-SHEN-tees' },
          { word: 'Vamos considerar os dois lados.', translation: 'Let’s consider both sides.', pronunciation: 'VAH-moos kon-see-jeh-RAR ooz doyz LAH-doos' }
        ],
        streetSlang: [
          { word: 'Concordo total', translation: 'Totally agree', pronunciation: 'kohn-KOR-doh toh-TAWL' },
          { word: 'Tenho minhas dúvidas', translation: 'I have my doubts', pronunciation: 'TEN-yoo MEEN-yahs DOO-vee-dahs' },
          { word: 'Pra mim, faz sentido', translation: 'For me, it makes sense', pronunciation: 'prah MEEM faz sen-TEE-doh' },
          { word: 'Não tô convencido', translation: 'I’m not convinced', pronunciation: 'now toh kon-ven-SEE-doh' },
          { word: 'Vamos debater isso', translation: 'Let’s debate this', pronunciation: 'VAH-moos jee-bah-TER EE-soo' },
          { word: 'Faz sentido, mas…', translation: 'It makes sense, but…', pronunciation: 'faz sen-TEE-doh mahs' }
        ]
      },
      {
        id: 27,
        title: 'Telling Stories in Past Tense',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'Ontem acordei cedo.', translation: 'Yesterday I woke up early.', pronunciation: 'ohn-TEN ah-kor-DAY SEH-doh' },
          { word: 'Então fui ao trabalho.', translation: 'Then I went to work.', pronunciation: 'en-TAW fwee ow trah-BAH-lyoh' },
          { word: 'Depois encontrei um amigo.', translation: 'After that I met a friend.', pronunciation: 'deh-POYZ en-kohn-TRAY oong ah-MEE-goh' },
          { word: 'Enquanto isso, começou a chover.', translation: 'Meanwhile, it started to rain.', pronunciation: 'en-KWAN-too EE-soh koh-meh-SOH ah shoo-VER' },
          { word: 'De repente, algo inesperado aconteceu.', translation: 'Suddenly, something unexpected happened.', pronunciation: 'jee heh-PEN-chee AHL-goh ee-nes-peh-RAH-doh ah-kohn-teh-SEW' },
          { word: 'Mais tarde, voltamos para casa.', translation: 'Later, we returned home.', pronunciation: 'mys TAR-jee vol-TAH-moos pah-rah KAH-zah' },
          { word: 'No fim, tudo deu certo.', translation: 'In the end, everything worked out.', pronunciation: 'noh feeng TOO-doh deh-W SEHR-too' },
          { word: 'Fiquei muito feliz com isso.', translation: 'I was very happy about that.', pronunciation: 'fee-KAY MOO-ee-too feh-LEEZ kohm EE-soo' }
        ],
        streetSlang: [
          { word: 'E aí, depois…', translation: 'So, then… (story connector)', pronunciation: 'ee ah-EE deh-POYZ' },
          { word: 'Do nada…', translation: 'Out of nowhere…', pronunciation: 'doo NAH-dah' },
          { word: 'No final das contas', translation: 'At the end of the day', pronunciation: 'noh fee-NAWL das KOHN-tahs' },
          { word: 'Foi bem doido', translation: 'It was pretty wild', pronunciation: 'foy bẽy DOY-doh' },
          { word: 'No fim das contas, deu certo', translation: 'In the end, it worked out', pronunciation: 'noh feeng das KOHN-tahs deh-W SEHR-too' },
          { word: 'Longa história curta', translation: 'Long story short', pronunciation: 'LOHN-gah ees-TOH-ree-ah KOOR-tah' }
        ]
      }
    ]
  },
  japanese: {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    code: 'ja',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'Business Conversations',
        level: 'advanced',
        premium: true,
        words: [
          { word: '会議を始めましょう', translation: 'Let\'s start the meeting', pronunciation: 'kaigi wo hajimemashou', romanji: 'Kaigi wo hajimemashou' },
          { word: 'ご提案があります', translation: 'I have a proposal', pronunciation: 'go teian ga arimasu', romanji: 'Go teian ga arimasu' },
          { word: 'それについて話し合いましょう', translation: 'Let\'s discuss that', pronunciation: 'sore ni tsuite hanashiaimashou', romanji: 'Sore ni tsuite hanashiaimashou' },
          { word: 'いつご都合がよろしいですか', translation: 'When is convenient for you?', pronunciation: 'itsu go tsugou ga yoroshii desu ka', romanji: 'Itsu go tsugou ga yoroshii desu ka' },
          { word: 'メールでご連絡します', translation: 'I\'ll contact you by email', pronunciation: 'meeru de go renraku shimasu', romanji: 'Meeru de go renraku shimasu' },
          { word: 'よろしくお願いいたします', translation: 'Thank you for your consideration', pronunciation: 'yoroshiku onegai itashimasu', romanji: 'Yoroshiku onegai itashimasu' },
          { word: 'お時間をいただきありがとうございます', translation: 'Thank you for your time', pronunciation: 'o jikan wo itadaki arigatou gozaimasu', romanji: 'O jikan wo itadaki arigatou gozaimasu' }
        ]
      },
      {
        id: 25,
        title: 'Common Japanese Idioms',
        level: 'advanced',
        premium: true,
        words: [
          { word: '猿も木から落ちる', translation: 'Even monkeys fall from trees (Everyone makes mistakes)', pronunciation: 'saru mo ki kara ochiru', romanji: 'Saru mo ki kara ochiru' },
          { word: '石の上にも三年', translation: 'Three years on a stone (Perseverance pays off)', pronunciation: 'ishi no ue ni mo san nen', romanji: 'Ishi no ue ni mo san nen' },
          { word: '一石二鳥', translation: 'One stone, two birds (Kill two birds with one stone)', pronunciation: 'isseki nichou', romanji: 'Isseki nichou' },
          { word: '急がば回れ', translation: 'If you hurry, take a detour (Haste makes waste)', pronunciation: 'isogaba maware', romanji: 'Isogaba maware' },
          { word: '花より団子', translation: 'Dumplings over flowers (Practical over aesthetic)', pronunciation: 'hana yori dango', romanji: 'Hana yori dango' },
          { word: '七転び八起き', translation: 'Fall seven times, stand up eight', pronunciation: 'nana korobi ya oki', romanji: 'Nana korobi ya oki' },
          { word: '井の中の蛙', translation: 'A frog in a well (Narrow-minded)', pronunciation: 'i no naka no kawazu', romanji: 'I no naka no kawazu' }
        ]
      },
      {
        id: 26,
        title: 'Opinions and Debates',
        level: 'advanced',
        premium: true,
        words: [
          { word: '私の意見では', translation: 'In my opinion', pronunciation: 'watashi no iken de wa', romanji: 'Watashi no iken de wa' },
          { word: 'そう思います', translation: 'I think so', pronunciation: 'sou omoimasu', romanji: 'Sou omoimasu' },
          { word: '賛成です', translation: 'I agree', pronunciation: 'sansei desu', romanji: 'Sansei desu' },
          { word: '反対です', translation: 'I disagree', pronunciation: 'hantai desu', romanji: 'Hantai desu' },
          { word: 'どう思いますか', translation: 'What do you think?', pronunciation: 'dou omoimasu ka', romanji: 'Dou omoimasu ka' },
          { word: 'それは違うと思います', translation: 'I think that\'s different', pronunciation: 'sore wa chigau to omoimasu', romanji: 'Sore wa chigau to omoimasu' },
          { word: '確かにそうですね', translation: 'That\'s certainly true', pronunciation: 'tashika ni sou desu ne', romanji: 'Tashika ni sou desu ne' }
        ]
      },
      {
        id: 27,
        title: 'Telling Stories in Past Tense',
        level: 'advanced',
        premium: true,
        words: [
          { word: '昨日何をしましたか', translation: 'What did you do yesterday?', pronunciation: 'kinou nani wo shimashita ka', romanji: 'Kinou nani wo shimashita ka' },
          { word: '公園に行きました', translation: 'I went to the park', pronunciation: 'kouen ni ikimashita', romanji: 'Kouen ni ikimashita' },
          { word: '友達に会いました', translation: 'I met a friend', pronunciation: 'tomodachi ni aimashita', romanji: 'Tomodachi ni aimashita' },
          { word: 'それから映画を見ました', translation: 'Then I watched a movie', pronunciation: 'sorekara eiga wo mimashita', romanji: 'Sorekara eiga wo mimashita' },
          { word: 'その後レストランで食べました', translation: 'After that I ate at a restaurant', pronunciation: 'sono ato resutoran de tabemashita', romanji: 'Sono ato resutoran de tabemashita' },
          { word: 'とても楽しかったです', translation: 'It was very fun', pronunciation: 'totemo tanoshikatta desu', romanji: 'Totemo tanoshikatta desu' },
          { word: '次の日家に帰りました', translation: 'The next day I went home', pronunciation: 'tsugi no hi ie ni kaerimashita', romanji: 'Tsugi no hi ie ni kaerimashita' }
        ]
      }
    ]
  },
  chinese: {
    id: 'chinese',
    name: 'Chinese',
    flag: '🇨🇳',
    code: 'zh',
    lessonCount: 27,
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
      },
      {
        id: 24,
        title: 'Business Conversations',
        level: 'advanced',
        premium: true,
        words: [
          { word: '很高兴在会议上认识您。', translation: 'Pleased to meet you at the meeting. (formal greeting)', pronunciation: 'Hěn gāoxìng zài huìyì shàng rènshi nín.', romanji: 'Hěn gāoxìng zài huìyì shàng rènshi nín.' },
          { word: '我们想讨论这个项目的进展。', translation: 'We want to discuss the progress of this project.', pronunciation: 'Wǒmen xiǎng tǎolùn zhège xiàngmù de jìnzhǎn.', romanji: 'Wǒmen xiǎng tǎolùn zhège xiàngmù de jìnzhǎn.' },
          { word: '这是我们对下一阶段的提案。', translation: 'This is our proposal for the next phase.', pronunciation: 'Zhè shì wǒmen duì xià yī jiēduàn de tí’àn.', romanji: 'Zhè shì wǒmen duì xià yī jiēduàn de tí’àn.' },
          { word: '我会通过邮件发送详细资料。', translation: 'I will send the details by email.', pronunciation: 'Wǒ huì tōngguò yóujiàn fāsòng xiángxì zīliào.', romanji: 'Wǒ huì tōngguò yóujiàn fāsòng xiángxì zīliào.' },
          { word: '您方便下周安排一次会议吗？', translation: 'Would it be convenient to schedule a meeting next week?', pronunciation: 'Nín fāngbiàn xià zhōu ānpái yí cì huìyì ma?', romanji: 'Nín fāngbiàn xià zhōu ānpái yí cì huìyì ma?' },
          { word: '我们需要确认预算和时间表。', translation: 'We need to confirm the budget and timeline.', pronunciation: 'Wǒmen xūyào quèrèn yùsuàn hé shíjiānbiǎo.', romanji: 'Wǒmen xūyào quèrèn yùsuàn hé shíjiānbiǎo.' },
          { word: '这个方案可行吗？', translation: 'Is this plan feasible?', pronunciation: 'Zhège fāng’àn kěxíng ma?', romanji: 'Zhège fāng’àn kěxíng ma?' },
          { word: '我们期待您的反馈。', translation: 'We look forward to your feedback.', pronunciation: 'Wǒmen qīdài nín de fǎnkuì.', romanji: 'Wǒmen qīdài nín de fǎnkuì.' }
        ],
        streetSlang: [
          { word: '我先发个邮件给你。', translation: 'I’ll send you an email first.', pronunciation: 'Wǒ xiān fā gè yóujiàn gěi nǐ.', romanji: 'Wǒ xiān fā gè yóujiàn gěi nǐ.' },
          { word: '咱们对一下时间。', translation: 'Let’s sync up on the time.', pronunciation: 'Zánmen duì yíxià shíjiān.', romanji: 'Zánmen duì yíxià shíjiān.' },
          { word: '这个项目先对齐一下。', translation: 'Let’s align on this project first.', pronunciation: 'Zhège xiàngmù xiān duìqí yíxià.', romanji: 'Zhège xiàngmù xiān duìqí yíxià.' },
          { word: '进度有点慢。', translation: 'Progress is a bit slow.', pronunciation: 'Jìndù yǒudiǎn màn.', romanji: 'Jìndù yǒudiǎn màn.' },
          { word: '我这边没问题。', translation: 'No issues on my end.', pronunciation: 'Wǒ zhèbiān méi wèntí.', romanji: 'Wǒ zhèbiān méi wèntí.' },
          { word: '你看可以吗？', translation: 'Does that work for you?', pronunciation: 'Nǐ kàn kěyǐ ma?', romanji: 'Nǐ kàn kěyǐ ma?' }
        ]
      },
      {
        id: 25,
        title: 'Common Chinese Idioms (成语)',
        level: 'advanced',
        premium: true,
        words: [
          { word: '对牛弹琴', translation: 'Literal: “play the lute to a cow”; Meaning: speak to someone who doesn’t understand; Use when your audience can’t follow.', pronunciation: 'Duìniú tánqín', romanji: 'Duìniú tánqín' },
          { word: '画蛇添足', translation: 'Literal: “draw a snake and add feet”; Meaning: overdo it and ruin it; Use when someone adds unnecessary details.', pronunciation: 'Huàshé tiānzú', romanji: 'Huàshé tiānzú' },
          { word: '井底之蛙', translation: 'Literal: “frog at the bottom of a well”; Meaning: narrow-minded; Use for limited perspective.', pronunciation: 'Jǐngdǐ zhī wā', romanji: 'Jǐngdǐ zhī wā' },
          { word: '一举两得', translation: 'Literal: “one move, two gains”; Meaning: kill two birds with one stone; Use when one action solves two things.', pronunciation: 'Yí jǔ liǎng dé', romanji: 'Yí jǔ liǎng dé' },
          { word: '半途而废', translation: 'Literal: “quit halfway”; Meaning: give up midway; Use when someone stops before finishing.', pronunciation: 'Bàntú ér fèi', romanji: 'Bàntú ér fèi' },
          { word: '亡羊补牢', translation: 'Literal: “mend the pen after losing sheep”; Meaning: better late than never; Use after a mistake to fix things.', pronunciation: 'Wángyáng bǔláo', romanji: 'Wángyáng bǔláo' },
          { word: '入乡随俗', translation: 'Literal: “follow local customs”; Meaning: when in Rome, do as the Romans do.', pronunciation: 'Rùxiāng suí sú', romanji: 'Rùxiāng suí sú' },
          { word: '刻舟求剑', translation: 'Literal: “mark a boat to find a sword”; Meaning: be rigid and not adapt; Use for stubborn methods.', pronunciation: 'Kèzhōu qiújiàn', romanji: 'Kèzhōu qiújiàn' }
        ],
        streetSlang: [
          { word: '说得太对了', translation: 'That’s so right.', pronunciation: 'Shuō de tài duì le', romanji: 'Shuō de tài duì le' },
          { word: '别想太多', translation: 'Don’t overthink it.', pronunciation: 'Bié xiǎng tài duō', romanji: 'Bié xiǎng tài duō' },
          { word: '真有道理', translation: 'That makes a lot of sense.', pronunciation: 'Zhēn yǒu dàolǐ', romanji: 'Zhēn yǒu dàolǐ' },
          { word: '想开点', translation: 'Think more positively.', pronunciation: 'Xiǎng kāi diǎn', romanji: 'Xiǎng kāi diǎn' },
          { word: '走一步看一步', translation: 'Take it one step at a time.', pronunciation: 'Zǒu yí bù kàn yí bù', romanji: 'Zǒu yí bù kàn yí bù' },
          { word: '这就尴尬了', translation: 'Well, that’s awkward.', pronunciation: 'Zhè jiù gāngà le', romanji: 'Zhè jiù gāngà le' }
        ]
      },
      {
        id: 26,
        title: 'Opinions and Debates',
        level: 'advanced',
        premium: true,
        words: [
          { word: '我认为这个观点很合理。', translation: 'I think this viewpoint is reasonable.', pronunciation: 'Wǒ rènwéi zhège guāndiǎn hěn hélǐ.', romanji: 'Wǒ rènwéi zhège guāndiǎn hěn hélǐ.' },
          { word: '我同意你的看法。', translation: 'I agree with your view.', pronunciation: 'Wǒ tóngyì nǐ de kànfǎ.', romanji: 'Wǒ tóngyì nǐ de kànfǎ.' },
          { word: '我不太同意这一点。', translation: 'I don’t quite agree with this point.', pronunciation: 'Wǒ bù tài tóngyì zhè yìdiǎn.', romanji: 'Wǒ bù tài tóngyì zhè yìdiǎn.' },
          { word: '在我看来，这个方案更好。', translation: 'In my view, this plan is better.', pronunciation: 'Zài wǒ kànlái, zhège fāng’àn gèng hǎo.', romanji: 'Zài wǒ kànlái, zhège fāng’àn gèng hǎo.' },
          { word: '你怎么看？', translation: 'What do you think?', pronunciation: 'Nǐ zěnme kàn?', romanji: 'Nǐ zěnme kàn?' },
          { word: '你的观点是什么？', translation: 'What is your point of view?', pronunciation: 'Nǐ de guāndiǎn shì shénme?', romanji: 'Nǐ de guāndiǎn shì shénme?' },
          { word: '这个论点很有说服力。', translation: 'This argument is persuasive.', pronunciation: 'Zhège lùndiǎn hěn yǒu shuōfúlì.', romanji: 'Zhège lùndiǎn hěn yǒu shuōfúlì.' },
          { word: '我们需要更多证据。', translation: 'We need more evidence.', pronunciation: 'Wǒmen xūyào gèng duō zhèngjù.', romanji: 'Wǒmen xūyào gèng duō zhèngjù.' }
        ],
        streetSlang: [
          { word: '我觉得还行。', translation: 'I think it’s okay.', pronunciation: 'Wǒ juéde hái xíng.', romanji: 'Wǒ juéde hái xíng.' },
          { word: '我不太买账。', translation: 'I’m not convinced.', pronunciation: 'Wǒ bù tài mǎizhàng.', romanji: 'Wǒ bù tài mǎizhàng.' },
          { word: '说实话，我不认同。', translation: 'Honestly, I don’t agree.', pronunciation: 'Shuō shíhuà, wǒ bù rèntóng.', romanji: 'Shuō shíhuà, wǒ bù rèntóng.' },
          { word: '你说呢？', translation: 'What do you say?', pronunciation: 'Nǐ shuō ne?', romanji: 'Nǐ shuō ne?' },
          { word: '这事不好说。', translation: 'This is hard to say.', pronunciation: 'Zhè shì bù hǎo shuō.', romanji: 'Zhè shì bù hǎo shuō.' },
          { word: '可以再想想。', translation: 'We can think about it again.', pronunciation: 'Kěyǐ zài xiǎngxiang.', romanji: 'Kěyǐ zài xiǎngxiang.' }
        ]
      },
      {
        id: 27,
        title: 'Telling Stories in Past Tense',
        level: 'advanced',
        premium: true,
        words: [
          { word: '昨天我很早就起床了。', translation: 'Yesterday I got up early.', pronunciation: 'Zuótiān wǒ hěn zǎo jiù qǐchuáng le.', romanji: 'Zuótiān wǒ hěn zǎo jiù qǐchuáng le.' },
          { word: '然后我去了公司。', translation: 'Then I went to the office.', pronunciation: 'Ránhòu wǒ qù le gōngsī.', romanji: 'Ránhòu wǒ qù le gōngsī.' },
          { word: '后来我见到了一个老朋友。', translation: 'Later I met an old friend.', pronunciation: 'Hòulái wǒ jiàn dào le yí gè lǎo péngyou.', romanji: 'Hòulái wǒ jiàn dào le yí gè lǎo péngyou.' },
          { word: '同时，外面开始下雨了。', translation: 'Meanwhile, it started to rain outside.', pronunciation: 'Tóngshí, wàimiàn kāishǐ xiàyǔ le.', romanji: 'Tóngshí, wàimiàn kāishǐ xiàyǔ le.' },
          { word: '突然发生了一件意外的事。', translation: 'Suddenly, something unexpected happened.', pronunciation: 'Túrán fāshēng le yí jiàn yìwài de shì.', romanji: 'Túrán fāshēng le yí jiàn yìwài de shì.' },
          { word: '最后我们解决了问题。', translation: 'In the end we solved the problem.', pronunciation: 'Zuìhòu wǒmen jiějué le wèntí.', romanji: 'Zuìhòu wǒmen jiějué le wèntí.' },
          { word: '到了晚上，我回到家休息了。', translation: 'By evening, I returned home to rest.', pronunciation: 'Dào le wǎnshang, wǒ huí dào jiā xiūxi le.', romanji: 'Dào le wǎnshang, wǒ huí dào jiā xiūxi le.' },
          { word: '那天的经历让我难忘。', translation: 'That day’s experience was unforgettable.', pronunciation: 'Nà tiān de jīnglì ràng wǒ nánwàng.', romanji: 'Nà tiān de jīnglì ràng wǒ nánwàng.' }
        ],
        streetSlang: [
          { word: '后来呢？', translation: 'And then what?', pronunciation: 'Hòulái ne?', romanji: 'Hòulái ne?' },
          { word: '就这样', translation: 'That’s how it went.', pronunciation: 'Jiù zhèyàng.', romanji: 'Jiù zhèyàng.' },
          { word: '然后吧', translation: 'And then…', pronunciation: 'Ránhòu ba.', romanji: 'Ránhòu ba.' },
          { word: '结果呢', translation: 'So what was the result?', pronunciation: 'Jiéguǒ ne?', romanji: 'Jiéguǒ ne?' },
          { word: '说到这儿', translation: 'Speaking of this / at this point', pronunciation: 'Shuō dào zhèr.', romanji: 'Shuō dào zhèr.' },
          { word: '故事大概就是这样', translation: 'That’s pretty much the story.', pronunciation: 'Gùshi dàgài jiù shì zhèyàng.', romanji: 'Gùshi dàgài jiù shì zhèyàng.' }
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
  },
  arabic: {
    id: 'arabic',
    name: 'Arabic (العربية)',
    flag: '🇸🇦',
    code: 'ar',
    lessonCount: 27,
    lessons: [
      {
        id: 1,
        title: 'Basic Greetings & Introductions',
        level: 'beginner',
        words: [
          { word: 'مرحباً', translation: 'Hello', pronunciation: 'marhaban (MAR-ha-ban)' },
          { word: 'السلام عليكم', translation: 'Peace be upon you (hello)', pronunciation: 'as-salāmu ʿalaykum (as-sa-LAA-moo a-LAY-koom)' },
          { word: 'وعليكم السلام', translation: 'And upon you peace (response)', pronunciation: 'wa ʿalaykum as-salām (wa a-LAY-koom as-sa-LAAM)' },
          { word: 'اسمي…', translation: 'My name is…', pronunciation: 'ismī… (IS-mee)' },
          { word: 'تشرفنا', translation: 'Nice to meet you', pronunciation: 'tasharrafnā (ta-SHAR-raf-naa)' }
        ],
        streetSlang: [
          { word: 'إزيك؟', translation: 'How are you? (very casual, Egyptian)', pronunciation: 'izzayyak? (iz-ZAY-yak)' },
          { word: 'شو الأخبار؟', translation: 'What’s up? / What’s the news? (Levantine)', pronunciation: 'shu l-akhbār? (shoo l-akh-BAAR)' },
          { word: 'تمام', translation: 'All good / OK', pronunciation: 'tamām (ta-MAAM)' },
          { word: 'يلا', translation: 'Let’s go / come on', pronunciation: 'yalla (YAL-la)' },
          { word: 'حبيبي/حبيبتي', translation: 'My dear (friendly; “bro/sis” vibe)', pronunciation: 'habibi / habibti (ha-BEE-bee / ha-BEEB-tee)' },
          { word: 'خلاص', translation: 'OK, done / that’s enough', pronunciation: 'khalāṣ (kha-LAAS)' }
        ],
        culturalNotes: 'Greetings matter a lot in Arabic-speaking cultures. “السلام عليكم” is common and polite; the traditional reply is “وعليكم السلام”. Handshakes are often gentle and longer than in the US/UK; use the right hand. Dialects vary widely—what you hear in Egypt, the Levant, and the Gulf can sound different from Modern Standard Arabic.'
      },
      {
        id: 2,
        title: 'Essential Questions (where, when, how much)',
        level: 'beginner',
        words: [
          { word: 'أين؟', translation: 'Where?', pronunciation: 'ayna? (EYE-na)' },
          { word: 'متى؟', translation: 'When?', pronunciation: 'matā? (ma-TAA)' },
          { word: 'كم السعر؟', translation: 'How much is it?', pronunciation: 'kam as-siʿr? (kam as-SIIR?)' },
          { word: 'كيف؟', translation: 'How?', pronunciation: 'kayfa? (KAY-fa)' },
          { word: 'لماذا؟', translation: 'Why?', pronunciation: 'limādhā? (lee-MAA-dhaa)' }
        ],
        streetSlang: [
          { word: 'فين؟', translation: 'Where? (very common, Egyptian)', pronunciation: 'fein? (FAYN)' },
          { word: 'وين؟', translation: 'Where? (very common, Levantine)', pronunciation: 'wein? (WAYN)' },
          { word: 'إمتى؟', translation: 'When? (Egyptian)', pronunciation: 'emta? (EM-ta)' },
          { word: 'قديش؟', translation: 'How much? / How many? (Levantine)', pronunciation: 'addeish? (ad-DAYSH)' },
          { word: 'ليش؟', translation: 'Why? (Levantine)', pronunciation: 'leish? (LAYS H)' },
          { word: 'بجد؟', translation: 'Really? (Egyptian)', pronunciation: 'bigadd? (bee-GADD)' }
        ],
        culturalNotes: 'In conversation, many people use dialect forms (فين/وين, إمتى, قديش) more than textbook Modern Standard Arabic. Prices may be quoted differently by region; in markets, bargaining can be normal (especially in souqs), while malls and supermarkets are usually fixed-price.'
      },
      {
        id: 3,
        title: 'Restaurant & Food',
        level: 'beginner',
        words: [
          { word: 'من فضلك', translation: 'Please', pronunciation: 'min faḍlak (min FAD-lak)' },
          { word: 'قائمة الطعام', translation: 'Menu', pronunciation: 'qāʾimat aṭ-ṭaʿām (KAA-eh-mat at-ta-AAM)' },
          { word: 'أريد…', translation: 'I want…', pronunciation: 'urīd… (oo-REED)' },
          { word: 'ماء', translation: 'Water', pronunciation: 'māʾ (maaʔ)' },
          { word: 'الحساب', translation: 'The bill / check', pronunciation: 'al-ḥisāb (al-hee-SAAB)' }
        ],
        streetSlang: [
          { word: 'عايز/عايزة…', translation: 'I want… (Egyptian)', pronunciation: 'ʿāyez / ʿāyza (AA-yez / AA-yza)' },
          { word: 'بدّي…', translation: 'I want… (Levantine)', pronunciation: 'biddi… (BID-dee)' },
          { word: 'يمي', translation: 'Yummy / delicious (casual)', pronunciation: 'yammī (YAM-mee)' },
          { word: 'على حسابي', translation: 'It’s on me', pronunciation: 'ʿalā ḥisābī (a-LAA hee-SAA-bee)' },
          { word: 'شو بتوصي؟', translation: 'What do you recommend? (Levantine)', pronunciation: 'shu btoṣṣī? (shoo btoss-SEE)' },
          { word: 'خلّصنا', translation: 'We’re done (ordering/eating) (casual)', pronunciation: 'khallaṣnā (khal-LASS-naa)' }
        ],
        culturalNotes: 'Hospitality is a big value. In many places, sharing food is common, and people may insist you eat more as a sign of generosity. Tipping practices vary by country and venue. If you’re offered tea/coffee, accepting (at least a little) can be seen as polite.'
      },
      {
        id: 4,
        title: 'Directions & Transportation',
        level: 'beginner',
        words: [
          { word: 'أين…؟', translation: 'Where is…?', pronunciation: 'ayna…? (EYE-na …?)' },
          { word: 'يمين', translation: 'Right', pronunciation: 'yamīn (ya-MEEN)' },
          { word: 'يسار', translation: 'Left', pronunciation: 'yasār (ya-SAAR)' },
          { word: 'مباشرة', translation: 'Straight ahead', pronunciation: 'mubāshara (moo-BAA-sha-ra)' },
          { word: 'محطة', translation: 'Station / stop', pronunciation: 'maḥaṭṭa (ma-HAT-ta)' }
        ],
        streetSlang: [
          { word: 'على طول', translation: 'Straight ahead / keep going', pronunciation: 'ʿala ṭūl (a-la TOOL)' },
          { word: 'لف يمين/شمال', translation: 'Turn right/left (very common)', pronunciation: 'lef yamīn / shimāl (lef ya-MEEN / she-MAAL)' },
          { word: 'قدّام', translation: 'In front / ahead (Egyptian)', pronunciation: 'uddām (ood-DAAM)' },
          { word: 'ورا', translation: 'Behind / back there (Egyptian)', pronunciation: 'wara (WA-ra)' },
          { word: 'مو بعيد', translation: 'Not far (Levantine)', pronunciation: 'mū baʿīd (moo ba-EED)' },
          { word: 'وين؟', translation: 'Where? (quick, casual)', pronunciation: 'wein? (WAYN)' }
        ],
        culturalNotes: 'Directions are often given using landmarks (“next to the mosque”, “near the big roundabout”) rather than street names. Ride-hailing apps are common in many cities, but in some places taxis may negotiate the fare—asking “قديش؟” before you ride can help avoid confusion.'
      },
      {
        id: 5,
        title: 'Shopping & Money',
        level: 'beginner',
        words: [
          { word: 'بكم هذا؟', translation: 'How much is this?', pronunciation: 'bikam hādhā? (bee-KAM HAA-dhaa)' },
          { word: 'غالي', translation: 'Expensive', pronunciation: 'ghālī (GHA-lee)' },
          { word: 'رخيص', translation: 'Cheap', pronunciation: 'rakhīṣ (ra-KHEES)' },
          { word: 'نقداً', translation: 'Cash', pronunciation: 'naqdan (NAK-dan)' },
          { word: 'بطاقة', translation: 'Card', pronunciation: 'biṭāqa (bee-TAA-qa)' }
        ],
        streetSlang: [
          { word: 'بكم؟', translation: 'How much? (quick, casual)', pronunciation: 'bikam? (bee-KAM)' },
          { word: 'غالي قوي', translation: 'So expensive! (Egyptian)', pronunciation: 'ghālī awī (GHA-lee a-WEE)' },
          { word: 'فِكّة', translation: 'Small change (coins) (Egyptian)', pronunciation: 'fakka (FAK-ka)' },
          { word: 'فيزا', translation: 'Card / “Visa” (common slang)', pronunciation: 'vīza (VEE-za)' },
          { word: 'يظبط؟', translation: 'Does it fit / does it work? (Egyptian)', pronunciation: 'yizboṭ? (yiz-BOT)' },
          { word: 'آخر سعر؟', translation: 'What’s your final price? (bargaining)', pronunciation: 'ākhir siʿr? (AA-khir SIIR?)' }
        ],
        culturalNotes: 'In traditional markets (souqs), bargaining can be expected—keep it friendly and smile. In malls, prices are usually fixed. In some countries, cash is still preferred for small purchases, while card and contactless are common in others.'
      },
      {
        id: 6,
        title: 'Hotel & Accommodation',
        level: 'beginner',
        words: [
          { word: 'فندق', translation: 'Hotel', pronunciation: 'funduq (FOON-dook)' },
          { word: 'غرفة', translation: 'Room', pronunciation: 'ghurfa (GHUR-fa)' },
          { word: 'حجز', translation: 'Reservation / booking', pronunciation: 'ḥajz (HAJZ)' },
          { word: 'مفتاح', translation: 'Key', pronunciation: 'miftāḥ (mif-TAAH)' },
          { word: 'واي فاي', translation: 'Wi‑Fi', pronunciation: 'wāy fāy (WHY-FY)' }
        ],
        streetSlang: [
          { word: 'لو سمحت', translation: 'Excuse me / please (very common)', pronunciation: 'law samaḥt (low sa-MAHT)' },
          { word: 'ممكن…؟', translation: 'Can…? / Is it possible…? (casual)', pronunciation: 'mumkin…? (MOOM-kin)' },
          { word: 'تمام؟', translation: 'OK? / all set?', pronunciation: 'tamām? (ta-MAAM?)' },
          { word: 'على السريع', translation: 'Quickly / real quick', pronunciation: 'ʿala s-sarīʿ (a-la sa-REEʿ)' },
          { word: 'ولا يهمك', translation: 'No worries / don’t mention it', pronunciation: 'walā yihimmak (wa-LAA yi-HIM-mak)' },
          { word: 'إيش فيه؟', translation: 'What’s up / what’s wrong? (Gulf)', pronunciation: 'ēsh fīh? (eesh FEEH)' }
        ],
        culturalNotes: 'Politeness phrases (“لو سمحت”, “شكراً”) go a long way with service staff. In many places, you may be asked for a passport at check-in. Quiet hours and family-oriented spaces vary by country and hotel style.'
      },
      {
        id: 7,
        title: 'Emergency Phrases',
        level: 'beginner',
        words: [
          { word: 'ساعدني!', translation: 'Help me!', pronunciation: 'sāʿidnī! (SAA-id-nee)' },
          { word: 'اتصل بالشرطة', translation: 'Call the police', pronunciation: 'ittiṣil bi-sh-shurṭa (it-TI-sil bish-SHUR-ta)' },
          { word: 'أنا مريض', translation: 'I am sick', pronunciation: 'anā marīḍ (a-NAA ma-REED)' },
          { word: 'أين المستشفى؟', translation: 'Where is the hospital?', pronunciation: 'ayna al-mustashfā? (EYE-na al moos-TASH-fa?)' },
          { word: 'لا أفهم', translation: 'I don’t understand', pronunciation: 'lā afham (laa AF-ham)' }
        ],
        streetSlang: [
          { word: 'بسرعة!', translation: 'Quickly!', pronunciation: 'bisurʿa! (bee-SOOR-a)' },
          { word: 'في مشكلة', translation: 'There’s a problem', pronunciation: 'fī mushkila (fee MOOSH-ki-la)' },
          { word: 'ضايع', translation: 'I’m lost', pronunciation: 'ḍāyeʿ (DAA-yeʿ)' },
          { word: 'خلي بالك', translation: 'Be careful / watch out (Egyptian)', pronunciation: 'khallī bālak (khal-LEE BAA-lak)' },
          { word: 'مستعجل', translation: 'I’m in a hurry', pronunciation: 'mustaʿjil (moos-TAʿ-jil)' },
          { word: 'ما في', translation: 'There isn’t / no (Levantine)', pronunciation: 'mā fī (maa FEE)' }
        ],
        culturalNotes: 'If you need help, many people will try to assist even if they speak limited English—using short phrases and pointing to maps can help. Emergency numbers and services differ by country, so it’s worth learning the local number where you’re traveling.'
      },
      {
        id: 8,
        title: 'Small Talk & Pleasantries',
        level: 'beginner',
        words: [
          { word: 'كيف حالك؟', translation: 'How are you?', pronunciation: 'kayf ḥālak? (kayf HAA-lak)' },
          { word: 'الحمد لله', translation: 'I’m fine / thanks (lit. “praise be to God”)', pronunciation: 'al-ḥamdu lillāh (al-HAM-doo lil-LAAH)' },
          { word: 'ما اسمك؟', translation: 'What is your name?', pronunciation: 'mā ismuk? (maa IS-mook)' },
          { word: 'من أين أنت؟', translation: 'Where are you from?', pronunciation: 'min ayna anta? (min EYE-na AN-ta)' },
          { word: 'سعدت بلقائك', translation: 'Nice meeting you', pronunciation: 'saʿidtu biliqāʾik (sa-EED-too bi-li-QAA-ik)' }
        ],
        streetSlang: [
          { word: 'ماشي', translation: 'OK / sounds good (Egyptian)', pronunciation: 'māshī (MAA-shee)' },
          { word: 'شو عم تعمل؟', translation: 'What are you doing? (Levantine)', pronunciation: 'shu ʿam taʿmel? (shoo am TAʿ-mel)' },
          { word: 'فاضي؟', translation: 'Are you free? (casual)', pronunciation: 'fāḍī? (FAA-dee)' },
          { word: 'مبسوط', translation: 'Happy / glad', pronunciation: 'mabsūṭ (mab-SOOT)' },
          { word: 'ولا شي', translation: 'Nothing / no big deal (Levantine)', pronunciation: 'walā shi (wa-LAA shee)' },
          { word: 'إن شاء الله', translation: 'Hopefully / God willing', pronunciation: 'in shāʾ allāh (in shaa ALL-ah)' }
        ],
        culturalNotes: 'Small talk often includes polite, warm expressions like “الحمد لله” and “إن شاء الله”. Asking about family and well-being can be normal and friendly. Tone matters—keep it respectful until you know someone well.'
      },
      {
        id: 9,
        title: 'Numbers, Time, Dates',
        level: 'beginner',
        words: [
          { word: 'واحد', translation: 'One', pronunciation: 'wāḥid (WAA-hid)' },
          { word: 'اثنين', translation: 'Two', pronunciation: 'ithnayn (ith-NAYN)' },
          { word: 'كم الساعة؟', translation: 'What time is it?', pronunciation: 'kam as-sāʿa? (kam as-SAA-a?)' },
          { word: 'اليوم', translation: 'Today', pronunciation: 'al-yawm (al-YAWM)' },
          { word: 'بكرة', translation: 'Tomorrow', pronunciation: 'bukra (BOOK-ra)' }
        ],
        streetSlang: [
          { word: 'دلوقتي', translation: 'Now (Egyptian)', pronunciation: 'dilwaʾtī (dil-WAʾ-tee)' },
          { word: 'هلّق', translation: 'Now (Levantine)', pronunciation: 'hallaʾ (hal-LAʾ)' },
          { word: 'بعد شوي', translation: 'In a little bit', pronunciation: 'baʿd shway (baʿd sh-WAY)' },
          { word: 'الأسبوع الجاي', translation: 'Next week (Egyptian)', pronunciation: 'al-usbūʿ il-gāy (al oos-BOOʿ el-GUY)' },
          { word: 'نص', translation: 'Half (for time)', pronunciation: 'nuṣṣ (nooss)' },
          { word: 'ربع', translation: 'Quarter (for time)', pronunciation: 'rubʿ (roobʿ)' }
        ],
        culturalNotes: 'Arabic has both Western numerals (0–9) and “Arabic-Indic” numerals (٠١٢٣٤٥٦٧٨٩) depending on country. Time is often discussed flexibly (“بعد شوي”)—context and tone help clarify whether it’s minutes or longer.'
      },
      {
        id: 10,
        title: 'Common Responses',
        level: 'beginner',
        words: [
          { word: 'نعم', translation: 'Yes', pronunciation: 'naʿam (NA-am)' },
          { word: 'لا', translation: 'No', pronunciation: 'lā (laa)' },
          { word: 'ممكن', translation: 'Maybe / possible', pronunciation: 'mumkin (MOOM-kin)' },
          { word: 'شكراً', translation: 'Thank you', pronunciation: 'shukran (SHOOK-ran)' },
          { word: 'عفواً', translation: 'You’re welcome / excuse me', pronunciation: 'ʿafwan (AF-wan)' }
        ],
        streetSlang: [
          { word: 'أكيد', translation: 'For sure / definitely', pronunciation: 'akīd (a-KEED)' },
          { word: 'تمام', translation: 'OK / got it', pronunciation: 'tamām (ta-MAAM)' },
          { word: 'ماشي', translation: 'OK / fine (Egyptian)', pronunciation: 'māshī (MAA-shee)' },
          { word: 'ولا يهمك', translation: 'No worries / don’t mention it', pronunciation: 'walā yihimmak (wa-LAA yi-HIM-mak)' },
          { word: 'إن شاء الله', translation: 'Hopefully / God willing', pronunciation: 'in shāʾ allāh (in shaa ALL-ah)' },
          { word: 'خلاص', translation: 'OK, done', pronunciation: 'khalāṣ (kha-LAAS)' }
        ],
        culturalNotes: '“إن شاء الله” is extremely common and can mean “hopefully”, “we’ll see”, or simply a polite, culturally normal way to talk about future plans. Listening for tone and context helps you understand whether it’s confident or non-committal.'
      },
      {
        id: 11,
        title: 'Making Friends',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'هل يمكننا أن نتعارف؟', translation: 'Can we get to know each other?', pronunciation: 'hal yumkinunā an nataʿāraf? (hal YOOM-kee-noo-naa an na-ta-ʿAA-raf)' },
          { word: 'ما اسمك الكامل؟', translation: 'What is your full name?', pronunciation: 'mā ismuka al-kāmil? (maa IS-moo-kal KAA-mil)' },
          { word: 'من أي بلد أنت؟', translation: 'What country are you from?', pronunciation: 'min ayy balad anta? (min EYY BA-lad AN-ta)' },
          { word: 'أعيش في…', translation: 'I live in…', pronunciation: 'aʿīshu fī… (a-ʿEE-shoo FEE)' },
          { word: 'ما رأيك؟', translation: 'What do you think?', pronunciation: 'mā raʾyuk? (maa RAH-yook)' },
          { word: 'هل لديك وقت؟', translation: 'Do you have time?', pronunciation: 'hal ladayka waqt? (hal la-DAY-ka wakht)' },
          { word: 'هل تريد أن نخرج؟', translation: 'Do you want to hang out?', pronunciation: 'hal turīd an nakhruj? (hal too-REED an nakh-rooj)' },
          { word: 'هذا صديقي/صديقتي', translation: 'This is my friend', pronunciation: 'hādhā ṣadīqī/ṣadīqatī (HAA-dha sa-DEE-kee / sa-DEE-qa-tee)' }
        ],
        streetSlang: [
          { word: 'كيفك؟', translation: 'How are you? (Levantine)', pronunciation: 'keefak? (KEE-fak)' },
          { word: 'عامل إيه؟', translation: 'How are you doing? (Egyptian)', pronunciation: 'ʿāmil eh? (AA-mel EH)' },
          { word: 'تعال نتعرّف', translation: 'Come, let’s get to know each other (casual)', pronunciation: 'taʿāl netaʿarraf (ta-ʿAAL ne-ta-ʿAR-raf)' },
          { word: 'صاحبي', translation: 'My buddy (casual, Egyptian)', pronunciation: 'ṣāḥbī (SAAHB-ee)' },
          { word: 'يلا نتقابل', translation: 'Let’s meet up', pronunciation: 'yalla netʾābel (YAL-la net-AA-bel)' },
          { word: 'وين ساكن؟', translation: 'Where do you live? (Levantine)', pronunciation: 'wein sāken? (WAYN SAA-ken)' }
        ],
        culturalNotes: 'Friendship often starts with polite introductions and small talk. In many Arab cultures, exchanging contact details and asking about family are common and friendly. Invitations for coffee or tea are a typical way to deepen connections.'
      },
      {
        id: 12,
        title: 'Talking About Yourself',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'أنا أعمل كـ…', translation: 'I work as…', pronunciation: 'anā aʿmal ka… (a-NAA Aʿ-mal ka)' },
          { word: 'أنا طالب/طالبة', translation: 'I am a student', pronunciation: 'anā ṭālib/ṭāliba (a-NAA TAA-lib / TAA-li-ba)' },
          { word: 'أنا متزوج/متزوجة', translation: 'I am married', pronunciation: 'anā mutazawwij/mutazawwija (a-NAA moo-ta-ZAW-wij / moo-ta-ZAW-wi-ja)' },
          { word: 'لديّ أخ/أخت', translation: 'I have a brother/sister', pronunciation: 'ladayya akh/ukht (la-DAY-ya AKH / OOKHT)' },
          { word: 'هواياتي هي…', translation: 'My hobbies are…', pronunciation: 'hiwāyātī hiya… (hee-WAA-yaa-tee HEE-ya)' },
          { word: 'أحب…', translation: 'I like/love…', pronunciation: 'uḥibb… (oo-HIBB)' },
          { word: 'لا أحب…', translation: 'I don’t like…', pronunciation: 'lā uḥibb… (laa oo-HIBB)' },
          { word: 'عمري … سنة', translation: 'I am … years old', pronunciation: 'ʿumrī … sana (Oom-REE … SA-na)' }
        ],
        streetSlang: [
          { word: 'شغلك إيه؟', translation: 'What’s your job? (Egyptian)', pronunciation: 'shughlak eh? (SHOOGH-lak EH)' },
          { word: 'بشتغل…', translation: 'I work… (Egyptian)', pronunciation: 'bashtaghal… (bash-TA-ghal)' },
          { word: 'أنا متخرّج', translation: 'I graduated (casual)', pronunciation: 'anā mutakharrij (a-NAA moo-ta-KHAR-rij)' },
          { word: 'أنا ساكن في…', translation: 'I live in… (casual)', pronunciation: 'anā sāken fī… (a-NAA SAA-ken FEE)' },
          { word: 'بحب…', translation: 'I like… (casual)', pronunciation: 'baḥibb… (ba-HIBB)' },
          { word: 'مش بحب…', translation: 'I don’t like… (casual)', pronunciation: 'mish baḥibb… (mish ba-HIBB)' }
        ],
        culturalNotes: 'When talking about yourself, it’s common to keep a humble tone. People often ask about work and family early in conversation, which is usually a sign of friendly interest.'
      },
      {
        id: 13,
        title: 'Asking About Others',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'ماذا تعمل؟', translation: 'What do you do?', pronunciation: 'mādhā taʿmal? (MAA-dhaa TAʿ-mal)' },
          { word: 'من أين أنت أصلاً؟', translation: 'Where are you originally from?', pronunciation: 'min ayna anta aṣlan? (min EYE-na AN-ta AS-lan)' },
          { word: 'هل لديك إخوة؟', translation: 'Do you have siblings?', pronunciation: 'hal ladayka ikhwah? (hal la-DAY-ka EEKH-wah)' },
          { word: 'هل أنت متزوج؟', translation: 'Are you married?', pronunciation: 'hal anta mutazawwij? (hal AN-ta moo-ta-ZAW-wij)' },
          { word: 'ما هواياتك؟', translation: 'What are your hobbies?', pronunciation: 'mā hiwāyātuk? (maa hee-WAA-yaa-tuk)' },
          { word: 'أين درست؟', translation: 'Where did you study?', pronunciation: 'ayna darasta? (EYE-na DA-ras-ta)' },
          { word: 'هل تحب السفر؟', translation: 'Do you like traveling?', pronunciation: 'hal tuḥibb as-safar? (hal too-HIBB as-sa-FAR)' },
          { word: 'كيف كانت عطلتك؟', translation: 'How was your vacation?', pronunciation: 'kayfa kānat ʿuṭlatuk? (KAY-fa KAA-nat OOT-la-tuk)' }
        ],
        streetSlang: [
          { word: 'بتشتغل إيه؟', translation: 'What do you do? (Egyptian)', pronunciation: 'bit-shtaghal eh? (bit-SHTA-ghal EH)' },
          { word: 'منين أصلك؟', translation: 'Where are you originally from? (casual)', pronunciation: 'min-een aṣlak? (min-EEN AS-lak)' },
          { word: 'متجوز؟', translation: 'Married? (casual)', pronunciation: 'mutgawwez? (mut-GAW-wez)' },
          { word: 'بتحب إيه؟', translation: 'What do you like? (casual)', pronunciation: 'bit-ḥibb eh? (bit-HIBB EH)' },
          { word: 'درست فين؟', translation: 'Where did you study? (casual)', pronunciation: 'darast fein? (da-RAST FAYN)' },
          { word: 'سافرت فين؟', translation: 'Where did you travel? (casual)', pronunciation: 'sāfart fein? (SAA-fart FAYN)' }
        ],
        culturalNotes: 'Questions about family, work, and background are common and usually polite. If a question feels too personal, it’s acceptable to answer briefly and change the topic gently.'
      },
      {
        id: 14,
        title: 'Past Tense Basics',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'ذهبتُ إلى…', translation: 'I went to…', pronunciation: 'dhahabtu ilā… (dha-HAB-too ee-LAA)' },
          { word: 'زرتُ…', translation: 'I visited…', pronunciation: 'zurtu… (ZOOR-too)' },
          { word: 'قابلتُ…', translation: 'I met…', pronunciation: 'qābaltu… (QAA-bal-too)' },
          { word: 'شاهدتُ…', translation: 'I saw/watched…', pronunciation: 'shāhadtu… (SHAA-had-too)' },
          { word: 'أكلتُ…', translation: 'I ate…', pronunciation: 'akaltu… (A-kal-too)' },
          { word: 'شربتُ…', translation: 'I drank…', pronunciation: 'sharibtu… (SHA-rib-too)' },
          { word: 'تعلّمتُ…', translation: 'I learned…', pronunciation: 'taʿallamtu… (ta-ʿAL-lam-too)' },
          { word: 'اتصلتُ بـ…', translation: 'I called…', pronunciation: 'ittiṣaltu bi… (it-TI-sal-too bee)' }
        ],
        streetSlang: [
          { word: 'رُحت…', translation: 'I went… (Egyptian)', pronunciation: 'ruḥt… (ROOHT)' },
          { word: 'شُفت…', translation: 'I saw… (casual)', pronunciation: 'shuft… (SHOOFT)' },
          { word: 'قابلت…', translation: 'I met… (casual)', pronunciation: 'ʾābalt… (AA-balt)' },
          { word: 'أكلت', translation: 'I ate (casual)', pronunciation: 'akalt (A-kalt)' },
          { word: 'شربت', translation: 'I drank (casual)', pronunciation: 'sharibt (SHA-ribt)' },
          { word: 'اتعلّمت', translation: 'I learned (Egyptian)', pronunciation: 'itʿallimt (it-ʿAL-limt)' }
        ],
        culturalNotes: 'Past tense verbs often end in “-تُ” for “I”. In casual speech, endings are frequently shortened, and dialect forms replace textbook conjugations.'
      },
      {
        id: 15,
        title: 'Making Plans',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'هل أنت متاح غداً؟', translation: 'Are you free tomorrow?', pronunciation: 'hal anta mutāḥ ghadan? (hal AN-ta moo-TAAH GHA-dan)' },
          { word: 'دعنا نلتقي في…', translation: 'Let’s meet at…', pronunciation: 'daʿnā naltaqī fī… (daʿ-NAA nal-ta-QEE FEE)' },
          { word: 'ما الوقت المناسب؟', translation: 'What time works?', pronunciation: 'mā al-waqt al-munāsib? (maa al-WAKT al moo-NAA-sib)' },
          { word: 'سأصل في…', translation: 'I’ll arrive in…', pronunciation: 'saʾaṣilu fī… (sa-AH-si-loo FEE)' },
          { word: 'هل يمكننا تأجيله؟', translation: 'Can we postpone it?', pronunciation: 'hal yumkinunā taʾjīluhu? (hal YOOM-kee-noo-naa taʾ-JEE-loo-hoo)' },
          { word: 'لدي موعد', translation: 'I have an appointment', pronunciation: 'ladayya mawʿid (la-DAY-ya MAWʿ-id)' },
          { word: 'سنلتقي لاحقاً', translation: 'We’ll meet later', pronunciation: 'sanaltaqī lāḥiqan (sa-nal-ta-QEE LAA-ḥi-qan)' },
          { word: 'أرسل لي رسالة', translation: 'Send me a message', pronunciation: 'arsil lī risāla (AR-sil lee ri-SAA-la)' }
        ],
        streetSlang: [
          { word: 'بكرة فاضي؟', translation: 'Free tomorrow? (Egyptian)', pronunciation: 'bukra fāḍi? (BOOK-ra FAA-di)' },
          { word: 'نقابل بعض', translation: 'Let’s meet up (casual)', pronunciation: 'nʾābel baʿḍ (na-AA-bel baʿd)' },
          { word: 'على الساعة…', translation: 'At … o’clock', pronunciation: 'ʿala s-sāʿa… (A-la s-SAA-a)' },
          { word: 'أنا جاي', translation: 'I’m coming (casual)', pronunciation: 'anā jāy (a-NAA JAY)' },
          { word: 'مشغول', translation: 'Busy (casual)', pronunciation: 'mashghūl (mash-GHOOL)' },
          { word: 'ابعثلي', translation: 'Send me (a text)', pronunciation: 'ibʿat-li (ib-ʿAT-lee)' }
        ],
        culturalNotes: 'Plans are often flexible, so it’s common to confirm on the day. Using polite phrases like “لو سمحت” keeps requests friendly.'
      },
      {
        id: 16,
        title: 'Expressing Preferences',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'أفضّل…', translation: 'I prefer…', pronunciation: 'ufaḍḍil… (oo-fad-DIL)' },
          { word: 'أحب أن…', translation: 'I like to…', pronunciation: 'uḥibb an… (oo-HIBB an)' },
          { word: 'لا أفضّل…', translation: 'I don’t prefer…', pronunciation: 'lā ufaḍḍil… (laa oo-fad-DIL)' },
          { word: 'هذا أفضل من…', translation: 'This is better than…', pronunciation: 'hādhā afḍal min… (HAA-dha AF-dal min)' },
          { word: 'بالنسبة لي…', translation: 'For me…', pronunciation: 'binisba lī… (bi-NIS-ba lee)' },
          { word: 'يعجبني…', translation: 'I like (it)…', pronunciation: 'yuʿjibunī… (yoo-ʿJEE-boo-nee)' },
          { word: 'لا يعجبني…', translation: 'I don’t like (it)…', pronunciation: 'lā yuʿjibunī… (laa yoo-ʿJEE-boo-nee)' },
          { word: 'أختار…', translation: 'I choose…', pronunciation: 'akhtār… (akh-TAAR)' }
        ],
        streetSlang: [
          { word: 'بحب…', translation: 'I like… (casual)', pronunciation: 'baḥibb… (ba-HIBB)' },
          { word: 'ما بحب…', translation: 'I don’t like… (casual)', pronunciation: 'ma baḥibb… (ma ba-HIBB)' },
          { word: 'بفضّل', translation: 'I prefer (casual)', pronunciation: 'bfaḍḍil (bfad-DIL)' },
          { word: 'مش ذوقي', translation: 'Not my style/taste', pronunciation: 'mish dhawʾī (mish ZOʾ-ee)' },
          { word: 'عاجبني', translation: 'I like it (casual)', pronunciation: 'ʿājibnī (AA-jib-nee)' },
          { word: 'مش عاجبني', translation: 'I don’t like it (casual)', pronunciation: 'mish ʿājibnī (mish AA-jib-nee)' }
        ],
        culturalNotes: 'Saying preferences politely is valued. Softer phrasing like “بالنسبة لي” can make disagreement sound more respectful.'
      },
      {
        id: 17,
        title: 'Describing Things',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'كبير/صغير', translation: 'Big/Small', pronunciation: 'kabīr/ṣaghīr (ka-BEER / sa-GHEER)' },
          { word: 'جميل', translation: 'Beautiful', pronunciation: 'jamīl (ja-MEEL)' },
          { word: 'سريع/بطيء', translation: 'Fast/Slow', pronunciation: 'sarīʿ/baṭīʾ (sa-REEʿ / ba-TEEʾ)' },
          { word: 'غالي/رخيص', translation: 'Expensive/Cheap', pronunciation: 'ghālī/rakhīṣ (GHA-lee / ra-KHEES)' },
          { word: 'نظيف/متسخ', translation: 'Clean/Dirty', pronunciation: 'naẓīf/mutasikh (na-ZEETF / moo-TA-sekh)' },
          { word: 'جديد/قديم', translation: 'New/Old', pronunciation: 'jadīd/qadīm (ja-DEED / qa-DEEM)' },
          { word: 'مريح', translation: 'Comfortable', pronunciation: 'murīḥ (moo-REEH)' },
          { word: 'مزعج', translation: 'Annoying/Loud', pronunciation: 'muzʿij (mooz-ʿIJ)' }
        ],
        streetSlang: [
          { word: 'حلو', translation: 'Nice/pretty (casual)', pronunciation: 'ḥilw (HILW)' },
          { word: 'حلو قوي', translation: 'Really nice (Egyptian)', pronunciation: 'ḥilw awi (HILW A-wee)' },
          { word: 'على قدّه', translation: 'Just okay / average', pronunciation: 'ʿala addoh (A-la AD-doh)' },
          { word: 'فخم', translation: 'Fancy / high-end (slang)', pronunciation: 'fakham (FA-kham)' },
          { word: 'رخيص قوي', translation: 'Very cheap (Egyptian)', pronunciation: 'rakhīṣ awi (ra-KHEES A-wee)' },
          { word: 'مو زين', translation: 'Not good (Gulf)', pronunciation: 'mū zayn (moo ZAYN)' }
        ],
        culturalNotes: 'Adjectives often follow the noun and must agree in gender. In casual speech, shortened forms are common and tone carries a lot of meaning.'
      },
      {
        id: 18,
        title: 'Weather',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'الجو حار', translation: 'The weather is hot', pronunciation: 'al-jaww ḥār (al-jaww HAAR)' },
          { word: 'الجو بارد', translation: 'The weather is cold', pronunciation: 'al-jaww bārid (al-jaww BAA-rid)' },
          { word: 'تمطر', translation: 'It’s raining', pronunciation: 'tumṭir (TOOM-tir)' },
          { word: 'الجو غائم', translation: 'It’s cloudy', pronunciation: 'al-jaww ghāʾim (al-jaww GHAH-im)' },
          { word: 'الجو عاصف', translation: 'It’s windy', pronunciation: 'al-jaww ʿāṣif (al-jaww AA-sif)' },
          { word: 'الجو جميل اليوم', translation: 'The weather is nice today', pronunciation: 'al-jaww jamīl al-yawm (al-jaww ja-MEEL al-YAWM)' },
          { word: 'درجة الحرارة', translation: 'Temperature', pronunciation: 'darajat al-ḥarāra (da-RA-jat al-ha-RAA-ra)' },
          { word: 'رطوبة', translation: 'Humidity', pronunciation: 'ruṭūba (roo-TOO-ba)' }
        ],
        streetSlang: [
          { word: 'الدنيا حر', translation: 'It’s really hot (Egyptian)', pronunciation: 'ed-donya ḥarr (ed-DON-ya HARR)' },
          { word: 'برد كتير', translation: 'Very cold (Levantine)', pronunciation: 'bard ktīr (bard k-TEER)' },
          { word: 'في شتا', translation: 'It’s winter (casual)', pronunciation: 'fī shita (fee SHE-ta)' },
          { word: 'شوب', translation: 'Hot weather (Gulf)', pronunciation: 'shoob (SHOOB)' },
          { word: 'غيمة', translation: 'A cloud (casual)', pronunciation: 'ghayma (GHAY-ma)' },
          { word: 'الدنيا مطر', translation: 'It’s rainy (casual)', pronunciation: 'ed-donya maṭar (ed-DON-ya MAH-tar)' }
        ],
        culturalNotes: 'Weather talk is a common icebreaker. In desert climates, temperature changes can be dramatic between day and night.'
      },
      {
        id: 19,
        title: 'Health Basics',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'أشعر بألم', translation: 'I feel pain', pronunciation: 'ashʿur biʾalam (ASH-ʿoor bee-AL-am)' },
          { word: 'عندي صداع', translation: 'I have a headache', pronunciation: 'ʿindī ṣudāʿ (IN-dee soo-DAAʿ)' },
          { word: 'عندي حمى', translation: 'I have a fever', pronunciation: 'ʿindī ḥummā (IN-dee HOOM-ma)' },
          { word: 'أحتاج إلى طبيب', translation: 'I need a doctor', pronunciation: 'aḥtāj ilā ṭabīb (ah-TAJ ee-LAA ta-BEEB)' },
          { word: 'دواء', translation: 'Medicine', pronunciation: 'dawāʾ (da-WAAʾ)' },
          { word: 'حساسية', translation: 'Allergy', pronunciation: 'ḥasāsiyya (ha-SAA-see-ya)' },
          { word: 'نزلة برد', translation: 'Cold/flu', pronunciation: 'nazlat bard (NAZ-lat bard)' },
          { word: 'هل يوجد صيدلية؟', translation: 'Is there a pharmacy?', pronunciation: 'hal yūjad ṣaydaliyya? (hal YOO-jad say-da-LEE-ya)' }
        ],
        streetSlang: [
          { word: 'تعبان', translation: 'I’m sick/tired (casual)', pronunciation: 'taʿbān (taʿ-BAAN)' },
          { word: 'بطني بتوجعني', translation: 'My stomach hurts (Egyptian)', pronunciation: 'baṭnī bitwajjaʿnī (BAT-nee bit-wa-JAʿ-nee)' },
          { word: 'سخونية', translation: 'Fever (Egyptian)', pronunciation: 'sukhoona (soo-KHOO-na)' },
          { word: 'دوا', translation: 'Medicine (casual)', pronunciation: 'dawa (DA-wa)' },
          { word: 'عيادة', translation: 'Clinic (casual)', pronunciation: 'ʿiyāda (ee-YAA-da)' },
          { word: 'محتاج دكتور', translation: 'I need a doctor (casual)', pronunciation: 'miḥtāj duktūr (mih-TAJ dok-TOOR)' }
        ],
        culturalNotes: 'Pharmacies are common and often the first stop for minor issues. When in doubt, ask for a “طبيب” or visit a clinic.'
      },
      {
        id: 20,
        title: 'Technology',
        level: 'intermediate',
        premium: true,
        words: [
          { word: 'هاتف ذكي', translation: 'Smartphone', pronunciation: 'hātif dhakī (HAA-tif dha-KEE)' },
          { word: 'شاحن', translation: 'Charger', pronunciation: 'shāḥin (SHAA-hin)' },
          { word: 'تطبيق', translation: 'App', pronunciation: 'taṭbīq (tat-BEEQ)' },
          { word: 'إنترنت', translation: 'Internet', pronunciation: 'intarnet (IN-ter-net)' },
          { word: 'كلمة مرور', translation: 'Password', pronunciation: 'kalimat murūr (KA-lee-mat moo-ROOR)' },
          { word: 'شبكة واي فاي', translation: 'Wi‑Fi network', pronunciation: 'shabakat wāy fāy (SHA-ba-kat WHY-FY)' },
          { word: 'تنزيل', translation: 'Download', pronunciation: 'tanzīl (tan-ZEEL)' },
          { word: 'تحديث', translation: 'Update', pronunciation: 'taḥdīth (tah-DEETH)' }
        ],
        streetSlang: [
          { word: 'نت', translation: 'Internet (slang)', pronunciation: 'net (NET)' },
          { word: 'واي فاي', translation: 'Wi‑Fi (slang)', pronunciation: 'wāy fāy (WHY-FY)' },
          { word: 'اشحن', translation: 'Charge it (casual)', pronunciation: 'ishḥan (ISH-han)' },
          { word: 'نزّل التطبيق', translation: 'Download the app (casual)', pronunciation: 'nazzil et-taṭbīq (NAZ-zil et-tat-BEEQ)' },
          { word: 'باسورد', translation: 'Password (slang)', pronunciation: 'bāsword (BASS-word)' },
          { word: 'شبكة', translation: 'Network (casual)', pronunciation: 'shabka (SHAB-ka)' }
        ],
        culturalNotes: 'Many tech terms are borrowed from English and pronounced with local accents. Asking for Wi‑Fi is common and usually understood.'
      },
      {
        id: 21,
        title: 'Business Situations',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'اجتماع', translation: 'Meeting', pronunciation: 'ijtimaʿ (ij-ti-MAʿ)' },
          { word: 'عقد', translation: 'Contract', pronunciation: 'ʿaqd (ʿAQD)' },
          { word: 'ميزانية', translation: 'Budget', pronunciation: 'mīzāniyya (mee-ZAA-nee-ya)' },
          { word: 'موعد نهائي', translation: 'Deadline', pronunciation: 'mawʿid nihāʾī (MAWʿ-id ni-HA-ee)' },
          { word: 'عرض', translation: 'Proposal/offer', pronunciation: 'ʿarḍ (ʿARD)' },
          { word: 'عميل', translation: 'Client', pronunciation: 'ʿamīl (ʿa-MEEL)' },
          { word: 'أرباح', translation: 'Profits', pronunciation: 'arbāḥ (ar-BAAH)' },
          { word: 'تفاوض', translation: 'Negotiation', pronunciation: 'tafāwuḍ (ta-FAA-wud)' }
        ],
        streetSlang: [
          { word: 'ديل', translation: 'Deal (slang)', pronunciation: 'dīl (DEEL)' },
          { word: 'بزنس', translation: 'Business (slang)', pronunciation: 'biznis (BIZ-nes)' },
          { word: 'نشتغل على…', translation: 'Let’s work on… (casual)', pronunciation: 'nishtighil ʿala… (nish-TE-ghil A-la)' },
          { word: 'ديدلاين', translation: 'Deadline (slang)', pronunciation: 'dīd-lāyn (DEED-line)' },
          { word: 'فلوس', translation: 'Money (casual)', pronunciation: 'fulūs (foo-LOOS)' },
          { word: 'تقرير سريع', translation: 'Quick report (casual)', pronunciation: 'taqrīr sarīʿ (taq-REER sa-REEʿ)' }
        ],
        culturalNotes: 'Formal greetings and respectful titles are important in business settings. Meetings may begin with small talk before getting to the main agenda.'
      },
      {
        id: 22,
        title: 'Cultural Context',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'تقاليد', translation: 'Traditions', pronunciation: 'taqālīd (ta-QAA-leed)' },
          { word: 'احترام', translation: 'Respect', pronunciation: 'iḥtirām (iḥ-ti-RAAM)' },
          { word: 'ضيافة', translation: 'Hospitality', pronunciation: 'ḍiyāfa (dee-YAA-fa)' },
          { word: 'عادات', translation: 'Customs', pronunciation: 'ʿādāt (AA-daat)' },
          { word: 'مجتمع', translation: 'Society', pronunciation: 'mujtamaʿ (mooj-ta-MAʿ)' },
          { word: 'قيم', translation: 'Values', pronunciation: 'qiyam (QI-yam)' },
          { word: 'دين', translation: 'Religion/faith', pronunciation: 'dīn (DEEN)' },
          { word: 'تاريخ', translation: 'History', pronunciation: 'tārīkh (taa-REEKH)' }
        ],
        streetSlang: [
          { word: 'أصول', translation: 'Good manners (casual)', pronunciation: 'uṣūl (oo-SOOL)' },
          { word: 'عيب', translation: 'That’s not done / shame', pronunciation: 'ʿayb (ʿAYB)' },
          { word: 'حلال', translation: 'Permissible (common term)', pronunciation: 'ḥalāl (ha-LAAL)' },
          { word: 'حرام', translation: 'Forbidden / not okay', pronunciation: 'ḥarām (ha-RAAM)' },
          { word: 'أهل', translation: 'People / family (casual)', pronunciation: 'ahl (AHL)' },
          { word: 'عادة', translation: 'Custom/habit (casual)', pronunciation: 'ʿāda (AA-da)' }
        ],
        culturalNotes: 'Hospitality and respect for elders are core values in many Arabic-speaking societies. Learning a few cultural phrases shows appreciation and builds trust.'
      },
      {
        id: 23,
        title: 'Idioms & Sayings',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'يد واحدة لا تصفق', translation: 'One hand doesn’t clap (teamwork matters)', pronunciation: 'yad wāḥida lā tuṣaffiq (yad WAA-ḥi-da laa too-SAF-feq)' },
          { word: 'الصبر مفتاح الفرج', translation: 'Patience is the key to relief', pronunciation: 'aṣ-ṣabr miftāḥ al-faraj (as-SABR mif-TAAH al-FA-raj)' },
          { word: 'على قد لحافك مد رجليك', translation: 'Live within your means (stretch your legs as far as your blanket)', pronunciation: 'ʿala add lahāfak mudd rijlayk (A-la add la-HAA-fak mudd rij-LAYK)' },
          { word: 'اللي فات مات', translation: 'What’s done is done', pronunciation: 'illī fāt māt (il-LEE FAAT MAAT)' },
          { word: 'بين نارين', translation: 'Between two fires (between a rock and a hard place)', pronunciation: 'bayn nārayn (bayn NAA-rayn)' },
          { word: 'كبر دماغك', translation: 'Don’t worry about it (Egyptian)', pronunciation: 'kabbir dimāghak (kab-BIR di-MAA-ghak)' },
          { word: 'بعد خراب مالطة', translation: 'Too late (after the damage is done)', pronunciation: 'baʿd kharāb mālṭa (baʿd kha-RAAB MAAL-ta)' },
          { word: 'اللي اختشوا ماتوا', translation: 'Those who were shy died (no shame left)', pronunciation: 'illī ikhtashū mātu (il-LEE ikh-ta-SHOO MAA-too)' }
        ],
        streetSlang: [
          { word: 'على راحتك', translation: 'Take your time / no pressure', pronunciation: 'ʿala rāḥtak (A-la RAAḥ-tak)' },
          { word: 'ولا يهمك', translation: 'No worries', pronunciation: 'walā yihimmak (wa-LAA yi-HIM-mak)' },
          { word: 'فوق راسي', translation: 'With pleasure / at your service', pronunciation: 'fōʾ rāsī (fōʾ RAA-see)' },
          { word: 'خلّها على الله', translation: 'Leave it to God / it will work out', pronunciation: 'khallīhā ʿala allāh (khal-LEE-haa a-la ALL-ah)' },
          { word: 'على عينك', translation: 'Right away / for you', pronunciation: 'ʿala ʿaynak (A-la ʿAY-nak)' },
          { word: 'كلام كبير', translation: 'Big talk / strong words', pronunciation: 'kalām kabīr (ka-LAAM ka-BEER)' }
        ],
        culturalNotes: 'Sayings are widely used in conversation and often carry cultural wisdom. Even if you don’t use them, understanding them helps you follow everyday speech.'
      },
      {
        id: 24,
        title: 'Complex Grammar & Connectors',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'لو كان عندي وقت، لذهبت…', translation: 'If I had time, I would go…', pronunciation: 'law kāna ʿindī waqt, la-dhahabtu… (law KAA-na IN-dee wakt la-dha-HAB-too)' },
          { word: 'من المهم أن…', translation: 'It’s important that…', pronunciation: 'min al-muhimm an… (min al moo-HIMM an)' },
          { word: 'بالرغم من…', translation: 'Despite…', pronunciation: 'biraghm min… (bi-RAGHM min)' },
          { word: 'سواء… أو…', translation: 'Whether… or…', pronunciation: 'sawāʾ… aw… (sa-WAAʾ … ow)' },
          { word: 'لكي…', translation: 'In order to…', pronunciation: 'likay… (li-KAY)' },
          { word: 'إذا حدث ذلك، فسوف…', translation: 'If that happens, then…', pronunciation: 'idhā ḥadatha dhālik, fa-sawfa… (ee-DHAA HA-da-tha DAA-lik fa-SAW-fa)' },
          { word: 'ليس فقط… بل أيضاً…', translation: 'Not only… but also…', pronunciation: 'laysa faqaṭ… bal ayḍan… (LAY-sa fa-QAT bal AY-dan)' },
          { word: 'ما زلت…', translation: 'I still…', pronunciation: 'mā zilt… (maa ZILT)' }
        ],
        streetSlang: [
          { word: 'لو…', translation: 'If… (casual)', pronunciation: 'law… (LAW)' },
          { word: 'يعني', translation: 'I mean / like', pronunciation: 'yaʿnī (YAA-nee)' },
          { word: 'بصراحة', translation: 'Honestly', pronunciation: 'biṣarāḥa (bi-sa-RAA-ḥa)' },
          { word: 'على فكرة', translation: 'By the way', pronunciation: 'ʿala fikra (A-la FIK-ra)' },
          { word: 'مع إنه…', translation: 'Even though… (Levantine)', pronunciation: 'maʿ inno… (maʿ IN-no)' },
          { word: 'بس', translation: 'But (casual)', pronunciation: 'bass (BASS)' }
        ],
        culturalNotes: 'Formal connectors help you sound clear and educated. In daily speech, many people switch to shorter phrases like “يعني” and “بس”.'
      },
      {
        id: 25,
        title: 'Debates & Opinions',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'في رأيي…', translation: 'In my opinion…', pronunciation: 'fī raʾyī… (fee RAH-yee)' },
          { word: 'أوافق / لا أوافق', translation: 'I agree / I disagree', pronunciation: 'uwāfiq / lā uwāfiq (oo-WAA-feq / laa oo-WAA-feq)' },
          { word: 'أعتقد أن…', translation: 'I believe that…', pronunciation: 'aʿtaqid an… (aʿ-ta-QID an)' },
          { word: 'هذا منطقي', translation: 'This is logical', pronunciation: 'hādhā manṭiqī (HAA-dha MAN-tee-kee)' },
          { word: 'هذا غير مقنع', translation: 'This is unconvincing', pronunciation: 'hādhā ghayr muqniʿ (HAA-dha GHAIR moo-KNEEʿ)' },
          { word: 'من جهة… ومن جهة أخرى…', translation: 'On the one hand… on the other hand…', pronunciation: 'min jihah… wa min jihah ukhrā… (min JEE-ha wa min JEE-ha OOKH-raa)' },
          { word: 'الدليل', translation: 'Evidence', pronunciation: 'ad-dalīl (ad-da-LEEL)' },
          { word: 'لنفترض أن…', translation: 'Let’s suppose that…', pronunciation: 'linafṭariḍ an… (li-naf-TA-rid an)' }
        ],
        streetSlang: [
          { word: 'أنا شايف', translation: 'I think (Egyptian)', pronunciation: 'anā shāyif (a-NAA SHAA-yif)' },
          { word: 'مو مقتنع', translation: 'Not convinced (Gulf/Levantine)', pronunciation: 'mū muqtaṇiʿ (moo mook-ta-NEEʿ)' },
          { word: 'بالعكس', translation: 'On the contrary', pronunciation: 'bil-ʿaks (bil-ʿAKS)' },
          { word: 'يعني', translation: 'I mean (filler)', pronunciation: 'yaʿnī (YAA-nee)' },
          { word: 'مش منطقي', translation: 'Not logical (casual)', pronunciation: 'mish manṭiqī (mish MAN-tee-kee)' },
          { word: 'خلّينا نتفق', translation: 'Let’s agree (casual)', pronunciation: 'khallīna nittafiq (khal-LEE-na nit-ta-FIQ)' }
        ],
        culturalNotes: 'Disagreement is usually softened with polite language. Phrases like “في رأيي” help keep the tone respectful.'
      },
      {
        id: 26,
        title: 'Storytelling',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'في البداية…', translation: 'In the beginning…', pronunciation: 'fī al-bidāya… (fee al-bi-DAA-ya)' },
          { word: 'ثم…', translation: 'Then…', pronunciation: 'thumma… (THUM-ma)' },
          { word: 'فجأة…', translation: 'Suddenly…', pronunciation: 'fajaʾatan… (fa-JAʾ-a-tan)' },
          { word: 'بعدها…', translation: 'After that…', pronunciation: 'baʿdahā… (baʿ-DA-ha)' },
          { word: 'في النهاية…', translation: 'In the end…', pronunciation: 'fī an-nihāya… (fee an-ni-HA-ya)' },
          { word: 'قصة', translation: 'Story', pronunciation: 'qiṣṣa (QIS-sa)' },
          { word: 'بطل', translation: 'Hero', pronunciation: 'baṭal (BA-tal)' },
          { word: 'حدث', translation: 'Event', pronunciation: 'ḥadath (HA-dath)' }
        ],
        streetSlang: [
          { word: 'وبعدين', translation: 'And then… (casual)', pronunciation: 'w baʿdein (w baʿ-DEEN)' },
          { word: 'مرة', translation: 'Once / one time (casual)', pronunciation: 'marra (MAR-ra)' },
          { word: 'فجأة كده', translation: 'All of a sudden (Egyptian)', pronunciation: 'fagaʾa keda (fa-GAʾ-a KE-da)' },
          { word: 'آخر حاجة', translation: 'The last thing (casual)', pronunciation: 'ākhir ḥāga (AA-khir HAA-ga)' },
          { word: 'المهم', translation: 'Anyway / the point is', pronunciation: 'el-muhimm (el-moo-HIMM)' },
          { word: 'حكاية', translation: 'Story (colloquial)', pronunciation: 'ḥikāya (hi-KAA-ya)' }
        ],
        culturalNotes: 'Storytelling is a beloved part of conversation. Using connectors like “ثم” and “فجأة” helps make your story easy to follow.'
      },
      {
        id: 27,
        title: 'Formal vs Informal Speech',
        level: 'advanced',
        premium: true,
        words: [
          { word: 'حضرتك', translation: 'Formal “you” (Egyptian)', pronunciation: 'ḥaḍratak (ḥaḌ-ra-tak)' },
          { word: 'سيادتك', translation: 'Your excellency / very formal “you”', pronunciation: 'siyādatak (see-YAA-da-tak)' },
          { word: 'من فضلك', translation: 'Please (formal)', pronunciation: 'min faḍlak (min FAD-lak)' },
          { word: 'لو سمحت', translation: 'Please / excuse me (polite)', pronunciation: 'law samaḥt (low sa-MAHT)' },
          { word: 'حضرتكم', translation: 'Formal “you” (plural)', pronunciation: 'ḥaḍratkum (ḥaḌ-rat-koom)' },
          { word: 'يا أستاذ/يا أستاذة', translation: 'Mr./Ms. (polite address)', pronunciation: 'yā ustādh / yā ustādha (yaa oos-TAADH / oos-TAA-dha)' },
          { word: 'يا صديقي', translation: 'My friend (informal)', pronunciation: 'yā ṣadīqī (yaa sa-DEE-kee)' },
          { word: 'يا جماعة', translation: 'Hey everyone (informal)', pronunciation: 'yā jamāʿa (yaa ja-MAAʿ-a)' }
        ],
        streetSlang: [
          { word: 'إنت', translation: 'You (informal, singular)', pronunciation: 'inta (IN-ta)' },
          { word: 'إنتو', translation: 'You (informal, plural)', pronunciation: 'intu (IN-too)' },
          { word: 'يا زلمة', translation: 'Hey man (Levantine)', pronunciation: 'yā zalame (yaa ZA-la-meh)' },
          { word: 'يا باشا', translation: 'Boss / sir (Egyptian)', pronunciation: 'yā bāsha (yaa BAA-sha)' },
          { word: 'يا حبيبي', translation: 'My dear (informal)', pronunciation: 'yā ḥabībī (yaa ha-BEE-bee)' },
          { word: 'يا أختي', translation: 'Sister (informal)', pronunciation: 'yā ukhtī (yaa OOKH-tee)' }
        ],
        culturalNotes: 'Levels of formality vary by region. Using titles like “يا أستاذ” shows respect, while casual terms like “يا حبيبي” signal warmth once you know someone.'
      }
    ]
  }
};

export const getLanguageById = (id) => languages[id];
export const getAllLanguages = () =>
  Object.values(languages).sort((a, b) => a.name.localeCompare(b.name));

