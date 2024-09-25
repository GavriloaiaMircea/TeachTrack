CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES users(id),
  class_name TEXT, 
  subject TEXT,
  school_year VARCHAR(9) CHECK (school_year ~ '^[0-9]{4}-[0-9]{4}$')
);

CREATE TABLE students(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name TEXT,
	last_name TEXT
)

CREATE TABLE students_classes(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_id UUID REFERENCES students(id),
	class_id UUID REFERENCES classes(id)
)

CREATE TABLE grades(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_class_id UUID REFERENCES students_classes(id),
	grade INTEGER,
	date_added DATE,
	observation TEXT
)

CREATE TABLE attendance(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_class_id UUID REFERENCES students_classes(id),
	date DATE,
	status varchar(50)
)