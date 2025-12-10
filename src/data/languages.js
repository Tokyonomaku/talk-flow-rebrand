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
          { word: 'Coche', translation: 'Car', pronunciation: 'KOH-cheh' },
          { word: 'Avión', translation: 'Airplane', pronunciation: 'ah-vee-OHN' },
          { word: 'Tren', translation: 'Train', pronunciation: 'tren' },
          { word: 'Autobús', translation: 'Bus', pronunciation: 'ow-toh-BOOS' },
          { word: 'Bicicleta', translation: 'Bicycle', pronunciation: 'bee-see-KLEH-tah' }
        ],
        streetSlang: [
          { word: 'Echar gasolina', translation: 'To fill up gas', pronunciation: 'eh-CHAR gah-soh-LEE-nah' },
          { word: 'Ir a toda velocidad', translation: 'To go full speed', pronunciation: 'eer ah TOH-dah veh-loh-see-DAHD' },
          { word: 'Estar en el tráfico', translation: 'To be stuck in traffic', pronunciation: 'es-TAR en el TRAH-fee-koh' },
          { word: 'Coger el autobús', translation: 'To catch the bus', pronunciation: 'koh-HEHR el ow-toh-BOOS' },
          { word: 'Viajar', translation: 'To travel', pronunciation: 'vee-ah-HAHR' },
          { word: 'Hacer un viaje', translation: 'To take a trip', pronunciation: 'ah-SEHR oon VEE-ah-heh' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Trabajo', translation: 'Work/Job', pronunciation: 'trah-BAH-hoh' },
          { word: 'Oficina', translation: 'Office', pronunciation: 'oh-fee-SEE-nah' },
          { word: 'Reunión', translation: 'Meeting', pronunciation: 'reh-oo-NYOHN' },
          { word: 'Cliente', translation: 'Client', pronunciation: 'klee-EN-teh' },
          { word: 'Negocio', translation: 'Business', pronunciation: 'neh-GOH-see-oh' }
        ],
        streetSlang: [
          { word: 'Estar trabajando', translation: 'To be working', pronunciation: 'es-TAR trah-bah-HAHN-doh' },
          { word: 'Tener mucho trabajo', translation: 'To have a lot of work', pronunciation: 'teh-NEHR MOO-choh trah-BAH-hoh' },
          { word: 'Hacer negocios', translation: 'To do business', pronunciation: 'ah-SEHR neh-GOH-see-ohs' },
          { word: 'Estar ocupado', translation: 'To be busy', pronunciation: 'es-TAR oh-koo-PAH-doh' },
          { word: 'Trabajar duro', translation: 'To work hard', pronunciation: 'trah-bah-HAHR DOO-roh' },
          { word: 'Hacer una reunión', translation: 'To have a meeting', pronunciation: 'ah-SEHR OO-nah reh-oo-NYOHN' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Música', translation: 'Music', pronunciation: 'MOO-see-kah' },
          { word: 'Deporte', translation: 'Sport', pronunciation: 'deh-POR-teh' },
          { word: 'Libro', translation: 'Book', pronunciation: 'LEE-broh' },
          { word: 'Película', translation: 'Movie', pronunciation: 'peh-LEE-koo-lah' },
          { word: 'Afición', translation: 'Hobby', pronunciation: 'ah-fee-SYOHN' }
        ],
        streetSlang: [
          { word: 'Echar una película', translation: 'To watch a movie', pronunciation: 'eh-CHAR OO-nah peh-LEE-koo-lah' },
          { word: 'Escuchar música', translation: 'To listen to music', pronunciation: 'es-koo-CHAR MOO-see-kah' },
          { word: 'Hacer deporte', translation: 'To do sports', pronunciation: 'ah-SEHR deh-POR-teh' },
          { word: 'Leer un libro', translation: 'To read a book', pronunciation: 'leh-EHR oon LEE-broh' },
          { word: 'Tener un hobby', translation: 'To have a hobby', pronunciation: 'teh-NEHR oon HOH-bee' },
          { word: 'Pasar el tiempo', translation: 'To spend time', pronunciation: 'pah-SAR el tee-EM-poh' }
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
          { word: 'Nervioso', translation: 'Nervous', pronunciation: 'nehr-vee-OH-soh' },
          { word: 'Emocionado', translation: 'Excited', pronunciation: 'eh-moh-see-oh-NAH-doh' }
        ],
        streetSlang: [
          { word: 'Estar feliz', translation: 'To be happy', pronunciation: 'es-TAR feh-LEES' },
          { word: 'Estar triste', translation: 'To be sad', pronunciation: 'es-TAR TREES-teh' },
          { word: 'Estar enojado', translation: 'To be angry', pronunciation: 'es-TAR eh-noh-HAH-doh' },
          { word: 'Estar nervioso', translation: 'To be nervous', pronunciation: 'es-TAR nehr-vee-OH-soh' },
          { word: 'Estar emocionado', translation: 'To be excited', pronunciation: 'es-TAR eh-moh-see-oh-NAH-doh' },
          { word: 'Sentirse bien', translation: 'To feel good', pronunciation: 'sen-TEER-seh bee-EN' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Izquierda', translation: 'Left', pronunciation: 'ees-kee-EHR-dah' },
          { word: 'Derecha', translation: 'Right', pronunciation: 'deh-REH-chah' },
          { word: 'Recto', translation: 'Straight', pronunciation: 'REK-toh' },
          { word: 'Cerca', translation: 'Near', pronunciation: 'SEHR-kah' },
          { word: 'Lejos', translation: 'Far', pronunciation: 'LEH-hohs' }
        ],
        streetSlang: [
          { word: 'Girar a la izquierda', translation: 'To turn left', pronunciation: 'hee-RAHR ah lah ees-kee-EHR-dah' },
          { word: 'Girar a la derecha', translation: 'To turn right', pronunciation: 'hee-RAHR ah lah deh-REH-chah' },
          { word: 'Seguir recto', translation: 'To go straight', pronunciation: 'seh-GEER REK-toh' },
          { word: 'Estar cerca', translation: 'To be near', pronunciation: 'es-TAR SEHR-kah' },
          { word: 'Estar lejos', translation: 'To be far', pronunciation: 'es-TAR LEH-hohs' },
          { word: '¿Dónde está?', translation: 'Where is it?', pronunciation: 'DOHN-deh es-TAH' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Fui', translation: 'I went', pronunciation: 'fwee' },
          { word: 'Hice', translation: 'I did/made', pronunciation: 'EE-seh' },
          { word: 'Vi', translation: 'I saw', pronunciation: 'vee' },
          { word: 'Comí', translation: 'I ate', pronunciation: 'koh-MEE' },
          { word: 'Bebí', translation: 'I drank', pronunciation: 'beh-BEE' }
        ],
        streetSlang: [
          { word: 'Fui a...', translation: 'I went to...', pronunciation: 'fwee ah' },
          { word: 'Hice...', translation: 'I did/made...', pronunciation: 'EE-seh' },
          { word: 'Vi...', translation: 'I saw...', pronunciation: 'vee' },
          { word: 'Comí...', translation: 'I ate...', pronunciation: 'koh-MEE' },
          { word: 'Bebí...', translation: 'I drank...', pronunciation: 'beh-BEE' },
          { word: 'Ayer', translation: 'Yesterday', pronunciation: 'ah-YEHR' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Voy a', translation: 'I\'m going to', pronunciation: 'boy ah' },
          { word: 'Voy a ir', translation: 'I\'m going to go', pronunciation: 'boy ah eer' },
          { word: 'Voy a hacer', translation: 'I\'m going to do', pronunciation: 'boy ah ah-SEHR' },
          { word: 'Voy a ver', translation: 'I\'m going to see', pronunciation: 'boy ah vehr' },
          { word: 'Mañana', translation: 'Tomorrow', pronunciation: 'mah-NYAH-nah' }
        ],
        streetSlang: [
          { word: 'Voy a...', translation: 'I\'m going to...', pronunciation: 'boy ah' },
          { word: 'Voy a ir a...', translation: 'I\'m going to go to...', pronunciation: 'boy ah eer ah' },
          { word: 'Voy a hacer...', translation: 'I\'m going to do...', pronunciation: 'boy ah ah-SEHR' },
          { word: 'Mañana voy a...', translation: 'Tomorrow I\'m going to...', pronunciation: 'mah-NYAH-nah boy ah' },
          { word: 'Voy a ver...', translation: 'I\'m going to see...', pronunciation: 'boy ah vehr' },
          { word: 'El próximo...', translation: 'Next...', pronunciation: 'el PROHK-see-moh' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '¿Qué tal si...?', translation: 'What if...?', pronunciation: 'keh tahl see' },
          { word: '¿Por qué no...?', translation: 'Why don\'t we...?', pronunciation: 'por keh noh' },
          { word: 'Deberíamos', translation: 'We should', pronunciation: 'deh-beh-ree-AH-mohs' },
          { word: 'Podríamos', translation: 'We could', pronunciation: 'poh-DREE-ah-mohs' },
          { word: 'Vamos a', translation: 'Let\'s', pronunciation: 'VAH-mohs ah' }
        ],
        streetSlang: [
          { word: '¿Qué tal si vamos?', translation: 'What if we go?', pronunciation: 'keh tahl see VAH-mohs' },
          { word: '¿Por qué no vamos?', translation: 'Why don\'t we go?', pronunciation: 'por keh noh VAH-mohs' },
          { word: 'Deberíamos ir', translation: 'We should go', pronunciation: 'deh-beh-ree-AH-mohs eer' },
          { word: 'Podríamos hacer', translation: 'We could do', pronunciation: 'poh-DREE-ah-mohs ah-SEHR' },
          { word: 'Vamos a...', translation: 'Let\'s...', pronunciation: 'VAH-mohs ah' },
          { word: 'Te propongo...', translation: 'I suggest...', pronunciation: 'teh proh-POHN-goh' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Creo que', translation: 'I think that', pronunciation: 'KREH-oh keh' },
          { word: 'Opino que', translation: 'I think that', pronunciation: 'oh-PEE-noh keh' },
          { word: 'Me parece que', translation: 'It seems to me that', pronunciation: 'meh pah-REH-seh keh' },
          { word: 'En mi opinión', translation: 'In my opinion', pronunciation: 'en mee oh-pee-NYOHN' },
          { word: 'Para mí', translation: 'For me', pronunciation: 'pah-rah mee' }
        ],
        streetSlang: [
          { word: 'Creo que...', translation: 'I think that...', pronunciation: 'KREH-oh keh' },
          { word: 'Opino que...', translation: 'I think that...', pronunciation: 'oh-PEE-noh keh' },
          { word: 'Me parece que...', translation: 'It seems to me that...', pronunciation: 'meh pah-REH-seh keh' },
          { word: 'En mi opinión...', translation: 'In my opinion...', pronunciation: 'en mee oh-pee-NYOHN' },
          { word: 'Para mí...', translation: 'For me...', pronunciation: 'pah-rah mee' },
          { word: 'Yo creo...', translation: 'I believe...', pronunciation: 'yoh KREH-oh' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Problema', translation: 'Problem', pronunciation: 'proh-BLEH-mah' },
          { word: 'Solución', translation: 'Solution', pronunciation: 'soh-loo-SYOHN' },
          { word: 'Ayuda', translation: 'Help', pronunciation: 'ah-YOO-dah' },
          { word: 'Necesito', translation: 'I need', pronunciation: 'neh-seh-SEE-toh' },
          { word: 'Puedo', translation: 'I can', pronunciation: 'PWEH-doh' }
        ],
        streetSlang: [
          { word: 'Tener un problema', translation: 'To have a problem', pronunciation: 'teh-NEHR oon proh-BLEH-mah' },
          { word: 'Buscar una solución', translation: 'To look for a solution', pronunciation: 'boos-KAHR OO-nah soh-loo-SYOHN' },
          { word: 'Necesitar ayuda', translation: 'To need help', pronunciation: 'neh-seh-see-TAHR ah-YOO-dah' },
          { word: 'Puedo ayudar', translation: 'I can help', pronunciation: 'PWEH-doh ah-yoo-DAHR' },
          { word: 'Resolver un problema', translation: 'To solve a problem', pronunciation: 'reh-sohl-VEHR oon proh-BLEH-mah' },
          { word: 'Encontrar una solución', translation: 'To find a solution', pronunciation: 'en-kohn-TRAHR OO-nah soh-loo-SYOHN' }
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
          { word: 'Voiture', translation: 'Car', pronunciation: 'vwah-TOOR' },
          { word: 'Avion', translation: 'Airplane', pronunciation: 'ah-vee-OHN' },
          { word: 'Train', translation: 'Train', pronunciation: 'tran' },
          { word: 'Bus', translation: 'Bus', pronunciation: 'boos' },
          { word: 'Vélo', translation: 'Bicycle', pronunciation: 'vay-LOH' }
        ],
        streetSlang: [
          { word: 'Faire le plein', translation: 'To fill up gas', pronunciation: 'fair luh plan' },
          { word: 'Rouler à fond', translation: 'To go full speed', pronunciation: 'roo-LAY ah fohn' },
          { word: 'Être dans les bouchons', translation: 'To be stuck in traffic', pronunciation: 'etr dahn lay boo-SHOHN' },
          { word: 'Prendre le bus', translation: 'To catch the bus', pronunciation: 'prahn-druh luh boos' },
          { word: 'Voyager', translation: 'To travel', pronunciation: 'vwah-yah-ZHAY' },
          { word: 'Faire un voyage', translation: 'To take a trip', pronunciation: 'fair oon vwah-YAHZH' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Travail', translation: 'Work/Job', pronunciation: 'trah-VY' },
          { word: 'Bureau', translation: 'Office', pronunciation: 'boo-ROH' },
          { word: 'Réunion', translation: 'Meeting', pronunciation: 'ray-oo-NYOHN' },
          { word: 'Client', translation: 'Client', pronunciation: 'klee-AHN' },
          { word: 'Affaires', translation: 'Business', pronunciation: 'ah-FAIR' }
        ],
        streetSlang: [
          { word: 'Être au travail', translation: 'To be working', pronunciation: 'etr oh trah-VY' },
          { word: 'Avoir beaucoup de travail', translation: 'To have a lot of work', pronunciation: 'ah-VWAHR boh-KOO duh trah-VY' },
          { word: 'Faire des affaires', translation: 'To do business', pronunciation: 'fair day zah-FAIR' },
          { word: 'Être occupé', translation: 'To be busy', pronunciation: 'etr oh-koo-PAY' },
          { word: 'Travailler dur', translation: 'To work hard', pronunciation: 'trah-vy-YAY door' },
          { word: 'Avoir une réunion', translation: 'To have a meeting', pronunciation: 'ah-VWAHR oon ray-oo-NYOHN' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Musique', translation: 'Music', pronunciation: 'moo-ZEEK' },
          { word: 'Sport', translation: 'Sport', pronunciation: 'spor' },
          { word: 'Livre', translation: 'Book', pronunciation: 'leev-ruh' },
          { word: 'Film', translation: 'Movie', pronunciation: 'feelm' },
          { word: 'Passe-temps', translation: 'Hobby', pronunciation: 'pahs-tahn' }
        ],
        streetSlang: [
          { word: 'Regarder un film', translation: 'To watch a movie', pronunciation: 'ruh-gar-DAY oon feelm' },
          { word: 'Écouter de la musique', translation: 'To listen to music', pronunciation: 'ay-koo-TAY duh lah moo-ZEEK' },
          { word: 'Faire du sport', translation: 'To do sports', pronunciation: 'fair doo spor' },
          { word: 'Lire un livre', translation: 'To read a book', pronunciation: 'leer oon leev-ruh' },
          { word: 'Avoir un passe-temps', translation: 'To have a hobby', pronunciation: 'ah-VWAHR oon pahs-tahn' },
          { word: 'Passer le temps', translation: 'To spend time', pronunciation: 'pah-SAY luh tahn' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Heureux', translation: 'Happy', pronunciation: 'uh-RUH' },
          { word: 'Triste', translation: 'Sad', pronunciation: 'treest' },
          { word: 'En colère', translation: 'Angry', pronunciation: 'ahn koh-LAIR' },
          { word: 'Nerveux', translation: 'Nervous', pronunciation: 'nehr-VUH' },
          { word: 'Excité', translation: 'Excited', pronunciation: 'ek-see-TAY' }
        ],
        streetSlang: [
          { word: 'Être heureux', translation: 'To be happy', pronunciation: 'etr uh-RUH' },
          { word: 'Être triste', translation: 'To be sad', pronunciation: 'etr treest' },
          { word: 'Être en colère', translation: 'To be angry', pronunciation: 'etr ahn koh-LAIR' },
          { word: 'Être nerveux', translation: 'To be nervous', pronunciation: 'etr nehr-VUH' },
          { word: 'Être excité', translation: 'To be excited', pronunciation: 'etr ek-see-TAY' },
          { word: 'Se sentir bien', translation: 'To feel good', pronunciation: 'suh sahn-TEER bee-EN' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Gauche', translation: 'Left', pronunciation: 'gohsh' },
          { word: 'Droite', translation: 'Right', pronunciation: 'drwaht' },
          { word: 'Tout droit', translation: 'Straight', pronunciation: 'too drwah' },
          { word: 'Près', translation: 'Near', pronunciation: 'preh' },
          { word: 'Loin', translation: 'Far', pronunciation: 'lwan' }
        ],
        streetSlang: [
          { word: 'Tourner à gauche', translation: 'To turn left', pronunciation: 'toor-NAY ah gohsh' },
          { word: 'Tourner à droite', translation: 'To turn right', pronunciation: 'toor-NAY ah drwaht' },
          { word: 'Aller tout droit', translation: 'To go straight', pronunciation: 'ah-LAY too drwah' },
          { word: 'Être près', translation: 'To be near', pronunciation: 'etr preh' },
          { word: 'Être loin', translation: 'To be far', pronunciation: 'etr lwan' },
          { word: 'Où est...?', translation: 'Where is...?', pronunciation: 'oo ay' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Je suis allé', translation: 'I went', pronunciation: 'zhuh swee zah-LAY' },
          { word: 'J\'ai fait', translation: 'I did/made', pronunciation: 'zhay fay' },
          { word: 'J\'ai vu', translation: 'I saw', pronunciation: 'zhay voo' },
          { word: 'J\'ai mangé', translation: 'I ate', pronunciation: 'zhay mahn-ZHAY' },
          { word: 'J\'ai bu', translation: 'I drank', pronunciation: 'zhay boo' }
        ],
        streetSlang: [
          { word: 'Je suis allé à...', translation: 'I went to...', pronunciation: 'zhuh swee zah-LAY ah' },
          { word: 'J\'ai fait...', translation: 'I did/made...', pronunciation: 'zhay fay' },
          { word: 'J\'ai vu...', translation: 'I saw...', pronunciation: 'zhay voo' },
          { word: 'J\'ai mangé...', translation: 'I ate...', pronunciation: 'zhay mahn-ZHAY' },
          { word: 'J\'ai bu...', translation: 'I drank...', pronunciation: 'zhay boo' },
          { word: 'Hier', translation: 'Yesterday', pronunciation: 'ee-AIR' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Je vais', translation: 'I\'m going to', pronunciation: 'zhuh vay' },
          { word: 'Je vais aller', translation: 'I\'m going to go', pronunciation: 'zhuh vay zah-LAY' },
          { word: 'Je vais faire', translation: 'I\'m going to do', pronunciation: 'zhuh vay fair' },
          { word: 'Je vais voir', translation: 'I\'m going to see', pronunciation: 'zhuh vay vwahr' },
          { word: 'Demain', translation: 'Tomorrow', pronunciation: 'duh-man' }
        ],
        streetSlang: [
          { word: 'Je vais...', translation: 'I\'m going to...', pronunciation: 'zhuh vay' },
          { word: 'Je vais aller à...', translation: 'I\'m going to go to...', pronunciation: 'zhuh vay zah-LAY ah' },
          { word: 'Je vais faire...', translation: 'I\'m going to do...', pronunciation: 'zhuh vay fair' },
          { word: 'Demain je vais...', translation: 'Tomorrow I\'m going to...', pronunciation: 'duh-man zhuh vay' },
          { word: 'Je vais voir...', translation: 'I\'m going to see...', pronunciation: 'zhuh vay vwahr' },
          { word: 'Le prochain...', translation: 'Next...', pronunciation: 'luh proh-SHAN' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Et si...?', translation: 'What if...?', pronunciation: 'ay see' },
          { word: 'Pourquoi ne pas...?', translation: 'Why don\'t we...?', pronunciation: 'poor-kwah nuh pah' },
          { word: 'On devrait', translation: 'We should', pronunciation: 'ohn duh-VAY' },
          { word: 'On pourrait', translation: 'We could', pronunciation: 'ohn poo-RAY' },
          { word: 'Allons', translation: 'Let\'s', pronunciation: 'ah-LOHN' }
        ],
        streetSlang: [
          { word: 'Et si on allait?', translation: 'What if we go?', pronunciation: 'ay see ohn zah-LAY' },
          { word: 'Pourquoi ne pas aller?', translation: 'Why don\'t we go?', pronunciation: 'poor-kwah nuh pah zah-LAY' },
          { word: 'On devrait aller', translation: 'We should go', pronunciation: 'ohn duh-VAY zah-LAY' },
          { word: 'On pourrait faire', translation: 'We could do', pronunciation: 'ohn poo-RAY fair' },
          { word: 'Allons...', translation: 'Let\'s...', pronunciation: 'ah-LOHN' },
          { word: 'Je propose...', translation: 'I suggest...', pronunciation: 'zhuh proh-POHZ' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Je pense que', translation: 'I think that', pronunciation: 'zhuh pahns kuh' },
          { word: 'Je crois que', translation: 'I believe that', pronunciation: 'zhuh krwah kuh' },
          { word: 'Il me semble que', translation: 'It seems to me that', pronunciation: 'eel muh sahm-bluh kuh' },
          { word: 'À mon avis', translation: 'In my opinion', pronunciation: 'ah mohn ah-VEE' },
          { word: 'Pour moi', translation: 'For me', pronunciation: 'poor mwah' }
        ],
        streetSlang: [
          { word: 'Je pense que...', translation: 'I think that...', pronunciation: 'zhuh pahns kuh' },
          { word: 'Je crois que...', translation: 'I believe that...', pronunciation: 'zhuh krwah kuh' },
          { word: 'Il me semble que...', translation: 'It seems to me that...', pronunciation: 'eel muh sahm-bluh kuh' },
          { word: 'À mon avis...', translation: 'In my opinion...', pronunciation: 'ah mohn ah-VEE' },
          { word: 'Pour moi...', translation: 'For me...', pronunciation: 'poor mwah' },
          { word: 'Je trouve que...', translation: 'I find that...', pronunciation: 'zhuh troov kuh' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Problème', translation: 'Problem', pronunciation: 'proh-BLEM' },
          { word: 'Solution', translation: 'Solution', pronunciation: 'soh-loo-SYOHN' },
          { word: 'Aide', translation: 'Help', pronunciation: 'ed' },
          { word: 'J\'ai besoin', translation: 'I need', pronunciation: 'zhay buh-ZWAN' },
          { word: 'Je peux', translation: 'I can', pronunciation: 'zhuh puh' }
        ],
        streetSlang: [
          { word: 'Avoir un problème', translation: 'To have a problem', pronunciation: 'ah-VWAHR oon proh-BLEM' },
          { word: 'Chercher une solution', translation: 'To look for a solution', pronunciation: 'sher-SHAY oon soh-loo-SYOHN' },
          { word: 'Avoir besoin d\'aide', translation: 'To need help', pronunciation: 'ah-VWAHR buh-ZWAN ded' },
          { word: 'Je peux aider', translation: 'I can help', pronunciation: 'zhuh puh ay-DAY' },
          { word: 'Résoudre un problème', translation: 'To solve a problem', pronunciation: 'ray-ZOOD-ruh oon proh-BLEM' },
          { word: 'Trouver une solution', translation: 'To find a solution', pronunciation: 'troo-VAY oon soh-loo-SYOHN' }
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
          { word: 'Auto', translation: 'Car', pronunciation: 'OW-toh' },
          { word: 'Flugzeug', translation: 'Airplane', pronunciation: 'FLOOG-tsoyk' },
          { word: 'Zug', translation: 'Train', pronunciation: 'tsook' },
          { word: 'Bus', translation: 'Bus', pronunciation: 'boos' },
          { word: 'Fahrrad', translation: 'Bicycle', pronunciation: 'FAHR-raht' }
        ],
        streetSlang: [
          { word: 'Tanken gehen', translation: 'To fill up gas', pronunciation: 'TAHN-ken GAY-en' },
          { word: 'Vollgas geben', translation: 'To go full speed', pronunciation: 'FOHL-gahs GAY-ben' },
          { word: 'Im Stau stehen', translation: 'To be stuck in traffic', pronunciation: 'im shtow SHTAY-en' },
          { word: 'Den Bus nehmen', translation: 'To catch the bus', pronunciation: 'den boos NAY-men' },
          { word: 'Reisen', translation: 'To travel', pronunciation: 'RY-zen' },
          { word: 'Eine Reise machen', translation: 'To take a trip', pronunciation: 'I-neh RY-zeh MAH-khen' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Arbeit', translation: 'Work/Job', pronunciation: 'AHR-bite' },
          { word: 'Büro', translation: 'Office', pronunciation: 'BOO-roh' },
          { word: 'Meeting', translation: 'Meeting', pronunciation: 'MEE-ting' },
          { word: 'Kunde', translation: 'Client', pronunciation: 'KOON-deh' },
          { word: 'Geschäft', translation: 'Business', pronunciation: 'geh-SHEFT' }
        ],
        streetSlang: [
          { word: 'Auf der Arbeit sein', translation: 'To be working', pronunciation: 'owf der AHR-bite zine' },
          { word: 'Viel Arbeit haben', translation: 'To have a lot of work', pronunciation: 'feel AHR-bite HAH-ben' },
          { word: 'Geschäfte machen', translation: 'To do business', pronunciation: 'geh-SHEF-teh MAH-khen' },
          { word: 'Beschäftigt sein', translation: 'To be busy', pronunciation: 'beh-SHEF-tikt zine' },
          { word: 'Hart arbeiten', translation: 'To work hard', pronunciation: 'hart AHR-bite-en' },
          { word: 'Ein Meeting haben', translation: 'To have a meeting', pronunciation: 'ine MEE-ting HAH-ben' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Musik', translation: 'Music', pronunciation: 'moo-ZEEK' },
          { word: 'Sport', translation: 'Sport', pronunciation: 'shport' },
          { word: 'Buch', translation: 'Book', pronunciation: 'bookh' },
          { word: 'Film', translation: 'Movie', pronunciation: 'film' },
          { word: 'Hobby', translation: 'Hobby', pronunciation: 'HOH-bee' }
        ],
        streetSlang: [
          { word: 'Einen Film schauen', translation: 'To watch a movie', pronunciation: 'I-nen film SHOW-en' },
          { word: 'Musik hören', translation: 'To listen to music', pronunciation: 'moo-ZEEK HER-ren' },
          { word: 'Sport treiben', translation: 'To do sports', pronunciation: 'shport TRY-ben' },
          { word: 'Ein Buch lesen', translation: 'To read a book', pronunciation: 'ine bookh LAY-zen' },
          { word: 'Ein Hobby haben', translation: 'To have a hobby', pronunciation: 'ine HOH-bee HAH-ben' },
          { word: 'Zeit verbringen', translation: 'To spend time', pronunciation: 'tsite fer-BRING-en' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Glücklich', translation: 'Happy', pronunciation: 'GLOOK-likh' },
          { word: 'Traurig', translation: 'Sad', pronunciation: 'TROW-rikh' },
          { word: 'Wütend', translation: 'Angry', pronunciation: 'VOO-tent' },
          { word: 'Nervös', translation: 'Nervous', pronunciation: 'nehr-VERS' },
          { word: 'Aufgeregt', translation: 'Excited', pronunciation: 'OWF-geh-rehkt' }
        ],
        streetSlang: [
          { word: 'Glücklich sein', translation: 'To be happy', pronunciation: 'GLOOK-likh zine' },
          { word: 'Traurig sein', translation: 'To be sad', pronunciation: 'TROW-rikh zine' },
          { word: 'Wütend sein', translation: 'To be angry', pronunciation: 'VOO-tent zine' },
          { word: 'Nervös sein', translation: 'To be nervous', pronunciation: 'nehr-VERS zine' },
          { word: 'Aufgeregt sein', translation: 'To be excited', pronunciation: 'OWF-geh-rehkt zine' },
          { word: 'Sich gut fühlen', translation: 'To feel good', pronunciation: 'zikh goot FOO-len' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Links', translation: 'Left', pronunciation: 'links' },
          { word: 'Rechts', translation: 'Right', pronunciation: 'rekhts' },
          { word: 'Geradeaus', translation: 'Straight', pronunciation: 'geh-rah-deh-OWS' },
          { word: 'Nah', translation: 'Near', pronunciation: 'nah' },
          { word: 'Weit', translation: 'Far', pronunciation: 'vite' }
        ],
        streetSlang: [
          { word: 'Links abbiegen', translation: 'To turn left', pronunciation: 'links AHP-bee-gen' },
          { word: 'Rechts abbiegen', translation: 'To turn right', pronunciation: 'rekhts AHP-bee-gen' },
          { word: 'Geradeaus gehen', translation: 'To go straight', pronunciation: 'geh-rah-deh-OWS GAY-en' },
          { word: 'Nah sein', translation: 'To be near', pronunciation: 'nah zine' },
          { word: 'Weit sein', translation: 'To be far', pronunciation: 'vite zine' },
          { word: 'Wo ist...?', translation: 'Where is...?', pronunciation: 'voh ist' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Ich bin gegangen', translation: 'I went', pronunciation: 'ikh bin geh-GAHN-gen' },
          { word: 'Ich habe gemacht', translation: 'I did/made', pronunciation: 'ikh HAH-beh geh-MAHKT' },
          { word: 'Ich habe gesehen', translation: 'I saw', pronunciation: 'ikh HAH-beh geh-ZAY-en' },
          { word: 'Ich habe gegessen', translation: 'I ate', pronunciation: 'ikh HAH-beh geh-GES-sen' },
          { word: 'Ich habe getrunken', translation: 'I drank', pronunciation: 'ikh HAH-beh geh-TROON-ken' }
        ],
        streetSlang: [
          { word: 'Ich bin nach... gegangen', translation: 'I went to...', pronunciation: 'ikh bin nahkh... geh-GAHN-gen' },
          { word: 'Ich habe... gemacht', translation: 'I did/made...', pronunciation: 'ikh HAH-beh... geh-MAHKT' },
          { word: 'Ich habe... gesehen', translation: 'I saw...', pronunciation: 'ikh HAH-beh... geh-ZAY-en' },
          { word: 'Ich habe... gegessen', translation: 'I ate...', pronunciation: 'ikh HAH-beh... geh-GES-sen' },
          { word: 'Ich habe... getrunken', translation: 'I drank...', pronunciation: 'ikh HAH-beh... geh-TROON-ken' },
          { word: 'Gestern', translation: 'Yesterday', pronunciation: 'GES-tern' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Ich werde', translation: 'I\'m going to', pronunciation: 'ikh VEHR-deh' },
          { word: 'Ich werde gehen', translation: 'I\'m going to go', pronunciation: 'ikh VEHR-deh GAY-en' },
          { word: 'Ich werde machen', translation: 'I\'m going to do', pronunciation: 'ikh VEHR-deh MAH-khen' },
          { word: 'Ich werde sehen', translation: 'I\'m going to see', pronunciation: 'ikh VEHR-deh ZAY-en' },
          { word: 'Morgen', translation: 'Tomorrow', pronunciation: 'MOR-gen' }
        ],
        streetSlang: [
          { word: 'Ich werde...', translation: 'I\'m going to...', pronunciation: 'ikh VEHR-deh' },
          { word: 'Ich werde nach... gehen', translation: 'I\'m going to go to...', pronunciation: 'ikh VEHR-deh nahkh... GAY-en' },
          { word: 'Ich werde... machen', translation: 'I\'m going to do...', pronunciation: 'ikh VEHR-deh... MAH-khen' },
          { word: 'Morgen werde ich...', translation: 'Tomorrow I\'m going to...', pronunciation: 'MOR-gen VEHR-deh ikh' },
          { word: 'Ich werde... sehen', translation: 'I\'m going to see...', pronunciation: 'ikh VEHR-deh... ZAY-en' },
          { word: 'Nächstes...', translation: 'Next...', pronunciation: 'NEHKH-stes' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'Was wäre wenn...?', translation: 'What if...?', pronunciation: 'vahs VEH-reh ven' },
          { word: 'Warum gehen wir nicht...?', translation: 'Why don\'t we...?', pronunciation: 'vah-ROOM GAY-en veer nikht' },
          { word: 'Wir sollten', translation: 'We should', pronunciation: 'veer ZOHL-ten' },
          { word: 'Wir könnten', translation: 'We could', pronunciation: 'veer KERN-ten' },
          { word: 'Lass uns', translation: 'Let\'s', pronunciation: 'lahs oons' }
        ],
        streetSlang: [
          { word: 'Was wäre wenn wir gehen?', translation: 'What if we go?', pronunciation: 'vahs VEH-reh ven veer GAY-en' },
          { word: 'Warum gehen wir nicht?', translation: 'Why don\'t we go?', pronunciation: 'vah-ROOM GAY-en veer nikht' },
          { word: 'Wir sollten gehen', translation: 'We should go', pronunciation: 'veer ZOHL-ten GAY-en' },
          { word: 'Wir könnten machen', translation: 'We could do', pronunciation: 'veer KERN-ten MAH-khen' },
          { word: 'Lass uns...', translation: 'Let\'s...', pronunciation: 'lahs oons' },
          { word: 'Ich schlage vor...', translation: 'I suggest...', pronunciation: 'ikh SHLAH-geh for' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Ich denke, dass', translation: 'I think that', pronunciation: 'ikh DEN-keh dahs' },
          { word: 'Ich glaube, dass', translation: 'I believe that', pronunciation: 'ikh GLOW-beh dahs' },
          { word: 'Es scheint mir, dass', translation: 'It seems to me that', pronunciation: 'es shint meer dahs' },
          { word: 'Meiner Meinung nach', translation: 'In my opinion', pronunciation: 'MY-ner MY-noong nahkh' },
          { word: 'Für mich', translation: 'For me', pronunciation: 'foor mikh' }
        ],
        streetSlang: [
          { word: 'Ich denke, dass...', translation: 'I think that...', pronunciation: 'ikh DEN-keh dahs' },
          { word: 'Ich glaube, dass...', translation: 'I believe that...', pronunciation: 'ikh GLOW-beh dahs' },
          { word: 'Es scheint mir, dass...', translation: 'It seems to me that...', pronunciation: 'es shint meer dahs' },
          { word: 'Meiner Meinung nach...', translation: 'In my opinion...', pronunciation: 'MY-ner MY-noong nahkh' },
          { word: 'Für mich...', translation: 'For me...', pronunciation: 'foor mikh' },
          { word: 'Ich finde, dass...', translation: 'I find that...', pronunciation: 'ikh FIN-deh dahs' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Problem', translation: 'Problem', pronunciation: 'proh-BLEM' },
          { word: 'Lösung', translation: 'Solution', pronunciation: 'LER-zoong' },
          { word: 'Hilfe', translation: 'Help', pronunciation: 'HIL-feh' },
          { word: 'Ich brauche', translation: 'I need', pronunciation: 'ikh BROW-kheh' },
          { word: 'Ich kann', translation: 'I can', pronunciation: 'ikh kahn' }
        ],
        streetSlang: [
          { word: 'Ein Problem haben', translation: 'To have a problem', pronunciation: 'ine proh-BLEM HAH-ben' },
          { word: 'Nach einer Lösung suchen', translation: 'To look for a solution', pronunciation: 'nahkh I-ner LER-zoong ZOO-khen' },
          { word: 'Hilfe brauchen', translation: 'To need help', pronunciation: 'HIL-feh BROW-khen' },
          { word: 'Ich kann helfen', translation: 'I can help', pronunciation: 'ikh kahn HEL-fen' },
          { word: 'Ein Problem lösen', translation: 'To solve a problem', pronunciation: 'ine proh-BLEM LER-zen' },
          { word: 'Eine Lösung finden', translation: 'To find a solution', pronunciation: 'I-neh LER-zoong FIN-den' }
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
          { word: '어떻게 지내?', translation: 'How\'s it going?', pronunciation: 'eo-tteo-ke ji-nae', romanji: 'Eotteoke jinae?' },
          { word: '나중에 봐', translation: 'See you later', pronunciation: 'na-jung-e bwa', romanji: 'Najunge bwa' },
          { word: '야', translation: 'Hey (very casual)', pronunciation: 'ya', romanji: 'Ya' },
          { word: '또 봐', translation: 'See you again', pronunciation: 'tto bwa', romanji: 'Tto bwa' },
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
          { word: '엄청나', translation: 'Incredible/huge amount', pronunciation: 'eom-cheong-na', romanji: 'Eomcheongna' },
          { word: '완전 많아', translation: 'So many', pronunciation: 'wan-jeon man-a', romanji: 'Wanjeon mana' },
          { word: '헐', translation: 'OMG/What?!', pronunciation: 'heol', romanji: 'Heol' },
          { word: '진짜?', translation: 'Really?/For real?', pronunciation: 'jin-jja', romanji: 'Jinjja?' },
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
          { word: '헐', translation: 'OMG/No way!', pronunciation: 'heol', romanji: 'Heol' },
          { word: '예쁘다', translation: 'Pretty/beautiful (common reaction)', pronunciation: 'ye-ppeu-da', romanji: 'Yeppeuda' },
          { word: '미쳤다', translation: 'Crazy!/Insane! (positive)', pronunciation: 'mi-chyeot-da', romanji: 'Michyeotda' },
          { word: '완전', translation: 'Totally/Completely', pronunciation: 'wan-jeon', romanji: 'Wanjeon' },
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
          { word: '문제없어', translation: 'No problem', pronunciation: 'mun-je-eop-seo', romanji: 'Munje eopseo' },
          { word: '괜찮아요', translation: 'It\'s okay (polite)', pronunciation: 'gwaen-chan-a-yo', romanji: 'Gwaenchanayo' },
          { word: '괜찮아 괜찮아', translation: 'It\'s fine, it\'s fine (reassuring)', pronunciation: 'gwaen-chan-a gwaen-chan-a', romanji: 'Gwaenchana gwaenchana' },
          { word: '신경 쓰지 마', translation: 'Don\'t worry about it', pronunciation: 'shin-gyeong sseu-ji ma', romanji: 'Singyeong sseuji ma' },
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
          { word: '배고파', translation: 'I\'m hungry', pronunciation: 'bae-go-pa', romanji: 'Baegopa' },
          { word: '맛있게 먹어', translation: 'Enjoy your meal', pronunciation: 'ma-si-kke meo-geo', romanji: 'Masikke meogeo' },
          { word: '맛있게 드세요', translation: 'Enjoy your meal (polite)', pronunciation: 'ma-si-kke deu-se-yo', romanji: 'Masikke deuseyo' },
          { word: '배고파 죽겠어', translation: 'I\'m starving', pronunciation: 'bae-go-pa juk-ge-sseo', romanji: 'Baegopa jukgesseo' },
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
          { word: '동생', translation: 'Younger sibling/friend', pronunciation: 'dong-saeng', romanji: 'Dongsaeng' },
          { word: '친구야', translation: 'Hey friend (casual)', pronunciation: 'chin-gu-ya', romanji: 'Chinguya' },
          { word: '야 형', translation: 'Hey bro', pronunciation: 'ya hyeong', romanji: 'Ya hyeong' },
          { word: '베프', translation: 'BFF (best friend)', pronunciation: 'be-peu', romanji: 'Bepeu' },
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
          { word: '머리가 좋다', translation: 'To be smart (good head)', pronunciation: 'meo-ri-ga jo-ta', romanji: 'Meoriga jota' },
          { word: '입이 무겁다', translation: 'To keep secrets (heavy mouth)', pronunciation: 'ip-i mu-geop-da', romanji: 'Ibi mugeopda' },
          { word: '눈치 빠르다', translation: 'To be quick-witted (fast eyes)', pronunciation: 'nun-chi ppa-reu-da', romanji: 'Nunchi ppareuda' },
          { word: '입이 가볍다', translation: 'To be loose-lipped (light mouth)', pronunciation: 'ip-i ga-byeop-da', romanji: 'Ibi gabyeopda' },
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
          { word: '멋있다', translation: 'Cool/stylish', pronunciation: 'meos-it-da', romanji: 'Meositda' },
          { word: '새처럼 자유롭다', translation: 'Free as a bird', pronunciation: 'sae-cheo-reom ja-yu-rop-da', romanji: 'Saecheoreom jayuropda' },
          { word: '개처럼 피곤하다', translation: 'Tired as a dog', pronunciation: 'gae-cheo-reom pi-gon-ha-da', romanji: 'Gaecheoreom pigonhada' },
          { word: '말처럼 강하다', translation: 'Strong as a horse', pronunciation: 'mal-cheo-reom gang-ha-da', romanji: 'Malcheoreom ganghada' },
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
          { word: '곧', translation: 'Soon', pronunciation: 'got', romanji: 'Got' },
          { word: '바로 지금', translation: 'Right this moment', pronunciation: 'ba-ro ji-geum', romanji: 'Baro jigeum' },
          { word: '지금 당장', translation: 'Right this instant', pronunciation: 'ji-geum dang-jang', romanji: 'Jigeum dangjang' },
          { word: '조금 후에', translation: 'In a little while', pronunciation: 'jo-geum hu-e', romanji: 'Jogeum hue' },
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
          { word: '추워', translation: 'It\'s cold', pronunciation: 'chu-wo', romanji: 'Chuwo' },
          { word: '더워', translation: 'It\'s hot', pronunciation: 'deo-wo', romanji: 'Deowo' },
          { word: '날씨 완전 좋다', translation: 'Weather is totally great', pronunciation: 'nal-ssi wan-jeon jo-ta', romanji: 'Nalssi wanjeon jota' },
          { word: '구름 많다', translation: 'It\'s cloudy', pronunciation: 'gu-reum man-ta', romanji: 'Gureum manta' },
        ]
      },
      {
        id: 11,
        title: 'Transportation & Travel',
        premium: true,
        words: [
          { word: '자동차', translation: 'Car', pronunciation: 'ja-dong-cha', romanji: 'Jadongcha' },
          { word: '비행기', translation: 'Airplane', pronunciation: 'bi-haeng-gi', romanji: 'Bihaenggi' },
          { word: '기차', translation: 'Train', pronunciation: 'gi-cha', romanji: 'Gicha' },
          { word: '버스', translation: 'Bus', pronunciation: 'beo-seu', romanji: 'Beoseu' },
          { word: '자전거', translation: 'Bicycle', pronunciation: 'ja-jeon-geo', romanji: 'Jajeongeo' }
        ],
        streetSlang: [
          { word: '주유소 가다', translation: 'To fill up gas', pronunciation: 'ju-yu-so ga-da', romanji: 'Juyuso gada' },
          { word: '전속력으로 가다', translation: 'To go full speed', pronunciation: 'jeon-sok-ryeok-eu-ro ga-da', romanji: 'Jeonsokryeokeuro gada' },
          { word: '교통 체증에 갇히다', translation: 'To be stuck in traffic', pronunciation: 'gyo-tong che-jeung-e gat-hi-da', romanji: 'Gyotong chejeunge gathida' },
          { word: '버스 타다', translation: 'To catch the bus', pronunciation: 'beo-seu ta-da', romanji: 'Beoseu tada' },
          { word: '여행하다', translation: 'To travel', pronunciation: 'yeo-haeng-ha-da', romanji: 'Yeohaenghada' },
          { word: '여행 가다', translation: 'To take a trip', pronunciation: 'yeo-haeng ga-da', romanji: 'Yeohaeng gada' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: '일', translation: 'Work/Job', pronunciation: 'il', romanji: 'Il' },
          { word: '사무실', translation: 'Office', pronunciation: 'sa-mu-sil', romanji: 'Samusil' },
          { word: '회의', translation: 'Meeting', pronunciation: 'hoe-ui', romanji: 'Hoeui' },
          { word: '고객', translation: 'Client', pronunciation: 'go-gaek', romanji: 'Gogaek' },
          { word: '사업', translation: 'Business', pronunciation: 'sa-eop', romanji: 'Saeop' }
        ],
        streetSlang: [
          { word: '일하는 중', translation: 'To be working', pronunciation: 'il-ha-neun jung', romanji: 'Ilhaneun jung' },
          { word: '일 많다', translation: 'To have a lot of work', pronunciation: 'il man-ta', romanji: 'Il manta' },
          { word: '사업하다', translation: 'To do business', pronunciation: 'sa-eop-ha-da', romanji: 'Saeophada' },
          { word: '바쁘다', translation: 'To be busy', pronunciation: 'ba-ppeu-da', romanji: 'Bappeuda' },
          { word: '열심히 일하다', translation: 'To work hard', pronunciation: 'yeol-sim-hi il-ha-da', romanji: 'Yeolsimhi ilhada' },
          { word: '회의 있다', translation: 'To have a meeting', pronunciation: 'hoe-ui it-da', romanji: 'Hoeui itda' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: '음악', translation: 'Music', pronunciation: 'eum-ak', romanji: 'Eumak' },
          { word: '운동', translation: 'Sport', pronunciation: 'un-dong', romanji: 'Undong' },
          { word: '책', translation: 'Book', pronunciation: 'chaek', romanji: 'Chaek' },
          { word: '영화', translation: 'Movie', pronunciation: 'yeong-hwa', romanji: 'Yeonghwa' },
          { word: '취미', translation: 'Hobby', pronunciation: 'chwi-mi', romanji: 'Chwimi' }
        ],
        streetSlang: [
          { word: '영화 보다', translation: 'To watch a movie', pronunciation: 'yeong-hwa bo-da', romanji: 'Yeonghwa boda' },
          { word: '음악 듣다', translation: 'To listen to music', pronunciation: 'eum-ak deut-da', romanji: 'Eumak deutda' },
          { word: '운동하다', translation: 'To do sports', pronunciation: 'un-dong-ha-da', romanji: 'Undonghada' },
          { word: '책 읽다', translation: 'To read a book', pronunciation: 'chaek ilk-da', romanji: 'Chaek ilkda' },
          { word: '취미 있다', translation: 'To have a hobby', pronunciation: 'chwi-mi it-da', romanji: 'Chwimi itda' },
          { word: '시간 보내다', translation: 'To spend time', pronunciation: 'si-gan bo-nae-da', romanji: 'Sigan bonaeda' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: '행복하다', translation: 'Happy', pronunciation: 'haeng-bok-ha-da', romanji: 'Haengbokhada' },
          { word: '슬프다', translation: 'Sad', pronunciation: 'seul-peu-da', romanji: 'Seulpeuda' },
          { word: '화나다', translation: 'Angry', pronunciation: 'hwa-na-da', romanji: 'Hwanada' },
          { word: '긴장하다', translation: 'Nervous', pronunciation: 'gin-jang-ha-da', romanji: 'Ginjanghada' },
          { word: '신나다', translation: 'Excited', pronunciation: 'sin-na-da', romanji: 'Sinnada' }
        ],
        streetSlang: [
          { word: '행복해', translation: 'To be happy', pronunciation: 'haeng-bok-hae', romanji: 'Haengbokhae' },
          { word: '슬퍼', translation: 'To be sad', pronunciation: 'seul-peo', romanji: 'Seulpeo' },
          { word: '화나', translation: 'To be angry', pronunciation: 'hwa-na', romanji: 'Hwana' },
          { word: '긴장돼', translation: 'To be nervous', pronunciation: 'gin-jang-dwae', romanji: 'Ginjangdwae' },
          { word: '신나', translation: 'To be excited', pronunciation: 'sin-na', romanji: 'Sinna' },
          { word: '기분 좋다', translation: 'To feel good', pronunciation: 'gi-bun jo-ta', romanji: 'Gibun jota' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: '왼쪽', translation: 'Left', pronunciation: 'oen-jjok', romanji: 'Oenjjok' },
          { word: '오른쪽', translation: 'Right', pronunciation: 'o-reun-jjok', romanji: 'Oreunjjok' },
          { word: '직진', translation: 'Straight', pronunciation: 'jik-jin', romanji: 'Jikjin' },
          { word: '가까이', translation: 'Near', pronunciation: 'ga-kka-i', romanji: 'Gakkai' },
          { word: '멀리', translation: 'Far', pronunciation: 'meol-li', romanji: 'Meolli' }
        ],
        streetSlang: [
          { word: '왼쪽으로 가다', translation: 'To turn left', pronunciation: 'oen-jjok-eu-ro ga-da', romanji: 'Oenjjokeuro gada' },
          { word: '오른쪽으로 가다', translation: 'To turn right', pronunciation: 'o-reun-jjok-eu-ro ga-da', romanji: 'Oreunjjokeuro gada' },
          { word: '직진하다', translation: 'To go straight', pronunciation: 'jik-jin-ha-da', romanji: 'Jikjinhada' },
          { word: '가까이 있다', translation: 'To be near', pronunciation: 'ga-kka-i it-da', romanji: 'Gakkai itda' },
          { word: '멀리 있다', translation: 'To be far', pronunciation: 'meol-li it-da', romanji: 'Meolli itda' },
          { word: '어디 있어?', translation: 'Where is...?', pronunciation: 'eo-di it-eo', romanji: 'Eodi iteo?' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: '갔다', translation: 'I went', pronunciation: 'gat-da', romanji: 'Gatda' },
          { word: '했다', translation: 'I did/made', pronunciation: 'haet-da', romanji: 'Haetda' },
          { word: '봤다', translation: 'I saw', pronunciation: 'bwat-da', romanji: 'Bwatda' },
          { word: '먹었다', translation: 'I ate', pronunciation: 'meok-eot-da', romanji: 'Meokeotda' },
          { word: '마셨다', translation: 'I drank', pronunciation: 'ma-syeot-da', romanji: 'Masyeotda' }
        ],
        streetSlang: [
          { word: '...에 갔다', translation: 'I went to...', pronunciation: '...e gat-da', romanji: '...e gatda' },
          { word: '...했다', translation: 'I did/made...', pronunciation: '...haet-da', romanji: '...haetda' },
          { word: '...봤다', translation: 'I saw...', pronunciation: '...bwat-da', romanji: '...bwatda' },
          { word: '...먹었다', translation: 'I ate...', pronunciation: '...meok-eot-da', romanji: '...meokeotda' },
          { word: '...마셨다', translation: 'I drank...', pronunciation: '...ma-syeot-da', romanji: '...masyeotda' },
          { word: '어제', translation: 'Yesterday', pronunciation: 'eo-je', romanji: 'Eoje' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: '갈 거야', translation: 'I\'m going to', pronunciation: 'gal geo-ya', romanji: 'Gal geoya' },
          { word: '갈 거야', translation: 'I\'m going to go', pronunciation: 'gal geo-ya', romanji: 'Gal geoya' },
          { word: '할 거야', translation: 'I\'m going to do', pronunciation: 'hal geo-ya', romanji: 'Hal geoya' },
          { word: '볼 거야', translation: 'I\'m going to see', pronunciation: 'bol geo-ya', romanji: 'Bol geoya' },
          { word: '내일', translation: 'Tomorrow', pronunciation: 'nae-il', romanji: 'Naeil' }
        ],
        streetSlang: [
          { word: '...할 거야', translation: 'I\'m going to...', pronunciation: '...hal geo-ya', romanji: '...hal geoya' },
          { word: '...에 갈 거야', translation: 'I\'m going to go to...', pronunciation: '...e gal geo-ya', romanji: '...e gal geoya' },
          { word: '...할 거야', translation: 'I\'m going to do...', pronunciation: '...hal geo-ya', romanji: '...hal geoya' },
          { word: '내일 ...할 거야', translation: 'Tomorrow I\'m going to...', pronunciation: 'nae-il ...hal geo-ya', romanji: 'Naeil ...hal geoya' },
          { word: '...볼 거야', translation: 'I\'m going to see...', pronunciation: '...bol geo-ya', romanji: '...bol geoya' },
          { word: '다음...', translation: 'Next...', pronunciation: 'da-eum', romanji: 'Daeum' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '...하면 어때?', translation: 'What if...?', pronunciation: '...ha-myeon eo-ttae', romanji: '...hamyeon eottae?' },
          { word: '...가는 게 어때?', translation: 'Why don\'t we...?', pronunciation: '...ga-neun ge eo-ttae', romanji: '...ganeun ge eottae?' },
          { word: '해야 해', translation: 'We should', pronunciation: 'hae-ya hae', romanji: 'Haeya hae' },
          { word: '할 수 있어', translation: 'We could', pronunciation: 'hal su it-eo', romanji: 'Hal su iteo' },
          { word: '가자', translation: 'Let\'s', pronunciation: 'ga-ja', romanji: 'Gaja' }
        ],
        streetSlang: [
          { word: '가면 어때?', translation: 'What if we go?', pronunciation: 'ga-myeon eo-ttae', romanji: 'Gamyeon eottae?' },
          { word: '가는 게 어때?', translation: 'Why don\'t we go?', pronunciation: 'ga-neun ge eo-ttae', romanji: 'Ganeun ge eottae?' },
          { word: '가야 해', translation: 'We should go', pronunciation: 'ga-ya hae', romanji: 'Gaya hae' },
          { word: '할 수 있어', translation: 'We could do', pronunciation: 'hal su it-eo', romanji: 'Hal su iteo' },
          { word: '...하자', translation: 'Let\'s...', pronunciation: '...ha-ja', romanji: '...haja' },
          { word: '제안해', translation: 'I suggest...', pronunciation: 'je-an-hae', romanji: 'Jeanhae' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: '생각해', translation: 'I think that', pronunciation: 'saeng-gak-hae', romanji: 'Saenggakhae' },
          { word: '믿어', translation: 'I believe that', pronunciation: 'mid-eo', romanji: 'Mideo' },
          { word: '...인 것 같아', translation: 'It seems to me that', pronunciation: '...in geot ga-ta', romanji: '...in geot gata' },
          { word: '내 의견으로는', translation: 'In my opinion', pronunciation: 'nae ui-gyeon-eu-ro-neun', romanji: 'Nae uigyeoneuroneun' },
          { word: '나에게는', translation: 'For me', pronunciation: 'na-e-ge-neun', romanji: 'Naegeneun' }
        ],
        streetSlang: [
          { word: '...생각해', translation: 'I think that...', pronunciation: '...saeng-gak-hae', romanji: '...saenggakhae' },
          { word: '...믿어', translation: 'I believe that...', pronunciation: '...mid-eo', romanji: '...mideo' },
          { word: '...인 것 같아', translation: 'It seems to me that...', pronunciation: '...in geot ga-ta', romanji: '...in geot gata' },
          { word: '내 의견으로는...', translation: 'In my opinion...', pronunciation: 'nae ui-gyeon-eu-ro-neun', romanji: 'Nae uigyeoneuroneun' },
          { word: '나에게는...', translation: 'For me...', pronunciation: 'na-e-ge-neun', romanji: 'Naegeneun' },
          { word: '...찾아', translation: 'I find that...', pronunciation: '...chat-a', romanji: '...chata' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '문제', translation: 'Problem', pronunciation: 'mun-je', romanji: 'Munje' },
          { word: '해결책', translation: 'Solution', pronunciation: 'hae-gyeol-chaek', romanji: 'Haegyeolchaek' },
          { word: '도움', translation: 'Help', pronunciation: 'do-um', romanji: 'Doum' },
          { word: '필요해', translation: 'I need', pronunciation: 'pil-yo-hae', romanji: 'Pillyohae' },
          { word: '할 수 있어', translation: 'I can', pronunciation: 'hal su it-eo', romanji: 'Hal su iteo' }
        ],
        streetSlang: [
          { word: '문제 있다', translation: 'To have a problem', pronunciation: 'mun-je it-da', romanji: 'Munje itda' },
          { word: '해결책 찾다', translation: 'To look for a solution', pronunciation: 'hae-gyeol-chaek chat-da', romanji: 'Haegyeolchaek chatda' },
          { word: '도움 필요해', translation: 'To need help', pronunciation: 'do-um pil-yo-hae', romanji: 'Doum pillyohae' },
          { word: '도와줄 수 있어', translation: 'I can help', pronunciation: 'do-wa-jul su it-eo', romanji: 'Dowajul su iteo' },
          { word: '문제 해결하다', translation: 'To solve a problem', pronunciation: 'mun-je hae-gyeol-ha-da', romanji: 'Munje haegyeolhada' },
          { word: '해결책 찾다', translation: 'To find a solution', pronunciation: 'hae-gyeol-chaek chat-da', romanji: 'Haegyeolchaek chatda' }
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
          { word: 'Carro', translation: 'Car', pronunciation: 'KAH-roh' },
          { word: 'Avião', translation: 'Airplane', pronunciation: 'ah-vee-AOWN' },
          { word: 'Trem', translation: 'Train', pronunciation: 'trem' },
          { word: 'Ônibus', translation: 'Bus', pronunciation: 'OH-nee-boos' },
          { word: 'Bicicleta', translation: 'Bicycle', pronunciation: 'bee-see-KLEH-tah' }
        ],
        streetSlang: [
          { word: 'Abastecer', translation: 'To fill up gas', pronunciation: 'ah-bahs-teh-SEHR' },
          { word: 'A toda velocidade', translation: 'To go full speed', pronunciation: 'ah TOH-dah veh-loh-see-DAH-deh' },
          { word: 'Preso no trânsito', translation: 'To be stuck in traffic', pronunciation: 'PREH-zoh noh TRAHN-see-toh' },
          { word: 'Pegar o ônibus', translation: 'To catch the bus', pronunciation: 'peh-GAHR oh OH-nee-boos' },
          { word: 'Viajar', translation: 'To travel', pronunciation: 'vee-ah-ZHAHR' },
          { word: 'Fazer uma viagem', translation: 'To take a trip', pronunciation: 'fah-ZEHR OO-mah vee-AH-zhem' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Trabalho', translation: 'Work/Job', pronunciation: 'trah-BAH-lyoh' },
          { word: 'Escritório', translation: 'Office', pronunciation: 'es-kree-TOH-ree-oh' },
          { word: 'Reunião', translation: 'Meeting', pronunciation: 'reh-oo-NYAOWN' },
          { word: 'Cliente', translation: 'Client', pronunciation: 'klee-EN-teh' },
          { word: 'Negócio', translation: 'Business', pronunciation: 'neh-GOH-see-oh' }
        ],
        streetSlang: [
          { word: 'Estar trabalhando', translation: 'To be working', pronunciation: 'es-TAR trah-bah-LYAHN-doh' },
          { word: 'Ter muito trabalho', translation: 'To have a lot of work', pronunciation: 'tehr MOO-ee-toh trah-BAH-lyoh' },
          { word: 'Fazer negócios', translation: 'To do business', pronunciation: 'fah-ZEHR neh-GOH-see-ohs' },
          { word: 'Estar ocupado', translation: 'To be busy', pronunciation: 'es-TAR oh-koo-PAH-doh' },
          { word: 'Trabalhar duro', translation: 'To work hard', pronunciation: 'trah-bah-LYAHR DOO-roh' },
          { word: 'Ter uma reunião', translation: 'To have a meeting', pronunciation: 'tehr OO-mah reh-oo-NYAOWN' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Música', translation: 'Music', pronunciation: 'MOO-see-kah' },
          { word: 'Esporte', translation: 'Sport', pronunciation: 'es-POR-teh' },
          { word: 'Livro', translation: 'Book', pronunciation: 'LEE-vroh' },
          { word: 'Filme', translation: 'Movie', pronunciation: 'FEEL-meh' },
          { word: 'Hobby', translation: 'Hobby', pronunciation: 'HOH-bee' }
        ],
        streetSlang: [
          { word: 'Assistir um filme', translation: 'To watch a movie', pronunciation: 'ah-sees-TEER oon FEEL-meh' },
          { word: 'Ouvir música', translation: 'To listen to music', pronunciation: 'oh-VEER MOO-see-kah' },
          { word: 'Praticar esporte', translation: 'To do sports', pronunciation: 'prah-tee-KAHR es-POR-teh' },
          { word: 'Ler um livro', translation: 'To read a book', pronunciation: 'lehr oon LEE-vroh' },
          { word: 'Ter um hobby', translation: 'To have a hobby', pronunciation: 'tehr oon HOH-bee' },
          { word: 'Passar o tempo', translation: 'To spend time', pronunciation: 'pah-SAR oh TEM-poh' }
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
          { word: 'Nervoso', translation: 'Nervous', pronunciation: 'nehr-VOH-zoh' },
          { word: 'Animado', translation: 'Excited', pronunciation: 'ah-nee-MAH-doh' }
        ],
        streetSlang: [
          { word: 'Estar feliz', translation: 'To be happy', pronunciation: 'es-TAR feh-LEES' },
          { word: 'Estar triste', translation: 'To be sad', pronunciation: 'es-TAR TREES-teh' },
          { word: 'Estar bravo', translation: 'To be angry', pronunciation: 'es-TAR BRAH-voh' },
          { word: 'Estar nervoso', translation: 'To be nervous', pronunciation: 'es-TAR nehr-VOH-zoh' },
          { word: 'Estar animado', translation: 'To be excited', pronunciation: 'es-TAR ah-nee-MAH-doh' },
          { word: 'Se sentir bem', translation: 'To feel good', pronunciation: 'seh sen-TEER behm' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Esquerda', translation: 'Left', pronunciation: 'es-KEHR-dah' },
          { word: 'Direita', translation: 'Right', pronunciation: 'dee-RAY-tah' },
          { word: 'Em frente', translation: 'Straight', pronunciation: 'em FREN-teh' },
          { word: 'Perto', translation: 'Near', pronunciation: 'PEHR-toh' },
          { word: 'Longe', translation: 'Far', pronunciation: 'LOHN-zheh' }
        ],
        streetSlang: [
          { word: 'Virar à esquerda', translation: 'To turn left', pronunciation: 'vee-RAHR ah es-KEHR-dah' },
          { word: 'Virar à direita', translation: 'To turn right', pronunciation: 'vee-RAHR ah dee-RAY-tah' },
          { word: 'Seguir em frente', translation: 'To go straight', pronunciation: 'seh-GEER em FREN-teh' },
          { word: 'Estar perto', translation: 'To be near', pronunciation: 'es-TAR PEHR-toh' },
          { word: 'Estar longe', translation: 'To be far', pronunciation: 'es-TAR LOHN-zheh' },
          { word: 'Onde fica...?', translation: 'Where is...?', pronunciation: 'OHN-deh FEE-kah' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Fui', translation: 'I went', pronunciation: 'fwee' },
          { word: 'Fiz', translation: 'I did/made', pronunciation: 'fees' },
          { word: 'Vi', translation: 'I saw', pronunciation: 'vee' },
          { word: 'Comi', translation: 'I ate', pronunciation: 'koh-MEE' },
          { word: 'Bebi', translation: 'I drank', pronunciation: 'beh-BEE' }
        ],
        streetSlang: [
          { word: 'Fui para...', translation: 'I went to...', pronunciation: 'fwee PAH-rah' },
          { word: 'Fiz...', translation: 'I did/made...', pronunciation: 'fees' },
          { word: 'Vi...', translation: 'I saw...', pronunciation: 'vee' },
          { word: 'Comi...', translation: 'I ate...', pronunciation: 'koh-MEE' },
          { word: 'Bebi...', translation: 'I drank...', pronunciation: 'beh-BEE' },
          { word: 'Ontem', translation: 'Yesterday', pronunciation: 'OHN-tem' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Vou', translation: 'I\'m going to', pronunciation: 'voh' },
          { word: 'Vou ir', translation: 'I\'m going to go', pronunciation: 'voh eer' },
          { word: 'Vou fazer', translation: 'I\'m going to do', pronunciation: 'voh fah-ZEHR' },
          { word: 'Vou ver', translation: 'I\'m going to see', pronunciation: 'voh vehr' },
          { word: 'Amanhã', translation: 'Tomorrow', pronunciation: 'ah-mahn-YAHN' }
        ],
        streetSlang: [
          { word: 'Vou...', translation: 'I\'m going to...', pronunciation: 'voh' },
          { word: 'Vou para...', translation: 'I\'m going to go to...', pronunciation: 'voh PAH-rah' },
          { word: 'Vou fazer...', translation: 'I\'m going to do...', pronunciation: 'voh fah-ZEHR' },
          { word: 'Amanhã vou...', translation: 'Tomorrow I\'m going to...', pronunciation: 'ah-mahn-YAHN voh' },
          { word: 'Vou ver...', translation: 'I\'m going to see...', pronunciation: 'voh vehr' },
          { word: 'Próximo...', translation: 'Next...', pronunciation: 'PROHK-see-moh' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'E se...?', translation: 'What if...?', pronunciation: 'eh seh' },
          { word: 'Por que não...?', translation: 'Why don\'t we...?', pronunciation: 'por keh now' },
          { word: 'Devemos', translation: 'We should', pronunciation: 'deh-VEH-mohs' },
          { word: 'Podemos', translation: 'We could', pronunciation: 'poh-DEH-mohs' },
          { word: 'Vamos', translation: 'Let\'s', pronunciation: 'VAH-mohs' }
        ],
        streetSlang: [
          { word: 'E se formos?', translation: 'What if we go?', pronunciation: 'eh seh FOHR-mohs' },
          { word: 'Por que não vamos?', translation: 'Why don\'t we go?', pronunciation: 'por keh now VAH-mohs' },
          { word: 'Devemos ir', translation: 'We should go', pronunciation: 'deh-VEH-mohs eer' },
          { word: 'Podemos fazer', translation: 'We could do', pronunciation: 'poh-DEH-mohs fah-ZEHR' },
          { word: 'Vamos...', translation: 'Let\'s...', pronunciation: 'VAH-mohs' },
          { word: 'Sugiro...', translation: 'I suggest...', pronunciation: 'soo-ZHEE-roh' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Acho que', translation: 'I think that', pronunciation: 'AH-shoh keh' },
          { word: 'Creio que', translation: 'I believe that', pronunciation: 'KRAY-oh keh' },
          { word: 'Parece-me que', translation: 'It seems to me that', pronunciation: 'pah-REH-seh-meh keh' },
          { word: 'Na minha opinião', translation: 'In my opinion', pronunciation: 'nah MEE-nyah oh-pee-NYAOWN' },
          { word: 'Para mim', translation: 'For me', pronunciation: 'pah-rah meem' }
        ],
        streetSlang: [
          { word: 'Acho que...', translation: 'I think that...', pronunciation: 'AH-shoh keh' },
          { word: 'Creio que...', translation: 'I believe that...', pronunciation: 'KRAY-oh keh' },
          { word: 'Parece-me que...', translation: 'It seems to me that...', pronunciation: 'pah-REH-seh-meh keh' },
          { word: 'Na minha opinião...', translation: 'In my opinion...', pronunciation: 'nah MEE-nyah oh-pee-NYAOWN' },
          { word: 'Para mim...', translation: 'For me...', pronunciation: 'pah-rah meem' },
          { word: 'Acho...', translation: 'I find that...', pronunciation: 'AH-shoh' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Problema', translation: 'Problem', pronunciation: 'proh-BLEH-mah' },
          { word: 'Solução', translation: 'Solution', pronunciation: 'soh-loo-SYAOWN' },
          { word: 'Ajuda', translation: 'Help', pronunciation: 'ah-ZHOO-dah' },
          { word: 'Preciso', translation: 'I need', pronunciation: 'preh-SEE-zoh' },
          { word: 'Posso', translation: 'I can', pronunciation: 'POH-soh' }
        ],
        streetSlang: [
          { word: 'Ter um problema', translation: 'To have a problem', pronunciation: 'tehr oon proh-BLEH-mah' },
          { word: 'Procurar uma solução', translation: 'To look for a solution', pronunciation: 'proh-koo-RAHR OO-mah soh-loo-SYAOWN' },
          { word: 'Precisar de ajuda', translation: 'To need help', pronunciation: 'preh-see-ZAHR deh ah-ZHOO-dah' },
          { word: 'Posso ajudar', translation: 'I can help', pronunciation: 'POH-soh ah-zhoo-DAHR' },
          { word: 'Resolver um problema', translation: 'To solve a problem', pronunciation: 'reh-zohl-VEHR oon proh-BLEH-mah' },
          { word: 'Encontrar uma solução', translation: 'To find a solution', pronunciation: 'en-kohn-TRAHR OO-mah soh-loo-SYAOWN' }
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
          { word: '車', translation: 'Car', pronunciation: 'ku-ru-ma', romanji: 'Kuruma' },
          { word: '飛行機', translation: 'Airplane', pronunciation: 'hi-kou-ki', romanji: 'Hikouki' },
          { word: '電車', translation: 'Train', pronunciation: 'den-sha', romanji: 'Densha' },
          { word: 'バス', translation: 'Bus', pronunciation: 'ba-su', romanji: 'Basu' },
          { word: '自転車', translation: 'Bicycle', pronunciation: 'ji-ten-sha', romanji: 'Jitensha' }
        ],
        streetSlang: [
          { word: 'ガソリンを入れる', translation: 'To fill up gas', pronunciation: 'ga-so-rin wo i-re-ru', romanji: 'Gasorin wo ireru' },
          { word: '全速力で行く', translation: 'To go full speed', pronunciation: 'zen-so-ku-ryo-ku de i-ku', romanji: 'Zensokuryoku de iku' },
          { word: '渋滞に巻き込まれる', translation: 'To be stuck in traffic', pronunciation: 'juu-tai ni ma-ki-ko-ma-re-ru', romanji: 'Juutai ni makikomareru' },
          { word: 'バスに乗る', translation: 'To catch the bus', pronunciation: 'ba-su ni no-ru', romanji: 'Basu ni noru' },
          { word: '旅行する', translation: 'To travel', pronunciation: 'ryo-kou su-ru', romanji: 'Ryoukou suru' },
          { word: '旅行に行く', translation: 'To take a trip', pronunciation: 'ryo-kou ni i-ku', romanji: 'Ryoukou ni iku' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: '仕事', translation: 'Work/Job', pronunciation: 'shi-go-to', romanji: 'Shigoto' },
          { word: 'オフィス', translation: 'Office', pronunciation: 'o-fi-su', romanji: 'Ofisu' },
          { word: '会議', translation: 'Meeting', pronunciation: 'kai-gi', romanji: 'Kaigi' },
          { word: '顧客', translation: 'Client', pronunciation: 'ko-kyaku', romanji: 'Kokyaku' },
          { word: 'ビジネス', translation: 'Business', pronunciation: 'bi-ji-ne-su', romanji: 'Bijinesu' }
        ],
        streetSlang: [
          { word: '仕事中', translation: 'To be working', pronunciation: 'shi-go-to-chuu', romanji: 'Shigotochuu' },
          { word: '仕事が多い', translation: 'To have a lot of work', pronunciation: 'shi-go-to ga o-o-i', romanji: 'Shigoto ga ooi' },
          { word: 'ビジネスをする', translation: 'To do business', pronunciation: 'bi-ji-ne-su wo su-ru', romanji: 'Bijinesu wo suru' },
          { word: '忙しい', translation: 'To be busy', pronunciation: 'i-so-ga-shi-i', romanji: 'Isogashii' },
          { word: '一生懸命働く', translation: 'To work hard', pronunciation: 'is-shou-ken-mei ha-ta-ra-ku', romanji: 'Isshoukenmei hataraku' },
          { word: '会議がある', translation: 'To have a meeting', pronunciation: 'kai-gi ga a-ru', romanji: 'Kaigi ga aru' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: '音楽', translation: 'Music', pronunciation: 'on-ga-ku', romanji: 'Ongaku' },
          { word: 'スポーツ', translation: 'Sport', pronunciation: 'su-po-tsu', romanji: 'Supootsu' },
          { word: '本', translation: 'Book', pronunciation: 'hon', romanji: 'Hon' },
          { word: '映画', translation: 'Movie', pronunciation: 'ei-ga', romanji: 'Eiga' },
          { word: '趣味', translation: 'Hobby', pronunciation: 'shu-mi', romanji: 'Shumi' }
        ],
        streetSlang: [
          { word: '映画を見る', translation: 'To watch a movie', pronunciation: 'ei-ga wo mi-ru', romanji: 'Eiga wo miru' },
          { word: '音楽を聞く', translation: 'To listen to music', pronunciation: 'on-ga-ku wo ki-ku', romanji: 'Ongaku wo kiku' },
          { word: 'スポーツをする', translation: 'To do sports', pronunciation: 'su-po-tsu wo su-ru', romanji: 'Supootsu wo suru' },
          { word: '本を読む', translation: 'To read a book', pronunciation: 'hon wo yo-mu', romanji: 'Hon wo yomu' },
          { word: '趣味がある', translation: 'To have a hobby', pronunciation: 'shu-mi ga a-ru', romanji: 'Shumi ga aru' },
          { word: '時間を過ごす', translation: 'To spend time', pronunciation: 'ji-kan wo su-go-su', romanji: 'Jikan wo sugosu' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: '幸せ', translation: 'Happy', pronunciation: 'shi-a-wa-se', romanji: 'Shiawase' },
          { word: '悲しい', translation: 'Sad', pronunciation: 'ka-na-shi-i', romanji: 'Kanashii' },
          { word: '怒っている', translation: 'Angry', pronunciation: 'o-ko-tte i-ru', romanji: 'Okotte iru' },
          { word: '緊張している', translation: 'Nervous', pronunciation: 'kin-chou shi-te i-ru', romanji: 'Kinchou shite iru' },
          { word: '興奮している', translation: 'Excited', pronunciation: 'kou-fun shi-te i-ru', romanji: 'Koufun shite iru' }
        ],
        streetSlang: [
          { word: '幸せ', translation: 'To be happy', pronunciation: 'shi-a-wa-se', romanji: 'Shiawase' },
          { word: '悲しい', translation: 'To be sad', pronunciation: 'ka-na-shi-i', romanji: 'Kanashii' },
          { word: '怒っている', translation: 'To be angry', pronunciation: 'o-ko-tte i-ru', romanji: 'Okotte iru' },
          { word: '緊張している', translation: 'To be nervous', pronunciation: 'kin-chou shi-te i-ru', romanji: 'Kinchou shite iru' },
          { word: '興奮している', translation: 'To be excited', pronunciation: 'kou-fun shi-te i-ru', romanji: 'Koufun shite iru' },
          { word: '気分がいい', translation: 'To feel good', pronunciation: 'ki-bun ga i-i', romanji: 'Kibun ga ii' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: '左', translation: 'Left', pronunciation: 'hi-da-ri', romanji: 'Hidari' },
          { word: '右', translation: 'Right', pronunciation: 'mi-gi', romanji: 'Migi' },
          { word: 'まっすぐ', translation: 'Straight', pronunciation: 'mas-su-gu', romanji: 'Massugu' },
          { word: '近い', translation: 'Near', pronunciation: 'chi-ka-i', romanji: 'Chikai' },
          { word: '遠い', translation: 'Far', pronunciation: 'to-o-i', romanji: 'Tooi' }
        ],
        streetSlang: [
          { word: '左に曲がる', translation: 'To turn left', pronunciation: 'hi-da-ri ni ma-ga-ru', romanji: 'Hidari ni magaru' },
          { word: '右に曲がる', translation: 'To turn right', pronunciation: 'mi-gi ni ma-ga-ru', romanji: 'Migi ni magaru' },
          { word: 'まっすぐ行く', translation: 'To go straight', pronunciation: 'mas-su-gu i-ku', romanji: 'Massugu iku' },
          { word: '近い', translation: 'To be near', pronunciation: 'chi-ka-i', romanji: 'Chikai' },
          { word: '遠い', translation: 'To be far', pronunciation: 'to-o-i', romanji: 'Tooi' },
          { word: '...はどこですか?', translation: 'Where is...?', pronunciation: '...wa do-ko desu ka', romanji: '...wa doko desu ka?' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: '行った', translation: 'I went', pronunciation: 'it-ta', romanji: 'Itta' },
          { word: 'した', translation: 'I did/made', pronunciation: 'shi-ta', romanji: 'Shita' },
          { word: '見た', translation: 'I saw', pronunciation: 'mi-ta', romanji: 'Mita' },
          { word: '食べた', translation: 'I ate', pronunciation: 'ta-be-ta', romanji: 'Tabeta' },
          { word: '飲んだ', translation: 'I drank', pronunciation: 'non-da', romanji: 'Nonda' }
        ],
        streetSlang: [
          { word: '...に行った', translation: 'I went to...', pronunciation: '...ni it-ta', romanji: '...ni itta' },
          { word: '...した', translation: 'I did/made...', pronunciation: '...shi-ta', romanji: '...shita' },
          { word: '...見た', translation: 'I saw...', pronunciation: '...mi-ta', romanji: '...mita' },
          { word: '...食べた', translation: 'I ate...', pronunciation: '...ta-be-ta', romanji: '...tabeta' },
          { word: '...飲んだ', translation: 'I drank...', pronunciation: '...non-da', romanji: '...nonda' },
          { word: '昨日', translation: 'Yesterday', pronunciation: 'ki-nou', romanji: 'Kinou' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'するつもり', translation: 'I\'m going to', pronunciation: 'su-ru tsu-mo-ri', romanji: 'Suru tsumori' },
          { word: '行くつもり', translation: 'I\'m going to go', pronunciation: 'i-ku tsu-mo-ri', romanji: 'Iku tsumori' },
          { word: 'するつもり', translation: 'I\'m going to do', pronunciation: 'su-ru tsu-mo-ri', romanji: 'Suru tsumori' },
          { word: '見るつもり', translation: 'I\'m going to see', pronunciation: 'mi-ru tsu-mo-ri', romanji: 'Miru tsumori' },
          { word: '明日', translation: 'Tomorrow', pronunciation: 'a-shi-ta', romanji: 'Ashita' }
        ],
        streetSlang: [
          { word: '...するつもり', translation: 'I\'m going to...', pronunciation: '...su-ru tsu-mo-ri', romanji: '...suru tsumori' },
          { word: '...に行くつもり', translation: 'I\'m going to go to...', pronunciation: '...ni i-ku tsu-mo-ri', romanji: '...ni iku tsumori' },
          { word: '...するつもり', translation: 'I\'m going to do...', pronunciation: '...su-ru tsu-mo-ri', romanji: '...suru tsumori' },
          { word: '明日...するつもり', translation: 'Tomorrow I\'m going to...', pronunciation: 'a-shi-ta ...su-ru tsu-mo-ri', romanji: 'Ashita ...suru tsumori' },
          { word: '...見るつもり', translation: 'I\'m going to see...', pronunciation: '...mi-ru tsu-mo-ri', romanji: '...miru tsumori' },
          { word: '次の...', translation: 'Next...', pronunciation: 'tsu-gi no', romanji: 'Tsugi no' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '...したらどう?', translation: 'What if...?', pronunciation: '...shi-ta-ra do-u', romanji: '...shitara dou?' },
          { word: '...しない?', translation: 'Why don\'t we...?', pronunciation: '...shi-na-i', romanji: '...shinai?' },
          { word: 'すべき', translation: 'We should', pronunciation: 'su-be-ki', romanji: 'Subeki' },
          { word: 'できる', translation: 'We could', pronunciation: 'de-ki-ru', romanji: 'Dekiru' },
          { word: 'しよう', translation: 'Let\'s', pronunciation: 'shi-you', romanji: 'Shiyou' }
        ],
        streetSlang: [
          { word: '行ったらどう?', translation: 'What if we go?', pronunciation: 'it-ta-ra do-u', romanji: 'Ittara dou?' },
          { word: '行かない?', translation: 'Why don\'t we go?', pronunciation: 'i-ka-na-i', romanji: 'Ikanai?' },
          { word: '行くべき', translation: 'We should go', pronunciation: 'i-ku be-ki', romanji: 'Iku beki' },
          { word: 'できる', translation: 'We could do', pronunciation: 'de-ki-ru', romanji: 'Dekiru' },
          { word: '...しよう', translation: 'Let\'s...', pronunciation: '...shi-you', romanji: '...shiyou' },
          { word: '提案する', translation: 'I suggest...', pronunciation: 'tei-an su-ru', romanji: 'Teian suru' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: '思う', translation: 'I think that', pronunciation: 'o-mo-u', romanji: 'Omou' },
          { word: '信じる', translation: 'I believe that', pronunciation: 'shin-ji-ru', romanji: 'Shinjiru' },
          { word: '...ように思える', translation: 'It seems to me that', pronunciation: '...yo-u ni o-mo-e-ru', romanji: '...you ni omoeru' },
          { word: '私の意見では', translation: 'In my opinion', pronunciation: 'wa-ta-shi no i-ken de wa', romanji: 'Watashi no iken de wa' },
          { word: '私にとって', translation: 'For me', pronunciation: 'wa-ta-shi ni to-tte', romanji: 'Watashi ni totte' }
        ],
        streetSlang: [
          { word: '...と思う', translation: 'I think that...', pronunciation: '...to o-mo-u', romanji: '...to omou' },
          { word: '...と信じる', translation: 'I believe that...', pronunciation: '...to shin-ji-ru', romanji: '...to shinjiru' },
          { word: '...ように思える', translation: 'It seems to me that...', pronunciation: '...yo-u ni o-mo-e-ru', romanji: '...you ni omoeru' },
          { word: '私の意見では...', translation: 'In my opinion...', pronunciation: 'wa-ta-shi no i-ken de wa', romanji: 'Watashi no iken de wa' },
          { word: '私にとって...', translation: 'For me...', pronunciation: 'wa-ta-shi ni to-tte', romanji: 'Watashi ni totte' },
          { word: '...と感じる', translation: 'I find that...', pronunciation: '...to kan-ji-ru', romanji: '...to kanjiru' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '問題', translation: 'Problem', pronunciation: 'mon-dai', romanji: 'Mondai' },
          { word: '解決策', translation: 'Solution', pronunciation: 'kai-ke-tsu-sa-ku', romanji: 'Kaiketsusaku' },
          { word: '助け', translation: 'Help', pronunciation: 'ta-su-ke', romanji: 'Tasuke' },
          { word: '必要', translation: 'I need', pronunciation: 'hi-tsu-you', romanji: 'Hitsuyou' },
          { word: 'できる', translation: 'I can', pronunciation: 'de-ki-ru', romanji: 'Dekiru' }
        ],
        streetSlang: [
          { word: '問題がある', translation: 'To have a problem', pronunciation: 'mon-dai ga a-ru', romanji: 'Mondai ga aru' },
          { word: '解決策を探す', translation: 'To look for a solution', pronunciation: 'kai-ke-tsu-sa-ku wo sa-ga-su', romanji: 'Kaiketsusaku wo sagasu' },
          { word: '助けが必要', translation: 'To need help', pronunciation: 'ta-su-ke ga hi-tsu-you', romanji: 'Tasuke ga hitsuyou' },
          { word: '助けることができる', translation: 'I can help', pronunciation: 'ta-su-ke-ru ko-to ga de-ki-ru', romanji: 'Tasukeru koto ga dekiru' },
          { word: '問題を解決する', translation: 'To solve a problem', pronunciation: 'mon-dai wo kai-ke-tsu su-ru', romanji: 'Mondai wo kaiketsu suru' },
          { word: '解決策を見つける', translation: 'To find a solution', pronunciation: 'kai-ke-tsu-sa-ku wo mi-tsu-ke-ru', romanji: 'Kaiketsusaku wo mitsukeru' }
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
          { word: '汽车', translation: 'Car', pronunciation: 'qì chē', romanji: 'Qìchē' },
          { word: '飞机', translation: 'Airplane', pronunciation: 'fēi jī', romanji: 'Fēijī' },
          { word: '火车', translation: 'Train', pronunciation: 'huǒ chē', romanji: 'Huǒchē' },
          { word: '公共汽车', translation: 'Bus', pronunciation: 'gōng gòng qì chē', romanji: 'Gōnggòng qìchē' },
          { word: '自行车', translation: 'Bicycle', pronunciation: 'zì xíng chē', romanji: 'Zìxíngchē' }
        ],
        streetSlang: [
          { word: '加油', translation: 'To fill up gas', pronunciation: 'jiā yóu', romanji: 'Jiāyóu' },
          { word: '全速前进', translation: 'To go full speed', pronunciation: 'quán sù qián jìn', romanji: 'Quánsù qiánjìn' },
          { word: '堵车', translation: 'To be stuck in traffic', pronunciation: 'dǔ chē', romanji: 'Dǔchē' },
          { word: '坐公共汽车', translation: 'To catch the bus', pronunciation: 'zuò gōng gòng qì chē', romanji: 'Zuò gōnggòng qìchē' },
          { word: '旅行', translation: 'To travel', pronunciation: 'lǚ xíng', romanji: 'Lǚxíng' },
          { word: '去旅行', translation: 'To take a trip', pronunciation: 'qù lǚ xíng', romanji: 'Qù lǚxíng' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: '工作', translation: 'Work/Job', pronunciation: 'gōng zuò', romanji: 'Gōngzuò' },
          { word: '办公室', translation: 'Office', pronunciation: 'bàn gōng shì', romanji: 'Bàngōngshì' },
          { word: '会议', translation: 'Meeting', pronunciation: 'huì yì', romanji: 'Huìyì' },
          { word: '客户', translation: 'Client', pronunciation: 'kè hù', romanji: 'Kèhù' },
          { word: '生意', translation: 'Business', pronunciation: 'shēng yì', romanji: 'Shēngyì' }
        ],
        streetSlang: [
          { word: '在工作', translation: 'To be working', pronunciation: 'zài gōng zuò', romanji: 'Zài gōngzuò' },
          { word: '工作很多', translation: 'To have a lot of work', pronunciation: 'gōng zuò hěn duō', romanji: 'Gōngzuò hěn duō' },
          { word: '做生意', translation: 'To do business', pronunciation: 'zuò shēng yì', romanji: 'Zuò shēngyì' },
          { word: '很忙', translation: 'To be busy', pronunciation: 'hěn máng', romanji: 'Hěn máng' },
          { word: '努力工作', translation: 'To work hard', pronunciation: 'nǔ lì gōng zuò', romanji: 'Nǔlì gōngzuò' },
          { word: '有会议', translation: 'To have a meeting', pronunciation: 'yǒu huì yì', romanji: 'Yǒu huìyì' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: '音乐', translation: 'Music', pronunciation: 'yīn yuè', romanji: 'Yīnyuè' },
          { word: '运动', translation: 'Sport', pronunciation: 'yùn dòng', romanji: 'Yùndòng' },
          { word: '书', translation: 'Book', pronunciation: 'shū', romanji: 'Shū' },
          { word: '电影', translation: 'Movie', pronunciation: 'diàn yǐng', romanji: 'Diànyǐng' },
          { word: '爱好', translation: 'Hobby', pronunciation: 'ài hào', romanji: 'Àihào' }
        ],
        streetSlang: [
          { word: '看电影', translation: 'To watch a movie', pronunciation: 'kàn diàn yǐng', romanji: 'Kàn diànyǐng' },
          { word: '听音乐', translation: 'To listen to music', pronunciation: 'tīng yīn yuè', romanji: 'Tīng yīnyuè' },
          { word: '做运动', translation: 'To do sports', pronunciation: 'zuò yùn dòng', romanji: 'Zuò yùndòng' },
          { word: '看书', translation: 'To read a book', pronunciation: 'kàn shū', romanji: 'Kàn shū' },
          { word: '有爱好', translation: 'To have a hobby', pronunciation: 'yǒu ài hào', romanji: 'Yǒu àihào' },
          { word: '消磨时间', translation: 'To spend time', pronunciation: 'xiāo mó shí jiān', romanji: 'Xiāomó shíjiān' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: '快乐', translation: 'Happy', pronunciation: 'kuài lè', romanji: 'Kuàilè' },
          { word: '悲伤', translation: 'Sad', pronunciation: 'bēi shāng', romanji: 'Bēishāng' },
          { word: '生气', translation: 'Angry', pronunciation: 'shēng qì', romanji: 'Shēngqì' },
          { word: '紧张', translation: 'Nervous', pronunciation: 'jǐn zhāng', romanji: 'Jǐnzhāng' },
          { word: '兴奋', translation: 'Excited', pronunciation: 'xīng fèn', romanji: 'Xīngfèn' }
        ],
        streetSlang: [
          { word: '很快乐', translation: 'To be happy', pronunciation: 'hěn kuài lè', romanji: 'Hěn kuàilè' },
          { word: '很悲伤', translation: 'To be sad', pronunciation: 'hěn bēi shāng', romanji: 'Hěn bēishāng' },
          { word: '很生气', translation: 'To be angry', pronunciation: 'hěn shēng qì', romanji: 'Hěn shēngqì' },
          { word: '很紧张', translation: 'To be nervous', pronunciation: 'hěn jǐn zhāng', romanji: 'Hěn jǐnzhāng' },
          { word: '很兴奋', translation: 'To be excited', pronunciation: 'hěn xīng fèn', romanji: 'Hěn xīngfèn' },
          { word: '感觉很好', translation: 'To feel good', pronunciation: 'gǎn jué hěn hǎo', romanji: 'Gǎnjué hěn hǎo' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: '左边', translation: 'Left', pronunciation: 'zuǒ biān', romanji: 'Zuǒbiān' },
          { word: '右边', translation: 'Right', pronunciation: 'yòu biān', romanji: 'Yòubiān' },
          { word: '直走', translation: 'Straight', pronunciation: 'zhí zǒu', romanji: 'Zhí zǒu' },
          { word: '附近', translation: 'Near', pronunciation: 'fù jìn', romanji: 'Fùjìn' },
          { word: '远', translation: 'Far', pronunciation: 'yuǎn', romanji: 'Yuǎn' }
        ],
        streetSlang: [
          { word: '向左转', translation: 'To turn left', pronunciation: 'xiàng zuǒ zhuǎn', romanji: 'Xiàng zuǒ zhuǎn' },
          { word: '向右转', translation: 'To turn right', pronunciation: 'xiàng yòu zhuǎn', romanji: 'Xiàng yòu zhuǎn' },
          { word: '直走', translation: 'To go straight', pronunciation: 'zhí zǒu', romanji: 'Zhí zǒu' },
          { word: '在附近', translation: 'To be near', pronunciation: 'zài fù jìn', romanji: 'Zài fùjìn' },
          { word: '很远', translation: 'To be far', pronunciation: 'hěn yuǎn', romanji: 'Hěn yuǎn' },
          { word: '...在哪里?', translation: 'Where is...?', pronunciation: '...zài nǎ lǐ', romanji: '...zài nǎlǐ?' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: '去了', translation: 'I went', pronunciation: 'qù le', romanji: 'Qù le' },
          { word: '做了', translation: 'I did/made', pronunciation: 'zuò le', romanji: 'Zuò le' },
          { word: '看了', translation: 'I saw', pronunciation: 'kàn le', romanji: 'Kàn le' },
          { word: '吃了', translation: 'I ate', pronunciation: 'chī le', romanji: 'Chī le' },
          { word: '喝了', translation: 'I drank', pronunciation: 'hē le', romanji: 'Hē le' }
        ],
        streetSlang: [
          { word: '去了...', translation: 'I went to...', pronunciation: 'qù le', romanji: 'Qù le' },
          { word: '做了...', translation: 'I did/made...', pronunciation: 'zuò le', romanji: 'Zuò le' },
          { word: '看了...', translation: 'I saw...', pronunciation: 'kàn le', romanji: 'Kàn le' },
          { word: '吃了...', translation: 'I ate...', pronunciation: 'chī le', romanji: 'Chī le' },
          { word: '喝了...', translation: 'I drank...', pronunciation: 'hē le', romanji: 'Hē le' },
          { word: '昨天', translation: 'Yesterday', pronunciation: 'zuó tiān', romanji: 'Zuótiān' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: '要去', translation: 'I\'m going to', pronunciation: 'yào qù', romanji: 'Yào qù' },
          { word: '要去', translation: 'I\'m going to go', pronunciation: 'yào qù', romanji: 'Yào qù' },
          { word: '要做', translation: 'I\'m going to do', pronunciation: 'yào zuò', romanji: 'Yào zuò' },
          { word: '要看', translation: 'I\'m going to see', pronunciation: 'yào kàn', romanji: 'Yào kàn' },
          { word: '明天', translation: 'Tomorrow', pronunciation: 'míng tiān', romanji: 'Míngtiān' }
        ],
        streetSlang: [
          { word: '要...', translation: 'I\'m going to...', pronunciation: 'yào', romanji: 'Yào' },
          { word: '要去...', translation: 'I\'m going to go to...', pronunciation: 'yào qù', romanji: 'Yào qù' },
          { word: '要做...', translation: 'I\'m going to do...', pronunciation: 'yào zuò', romanji: 'Yào zuò' },
          { word: '明天要...', translation: 'Tomorrow I\'m going to...', pronunciation: 'míng tiān yào', romanji: 'Míngtiān yào' },
          { word: '要看...', translation: 'I\'m going to see...', pronunciation: 'yào kàn', romanji: 'Yào kàn' },
          { word: '下一个...', translation: 'Next...', pronunciation: 'xià yī gè', romanji: 'Xià yīgè' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: '如果...怎么样?', translation: 'What if...?', pronunciation: 'rú guǒ ... zěn me yàng', romanji: 'Rúguǒ ... zěnmeyàng?' },
          { word: '为什么不...?', translation: 'Why don\'t we...?', pronunciation: 'wèi shén me bù', romanji: 'Wèishénme bù' },
          { word: '应该', translation: 'We should', pronunciation: 'yīng gāi', romanji: 'Yīnggāi' },
          { word: '可以', translation: 'We could', pronunciation: 'kě yǐ', romanji: 'Kěyǐ' },
          { word: '让我们', translation: 'Let\'s', pronunciation: 'ràng wǒ men', romanji: 'Ràng wǒmen' }
        ],
        streetSlang: [
          { word: '如果去怎么样?', translation: 'What if we go?', pronunciation: 'rú guǒ qù zěn me yàng', romanji: 'Rúguǒ qù zěnmeyàng?' },
          { word: '为什么不去?', translation: 'Why don\'t we go?', pronunciation: 'wèi shén me bù qù', romanji: 'Wèishénme bù qù' },
          { word: '应该去', translation: 'We should go', pronunciation: 'yīng gāi qù', romanji: 'Yīnggāi qù' },
          { word: '可以做', translation: 'We could do', pronunciation: 'kě yǐ zuò', romanji: 'Kěyǐ zuò' },
          { word: '让我们...', translation: 'Let\'s...', pronunciation: 'ràng wǒ men', romanji: 'Ràng wǒmen' },
          { word: '我建议...', translation: 'I suggest...', pronunciation: 'wǒ jiàn yì', romanji: 'Wǒ jiànyì' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: '我认为', translation: 'I think that', pronunciation: 'wǒ rèn wéi', romanji: 'Wǒ rènwéi' },
          { word: '我相信', translation: 'I believe that', pronunciation: 'wǒ xiāng xìn', romanji: 'Wǒ xiāngxìn' },
          { word: '我觉得', translation: 'It seems to me that', pronunciation: 'wǒ jué dé', romanji: 'Wǒ juédé' },
          { word: '在我看来', translation: 'In my opinion', pronunciation: 'zài wǒ kàn lái', romanji: 'Zài wǒ kànlái' },
          { word: '对我来说', translation: 'For me', pronunciation: 'duì wǒ lái shuō', romanji: 'Duì wǒ láishuō' }
        ],
        streetSlang: [
          { word: '我认为...', translation: 'I think that...', pronunciation: 'wǒ rèn wéi', romanji: 'Wǒ rènwéi' },
          { word: '我相信...', translation: 'I believe that...', pronunciation: 'wǒ xiāng xìn', romanji: 'Wǒ xiāngxìn' },
          { word: '我觉得...', translation: 'It seems to me that...', pronunciation: 'wǒ jué dé', romanji: 'Wǒ juédé' },
          { word: '在我看来...', translation: 'In my opinion...', pronunciation: 'zài wǒ kàn lái', romanji: 'Zài wǒ kànlái' },
          { word: '对我来说...', translation: 'For me...', pronunciation: 'duì wǒ lái shuō', romanji: 'Duì wǒ láishuō' },
          { word: '我发现...', translation: 'I find that...', pronunciation: 'wǒ fā xiàn', romanji: 'Wǒ fāxiàn' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: '问题', translation: 'Problem', pronunciation: 'wèn tí', romanji: 'Wèntí' },
          { word: '解决方案', translation: 'Solution', pronunciation: 'jiě jué fāng àn', romanji: 'Jiějué fāng\'àn' },
          { word: '帮助', translation: 'Help', pronunciation: 'bāng zhù', romanji: 'Bāngzhù' },
          { word: '需要', translation: 'I need', pronunciation: 'xū yào', romanji: 'Xūyào' },
          { word: '可以', translation: 'I can', pronunciation: 'kě yǐ', romanji: 'Kěyǐ' }
        ],
        streetSlang: [
          { word: '有问题', translation: 'To have a problem', pronunciation: 'yǒu wèn tí', romanji: 'Yǒu wèntí' },
          { word: '找解决方案', translation: 'To look for a solution', pronunciation: 'zhǎo jiě jué fāng àn', romanji: 'Zhǎo jiějué fāng\'àn' },
          { word: '需要帮助', translation: 'To need help', pronunciation: 'xū yào bāng zhù', romanji: 'Xūyào bāngzhù' },
          { word: '可以帮助', translation: 'I can help', pronunciation: 'kě yǐ bāng zhù', romanji: 'Kěyǐ bāngzhù' },
          { word: '解决问题', translation: 'To solve a problem', pronunciation: 'jiě jué wèn tí', romanji: 'Jiějué wèntí' },
          { word: '找到解决方案', translation: 'To find a solution', pronunciation: 'zhǎo dào jiě jué fāng àn', romanji: 'Zhǎo dào jiějué fāng\'àn' }
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
          { word: 'Машина', translation: 'Car', pronunciation: 'mah-SHEE-nah' },
          { word: 'Самолёт', translation: 'Airplane', pronunciation: 'sah-mah-LYOT' },
          { word: 'Поезд', translation: 'Train', pronunciation: 'PO-yezd' },
          { word: 'Автобус', translation: 'Bus', pronunciation: 'ahv-TOH-boos' },
          { word: 'Велосипед', translation: 'Bicycle', pronunciation: 'veh-lah-see-PYED' }
        ],
        streetSlang: [
          { word: 'Заправиться', translation: 'To fill up gas', pronunciation: 'zah-prah-VEET-syah' },
          { word: 'На полной скорости', translation: 'To go full speed', pronunciation: 'nah POL-noy sko-ROS-tee' },
          { word: 'Застрять в пробке', translation: 'To be stuck in traffic', pronunciation: 'zah-STRYAT v PROB-keh' },
          { word: 'Сесть на автобус', translation: 'To catch the bus', pronunciation: 'syest nah ahv-TOH-boos' },
          { word: 'Путешествовать', translation: 'To travel', pronunciation: 'poo-teh-SHEH-stvo-vat' },
          { word: 'Отправиться в поездку', translation: 'To take a trip', pronunciation: 'at-PRAH-veet-syah v PO-yezd-koo' }
        ]
      },
      {
        id: 12,
        title: 'Work & Business',
        premium: true,
        words: [
          { word: 'Работа', translation: 'Work/Job', pronunciation: 'rah-BO-tah' },
          { word: 'Офис', translation: 'Office', pronunciation: 'OH-fis' },
          { word: 'Встреча', translation: 'Meeting', pronunciation: 'vstree-CHAH' },
          { word: 'Клиент', translation: 'Client', pronunciation: 'klee-ENT' },
          { word: 'Бизнес', translation: 'Business', pronunciation: 'BEEZ-nes' }
        ],
        streetSlang: [
          { word: 'Быть на работе', translation: 'To be working', pronunciation: 'bit nah rah-BO-teh' },
          { word: 'Много работы', translation: 'To have a lot of work', pronunciation: 'MNO-go rah-BO-ty' },
          { word: 'Заниматься бизнесом', translation: 'To do business', pronunciation: 'zah-nee-MAHT-syah BEEZ-neh-som' },
          { word: 'Быть занятым', translation: 'To be busy', pronunciation: 'bit zah-NYA-tim' },
          { word: 'Много работать', translation: 'To work hard', pronunciation: 'MNO-go rah-BO-tat' },
          { word: 'Быть на встрече', translation: 'To have a meeting', pronunciation: 'bit nah vstree-CHEH' }
        ]
      },
      {
        id: 13,
        title: 'Hobbies & Interests',
        premium: true,
        words: [
          { word: 'Музыка', translation: 'Music', pronunciation: 'MOO-zy-kah' },
          { word: 'Спорт', translation: 'Sport', pronunciation: 'sport' },
          { word: 'Книга', translation: 'Book', pronunciation: 'KNEE-gah' },
          { word: 'Фильм', translation: 'Movie', pronunciation: 'feelm' },
          { word: 'Хобби', translation: 'Hobby', pronunciation: 'HOH-bee' }
        ],
        streetSlang: [
          { word: 'Смотреть фильм', translation: 'To watch a movie', pronunciation: 'smah-TRET feelm' },
          { word: 'Слушать музыку', translation: 'To listen to music', pronunciation: 'SLOO-shat MOO-zy-koo' },
          { word: 'Заниматься спортом', translation: 'To do sports', pronunciation: 'zah-nee-MAHT-syah SPOR-tom' },
          { word: 'Читать книгу', translation: 'To read a book', pronunciation: 'chee-TAHT KNEE-goo' },
          { word: 'Иметь хобби', translation: 'To have a hobby', pronunciation: 'ee-MET HOH-bee' },
          { word: 'Проводить время', translation: 'To spend time', pronunciation: 'prah-vah-DEET VREH-myah' }
        ]
      },
      {
        id: 14,
        title: 'Emotions & Feelings',
        premium: true,
        words: [
          { word: 'Счастливый', translation: 'Happy', pronunciation: 'shas-TLEE-viy' },
          { word: 'Грустный', translation: 'Sad', pronunciation: 'groost-niy' },
          { word: 'Злой', translation: 'Angry', pronunciation: 'zloy' },
          { word: 'Нервный', translation: 'Nervous', pronunciation: 'NYERV-niy' },
          { word: 'Взволнованный', translation: 'Excited', pronunciation: 'vzval-NOH-van-niy' }
        ],
        streetSlang: [
          { word: 'Быть счастливым', translation: 'To be happy', pronunciation: 'bit shas-TLEE-vim' },
          { word: 'Быть грустным', translation: 'To be sad', pronunciation: 'bit GROOST-nim' },
          { word: 'Быть злым', translation: 'To be angry', pronunciation: 'bit zlim' },
          { word: 'Быть нервным', translation: 'To be nervous', pronunciation: 'bit NYERV-nim' },
          { word: 'Быть взволнованным', translation: 'To be excited', pronunciation: 'bit vzval-NOH-van-nim' },
          { word: 'Хорошо себя чувствовать', translation: 'To feel good', pronunciation: 'hah-rah-SHO se-BYA CHOOV-stvo-vat' }
        ]
      },
      {
        id: 15,
        title: 'Directions & Locations',
        premium: true,
        words: [
          { word: 'Лево', translation: 'Left', pronunciation: 'LEH-voh' },
          { word: 'Право', translation: 'Right', pronunciation: 'PRAH-voh' },
          { word: 'Прямо', translation: 'Straight', pronunciation: 'PRYAH-moh' },
          { word: 'Близко', translation: 'Near', pronunciation: 'BLEEZ-koh' },
          { word: 'Далеко', translation: 'Far', pronunciation: 'dah-leh-KOH' }
        ],
        streetSlang: [
          { word: 'Повернуть налево', translation: 'To turn left', pronunciation: 'pah-vehr-NOOT nah-LEH-voh' },
          { word: 'Повернуть направо', translation: 'To turn right', pronunciation: 'pah-vehr-NOOT nah-PRAH-voh' },
          { word: 'Идти прямо', translation: 'To go straight', pronunciation: 'eed-TEE PRYAH-moh' },
          { word: 'Быть близко', translation: 'To be near', pronunciation: 'bit BLEEZ-koh' },
          { word: 'Быть далеко', translation: 'To be far', pronunciation: 'bit dah-leh-KOH' },
          { word: 'Где находится...?', translation: 'Where is...?', pronunciation: 'gde nah-KHO-deet-syah' }
        ]
      },
      {
        id: 16,
        title: 'Past Tense Basics',
        premium: true,
        words: [
          { word: 'Я пошёл', translation: 'I went', pronunciation: 'ya pah-SHYOL' },
          { word: 'Я сделал', translation: 'I did/made', pronunciation: 'ya SDEH-lal' },
          { word: 'Я видел', translation: 'I saw', pronunciation: 'ya VEE-del' },
          { word: 'Я ел', translation: 'I ate', pronunciation: 'ya yel' },
          { word: 'Я пил', translation: 'I drank', pronunciation: 'ya peel' }
        ],
        streetSlang: [
          { word: 'Я пошёл в...', translation: 'I went to...', pronunciation: 'ya pah-SHYOL v' },
          { word: 'Я сделал...', translation: 'I did/made...', pronunciation: 'ya SDEH-lal' },
          { word: 'Я видел...', translation: 'I saw...', pronunciation: 'ya VEE-del' },
          { word: 'Я ел...', translation: 'I ate...', pronunciation: 'ya yel' },
          { word: 'Я пил...', translation: 'I drank...', pronunciation: 'ya peel' },
          { word: 'Вчера', translation: 'Yesterday', pronunciation: 'vcheh-RAH' }
        ]
      },
      {
        id: 17,
        title: 'Future Plans',
        premium: true,
        words: [
          { word: 'Я собираюсь', translation: 'I\'m going to', pronunciation: 'ya sah-bee-RAH-yoos' },
          { word: 'Я собираюсь пойти', translation: 'I\'m going to go', pronunciation: 'ya sah-bee-RAH-yoos pah-ee-TEE' },
          { word: 'Я собираюсь сделать', translation: 'I\'m going to do', pronunciation: 'ya sah-bee-RAH-yoos SDEH-lat' },
          { word: 'Я собираюсь увидеть', translation: 'I\'m going to see', pronunciation: 'ya sah-bee-RAH-yoos oo-ee-DET' },
          { word: 'Завтра', translation: 'Tomorrow', pronunciation: 'ZAV-trah' }
        ],
        streetSlang: [
          { word: 'Я собираюсь...', translation: 'I\'m going to...', pronunciation: 'ya sah-bee-RAH-yoos' },
          { word: 'Я собираюсь пойти в...', translation: 'I\'m going to go to...', pronunciation: 'ya sah-bee-RAH-yoos pah-ee-TEE v' },
          { word: 'Я собираюсь сделать...', translation: 'I\'m going to do...', pronunciation: 'ya sah-bee-RAH-yoos SDEH-lat' },
          { word: 'Завтра я собираюсь...', translation: 'Tomorrow I\'m going to...', pronunciation: 'ZAV-trah ya sah-bee-RAH-yoos' },
          { word: 'Я собираюсь увидеть...', translation: 'I\'m going to see...', pronunciation: 'ya sah-bee-RAH-yoos oo-ee-DET' },
          { word: 'Следующий...', translation: 'Next...', pronunciation: 'sleh-DOO-yoo-shiy' }
        ]
      },
      {
        id: 18,
        title: 'Making Suggestions',
        premium: true,
        words: [
          { word: 'А что если...?', translation: 'What if...?', pronunciation: 'ah shto YEH-slee' },
          { word: 'Почему бы нам не...?', translation: 'Why don\'t we...?', pronunciation: 'pah-cheh-MOO bi nahm neh' },
          { word: 'Нам следует', translation: 'We should', pronunciation: 'nahm SLEH-dooh-yet' },
          { word: 'Мы могли бы', translation: 'We could', pronunciation: 'mi mah-GLEE bi' },
          { word: 'Давайте', translation: 'Let\'s', pronunciation: 'dah-VAY-teh' }
        ],
        streetSlang: [
          { word: 'А что если пойти?', translation: 'What if we go?', pronunciation: 'ah shto YEH-slee pah-ee-TEE' },
          { word: 'Почему бы нам не пойти?', translation: 'Why don\'t we go?', pronunciation: 'pah-cheh-MOO bi nahm neh pah-ee-TEE' },
          { word: 'Нам следует пойти', translation: 'We should go', pronunciation: 'nahm SLEH-dooh-yet pah-ee-TEE' },
          { word: 'Мы могли бы сделать', translation: 'We could do', pronunciation: 'mi mah-GLEE bi SDEH-lat' },
          { word: 'Давайте...', translation: 'Let\'s...', pronunciation: 'dah-VAY-teh' },
          { word: 'Я предлагаю...', translation: 'I suggest...', pronunciation: 'ya prehd-lah-GAH-yoo' }
        ]
      },
      {
        id: 19,
        title: 'Expressing Opinions',
        premium: true,
        words: [
          { word: 'Я думаю, что', translation: 'I think that', pronunciation: 'ya DOO-mah-yoo shto' },
          { word: 'Я верю, что', translation: 'I believe that', pronunciation: 'ya VEH-ryoo shto' },
          { word: 'Мне кажется, что', translation: 'It seems to me that', pronunciation: 'mne KAH-zhet-syah shto' },
          { word: 'По моему мнению', translation: 'In my opinion', pronunciation: 'poh mah-YEH-moo mneh-NYOO' },
          { word: 'Для меня', translation: 'For me', pronunciation: 'dlyah meh-NYAH' }
        ],
        streetSlang: [
          { word: 'Я думаю, что...', translation: 'I think that...', pronunciation: 'ya DOO-mah-yoo shto' },
          { word: 'Я верю, что...', translation: 'I believe that...', pronunciation: 'ya VEH-ryoo shto' },
          { word: 'Мне кажется, что...', translation: 'It seems to me that...', pronunciation: 'mne KAH-zhet-syah shto' },
          { word: 'По моему мнению...', translation: 'In my opinion...', pronunciation: 'poh mah-YEH-moo mneh-NYOO' },
          { word: 'Для меня...', translation: 'For me...', pronunciation: 'dlyah meh-NYAH' },
          { word: 'Я нахожу, что...', translation: 'I find that...', pronunciation: 'ya nah-hah-ZHOO shto' }
        ]
      },
      {
        id: 20,
        title: 'Problem Solving',
        premium: true,
        words: [
          { word: 'Проблема', translation: 'Problem', pronunciation: 'prah-BLEH-mah' },
          { word: 'Решение', translation: 'Solution', pronunciation: 'reh-SHEH-nee-yeh' },
          { word: 'Помощь', translation: 'Help', pronunciation: 'pah-MOHSH' },
          { word: 'Мне нужно', translation: 'I need', pronunciation: 'mne NOOZH-no' },
          { word: 'Я могу', translation: 'I can', pronunciation: 'ya mah-GOO' }
        ],
        streetSlang: [
          { word: 'Иметь проблему', translation: 'To have a problem', pronunciation: 'ee-MET prah-BLEH-moo' },
          { word: 'Искать решение', translation: 'To look for a solution', pronunciation: 'ees-KAHT reh-SHEH-nee-yeh' },
          { word: 'Нужна помощь', translation: 'To need help', pronunciation: 'noozh-NAH pah-MOHSH' },
          { word: 'Я могу помочь', translation: 'I can help', pronunciation: 'ya mah-GOO pah-mo-CH' },
          { word: 'Решить проблему', translation: 'To solve a problem', pronunciation: 'reh-SHEET prah-BLEH-moo' },
          { word: 'Найти решение', translation: 'To find a solution', pronunciation: 'nah-ee-TEE reh-SHEH-nee-yeh' }
        ]
      }
    ]
  }
};

export const getLanguageById = (id) => languages[id];
export const getAllLanguages = () => Object.values(languages);

