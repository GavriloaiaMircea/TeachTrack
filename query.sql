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
	CONSTRAINT unique_student_name UNIQUE (first_name, last_name)
)

CREATE TABLE students_classes(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_id UUID REFERENCES students(id),
	class_id UUID REFERENCES classes(id)
)

CREATE TABLE grades(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_class_id UUID REFERENCES students_classes(id),
	grade FLOAT,
	date_added DATE,
	observation TEXT
)

CREATE TABLE attendance(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	student_class_id UUID REFERENCES students_classes(id),
	date DATE,
	status varchar(50)
)

-- Alter table students_classes to add ON DELETE CASCADE for class_id
ALTER TABLE students_classes
DROP CONSTRAINT students_classes_class_id_fkey,
ADD CONSTRAINT students_classes_class_id_fkey FOREIGN KEY (class_id)
REFERENCES classes(id) ON DELETE CASCADE;

-- Alter table grades to add ON DELETE CASCADE
ALTER TABLE grades
DROP CONSTRAINT grades_student_class_id_fkey,
ADD CONSTRAINT grades_student_class_id_fkey FOREIGN KEY (student_class_id)
REFERENCES students_classes(id) ON DELETE CASCADE;

-- Alter table attendance to add ON DELETE CASCADE
ALTER TABLE attendance
DROP CONSTRAINT attendance_student_class_id_fkey,
ADD CONSTRAINT attendance_student_class_id_fkey FOREIGN KEY (student_class_id)
REFERENCES students_classes(id) ON DELETE CASCADE;
