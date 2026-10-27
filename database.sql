CREATE DATABASE IF NOT EXISTS mountain_hikers
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mountain_hikers;

CREATE TABLE IF NOT EXISTS MOUNTAIN_RANGE (
  Range_ID INT AUTO_INCREMENT PRIMARY KEY,
  Range_Name VARCHAR(120) NOT NULL,
  Island_Group ENUM('Luzon','Visayas','Mindanao') NOT NULL,
  Location VARCHAR(160) NOT NULL,
  Description TEXT
);

CREATE TABLE IF NOT EXISTS MOUNTAIN (
  Mountain_ID INT AUTO_INCREMENT PRIMARY KEY,
  Range_ID INT NOT NULL,
  Mountain_Name VARCHAR(120) NOT NULL,
  Island_Group ENUM('Luzon','Visayas','Mindanao') NOT NULL,
  Province VARCHAR(120) NOT NULL,
  Location VARCHAR(180) NOT NULL,
  Elevation INT NULL,
  Difficulty_Level VARCHAR(40) NOT NULL DEFAULT 'Check local guidance',
  Estimated_Time VARCHAR(80),
  Status_Note TEXT NULL,
  Environment TEXT,
  Description TEXT,
  Image_File VARCHAR(120),
  CONSTRAINT fk_mountain_range FOREIGN KEY (Range_ID)
    REFERENCES MOUNTAIN_RANGE(Range_ID)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS SAFETY_GUIDE (
  Guide_ID INT AUTO_INCREMENT PRIMARY KEY,
  Guide_Title VARCHAR(150) NOT NULL,
  Guide_Content TEXT NOT NULL,
  Category VARCHAR(60) NOT NULL
);

INSERT INTO MOUNTAIN_RANGE (Range_Name, Island_Group, Location, Description) VALUES
('Cordillera Central', 'Luzon', 'Northern Luzon', 'A major mountain range in the Cordillera region.'),
('Luzon Volcanic and Hill Peaks', 'Luzon', 'Central Luzon, Bicol, Southern Tagalog and Romblon', 'Volcanoes and hill peaks across Luzon.'),
('Visayas Highlands', 'Visayas', 'Cebu, Negros and Panay', 'Highland peaks across the Visayas islands.'),
('Mount Apo Range', 'Mindanao', 'Mindanao', 'Mountainous area around Mount Apo.'),
('Kitanglad Range', 'Mindanao', 'Bukidnon, Mindanao', 'Highland range including Kitanglad and Dulang-dulang.'),
('Mindanao Volcanoes and Highlands', 'Mindanao', 'Davao, Camiguin, Misamis Occidental and South Cotabato', 'Volcanic and forest mountains across Mindanao.');

INSERT INTO MOUNTAIN (Range_ID, Mountain_Name, Island_Group, Province, Location, Elevation, Difficulty_Level, Estimated_Time, Status_Note, Environment, Description, Image_File) VALUES

(2, 'Mayon Volcano', 'Luzon', 'Albay', 'Albay, Bicol, Luzon', 2463, 'Viewing only', 'Viewpoints only (no summit climb)', 'Summit climbing is not allowed because of the permanent danger zone.', 'Symmetrical active volcano surrounded by rice fields and towns.', 'The famous near-perfect cone volcano of Bicol.', 'mt-mayon'),
(2, 'Mount Samat', 'Luzon', 'Bataan', 'Pilar, Bataan, Luzon', 555, 'Easy', '1-2 hours', NULL, 'Forested hills with a memorial shrine and viewing areas.', 'Home of the Dambana ng Kagitingan and its giant cross.', 'mt-samat'),
(2, 'Mount Batulao', 'Luzon', 'Batangas', 'Nasugbu, Batangas, Luzon', 811, 'Moderate', '4-5 hours round trip', NULL, 'Grassy slopes and jagged ridges.', 'A beginner-friendly hike with ridge views.', 'mt-batulao'),
(2, 'Mount Maculot', 'Luzon', 'Batangas', 'Cuenca, Batangas, Luzon', 930, 'Moderate', '3-5 hours round trip', NULL, 'Forest trail and rocky outcrops above Taal Lake.', 'Known for the Rockies viewpoint above Taal Lake.', 'mt-maculot'),
(2, 'Mount Talamitam', 'Luzon', 'Batangas', 'Nasugbu, Batangas, Luzon', 630, 'Easy to Moderate', '2-4 hours round trip', NULL, 'Open grasslands with wide views.', 'A grassy hill hike close to Mt. Batulao.', 'mt-talamitam'),
(1, 'Mount Pulag', 'Luzon', 'Benguet', 'Benguet, Luzon', 2926, 'Moderate', '4-6 hours round trip', NULL, 'Grassland summit and mossy pine forest.', 'Famous for its sea of clouds and grassland summit.', 'mt-pulag'),
(1, 'Mount Ulap', 'Luzon', 'Benguet', 'Itogon, Benguet, Luzon', 1846, 'Moderate', '3-4 hours round trip', NULL, 'Open grassy ridges and pine trees.', 'A scenic ridge hike with wide views of the Cordillera.', 'mt-ulap'),
(2, 'Mount Arayat', 'Luzon', 'Pampanga', 'Arayat, Pampanga, Luzon', 1026, 'Moderate', '4-6 hours round trip', NULL, 'National park forest.', 'An isolated volcanic cone in Central Luzon.', 'mt-arayat'),
(2, 'Mount Guiting-Guiting', 'Luzon', 'Romblon', 'Sibuyan Island, Romblon (MIMAROPA)', 2058, 'Very Difficult', '3-4 days', NULL, 'Rich forest, rare species and razor-edge ridges.', 'A jagged, challenging peak on Sibuyan Island.', 'mt-guiting-guiting'),

(3, 'Mount Kapayas', 'Visayas', 'Cebu', 'Catmon, Cebu, Visayas', 783, 'Moderate', '4-6 hours round trip', NULL, 'Exposed slopes, forest and a limestone summit.', 'The second highest peak in Cebu.', 'mt-kapayas'),
(3, 'Mount Lantoy', 'Visayas', 'Cebu', 'Argao, Cebu, Visayas', NULL, 'Check local guidance', 'Ask your local guide', NULL, 'Green hills and farmland.', 'A green, rolling mountain area in southern Cebu.', 'mt-lantoy'),
(3, 'Osmena Peak', 'Visayas', 'Cebu', 'Dalaguete, Cebu, Visayas', 1013, 'Easy', '30-45 minutes', NULL, 'Rolling green ridges and sharp peaks.', 'The highest point in Cebu.', 'mt-osmena-peak'),
(3, 'Mount Madja-as', 'Visayas', 'Antique', 'Culasi, Antique, Visayas', 2117, 'Difficult', '2-3 days', NULL, 'Mossy forest and endemic species.', 'The highest peak in Panay.', 'mt-madja-as'),
(3, 'Mount Mandalagan', 'Visayas', 'Negros Occidental', 'Negros Occidental, Visayas', 1884, 'Moderate to Difficult', '1-2 days', NULL, 'Lush forest and waterfalls.', 'A mountain range in northern Negros.', 'mt-mandalagan'),
(3, 'Mount Kanlaon', 'Visayas', 'Negros Occidental / Negros Oriental', 'Canlaon City / Negros Island, Visayas', 2465, 'Difficult', '1-2 days (when open)', 'Active volcano; climbing has repeatedly been closed. Check PHIVOLCS and local advisories.', 'Active volcano with forest and crater features.', 'The highest peak on Negros Island.', 'mt-kanlaon'),
(3, 'Mount Talinis', 'Visayas', 'Negros Oriental', 'Valencia, Negros Oriental, Visayas', 1903, 'Moderate to Difficult', '1-2 days', NULL, 'Mossy forest and twin lakes.', 'A volcanic mountain above Dumaguete.', 'mt-talinis'),

(6, 'Mount Hibok-Hibok', 'Mindanao', 'Camiguin', 'Mambajao, Camiguin, Mindanao', 1332, 'Moderate to Difficult', '6-8 hours round trip', 'Active volcano; check PHIVOLCS alerts and local rules.', 'Tropical forest and volcanic terrain.', 'An active volcano on Camiguin.', 'mt-hibok-hibok'),
(6, 'Mount Malindang', 'Mindanao', 'Misamis Occidental', 'Misamis Occidental, Mindanao', 2404, 'Difficult', '2-3 days', NULL, 'Mossy forest in a natural park.', 'A tall mountain in a natural park.', 'mt-malindang'),
(4, 'Mount Apo', 'Mindanao', 'Davao del Sur / North Cotabato', 'Davao del Sur / North Cotabato, Mindanao', 2954, 'Difficult', '2-3 days', NULL, 'Mossy forest, solfataras and lakes.', 'The highest mountain in the Philippines, with rich biodiversity.', 'mt-apo'),
(6, 'Mount Candalaga', 'Mindanao', 'Davao de Oro', 'Maragusan, Davao de Oro, Mindanao', 2402, 'Difficult', '2-3 days', 'Sources list different elevations; confirm locally.', 'Montane rainforest with rare wildlife.', 'A demanding mountain sacred to the Mansaka people.', 'mt-candalaga'),
(5, 'Mount Dulang-dulang', 'Mindanao', 'Bukidnon', 'Lantapan, Bukidnon, Mindanao', 2938, 'Difficult', '2-3 days', NULL, 'Mossy forest in a natural park.', 'The second highest mountain in the Philippines.', 'mt-dulang-dulang'),
(5, 'Mount Kitanglad', 'Mindanao', 'Bukidnon', 'Bukidnon, Mindanao', 2899, 'Difficult', '2-3 days', NULL, 'Dense and cloud forest.', 'A tall range with a long forest trail.', 'mt-kitanglad'),
(6, 'Mount Hamiguitan', 'Mindanao', 'Davao Oriental', 'San Isidro, Davao Oriental, Mindanao', 1620, 'Difficult', '2-3 days', NULL, 'Pygmy forest and rare species.', 'A wildlife sanctuary with a unique pygmy forest.', 'mt-hamiguitan'),
(6, 'Mount Matutum', 'Mindanao', 'South Cotabato', 'Tupi / Polomolok, South Cotabato, Mindanao', 2286, 'Moderate to Difficult', '1-2 days', NULL, 'Forest trails and a crater.', 'A volcano overlooking General Santos.', 'mt-matutum');

INSERT INTO SAFETY_GUIDE (Guide_Title, Guide_Content, Category) VALUES
('Plan your route', 'Check trail conditions, weather, permits, and local registration rules before leaving.', 'Preparation'),
('Bring essentials', 'Carry water, food, a first-aid kit, navigation tools, and suitable clothing.', 'Equipment'),
('Respect nature', 'Pack out your trash, stay on marked trails, and avoid disturbing wildlife.', 'Environment');