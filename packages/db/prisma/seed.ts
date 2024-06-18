const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Create roles
    await prisma.role.createMany({
      data: [
        { name: "Teacher" },
        { name: "Student" },
        { name: "Admin" }
      ]
    });

    // Retrieve roles
    const roles = await prisma.role.findMany();

    // Log roles
    console.log("Roles:", roles);

    // Check if roles are created successfully
    if (!roles || roles.length !== 3) {
      throw new Error("Failed to create roles or unexpected number of roles created.");
    }

    // Create users
    await prisma.user.createMany({
      data: [
        { username: "teacher1", email: "teacher1@example.com", password: "password", roleId: roles.find(role => role.name === "Teacher").id },
        { username: "teacher2", email: "teacher2@example.com", password: "password", roleId: roles.find(role => role.name === "Teacher").id },
        { username: "student1", email: "student1@example.com", password: "password", roleId: roles.find(role => role.name === "Student").id },
        { username: "student2", email: "student2@example.com", password: "password", roleId: roles.find(role => role.name === "Student").id },
        { username: "admin1", email: "admin1@example.com", password: "password", roleId: roles.find(role => role.name === "Admin").id }
      ]
    });

    // Retrieve created users
    const users = await prisma.user.findMany();

    // Create teachers
    const teachers = await prisma.teacher.createMany({
      data: users
        .filter(user => user.roleId === roles.find(role => role.name === "Teacher").id)
        .map(user => ({ userId: user.id }))
    });

    // Create classes
    const createdClasses = await prisma.cls.createMany({
      data: [
        { name: "Mathematics", teacherId: teachers[0] ? teachers[0].id : 1 }, // Assuming there's at least one teacher
        { name: "Science", teacherId: teachers[1] ? teachers[1].id : 1 } // Assuming there's at least two teachers
      ]
    });
    const classess = await prisma.cls.findMany();

    // Log roles

    console.log(classess)

    // Ensure classes is an array before using find function
    const classes = Array.isArray(classess) ? classess : [];
    console.log(classes)
    // Assuming all students belong to the same class (Mathematics)
    const classIdForStudents = classes.find(cls => cls.name === "Mathematics").id;

    // Create students with specified classId
    const students = await prisma.student.createMany({
      data: [
        { userId: users.find(user => user.username === "student1").id, classId: classIdForStudents },
        { userId: users.find(user => user.username === "student2").id, classId: classIdForStudents }
      ]
    });
    const createdStuents = await prisma.student.findMany();
    
    // Create registers
    const registers = await prisma.register.createMany({
      data: [
        { classId: classIdForStudents, teacherId: teachers[0] ? teachers[0].id : 1, date: new Date() },
        { classId: classIdForStudents, teacherId: teachers[0] ? teachers[0].id : 1, date: new Date() }
      ]
    });

    // Retrieve created registers
    const createdRegisters = await prisma.register.findMany();
    console.log(createdRegisters[0].id)
    // Create attendance records
    const attendance = await prisma.attendance.createMany({
      data: [
        { studentId: createdStuents[0].id, registerId: createdRegisters[0].id, status: "present" },
        { studentId: createdStuents[1].id, registerId: createdRegisters[0].id, status: "absent" },
        { studentId: createdStuents[0].id, registerId: createdRegisters[1].id, status: "present" },
        { studentId: createdStuents[1].id, registerId: createdRegisters[1].id, status: "present" }
      ]
    });

    console.log("Sample seed data created successfully.");
  } catch (error) {
    console.error("Error creating sample seed data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
