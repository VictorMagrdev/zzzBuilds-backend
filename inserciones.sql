insert into states (id_state, description)
values (1, 'Activo'),
  (2, 'Inactivo'),
  (3, 'Suspendido');
insert into users (fullname, user, email, password, states_id)
values (
    'John Doe',
    'johndoe',
    'johndoe@example.com',
    'password123',
    1
  ),
  (
    'Jane Smith',
    'janesmith',
    'janesmith@example.com',
    'password456',
    1
  ),
  (
    'Michael Johnson',
    'michaeljohnson',
    'michaeljohnson@example.com',
    'password789',
    1
  ),
  (
    'Emily Davis',
    'emilydavis',
    'emilydavis@example.com',
    'password111',
    1
  ),
  (
    'David Lee',
    'davidlee',
    'davidlee@example.com',
    'password222',
    1
  );
insert into categories (id_category, title, state_id)
values (1, 'Peliculas', 1),
  (2, 'Pokémons', 1),
  (3, 'Video Juegos', 1);
-- Insertar 20 registros relacionados con películas
INSERT INTO items (
    title,
    description,
    score,
    slug,
    states_id,
    category_id
  )
VALUES (
    'The Shawshank Redemption',
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    97,
    'the_shawshank_redemption',
    1,
    1
  ),
  (
    'The Godfather',
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    98,
    'the_godfather',
    1,
    1
  ),
  (
    'The Dark Knight',
    'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    94,
    'the_dark_knight',
    1,
    1
  ),
  (
    'Pulp Fiction',
    'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    96,
    'pulp_fiction',
    1,
    1
  ),
  (
    'The Lord of the Rings: The Return of the King',
    'Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    95,
    'the_lord_of_the_rings_the_return_of_the_king',
    1,
    1
  ),
  (
    'Fight Club',
    'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    89,
    'fight_club',
    1,
    1
  ),
  (
    'Forrest Gump',
    'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    93,
    'forrest_gump',
    1,
    1
  ),
  (
    'Inception',
    'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    91,
    'inception',
    1,
    1
  ),
  (
    'The Matrix',
    'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    87,
    'the_matrix',
    1,
    1
  ),
  (
    'Goodfellas',
    'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    96,
    'goodfellas',
    1,
    1
  ),
  (
    'Star Wars: Episode IV - A New Hope',
    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire''s world-destroying battle station.',
    92,
    'star_wars_episode_iv_a_new_hope',
    1,
    1
  ),
  (
    'The Silence of the Lambs',
    'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer, a madman who skins his victims.',
    91,
    'the_silence_of_the_lambs',
    1,
    1
  ),
  (
    'Saving Private Ryan',
    'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    95,
    'saving_private_ryan',
    1,
    1
  ),
  (
    'The Green Mile',
    'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    89,
    'the_green_mile',
    1,
    1
  ),
  (
    'Schindler''s List',
    'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    97,
    'schindlers_list',
    1,
    1
  ),
  (
    'Interstellar',
    'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.',
    86,
    'interstellar',
    1,
    1
  ),
  (
    'The Lion King',
    'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    93,
    'the_lion_king',
    1,
    1
  ),
  (
    'Gladiator',
    'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    85,
    'gladiator',
    1,
    1
  ),
  (
    'The Departed',
    'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    88,
    'the_departed',
    1,
    1
  ),
  (
    'The Prestige',
    'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
    90,
    'the_prestige',
    1,
    1
  ),
  (
    'Pikachu',
    'An Electric-type Pokémon known for its speed and agility.',
    90,
    'pikachu',
    1,
    2
  ),
  (
    'Charizard',
    'A Fire and Flying-type Pokémon that can breathe intense flames.',
    95,
    'charizard',
    1,
    2
  ),
  (
    'Bulbasaur',
    'A Grass and Poison-type Pokémon with a seed on its back.',
    85,
    'bulbasaur',
    1,
    2
  ),
  (
    'Squirtle',
    'A Water-type Pokémon with a strong shell defense.',
    80,
    'squirtle',
    1,
    2
  ),
  (
    'Jigglypuff',
    'A Fairy-type Pokémon known for putting opponents to sleep.',
    70,
    'jigglypuff',
    1,
    2
  ),
  (
    'Gengar',
    'A Ghost and Poison-type Pokémon that hides in shadows.',
    92,
    'gengar',
    1,
    2
  ),
  (
    'Eevee',
    'A Normal-type Pokémon that can evolve into many different forms.',
    88,
    'eevee',
    1,
    2
  ),
  (
    'Snorlax',
    'A Normal-type Pokémon known for its large size and appetite.',
    83,
    'snorlax',
    1,
    2
  ),
  (
    'Dragonite',
    'A Dragon and Flying-type Pokémon with immense power.',
    94,
    'dragonite',
    1,
    2
  ),
  (
    'Mewtwo',
    'A Psychic-type Pokémon created by genetic manipulation.',
    98,
    'mewtwo',
    1,
    2
  ),
  (
    'Lucario',
    'A Fighting and Steel-type Pokémon with strong combat skills.',
    89,
    'lucario',
    1,
    2
  ),
  (
    'Lapras',
    'A Water and Ice-type Pokémon often used for ocean travel.',
    87,
    'lapras',
    1,
    2
  ),
  (
    'Machamp',
    'A Fighting-type Pokémon with incredible physical strength.',
    85,
    'machamp',
    1,
    2
  ),
  (
    'Alakazam',
    'A Psychic-type Pokémon with an extremely high IQ.',
    91,
    'alakazam',
    1,
    2
  ),
  (
    'Gyarados',
    'A Water and Flying-type Pokémon known for its violent temper.',
    93,
    'gyarados',
    1,
    2
  ),
  (
    'Vaporeon',
    'A Water-type evolution of Eevee with the ability to melt into water.',
    86,
    'vaporeon',
    1,
    2
  ),
  (
    'Jolteon',
    'An Electric-type evolution of Eevee that can generate sharp bolts of electricity.',
    85,
    'jolteon',
    1,
    2
  ),
  (
    'Flareon',
    'A Fire-type evolution of Eevee that can release intense heat.',
    84,
    'flareon',
    1,
    2
  ),
  (
    'Articuno',
    'An Ice and Flying-type Legendary Pokémon that controls ice.',
    97,
    'articuno',
    1,
    2
  ),
  (
    'Zapdos',
    'An Electric and Flying-type Legendary Pokémon that controls thunder.',
    96,
    'zapdos',
    1,
    2
  ),
  (
    'The Legend of Zelda: Ocarina of Time',
    'An action-adventure game set in the land of Hyrule, where Link must stop Ganondorf.',
    99,
    'the_legend_of_zelda_ocarina_of_time',
    1,
    3
  ),
  (
    'Super Mario 64',
    'A platformer where Mario embarks on a journey to save Princess Peach.',
    97,
    'super_mario_64',
    1,
    3
  ),
  (
    'Halo: Combat Evolved',
    'A first-person shooter featuring the Master Chief as humanity fights the Covenant.',
    95,
    'halo_combat_evolved',
    1,
    3
  ),
  (
    'Half-Life 2',
    'A sci-fi first-person shooter that revolutionized physics-based gameplay.',
    98,
    'half_life_2',
    1,
    3
  ),
  (
    'The Witcher 3: Wild Hunt',
    'An open-world RPG where Geralt of Rivia hunts monsters and explores a richly detailed world.',
    96,
    'the_witcher_3_wild_hunt',
    1,
    3
  ),
  (
    'Grand Theft Auto V',
    'An open-world game set in Los Santos, where players can explore, complete missions, and cause chaos.',
    94,
    'grand_theft_auto_v',
    1,
    3
  ),
  (
    'The Elder Scrolls V: Skyrim',
    'An open-world RPG set in the fantasy world of Tamriel, where players can forge their destiny.',
    93,
    'the_elder_scrolls_v_skyrim',
    1,
    3
  ),
  (
    'Red Dead Redemption 2',
    'A Western-themed open-world game that tells the story of Arthur Morgan and the vanishing Wild West.',
    96,
    'red_dead_redemption_2',
    1,
    3
  ),
  (
    'Minecraft',
    'A sandbox game where players can build, explore, and survive in a blocky world.',
    92,
    'minecraft',
    1,
    3
  ),
  (
    'Fortnite',
    'A battle royale game where 100 players compete to be the last one standing.',
    88,
    'fortnite',
    1,
    3
  ),
  (
    'Call of Duty: Modern Warfare',
    'A first-person shooter that revolutionized the genre with realistic modern warfare combat.',
    91,
    'call_of_duty_modern_warfare',
    1,
    3
  ),
  (
    'BioShock',
    'A first-person shooter set in the underwater city of Rapture, blending story and action.',
    94,
    'bioshock',
    1,
    3
  ),
  (
    'Dark Souls',
    'An action RPG known for its challenging combat and intricate world design.',
    89,
    'dark_souls',
    1,
    3
  ),
  (
    'Metal Gear Solid V: The Phantom Pain',
    'An action-adventure game featuring stealth mechanics and open-world exploration.',
    90,
    'metal_gear_solid_v_the_phantom_pain',
    1,
    3
  ),
  (
    'Overwatch',
    'A team-based multiplayer first-person shooter with unique heroes and fast-paced gameplay.',
    87,
    'overwatch',
    1,
    3
  ),
  (
    'League of Legends',
    'A multiplayer online battle arena (MOBA) game with a global competitive scene.',
    92,
    'league_of_legends',
    1,
    3
  ),
  (
    'Horizon Zero Dawn',
    'An open-world action RPG set in a post-apocalyptic world dominated by robotic creatures.',
    91,
    'horizon_zero_dawn',
    1,
    3
  ),
  (
    'The Last of Us',
    'An action-adventure game that tells a harrowing story of survival in a post-apocalyptic world.',
    98,
    'the_last_of_us',
    1,
    3
  ),
  (
    'God of War',
    'A third-person action game that reboots the iconic series with Norse mythology and intense combat.',
    96,
    'god_of_war',
    1,
    3
  ),
  (
    'Mass Effect 2',
    'A sci-fi RPG where Commander Shepard leads a team to stop a galactic threat.',
    94,
    'mass_effect_2',
    1,
    3
  );
INSERT INTO products (title, value, description, stock, state_id)
VALUES (
    'Gaming Laptop',
    1500.99,
    'High-performance gaming laptop with latest GPU',
    15,
    1
  ),
  (
    'Wireless Mouse',
    25.50,
    'Ergonomic wireless mouse with fast response',
    150,
    1
  ),
  (
    'Mechanical Keyboard',
    85.00,
    'RGB backlit mechanical keyboard for gamers',
    75,
    1
  ),
  (
    'Noise Cancelling Headphones',
    120.99,
    'Over-ear headphones with noise cancelling technology',
    50,
    1
  ),
  (
    'Smartwatch',
    199.99,
    'Fitness tracker smartwatch with heart rate monitor',
    80,
    1
  ),
  (
    '4K Monitor',
    300.00,
    'Ultra HD 4K monitor with HDR support',
    20,
    1
  ),
  (
    'Gaming Chair',
    350.99,
    'Comfortable gaming chair with adjustable armrests',
    30,
    1
  ),
  (
    'External Hard Drive',
    75.49,
    '2TB external hard drive for extra storage',
    100,
    1
  ),
  (
    'Portable Bluetooth Speaker',
    55.00,
    'Compact Bluetooth speaker with deep bass',
    120,
    1
  ),
  (
    'Smartphone',
    999.99,
    'Latest model smartphone with 128GB storage',
    25,
    1
  ),
  (
    'Tablet',
    599.99,
    '10-inch tablet with retina display and 64GB storage',
    40,
    1
  ),
  (
    'Wireless Earbuds',
    45.00,
    'True wireless earbuds with charging case',
    150,
    1
  ),
  (
    'Webcam',
    80.00,
    '1080p HD webcam for streaming and video calls',
    75,
    1
  ),
  (
    'USB-C Hub',
    35.99,
    '7-in-1 USB-C hub with HDMI and USB 3.0 ports',
    200,
    1
  ),
  (
    'Gaming Console',
    499.99,
    'Next-gen gaming console with 1TB storage',
    10,
    1
  ),
  (
    'Smart Light Bulb',
    15.99,
    'Smart LED light bulb with app control',
    250,
    1
  ),
  (
    'Fitness Tracker',
    65.50,
    'Waterproof fitness tracker with GPS',
    90,
    1
  ),
  (
    'Drone',
    450.00,
    'Drone with 4K camera and GPS stabilization',
    15,
    1
  ),
  (
    'Smart TV',
    1200.00,
    '65-inch Smart TV with 4K UHD and HDR10',
    8,
    1
  ),
  (
    'VR Headset',
    299.99,
    'Virtual reality headset for immersive gaming',
    20,
    1
  ),
  (
    'Laptop Stand',
    25.00,
    'Adjustable laptop stand with cooling fan',
    100,
    1
  ),
  (
    'Electric Scooter',
    499.99,
    'Foldable electric scooter with long battery life',
    30,
    1
  ),
  (
    'Smart Thermostat',
    150.00,
    'Wi-Fi enabled smart thermostat for home automation',
    50,
    1
  ),
  (
    'Action Camera',
    199.99,
    'Waterproof action camera with 4K recording',
    40,
    1
  ),
  (
    'Home Security Camera',
    85.99,
    '1080p HD indoor home security camera',
    120,
    1
  ),
  (
    'Bluetooth Headphones',
    60.00,
    'Over-ear Bluetooth headphones with deep bass',
    100,
    1
  ),
  (
    'Portable Charger',
    30.99,
    '10,000mAh portable power bank for fast charging',
    200,
    1
  ),
  (
    'Wi-Fi Router',
    120.00,
    'Dual-band Wi-Fi router with gigabit Ethernet',
    50,
    1
  ),
  (
    'Electric Toothbrush',
    75.00,
    'Rechargeable electric toothbrush with multiple modes',
    90,
    1
  ),
  (
    'Coffee Maker',
    99.99,
    'Automatic coffee maker with programmable settings',
    80,
    1
  );
