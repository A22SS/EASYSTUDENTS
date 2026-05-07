CREATE TABLE etudiants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  rfid_uid VARCHAR(20) UNIQUE NOT NULL,
  classe VARCHAR(50)
);

CREATE TABLE pensions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  etudiant_id INT,
  statut ENUM('payé','impayé','partiel') DEFAULT 'impayé',
  FOREIGN KEY (etudiant_id) REFERENCES etudiants(id)
);

CREATE TABLE horaires (
  id INT AUTO_INCREMENT PRIMARY KEY,
  etudiant_id INT,
  prochain_passage TIME,
  FOREIGN KEY (etudiant_id) REFERENCES etudiants(id)
);

CREATE TABLE passages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  etudiant_id INT,
  timestamp DATETIME DEFAULT NOW(),
  FOREIGN KEY (etudiant_id) REFERENCES etudiants(id)
);
