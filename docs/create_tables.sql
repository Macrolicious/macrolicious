CREATE TABLE users (
    _id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE passwords (
  user_id INTEGER UNIQUE NOT NULL,
  hashed_psw VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE
);

CREATE TABLE profileInfo (
  user_id INTEGER UNIQUE NOT NULL,
  user_weight INTEGER,
  user_height VARCHAR(255),
  user_gender VARCHAR(255),
  user_activity VARCHAR(255),
);